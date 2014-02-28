
//signal the the APP is now loaded
//we do this at the beginning of the file
//because this is the last file
//and we need to bind the store first
/*global WDD, Ember*/
WDD.advanceReadiness();

var precompileTemplate = Ember.Handlebars.compile;

WDD.TextField = Ember.TextField.extend({
    attributeBindings : ['autofocus', 'name'],
    autofocus : false,
    didInsertElement : function () {
        "use strict";
        if (!!this.autofocus) {
            this.$().focus();
        }
    }

});

WDD.Checkbox = Ember.Checkbox.extend({
    attributeBindings : ['name']
});

WDD.liveNotes = Ember.View.extend({
    templateName : 'liveNotes',
    classNames : ['liveNotes'],
    tagName : 'div',
    name : '',
    value : '',
    helpText : 'All text areas can be formatted with <a href="http://daringfireball.net/projects/markdown/basics" target="_blank">Markdown</a>.  A live preview will appear to the right.',
    labelText : ''
});

WDD.helpText = Ember.View.extend({
    template : precompileTemplate('<span class="helpText">{{{view.value}}}</span>'),
    classNames : ['helpTextWrapper'],
    tagName : 'span',
    value : ''
});

/*global jQuery, animateLogo*/
WDD.Logo = Ember.View.extend({
    templateName : 'logo',
    classNames : ['logo'],
    classNameBindings : ['isDark:dark:'],
    isDark : false,
    tagName : 'div',
    runNum : 1,
    mouseEnter : function () {
        "use strict";
        animateLogo(this.$(), this.runNum);
    },
    didInsertElement : function () {
        "use strict";
        if (this.runNum < 0) {
            animateLogo(this.$(), this.runNum);
        }
    }
});


WDD.collapseToggle = Ember.View.extend({

    template : precompileTemplate('<div class="collapseToggle"><span></span></div>'),
    classNames : ['collapseToggleWrapper'],
    classNameBindings : ['isCollapsed:collapsed:'],
    isCollapsed : false,
    collapses : '',
    orgWidth : '',
    //direction : 'left',
	click : function(event){
				var	box = jQuery(event.target).parents( this.collapses ).eq(0),
					isCollapsed = this.isCollapsed;

				if (!this.orgWidth) {
                    this.set('orgWidth',box.width());
                }

				this.set('isCollapsed',!isCollapsed);
				box.animate({'width' : (isCollapsed ? this.orgWidth+'px' : '0')});
				
		}
});

WDD.searchInputField = Ember.View.extend({
		templateName		:	'searchInputField'
	,	name						:	''
	,	value						:	''
	,	matchesMultiple	:	false
	,	options					:	false
});

WDD.searchInput =	WDD.TextField.extend({
			attributeBindings	:	['value','data-0','data-75','onFocus','onBlur']
		,	value	:	''
		,	'data-0'	:	''
		,	'data-75'	:	''
		,	onFocus	:	"jQuery('#searchBox').parent().addClass('focused');"
		,	onBlur	:	"jQuery('#searchBox').parent().removeClass('focused');"
		,	placeholder : "SEARCH: Jobs, Portfolios, Clients..."
		,	autofocus  : "autofocus"
		,	keyUp	:	function(){  this.process( this.parser.parse(this.value));  }
	//	,	parser	:	 WDD.Search.create()
		,	process:	function(o){ console.log('processing',o);}
	
		});


/*
	Extended Form Fields that include validation checks
*/
WDD.validatedField = WDD.TextField.extend({
		focusNow				:	function(){}
	,	labelText				:	''
	,	helpText					:	false
	
	/*
		successText is displayed if the field is validated
		warningText is displayed if the field in currently unable to be validated
		errorText is displayed if the field is invalid
		
		IF DEFINED
			softText  is the message displayed to the user letting them know
			that their validation failed but that they can continue with potentially invalid data
			softRule is the rule that the value MUST pass in order to not be an error

	*/
	,	successText			:	''
	,	warningText			:	''
	,	errorText				:	''
	,	canContinueText	:	null
	,	canContinueRule	:	null
	
	,	dataType				:	''
		
		/*
			Validates value based on dataType
			throws Error : unknown dataType if unrecognized dataType
		*/
	,	valueObserver		:	function(){}
});



