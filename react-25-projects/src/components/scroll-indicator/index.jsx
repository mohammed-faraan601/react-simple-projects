import React, { useEffect, useState } from "react";
import './scroll.css'

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleChangeScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleChangeScrollPercentage);

    return () => {
      window.addEventListener("scroll", () => {});
    };
  }, [scrollPercentage]);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  if (errMsg !== "") {
    return <div>Error occured! {errMsg}</div>;
  }

  console.log(data, scrollPercentage);
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracker-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length
          ? data.map((product) => <p key={product.id}>{product.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
