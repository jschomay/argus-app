Ext.define('ArgusApp.view.SearchProperties', {
    extend: 'Ext.List',
    xtype: "searchProperties",
    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.JsonP'
    ],
    config: {
        onItemDisclosure: true,
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
        detailCard: {
            xtype: 'panel',
            scrollable: true,
            styleHtmlContent: true,
            html: "detail card placeholder"
        },
        listeners: {
            itemtap: function(nestedList, list, index, element, post) {
                alert('test');
                // this.getDetailCard().setHtml(post.get('content'));
            }
        }
    }
});

// Ext.create('ArgusApp.view.SearchProperties');