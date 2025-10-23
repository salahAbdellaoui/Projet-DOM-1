// Select all product cards
const products = document.querySelectorAll('.list-products > .card-body');


// Function to update the total price

function updateTotal() {
  let total = 0;

  const allProducts = document.querySelectorAll('.list-products > .card-body');
  allProducts.forEach(product => {
    const price = parseFloat(product.querySelector('.unit-price').textContent);
    const qty = parseInt(product.querySelector('.quantity').textContent);
    total += price * qty;
  });

  document.querySelector('.total').textContent = total + ' $';
}

// Loop through each product to attach event listeners
products.forEach(product => {
  const plusBtn = product.querySelector('.fa-plus-circle');
  const minusBtn = product.querySelector('.fa-minus-circle');
  const qtyEl = product.querySelector('.quantity');
  const trashBtn = product.querySelector('.fa-trash-alt');
  const heartBtn = product.querySelector('.fa-heart');

  // Increment quantity by 1
  plusBtn.addEventListener('click', () => {
    qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
    updateTotal();
  });

  // Decrement quantity by 1 (cannot go below 0)
  minusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyEl.textContent);
    if (qty > 0) qtyEl.textContent = qty - 1;
    updateTotal();
  });

  // Remove the entire product card
  trashBtn.addEventListener('click', () => {
    product.remove(); // removes this specific card
    updateTotal();
  });

  // Like button toggle
  heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('liked');
    heartBtn.style.color = heartBtn.classList.contains('liked') ? 'red' : 'black';
  });
});

// Initialize total on page load
updateTotal();
