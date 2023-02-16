import React, { useState, useEffect } from "react";
import { LoremPicsum } from "react-lorem-picsum";

const Picture = () => {
  // const [image, setImage] = useState();

  // const fetchData = async () => {
  //   const data = await fetch("https://picsum.photos/seed/picsum/200/300");
  //   // const picture = await data.json();
  //   // console.log(picture);
  //   console.log(data);
  //   // setImage(picture.urls.small);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <LoremPicsum width={100} height={100} random />
    </div>
  );
};

export default Picture;
