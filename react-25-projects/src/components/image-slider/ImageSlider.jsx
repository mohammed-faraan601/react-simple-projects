import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageSlider.css";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (errorMsg) {
    return <div>Error occured! {errorMsg}</div>;
  }

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  return (
    <div className="image_slider-container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
          ))
        : null}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "current-indicator" : "current-indicator hide-indicator"}></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
