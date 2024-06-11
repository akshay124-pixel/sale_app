import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SaleOrderList from "../components/SaleOrderList";
import SaleOrderModal from "../components/SaleOrderModal";
import "../styles.css";

const ActiveOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Customer A", date: "2023-06-01", status: "active" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const navigate = useNavigate();

  const handleEdit = (order) => {
    setCurrentOrder(order);
    setModalOpen(true);
  };

  const handleSave = (order) => {
    setOrders((prevOrders) =>
      prevOrders.map((o) => (o.id === order.id ? order : o))
    );
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Active Sale Orders</h2>
      <div className="button-container">
        <button onClick={() => setModalOpen(true)}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              ></path>
            </svg>{" "}
            Create
          </span>
        </button>
        <button onClick={() => navigate("/completed-orders")}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              ></path>
            </svg>{" "}
            Completed Orders
          </span>
        </button>
      </div>
      <SaleOrderList
        orders={orders.filter((o) => o.status === "active")}
        onEdit={handleEdit}
      />
      <SaleOrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        order={currentOrder}
        onSave={handleSave}
      />
    </div>
  );
};

export default ActiveOrders;
