let a = 1;

document.getElementById('add-quantity').addEventListener('click',function(){
    const quantity = document.getElementById('quantity');
    let newQuantity = parseInt(quantity.innerText);
    newQuantity = newQuantity + (a = a+0);
    console.log(newQuantity);
    quantity.innerText = newQuantity;

    if(newQuantity <= 4){
        const productPrice = document.getElementById('product-price');
        const newPrice = 4500 * newQuantity;
        productPrice.innerText = newPrice;
    }
    else{
        quantity.innerText = 4;
        alert('This is last limit of quantity');
    }

})

document.getElementById('remove-quantity').addEventListener('click',function(){
    const quantity = document.getElementById('quantity');
    let quantityMinus = parseInt(quantity.innerText);
    quantityMinus = quantityMinus - 1;
    if(quantityMinus > 0){
        quantity.innerText = quantityMinus;
        const productPrice = document.getElementById('product-price');
        productPrice.innerText = quantityMinus * 4500
    }
})