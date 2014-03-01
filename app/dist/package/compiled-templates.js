Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">OnYourMark</a>\n    </div>\n</nav>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "growl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["liveNotes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"noteEntry\">\n    <label class=\"textarea\" ");
  hashContexts = {'for': depth0};
  hashTypes = {'for': "ID"};
  options = {hash:{
    'for': ("view.name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.labelText", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Nexus.helpText", {hash:{
    'value': ("view.helpText")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </label>\n    ");
  hashContexts = {'name': depth0,'class': depth0,'value': depth0};
  hashTypes = {'name': "ID",'class': "STRING",'value': "ID"};
  options = {hash:{
    'name': ("view.name"),
    'class': ("clearfix"),
    'value': ("view.content")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n</div>\n<div class=\"notePreview markdown\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.markdown || depth0.markdown),stack1 ? stack1.call(depth0, "view.content", options) : helperMissing.call(depth0, "markdown", "view.content", options))));
  data.buffer.push("\n</div>\n<div class=\"clearAll\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Login</h3>\n<div class=\"container\">\n    <form class=\"form-inline\" role=\"form\">\n        <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n    </form>\n</div>\n\n<h3>Register</h3>\n<div class=\"container\">\n    <form class=\"form-inline\" role=\"form\">\n        <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register</button>\n    </form>\n</div>");
  
});

Ember.TEMPLATES["session"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"login\">\n   \n    <div class=\"loginForm\">\n\n        <div class=\"inputItem\">\n            <label class=\"inputAddOn\">Email Address</label>\n\n            ");
  hashContexts = {'type': depth0,'autofocus': depth0,'class': depth0,'name': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'autofocus': "STRING",'class': "STRING",'name': "STRING",'value': "ID",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "WDD.TextField", {hash:{
    'type': ("text"),
    'autofocus': ("autofocus"),
    'class': ("inputAddOn inputField"),
    'name': ("name"),
    'value': ("session.username"),
    'placeholder': ("Enter Your Email Address")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n        </div>\n        <div class=\"inputItem\">\n            <label class=\"inputAddOn\">Password</label>\n\n            ");
  hashContexts = {'action': depth0,'type': depth0,'class': depth0,'name': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'action': "STRING",'type': "STRING",'class': "STRING",'name': "STRING",'value': "ID",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "WDD.TextField", {hash:{
    'action': ("login"),
    'type': ("password"),
    'class': ("inputAddOn inputField"),
    'name': ("name"),
    'value': ("session.password"),
    'placeholder': ("Enter Your Password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n        </div>\n\n        <div class=\"formRow\">\n            <button class=\"button\" id=\"loginButton\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" value=\"Log In\">Log In</button>\n        </div>\n\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["welcome"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Get Started!");
  }

  data.buffer.push("<div class=\"col-md-8\">\n    <h1>Welcome!</h1>\n    <p>OnYourMark let's you collaborate while taking notes in <a href=\"http://daringfireball.net/\">Markdown</a> with your friends!</p>\n    ");
  hashContexts = {'type': depth0,'role': depth0,'tagName': depth0,'classNames': depth0};
  hashTypes = {'type': "STRING",'role': "STRING",'tagName': "STRING",'classNames': "STRING"};
  options = {hash:{
    'type': ("button"),
    'role': ("button"),
    'tagName': ("button"),
    'classNames': ("btn btn-primary active")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>");
  return buffer;
  
});