var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));
const copier = require('./templateCopier.js');

module.exports.generate = function(runner, basepath, data) {

  var featureFolderName = basepath + data.name + 's/';
  var interfaceName = 'I' + data.plural + 'smasterDetailsView';
  var presenterName = data.name  + 'smasterDetailsPresenter';
  var userControlName = 'uc' + data.name  + 'smasterDetailsView';
  
  var _srcCodebehindFile = 'MVP/masterDetails/UserControl/_UcMasterDetails.vb'
  var _destCodebehindFile = featureFolderName + '/MasterDetails/' + userControlName + '.vb'

  var _srcDesignerFile = 'MVP/masterDetails/UserControl/_UcMasterDetails.Designer.vb'
  var _destDesignerFile = featureFolderName + '/MasterDetails/' + userControlName + '.Designer.vb'
  
  var _srcInterfaceFile = 'MVP/masterDetails/_IMasterDetailsView.vb'
  var _destInterfaceFile = featureFolderName + '/MasterDetails/' + interfaceName + '.vb'

  console.log("Master")
  console.log("----------------")

  //copy the user control
  copier.copyTpl(runner,_srcCodebehindFile, _destCodebehindFile, data);
  copier.copyTpl(runner,_srcDesignerFile, _destDesignerFile, data);

  //copy the interface
  copier.copyTpl(runner,_srcInterfaceFile, _destInterfaceFile, data);



}
