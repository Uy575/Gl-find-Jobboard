import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const ReactPlace = () => {
  const [Address, setAddress] = useState("");
  const [cordinates, setCordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    let latlng = await getLatLng(result[0]);
    setAddress(value);
    setCordinates(latlng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={Address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={{
          types: ["geocode"],
          componentRestrictions: { country: 'uk' },
  }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading , }) => (
          <div>
            <input style={{outline:'none' ,border:'none' }}
              {...getInputProps({
                placeholder: "e.g. London",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {/* {loading && <div>Loading...</div>} */}
              {suggestions.map((suggestion) => {
                return (
                  <div className="suggestion"
                    key={suggestion.index}
                    {...getSuggestionItemProps(suggestion, {})}
                  >
                    <span>{suggestion.description}</span>
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
