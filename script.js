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
  },
  {
    name: "Madurai Idly Shop",
    image: "Madurai.jpg",
    offer: "ITEMS AT ₹129",
    rating: "4.4",
    time: "20-25 mins",
    cuisine: "South Indian, North Indian, Biryani, Tandoor",
    location: "Bus Stand"
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
    location: "Parasia Road",
    items: [
      { name: "Margherita Pizza", image: "Pizza1.jpg", price: 189, isPureVeg: true },
      { name: "Veggie Supreme", image: "Pizza2.jpg", price: 259, isPureVeg: true },
      { name: "Paneer Delight", image: "Pizza3.jpg", price: 229, isPureVeg: true }
    ]
  },
  {
    name: "Jai Ganesh Bhojnalaya",
    image: "Jaiganesh.jpg",
    offer: "₹200 OFF ABOVE ₹400",
    rating: "4.1",
    time: "45-50 mins",
    cuisine: "North Indian, South Indian",
    location: "Bus Stand",
    items: [
      { name: "Thali Meal", image: "Thali.jpg", price: 120, isPureVeg: true },
      { name: "Dosa", image: "Dosa.jpg", price: 90, isPureVeg: true },
      { name: "Idly", image: "Idly.jpg", price: 50, isPureVeg: true }
    ]
  },
  {
    name: "Hotel Sai Nath & Sai Restaurant",
    image: "Sainath.jpg",
    offer: "25% OFF ABOVE ₹1399",
    rating: "4.4",
    time: "40-45 mins",
    cuisine: "North Indian, South Indian",
    location: "Chhindwara Locality",
    items: [
      { name: "Masala Dosa", image: "MasalaDosa.jpg", price: 110, isPureVeg: true },
      { name: "Veg Biryani", image: "VegBiryani.jpg", price: 180, isPureVeg: true }
    ]
  },
  {
    name: "Bakery World",
    image: "BakeryWorld.jpg",
    offer: "FREE ITEM",
    rating: "4.4",
    time: "45-50 mins",
    cuisine: "Bakery, Ice Cream, Snacks",
    location: "Parasia Road",
    items: [
      { name: "Chocolate Muffin", image: "Muffin.jpg", price: 55, isPureVeg: true },
      { name: "Ice Cream Cup", image: "IceCream.jpg", price: 40, isPureVeg: true }
    ]
  },
  {
    name: "Satkar Restaurant",
    image: "Satkar.jpg",
    offer: "ITEMS AT ₹59",
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "North Indian, Biryani, Tandoor",
    location: "Satkar Chowk",
    items: [
      { name: "Butter Naan", image: "Naan.jpg", price: 30, isPureVeg: true },
      { name: "Paneer Butter Masala", image: "Paneer.jpg", price: 160, isPureVeg: true }
    ]
  },
  {
    name: "Madurai Idly Shop",
    image: "Madurai.jpg",
    offer: "ITEMS AT ₹129",
    rating: "4.4",
    time: "20-25 mins",
    cuisine: "South Indian, North Indian, Biryani, Tandoor",
    location: "Bus Stand",
    items: [
      { name: "Mini Idly", image: "MiniIdly.jpg", price: 60, isPureVeg: true },
      { name: "Onion Dosa", image: "OnionDosa.jpg", price: 100, isPureVeg: true }
    ]
  }
];

// ========== Render Restaurants Function ==========
function renderRestaurants(containerId, data, showItems = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach(rest => {
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
      </div>
    `;

    if (showItems && rest.items) {
      const menu = document.createElement("div");
      menu.className = "restaurant-menu";

      rest.items.forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.className = "menu-item";
        itemCard.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div>
            <p><strong>${item.name}</strong></p>
            <p>₹${item.price}</p>
            <button onclick="addToCart('${item.name}', '${item.image}', ${item.price})">Add to Cart</button>
          </div>
        `;
        menu.appendChild(itemCard);
      });

      card.appendChild(menu);
    }

    container.appendChild(card);
  });
}

renderRestaurants("topRestaurants", topRestaurants);
renderRestaurants("onlineRestaurants", onlineRestaurants, true);

// ========== Add to Cart Function ==========
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
