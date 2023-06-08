import {useEffect, useState} from 'react'

const NamingPrompt = () => {
 

  

  return (
    <form>
        <label>
        Name for layer:
        <input type="text" name="layerName" />
        </label>
        <label>
        Color:
        <input type="text" name="color" />
        </label>
        <label>
        Property Name:
        <input type="text" name="propertyName" />
        </label>
        <input type="submit" value="Submit" />
    </form>
   
  )
}

export default NamingPrompt