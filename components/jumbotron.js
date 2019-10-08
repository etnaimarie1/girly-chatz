import React from "react"
import {Button, Jumbotron} from "react-bootstrap";
export function TopicJumbotron({ name, description}) {
    return (
        <Jumbotron>
  <h1>{name}</h1>
  <p>
{description}
  </p>
</Jumbotron>
    );
}

