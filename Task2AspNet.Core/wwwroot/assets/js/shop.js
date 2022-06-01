const left = document.getElementById("tab1");
const right = document.getElementById("tab2");

const content1 = document.querySelector('.shop-wrapper__product__all');
const content2 = document.querySelector('.shop-wrapper__product__listview');

left.addEventListener('click',()=>{
    console.log(left)
    content2.classList.remove('dblk');
    content1.classList.add('dblk');
    content2.classList.add('secondAnimation')
})
right.addEventListener('click', () => {
    console.log(right)
    content1.classList.remove('dblk');
    content2.classList.add('dblk');
    content1.classList.add('firstAnimation')
})  