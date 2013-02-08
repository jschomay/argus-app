Ext.define('ArgusApp.view.Contact', {
    extend: 'Ext.Toolbar',
    xtype : 'contact',
    requires: ['Ext.field.Search'],

    config: {
        ui: 'searchbar',
        layout: 'vbox',
        cls: 'big',

        items: [
            {
                xtype: 'title',
                title: 'Twitter Search'
            },
            {
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }
        ]
    }
});