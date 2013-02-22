Ext.define('ArgusApp.store.Properties', {
    extend: 'Ext.data.Store',
    xtype: "propertyStore",

    config: {
        autoLoad: true,
        fields: ['State', 'City', 'Price'],

        proxy: {
            type: 'jsonp',
            url: 'http://www.argus-selfstorage.com.php53-11.dfw1-2.websitetestlink.com/mobile/rest-apis.php?q=all_active_properties',
            reader: {
                type: 'json',
                rootProperty: ''
            }
        }
    }
});