// import React from "react";
import React, { useEffect, useState } from "react";
import "../styles/allproduct.css";
import Product from "./Product";
import { ReactComponent as ArrowDown } from "../images/arrowdown.svg";
const AllProduct = (props) => {
  // const perPage = 3;
  // eslint-disable-next-line no-unused-vars
  const [totalPages, setTotalPages] = useState(Math.ceil(props.items.length));
  const [page, setPage] = useState(1);

  const [data, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDataList = () => {
      setLoading(true);
      // setTotalPages();
      setUserList(data);
      // console.log(data, page, props.items[page]);
      setUserList([...data, ...props.items[page - 1]]);
      setLoading(false);
    };
    getDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="test">
      <ol className="products-grid">
        {data.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
        <div className="gradient" onClick={(e) => e.preventDefault()}></div>
      </ol>
      {totalPages !== page && (
        <button className="loadmore" onClick={() => setPage(page + 1)}>
          {loading ? "Loading..." : "View more products"}
          <span className="arrow-wrapper">
            <ArrowDown />
          </span>
        </button>
      )}
    </div>
  );
};

export default AllProduct;
