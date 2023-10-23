import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Kala({
  title,
  id,
  price,
  category,
  description,
  image,
  deletehandler,
}) {
  const delete_id = { id };
  const statekala = {
    titelkala: { title },
    idkala: { id },
    pricekala: { price },
    categorykala: { category },
    descriptionkala: { description },
    imagekala: { image },
  };

  function increase() {
    let countArry = JSON.parse(localStorage.getItem("labelCount"));

    let isThere = countArry.includes(id.toString());

    if (!isThere) {
      countArry.push(id.toString());
      localStorage.setItem("labelCount", JSON.stringify(countArry));
    }
  }

  return (
    <>
      <div className="item-kharid">
        <img className="image" src={image} alt="image" />
        <br />
        <span className="name">
          <b>{title}</b>
        </span>
        <br />
        <span className="category">{category}</span>
        <br />
        <span className="price">price = ${price}</span>
        <br />
        <div className="btns">
          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              deletehandler(delete_id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
          <Link
            className="link"
            to={{ pathname: `/view/${id}`, state: statekala }}
          >
            More info
          </Link>
          <Button
            size="sm"
            variant="success"
            className="buykala"
            onClick={increase}
          >
            Buy
          </Button>
        </div>
      </div>
    </>
  );
}
