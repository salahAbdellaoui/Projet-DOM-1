# Shopping Cart Project

## Description
This is an interactive **shopping cart web application** built with **HTML, CSS, Bootstrap, Font Awesome, and JavaScript**.  
Users can:

- Adjust the quantity of each item using `+` and `-` buttons.  
- Remove items from the cart with the trash button.  
- Like/favorite items with the heart button (color changes on click).  
- See the total price update dynamically based on quantities.  

---

## Features

1. **Dynamic Quantity Update**  
   - Clicking `+` or `-` changes the quantity by **1**.  
   - Quantity cannot go below 0.  

2. **Remove Items**  
   - Trash button sets the quantity to 0.  

3. **Like Items**  
   - Heart icon toggles red color when clicked.  

4. **Total Price Calculation**  
   - Total price updates automatically when quantities change or items are removed.  

5. **Responsive Design**  
   - Uses **Bootstrap 5** for mobile and desktop responsiveness.  

6. **Font Awesome Icons**  
   - For buttons such as plus, minus, trash, and heart.  

---

## Technologies Used

- **HTML5**  
- **CSS3** + Custom styles  
- **Bootstrap 5**  
- **Font Awesome**  
- **JavaScript (DOM manipulation)**  

---

## How to Use

1. Open `index.html` in a browser.  
2. Adjust quantities using `+` or `-`.  
3. Click the trash icon to remove an item (sets quantity to 0).  
4. Click the heart icon to like/unlike an item.  
5. Watch the total price update dynamically.  

---

## Project Structure

project/
│
├─ index.html # Main HTML file
├─ style/
│ └─ style.css # Custom CSS
├─ js/
│ └─ script.js # JavaScript for cart functionality
└─ assets/ # Product images