Ext.define('ArgusApp.view.SearchProperties', {
    // extend: 'Ext.List',
    extend: 'Ext.navigation.View',
    xtype: "searchProperties",
    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.JsonP',
        'Ext.List',
        'Ext.form.Panel',
        'Ext.Container',
        'Ext.field.Select',
        'Ext.Toolbar'
    ],
    config: {
        items: [
            {
                type: 'container',
                layout: 'fit',
                title: 'Available Properties',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'selectfield',
                                name: 'stateSelect',
                                flex: 1,
                                options: [
                                    {text: 'All states',  value: ''},
                                    {text: 'Alabama', value: 'AL'},
                                    {text: 'Alaska', value: 'AK'},
                                    {text: 'Arizona', value: 'AZ'},
                                    {text: 'Arkansas', value: 'AR'},
                                    {text: 'California', value: 'CA'},
                                    {text: 'Colorado', value: 'CO'},
                                    {text: 'Connecticut', value: 'CT'},
                                    {text: 'Deleware', value: 'DE'},
                                    {text: 'Florida', value: 'FL'},
                                    {text: 'Georgia', value: 'GA'},
                                    {text: 'Hawaii', value: 'HI'},
                                    {text: 'Idaho', value: 'ID'},
                                    {text: 'Illinois', value: 'IL'},
                                    {text: 'Indiana', value: 'IN'},
                                    {text: 'Iowa', value: 'IA'},
                                    {text: 'Kansas', value: 'KS'},
                                    {text: 'Kentucky', value: 'KY'},
                                    {text: 'Louisiana', value: 'LA'},
                                    {text: 'Maine', value: 'ME'},
                                    {text: 'Maryland', value: 'MD'},
                                    {text: 'Massachusetts', value: 'MA'},
                                    {text: 'Michigan', value: 'MI'},
                                    {text: 'Minnesota', value: 'MN'},
                                    {text: 'Mississippi', value: 'MS'},
                                    {text: 'Missouri', value: 'MO'},
                                    {text: 'Montana', value: 'MT'},
                                    {text: 'Nebraska', value: 'NE'},
                                    {text: 'Nevada', value: 'NV'},
                                    {text: 'New Hampshire', value: 'NH'},
                                    {text: 'New Jersey', value: 'NJ'},
                                    {text: 'New Mexico', value: 'NM'},
                                    {text: 'New York', value: 'NY'},
                                    {text: 'North Carolina', value: 'NC'},
                                    {text: 'North Dakota', value: 'ND'},
                                    {text: 'Ohio', value: 'OH'},
                                    {text: 'Oklahoma', value: 'OK'},
                                    {text: 'Oregon', value: 'OR'},
                                    {text: 'Pennsylvania', value: 'PA'},
                                    {text: 'Rhode Island', value: 'RI'},
                                    {text: 'South Carolina', value: 'SC'},
                                    {text: 'South Dakota', value: 'SD'},
                                    {text: 'Tennessee', value: 'TN'},
                                    {text: 'Texas', value: 'TX'},
                                    {text: 'Utah', value: 'UT'},
                                    {text: 'Vermont', value: 'VT'},
                                    {text: 'Virginia', value: 'VA'},
                                    {text: 'Washington', value: 'WA'},
                                    {text: 'Washington,  DC', value: 'DC'},
                                    {text: 'West Virginia', value: 'WV'},
                                    {text: 'Wisconsin', value: 'WI'},
                                    {text: 'Wyoming', value: 'WY'},
                                    {text: 'International', value: 'ZZ'}

                                ]
                            },
                            {
                                xtype: 'selectfield',
                                name: 'priceSelect',
                                flex: 1,
                                options: [
                                    {text: 'All prices',  value: ''},
                                    {text: 'Less than $500,000', value: '1'},
                                    {text: '$500,000-$1,000,000', value: '2'},
                                    {text: '$1,000,000-$5,000,000', value: '3'},
                                    {text: '$5,000,000+', value: '4'}
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        styleHtmlContent: true,
                        store: 'Properties',
                        itemHeight: 100,
                        itemTpl: ['<div class="listings properties {New} {Contract} {NewPrice}">',
                                    '<img src="http://www.argus-selfstorage.com/property_images/{PropThumb}">',
                                    '<div class="info">',
                                      '<h3>{State}, {City}</h3>',
                                      '{Price} {PriceText}<br>',
                                      '{Units} / {RentableSF}',
                                    '</div>',
                                    '<div style="clear:both"></div>',
                                  '</div>'
                                ].join(''),
                        onItemDisclosure: true,
                        listeners: {
                          initialize: function() {
                                var store = Ext.getStore("Properties");
                                store.clearFilter();
                            }
                        }
                    }
                ]
            }
        ]
    }
});

// Ext.create('ArgusApp.view.SearchProperties');