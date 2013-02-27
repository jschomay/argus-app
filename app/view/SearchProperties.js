Ext.define('ArgusApp.view.SearchProperties', {
    // extend: 'Ext.List',
    extend: 'Ext.navigation.View',
    xtype: "searchProperties",
    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.JsonP',
        'Ext.List'
    ],
    config: {
        items: [
            {
                xtype: 'list',
                title: 'Available Properties',
                styleHtmlContent: true,
                store: {xclass:'ArgusApp.store.Properties'},
                itemTpl: ['<div class="welcome property-listing {New} {Contract} {NewPrice}">',
                            '<img src="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID={PropID}&imagecode=5">',
                            '<div class="info">',
                              '<h3>{State}, {City}</h3>',
                              '<a href="#" target="_blank">Location/demographic</a><br>',
                              '{Price} {PriceText}</br>',
                              '{Units} / {RentableSF}',
                            '</div>',
                          '</div>'
                        ].join(''),
                onItemDisclosure: true,
                select: function(view, record) {
                    console.log("select", arguments);
                }
            }
        ]
    }
});

// Ext.create('ArgusApp.view.SearchProperties');