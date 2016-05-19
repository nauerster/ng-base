# ngBase

An opinionated kickerstarter for AngularJS [1.x]. Based off [Modular Design](http://en.wikipedia.org/wiki/Modular_design) – with [SMACSS](http://smacss.com/) at its core. It incorporates other open-source projects which can be maintained via BowerJS or NPM. A GruntJS configuration has also been implemented and provides common build processes including SASS, Compass, Compile, CSSMin, HTMLHint, Concatenation, Uglify, Watch and more.


## Table of Content

1. [Getting Started](#getting-started)
1. [Fire It Up](#fire-it-up)
1. [Architecture](#architecture)
1. [Todo](#todo)



## Getting Started

#### Step 1: Install Dependencies

1. [node](http://nodejs.org/): follow the link and click the button
2. [ruby](https://www.ruby-lang.org/en/installation/): this comes pre-installed on macs
3. `gem install sass` & `gem install compass`
4. `npm install -g grunt-cli`: installs grunt and grunt-cli globally
5. `npm install -g bower`: installs bower globally


> * Depending on your permissions setup, you might need to prefix each command with `sudo` (use with caution)
> * All user level installs: `cd ~` will put you at your user level


#### Step 2: Clone Project

You'll need to clone this repository so that its on your local computer.

```sh
	$ cd /path/to/your/repo
	$ git clone git@github.com:nauerster/ng-base.git (SSH Method)
	$ git clone https://github.com/nauerster/ng-base.git (HTTPS Method)

```

#### Git Commnands:

```sh
	$ git add -A                          : stages all files to commit (locally)
	$ git commit -am "Commit message"     : commits all files with a description
	$ git push origin {branch name}       : push committed files to repository
	$ git branch {new branch}             : creates a new working branch
	$ git checkout branch                 : switches you to your new branch

```


#### Installation:

> Wait! Did you install the aforementioned dependencies?

In Terminal/Command Line, navigate to the root directory (same level as package.json & bower.json)

```sh 

	$ npm install         : installs node modules
	$ bower install       : installs vendor dependencies

```

## Fire It Up:

In the same directory run the following commands:

```sh

	$ grunt serve     : kick's off the 'watch' task. The watch task will continue to run until you quit it (ctrl + c).
	$ node bin/www    : start's the node server. This command need's to run at the server level (e.g., src/server).
	$ grunt build     : will run all the same dev tasks, but will compress our css file for final release.

```

## Directory Structure

> - Again, this project is based off [Modular Design](http://en.wikipedia.org/wiki/Modular_design).
> - Files are grouped by feature rather than type, making it easier to find files related to a feature, which can help speed up the develoment cycle and minimize confusion.


## Architecture


#### ToDo

- [] Import latestet sass-base
- [] Add Project Audit


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
