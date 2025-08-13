import React, { useEffect, useState } from "react";
import './loadMoreData.css'

function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [disableBtn, setDisabelBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);

    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length == 100) {
      setDisabelBtn(true); 
    }
  }, [products]);



  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  if (errMsg) {
    return <div>Error occured! {errMsg}.</div>;
  }

  return (
    <div className="lmd-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
      <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load more products</button>
      {disableBtn && <p>You have reached to 100 products!</p>}
      </div>
    </div>
  );
}

export default LoadMoreData;
