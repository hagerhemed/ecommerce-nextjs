import React, { useState } from 'react';

const Index = () => {
    const [products, setProducts] = useState([]);
    const [prd, setPrd] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleClick = async () => {
        const res = await fetch ("/api/products");
        const data = await res.json();
        setProducts(data);
    };

    const postProduct = async () => {
        const res = await fetch("/api/products", {
            method: "POST",
            body: JSON.stringify({ 
                title: prd,
                description: description,
                image: image
            }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();
        setPrd("");
        setDescription("");
        setImage("");
        setProducts(data);
    };

    const handleDelete = async (productId) => {
        const res = await fetch(`/api/products/${productId}`, { method: "DELETE" });
        const data = await res.json();
        handleClick();
    };
    
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8">
                    <div className="row">
                        {products.map((prd) => (
                            <div key={prd.id} className="col-md-6 mb-4">
                                <div className="card">
                                    <div className="ratio ratio-4x3">
                                    <img src={prd.image} className="card-img-top img-fluid" alt="Product" />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title text-truncate">{prd.title}</h3>
                                        <p className="card-text text-truncate">{prd.description}</p> 
                                        <button className="btn btn-danger" onClick={() => handleDelete(prd.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-dark mb-3" onClick={handleClick}>Get All Products</button>
                    <hr />
                    <input type="text" value={prd} onChange={(e) => setPrd(e.target.value)} className="form-control mb-3" placeholder="Product Title" />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control mb-3" placeholder="Product Description" />
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control mb-3" placeholder="Product Image URL" />
                    <button className="btn btn-success" onClick={postProduct}>Add Product</button>
                </div>
            </div>
        </div>
    );
}

export default Index;