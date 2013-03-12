Ext.define('ArgusApp.model.Property', {
    extend: 'Ext.data.Model',
    xtype: 'property',
    
    config: {
        fields: [
            'PropID', 
            'Address', 
            'State', 
            'City', 
            'ZipCode',
            'Broker', 
            'BrokerPhone', 
            'BrokerCompany', 
            'Units', 
            'RentableSF', 
            'PDFFile', 
            'PropThumb', 
            'PropImage', 
            'BrokerEmail', 
            'EmailSubj',
            'Sold',
            {
                name: 'PriceText', 
                type: 'string',
                convert: function (value, record) {
                    if (value !== '')
                        return '<br>'+value;
                }
            },
            {
                name: 'Price',
                type: 'string',
                convert: function(value, record) {
                    if (record.get('Sold') === '-1')
                        return '<span class="sold">SOLD</span>';
                    if (value === "0")
                        return '';
                    else
                        // add commas
                        var rgx = /(\d+)(\d{3})/;
                        while (rgx.test(value)) {
                            value = value.replace(rgx, '$1' + ',' + '$2');
                        }
                        return '$'+value;
                }
            },
            {
                name: "Contract",
                type: 'string',
                convert: function (value, record) {
                    if (value === "-1")
                        return "under-contract";
                    else 
                        return '';
                }
            },
            {
                name: "New",
                type: 'string',
                convert: function (value, record) {
                    if (value === "-1")
                        return "new";
                    else 
                        return '';
                }
            },
            {
                name: "NewPrice",
                type: 'string',
                convert: function (value, record) {
                    if (value === "-1")
                        return "new-price";
                    else 
                        return '';
                }
            }
        ]
    }
});