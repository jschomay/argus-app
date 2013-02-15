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
                items: [
                    {
                        html: ['<br><br><img style="display:block; margin:auto;" src="resources/images/regions.png">',
                        '<br><p>Argus Broker Affiliates cover nearly 45 markets across the U.S. Please select your region below to view contact and professional information about the Broker Affiliates near you.</p>',
                        '<br><br>'].join("")
                    },
                    {
                        xtype: 'list',
                        height: 300,
                        onItemDisclosure: true,
                        itemTpl: '{title}',
                        data: [
                            { title: '1. Northeast Region' },
                            { title: '2. Southeast Region' },
                            { title: '3. North Central Region' },
                            { title: '4. South Central Region' },
                            { title: '5. West Region' }
                        ]
                    }
                ]
            }
        ]
    }
});