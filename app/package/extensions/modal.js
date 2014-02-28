/*global Ember, WDD*//*
(function () {
    "use strict";
*/
    /*global Ember, WDD*/
   /* var precompileTemplate = Ember.Handlebars.compile;

    this.ModalDialouges = Ember.CollectionView.extend({

        classNames: ['modalDialogues'],

        contentBinding: 'WDD.Modal.dialogues',

        attributeBindings: ['style'],

        /*
         @property {View} Notification view class
         Determines what view class to render for each item in the content array.
         *//*
        itemViewClass: Ember.View.extend({

            template: precompileTemplate('<span class="icon"></span><a class="closeDialogue" {{action "close" target="view"}}>X</a><strong class="dialogueTitle">{{view.content.title}}</strong><p class="dialogueText">{{view.content.sub}}</p>'),

            classNameBindings: [":modalDialogue", "content.type", "content.closed", "isOpaque"],

            attributeBindings: ['style'],

            timeoutId: null,

            isOpaque: false,

            init: function () {
                var fn;
                this._super();
                fn = (function () {
                    return this.notifyPropertyChange("style");
                }).bind(this);
                this.set("_recomputeStyle", fn);
                return Ember.$(window).bind("resize", fn);
            },

            didInsertElement: function () {

                var type = this.get('content.type'),
                    showTime = this.get("parentView.showTime");

                if (type !== 'loading') {
                    if (type.indexOf('loadCompleted') !== -1 ) {
                        showTime = showTime / 4;
                    }
                    this.set("timeoutId", setTimeout((function () {
                        return this.send("close");
                    }).bind(this), showTime));
                }

                //make the notification
                return Ember.run.later(this, (function () {
                    return this.set("isOpaque", true);
                }), 1);

            },

            complete : function () {
                this.set("timeoutId", setTimeout((function () {
                    return this.send("close");
                }).bind(this), this.get("parentView.showTime") / 4));
            }.observes('content.type'),

            willDestroyElement: function () {
                return Ember.$(window).unbind('resize', this.get('_recomputeStyle'));
            },

            style: (function () {
                var column, index, type, notifications, rightPx, row, topPx, unitHeight, unitWidth, unitsPerColumn, viewportHeight, isLoading;
                type = this.get('content.type');
                isLoading = (type === 'loading' || type.indexOf('loadCompleted') !== -1);
                notifications = this.get('parentView.content').rejectProperty('closed', true);
                index = notifications.indexOf(this.get('content'));
                viewportHeight = Ember.$(window).height();
                unitHeight = isLoading ? 2 : 6;
                unitWidth = 21.5;
                unitsPerColumn = Math.floor(viewportHeight / unitHeight);
                column = Math.floor(index / unitsPerColumn);
                row = index % unitsPerColumn;
                if (index === -1) {
                    return '';
                }
                topPx = row * unitHeight;
                rightPx = column * unitWidth;
                return 'top: ' + topPx + 'rem; right: ' + rightPx + 'rem;';
            }).property('parentView.content.@each.closed'),

            actions: {
                close: function () {
                    this.set('isOpaque', false);
                    return setTimeout((function () {
                        this.get('parentView.content').removeObject(this.get('content'));
                        return clearTimeout(this.get("timeoutId"));
                    }).bind(this), 300);
                }
            }
        })
    });

    Ember.Handlebars.helper('modal', this.ModalDialogues);

    this.Modal = Ember.Object.create({

        dialogues : Ember.A(),

        push: function (title, content, allowReject) {
            var dialogue;
            dialogue = Ember.Object.create({
                title: title,
                content: content,
                allowReject: allowReject,
                closed: false
            });
            return this.get('notifications').pushObject(dialogue);
        }

    });
}.call(WDD));*/