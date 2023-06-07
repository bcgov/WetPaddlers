import { useState } from "react";
import { ATab } from "./AllTabs";
import { ReactMap } from "./Map";
import { OpenLayersMap } from "./openlayers/OpenLayersMap";
import PMTilesConverter from "./PMTilesConverter";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  const renderSelectedTab = () => {
    switch(activeTab) {
      case 'tab1':
        return (
          <ReactMap />
        )
      case 'tab2':
        return (
          <OpenLayersMap/>
        )
      case 'tab3':
      default: {
        return (
          <PMTilesConverter/>
        )
      }
    }
  }

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
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Converter
        </li>
      </ul>
      <div className="outlet">
        < ATab>
          {renderSelectedTab()}
        </ATab>
      </div>
    </div>
  );
};
export default Tabs;
