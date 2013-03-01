Ext.define('ArgusApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            searchProperties: 'searchProperties',
            broker: 'broker',
            main: 'main',
            welcome: 'welcome'
        },
        control: {
            'searchProperties list': {
                disclose: 'showPropertyDetail',
                select: 'showPropertyDetail'
            },
            'broker':{
                showDetail: 'showBrokerDetail'
            },
            'button#showListings': {
                tap: function() {
                    console.log(this.getMain());
                    this.getMain().setActiveItem(1);
                }
            },
            'button[action="showDetails"]': {
                tap: function(button) {
                    console.log("tap show details for property: ", button.id);
                    var store = Ext.getStore('Properties');
                    var record = store.findRecord('PropID', button.id);
                    var propertyData = record.data;

                    var propertyDetailSheet = Ext.create("Ext.Sheet", {
                        stretchX    : true,
                        stretchY    : true,
                        height: '100%',
                        layout: 'fit'
                    });
                    propertyDetailSheet.add({
                        xtype : 'titlebar',
                        docked: 'top',
                        title: propertyData.State+', '+propertyData.City+' details',
                        items : [
                            {
                                text    : 'Close',
                                align: 'right',
                                handler : function () {
                                    var sheet = propertyDetailSheet;
                                    sheet.hide();
                                    sheet.getHideAnimation().on({
                                        animationend: sheet.destroy,
                                        scope: sheet
                                    });
                                }
                            }
                        ]
                    });
                    propertyDetailSheet.add(Ext.create("ArgusApp.view.PropertyDetail", {propertyData: propertyData}));
                    this.getWelcome().add(propertyDetailSheet);
                    propertyDetailSheet.show();
                }
            }
        }
    },

    showPropertyDetail: function(list, record) {
        this.getSearchProperties().push(Ext.create("ArgusApp.view.PropertyDetail", {title: record.data.State+', '+record.data.City+' details', propertyData: record.data}));
    },
    showBrokerDetail: function(data) {
        var brokerInfo = Ext.create("Ext.Container", {
            title: data.title,
            html: "",
            baseCls: 'brokers',
            styleHtmlContent: true,
            scrollable: true,
            masked: {
                xtype: 'loadmask',
                message: 'Loading broker info'
            }
        });
        Ext.Ajax.request({
            url: 'http://www.argus-selfstorage.com.php53-11.dfw1-2.websitetestlink.com/mobile/rest-apis.php?action=brokerinfo&region='+data.region,
            callback: function(ajax,bool,response) {
                brokerInfo.setHtml(response.responseText);
                brokerInfo.unmask();
            }
        });

        this.getBroker().push(brokerInfo);
    }

});