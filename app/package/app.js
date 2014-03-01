/*
 //Supplemental CSS
 ['http://fonts.googleapis.com/css?family=Lato:100,300,400,700|Inder',false,'','css',false] ,
*/

/*
//remove
jQuery validate
jQuery color ?
underscore
jQuery-serialize

//no dependencies and non depending on
flying focus
showdown

*/

/*global require, firebase, OYM, Utils*/

//primary application
require('external/firebase');
require('external/emberfire-latest');
require('extensions/utils');
require('onyourmark');
require('router');
require('store');

require('models/*');
require('modules/*');
require('extensions/selectable');
require('extensions/*');

//signify we're done loading.  deferReadiness() is called in app.js
OYM.advanceReadiness();