Ext.define('ArgusApp.view.About', {
    extend: 'Ext.Container',
    xtype: "about",
    config: {
      styleHtmlContent: true,
      scrollable: true,

      items: [
          {
              docked: 'top',
              xtype: 'titlebar',
              title: "About us"
          },
          {
            html: ['<div id="main_content" class="fullwidth">',
              '<p> Whether you are considering buying or selling self storage real estate, the Argus Self Storage Sales Network can help! </p>',
              '<p> The Argus Self Storage Sales Network is the only national network of commercial real estate brokers who specialize in self storage properties. The network assists buyers and sellers of self storage real estate by combining the knowledge and expertise of a local broker with the exposure of our national sales and marketing program. </p>',
              '<p> <b>Argus Provides the Ultimate in National and Local Market Penetration</b><br>',
                'As a client of the Argus Self Storage Sales Network, you will receive immediate access to a national network of experienced brokers specializing in self storage. You will also receive professionally designed sales materials, national advertising exposure and ongoing professional support. </p>',
              '<p> <b>Five Centuries of Combined Real Estate Experience</b><br>',
                'At Argus Self Storage Sales Network , we recognize that buying and selling self storage real estate requires a great deal of experience and knowledge. It also requires a strong understanding of local markets and trends, coupled with national marketing exposure. </p>',
              '<p> <b>Local Broker Expertise</b><br>',
                'The Argus Self Storage Sales Network combines the power of a national real estate sales organization with the experience and knowledge of local brokers. Our national broker network has representatives located throughout America. These brokers were selected based on their reputation, knowledge and experience in commercial real estate. </p>',
              '<p> Our network can provide you with a local broker who is familiar with your market yet has access to buyers and sellers nationwide. Each broker affiliate is constantly monitoring their local markets as well as national trends. </p>',
            '</div>'].join('')
          }
      ]
  }
});