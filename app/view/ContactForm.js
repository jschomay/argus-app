Ext.define('ArgusApp.view.ContactForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
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
                        label: 'Phone Number'
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
                    form.submit({
                        url: "xxx",
                        // url: "http://www.argus-selfstorage.com.php53-11.dfw1-2.websitetestlink.com/mobile/rest-apis.php?",
                        method: 'POST',
                        success: function() {
                            alert('form submitted successfully!');
                        }
                    });
                }
            }

        ]
    }
});