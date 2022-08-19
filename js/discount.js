document.getElementById('btn-apply').addEventListener('click', function(){
    const cuponField = document.getElementById('cupon-field');
    const cuponFieldValue = cuponField.value;
    
    const productPrice = document.getElementById('product-price');
    const productPriceString = productPrice.innerText;
    const price = parseFloat(productPriceString);

    if(cuponFieldValue === 'DOM30'){
        const discount = 30/100;
        const newPrice = price - (price * discount);
        productPrice.innerText = newPrice;
        alert('CONGRATES YOU GOT 30% DISCOUNT !!');
    }
    else if(cuponFieldValue === 'DOM50'){
        const discount = 50/100;
        const newPrice = price - (price * discount);
        productPrice.innerText = newPrice;
        alert('CONGRATES YOU GOT 50% DISCOUNT !!');
    }
    else{
        alert("Your coupon code doesn't exist.")
    }
})