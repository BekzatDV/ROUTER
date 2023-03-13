import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardBlog = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "30rem", marginTop: "50px" }}>
        <Card.Img style={{ height: "18rem" }} variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
          <Button variant="primary">Watch</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardBlog;
