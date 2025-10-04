// ===== Product Filtering with Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("categoryFilter");
  const priceFilter = document.getElementById("priceFilter");
  const priceValue = document.getElementById("priceValue");
  const products = document.querySelectorAll(".product");

  function filterProducts() {
    const category = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value);
    priceValue.textContent = `₹${maxPrice}`;

    products.forEach(product => {
      const productCategory = product.getAttribute("data-category");
      const productPrice = parseInt(product.getAttribute("data-price"));

      const showCategory = category === "all" || productCategory === category;
      const showPrice = productPrice <= maxPrice;

      if (showCategory && showPrice) {
        product.classList.remove("fade-out");
        product.classList.add("fade-in");
        product.style.display = "block";
      } else {
        product.classList.remove("fade-in");
        product.classList.add("fade-out");
        setTimeout(() => {
          product.style.display = "none";
        }, 300); // Match fade-out duration
      }
    });
  }

  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("input", filterProducts);

  filterProducts(); // Initial call
});

// ===== Add to Cart Function =====
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add new item
  cart.push({ name, price });

  // Save to local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect directly to checkout page
  window.location.href = "checkout.html";
}
