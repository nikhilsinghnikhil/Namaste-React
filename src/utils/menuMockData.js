const menuMockData = {
  restaurantName: "Mock Mega Restaurant",
  sections: [
    {
      title: "Recommended",
      items: [
        {
          id: 1,
          name: "Veg Biryani",
          price: 180,
          description: "Aromatic basmati rice cooked with fresh vegetables and mild spices.",
          image:
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 2,
          name: "Chicken Biryani",
          price: 240,
          description: "Slow-cooked biryani with tender chicken and rich spices.",
          image:
            "https://www.tasteofhome.com/wp-content/uploads/2025/03/Chicken-Biryani_EXPS_TOHVP25_278729_MF_03_11_1.jpg",
        },
        {
          id: 3,
          name: "Paneer Biryani",
          price: 210,
          description: "Flavorful biryani layered with soft paneer cubes.",
          image:
            "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "Indian Main Course",
      items: [
        {
          id: 4,
          name: "Shahi Paneer",
          price: 220,
          description: "Cottage cheese in creamy tomato gravy with royal spices.",
          image:
            "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 5,
          name: "Dal Makhani",
          price: 190,
          description: "Slow cooked black lentils with butter and cream.",
          image:
            "https://cheeseforthought.com/wp-content/uploads/2024/09/desi-pub-daal-mukhani-recipe-414x500.png",
        },
        {
          id: 6,
          name: "Kadhai Paneer",
          price: 210,
          description: "Paneer cooked with capsicum, onion and spicy gravy.",
          image:
            "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "Breads",
      items: [
        {
          id: 7,
          name: "Butter Naan",
          price: 40,
          description: "Soft naan brushed with butter, baked in tandoor.",
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 8,
          name: "Garlic Naan",
          price: 50,
          description: "Tandoori naan topped with fresh garlic.",
          image:
            "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 9,
          name: "Tandoori Roti",
          price: 30,
          description: "Whole wheat roti cooked in clay oven.",
          image:
            "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "Starters (Veg)",
      items: [
        {
          id: 10,
          name: "Paneer Tikka",
          price: 230,
          description: "Marinated paneer cubes grilled to perfection.",
          image:
            "https://images.unsplash.com/photo-1626776876893-6aa1f14f2c9d?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 11,
          name: "Hara Bhara Kabab",
          price: 190,
          description: "Spinach and green peas kababs shallow fried.",
          image:
            "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "Starters (Non-Veg)",
      items: [
        {
          id: 12,
          name: "Chicken Tikka",
          price: 260,
          description: "Juicy chicken chunks grilled with smoky flavors.",
          image:
            "https://images.unsplash.com/photo-1604908177522-04084f8b4f89?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 13,
          name: "Chicken Seekh Kabab",
          price: 240,
          description: "Minced chicken kebabs with herbs and spices.",
          image:
            "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "Chinese",
      items: [
        {
          id: 14,
          name: "Veg Hakka Noodles",
          price: 160,
          description: "Stir fried noodles with fresh vegetables.",
          image:
            "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 15,
          name: "Veg Manchurian",
          price: 170,
          description: "Crispy veg balls tossed in Indo-Chinese sauce.",
          image:
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "South Indian",
      items: [
        {
          id: 16,
          name: "Masala Dosa",
          price: 140,
          description: "Crispy dosa stuffed with spiced potato filling.",
          image:
            "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 17,
          name: "Idli Sambhar",
          price: 100,
          description: "Steamed rice cakes served with sambhar.",
          image:
            "https://images.unsplash.com/photo-1668236543090-82e6f6f8a2a7?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "Desserts",
      items: [
        {
          id: 18,
          name: "Gulab Jamun",
          price: 80,
          description: "Soft milk balls soaked in sugar syrup.",
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 19,
          name: "Ice Cream",
          price: 90,
          description: "Creamy vanilla ice cream scoop.",
          image:
            "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    {
      title: "Beverages",
      items: [
        {
          id: 20,
          name: "Cold Drink",
          price: 50,
          description: "Chilled refreshing soft drink.",
          image:
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 21,
          name: "Sweet Lassi",
          price: 70,
          description: "Traditional Punjabi yogurt drink.",
          image:
            "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  ],
};

export default menuMockData;
