Ext.define('ArgusApp.view.ContactForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Hidden'
    ],
    xtype : 'contactForm',

    config: {
        to: 'jschomay@gmail.com',
        subject: 'Message from Argus mobile app',
        height: 500,
        scrollable: false,
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'phone',
                        label: 'Phone'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name: 'company',
                        label: 'Company'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'message',
                        label: 'Message'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'action',
                        value: 'sendmail'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'to'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'subject'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'confirm',
                handler: function() {
                    var form = this.up('formpanel');
                    form.setValues({
                        to: form.getTo(),
                        subject: form.getSubject()
                    });
                    console.log("form data", form.getValues());
                    form.submit({
                        url: "http://m.argus-selfstorage.com/proxy.php",
                        method: 'POST',
                        success: function() {
                            Ext.Msg.alert('Success', 'Your message has been sent.', Ext.emptyFn);

                        }
                    });
                }
            }

        ]
    }
});