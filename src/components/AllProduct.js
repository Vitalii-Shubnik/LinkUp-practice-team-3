import React, { useEffect, useState } from "react";
import "../styles/allproduct.css";
import Product from "./Product";
import { ReactComponent as ArrowDown } from "../images/arrowdown.svg";
import Loader from "../Loader";
import { url } from "../constants/constants";
const AllProduct = ({query,queryCategory}) => {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(query, queryCategory)
  useEffect(() => {
    const getProductList = () => {
      setLoading(true);
      fetch(`${url}/products?per_page=${perPage}&page=${page}`)
        .then(res => res.json())
        .then(res => {
          setProductList([...productList, ...res]);
          setLoading(false);
        });
    }
    getProductList();
  }, [page]);

  useEffect(() => {
    const getProductList = () => {
      setLoading(true);
      fetch(`${url}/products?per_page=${perPage}&page=${1}&${query && query}${queryCategory && queryCategory}`)
        .then(res => res.json())
        .then(res => {
          setProductList([...res]);
          setLoading(false);
        });
    }
    getProductList();
  }, [query,queryCategory]);
  return (
    <>
      <div className="all-product-title">
        All products
      </div>
      <div className="test">
        <div className="products-grid">
          {productList.map((item) => {
            return <Product item={item} />;
          })}
          <div className="gradient" onClick={(e) => e.preventDefault()}></div>
        </div>
        <button className="loadmore" onClick={() => setPage(page + 1)}>
          <span className="loadmore-text">{loading ? "Loading..." : "View more products"}</span>
          <span className="arrow-wrapper">
            <ArrowDown />
          </span>
        </button>
      </div>
    </>
  );
};

export default AllProduct;
