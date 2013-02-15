Ext.define('ArgusApp.view.Welcome', {
    extend: 'Ext.Container',
    xtype: "welcome",
    requires: [
        'Ext.carousel.Carousel'
    ],
    config: {
      styleHtmlContent: true,
      scrollable: true,

      items: [
          {
              docked: 'top',
              xtype: 'titlebar',
              title: "Welcome to Argus Self Storage"
          },
          {
              html: [
                  '<img style="display:block; margin:auto;" src="resources/images/logo.png">',
                  '<h2 style="text-align:center; line-height:100%;">Argus is America\'s Premier Self Storage Brokerage Firm.</h2>',
                  '<p>The Argus Self Storage Sales Network is the only national network of commercial real estate brokers who specialize in self-storage properties. The network assists buyers and sellers of self-storage real estate by combining the knowledge and expertise of a local broker with the exposure of our national sales and marketing program. Our national broker network has representatives located throughout the United States. These brokers were selected based on their reputation, knowledge and experience in commercial real estate.</p>',
                  '<h3>Our 3 most recent properties:</h3>'
                  ].join("")
          },
          {
              xtype: 'carousel',
              defaults: {
                  styleHtmlContent: true
              },
              height: 300,
              style: 'background: #fff;padding: 10px;border: 1px solid #aaa;',
              items: [
                  {
                      html : ['<div class="listing">',
                          '<div class="scroll-image"><img style="float: left;display: block;margin-right: 20px;" src="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID=677&amp;imagecode=5" alt="" border="0"></div>',
                          '<div class="scroll-content">',
                              '<h3> <a href="#" class="specials">Bandon, OR</a></h3>',
                              '<div class="scroll-content-section">',
                                  '<p> $749,000</p>',
                                  '<p> <a href="#" class="specials">View Property Detail</a> </p>',
                              '</div>',
                              '<div class="scroll-content-section"><p>19,268 rsf</p>',
                                  '<p> 141 units </p>',
                              '</div>',
                          '</div>',
                          '<div class="clear"></div>',
                      '</div>'].join("")
                  },
                  {
                      html : ['<div class="listing">',
                          '<div class="scroll-image"><img style="float: left;display: block;margin-right: 20px;" src="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID=677&amp;imagecode=5" alt="" border="0"></div>',
                          '<div class="scroll-content">',
                              '<h3> <a href="#" class="specials">Bandon, OR</a></h3>',
                              '<div class="scroll-content-section">',
                                  '<p> $749,000</p>',
                                  '<p> <a href="#" class="specials">View Property Detail</a> </p>',
                              '</div>',
                              '<div class="scroll-content-section"><p>19,268 rsf</p>',
                                  '<p> 141 units </p>',
                              '</div>',
                          '</div>',
                          '<div class="clear"></div>',
                      '</div>'].join("")
                  },
                  {
                      html : ['<div class="listing">',
                          '<div class="scroll-image"><img style="float: left;display: block;margin-right: 20px;" src="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID=677&amp;imagecode=5" alt="" border="0"></div>',
                          '<div class="scroll-content">',
                              '<h3> <a href="#" class="specials">Bandon, OR</a></h3>',
                              '<div class="scroll-content-section">',
                                  '<p> $749,000</p>',
                                  '<p> <a href="#" class="specials">View Property Detail</a> </p>',
                              '</div>',
                              '<div class="scroll-content-section"><p>19,268 rsf</p>',
                                  '<p> 141 units </p>',
                              '</div>',
                          '</div>',
                          '<div class="clear"></div>',
                      '</div>'].join("")
                  }
              ]
          }
      ]
    }
});
