
window.addEventListener("scroll",function(){
    var head = document.querySelector(".mainhead__main");
    head.classList.toggle("sticky",window.scrollY>120);
//    if(this.window.scrollY>120){
//        head.classList.add("sticky");
//    }
});

// $('a').click( function(e) {e.preventDefault(); /*a tag i ucun yazilib ancaq bezi buglar var ona gore isletmedim*/ return false; } );

///grid and list view in shop//
// $(".second").click(function () {
//     $(".shop-wrapper__product__all").css({ display: "none" });
//     $(".shop-wrapper__product__listview").css({ display: "block" });
//   });

//   const listItem = $(".second");

//   listItem.click(function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//   });

//   $(".active").click(function () {
//     $(".shop-wrapper__product__all").css({ display: "none" });
//     $(".shop-wrapper__product__listview").css({ display: "block" });

//   });

//   const listItem2 = $(".active");
//   listItem.click(function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//   });



 $(document).ready(function(){

    $(".productdetails-main__top__bottomimages img").click(function(){
        console.log("clicked")
        var image = $(this).attr("src");
        $(".productdetails-main__top__mainimage img").attr("src",image);
    })
});
// single product image js ends



//scroll for all pagws starts
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.scrolling').removeClass('hide');
    } else {
        $('.scrolling').addClass('hide');
    }
});
$('.scrolling').on('click', function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 0);
});
//scroll for all pages ends




//productdetails page tab switcher starts
$(function(){
    var tab = $(".productdetails-main__bottom__comments__nav__btn"),
    content = $(".productdetails-main__bottom__comments__content__tab");

    tab.filter(':first').addClass('active');

    content.filter(':not(:first)').hide();

    tab.click(function(){
        var indeks = $(this).index();
        tab.removeClass('active').eq(indeks).addClass('active');
        console.log(indeks)
        content.hide().eq(indeks).fadeIn(500);
        return false;
    })
})


//shop sehifesi ucun tab slide yazilib. ancaq islememe sebebini tapa bilmedim
// $(function(){
//     var tab1 = $("#tab1"),
//     content1 = $(".mycontent");


//     content1.filter(':not(:first)').hide();

//     tab1.click(function(){
//         console.log("clicked")
//         var indeks2 = $(this).index();
//         console.log(content1)
//         console.log(indeks2)
//         content1.hide().eq(indeks2).fadeOut(400);
//         return false;
//     })
// })
// $(function() {
//     $(".mycontent").hide();
//     $(".mycontent").first().show();

//     $(".list").on("click", function() {
//       let sira = $(this).index();
//       console.log(sira)

//       $(".mycontent").hide();
//       $(".mycontent").eq(sira).show();
//     });
//   });
//shop sehifesi end



//shop tab switcher js




///end





//productdetails page tab switcher ends

// const hamburger = document.querySelector(".off-canvas-btn > .fa-bars");
// var body = document.querySelector("body")

// hamburger.addEventListener("click",function nav(){
//     var navlinks = document.querySelector(" .mainhead__main__navbar");

//     // navlinks.style.transform = `translateX(0%)`
//     navlinks.style.display = "block"

// });

// $(document).ready(function(){
//     var cartCountValue = 0;
//     var cartCount = $('.myoffcanvas .count');
//     $(cartCount).text(cartCountValue);

//     $('.fa-bag-shopping').on('click',function(){
//         var cartBtn = this;
//         var cartCountPosition = $(cartCount).offset();
//         var btnPosition = $(this).offset();
//         var leftPos = cartCountPosition.left < btnPosition.left ? btnPosition.left - (btnPosition.left - cartCountPosition.left) : cartCountPosition.left;

//         var topPos = cartCountPosition.top < btnPosition.top ? cartCountPosition.top : cartCountPosition.top;
//         $(cartBtn).append("<span class ='count'>1</span>");

//          $(cartBtn).find(".count").each(function(i,count){
//              $(count).offset({
//                  left: leftPos,
//                  top: topPos
//             })
//             .animate(
//             {
//                 opcity:0
//             },
//             800,
//             function(){
//                 $(this).remove();
//                 cartCountValue++;
//                 $(cartCount).text(cartCountValue);
//             }
//             );

//          });
//     });
// });


let basketbtns = document.getElementsByClassName("product-icons2"); 



function basket(id, img, title, price){
    let items = localStorage.getItem("items")
    ?JSON.parse(localStorage.getItem("items"))
    :[];
    if(items.length > 0){
        if(items.some(item => item.item.id === id)){
            items = items.filter(item => item.item.id !== id);
        }else{
            items.push({
                item:{
                    id,
                    img,
                    title,
                    price
                },
                count : 1
            })
        }
    }else{
        items.push({
            item:{
                id,
                img,
                title,
                price
            },
            count : 1
        })
    }
    localStorage.setItem("items", JSON.stringify(items));
    openCart ();
};

function openCart (){
    const items = localStorage.getItem("items")
    ?JSON.parse(localStorage.getItem("items"))
    :[];
    const products = document.querySelector(".products-cart");
    document.getElementById('cartscount').innerText=items.length;
  
    if(items.length > 0){
        items.forEach(item => {
            products.insertAdjacentHTML("afterbegin", `<li class="d-flex">
            <div class="offcanvas-cart__items__image">
                <img src="${item.item.img}" alt="">
            </div>
            <div class="offcanvas-cart__content">
                <h6><a href="productdetails.html">${item.item.title}</a></h6>
                <div class="offcanvas-cart__content--detail d-flex">
                 <span>${item.count}</span><p>x</p><span>$${item.item.price}</span>
                </div>
            </div>
            <div id="${item.item.id}" class="offcanvas-cart__closebtn">
                <button>x</button>
            </div>
        </li>`) 
        });
    }

}

openCart ();



// function deleteFromCart(){

    const deleteFromCart = document.querySelectorAll('.offcanvas-cart__closebtn > button');
    console.log(deleteFromCart)
deleteFromCart.forEach(btn=>btn.addEventListener('click', (e) => {
    const target= e.target.parentElement
    console.log(target.id)
    let items = localStorage.getItem("items")
    ?JSON.parse(localStorage.getItem("items"))
    :[];
    console.log("sa")
    // items = items.filter(item=>item.item.id != target.id);
    console.log(items)
    for(var j = 0; j < items.length; j++){
        console.log(items[j].item.id)

        if (items[j].item.id === target.id) {
            items.splice(j, 1);
            break;
          }
console.log("clicked")
}

const products = document.querySelector(".products-cart");  

const myLi = e.target.closest("li");
console.log(myLi)

products.removeChild(myLi)
localStorage.setItem("items", JSON.stringify(items))
document.getElementById('cartscount').innerText=items.length;

})
)

// }






///mouseover on image in productdetails
$(".productdetails-main__top__mainimage")
// tile mouse actions
.on("mouseover", function() {
  $(this)
    .children(".img_producto")
    .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
})
.on("mouseout", function() {
  $(this)
    .children(".img_producto")
    .css({ transform: "scale(1)" });
})
.on("mousemove", function(e) {
  $(this)
    .children(".img_producto")
    .css({
      "transform-origin":
        ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
        "% " +
        ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
        "%"
    });
});
    



