var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function (runner, basepath, data) {



  var featureFolderName = basepath + '/' + data.plural + '/';
  data.interfaceName = 'I' + data.plural + 'Repo';
  data.repositoryName = data.plural + 'Repo';


  var getViewModelPropertyGetFields = function () {
    var returnValue = "";
    for (var key in data.model.properties) {
      for (var subkey in data.model.properties[key]) {
        returnValue += '.' + data.getNameFromKey(key) + '= ' + data.camelCase + '.' + data.getNameFromKey(key) + ',\n';
      }
    }
    // remove last commma and add closing curley braces
    returnValue = returnValue.replace(/,\s*$/, "") + '';

    return returnValue;
  }

  var getObjectToViewModelFieldMappings = function () {
    var returnValue = "";
    for (var key in data.model.properties) {
      for (var subkey in data.model.properties[key]) {
        returnValue += data.camelCase + '.' + data.getNameFromKey(key) + '.' + data.getNameFromKey(key) + '\n';
      }
    }
 
     return returnValue;
  }

  data.GetViewModelFieldMappings = getViewModelPropertyGetFields;
  data.GetObjectToViewModelFieldMappings = getObjectToViewModelFieldMappings;



  ///////////////////////////////
  //Repository
  runner.fs.copyTpl(
    runner.templatePath('ViewModel/_repository.vb'),
    runner.destinationPath(featureFolderName + data.repositoryName + '.vb'), {
      data: data
    }
  );


};