import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { URL_CHANGE } from "./state/actions";



export const URLAndLayerManager = (props: any) => {
    const [layers, setLayers] = useState([]);
    const [URL, setURL] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();


    useEffect(()=> {
        console.dir(searchParams.get("layers"))
        dispatch({type: URL_CHANGE, payload: {layers: searchParams.get("layers")}})
    },[])

    return null;

}