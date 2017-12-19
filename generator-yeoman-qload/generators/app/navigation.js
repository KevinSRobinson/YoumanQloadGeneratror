const copier = require('../templateCopier.js');

module.exports.generate = function (data, runner, _srcPath, destPath) {

  var _srcNavigationComponentsPath = _srcPath;

  var destNavigationComponentsPath = destPath + '/Components/Navigation/';

  copier.copyTpl(runner, _srcNavigationComponentsPath + '_mainLayout.js', destNavigationComponentsPath + 'mainLayout.js', data);
  copier.copyTpl(runner, _srcNavigationComponentsPath + '_mainLayoutTemplate.html', destNavigationComponentsPath + 'mainLayoutTemplate.html', data);

};
