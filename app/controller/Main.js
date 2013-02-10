Ext.define('ArgusApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main'
        },
        control: {
            'searchProperties': {
                disclose: 'showDetail',
                select: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {
        console.log('disclose event from main.controller', this.getMain());
        this.getMain().items[1].push({
            xtype: 'panel',
            title: 'detail',
            html: 'info here'
            // xtype: 'presidentdetail',
            // title: record.fullName(),
            // data: record.getData()
        });
    }

});