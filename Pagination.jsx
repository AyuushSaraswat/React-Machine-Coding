import { useState, useEffect } from "react";

export default function Pagination() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const limit = 10; 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/users?limit=${limit}&skip=${(currentPage-1)*limit}`,
      );
      const data = await res.json();

      if (data && data.users) {
        setUsers(data.users);
        setTotalPage(Math.ceil(data.total / limit));
      }
    }
    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="App">
      <h1>User List</h1>

      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <p>
              Name: {user.firstName} {user.lastName}
            </p>
            <p>Email: {user.email}</p>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPage}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}




