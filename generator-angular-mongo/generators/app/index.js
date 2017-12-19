'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const configHelper = require('../helpers/configHelper');
const core = require('./helpers/client/core.js');
const gulp = require('./helpers/client/gulp.js');
const packagemanagers = require('./helpers/client/package-managers.js');
const serverCore = require('./helpers/Server/serverCore.js');
const home = require('./helpers/client/home.js');
const login = require('./helpers/client/login.js');
const styles = require('./helpers/client/styles.js');
const navigation = require('./helpers/client/navigation.js');
const webpack = require('./helpers/client/webpack.js');
const publicpath = require('./helpers/client/public.js');
const components = require('./helpers/client/Feature/components.js');
const routes = require('./helpers/client/Feature/routes.js');
const modals = require('./helpers/client/Feature/modals.js');
const dataServices = require('./helpers/client/Feature/dataServices.js');

_.mixin(require('lodash-inflection'));
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the world-class ' +
        chalk.red('generator-yeoman-qload') +
        ' generator!'
      )
    );

    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Enter a name for the app',
      default: 'app',
      store: true
    },
    {
      type: 'input',
      name: 'destPath',
      message: 'Enter a Location for the app : ',
      default: 'C:/Source/GeneratedTest/',
      store: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {
    var person = require('../../../models/person.json');
    var organisation = require('../../../models/organisation.json');

    var models = [];

    models.push(person);
    models.push(organisation);



    var destPath = 'C:/Repos/Generated/';   


    //var model = require('./data.json');

    var features = require('./features.json');

    var appDetails = {
      appName: this.props.appName,
      appTitle: 'Generated App',
      data: models,
      _: _      
    };

    this.config.set('destPath', this.props.destPath);
    configHelper.saveOutputPath(this, this.props.destPath);
   // console.log('Saved destPath = ' + configHelper.getOutputPath(this));

    var destPath = this.props.destPath;
    var destClientPath = destPath + '/js/client/';
    var destServerPath = destPath + '/Src/Server/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destHomePath = destFeaturesPath + '/Home/';
    var destLoginPath = destFeaturesPath + 'Login/';

    var srcClientPath = './Client/';
    var srcCorePath = srcClientPath + 'Core/';
    var srcdataServicesorePath = srcClientPath + 'Core/';
    var srcWebpackPath = srcClientPath + 'Webpack/';
    var srcPackageManagersPath = srcClientPath + 'PackageManagers/';
    var srcGulpPath = srcClientPath + 'Gulp/';
    var srcFeaturesPath = srcClientPath + 'Features/';
    var srcDataServicesPath = srcClientPath + 'DataServices/';
    var srcNavigationPath = srcFeaturesPath + 'Navigation/';
    var srcHomePath = srcFeaturesPath + 'Home/';

    var srcLoginPath = srcFeaturesPath + 'Login/';
    var srcStylesPath = srcClientPath + 'Styles/';


    var srcServerPath = './Server/';

    
    packagemanagers.generate(appDetails, this, srcPackageManagersPath, destPath);
    // Client
    core.generate(appDetails, this, srcCorePath, destClientPath);
    //styles.generate(appDetails, this, srcStylesPath, srcStylesPath + '/Styles/');
    // // Core Features
    home.generate(appDetails, this, srcHomePath, destHomePath);
    //login.generate(appDetails, this, srcLoginPath, destLoginPath);



    navigation.generate(appDetails, this, srcNavigationPath, destHomePath);

    publicpath.generate(appDetails, this, srcClientPath, destPath);

    webpack.generate(appDetails, this, srcWebpackPath, destPath);


   
   
        


     
    

      for (var key in models) {  
        
        var data = {
          appName: this.props.appName,
          name: models[key].title,
          useAuth0: false,
          plural: _.pluralize(models[key].title),
          camelCase: _.camelCase(models[key].title),
          camelCasePlural: _.pluralize(_.camelCase(models[key].title)),
          modalServiceName: _.pluralize(models[key].title) + 'ModelService',
          serviceName: _.pluralize(models[key].title) + 'DataService',
          listComponentTemplateUrl: _.pluralize(models[key].title) + 'ListTemplate', 
          model: models[key],   
          features: features,
          data: models,
          _: _
        };
    
           var keyName = data.data[key].plural


            //features
           components.generate(data, this, srcFeaturesPath, destFeaturesPath);  
           
           dataServices.generate(data, this, srcDataServicesPath, destFeaturesPath);

           routes.generate(data, this, srcFeaturesPath, destFeaturesPath);
      }







 modals.generate(data, this, srcFeaturesPath, destFeaturesPath);      


 


  }
};
