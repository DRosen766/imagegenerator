import React, { useState, useEffect } from "react";

const Photo = () => {
  const [image, setImage] = useState();

  const fetchData = async () => {
    const data = await fetch(
      "https://picsum.photos/200/300"
    );
    const picture = await data.json();
    console.log(picture);
    setImage(picture.urls.small);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <button onClick={fetchData}>Generate Image Randomly</button>
    </div>
  );
};

export default Photo;
