import './App.css';
import { MapContainer, TileLayer, LayersControl, Marker, Popup, Circle, LayerGroup, FeatureGroup, Rectangle } from 'react-leaflet';

// import { ReactMap } from './Map'

export const MapLayers = (props: any) => {
    const center: [number, number] = [51.1664, -120.906];
    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]
        
    return (
        <MapContainer id="mapid" center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
            <LayersControl.Overlay name="Marker with popup">
            <Marker position={center}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Center map">
            <Marker position={center}>
                
            </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Layer group with circles">
            <LayerGroup>
                <Circle
                center={center}
                pathOptions={{ fillColor: 'blue' }}
                radius={200}
                />
                <Circle
                center={center}
                pathOptions={{ fillColor: 'red' }}
                radius={100}
                stroke={false}
                />
                <LayerGroup>
                <Circle
                    center={[51.51, -0.08]}
                    pathOptions={{ color: 'green', fillColor: 'green' }}
                    radius={100}
                />
                </LayerGroup>
            </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Feature group">
            <FeatureGroup pathOptions={{ color: 'purple' }}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[51.51, -0.06]} radius={200} />
                <Rectangle bounds={rectangle} />
            </FeatureGroup>
            </LayersControl.Overlay>
        </LayersControl>
        </MapContainer>
    )
}