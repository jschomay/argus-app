Ext.define('ArgusApp.view.Contact', {
    extend: 'Ext.Container',
    xtype : 'contact',

    config: {
        styleHtmlContent: true,
        scrollable: true,
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
                    window.location = button.config.callUrl;
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
                xtype: 'contactForm',
                to: 'info@argus-realestate.com'
            }
        ]
    }
});