// Lecture 8th Aug 2025

import React, { Suspense } from "react";

const LazyLoading = () => {

  const Profile2 = React.lazy(() => import("./Components/Profile2"));

  return (
    <div>
      <h2>Welcome to Lazy Loading</h2>
      <Suspense fallback={<h3>Loading please wait ....</h3>}>
        <Profile2 />
      </Suspense>
    </div>
  );

};

export default LazyLoading;
