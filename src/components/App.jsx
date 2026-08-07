import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hiddenHogNames, setHiddenHogNames] = useState([]);

  function handleHideHog(hogName) {
    setHiddenHogNames((prevHidden) => [...prevHidden, hogName]);
  }

  function handleAddHog(newHog) {
    setHogs((prevHogs) => [...prevHogs, newHog]);
  }

  // 1. Filter out hidden hogs
  const visibleHogs = hogs.filter((hog) => !hiddenHogNames.includes(hog.name));

  // 2. Filter by greased status
  const greasedFilteredHogs = visibleHogs.filter((hog) => {
    return showGreasedOnly ? hog.greased : true;
  });

  // 3. Sort by name or weight
  const sortedHogs = [...greasedFilteredHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.weight - b.weight;
    }
  });

  return (
    <div className="App">
      <Nav />
      <Filter
        showGreasedOnly={showGreasedOnly}
        onToggleGreased={setShowGreasedOnly}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <br />
      <HogForm onAddHog={handleAddHog} />
      <br />
      <div className="ui grid container">
        {sortedHogs.map((hog) => (
          <HogCard key={hog.name} hog={hog} onHideHog={handleHideHog} />
        ))}
      </div>
    </div>
  );
}

export default App;