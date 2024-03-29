import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import './ReactPlace.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { addLocation } from "../../../Redux/LocationAndJobTypeReducer";
import { setGeoLocation } from "../../../Redux/LocationAndJobTypeReducer";
import removeIcon from '../../../Assets/Icons/c-remove.svg'


const ReactPlace = () => {
  const dispatch = useDispatch();

  const [searchParams,setSearchParams] = useSearchParams();

  const locationName = searchParams.get("city")

  const [Address, setAddress] = useState(locationName === null? '' : locationName);
  const [cordinates, setCordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    let latlng = await getLatLng(result[0]);
    dispatch(setGeoLocation(latlng))
    console.log(latlng);
    setAddress(value);
  };

  dispatch(addLocation(Address));
  return (
    <div>
      <PlacesAutocomplete
        value={Address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={{
          types: ["geocode"],
          componentRestrictions: { country: "uk" },
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{position:'relative' , width:'92%'}}>
                  {Address &&
<img src={removeIcon} alt='remove' id='rmv-ico' onClick={()=>setAddress('')} />
   }
            <input
              style={{ outline: "none", border: "none" }}
              {...getInputProps({
                placeholder: "e.g. London",
                className: "location-search-input",
                // type : 'search'
              })}
            />
            <div className="suggestionDivForLocation" >

              {/* {loading && <div>Loading...</div>} */}
              {suggestions.map((suggestion) => {
                return (
                  <div
                    className="suggestion"
                    key={suggestion.index}
                    {...getSuggestionItemProps(suggestion, {})}
                  >
                    <span style={{fontWeight:'lighter' , fontSize:'0.8rem'}}>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* custom render function */}
      </PlacesAutocomplete>
    </div>
  );
};

export default ReactPlace;

