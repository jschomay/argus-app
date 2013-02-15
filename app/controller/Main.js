Ext.define('ArgusApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            searchProperties: 'searchProperties',
            broker: 'broker'
        },
        control: {
            'searchProperties list': {
                disclose: 'showPropertyDetail'
            },
            'broker list':{
                select: 'showBrokerDetail',
                disclose: 'showBrokerDetail'
            }
        }
    },

    showPropertyDetail: function(list, record) {
        console.log('disclose event from main.controller', arguments);
        this.getSearchProperties().push({
            xtype: 'panel',
            //title: record.data.title,
            title: 'Sample Property',
            //html: record.data.content,
            html: ['<div class="listing">',
                        '<div class="scroll-image"><img style="float: left;display: block;margin-right: 20px;" src="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID=677&amp;imagecode=5" alt="" border="0"></div>',
                        '<div class="scroll-content">',
                            '<h3> <a href="#" class="specials">Bandon, OR</a></h3>',
                            '<div class="scroll-content-section">',
                                '<p> $749,000</p>',
                                '<p> <a href="#" class="specials">View Property Detail</a> </p>',
                            '</div>',
                            '<div class="scroll-content-section"><p>19,268 rsf</p>',
                                '<p> 141 units </p>',
                            '</div>',
                        '</div>',
                        '<div class="clear"></div>',
                    '</div>'].join(""),
            scrollable: true
        });
    },
    showBrokerDetail: function(list, record) {
        console.log('show broker detail from main.controller', arguments);
        this.getBroker().push({
            xtype: 'panel',
            //title: record.data.title,
            title: 'Broker Details',
            //html: record.data.content,
            html: ['Broker deails...'].join(""),
            scrollable: true
        });
    }

});