const menuData = {
  restaurant: {
    name: "BURGER & BITE",
    tagline: "Flame-Grilled Perfection & Craft Shakes",
    tableNotice: "Scan table QR code for instant menu & direct phone/WhatsApp ordering",
    phone: "+1 (555) 019-2834",
    whatsapp: "15550192834",
    address: "42 Street Food Avenue, Downtown",
    hours: "Mon-Sun: 11:00 AM - 11:00 PM"
  },
  categories: [
    { id: "all", label: "All Items", icon: "✨" },
    { id: "burgers", label: "Gourmet Burgers", icon: "🍔" },
    { id: "sides", label: "Crispy Sides", icon: "🍟" },
    { id: "drinks", label: "Craft Drinks & Shakes", icon: "🥤" },
    { id: "desserts", label: "Desserts", icon: "🍦" }
  ],
  items: [
    {
      id: "b1",
      categoryId: "burgers",
      name: "Smoky Bacon & Cheddar Smash",
      price: "$14.99",
      description: "Double Angus smash patty, aged cheddar, crispy smoked bacon, caramelized onions, and signature house sauce on toasted brioche.",
      badges: ["Popular 🔥", "Chef Special ⭐"],
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b2",
      categoryId: "burgers",
      name: "Spicy Inferno Crunch",
      price: "$13.50",
      description: "Crispy fried chicken breast, habanero slaw, pickled jalapeños, and spicy chipotle aioli on a toasted potato bun.",
      badges: ["Spicy 🌶️"],
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b3",
      categoryId: "burgers",
      name: "Truffle Mushroom Plant Smash",
      price: "$15.00",
      description: "Beyond Meat patty, sautéed wild mushrooms, vegan truffle mayo, and dairy-free mozzarella.",
      badges: ["Vegan 🌱"],
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "s1",
      categoryId: "sides",
      name: "Loaded Truffle Parmesan Fries",
      price: "$6.99",
      description: "Hand-cut potato fries tossed in aged parmesan, white truffle oil, and fresh garden parsley.",
      badges: ["Popular 🔥"],
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "s2",
      categoryId: "sides",
      name: "Fiery Buffalo Wings (8pcs)",
      price: "$9.99",
      description: "Jumbo crispy chicken wings glazed in house fiery buffalo sauce, served with cool blue cheese dip.",
      badges: ["Spicy 🌶️"],
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "d1",
      categoryId: "drinks",
      name: "Salted Caramel Monster Shake",
      price: "$7.50",
      description: "Thick vanilla bean gelato blend, homemade salted caramel drip, crushed pretzels, whipped cream.",
      badges: ["Chef Special ⭐"],
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "d2",
      categoryId: "drinks",
      name: "Fresh Dragonfruit Limeade",
      price: "$4.99",
      description: "Freshly squeezed limes, pink dragonfruit infusion, fresh mint, and sparkling mineral water.",
      badges: ["Vegan 🌱"],
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ds1",
      categoryId: "desserts",
      name: "Warm Lava Fudge Cake",
      price: "$6.50",
      description: "Decadent dark chocolate molten cake served warm with a scoop of Madagascar vanilla ice cream.",
      badges: ["Popular 🔥"],
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.menuData = menuData;
}
if (typeof module !== 'undefined') {
  module.exports = menuData;
}
