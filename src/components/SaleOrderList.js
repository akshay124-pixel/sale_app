import React from "react";
import "../styles.css";
const SaleOrderList = ({ orders, onEdit, onView }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>
              {order.status === "active" ? (
                <button onClick={() => onEdit(order)}>Edit</button>
              ) : (
                <button onClick={() => onView(order)}>View</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SaleOrderList;
