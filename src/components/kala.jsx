import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
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
      toast("با موفقیت به سبد خرید اضافه شد", {
        duration: 1000,
        position: "top-center",
        style: { background: "black", color: "white" },
        className: "",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  }

  return (
    <>
      <div className="item-kharid">
        <img className="image" src={image} alt="image" />
        <br />
        <br />
        <div className="item-bode">
          <span className="name">
            <b>{title}</b>
          </span>
          <br />
          <br />
          <hr />
          <span className="category">{category}</span>
          <br />
          <hr />
          <span className="price">قیمت = ${price}</span>
          <br />
          <hr />
          <div className="btns">
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                deletehandler(delete_id);
              }}
            >
              حذف
            </Button>
            <Link
              className="link"
              to={{ pathname: `/view/${id}`, state: statekala }}
            >
              اطلاعات بیشتر
            </Link>
            <Button
              size="sm"
              variant="success"
              className="buykala"
              onClick={increase}
            >
              خرید
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
