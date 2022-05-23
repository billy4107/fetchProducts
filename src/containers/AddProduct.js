import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productsActions';
import "./AddProduct.css"

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();
    const formAddProduct = async (event) => {
        event.preventDefault();
        const response = await axios
            .post(`https://dummyjson.com/products/add`, {
                title: title,
                description: description,
                price: price,
                brand: brand,
                stock: stock,
                category: category,
            })
            .catch((error) => {
                console.error(error);
            });
        dispatch(addProduct(response.data));
        console.log(response.data)

    };
    return (
        <div className="back">
            <form onSubmit={formAddProduct}>
                <div className="input-group input-group-lg mb-3">
                    <span className="input-group-text">Name</span>
                    <input type="text" className="form-control" onChange={(event) => { setTitle(event.target.value) }} />
                </div>

                <div className="input-group input-group-lg mb-3">
                    <span className="input-group-text">Description</span>
                    <textarea className="form-control" onChange={(event) => { setDescription(event.target.value) }} />
                </div>

                <div className="input-group input-group-lg mb-3">
                    <span className="input-group-text">Price</span>
                    <input type="text" className="form-control" onChange={(event) => { setPrice(event.target.value) }} />
                </div>

                <div className="input-group input-group-lg mb-3">
                    <span className="input-group-text">Brand</span>
                    <input type="text" className="form-control" onChange={(event) => { setBrand(event.target.value) }} />
                </div>

                <div className="input-group input-group-lg mb-3">
                    <span className="input-group-text">Stock</span>
                    <input type="text" className="form-control" onChange={(event) => { setStock(event.target.value) }} />
                </div>

                <div className="input-group input-group-lg mb-3">
                    <span className="input-group-text">Category</span>
                    <input type="text" className="form-control" onChange={(event) => { setCategory(event.target.value) }} />
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct