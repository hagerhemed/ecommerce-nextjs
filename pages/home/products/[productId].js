import React from 'react';

function ProductId({ product }) {
  return (
    <div className="card container mt-5" style={{ maxWidth: '20rem' }}>
      <img src={product.image} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductId;

export async function getStaticProps(context) {
  const { productId } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = await res.json();
  return { props: { product: data } };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { productId: '1' } },
      { params: { productId: '2' } },
      { params: { productId: '3' } },
    ],
    fallback: 'blocking',
  };
}