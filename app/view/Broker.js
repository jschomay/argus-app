Ext.define('ArgusApp.view.Broker', {
    extend: 'Ext.navigation.View',
    xtype: "broker",
    requires: [
        'Ext.Container'
    ],
    config: {
        scrollable: true,
        items: [
            {
                xtype: 'container',
                title: "Find an Argus Broker",
                styleHtmlContent: true,
                layout: 'vbox',
                items: [
                    {
                        html: '<b>Select a region:</b>'
                    },
                    {
                        id: "selectable-map-regions",
                        html: '<img style="display:block; margin:auto;width: 100%;" src="resources/images/regions.png">',
                        layout: 'vbox',
                        defaults: {
                                xtype: "container",
                                baseCls: "map-region",
                                listeners: {
                                    tap: {
                                        element: 'element',
                                        fn: function() {
                                            this.up('broker').fireEvent('showDetail', this.config.data);
                                        }
                                    }
                                }

                        },
                        items: [
                            {
                                // html: '<div style="top: 45%; left: 44%;" class="lable">West</div>',
                                data: { title: 'West Region', region: 'west' },
                                top: '0%',
                                left: '0%',
                                height: '63%',
                                width: '38%'
                            },
                            {
                                // html: '<div style="top: 45%; left: 21%;" class="lable">North Central</div>',
                                data: { title: 'North Central Region', region: 'northcentral' },
                                top: '6%',
                                left: '38%',
                                height: '41%',
                                width: '38%'
                            },
                            {
                                // html: '<div style="top: 14%; left: 19%;" class="lable">South Central</div>',
                                data: { title: 'South Central Region', region: 'southcentral' },
                                top: '47%',
                                left: '38%',
                                height: '38%',
                                width: '35%'
                            },
                            {
                                // html: '<div style="top: 16%; left: 17%;" class="lable">Southeast</div>',
                                data: { title: 'Southeast Region', region: 'Southeast' },
                                top: '34%',
                                left: '73%',
                                height: '50%',
                                width: '20%'
                            },
                            {
                                // html: '<div style="top: 52%; left: 15%;" class="lable">Northeast</div>',
                                data: { title: 'Northeast Region', region: 'northeast' },
                                top: '0%',
                                left: '76%',
                                height: '34%',
                                width: '23%'
                            }
                        ]
                    },
                    {
                        html: '<p>Argus Broker Affiliates cover nearly 45 markets across the U.S. Please select your region above to view contact and professional information about the Broker Affiliates near you.</p>'
                    },
                    {
                        xtype: 'list',
                        height: 300,
                        onItemDisclosure: true,
                        itemTpl: '{title}',
                        data: [
                            { title: 'Northeast Region', region: 'northeast' },
                            { title: 'Southeast Region', region: 'southeast' },
                            { title: 'North Central Region', region: 'northcentral' },
                            { title: 'South Central Region', region: 'southcentral' },
                            { title: 'West Region', region: 'west' }
                        ]
                    }
                ]
            }
        ]
    }
});