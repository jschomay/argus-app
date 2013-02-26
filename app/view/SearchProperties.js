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
                    fields: ['State', 'City', 'Price',
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
                        url: 'http://www.argus-selfstorage.com.php53-11.dfw1-2.websitetestlink.com/mobile/rest-apis.php?action=query&q=all_active_properties',
                        reader: {
                            type: 'json',
                            rootProperty: ''
                        }
                    }
                },
                itemTpl: ['Property: {State}, {City},{Price}'].join(""),
                onItemDisclosure: true,
                select: function(view, record) {
                    console.log("select", arguments);
                }
            }
        ]
    }
});

// Ext.create('ArgusApp.view.SearchProperties');