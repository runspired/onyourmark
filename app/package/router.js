/*global WDD*/
OYM.Router.map(function () {
    "use strict";

    this.route('session');
    this.route('login');
    this.route('signup');
    this.route('welcome', {path : '/'});
    this.resource('document', {path : '/documents'}, function () {
        this.route('single', { path : '/:document_id' });
    });

});