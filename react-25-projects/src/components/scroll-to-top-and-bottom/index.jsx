import React, { useRef } from "react";
import useFetch from "../custom-fetch-hook/useFetchHook";

function ScrollToTopAndBottom() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  console.log(bottomRef);

  function handleScrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({behavior: "smooth"});
  }

  if (error) {
    return <p>Error occurred! Please try again</p>;
  }

  if (loading) {
    return <p>Loading data! Please wait.</p>;
  }

  return (
    <div>
      <h1>Scroll to Top and Bottom</h1>
      <h3>This is the Top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}

      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the Bottom of the Page</h3>
    </div>
  );
}

export default ScrollToTopAndBottom;
