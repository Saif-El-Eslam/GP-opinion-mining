import "./topics.css";
import Topic from "./topic";

import { useState } from "react";

function Topics() {
  const [topics, setTopics] = useState([
    "Russia’s Brutal and Unprovoked Invasion of Ukraine",
    "Topic 2",
    "Topic 3",
    "Topic 4",
    "Topic 5",
    "Topic 6",
    "Topic 7",
  ]);

  return (
    <div className="topics">
      <div className="topics-header">
        <h1>Found Topics</h1>
      </div>

      <div className="topics-content">
        {topics.map((topic, i) => (
          <Topic key={i} topic={topic} />
        ))}
      </div>
    </div>
  );
}

export default Topics;
