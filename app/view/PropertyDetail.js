Ext.define("ArgusApp.view.PropertyDetail", {
    extend: 'Ext.Sheet',
    xtype: "propertyDetail",
    config: {
        stretchX    : true,
        stretchY    : true,
        height      : '100%'
    },
    constructor: function(config) {
        console.log("config", config);
        propertyData = config.propertyData;
        config.items = [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: propertyData.State+', '+propertyData.City+' details',
                items : [
                    {
                        xtype: 'spacer'
                    },
                    {
                        text    : 'Close',
                        handler : function () {
                            var sheet = this.parent.parent;
                            sheet.hide();
                            sheet.getHideAnimation().on({
                                animationend: sheet.destroy,
                                scope: sheet
                            });
                        }
                    }
                ]
            },
            {
                xtype   : 'panel',
                defaults: {
                    data : propertyData,
                    padding: 20
                },
                items: [
                    {
                        tpl   : 'Listing Broker: {Broker}'
                    },
                    {
                        xtype: 'button',
                        padding: "5 10",
                        margin: '5 20',
                        width: 300,
                        style: "text-align: center;",
                        tpl: 'Call {BrokerPhone}',
                        callUrl: 'tel:'+propertyData.BrokerPhone,
                        ui: 'confirm',
                        handler: function(button, event){
                            window.location = button.callUrl;
                        }
                    },
                    {
                        xtype: 'button',
                        padding: "5 10",
                        margin: '5 20',
                        width: 300,
                        style: "text-align: center;",
                        tpl: 'Send Email',
                        callUrl: 'tel:'+propertyData.BrokerPhone,
                        ui: 'confirm',
                        handler: function(emailButton, event){
                            // open message sheet
                            var emailBrokerSheet = Ext.create("Ext.Sheet", {
                                stretchX    : true,
                                stretchY    : true,
                                height      : '100%',
                                items : [
                                    {
                                        xtype : 'toolbar',
                                        docked: 'top',
                                        title: 'Email broker',
                                        items : [
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                text    : 'Close',
                                                handler : function () {
                                                    var sheet = this.parent.parent;
                                                    sheet.hide();
                                                    sheet.getHideAnimation().on({
                                                        animationend: sheet.destroy,
                                                        scope: sheet
                                                    });
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'contactForm',
                                        styleHtmlContent: true,
                                        to: propertyData.BrokerEmail,
                                        subject: propertyData.EmailSubj
                                    }
                                ]
                            });
                            emailButton.parent.parent.add(emailBrokerSheet).show();
                        }
                    },
                    {
                        height: 600,
                        tpl   : ['<a href="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID={PropID}&imagecode=1" target="_blank">Open in new window/Save PDF</a><br>',
                                '<iframe width="100%" height="90%" src="https://docs.google.com/viewer?url=http%3A%2F%2Fwww.argus-selfstorage.com%2Fshowdbimage%2Fshowproppdf.asp%3FPropID%3D{PropID}%26imagecode%3D1&embedded=true"></iframe>'
                                ].join('')

                    }
                ]
            }
        ];
        this.callParent(arguments);
    }
});