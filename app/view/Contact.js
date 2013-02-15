Ext.define('ArgusApp.view.Contact', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
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
                xtype: 'button',
                text: 'Call us now (1-800-55-STORE)',
                callUrl: 'tel:1-800-55-STORE',
                ui: 'confirm',
                handler: function(button, event){
                    window.location = button.callUrl;
                }
            },
            {
                html: ['<div style="margin-top:20px; maring-bottom:20px;">',
                //'<b>Phone</b>',
                //'<a href="tel:1-800-55-STORE">1-800-55-STORE</a><br>',
                '<br><b>Fax</b><br>',
                '303-317-5334<br><br>',
                '<b>Address</b><br>',
                '2993 S. Peoria Street<br>',
                'Suite 105<br>',
                'Aurora, CO  80014<br><br>',
                '<b>Email us</b><br><br>',
                '</div>'].join('')
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