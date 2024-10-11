var laptop = [
    {
        'img':'./Image/Samsung-laptop1.jpg',
        'price':'349.99$',
        'desc':'Samsung Galaxy Book Go Laptop Qualcomm'
    },
    {
        'img':'./Image/Samsung-laptop4.jpg',
        'price':'399.99$',
        'desc':'Samsung Galaxy Book pro 13.3 I5 11th'
    },
    {
        'img':'./Image/Samsung-laptop2.jpg',
        'price':'599.99$',
        'desc':'Samsung Galaxy Book 15.6 Laptop I5 with window 10'
    },
    {
        'img':'./Image/Samsung-laptop6.jpg',
        'price':'499.99$',
        'desc':'Samsung Galaxy Book Pro 360 Intel i7 11th Gen'
    },

    
    {
        'img':'./Image/Samsung-laptop3.jpg',
        'price':'2049.99$',
        'desc':'Samsung Galaxy Book4 Pro Evo 16inch 3k'
    },
    {
        'img':'./Image/Samsung-laptop5.jpg',
        'price':'1399.00$',
        'desc':'Samsung Galaxy Book Pro Laptop i7-1165G7 Evo'
    },
    
    

];
var itemLaptop ='';
function getDataLaptop(){
    for(var k in laptop){
        itemLaptop += `
            <div class="laptop">
                <img src="${laptop[k]['img']}" alt="Card Image">
                <div class="laptop-content">
                    <h4>${laptop[k]['desc']}</h4>
                    <h3>${laptop[k]['price']}</h3>
                    <button class="btn-laptop">Buy Now</button>
                </div>
            </div>
        `;
    }
    document.querySelector('.laptop-container').innerHTML = itemLaptop;
}
getDataLaptop();