(function () {
    "use strict";

    /*global Ember*/
    var precompileTemplate = Ember.Handlebars.compile;

    Ember.CarouselComponent = Ember.Component.extend({
        layout: precompileTemplate('<div class="carouselSlides">{{yield}}</div>'),
        classNames: ['carousel'],
        classNameBindings: ['sliding'],

        slideIndex : 0,
        currentSlideIndex : -1,
        slideIndexObserver : function () {
            var slideCount = this.get('slideCount'),
                slideIndex = this.get('slideIndex');

            if (slideIndex < 0) {
                this.set('slideIndex', slideCount - 1);
            } else if (slideIndex >= slideCount) {
                this.set('slideIndex', 0);
            }
            this.to(this.get('slideIndex'));
        }.observes('slideIndex'),

        //return a slideCount that updates dynamically when content changes
        slideCount : function () {
            var innerWrapper = this.$('.carouselSlides').eq(0),
                slides = this.$('.carouselSlide'),
                length = this.$('.carouselSlide').length;
            innerWrapper.css({
                width : '' + (length * 100) + '%'
            });
            slides.css({
                width : '' + (100 / length) + '%'
            });
            return length;
        }.property('content.@each'),

        didInsertElement : function () {
            //set content if it wasn't passed in directly
            if (!this.get('content')) {
                this.set('content', new Array(this.$('.carouselSlide').length));
            }

            //trigger initial slideCount
            this.get('slideCount');

            //trigger initial position
            this.to(this.get('slideIndex'));
        },


        prev: function () {
            if (this.get('sliding')) {
                return;
            }
            this.set('slideIndex', this.get('slideIndex') - 1);
        },
        next: function () {
            if (this.get('sliding')) {
                return;
            }
            this.set('slideIndex', this.get('slideIndex') + 1);
        },
        to: function (pos) {
            Ember.Logger.debug('sliding to', pos);
            var direction,
                self = this;
            if (!((0 <= pos && pos < this.get('slideCount')))) {
                return;
            }
            if (this.get('sliding')) {
                return this.$().one('slid', function () {
                    return self.to(pos);
                });
            }
            direction = pos > this.get('slideIndex') ? 'next' : 'prev';
            return this.slide(direction, pos);
        },
        /*
         Use slide to transition to any slide with any animation direction.
         E.g., by specifiying type = 'next' and next = first_slide_index, we can
         transition to the first slide by moving to the right.

         type: next | prev
         nextIndex: is the index of the next slide

         this works by getting the next index, appending pushing it either left
          or right, frame shifting the entire inner carousel, then fixing the carousel's
          location
         */
        slide: function (shiftType, nextIndex) {

            if (this.get('currentSlideIndex') === nextIndex) {
                Ember.Logger.debug('Slide: no index change.');
                return;
            }
            var innerWrapper = this.$('.carouselSlides').eq(0),
                self = this;

            //flag the carousel that the transition is occurring
            this.set('sliding', true);

            innerWrapper.animate(
                { left : '-' + (nextIndex * 100) + '%' },
                500,
                'swing',
                function () {
                    self.set('sliding', false);
                    self.set('currentSlideIndex', nextIndex);
                }
            );
        }
    });


    Ember.CarouselSlide = Ember.View.extend({
        classNames: ['carouselSlide']
    });

    Ember.Handlebars.helper('carousel-component', Ember.CarouselComponent);

    Ember.Handlebars.helper('carousel-slide', Ember.CarouselSlide);


}());