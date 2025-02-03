// Cart.js
import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const CartPage = styled(Container)`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const CartItemsCard = styled(Card)`
  background-color: #ffffff;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const CheckoutCard = styled(Card)`
  background-color: #fafafa;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const StyledButton = styled(Button)`
  transition: all 0.3s ease;
  border-radius: 50px;
  font-weight: 600;
  &:hover {
    transform: scale(1.05);
    background-color: #415d43;
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background-color: #415d43;
  border: none;
  color: #fff;
  &:hover {
    background-color: #415d43;
  }
`;

const OutlineSecondaryButton = styled(StyledButton)`
  border-color: #415d43;
  color: #fff;
  background-color: #415d43;
`;

const Img = styled.img`
  border: 2px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    border-color: #415d43;
  }
`;

const Cart = ({
  cartItems,
  onCheckout,
  onBackToHome,
  onRemoveFromCart,
  onUpdateQuantity,
  currentPage,
  navigateTo,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBackToHome = () => {
    onBackToHome(currentPage === "home" ? "home" : "cart");
  };

  const handleCheckout = () => {
    navigateTo("login");
  };

  return (
    <CartPage className="py-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <Row>
          <Col md={8}>
            <CartItemsCard className="p-4 shadow-sm rounded-3">
              {cartItems.map((item) => (
                <Row className="align-items-center mb-3" key={item.id}>
                  <Col xs={3}>
                    <Img src={item.image} alt={item.name} className="img-fluid rounded" />
                  </Col>
                  <Col xs={6}>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="text-muted mb-2">{item.description}</p>
                    <div className="d-flex align-items-center gap-2">
                      <OutlineSecondaryButton
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </OutlineSecondaryButton>
                      <span>{item.quantity}</span>
                      <OutlineSecondaryButton
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </OutlineSecondaryButton>
                    </div>
                  </Col>
                  <Col xs={3} className="text-end">
                    <h6 className="text-dark mb-2">${(item.price * item.quantity).toFixed(2)}</h6>
                    <PrimaryButton
                      variant="danger"
                      size="sm"
                      onClick={() => onRemoveFromCart(item.id)}
                      className="d-flex align-items-center justify-content-center"
                      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                    >
                      <FaTimes size={14} />
                    </PrimaryButton>
                  </Col>
                </Row>
              ))}
            </CartItemsCard>
          </Col>
          <Col md={4}>
            <CheckoutCard className="p-4 shadow-sm rounded-3">
              <h4 className="mb-3">Summary</h4>
              <p className="text-muted">Total Items: {cartItems.length}</p>
              <h5 className="mb-4">Total Price: ${totalPrice.toFixed(2)}</h5>
              <PrimaryButton className="w-100 mb-3 rounded-pill py-2" onClick={handleCheckout}>
                Proceed to Checkout
              </PrimaryButton>
              <OutlineSecondaryButton className="w-100 rounded-pill py-2" onClick={handleBackToHome}>
                Back to Home
              </OutlineSecondaryButton>
            </CheckoutCard>
          </Col>
        </Row>
      ) : (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h3>Your cart is empty! Order placed successfully! <span role="img" aria-label="check mark">✅</span></h3>
          <PrimaryButton className="mt-3 rounded-pill px-4 py-2" onClick={handleBackToHome}>
            Back to Home
          </PrimaryButton>
        </div>
      )}
    </CartPage>
  );
};

export default Cart;





































