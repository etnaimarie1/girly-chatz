import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Router from "next/router"

export function NewQuestion ({ topic }) {
    const [question, setQuestion] = React.useState('')

    const handleAsk = () => {
        const { _id, questions, ...topicData } = topic

        const payload = {
            collection: 'topics',
            data: {
                ...topicData,
                questions: [
                    ...(questions || []),
                    {
                        text: question
                    }
                ]
            }
        }
        return fetch('https://api.codexsw.dev/api/upsert', {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setQuestion('')
                Router.replace('/topic?uuid='+topic.uuid)
            })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Ask your question</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="..."
                        value={question}
                        onChange={ev => setQuestion(ev.target.value)}
                    />
                 </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handleAsk}>Ask</Button>
                </Col>
            </Row>

        </Container>
    );
}

