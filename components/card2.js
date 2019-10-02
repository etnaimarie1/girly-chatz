import React from "react";
import { Card } from "react-bootstrap";

export function TopicCard2({ uuid, name, description }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href="/topic">Open topic</Card.Link>
      </Card.Body>
    </Card>
  );
}
