import React, { useState } from "react";
import SaleOrderList from "../components/SaleOrderList";
import SaleOrderModal from "../components/SaleOrderModal";
import "../styles.css";
const CompletedOrders = () => {
  const [orders, setOrders] = useState([
    { id: 2, customer: "Customer B", date: "2023-05-20", status: "completed" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleView = (order) => {
    setCurrentOrder(order);
    setModalOpen(true);
  };

  return (
    <div>
      <h2>Completed Sale Orders</h2>
      <SaleOrderList
        orders={orders.filter((o) => o.status === "completed")}
        onView={handleView}
      />
      <SaleOrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        order={currentOrder}
        readOnly={true}
      />
    </div>
  );
};

export default CompletedOrders;
