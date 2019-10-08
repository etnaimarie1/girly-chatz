import React from "react"
import { Card } from "react-bootstrap";
import Topic from "../pages/topic";
import Link from "next/link"

export function Qcard ({ text, discus, topic, index }) {
    return (
        <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{text}</Card.Title>

        <Link href={"/topic?uuid="+topic.uuid+"&question="+index}>
            <a>Open Question</a>
        </Link>
      </Card.Body>
    </Card>
    );
}
