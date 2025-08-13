import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

function Home() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductsList() {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (data) {
        setProductsList(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {productsList && productsList.length
            ? productsList.map((productItem) => (
                <ProductTile product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default Home;
