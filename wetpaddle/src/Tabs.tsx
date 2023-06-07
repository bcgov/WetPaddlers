import { useState } from "react";
import { ATab, FirstTab, SecondTab } from "./AllTabs";
import { ReactMap } from "./Map";
import { OpenLayersMap } from "./openlayers/OpenLayersMap";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Leaflet
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          OpenLayers
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? (
          <ATab>
            <ReactMap
            />
          </ATab>
        ) : (
          <ATab>
            <OpenLayersMap />
          </ATab>
        )}
      </div>
    </div>
  );
};
export default Tabs;
