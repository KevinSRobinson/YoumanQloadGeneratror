var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


const webapi = require("./webapi.js");

const mvpEdit = require("./edit.js");
const mvpList = require("./list.js");

const mvpDetails = require("./details.js");
const mvpMasterDetails = require("./masterDetails.js");
const viewModel = require("./viewModel.js");
const repository = require("./repository.js");
const add = require("./add.js");
;

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);


    this.argument('includePresenter', {
      type: Boolean,
      required: false,
      default: false
    })
    // Next, add your custom code
    this.log('classname (arg) : ' + this.options.classname)
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-yeoman-qload') + ' generator!'
    ));

    var getchoice = function(name, checked){
        return {
          name: name,
          value: name,
          checked: checked
        }
    }

    const prompts = [{
        type: 'input',
        name: 'featureName',
        message: 'Enter a name for the feature',
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Select Features',
        choices: [
          getchoice('Repository', true),
          getchoice('ListPresenter', true),
          {
            name: 'ViewModel',
            value: 'ViewModel',
            checked: true
          },
          {
            name: 'Add',
            value: 'Add',
            checked: false
          },
          {
            name: 'Details',
            value: 'Details',
            checked: false
          },
          {
            name: 'Edit',
            value: 'Edit',
            checked: false
          },
          {
            name: 'List',
            value: 'List',
            checked: true
          },
          {
            name: 'MasterDeails',
            value: 'MasterDeails',
            checked: true
          },
          {
            name: 'Create',
            value: 'Create',
            checked: false
          },
          {
            name: 'WebApi',
            value: 'WebApi',
            checked: false
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props)

      this.log('Details = ' + _.includes(props.features, 'Details'));
      this.log('Edit = ' + _.includes(props.features, 'Edit'));
      this.log('List = ' + _.includes(props.features, 'List'));
      this.log('MasterDeails = ' + _.includes(props.features, 'MasterDeails'));
      this.log('Create = ' + _.includes(props.features, 'Create'));

      this.props = props;
    });
  }

  writing() {


    var model = require('./models/settings.json');


    var data = {
      appName: this.props.appName,
      name: model.title,
      plural: _.pluralize(model.title),
      camelCase: _.camelCase(model.title),
      camelCasePlural: _.pluralize(_.camelCase(model.title)),
      model: model,
      viewModelName: _.pluralize(model.title) + 'ViewModel',
      _: _,
      getNameFromKey: function (key) {
        var sc = _.startCase(key)
        var name = sc.replace(" ", "").replace(" ", "")
        return name
      }
    };

    var basepath = "C:/NewWork/Projects/Qload/FPM-Qload/DevBranch-InvoiceQueries/Qload.Winforms/Settings/";

    var options = this.props.features
    var propertySelected = function(options, property){
        return _.includes(options, property)
    }

    if (propertySelected(options, 'WebApi')) { 
      webapi.generate(this, basepath, data);
    }
    
    if (propertySelected(options, 'List')) {
      mvpList.generate(this, basepath, data);
    }

    if (_.includes(this.props.features, 'Add')) {
      add.generate(this, basepath, data);
    }

    if (_.includes(this.props.features, 'Details')) {
      mvpDetails.generate(this, basepath);
    }

    if (_.includes(this.props.features, 'Edit')) {
      mvpEdit.generate(this, basepath, data);
    }

    if (propertySelected(options, 'MasterDetails')) {
      mvpMasterDetails.generate(this, basepath, data);
    }

    if (_.includes(this.props.features, 'ViewModel')) {
      viewModel.generate(this, basepath, data);
    }

    if (_.includes(this.props.features, 'Repository')) {
      repository.generate(this, basepath, data);
    }



  }
  bower() {
    // var bowerJson = {
    //   name: 'myapp',
    //   licence: 'mit',
    //   dependancies: {}
    // };

    //bowerJson.dependancies['angular'] = "1.5.7";

    //this.fs.writeJSON('Generated/Contacts/List/bower.json', bowerJson);
  }

  install() {
    //this.installDependencies();
  }
};