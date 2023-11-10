import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "./infopage";
export default function Item() {
  const params = useParams();

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setContent(() => {
          return [...res];
        });
      })
      .catch((err) => console.log(err));
  }, []);
  let prop = {};
  content.find((data) => {
    if (data.id == params.id) {
      prop = {
        titlekala: data.title,
        idkala: data.id,
        pricekala: data.price,
        categorykala: data.category,
        descriptionkala: data.description,
        imagekala: data.image,
      };
    }
  });
  return (
    <>
      <Main {...prop} />
    </>
  );
}
