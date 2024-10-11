var watch = [
    {
        'img':'./Image/watch1.jpg',
        'price':'119.99$',
        'desc':'Samsung Galaxy Watch Gear S2 (2015)'
    },
    {
        'img':'./Image/watch2.jpg',
        'price':'84.97$',
        'desc':'Samsung Galaxy Watch Gear S3 (2016)'
    },
    {
        'img':'./Image/watch3.jpg',
        'price':'242.98$',
        'desc':'Samsung Galaxy Watch Gear Sport (2017)'
    },
    {
        'img':'./Image/watch4.jpg',
        'price':'209.00$',
        'desc':'Samsung Galaxy Watch Series (2018)'
    },
    {
        'img':'./Image/watch5.jpg',
        'price':'64.97$',
        'desc':'Samsung Galaxy Watch Active (2018)'
    },
    {
        'img':'./Image/watch6.jpg',
        'price':'88.45$',
        'desc':'Samsung Galaxy Watch Active 2 (2019)'
    },
    {
        'img':'./Image/watch7.jpg',
        'price':'119.00$',
        'desc':'Samsung Galaxy Watch 4 Classic Bluetooth LTE (2019)'
    },
    {
        'img':'./Image/watch8.jpg',
        'price':'129.99$',
        'desc':'Samsung Galaxy Watch 4 Classic Bluetooth GPS (2019)'
    },
];
var itemWatch ='';
function getDataWatch(){
    for(var l in watch){
        itemWatch += `
            <div class="Accessories">
                <img src="${watch[l]['img']}" alt="Card Image">
                <div class="Accessories-content">
                    <h4>${watch[l]['desc']}</h4>
                    <h3>${watch[l]['price']}</h3>
                    <button class="btn-phone">Buy Now</button>
                </div>
            </div>
        `;
    }
    document.querySelector('.Accessories-container').innerHTML = itemWatch;
}
getDataWatch();

var Buds = [
    {
        'img':'./Image/Buds1.jpg',
        'price':'39.79$',
        'desc':'Galaxy buds (2019)'
    },
    {
        'img':'./Image/Buds2.jpg',
        'price':'48.95$',
        'desc':'Galaxy buds + (2020)'
    },
    {
        'img':'./Image/Buds3.jpg',
        'price':'169.00$',
        'desc':'Galaxy buds Pro (2021)'
    },
    {
        'img':'./Image/Buds4.jpg',
        'price':'98.00$',
        'desc':'Galaxy buds 2 (2021)'
    },
    {
        'img':'./Image/Buds5.jpg',
        'price':'180.00$',
        'desc':'Galaxy buds 3 (2024)'
    },
    {
        'img':'./Image/Buds6.jpg',
        'price':'229.00$',
        'desc':'Galaxy buds 3 Pro (2024)'
    },
    {
        'img':'./Image/level.jpg',
        'price':'169.99$',
        'desc':'Samsung Level Headphone'
    },
    {
        'img':'./Image/level2.jpg',
        'price':'39.99$',
        'desc':'Samsung Level U2'
    },
];
var itemBuds ='';
function getDataBuds(){
    for(var m in Buds){
        itemBuds += `
            <div class="Accessories">
                <img src="${Buds[m]['img']}" alt="Card Image">
                <div class="Accessories-content">
                    <h4>${Buds[m]['desc']}</h4>
                    <h3>${Buds[m]['price']}</h3>
                    <button class="btn-phone">Buy Now</button>
                </div>
            </div>
        `;
    }
    document.querySelector('.Accessories2-container').innerHTML = itemBuds;
}
getDataBuds();