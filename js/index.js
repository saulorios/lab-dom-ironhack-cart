// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  for(let i=0;i<product.length;i++){
    const price = Number(product[i].querySelector('.price span').innerText);
    const quantity = parseInt(product[i].querySelector('.quantity').firstElementChild.value);
    const subTotalClass = product[i].querySelector('.subtotal span')

    const subTotal = price * quantity
    subTotalClass.innerHTML = subTotal

  }
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  //alert(`Calculate Prices button is clicked` )
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2

  
  let singleProduct = document.querySelectorAll('.product')
  
  updateSubtotal(singleProduct)    

 
  let arrTotal = Number(document.getElementById('total-value').firstElementChild.value)

  let subTotalClass = Number(document.querySelector('.subtotal span').innerText)
  
  arrTotal += subTotalClass
  subTotalClass.innerHTML = arrTotal
  console.log(arrTotal, subTotalClass)
    

  return arrTotal
  console.log(arrTotal);
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
