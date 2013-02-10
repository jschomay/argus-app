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
                itemTpl: '<b>{title}</b><br>{author}',
                onItemDisclosure: true,
                select: function(view, record) {
                    console.log("select", arguments);
                }
            }
        ]
    }
});

// Ext.create('ArgusApp.view.SearchProperties');