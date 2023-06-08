import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const NamingPrompt = (props: any) => {
  const [color, setColor] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [layerName, setLayerName] = useState<string>("");
  const [propertyName, setPropertyName] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        console.dir(event.target);
      }}
    >
      <label>
        Name for layer:
        <input
          type="text"
          name="layerName"
          value={layerName}
          onChange={(event) => {
            setLayerName(event.target.value);
          }}
        />
      </label>
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
      </label>
      <label>
        Property Name:
        <input
          type="text"
          name="propertyName"
          value={propertyName}
          onChange={(event) => {
            setPropertyName(event.target.value);
          }}
        />
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const payload = {
            name: layerName,
            s3_url: props.url,
            color: color,
            type: type,
            label_property: propertyName,
          };
          dispatch({ type: "ADD_LAYER", payload: { ...payload } });
          console.log("clicked");
        }}
      />
    </form>
  );
};

export default NamingPrompt;
