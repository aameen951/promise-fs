const fs = require("fs");

function realpath(path, options)
{
  return new Promise((resolve, reject)=>{
    fs.realpath(path, options, (err, resolvedPath) => {
      if(err)reject(err);
      else resolve(resolvedPath);
    });
  });
}
function writeFile(file, data, options)
{
  return new Promise((resolve, reject)=>{
    fs.writeFile(file, data, options, (err) => {
      if(err)reject(err);
      else resolve();
    });
  });
}
function readFile(path, options)
{
  return new Promise((resolve, reject)=>{
    fs.readFile(path, options, (err, data)=>{
      if(err)reject(err);
      else resolve(data);
    });
  });
}
function mkdir(path, options)
{
  return new Promise((resolve, reject)=>{
    fs.mkdir(path, options, (err) => {
      if(err)reject(err);
      else resolve();
    });
  });
}
function readdir(path, options){
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err, files) => {
      if(err)reject(err);
      else resolve(files);
    });
  });
}
async function ensureDirExists(path, options)
{
  try
  {
    await mkdir(path, options);
  }
  catch(e)
  {
    if(e.code !== 'EEXIST') 
      throw e;
  }
}
module.exports = {
  realpath,
  readFile,
  writeFile,
  mkdir,
  readdir,
  ensureDirExists,
};