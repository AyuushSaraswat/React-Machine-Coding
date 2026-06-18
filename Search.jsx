import React, { useEffect, useState } from "react";
  

const Search = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchproducts();
  }, []);

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(input.toLowerCase())
  );


  return (
    <div>
      <input
        type="text"
        placeholder="Search......"
        onChange={(e) => setInput(e.target.value)}
      />

      {filteredProducts.map((prod) => (
        <div key={prod.id}>{prod.title}</div>
      ))}
    </div>
  );
};

export default Search;









// import React, { useEffect, useState } from "react";
// import FilterProducts from "./FilterProducts";

// const Search = () => {
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     const fetchProducts = async () => {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       setProducts(data.products);
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   let categories = Array.from(new Set(products.map((prod) => prod.category)));

//   let filteredProducts = [...products];

//   if (input) {
//     filteredProducts = filteredProducts.filter((prod) =>
//       prod.title.toLowerCase().includes(input.toLowerCase()),
//     );
//   }

//   if (category) {
//     filteredProducts = filteredProducts.filter(
//       (prod) => prod.category === category,
//     );
//   }

//   filteredProducts = filteredProducts.sort((a, b) =>
//     sortOrder === "asc" ? a.price - b.price : b.price - a.price,
//   );

//   return (
//     <div>
//       <label htmlFor="">Search:</label>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <label htmlFor="">Category:</label>
//       <select value={category} onChange={(e) => setCategory(e.target.value)}>
//         <option value="">All categories</option>
//         {categories.map((cat) => (
//           <option key={cat}>{cat}</option>
//         ))}
//       </select>

//       <label htmlFor="">Sort:</label>
//       <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//         <option value="asc">low to high</option>
//         <option value="dsc">high to low</option>
//       </select>

//       {loading ? (
//         <h2>Loading... </h2>
//       ) : (
//         filteredProducts.map((prod) => (
//           <div key={prod.id}>
//             {prod.title} - {prod.price}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Search;
