'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var EimBasicGenerator = module.exports = function EimBasicGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(EimBasicGenerator, yeoman.generators.Base);

EimBasicGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      type    : 'input',
      name    : 'siteName',
      message : 'What do you want to call the site?',
      default : 'MySite'
    },
    {
      type    : 'confirm',
      name    : 'loadBootstrap',
      message : 'Should we load Bootstrap?',
      default : true
    },
    {
      type    : 'input',
      name    : 'assetsDirectory',
      message : 'Where should we complile your assets (js/css)?',
      default : 'assets'
    }
  ];

  this.prompt(prompts, function (props) {
    this.siteName        = props.siteName;
    this.loadBootstrap   = props.loadBootstrap;
    this.assetsDirectory = checkForSlash(props.assetsDirectory);

    cb();
  }.bind(this));

  function checkForSlash(val) {
    console.log(val);
    var lastCharIndex = val.length - 1;
    if(val.charAt(lastCharIndex) == '/') {
      val = val.substr(0, lastCharIndex);
    }
    return val;
  }
};

EimBasicGenerator.prototype.app = function app() {
  var variablesVersion = (this.loadBootstrap) ? 'variables-bootstrap.less' : 'variables-plain.less';
  this.mkdir('src');
  this.mkdir('src/js');
  this.mkdir('src/less');
  this.mkdir('src/vendor');
  this.mkdir(this.assetsDirectory);
  this.mkdir(this.assetsDirectory + '/js');
  this.mkdir(this.assetsDirectory + '/css');
  this.mkdir(this.assetsDirectory + '/fonts');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
  this.template('Gruntfile.js');

  this.copy('less/app.less', 'src/less/app.less');
  this.copy('less/' + variablesVersion, 'src/less/_variables.less');
  this.copy('less/helpers.less', 'src/less/_helpers.less');
  this.copy('less/template.less', 'src/less/_template.less');
  this.copy('less/ui.less', 'src/less/_ui.less');
  this.copy('js/app.js', 'src/js/app.js');
};
