let products = [
    {
      id: 1,
      name: "Playera Adidas Azul",
      descripcion: "Este es una playera deportiva",
      categoria: "Playeras",
      stock: 11,
      genre: "Hombre",
      precio: 341,
      foto: "https://www.innovasport.com/medias/IS-IC7429-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDczNzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYyL2gyMC8xMTQ4MjAzNjYwMDg2Mi5qcGd8ZTM4MTEyNjk3NjVhOGJlMmMzMzVhNjNhODkyNTAwMjQ1YjY2MTRiNzMyOTUyZjBkZjM0ODE2MjU4MmU1NDU0Yw",
    },
    {
      id: 2,
      name: "Playera Nike Rosa",
      descripcion: "Este es una playera deportiva",
      categoria: "Playeras",
      stock: 5,
      genre: "Mujer",
      precio: 323,
      foto: "https://www.innovasport.com/medias/playera-nike-drifit-one-is-DD0626-665-1.jpg?context=bWFzdGVyfGltYWdlc3w3Mzc4N3xpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDY2LzExNTE2ODQyNDQyNzgyLmpwZ3wwZWI3OTMxMDliZjVmMDc3ODAwNzM1MTNlNDQ2Njc5MzE4NWU1MjhlMDcwZWRmZjRjMTI0ZGIxZDQ5ODE0Mjdl",
    },
    {
      id: 3,
      name: "Pants Adidas Negro",
      descripcion: "Este es un Pants deportiva",
      categoria: "Pantalones",
      stock: 7,
      genre: "Hombre",
      precio: 500,
      foto: "https://www.innovasport.com/medias/pantalon-adidas-yoga-base-is-IC7283-1.jpg?context=bWFzdGVyfGltYWdlc3w1MzE0MXxpbWFnZS9qcGVnfGltYWdlcy9oZjkvaDhmLzExNTI3MTE1MDc5NzEwLmpwZ3w3NDQzYWU2NGZiODMzMTUyOTA3YmY3NzIwYzFmZGYzM2I5YzgwMGQ4ZmVlYmNlMGE0MzkwNDAzMWE1ZDdiMzVm",
    },
    {
      id: 4,
      name: "Gorra Jordan",
      descripcion: "Este es una playera deportiva",
      categoria: "Gorras",
      stock: 3,
      genre: "Unisex",
      precio: 150,
      foto: "https://www.innovasport.com/medias/IS-CW6410-010-1.png?context=bWFzdGVyfGltYWdlc3wxOTEwNjV8aW1hZ2UvcG5nfGltYWdlcy9oNTQvaDAwLzEwMTYzOTQzNzY4MDk0LnBuZ3wzMDQyODI4MjYxZjc5NmQzYzc0ZmViMWJkOTYzZjNkMGRlZWU1MTMxZmQxNTgwNWJkZjc5ZWVlNGY3ZTI2NDBl",
    },
    {
      id: 5,
      name: "Leggings Nike",
      descripcion: "Este es un Leyin deportivo",
      categoria: "Pantalones",
      stock: 8,
      genre: "Mujer",
      precio: 390,
      foto: "https://www.innovasport.com/medias/IS-DV9864-010-1.jpg?context=bWFzdGVyfGltYWdlc3w4NTMzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjcvaDJmLzExNTE3NDI0ODI4NDQ2LmpwZ3w3OTYxNzI5YjVjNTZhYTU5YzEzNWQ1NjNjODcxMjc1YzFlMWNkYWY4MGNhOWQxNDIwOTVjZTQ1ZmExNTRhMDY3",
    },
    {
      id: 6,
      name: "Calcetines Nike",
      descripcion: "Este es un calcetin deportivo",
      categoria: "Calzado",
      stock: 10,
      genre: "Hombre",
      precio: 99,
      foto: "https://www.innovasport.com/medias/calcetines-nike-everyday-plus-is-DR9723-010-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTkyMDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGNmL2g1MC8xMTUwNjczNDg1ODI3MC5qcGd8ZDFjMTM3ZGViNTcwY2Y1YmQ2M2IxZjE4OWIyYmE5ZDA2MjM3NWJkNDNmYmU1OWU4YjViNGJiY2Y1NzJiOTgyZA",
    },
    {
      id: 7,
      name: "Short Adidas Negro",
      descripcion: "Este es una Short deportivo",
      categoria: "Pantalones",
      stock: 2,
      genre: "Hombre",
      precio: 159,
      foto: "https://www.innovasport.com/medias/IS-IB8121-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTE2MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDMzL2hlMy8xMTQ4MjE5MTk1Mzk1MC5qcGd8MGJhMjgyZmNiMWU0ZGVhMTllYTgzNTdmZjEzZjQ3MTE0MGFjMTFiYWQzZTE2MGZjMzMyN2M4YmI0NzRiY2M2ZA",
    },
  ];
  
  export const gIdProdFetch = (id) => {
    return new Promise((res, rej) => {
      
        let product = products.findIndex(item => item.id == parseInt(id))
        if(product>0){
          res(products[product]);
        }
        
      
    });
  };

