

var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex +=n);
}
function currentSlide(n){
    showSlide(slideIndex = n);
}
function showSlide(n){
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for( i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex -1 ].style.display = "block";
    dots[slideIndex -1 ].className += "active";
}

//auto slide
var slideIndex = 0;
showSlide();

function showSlide(){
    var i;
    var slide = document.getElementsByClassName("mySlides");
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slide.length){
        slideIndex = 1
    }
    slide[slideIndex -1].style.display = "block";
    setTimeout(showSlide, 3000);
}
// -------------------end slide-------------------

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

// -------------------------------------------------

var tv =[
    {
        'img':'./Image/Samsung-tv3.jpg',
        'price':'198.00$',
        'desc':'Samsung 32inch'
    },
    {
        'img':'./Image/Samsung-tv1.jpg',
        'price':'419.00$',
        'desc':'Samsung 43inch 4k 2021'
    },
    {
        'img':'./Image/Samsung-tv2.jpg',
        'price':'479.00$',
        'desc':'Samsung 50inch 4k 2021'
    },
    {
        'img':'./Image/Samsung-tv4.jpg',
        'price':'539.00$',
        'desc':'Samsung 55inch 4k 2021'
    },
    {
        'img':'./Image/Samsung-tv6.jpg',
        'price':'756.00$',
        'desc':'Samsung 65inch 4k 2021'
    },
    {
        'img':'./Image/Samsung-tv5.jpg',
        'price':'927.99$',
        'desc':'Samsung 75inch 4k 2021'
    }
];
var itemTV = '';
function getDataTV(){
    for(var j in tv){
        itemTV += `
            <div class="tv">
                <img src="${tv[j]['img']}" alt="Card Image">
                <div class="tv-content">
                    <h4>${tv[j]['desc']}</h4>
                    <h3>${tv[j]['price']}</h3>
                    <button class="btn-tv">Buy Now</button>
                </div>
            </div>
        `;
    }
    document.querySelector('.tv-container').innerHTML = itemTV;
}
getDataTV();

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