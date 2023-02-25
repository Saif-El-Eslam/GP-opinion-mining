import "./topics.css";
import Topic from "./topic";

import { useState } from "react";

function Topics() {
  const [topics, setTopics] = useState([
    "Russia’s Brutal and Unprovoked Invasion of Ukraine", // https://www.whitehouse.gov/briefing-room/speeches-remarks/2023/02/21/remarks-by-president-biden-ahead-of-the-one-year-anniversary-of-russias-brutal-and-unprovoked-invasion-of-ukraine/
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
        <h1>Topics</h1>
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
