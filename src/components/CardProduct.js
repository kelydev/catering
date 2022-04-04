import React from "react";
import "../styles/sass/_cardProduct.scss";
export default function CardProduct({ product }) {
  return (
    <div className="carta-products__product">
      <figure className="carta-products__product-image-contianer">
        <img className="carta-products__product-image" src={product.urlImage} />
        <img className="carta-products__product-image-svg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi42MzIiIGhlaWdodD0iMTEuMTczIiB2aWV3Qm94PSIwIDAgMTIuNjMyIDExLjE3MyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxNS40NTEgLTMyMS4yODUpIj48cGF0aCBkPSJNNDI0LjUwNSwzMjIuMjg1YTIuNDY1LDIuNDY1LDAsMCwxLDIuNTc4LDIuNTQ0YzAsMy4yMjMtNS4zMTYsNi42MjktNS4zMTYsNi42MjlzLTUuMzE2LTIuOTA5LTUuMzE2LTYuMzgxYTIuNiwyLjYsMCwwLDEsMi42NDItMi43NjYsMi42NjgsMi42NjgsMCwwLDEsMi42NzQsMi4yNzEsMi43MTgsMi43MTgsMCwwLDEsMi43MzgtMi4zbTAtMWgwYTMuODE1LDMuODE1LDAsMCwwLTIuNzM5LDEuMTM5LDMuNzM0LDMuNzM0LDAsMCwwLTIuNjczLTEuMTEzLDMuNTg1LDMuNTg1LDAsMCwwLTMuNjQyLDMuNzY2YzAsMy45NSw1LjIzOSw2LjkzMSw1LjgzNiw3LjI1OGExLDEsMCwwLDAsMS4wMi0uMDM1Yy41OTEtLjM3OSw1Ljc3Ni0zLjgwNiw1Ljc3Ni03LjQ3MWEzLjQ0OSwzLjQ0OSwwLDAsMC0zLjU3OC0zLjU0NFoiIGZpbGw9IiM3ZDgwODUiLz48L2c+PC9zdmc+"></img>
      </figure>
      <div className="carta-products__product-info-container">
        <p className="carta-products__product-info-description">
          {product.description}
        </p>
        <h4 className="carta-products__product-info-name">{product.name}</h4>
        <span className="carta-products__product-info-price">s/ {product.price}.00</span>
      </div>
      <div className="carta-products__product-button-container">
        <button type="button" className="carta-products__product-button">
          comprar
        </button>
      </div>
    </div>
  );
}
