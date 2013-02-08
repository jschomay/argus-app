Ext.define('ArgusApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'ArgusApp.view.SearchProperties',
        'ArgusApp.view.Contact',
        'Ext.MessageBox'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Argus Self Storage'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Search Properties',
                iconCls: 'search2',
                xtype: 'searchProperties'
            },
            {
                title: "Contact",
                iconCls: 'phone1',
                xtype: 'contact'
            },
            {
                title: "Find a Broker",
                iconCls: 'address-book' //or user_business
            },
            {
                title: "About",
                iconCls: 'info2'
            },
            {
                title: "Other?",
                iconCls: 'help'
            },
            {
                title: "Contact",
                iconCls: 'phone1',
                xtype: 'formpanel',
                url: 'put-contact-here.php',
                layout: 'vbox',

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: '(email address is optional)',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',
                        handler: function() {
                            this.up('formpanel').submit();
                            Ext.Msg.alert("Your message has been sent.");
                        }
                    }
                ]
            }
        ]
    }
});
