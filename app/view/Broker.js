Ext.define('ArgusApp.view.Broker', {
    extend: 'Ext.navigation.View',
    xtype: "broker",
    requires: [
        'Ext.List',
        'Ext.Container'
    ],
    config: {
        items: [
            {
                xtype: 'container',
                title: "Find an Argus Broker",
                scrollable: true,
                styleHtmlContent: true,
                items: [
                    {
                        html: ['<b>Select a region:</b>',
                        '<br><img style="display:block; margin:auto;width: 100%;" src="resources/images/regions.png">',
                        '<br><p>Argus Broker Affiliates cover nearly 45 markets across the U.S. Please select your region above to view contact and professional information about the Broker Affiliates near you.</p>',
                        '<br><br>'].join("")
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