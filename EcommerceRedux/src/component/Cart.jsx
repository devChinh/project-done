import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart } from "../redux/action/index";

const Cart = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.handleCart);

  const handleFixButton = (e, product) => {
    e.preventDefault();
    dispatch(addCart(product));
  };

  // ctrl + ]
  // ctrl + [

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   dispatch(addCart(product))
  // }

  const handleRemoveButton = (e, product) => {
    e.preventDefault();
    dispatch(deleteCart(product));
  };

  const ShowCart = () => {
    return (
      <>
        {state.map((product) => {
          return (
            <div className="row cart-container" key={product.id}>
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="100px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} x ${product.price} = ${" "}
                  {product.price * product.qty}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={(e) => handleRemoveButton(e, product)}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={(e) => handleFixButton(e, product)}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      {state.length === 0 ? (
        <h1 className="no-products">No products</h1>
      ) : (
        <ShowCart />
      )}
    </>
  );
};

export default Cart;
