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
                store: {
                    autoLoad: true,
                    fields: ['title', 'link', 'author', 'contentSnippet', 'content',
                        {
                            name: 'leaf',
                            defaultValue: true
                        }
                    ],
                    root: {
                        leaf: false
                    },
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },
                itemTpl: ['<div class="listing">',
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
                                '</div>'].join(""),
                onItemDisclosure: true,
                select: function(view, record) {
                    console.log("select", arguments);
                }
            }
        ]
    }
});

// Ext.create('ArgusApp.view.SearchProperties');