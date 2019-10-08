import React from "react"
import Disqus from 'disqus-react';

export function Discussion ({ topic, question }) {
    const disqusShortname = 'girlychatz';
        const disqusConfig = {
            url: "https://girlychatz.com/"+topic.uuid+"-"+question,
            identifier: topic.uuid+"-"+question,
            title: topic.questions[parseInt(question)].text,
        };
    return (
        <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
        />
    );
}
