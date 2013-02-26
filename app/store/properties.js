Ext.define('ArgusApp.store.Properties', {
    extend: 'Ext.data.Store',
    xtype: "propertyStore",

    config: {
        model: 'ArgusApp.model.Property',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://www.argus-selfstorage.com.php53-11.dfw1-2.websitetestlink.com/mobile/rest-apis.php?action=query&q=all_active_properties',
            reader: {
                type: 'json',
                rootProperty: ''
            }
        }
    }
});