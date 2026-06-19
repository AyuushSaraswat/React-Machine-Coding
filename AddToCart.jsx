// import React, { useEffect, useState } from "react";

// const AddToCart = () => {

//   const [products, setProducts] = useState([]);

//   const [cart, setCart] = useState(() => {
//   const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       console.log(data.products);
//       setProducts(data.products);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

// const AddtoCart = (prod) => {
//   setCart((prev) => {
//     const existing = prev.find((item) => item.id === prod.id);
//     if (existing) {
//       return prev.map((item) =>
//         item.id === prod.id ? { ...prod, quantity: item.quantity + 1 } : item,
//       );
//     }
//     return [...prev, { ...prod, quantity: 1 }];
//   });
// };

// const handleQuantity = (id, type) => {
//   setCart((prev) => prev.map((item) => {
//           if (item.id === id) {
//             if (type === "inc") {
//               return { ...item, quantity: item.quantity + 1 };
//             }
//             if (type === "dec") {
//               return { ...item, quantity: item.quantity - 1 };
//             }
//           }
//           return item;
//         })
//         .filter((item) => item.quantity > 0) // remove when qty = 0
//   );
// };

//   const total = cart.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
//   }, 0);

//   return (
//     <div>
//       <div>
//         <h1> Shooping Items</h1>
//         {products.map((prod) => (
//           <div key={prod.id}>
//             {/* <img src={prod.thumbnail} alt="" /> */}
//             {prod.title}
//             {prod.price}
//             <button onClick={() => AddtoCart(prod)}>Add to cart</button>
//           </div>
//         ))}
//       </div>

//       <hr />
//       <h1>Cart</h1>
//       {cart.length === 0 && <p>Cart is empty</p>}
//       {cart.map((p) => (
//         <div key={p.id}>
//           {p.title} - {p.price} x {p.quantity}
//           <button onClick={() => handleQuantity(p.id, "inc")}>+</button>
//           <button onClick={() => handleQuantity(p.id, "dec")}>-</button>
//         </div>
//       ))}
//       <h2>Total: {Math.round(total)}</h2>
//     </div>
//   );
// };

// export default AddToCart;











import React, { useEffect, useState } from "react";

const AddToCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (prod) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === prod.id);
      if (existing) {
        return prev.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...prod, quantity: 1 }];
    });
  };

  const handleQuantity = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: type === "inc" ? item.quantity + 1 : item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const total = cart.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Products</h2>

      {products.map((prod) => (
        <div key={prod.id}>
          {prod.title} - {Math.round(prod.price)}₹
          <button
            onClick={() => {
              handleAddToCart(prod);
            }}
          >
            AddToCart
          </button>
        </div>
      ))}

      <h2>Cart 🛒</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} - {Math.round(item.price)}x{item.quantity}
          <button
            onClick={() => {
              handleQuantity(item.id, "inc");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleQuantity(item.id, "dec");
            }}
          >
            -
          </button>
        </div>
      ))}
      <h2>Total Price:{Math.round(total)}</h2>
    </div>
  );
};

export default AddToCart;
