const copier = require('../../templateCopier.js');
const _ = require('lodash');
module.exports.generate = function (data, runner, _srcPath, destPath) {

  var _srcComponentsPath = _srcPath + 'Feature/Components/';
  var _srcListComponentsPath = _srcComponentsPath + '/List/';
  var _srcDetailsPath = _srcComponentsPath + '/Details/';
  var _srcHomePath = _srcComponentsPath + '/Home/';
  var _srcFieldsPath = _srcComponentsPath + '/Fields/';


  var descComponentsPath = destPath + '/' +  data.model.plural +'/';
  var destListComponentsPath = descComponentsPath + 'List/';
  var destDetailsComponentsPath = descComponentsPath + 'Details/';
  var destHomeComponentsPath = descComponentsPath + 'Home/';
  var destFieldsComponentsPath = descComponentsPath + 'Fields/';

  console.log(destPath);

  copier.copyTpl(runner, _srcListComponentsPath + '_listComponent.js', destListComponentsPath +  data.model.plural + 'List.js', data);
  copier.copyTpl(runner, _srcListComponentsPath + '_listComponentTemplate.html', destListComponentsPath + _.pluralize(_.camelCase(data.name)) + 'ListTemplate.html', data);

  // Details
  copier.copyTpl(runner, _srcDetailsPath + '_details.js', destDetailsComponentsPath + data.camelCase + 'Details.js', data);
  copier.copyTpl(runner, _srcDetailsPath + '_detailsTemplate.html', destDetailsComponentsPath + data.camelCase + 'DetailsTemplate.html', data);

  // Home
  copier.copyTpl(runner, _srcHomePath + '_home.js', destHomeComponentsPath + _.pluralize(_.camelCase(data.name)) + 'Home.js', data);
  copier.copyTpl(runner, _srcHomePath + '_homeTemplate.html', destHomeComponentsPath + _.pluralize(_.camelCase(data.name)) + 'HomeTemplate.html', data);

   // Feilds
  copier.copyTpl(runner, _srcFieldsPath + '_fields.js', destFieldsComponentsPath + _.camelCase(data.name) + 'Fields.js', data);
  copier.copyTpl(runner, _srcFieldsPath + '_fieldsTemplate.html', destFieldsComponentsPath + _.camelCase(data.name) + 'FieldsTemplate.html', data);

};
