
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";

const products = [
  { id: 1, name: "Lavender Bliss", price: 10, image: "/images/candle1.jpg", description: "A relaxing lavender-scented candle." },
  { id: 2, name: "Citrus Burst", price: 12, image: "/images/candle2.jpg", description: "A fresh citrus blend for energizing vibes." },
  { id: 3, name: "Vanilla Dream", price: 15, image: "/images/candle3.jpg", description: "A warm vanilla-scented candle for cozy nights." },
  { id: 4, name: "Mint Breeze", price: 8, image: "/images/candle4.jpg", description: "A soothing eucalyptus and mint aroma." },
  { id: 5, name: "Sandalwood Serenity", price: 20, image: "/images/candle5.jpg", description: "A rich sandalwood and amber combination." },
  { id: 6, name: "Tropical Paradise", price: 18, image: "/images/candle6.jpg", description: "A fruity mix of mango and passionfruit." },
  { id: 7, name: "Morning Brew", price: 22, image: "/images/candle7.jpg", description: "A bold coffee and cocoa scent for mornings." },
  { id: 8, name: "Floral Bliss", price: 25, image: "/images/candle8.jpg", description: "A floral gardenia and jasmine blend." },
];

const Products = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Store the search input value
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click on product to show more details in the modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      <h2 className="text-center mb-4">Our Products</h2>

      {/* Search bar */}
      <div className="search-bar mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {/* Display products based on filtering */}
        {filteredProducts.map((product) => (
          <div className="product-card m-2" key={product.id}>
            <div className="image-container">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="description-overlay">
                <span>
                  {product.description.split(" ").slice(0, 2).join(" ")} {" "}
                  <a href="#!" className="see-more" onClick={() => handleProductClick(product)}>
                    ...See More
                  </a>
                </span>
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <button
                className="btn btn-success"
                onClick={() => onAddToCart({ ...product, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <>
          <div className="overlay" onClick={closeModal}></div>

          <div className="product-modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-content">
              <h3>{selectedProduct.name}</h3>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <p>{selectedProduct.description}</p>
              <p className="price">${selectedProduct.price}</p>
              <button
                className="btn btn-success"
                onClick={() => onAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products; 













