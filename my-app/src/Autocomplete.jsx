import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-google-places-autocomplete';

const AutocompleteComponent = () => {
    const handleSelect = async (result) => {
        const address = result.description;

        try {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0]);
            console.log('Address:', address);
            console.log('Latitude and Longitude:', latLng);
        } catch (error) {
            console.error('Error selecting address', error);
        }
    };

    return (
        <div>
            <h1>City Autocomplete</h1>
            <PlacesAutocomplete
                onSelect={handleSelect}
                debounce={300}
                searchOptions={{
                    types: ['(cities)']
                }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Type a city name...',
                                className: 'location-search-input'
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className
                                        })}
                                    >
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
};

export default AutocompleteComponent;
