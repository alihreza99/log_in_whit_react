import React, { useState } from "react";
import { useEffect } from "react";

export default function ShopLabel() {
  const [labelCount, setLabelCount] = useState(
    JSON.parse(localStorage.getItem("labelCount")).length
  );

  // useEffect(() => {
  //   setLabelCount(JSON.parse(localStorage.getItem("labelCount")));
  // }, [JSON.parse(localStorage.getItem("labelCount"))]);

  return (
    <div className="shopLabel">
      {labelCount}
    </div>
  );
}
