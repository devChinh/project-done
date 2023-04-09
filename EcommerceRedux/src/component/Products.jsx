import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom"

const Products = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://fakestoreapi.com/products");
          setData(await response.clone().json());
          setFilters(await response.json());
          setLoading(false);
      } catch (error) {
        console.log("============= error", error);
      }
    };
    getProducts();
  }, []);
  
  const Loading = () => {
    return (
        <>
        <div className="col-md-3">
            <Skeleton height={350} /> 
        </div>
        <div className="col-md-3">
            <Skeleton height={350} /> 
        </div>
        <div className="col-md-3">
            <Skeleton height={350} /> 
        </div>
        <div className="col-md-3">
            <Skeleton height={350} /> 
        </div>
        </>
    )
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark" onClick={(() => setFilters(data))}>All</button>
          <button className="btn btn-outline-dark ms-2" onClick = {() => filterProduct("men's clothing")}>Men's clothing</button>
          <button className="btn btn-outline-dark ms-2 " onClick = {() => filterProduct("women's clothing")}>
            Women's clothing
          </button>
          <button className="btn btn-outline-dark ms-2 " onClick = {() => filterProduct("jewelery")}>
            Jewelery clothing
          </button>
          <button className="btn btn-outline-dark ms-2 " onClick = {() => filterProduct("electronics")}>
            Electronic clothing
          </button>
        </div>
        {filters.map((product , index) => {
          return (
            
              <div className="col-md-3 mb-4" key={index} >
                <div className="card h-100 text-center p-4"  key={product.id} > 
                  <img src={product.image} className="card-img-top" alt="..." height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                    <p className="card-text">
                      ${product.price}
                    </p>
                    <Link to={`product/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            
          );
        })}
      </>
    );
  };

  const filterProduct = (cart) => {
    const updateList = data.filter(x => x.category === cart)
    setFilters(updateList)
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Laster products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
