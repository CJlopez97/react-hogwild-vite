import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const { name, specialty, greased, weight, image, "highest medal achieved": medal } = hog;

  return (
    <div className="ui eight wide column">
      <div
        aria-label="hog card"
        className="ui card pigTile"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="image">
          <img src={image} alt={`Photo of ${name}`} />
        </div>
        <div className="content">
          <h3>{name}</h3>
          {showDetails && (
            <div className="description">
              <p>Specialty: {specialty}</p>
              <p>{weight}</p>
              <p>{greased ? "Greased" : "Nongreased"}</p>
              <p>{medal}</p>
            </div>
          )}
        </div>
        <div className="extra content">
          <button
            className="ui button"
            onClick={(e) => {
              e.stopPropagation();
              onHideHog(name);
            }}
          >
            Hide Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;