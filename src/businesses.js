const businesses = [
  {
    id: "1",
    name: "Panadería La Delicia",
    description: "Pan fresco cada día",
    horario: "Lunes a sábado, 6am - 6pm",
    address: "Calle 123, Leticia",
    imagenes: [
      // 👈 agregado
      "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=500",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
      "https://media.istockphoto.com/id/2099860694/es/foto/varias-bandejas-de-baguettes.webp",
    ],
    products: [
      { name: "Pan campesino", price: 2500 },
      { name: "Croissant", price: 3000 },
    ],
  },
  {
    id: "2",
    name: "Verduras Frescas",
    description: "Venta de frutas y verduras orgánicas.",
    address: "Carrera 7 #33-22",
    imagenes: [
      "https://blogtrip.org/wp-content/uploads/2023/01/mercado-de-frutas-y-legumbres-ciudad-de-leticia-amazonas.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUK44gNR-UXfE0g0FRo-oRTH7VvcREV9ZUw&s",
      "https://colombia.co/sites/default/files/marca-pais/media/images/Copoazu.webp",
    ],
    products: [
      { name: "Manzanas", price: 1000 },
      { name: "Zanahorias", price: 2000 },
      { name: "Lechuga", price: 1000 },
    ],
  },
  {
    id: "3",
    name: "Drogueria La Esperanza",
    description: "Venta de frutas y verduras orgánicas.",
    address: "Carrera 9 #33-22",
    imagenes: [
      "https://escuelafarmacia.com/wp-content/uploads/clasificacion-de-medicamentos.jpg",
    ],
    products: [
      { name: "Medicamentos", price: 1000 },
      { name: "Populares", price: 2000 },
      { name: "Cosmeticos y Perfumería", price: 1000 },
    ],
  },
  {
    id: "4",
    name: "Pizzas Ricas",
    description: "Las mejores pizzas para ti y tu familia. Al mejor precio",
    address: "Carrera 7 #33-22",
    imagenes: [
      "https://www.kebuena.com.mx/wp-content/uploads/2021/07/16-9-2.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoSCTpQ_MdvCRohSAeh8WKCluTZAKvV8O4w&s",
    ],
    products: [
      { name: "Pizzas", price: 11000 },
      { name: "Hamburguesas", price: 19000 },
      { name: "Bebidas desde:", price: 8000 },
    ],
  },
  {
    id: "5",
    name: "Mega Sandwich’s CUBANO 🥪",
    description: "Las mejores pizzas para ti y tu familia. Al mejor precio",
    address: "Carrera 7 #33-22",
    horario:
      "Horario de atención: Lunes a Domingo 5pm a 10pm, Martes Sin Servicio",
    products: [
      { name: "Pizzas", price: 11000 },
      { name: "Hamburguesas", price: 19000 },
      { name: "Bebidas desde:", price: 8000 },
    ],
    imagenes: [
      "https://puntosabroso.com.co/wp-content/uploads/2020/06/RGG_9205-1.jpg",
      "https://keyfoodhollywood.com/wp-content/uploads/2023/07/cuban-sandwich-2021-12-09-09-24-54-utc.jpg",
    ],
  },
  {
    id: "6",
    name: "Preciado - Pizzas y cómidas rápidas 🍕",
    description: "Las mejores pizzas para ti y tu familia. Al mejor precio",
    address: "Carrera 21 #33-22",
    horario:
      "Horario de atención: Lunes a Domingo 5pm a 10pm, Martes Sin Servicio",
    products: [
      { name: "Pizzas", price: 11000 },
      { name: "Hamburguesas", price: 19000 },
      { name: "Bebidas desde:", price: 8000 },
    ],
    imagenes: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIXcY7VLBUxRp_ZiMXaXt8G6Bx6_bfa4HFh1MjSJy7x4WCD-JTjwZ0JGjCSejXUWEseI&usqp=CAU",
      "https://menu.restaurantguru.com/m1/menu-Pizzeria-Preciado-La-mejor-pizza-del-sur-de-Colombia.jpg",
    ],
  },
  {
    id: "7",
    name: "Debajo del Árbol 🌳",
    description: "Cómidas rápidas, prueba nuestros deliciosos tacos al pastor",
    address: "Carrera 21 #33-22",
    horario:
      "Horario de atención: Lunes a Domingo 5pm a 10pm, Martes Sin Servicio",
    products: [
      { name: "Pizzas", price: 11000 },
      { name: "Hamburguesas", price: 19000 },
      { name: "Bebidas desde:", price: 8000 },
    ],
    imagenes: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ts9L1nq-8F1k4ia1eGMe1WuLB4lR96bxaDWcgG-ZW4kmG6YxwmLdo1_Yesbss_YuOps&usqp=CAU",
      "https://i.ytimg.com/vi/bpwovJ-L9x4/sddefault.jpg",
    ],
  },
];

export default businesses;
