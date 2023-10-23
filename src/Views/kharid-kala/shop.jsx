import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Kala() {
  const [content, setContent] = useState(null);
  const [listShop, setListShop] = useState(
    JSON.parse(localStorage.getItem("labelCount"))
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setContent(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="pedar">
        {content?.map((data, index) => {
          if (listShop?.includes(data.id.toString())) {
            return (
              <>
                <div className="item-kharid" key={index}>
                  <img className="image" src={data?.image} alt="image" />
                  <br />
                  <span className="name">
                    <b>{data.title}</b>
                  </span>
                  <br />
                  <span className="category">{data.category}</span>
                  <br />
                  <span className="price">price = ${data.price}</span>
                  <br />
                  <div className="btns">
                    <Link
                      className="link"
                      to={{ pathname: `/view/${data.id}`, state: data }}
                    >
                      More info
                    </Link>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
