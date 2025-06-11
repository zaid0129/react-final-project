import React, { useEffect, useState } from 'react';
import { Container, Table, Accordion } from 'react-bootstrap';




const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders.reverse()); // latest orders first
  }, []);

  return (

    <>
    
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
        Admin Panel - Placed Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-muted">No orders placed yet.</p>
      ) : (
        <Accordion defaultActiveKey="0">
          {orders.map((order, index) => (
            <Accordion.Item eventKey={index.toString()} key={order.id}>
              <Accordion.Header>
                <b>Order ID:</b> {order.id} &nbsp;&nbsp;
                <b>Total:</b> ₹{order.total} &nbsp;&nbsp;
                <b>Date:</b> {order.date}
              </Accordion.Header>

              <Accordion.Body>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{item.pname}</td>
                        <td>{item.flavor || item.desc || '-'}</td>
                        <td>₹{item.price || item.pprice}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>

    </>

  );
};

export default OrderList;
