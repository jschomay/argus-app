Ext.define('ArgusApp.model.Property', {
    extend: 'Ext.data.Model',
    xtype: 'property',
    
    config: {
        fields: [
            'PropID', 
            'State', 
            'City', 
            'Broker', 
            'BrokerPhone', 
            'BrokerCompany', 
            'Contract', 
            'Sold', 
            'PriceText', 
            'Units', 
            'RentableSF', 
            'New', 
            'NewPrice', 
            'BrokerEmail', 
            'EmailSubj',
            {
                name: 'Price',
                type: 'string',
                convert: function(value, record) {
                    if (record.get('Sold') === '-1')
                        return '<div class="sold">SOLD</div>';
                    if (value === "0")
                        return '';
                    else
                        return value;
                }
            }
        ]
    }
});