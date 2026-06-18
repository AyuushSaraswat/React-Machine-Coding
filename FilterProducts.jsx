// import React, { useEffect, useState } from "react";

// const FilterProducts = () => {

//   const [searchInput, setSearchInput] = useState("");
//   const [allProducts, setAllProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [category, setCategory] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const fetchProducts = async () => {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       // console.log(data.products)
//       setAllProducts(data.products);
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   const categories = Array.from(new Set(allProducts.map((p) => p.category)));

//   useEffect(() => {

//     let filteredList = [...allProducts];

//     if (searchInput) {
//       filteredList = filteredList.filter((prod) =>
//         prod.title.toLowerCase().includes(searchInput.toLowerCase()),
//       );
//     }

//     if (sortOrder) {
//       filteredList = filteredList.sort((a, b) =>
//         sortOrder === "asc" ? a.price - b.price : b.price - a.price,
//       );
//     }

//     if (category) {
//       filteredList = filteredList.filter((prod) => prod.category === category);
//     }

//     setFiltered(filteredList);
//   }, [searchInput, category, sortOrder, allProducts]);

//   const AddtoCart = (prod) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === prod.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === prod.id ? { ...prod, quantity: item.quantity + 1 } : item,
//         );
//       }
//       return [...prev, { ...prod, quantity: 1 }];
//     });
//   };

//   const Total = cart.reduce((acc, curr) => {
//     return acc + curr.price * curr.quantity;
//   }, 0);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>All Products</h1>

//       <input
//         type="text"
//         placeholder="Search product ..."
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />

//       <br />
//       <br />

//       <select value={category} onChange={(e) => setCategory(e.target.value)}>
//         <option disabled value="">
//           All Categories
//         </option>
//         {categories.map((cat) => (
//           <option key={cat}>{cat}</option>
//         ))}
//       </select>

//       <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//         <option value="asc">Low to high</option>
//         <option value="dsc">High to low</option>
//       </select>

//       {loading ? "Loading ... " : filtered.map((prod) => (
//             <div key={prod.id}>
//               {prod.title}- {prod.price}
//               <button onClick={(e) => AddtoCart(prod)}>Add to cart</button>
//             </div>
//           ))}

//       <br />
//       <br />

//       <h1>Cart:🛒</h1>

//       {cart.map((item) => {
//         return (
//           <div key={item.id}>
//             {item.title} x {item.quantity}
//           </div>
//         );
//       })}

//       <h2>Total: {Math.round(Total)}</h2>
//     </div>
//   );
// };

// export default FilterProducts;













import React, { useEffect, useState } from 'react'

const FilterProducts = () => {

  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)
  const [input,setInput] = useState("")
  const [category,setCategory] = useState("")
  const [sortOrder,setSortOrder] = useState("asc")
  let filteredProducts = [...products]

  
const categories = [ ... new Set(filteredProducts.map((prod)=>prod.category)) ]


  if(input){
   filteredProducts = filteredProducts.filter((prev)=>prev.title.toLowerCase().includes(input.toLowerCase()))
  }

  if(category){
    filteredProducts = filteredProducts.filter((prod)=>prod.category === category)
  }

   if(sortOrder){
    filteredProducts = filteredProducts.sort((a,b)=>sortOrder ==="asc" ? (a.price - b.price) : (b.price - a.price))
   }

   
useEffect(()=>{
  const fetchProducts = async() => {
    setLoading(true)
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    setProducts(data.products)
    setLoading(false)
  }
  fetchProducts()
},[])

  return (
    <div style={{textAlign:'center'}}>

     <div>
      <label htmlFor="">Search: </label>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

      <label htmlFor="">Categories: </label>
       <select value={category} onChange={(e)=>setCategory(e.target.value)} >Categories
        <option  disabled value="">Categories</option>
        {categories.map((cat)=>(
           <option key={cat}>{cat}</option>
        ))}
       </select>

       <label>Sort Order: </label>
       <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
        <option value="asc">Low to High</option>
        <option value="dsc">High to Low</option>
       </select>

     </div>

      <h1>Products</h1>
      {loading && <p>Laoding....</p>}
      {filteredProducts.map((prod)=>(<div key={prod.id}>
        {prod.title}- {prod.price}
      </div>))}
      {filteredProducts.length === 0 && <p>No products available</p>}

      </div>
  )
}

export default FilterProducts
