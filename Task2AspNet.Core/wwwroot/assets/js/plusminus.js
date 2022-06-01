const plus = document.getElementById('plusCart');
plus.addEventListener('click',function(){
    productCount(true)
})
const minus = document.getElementById('minusCart');
minus.addEventListener('click',function(){
  productCount(false)
})

function productCount (product){
    const inputId =   document.getElementById("inputId").value;
    const newInputBtn1 = parseInt(inputId);
    // const decrease = newInputBtn1 - 1;
    let total = newInputBtn1;
    if(product == true){
        total = newInputBtn1 + 1;
    }
    if(product == false && newInputBtn1 > 0){
        total = newInputBtn1 - 1;
    }
    document.getElementById("quantityPr").innerText =  document.getElementById("inputId").value = total;
    
}

    // const buyBtn = document.getElementById('buyNow');
    // buyBtn.addEventListener('click',function(){
    //     console.log("clicked")
    //     const inputId =  document.getElementById("inputId").value;
    //     const newInputBtn1 = parseInt(inputId);
    //     const total = newInputBtn1 * 275.00;
    //     document.getElementById('totalPr').innerText = total;
    //     document.getElementById("totalTb").innerText = total;
    // })
