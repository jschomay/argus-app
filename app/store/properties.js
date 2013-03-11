Ext.define('ArgusApp.store.Properties', {
    extend: 'Ext.data.Store',
    xtype: "propertyStore",

    config: {
        model: 'ArgusApp.model.Property',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://m.argus-selfstorage.com/proxy.php?action=query&q=all_active_properties',
            reader: {
                type: 'json',
                rootProperty: ''
            }
        }
    }
});