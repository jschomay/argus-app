Ext.define('ArgusApp.view.Welcome', {
    extend: 'Ext.Container',
    xtype: "welcome",
    requires: [
        'Ext.carousel.Carousel'
    ],
    config: {
      styleHtmlContent: true,
      scrollable: true,
      layout: 'vbox',

      items: [
          // {
          //     docked: 'top',
          //     xtype: 'titlebar',
          //     title: "Welcome to Argus Self Storage"
          // },
          {
              html: [
                  '<img style="display:block; margin:auto;" src="resources/images/logo.png">',
                  '<h2 style="text-align:center; line-height:100%;">America\'s Premier Self Storage Brokerage Firm.</h2>',
                  '<h3 style="text-align:center; line-height:100%;">Our newest listings:</h3>'
                  ].join("")
          },
          {
            xtype: 'rotatingcarousel',
            styleHtmlContent: true,
            delay: 5000,
            height: 300,
            style: 'background: #fff;padding: 10px;border: 1px solid #aaa;',
            masked: {
                xtype: 'loadmask',
                message: 'Loading newest properties'
            },
            listeners: {
              initialize: function() {
                var store = Ext.getStore("Properties");
                store.load(function() {
                  var items = [];
                  store.clearFilter(true);
                  store.filter('New', 'New' );
                  console.log("store", store);
                  // reach inside store to get filtered items instead of reloding it
                  Ext.each(store.data.items, function(property) {
                      items.push({
                        xtype: 'panel',
                        items: [
                          {
                            data: property.data,
                            tpl: [
                              '<div class="welcome property-listing {New} {Contract} {NewPrice}">',
                                '<img src="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID={PropID}&imagecode=5">',
                                '<div class="info">',
                                  '<h3>{State}, {City}</h3>',
                                  '{Price} {PriceText}</br>',
                                  '{Units} / {RentableSF}',
                                '</div>',
                              '</div>'
                            ].join('')
                          },
                          {
                            xtype: 'button',
                            action: 'showDetails',
                            id: property.data.PropID,
                            text: "View property flyer",
                            ui: "confirm",
                            margin: 20,
                            padding: 10,
                            width: 400,
                            right: 20,
                            bottom: 60
                          }
                        ]
                      });
                  });
                  store.clearFilter(true);
                  this.setItems(items);
                  this.setActiveItem(0);
                  this.unmask();
                }, this);
              }
            }
          },
          {
            xtype: 'button',
            id: 'showListings',
            text: "See all listings...",
            margin: 20,
            padding: 20
          }
      ]
    }
});


Ext.define('Ext.carousel.RotatingCarousel', {
    extend: 'Ext.carousel.Carousel',
    alternateClassName: 'Ext.RotatingCarousel',
    xtype: 'rotatingcarousel',
    config: {
        delay: 3000,
        start: true,
        listeners: {
            tap: {
                fn: function() {
                    this.pause();
                },
                element: 'element'
            },
            swipe: {
                fn: function() {
                    this.start();
                },
                element: 'innerElement'
            }
        }
    },
    initialize: function() {
        if(this.config.start) {
            this.start();
        }
    },
    rotate: function() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
        if(this.getActiveIndex() === this.getMaxItemIndex()) {
            // this.setActiveItem(0, 'slide');
            this.animateActiveItem(0, {
                type: 'slide',
                direction: 'left'
            });
        } else {
            this.next();
        }
        this.timeout = Ext.defer(this.rotate, this.config.delay, this);
    },
    start: function(delayStart) {
        this.timeout = Ext.defer(this.rotate, delayStart || this.config.delay, this);
    },
    pause: function(delayStart) {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
        if(delayStart) {
            this.start(delayStart);
        }
        return this;
    },
    stop: function(delayStart) {
        this.pause(delayStart);
        this.setActiveItem(0, 'slide');
        return this;
    }
});