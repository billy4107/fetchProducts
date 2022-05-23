import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import "./ProductDetails.css"
import Loading from "./Loading";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { title, description, price, stock, thumbnail, brand, category, discountPercentage } = product;
  const dispatch = useDispatch();
  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://dummyjson.com/products/${id}`)
      .catch((error) => {
        console.error(error);
      });
    dispatch(selectedProduct(response.data));
    console.log(product)

  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <Loading />
      ) : (
        <div className="h-100">
          <div className="card mb-3 w-75 m-auto mt-5">
            <div className="row g-0">
              <div className="col-md-4">
                {thumbnail ? <img src={thumbnail} alt={title} className="card-img-details img-fluid" />
                  : <img src="https://mira.co.th/wp-content/uploads/2020/04/no-image.jpg" alt={title} className="card-img-details img-fluid rounded-start" />}    </div>
              <div className="col-md-8 p-4">
                <div className="card-body ">
                  <h5 className="card-title fs-1 fw-bolder py-3">{title}</h5>
                  <p className="card-text text-start fs-3">{description}</p>
                  <p className="card-text text-start fs-3">$ {price}</p>
                  <p className="card-text text-start fs-3">{stock}</p>
                  <p className="card-text text-start fs-3">{brand}</p>
                  <p className="card-text text-start fs-3">{category}</p>
                  <p className="card-text text-start"><small className="text-muted">discount Percentage: $ {discountPercentage}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        // <div className="row row-cols-1 row-cols-md-3 g-4" >
        //   <div className="col">
        //     <div className="card">
        //       <div className="card-header h bg-transparent border-0">
        //         <b className="card-title top-name">{title}</b>
        //       </div>
        //       {thumbnail ? <img src={thumbnail} alt={title} className="card-img-top" />
        //         : <img src="https://mira.co.th/wp-content/uploads/2020/04/no-image.jpg" alt={title} className="card-img-top" />}
        //       <div className="card-body text-start">
        //         <p className="card-text m-0">$ {price}</p>
        //         <p className="card-text m-0">{brand} / {category}</p>
        //         <p className="card-text m-0"></p>
        //       </div>
        //       <div className="card-footer bg-transparent text-muted">discount Percentage: {discountPercentage}</div>
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default ProductDetails;
