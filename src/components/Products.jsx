import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { add } from "../store/CartSlice";

import { fetchProducts } from "../store/ProductSlice";

import { STATUSES } from "../store/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products,setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    // const result = await fetch('https://fakestoreapi.com/products');
    // const res = await result.json();
    // // console.log("Result", res);
    // setProducts(res);
    // }
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return (
      <h1>Loading...</h1>
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <h1>Something went wrong!</h1>
    );
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button onClick={() => handleAdd(product)} className="btn">
            {" "}
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
