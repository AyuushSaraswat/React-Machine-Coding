import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const LIMIT = 10;

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      if (loading || !hasMore) return;
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`,
      );
      const data = await res.json();
      setItems((prev) => [...prev, ...data]);
      if (data.length < LIMIT) setHasMore(false);
      setLoading(false)
    };
    fetchData();
  }, [page]);

  // observe last item

  const lastRef = (node) => {

    if (loading) return ;
 
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((p) => p + 1);
      }
    });

    if (node) observer.current.observe(node);
    
  };

  return (
    <div>
      {items.map((item, idx) => (
        <div key={item.id} ref={idx === items.length - 1 ? lastRef : null}>
          {item.title}
        </div>
      ))}

      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more Data</p>}
    </div>
  );
}

