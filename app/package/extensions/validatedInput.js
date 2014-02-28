/*global Ember, Utils*/
(function () {
    "use strict";

    Ember.ValidatedTextField = Ember.TextField.extend({

        attributeBindings : ['autofocus'],
        autofocus : false,

        classNameBindings : ['dType'],

        keyPress : function (e) {
            var value = this.get('value'),
                charCode = e.which || e.keyCode,
                newChar = String.fromCharCode(charCode),
                fullString = value + newChar,
                shouldPreventDefault = false;

            if (!newChar && newChar !== 0) {
                return;
            }

            switch (this.get('dType')) {
            case 'integer':
                shouldPreventDefault = ! (/^[0-9]+$/).test(fullString);
                break;

            case 'currency-us':

            case 'float':
                shouldPreventDefault = ! (/^[0-9]+(\.[0-9]*)?$/).test(fullString);
                break;

            case 'credit-card':
            case 'phone-us':
            case 'date':
                break;
            default:
                break;
            }
            if (shouldPreventDefault) {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
            return true;
        },

        didInsertElement : function () {
            if (!!this.autofocus) {
                this.$().focus();
            }
        },
        init : function () {
            this._super();
            switch (this.get('dType')) {
            case 'date':
                this.set('type', 'date');
                break;
            default:
                this.set('type', 'text');
                break;
            }
        }
    });

}());