Ext.define("ArgusApp.view.PropertyDetail", {
    extend: 'Ext.Container',
    xtype: "propertyDetail",
    config: {
        scrollable: true,
        layout: 'vbox',
        style: "background: white;"
    },
    constructor: function(config) {
        propertyData = config.propertyData;
        config.defaults = {
            data : propertyData,
            padding: 20
        };
        config.items = [
            {
                tpl   : 'Listing Broker: {Broker}'
            },
            {
                xtype: 'button',
                padding: "5 10",
                margin: '5 20',
                style: "text-align: center;",
                tpl: 'Call {BrokerPhone}',
                callUrl: 'tel:'+propertyData.BrokerPhone,
                ui: 'confirm',
                handler: function(button, event){
                    window.location = button.config.callUrl;
                }
            },
            {
                xtype: 'button',
                padding: "5 10",
                margin: '5 20',
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
                        scrollable: true,
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
                height: 500,
                tpl   : ['<a href="https://maps.google.com/maps?q={Address}%20{City}%20{State}%20{ZipCode}" target="_blank">Location</a> | <a href="http://zipwho.com/?zip={ZipCode}&city=&filters=--_--_--_--&state=&mode=zip" target="_blank">Demographic</a><br><br>',
                        '<a href="http://www.argus-selfstorage.com/property_pdfs/{PDFFile}" target="_blank">Open in new window/Save PDF</a><br><br>',
                        '<iframe width="100%" height="90%" src="https://docs.google.com/viewer?url=http%3A%2F%2Fwww.argus-selfstorage.com%2Fproperty_pdfs%2F{PDFFile}&embedded=true"></iframe>'
                        ].join('')

            }
        ];
        this.callParent(arguments);
    }
});