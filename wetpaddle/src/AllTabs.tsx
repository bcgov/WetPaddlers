import { ReactMap } from './Map';
import { OpenLayerPlaceholder } from './OpenLayer';

export const FirstTab = () => {
    return (
      <div className="FirstTab">
        <ReactMap />
      </div>
    );
  };
  
export const SecondTab = () => {
    return (
        <div className="SecondTab">
            <OpenLayerPlaceholder />
        </div>
    );
};