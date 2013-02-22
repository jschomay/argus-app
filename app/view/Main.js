Ext.define('ArgusApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.MessageBox'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                xtype: "welcome"
            },
            {
                title: 'Search Properties',
                iconCls: 'search',
                xtype: 'searchProperties'
            },
            {
                title: "Find a Broker",
                iconCls: 'user_business',
                xtype: 'broker'
            },
            {
                title: "About",
                iconCls: 'info2',
                xtype: 'about'
            },
            {
                title: "Contact",
                iconCls: 'phone1',
                xtype: 'contact'
            }
        ]
    }
});
