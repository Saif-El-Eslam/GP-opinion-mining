import "./opinion.css";

import { Link } from "react-router-dom";

function Opinion({ topic, person }) {
  return (
    <div className="opinion">
      <div className="opinion-wrapper">
        <h1 className="opinion-header">
          {" "}
          Here is {person || '"person"'}'s opinion about{" "}
          {topic || "Russia’s Brutal and Unprovoked Invasion of Ukraine"}.{" "}
        </h1>

        <div className="opinion-content">
          <p>
            In the first anniversary of the Russian invasion of Ukraine, Joe
            Biden has called for a “stronger response” to Russia’s aggression.
            The United States and its allies must stand up to Russia’s
            aggression and support Ukraine’s sovereignty and territorial
            integrity.
          </p>
        </div>
      </div>

      <div className="opinion-wrapper">
        <h1 className="opinion-header"> Compare with your opinion </h1>

        <div className="opinion-content">
          <textarea
            id="compare-opinion-input"
            type="text"
            placeholder="Your Opinion"
          ></textarea>
        </div>

        <Link className="margin-top-down-50" to="/comparison-result">
          {" "}
          <button id="compare-button">Compare</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Opinion;
