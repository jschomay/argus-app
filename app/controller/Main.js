Ext.define('ArgusApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            searchProperties: 'searchProperties',
            broker: 'broker',
            main: 'main',
            welcome: 'welcome'
        },
        control: {
            'searchProperties list': {
                disclose: 'showPropertyDetail'
            },
            'broker list':{
                select: 'showBrokerDetail',
                disclose: 'showBrokerDetail'
            },
            'button#showListings': {
                tap: function() {
                    console.log(this.getMain());
                    this.getMain().setActiveItem(1);
                }
            },
            'button[action="showDetails"]': {
                tap: function(button) {
                    console.log("tap show details for property: ", button.id);
                    var store = Ext.getStore('Properties');
                    var record = store.findRecord('PropID', button.id);
                    var propertyData = record.data;

                    this.getWelcome().add(Ext.create("ArgusApp.view.PropertyDetail", {propertyData: propertyData})).show();
                }
            }
        }
    },

    showPropertyDetail: function(list, record) {
        console.log('disclose event from main.controller', arguments);
        this.getSearchProperties().push({
            xtype: 'panel',
            //title: record.data.title,
            title: 'Sample Property',
            //html: record.data.content,
            html: ['<div class="listing">',
                        '<div class="scroll-image"><img style="float: left;display: block;margin-right: 20px;" src="http://www.argus-selfstorage.com/showdbimage/showproppdf.asp?PropID=677&amp;imagecode=5" alt="" border="0"></div>',
                        '<div class="scroll-content">',
                            '<h3> <a href="#" class="specials">Bandon, OR</a></h3>',
                            '<div class="scroll-content-section">',
                                '<p> $749,000</p>',
                                '<p> <a href="#" class="specials">View Property Detail</a> </p>',
                            '</div>',
                            '<div class="scroll-content-section"><p>19,268 rsf</p>',
                                '<p> 141 units </p>',
                            '</div>',
                        '</div>',
                        '<div class="clear"></div>',
                    '</div>'].join(""),
            scrollable: true
        });
    },
    showBrokerDetail: function(list, record) {
        console.log('show broker detail from main.controller', arguments);
        this.getBroker().push({
            xtype: 'panel',
            title: record.data.title,
            // title: 'Broker Details',
            //html: record.data.content,
            html: '<div id="main_content" class="fullwidth">                <a name="GuyBlake"></a>        <div class="broker-box">          <div class="broker-image"><img src="http://www.argus-selfstorage.com/assets/images/Blake.jpg" alt="Guy Blake" width="100"></div>          <div class="broker-bio">            <h2 style="" class="sIFR-replaced"><object class="sIFR-flash" type="application/x-shockwave-flash" id="sIFR_replacement_5" name="sIFR_replacement_5" data="assets/sifr/goudytrajan-regular.swf" width="197" height="36" style=""><param name="flashvars" value="id=sIFR_replacement_5&amp;content=Guy%2520Blake%252C%2520CCIM&amp;width=500&amp;renderheight=36&amp;link=&amp;target=&amp;size=23&amp;css=.sIFR-root%257Bcolor%253A%2523464646%253B%257D&amp;cursor=default&amp;tunewidth=0&amp;tuneheight=6&amp;offsetleft=&amp;offsettop=8&amp;fitexactly=true&amp;preventwrap=false&amp;forcesingleline=true&amp;antialiastype=&amp;thickness=&amp;sharpness=&amp;kerning=&amp;gridfittype=pixel&amp;flashfilters=&amp;opacity=100&amp;blendmode=&amp;selectable=true&amp;fixhover=true&amp;events=false&amp;delayrun=false&amp;version=436"><param name="wmode" value="transparent"><param name="bgcolor" value="transparent"><param name="allowScriptAccess" value="always"><param name="quality" value="best"></object><span class="sIFR-alternate" id="sIFR_replacement_5_alternate">Guy Blake, CCIM</span></h2>            <p>Guy Blake, Associate Broker of Pyramid Brokerage Company, has been licensed since 1994 and involved in both residential and commercial real estate.  He has extensive experience selling income properties including apartments, strip centers, mobile home parks and marinas.  Guy has earned the prestigious CCIM designation and is also a Certified Exchange Advisor for those clients performing 1031 exchanges.  He is a member of the New York State Association of Realtors, the National Association of Realtors and the Ulster County Chamber of Commerce.  Guy represents the Argus Self Storage Sales Network in Upstate New York and Western Connecticut.</p>          </div>          <div class="broker-contact"><b>Pyramid Brokerage Company</b><br>            356 Meadow Ave., 2nd Floor<br>            Newburgh, NY 12550<br>            845-522-5900 (phone)<br>            845-522-5970 (fax)<br>            <a href="mailto:gblake@pyramidbrokerage.com">gblake@pyramidbrokerage.com</a><br>            <br>            <b>Argus Territory: </b>Upstate New York, Western Connecticut</div>          <div class="clear"></div>          <div class="separate_line"></div>        </div>        <a name="LindaCinelli"></a>        <div class="broker-box">          <div class="broker-image"><img src="http://www.argus-selfstorage.com/assets/images/Cinelli.jpg" alt="Linda Cinelli" width="150"></div>          <div class="broker-bio">            <h2 style="" class="sIFR-replaced"><object class="sIFR-flash" type="application/x-shockwave-flash" id="sIFR_replacement_6" name="sIFR_replacement_6" data="assets/sifr/goudytrajan-regular.swf" width="291" height="36" style=""><param name="flashvars" value="id=sIFR_replacement_6&amp;content=Linda%2520Cinelli%252C%2520CCIM%252C%2520CEA&amp;width=500&amp;renderheight=36&amp;link=&amp;target=&amp;size=23&amp;css=.sIFR-root%257Bcolor%253A%2523464646%253B%257D&amp;cursor=default&amp;tunewidth=0&amp;tuneheight=6&amp;offsetleft=&amp;offsettop=8&amp;fitexactly=true&amp;preventwrap=false&amp;forcesingleline=true&amp;antialiastype=&amp;thickness=&amp;sharpness=&amp;kerning=&amp;gridfittype=pixel&amp;flashfilters=&amp;opacity=100&amp;blendmode=&amp;selectable=true&amp;fixhover=true&amp;events=false&amp;delayrun=false&amp;version=436"><param name="wmode" value="transparent"><param name="bgcolor" value="transparent"><param name="allowScriptAccess" value="always"><param name="quality" value="best"></object><span class="sIFR-alternate" id="sIFR_replacement_6_alternate">Linda Cinelli, CCIM, CEA</span></h2>            <p>Linda Cinelli has 23 years of experience in commercial real estate and land sales.  Over the past ten years she has specialized in investments and the self storage industry.  Her areas of expertise include real estate acquisition, asset disposition, development and institutional representation.  She is a CCIM whose other professional affiliations include CIREI, CBA, IREOBA.  She has achieved the designation of CEA, a Certified Exchange Advisor, for those clients performing 1031 exchanges.  Linda is the founder and President of the Northern New Jersey CCIM District which has been merged into the Metro New York CCIM Chapter where she serves on the Board of Directors.  Linda is a member of the New Jersey, New York and the National Self Storage Associations.  Her client list is comprised of many recognized names in both private and public sectors, including several self storage projects.  In 2003 she founded LC Realty and is the Argus Self Storage Sales Network Broker Affiliate for the Northern New Jersey, New York City and Long Island territory.  Linda is licensed in New York, New Jersey and Florida.</p>          </div>          <div class="broker-contact"><b>LC Realty </b><br>            1214 Old Highway 28<br>            North Branch, NJ  08876<br>            908-722-5661 (phone)<br>            908-429-1059 (fax)<br>            <a href="mailto:linda@lcrealtyusa.com">linda@lcrealtyusa.com</a><br>            <br>            <b>Argus Territory: </b>Northern New Jersey, New York City &amp; Long Island</div>          <div class="clear"></div>          <div class="separate_line"></div>        </div>        <a name="JosephMendola"></a>        <div class="broker-box">          <div class="broker-image"><img src="http://www.argus-selfstorage.com/assets/images/Mendola.JPG" alt="Joseph Mendola" width="150"></div>          <div class="broker-bio">            <h2 style="" class="sIFR-replaced"><object class="sIFR-flash" type="application/x-shockwave-flash" id="sIFR_replacement_7" name="sIFR_replacement_7" data="assets/sifr/goudytrajan-regular.swf" width="201" height="36" style=""><param name="flashvars" value="id=sIFR_replacement_7&amp;content=Joseph%2520Mendola&amp;width=500&amp;renderheight=36&amp;link=&amp;target=&amp;size=23&amp;css=.sIFR-root%257Bcolor%253A%2523464646%253B%257D&amp;cursor=default&amp;tunewidth=0&amp;tuneheight=6&amp;offsetleft=&amp;offsettop=8&amp;fitexactly=true&amp;preventwrap=false&amp;forcesingleline=true&amp;antialiastype=&amp;thickness=&amp;sharpness=&amp;kerning=&amp;gridfittype=pixel&amp;flashfilters=&amp;opacity=100&amp;blendmode=&amp;selectable=true&amp;fixhover=true&amp;events=false&amp;delayrun=false&amp;version=436"><param name="wmode" value="transparent"><param name="bgcolor" value="transparent"><param name="allowScriptAccess" value="always"><param name="quality" value="best"></object><span class="sIFR-alternate" id="sIFR_replacement_7_alternate">Joseph Mendola</span></h2>            <p>Joseph Mendola, Senior Vice President, has been employed by NAI Norwood Group, Inc. since 1980.  He has managed every aspect of real estate acquisition and development projects for Norwood clients in Massachusetts since 1982.  He has developed over $35 million of commercial property since that time, and he is a Certified Commercial Investment Member (CCIM) of the National Association of REALTORS.  With a special emphasis in brokering self-storage facilities, Joe covers the New England area for the Argus Self Storage Sales Network.</p>          </div>          <div class="broker-contact"><b>NAI Norwood Group</b><br>            116 South River Road<br>            Bedford, NH 03110<br>            603-657-1925 (phone)<br>             (fax)<br>            <a href="mailto:joe@nainorwoodgroup.com">joe@nainorwoodgroup.com</a><br>            <a href="http://www.nainorwoodgroup.com/">www.nainorwoodgroup.com</a><br>            <br>            <b>Argus Territory: </b>Eastern Connecticut, Maine, Massachusetts, New Hampshire, Vermont</div>          <div class="clear"></div>          <div class="separate_line"></div>        </div>        <a name="CharlesShields"></a>        <div class="broker-box">          <div class="broker-image"><img src="http://www.argus-selfstorage.com/assets/images/Shields.jpg" alt="Charles E. Shields" width="150"></div>          <div class="broker-bio">            <h2 style="" class="sIFR-replaced"><object class="sIFR-flash" type="application/x-shockwave-flash" id="sIFR_replacement_8" name="sIFR_replacement_8" data="assets/sifr/goudytrajan-regular.swf" width="223" height="36" style=""><param name="flashvars" value="id=sIFR_replacement_8&amp;content=Charles%2520E.%2520Shields&amp;width=500&amp;renderheight=36&amp;link=&amp;target=&amp;size=23&amp;css=.sIFR-root%257Bcolor%253A%2523464646%253B%257D&amp;cursor=default&amp;tunewidth=0&amp;tuneheight=6&amp;offsetleft=&amp;offsettop=8&amp;fitexactly=true&amp;preventwrap=false&amp;forcesingleline=true&amp;antialiastype=&amp;thickness=&amp;sharpness=&amp;kerning=&amp;gridfittype=pixel&amp;flashfilters=&amp;opacity=100&amp;blendmode=&amp;selectable=true&amp;fixhover=true&amp;events=false&amp;delayrun=false&amp;version=436"><param name="wmode" value="transparent"><param name="bgcolor" value="transparent"><param name="allowScriptAccess" value="always"><param name="quality" value="best"></object><span class="sIFR-alternate" id="sIFR_replacement_8_alternate">Charles E. Shields</span></h2>            <p>Charles E. Shields, Jr., Vice President of Beacon Commercial Real Estate (formerly Hayden Real Estate) has been with the company since 1998. Chuck has focused on brokerage in the Pennsylvania and New Jersey region since 1973 and has specialized in industrial office and investment properties. He is a member of the Tristate Commercial and Industrial Association of Realtors. Chuck covers the Southeast Pennsylvania, South New Jersey and Delaware regions for Argus Self Storage Sales Network.</p>          </div>          <div class="broker-contact"><b>Beacon Commercial Real Estate</b><br>            100 Matsonford Rd., Suite 220<br>            Radnor, PA 19087<br>            610-862-1645 (phone)<br>            610-828-3873 (fax)<br>            <a href="mailto:cshields@beaconcre.com">cshields@beaconcre.com</a><br>            <br>            <b>Argus Territory: </b>Southern New Jersey, Eastern Pennsylvania, Delaware </div>          <div class="clear"></div>          <div class="separate_line"></div>        </div>      </div>',
            scrollable: true
        });
    }

});