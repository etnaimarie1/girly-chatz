import React from "react";
import fetch from "isomorphic-unfetch";

import { Navigation } from "../components/site";
import { TopicCard } from "../components/card";
import { TopicCard2 } from "../components/card2";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
function App({ topics }) {
  return (
    <Container>
      <Navigation />
      <Row className="mt-3 myclass">
        {topics.map(topic => (
          <Col className="mt-5">
            <TopicCard
              name={topic.name}
              description={topic.description}
              uuid={topic.uuid}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

App.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.codexsw.dev/api/list?collection=topics");
  return await res.json();
};

export default App;
