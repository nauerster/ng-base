# Server Details

Include any server side setup documentation here.


## Table of Content

1. [System Credentials](#system-credentials)
1. [System Users](#system-users)
1. [S3 Details](#s3-details)
1. [Scripts](#scripts)
1. [Environment Dependancies](#environment-dependancies)
1. [Resources & Links](#resources-&-links)

> Warning: If publishing to a public repo, this may not be the appropriate domain for furnishing such information. 


#### System Credentials:

```sh

	Created		: yyyy/mm/dd
	Name			: app-name
	IP				: 00.00.0.000
	User			: admin
	Password	: 1234

```


#### System Users:

```sh

	Name			: devadmin
	Password	: 1234

```


#### S3 Details:

```sh

	Bucket		: bucket-name
	Access		: access-key
	Secret		: secret-key

```


#### Scripts:

```sh

	Start Forever		: $ PORT=8080 forever start -al forever.log -ao out.log -ae err.log bin/www

	Stop Forever		: $ forever stop bin/www

```


#### Environment Dependancies:

> By default: You will be logged in at the user level (safe level initially logged in at). Most of the command's below require root level access. You can accomplish this by doing one of the following...


a. Run: sudo -i or sudo su
		- Puts you at the root user level

b. Prepend sudo before each command


```sh

	// Install Node and NPM
		$ sudo yum install nodejs npm --enablerepo=epel


	// Install Git

		`If using Fedora`
		$ sudo yum install git

		`If using Ubuntu`
		$ sudo apt-get install git


	// Install SASS (CSS Pre-Processor)
		$ sudo gem install sass


	// Install ForeverJS (A simple CLI tool for ensuring that a given script runs continuously)
	$ sudo npm install -g forever


```


#### Resources & Links:


- [http://www.bennadel.com/blog/2321-how-i-got-node-js-running-on-a-linux-micro-instance-using-amazon-ec2.htm](http://www.bennadel.com/blog/2321-how-i-got-node-js-running-on-a-linux-micro-instance-using-amazon-ec2.htm)

- [http://www.lauradhamilton.com/how-to-set-up-a-nodejs-web-server-on-amazon-ec2](http://www.lauradhamilton.com/how-to-set-up-a-nodejs-web-server-on-amazon-ec2)

- [https://github.com/foreverjs/forever](https://github.com/foreverjs/forever)

- [http://www.therightcode.net/deploy-nodejs-application-using-shipit/](http://www.therightcode.net/deploy-nodejs-application-using-shipit/)

- [http://stackoverflow.com/questions/22312671/node-js-setting-environment-variables](http://stackoverflow.com/questions/22312671/node-js-setting-environment-variables)

- [http://iws.io/hosting-a-nodejs-express-application-on-amazon-web-services-ec2/](http://iws.io/hosting-a-nodejs-express-application-on-amazon-web-services-ec2/)

- [http://stackoverflow.com/questions/19337258/how-to-give-file-permission-to-a-specific-user-in-a-group](http://stackoverflow.com/questions/19337258/how-to-give-file-permission-to-a-specific-user-in-a-group)

