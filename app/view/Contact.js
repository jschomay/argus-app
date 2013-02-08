Ext.define('ArgusApp.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype : 'contact',

    config: {
        url: 'put-contact-here.php',
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Contact Us'
            },
            {
                xtype: 'fieldset',
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
});