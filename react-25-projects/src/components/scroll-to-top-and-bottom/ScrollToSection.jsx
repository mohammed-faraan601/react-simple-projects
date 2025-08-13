import React, { useRef } from "react";

function ScrollToSection() {
  const data = [
    {
      label: "First Section",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Section",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Third Section",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fourth Section",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fifth Section",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  const ref = useRef();

  function handleScrollToSection() {
    const pos = ref.current.getBoundingClientRect().top;
    
    window.scrollTo({
        top: pos,
        left: 0,
        behavior: "smooth"
    })

    console.log(ref.current.getBoundingClientRect());
  }

  return (
    <div>
      <h1>Scroll to Particular section</h1>
      <button onClick={handleScrollToSection}>Scroll to section</button>
      {data &&
        data.map((item, index) => (
          <div ref={index === 3 ? ref : null} style={item.style} key={index}>
            <p>{item.label}</p>
          </div>
        ))}
    </div>
  );
}

export default ScrollToSection;
