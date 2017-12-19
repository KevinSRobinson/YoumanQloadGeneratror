const copier = require('../../templateCopier.js');
const _ = require('lodash');

module.exports.generate = function (data, runner, srcPath, destPath) {
 
  var _srcModalServicesPath = srcPath + '/Feature/Modals/Services/';
  var _srcCreateUpdatePath = srcPath +  '/Feature/Modals/CreateUpdate/';
  var _srcDeletePath = srcPath + '/Feature/Modals/Delete/';

  var destPath = destPath + '/' + data.plural + '/Modals/';


  // Names
  var modalServicesName = 'Services';
  var createUpdateName = 'createUpdate' + data.name + 'Modal';
  var deleteName = 'delete' + data.name + 'Modal';


  // Source Files
  var _srcModalServicesFilePath = _srcModalServicesPath + '_modalServices.js';
  var _srcCreateUpdateControllerFilePath = _srcCreateUpdatePath + '_createUpdateModalController.js';
  var _srcCreateUpdateTemplateFilePath = _srcCreateUpdatePath + '_createUpdateModalTempate.html';
  var _srcDeleteControllerFilePath = _srcDeletePath + '_deleteModalController.js';
  var _srcDeleteTemplateFilePath = _srcDeletePath + '_deleteModalTempalte.html';

 

  // Destination Fiels
  var destDeleteControllerFilePath = destPath + 'Delete/' + deleteName + 'Controller.js';
  var destDeleteTempalteFilePath = destPath + 'Delete/' + deleteName + 'ModalTempalte.html';

  var destModalServicesFilePath = destPath + 'Services/' + modalServicesName + 'Controller.js';  

  var destCreateUpdateControllerFilePath = destPath + 'CreateUpdate/createUpdate' + data.name + 'Controller.js';
  var destCreateUpdateTempalteFilePath = destPath + 'CreateUpdate/createUpdate' + data.name + 'ModalTemplate.html';





  console.log('destDeleteControllerFilePath = ' + destDeleteControllerFilePath);
  console.log('destDeleteTempalteFilePath = ' + destDeleteTempalteFilePath);
  console.log('destCreateUpdateControllerFilePath = ' + destCreateUpdateControllerFilePath);
  console.log('destCreateUpdateTempalteFilePath = ' + destCreateUpdateTempalteFilePath);


  // Modal Services
  copier.copyTpl(runner, _srcModalServicesFilePath, destModalServicesFilePath, data);

  // Copy Tempaltes
  copier.copyTpl(runner, _srcCreateUpdateControllerFilePath, destCreateUpdateControllerFilePath, data);
  copier.copyTpl(runner, _srcCreateUpdateTemplateFilePath, destCreateUpdateTempalteFilePath, data);

  // Copy Tempaltes
   copier.copyTpl(runner, _srcDeleteControllerFilePath, destDeleteControllerFilePath, data);
   copier.copyTpl(runner, _srcDeleteTemplateFilePath, destDeleteTempalteFilePath, data);


  // var templates = function(){

  //   function getPaths(){

  //   }

  //   return {
  //     getPaths: getPaths
  //   }
  // }
};
