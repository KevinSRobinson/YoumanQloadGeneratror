const copier = require('../../templateCopier.js');
const _ = require('lodash');
module.exports.generate = function (data, runner, _srcPath, destPath) {

  copier.copyTpl(runner, _srcPath + '_dataServices.js', destPath + '/' + data.plural + '/' + data.name  + 'dataService.js', data);

};
