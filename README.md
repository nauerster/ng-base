# ngBase

**Angular Base 1.0**

An Angular starter kits. Based off [Modular Design](http://en.wikipedia.org/wiki/Modular_design) – with [SMACSS](http://smacss.com/) at its core. It incorporates other open-source projects including Bootstrap, jQuery, and Animate.css which are maintained via BowerJS. A GruntJS configuration has also been implemented and provides common build processes including SASS, Compass, Compile, CSSMin, HTMLHint, Concatenation, Uglify, Watch and more.

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


#### ToDo

- [] Import latestet sass-base
- [] Add Project Audit


## Styles Guides

A collection of methods and techniques joined with best practices, covering a multitude of different languages.

[Styleguides](https://github.com/nauerster/styleguides)


## Credits

Project based on the amazing work of the following rockstars & projects.

- [AngularJS](https://angularjs.org/)
- [Sass 3.3](http://sass-lang.com/)
- [Scalable and Modular Architecture for CSS](http://smacss.com/book) (<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>)
- [BEM Crew](https://bem.info/)
- [John Papa](https://github.com/johnpapa) and his [Angular Styleguide](https://github.com/johnpapa/angular-styleguide)
- [Todd Motto](https://github.com/toddmotto) and his [Angular Styleguide](https://github.com/toddmotto/angularjs-styleguide)
- [Mina Markham](https://github.com/minamarkham) and her [Sassy Starter](https://github.com/minamarkham/sassy-starter)
- [Lemanz](https://github.com/grayghostvisuals/lemanz)
- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Normalise.css](http://necolas.github.com/normalize.css/)
- [Jake Archibald](http://jakearchibald.github.com/sass-ie/) for the Sass IE implementation
- [Jen Simmons' Design Starterkit](https://github.com/jensimmons/designstarterkit)
