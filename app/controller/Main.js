Ext.define('ArgusApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            searchProperties: 'searchProperties'
        },
        control: {
            'searchProperties list': {
                disclose: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {
        console.log('disclose event from main.controller', arguments);
        this.getSearchProperties().push({
            xtype: 'panel',
            title: record.data.title,
            html: record.data.content,
            scrollable: true
        });
    }

});