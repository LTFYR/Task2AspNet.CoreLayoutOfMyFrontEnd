function cart(){
    let items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    :[];
  console.log(items)
  document.getElementById('cartscount').innerText=items.length;

    const tbodyElement = document.querySelector("tbody");
    document.getElementById('cartscount').innerText=items.length;
  console.log(tbodyElement)
    if(items.length > 0){
        items.forEach(item => {
            tbodyElement.insertAdjacentHTML("afterbegin", `<tr class="cart-container__box__table__body__row">
            <td class="cart-container__box__table__body__row__image">
                <a href=""><img src="${item.item.img}" alt=""></a>
            </td>
            <td class="cart-container__box__table__body__row__name">
                <a href="">${item.item.title}</a>
            </td>
            <td class="cart-container__box__table__body__row__price">
                <p>${item.item.price}</p>
            </td>
            <td class="cart-container__box__table__body__row__quantity">
                <div class="cart-container__box__table__body__row__quantity__div">
                    <span id="minusCart2" class="cart-container__box__table__body__row__quantity__div--first">-</span>
                <input id="inputId2" type="text" name="" value="2">
                <span id="plusCart2" class="cart-container__box__table__body__row__quantity__div--last">+</span>
                </div>
            </td>
            <td class="cart-container__box__table__body__row__total">
                <p>${item.item.price}</p>
            </td>
            <td class="cart-container__box__table__body__row__trash">
                <a href=""><i class="fa fa-trash"></i></a>
            </td>
        </tr>`) 
        });
    }
}

cart(); 