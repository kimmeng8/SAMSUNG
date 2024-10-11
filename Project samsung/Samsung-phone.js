var phone =[
    {
        'img':'./Image/samsungphone1.jpg',
        'discount' : '10%',
        'price' : '299$',
        'desc' : 'Samsung S20 Ultra'
    },
    {
        'img':'./Image/samsungphone2.jpg',
        'discount' : '30%',
        'price' : '499$',
        'desc' : 'Samsung S21 Ultra'
    },
    {
        'img':'./Image/samsungphone3.jpg',
        'discount' : '50%',
        'price' : '699$',
        'desc' : 'Samsung S22 Ultra'
    },
    {
        'img':'./Image/samsungphone4.jpg',
        'discount' : '60%',
        'price' : '999$',
        'desc' : 'Samsung S23 Ultra'
    },
    {
        'img':'./Image/samsungphone5.jpg',
        'discount' : '60%',
        'price' : '1399$',
        'desc' : 'Samsung S24 Ultra'
    },
    {
        'img':'./Image/samsungphone6.jpg',
        'discount' : '60%',
        'price' : '299$',
        'desc' : 'Samsung A55'
    },
    {
        'img':'./Image/samsungphone8.jpg',
        'discount' : '60%',
        'price' : '359$',
        'desc' : 'Samsung A54'
    },
    {
        'img':'./Image/samsungphone7.jpg',
        'discount' : '60%',
        'price' : '499$',
        'desc' : 'Samsung A53'
    },
    {
        'img':'./Image/samsungphone9.jpg',
        'discount' : '60%',
        'price' : '140.69$',
        'desc' : 'Samsung A52'
    },
    {
        'img':'./Image/samsungphone10.jpg',
        'discount' : '60%',
        'price' : '122.69$',
        'desc' : 'Samsung A51'
    },
    {
        'img':'./Image/samsungphone11.jpg',
        'discount' : '60%',
        'price' : '93.49$',
        'desc' : 'Samsung A50'
    },
    {
        'img':'./Image/samsungphone12.jpg',
        'discount' : '60%',
        'price' : '140.99$',
        'desc' : 'Samsung A02'
    },
    {
        'img':'./Image/samsungphone13.jpg',
        'discount' : '60%',
        'price' : '119$',
        'desc' : 'Samsung A03'
    },
    {
        'img':'./Image/samsungphone14.jpg',
        'discount' : '60%',
        'price' : '109$',
        'desc' : 'Samsung A04'
    },
    {
        'img':'./Image/samsungphone15.jpg',
        'discount' : '60%',
        'price' : '124$',
        'desc' : 'Samsung A05'
    },
    {
        'img':'./Image/samsungphone16.jpg',
        'discount' : '60%',
        'price' : '119$',
        'desc' : 'Samsung A06'
    },
    {
        'img':'./Image/samsungphone17.jpg',
        'discount' : '60%',
        'price' : '145$',
        'desc' : 'Samsung A12'
    },
    {
        'img':'./Image/samsungphone18.jpg',
        'discount' : '60%',
        'price' : '169$',
        'desc' : 'Samsung A13'
    },
    {
        'img':'./Image/samsungphone19.jpg',
        'discount' : '60%',
        'price' : '219$',
        'desc' : 'Samsung A14'
    },
    {
        'img':'./Image/samsungphone20.jpg',
        'discount' : '60%',
        'price' : '229$',
        'desc' : 'Samsung A15 '
    },
    
];
var item = '';
function getDataPhone(){
    for(var i in phone){
        item += `
            <div class="phone">
                <img src="${phone[i]['img']}" alt="Card Image">
                <div class="phone-content">
                    <h4>${phone[i]['desc']}</h4>
                    <h3>${phone[i]['price']}</h3>
                    <button class="btn-phone">Buy Now</button>
                </div>
            </div>
        `;
    }
    document.querySelector('.phone-container').innerHTML = item;
}
getDataPhone();


var tablet = [
    {
        'img':'./Image/tab1.jpg',
        'discount' : '60%',
        'price' : '39.99$',
        'desc' : 'Samsung Galaxy Tab S Series (2014) '
    },
    {
        'img':'./Image/tab2.jpg',
        'discount' : '60%',
        'price' : '89.00$',
        'desc' : 'Samsung Galaxy Tab S2 (2015)'
    },
    {
        'img':'./Image/tab4.jpg',
        'discount' : '60%',
        'price' : '109.00$',
        'desc' : 'Samsung Galaxy Tab S2 VE (2016)'
    },
    {
        'img':'./Image/tab3.jpg',
        'discount' : '60%',
        'price' : '140.00$',
        'desc' : 'Samsung Galaxy Tab S3 (2017)'
    },
    {
        'img':'./Image/tab5.jpg',
        'discount' : '60%',
        'price' : '163.99$',
        'desc' : 'Samsung Galaxy Tab S4 (2018)'
    },
    {
        'img':'./Image/tab6.jpg',
        'discount' : '60%',
        'price' : '349.00$',
        'desc' : 'Samsung Galaxy Tab S5e (2019)'
    },
    {
        'img':'./Image/tab7.jpg',
        'discount' : '60%',
        'price' : '375.00$',
        'desc' : 'Samsung Galaxy Tab S6 Lite (2019)'
    },
    {
        'img':'./Image/tab8.jpg',
        'discount' : '60%',
        'price' : '529.99$',
        'desc' : 'Samsung Galaxy Tab S7 Plus (2020)'
    },
    {
        'img':'./Image/tab9.jpg',
        'discount' : '60%',
        'price' : '699.99$',
        'desc' : 'Samsung Galaxy Tab S8 Plus (2022)'
    },
    {
        'img':'./Image/tab10.jpg',
        'discount' : '60%',
        'price' : '949.99$',
        'desc' : 'Samsung Galaxy Tab S8 ultra (2022)'
    },
    {
        'img':'./Image/tab11.jpg',
        'discount' : '60%',
        'price' : '349.99$',
        'desc' : 'Samsung Galaxy Tab S9 FE (2023)'
    },
    {
        'img':'./Image/tab12.jpg',
        'discount' : '60%',
        'price' : '599.99$',
        'desc' : 'Samsung Galaxy Tab S9 FE Plus (2023)'
    },
    {
        'img':'./Image/tab13.jpg',
        'discount' : '60%',
        'price' : '999.00$',
        'desc' : 'Samsung Galaxy Tab S10 Plus (2024)'
    },
    {
        'img':'./Image/tab14.jpg',
        'discount' : '60%',
        'price' : '1399.00$',
        'desc' : 'Samsung Galaxy Tab S10 Ultra (2024)'
    },
    {
        'img':'./Image/tab16.jpg',
        'discount' : '60%',
        'price' : '220.00$',
        'desc' : 'Samsung Galaxy Tab A8 (2021)'
    },
    {
        'img':'./Image/tab15.jpg',
        'discount' : '60%',
        'price' : '379.00$',
        'desc' : 'Samsung Galaxy Tab A9 Plus (2023)'
    },
    
];
var itemTab = '';
function getDataTab(){
    for(var j in tablet){
        itemTab += `
            <div class="tablet">
                <img src="${tablet[j]['img']}" alt="Card Image">
                <div class="tablet-content">
                    <h4>${tablet[j]['desc']}</h4>
                    <h3>${tablet[j]['price']}</h3>
                    <button class="btn-phone">Buy Now</button>
                </div>
            </div>
        `;
    }
    document.querySelector('.tablet-container').innerHTML = itemTab;
}
getDataTab();