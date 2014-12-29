# ASAP

**A Sassy Angular Plate**

Is the Bee's Knees of Angular starter kits. It's based off [Modular Design](http://en.wikipedia.org/wiki/Modular_design) – with [SMACSS](http://smacss.com/) at its core. It incorporates other open-source projects including Bootstrap, jQuery, and Animate.css which are maintained via BowerJS. A GruntJS configuration has also been implemented and provides common build processes including SASS, Compass, Compile, CSSMin, HTMLHint, Concatenation, Uglify, Watch and more.

## Project Dependencies

1. [node](http://nodejs.org/): follow the link and click the button
2. [ruby](https://www.ruby-lang.org/en/installation/): this comes pre-installed on macs
3. `gem install sass` & `gem install compass`
4. `npm install -g grunt-cli`: installs grunt and grunt-cli globally
5. `npm install -g bower`: installs bower globally

**Note:**

* Depending on your permissions setup, you might need to prefix each command with `sudo` (use with caution)
* All user level installs: `cd ~` will put you at your user level

## Getting Started

1. Fork & clone the git repo, or download zip file directly.
2. In terminal/Command line, navigate to the root directory (where Gruntfile.js is located)
	* install node modules: `npm install`
	* install bower packages: `bower install`
3. In the same directory run the following command
	* `grunt serve`: runs all dev task
	* `grunt test`: runs all jasmine unit tests
  * `grunt build`: runs build tasks that minify & concat code and outputs the files to the `/dist` directory.


## Directory Structure

**Note:**

  * Again, this project is based off [Modular Design](http://en.wikipedia.org/wiki/Modular_design).
  * Files are grouped by feature rather than type, making it easier to find files related to a feature, which can help speed up the develoment cycle and minimize confusion.

```
  + app/
  |
  | + bower_components/                   # groups 3rd party resources
  |   |
  |   | + angular/
  |   |   |-- angular.js
  |   |   |-- ...                         # more...
  |
  | + font/                               # custom font assets
  |   |-- config.json
  |   |-- asap-icons
  |   |-- asap-fonts
  |
  | + js/
  |   |
  |   | + globals/                        # global services (OAuth, ...)
  |   |   |
  |   |   + ...
  |   |
  |   | + modules/                        # also known as components (i.e. modals, dropdowns, button...)
  |   |   |
  |   |   | + modals/
  |   |   |   |-- directive.modal.js
  |   |   |   |-- factory.modal.js
  |   |
  |   | + views/
  |   |   |
  |   |   | + welcome/
  |   |   |   |-- controller.welcome.js
  |   |   |   |-- ...                     # factory/service files
  |   |   |
  |   |   | + dashboard/
  |   |   |   |-- controller.dashboard.js
  |   |   |
  |   |   + app.js                        # set up Angular module, app dependencies, and routes for your application
  |
  | + sass/
  |   |
  |   | + base/                           # reset, typography, site-wide
  |   |   |-- _index.sass                 # imports for all base styles
  |   |   |-- _base.sass                  # base styles
  |   |   |-- _normalize.scss             # normalize v3.0.1
  |   |   |-- _reset.sass                 # reset v0.0.1
  |   |
  |   | + layout/                         # major components, e.g., header, footer etc.
  |   |   |-- _index.sass                 # imports for all layout styles
  |   |   |-- _grid.sass                  # responsive grid system
  |   |   |-- _header.sass                # global header
  |   |   |-- _footer.sass                # global footer
  |   |
  |   | + modules/                        # minor components, e.g., buttons, widgets etc.
  |   |   |-- _index.sass                 # imports for all modules
  |   |   |-- _modal.sass                 # modal styles
  |   |
  |   | + states/                         # js-based classes, alternative states e.g., success or error state
  |   |   |-- _index.sass                 # imports for all state styles
  |   |   |-- _states.sass                # state rules
  |   |   |-- _print.sass                 # print styles
  |   |   |-- _touch.sass                 # touch styles
  |   |
  |   | + themes/                         # (optional) separate theme files
  |   |   |-- theme.sass                  # rename to appropriate theme name
  |   |
  |   | + views/                          # (optional) separate view files
  |   |   |-- _index.sass                 # imports for all views styles
  |   |   |-- _login.sass                 # specific view styles
  |   |   |-- _dashboard.sass             # specific view styles
  |   |   |-- ...                         # more...
  |   |
  |   | + utilities/                      # non-CSS outputs (i.e. mixins, variables) & non-modules
  |   |   |-- _index.sass                 # imports for all mixins + global project variables
  |   |   |-- _fonts.sass                 # @font-face mixins
  |   |   |-- _functions.sass             # ems to rems conversion, etc.
  |   |   |-- _global.sass                # global variables
  |   |   |-- _helpers.sass               # placeholder helper classes
  |   |   |-- _mixins.sass                # media queries, CSS3, etc.
  |   |   |-- _lib.sass                   # imports for third party styles
  |   |   |-- + lib/                      # third party styles
  |   |       | _pesticide.scss           # CSS pesticide
  |   |
  |   |   + ie.sass                       # IE specific Sass file
  |   |   + styles.sass                   # primary Sass file
  |   |   + _shame.sass                   # because hacks happen
  |
  | + includes/
  |   |
  |   | + modules/
  |   |   |-- modal.html
  |   |
  |   | + views/
  |   |   |
  |   |   | + info/                       # initial view
  |   |   |   |-- partial.info.html
  |   |   |   |-- ...
  |   |   |
  |   |   | + dashboard/                  # dashboard - main view
  |   |   |   |-- partial.dashboard.html
  |   |
  |   |   + header.html                   # global header
  |   |   + footer.html                   # global footer
  |   |
  |   + index.html                        # application container
  |
  + node_modules/
  + bower.json                            # use to install third party dependencies
  + package.json                          # use to install grunt dependencies
  + Gruntfile.js                          # used to configure your grunt tasks
  + README.md                             # used to shared helpful information about the project
  + .gitignore                            # used to ignore certain files and/or directories when push to remote repo
  + .bowerrc                              # used to change the install location of your bower_components)
  + config.rb                             # Compass configuration file
  + Gruntfile.js                          # Grunt configuration & tasks
  + package.json                          # Grunt metadata & dependencies
```


## Styles Guides

A collection of methods and techniques joined with best practices, covering a multitude of different languages.

[Styleguides](https://github.com/nauerster/styleguides)


## Credits

ASAP is based on the amazing work of the following rockstars & projects.

- [AngularJS](https://angularjs.org/)
- [Sass 3.3](http://sass-lang.com/)
- [Scalable and Modular Architecture for CSS](http://smacss.com/book) (<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>)
- [BEM Crew](https://bem.info/)
- [Mina Markham](https://github.com/minamarkham) and her [Sassy Starter](https://github.com/minamarkham/sassy-starter)
- [Lemanz](https://github.com/grayghostvisuals/lemanz)
- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Normalise.css](http://necolas.github.com/normalize.css/)
- [Jake Archibald](http://jakearchibald.github.com/sass-ie/) for the Sass IE implementation
- [Jen Simmons' Design Starterkit](https://github.com/jensimmons/designstarterkit)
