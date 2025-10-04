// ===== Navigation Highlight on Scroll (optional enhancement) =====
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section) {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

// ===== Smooth Scroll (optional enhancement) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ===== Cart Logic (for future cart.html page) =====
let cart = [];

function addToCart(productName, productPrice) {
  const item = { name: productName, price: productPrice };
  cart.push(item);
  alert(`${productName} added to cart!`);
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  if (!cartList || !cartTotal) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
    total += parseFloat(item.price);
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// ===== Contact Form Validation (for contact.html page) =====
function validateContactForm() {
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// ===== Login Validation Example =====
function loginValidation() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email === "admin123@.com" && password === "1234") {
    alert("Login successful!");
    window.location.href = "admin.html";
  } else {
    alert("Invalid credentials");
  }
}
