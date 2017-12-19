const copier = require('../../templateCopier.js');
const _ = require('lodash');
module.exports.generate = function (data, runner, _srcPath, destPath) {


  console.log(_srcPath);
  
  copier.copyTpl(runner, _srcPath +  '/feature/_routes.js', destPath + _.camelCase(data.plural) + '/routes.js', data);

};
