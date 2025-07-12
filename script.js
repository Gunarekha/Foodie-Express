// ========== Restaurant Data ==========
const topRestaurants = [
  {
    name: "Hotel Sai Nath & Sai Restaurant",
    image: "Sainath.jpg",
    offer: "25% OFF ABOVE ₹1399",
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "North Indian, South Indian, Chinese",
    location: "Chhindwara Locality"
  },
  {
    name: "Dev International",
    image: "Dev.jpg",
    offer: "₹65 OFF ABOVE ₹199",
    rating: "4.3",
    time: "50-55 mins",
    cuisine: "North Indian, Fast Food",
    location: "Mohan Nagar"
  },
  {
    name: "Adil Hotel",
    image: "Adil.jpg",
    offer: "FREE ITEM",
    rating: "4.3",
    time: "35-40 mins",
    cuisine: "North Indian, Biryani, Tandoor",
    location: "Chhindwara Locality"
  },
  {
    name: "Bakery World",
    image: "BakeryWorld.jpg",
    offer: "FREE ITEM",
    rating: "4.4",
    time: "45-50 mins",
    cuisine: "Bakery, Icecreams, Snacks",
    location: "Parasia Road"
  },
  {
    name: "Satkar Restaurant",
    image: "Satkar.jpg",
    offer: "ITEMS AT ₹59",
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "North Indian, South Indian, Biryani, Tandoor",
    location: "Satkar Chowk"
  }
];

const onlineRestaurants = [
  {
    name: "Pizza Hut",
    image: "Pizza.jpg",
    offer: "ITEMS AT ₹284",
    rating: "4.2",
    time: "50-55 mins",
    cuisine: "Pizzas",
    location: "Parasia Road"
  },
  {
    name: "Jai Ganesh Bhojnalaya",
    image: "Jaiganesh.jpg",
    offer: "₹200 OFF ABOVE ₹400",
    rating: "4.1",
    time: "45-50 mins",
    cuisine: "North Indian, South Indian",
    location: "Bus Stand"
  },
  {
    name: "Hotel Sai Nath & Sai Restaurant",
    image: "Sainath.jpg",
    offer: "25% OFF ABOVE ₹1399",
    rating: "4.4",
    time: "40-45 mins",
    cuisine: "North Indian, South Indian",
    location: "Chhindwara Locality"
  },
  {
    name: "Bakery World",
    image: "BakeryWorld.jpg",
    offer: "FREE ITEM",
    rating: "4.4",
    time: "45-50 mins",
    cuisine: "Bakery, Ice Cream, Snacks",
    location: "Parasia Road"
  },
  {
    name: "Satkar Restaurant",
    image: "Satkar.jpg",
    offer: "ITEMS AT ₹59",
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "North Indian, Biryani, Tandoor",
    location: "Satkar Chowk"
  },
  {
    name: "Madurai Idly Shop",
    image: "Madurai.jpg",
    offer: "ITEMS AT ₹129",
    rating: "4.4",
    time: "20-25 mins",
    cuisine: "South Indian,North Indian, Biryani, Tandoor",
    location: "Bus Stand"
  }
];

// ========== Render Top Restaurants ==========
const topContainer = document.getElementById("topRestaurants");

topRestaurants.forEach(rest => {
  const card = document.createElement("div");
  card.className = "restaurant-card";
  card.innerHTML = `
    <img src="${rest.image}" alt="${rest.name}">
    <div class="restaurant-info">
      <p><strong>${rest.offer}</strong></p>
      <h3>${rest.name}</h3>
      <p>⭐ ${rest.rating} · ${rest.time}</p>
      <p>${rest.cuisine}</p>
      <p>${rest.location}</p>
      <button onclick="addToCart('${rest.name}', '${rest.image}', 199)">Add to Cart</button>
    </div>
  `;
  topContainer.appendChild(card);
});

// ========== Render Online Delivery Restaurants ==========
const onlineContainer = document.getElementById("onlineRestaurants");

onlineRestaurants.forEach(rest => {
  const card = document.createElement("div");
  card.className = "restaurant-card";
  card.innerHTML = `
    <img src="${rest.image}" alt="${rest.name}">
    <div class="restaurant-info">
      <p><strong>${rest.offer}</strong></p>
      <h3>${rest.name}</h3>
      <p>⭐ ${rest.rating} · ${rest.time}</p>
      <p>${rest.cuisine}</p>
      <p>${rest.location}</p>
      <button onclick="addToCart('${rest.name}', '${rest.image}', 149)">Add to Cart</button>
    </div>
  `;
  onlineContainer.appendChild(card);
});

// ========== Add to Cart ==========
function addToCart(name, image, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === name);

  if (index !== -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ name, image, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// ========== Scroll Categories ==========
function scrollCategories(direction) {
  const container = document.getElementById("categoryScroll");
  container.scrollLeft += direction * 200;
}

// ========== Login Modal ==========
function toggleLoginModal() {
  const loginModal = document.getElementById("loginModal");
  loginModal.style.display = loginModal.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", (e) => {
  const loginModal = document.getElementById("loginModal");
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});
