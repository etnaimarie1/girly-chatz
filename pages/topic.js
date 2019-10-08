import React from "react";
import fetch from "isomorphic-unfetch";
import { NewQuestion } from "../components/newquestion";
import {TopicJumbotron} from "../components/jumbotron";
import { Navigation } from "../components/site";
import { TopicCard } from "../components/card";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Qcard } from "../components/qcard";
import { useRouter } from 'next/router'
import { Discussion } from '../components/discussion'

function Topic({ topic }) {
    const router = useRouter()
    const { question } = router.query


  return (
    <Container>
        <Navigation />

        {!question && (
            <React.Fragment>
             <TopicJumbotron
                name={topic.name}
                description={topic.description}
            />
            <Row className="mt-3 myclass">
                {(topic.questions || []).map((question, index) => (
                    <Col className="mt-5">
                        <Qcard
                            text={question.text}
                            topic={topic}
                            index={index}
                        />
                    </Col>
                ))}
            </Row>
            <NewQuestion topic={topic} />
            </React.Fragment>
        )}

        {question && (
            <React.Fragment>
                <TopicJumbotron
                    name={topic.questions[parseInt(question)].text}
                    description={topic.name}
                />
                <Discussion topic={topic} question={question} />
            </React.Fragment>
        )}

    </Container>
  );
}

Topic.getInitialProps = async ({ query }) => {
  const res = await fetch("https://api.codexsw.dev/api/get?collection=topics&uuid="+query.uuid);
  const topic = await res.json();
  return { topic }
};

export default Topic;
