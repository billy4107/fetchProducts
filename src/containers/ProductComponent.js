import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "./ProductComponent.css"
import Search from "./Search";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <Search value={searchText} onValueChange={setSearchText} />
      <hr /><br />
      <div className="row row-cols-1 row-cols-md-4 g-4" >
        {products.products ? products.products
          .filter((product) => {
            return product.category.includes(searchText)
          })
          .map((product) => {
            const { id, title, price, brand, category, thumbnail, discountPercentage } = product;
            return (
              <div className="item" key={id}>
                <Link to={`/product/${id}`} className="text-decoration-none text-dark" data-bs-toggle="modal">
                  <div className="col">
                    <div className="card this-card">
                      <div className="card-header h bg-transparent border-0">
                        <b className="card-title top-name">{title}</b>
                      </div>
                      {thumbnail ? <img src={thumbnail} alt={title} className="card-img-top" />
                        : <img src="https://mira.co.th/wp-content/uploads/2020/04/no-image.jpg" alt={title} className="card-img-top" />}
                      <div className="card-body text-start">
                        <p className="card-text m-0">$ {price}</p>
                        <p className="card-text m-0">{brand} / {category}</p>
                        <p className="card-text m-0"></p>
                      </div>
                      <div className="card-footer bg-transparent text-muted">discount Percentage: {discountPercentage}</div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }) :
          <Loading />
        }
      </div>
    </>
  )
};

export default ProductComponent;
