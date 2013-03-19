Ext.define('ArgusApp.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            searchProperties: 'searchProperties',
            broker: 'broker',
            main: 'main',
            welcome: 'welcome'
        },
        control: {
            'searchProperties selectfield': {
                change: 'filterProperties'
            },
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
            url: 'http://m.argus-selfstorage.com/proxy.php?action=brokerinfo&region='+data.region,
            callback: function(ajax,bool,response) {
                brokerInfo.setHtml(response.responseText);
                brokerInfo.unmask();
            }
        });

        this.getBroker().push(brokerInfo);
    },
    filterProperties: function(field, value) {
        var filters = this.getSearchProperties().query("selectfield"),
            stateFilter,priceFilter;

        for(var i=0; i < filters.length; i++){
            if (filters[i].getName() === "stateSelect"){
                stateFilter = {key:"State", value: filters[i].getValue()};
            }
            if (filters[i].getName() === "priceSelect"){
                priceFilter = {key:"Price", value: filters[i].getValue()};
            }
        }
        console.log("FILTERS",stateFilter, priceFilter);

        var store = Ext.getStore('Properties');
        store.clearFilter();

        // filter by price range
        console.log("filtering:", priceFilter.key, priceFilter.value);
        store.filterBy(function(record) {
            var price, lower, upper;
            price = Number(record.data.Price.replace('$','').split(',').join(''));
            // price will be NaN for sold properties (<span>SOLD</span>), so set those to 0
            if (isNaN(price))
                price = 0;
            switch (priceFilter.value) {
                case "":
                    lower = -1;
                    upper = 9999999;
                    break;
                case "1":
                    lower = -1;
                    upper = 500000;
                    break;
                case "2":
                    lower = 500001;
                    upper = 1000000;
                    break;
                case "3":
                    lower = 1000001;
                    upper = 5000000;
                    break;
                case "4":
                    lower = 5000000;
                    upper = 9999999;
                    break;
            }
            if (lower < price && price < upper)
            {
                return true;
            }
            else
                return false;
        });
        console.log("Count after price filter",store.data.length);

        // filter by state name
        console.log("filtering:", stateFilter.key, stateFilter.value);
        store.filter(stateFilter.key, stateFilter.value);

        console.log("Count after price and state filter",store.data.length);
        if (store.data.length === 0) {
            Ext.Msg.alert("No properties found.");
        }
    }

});