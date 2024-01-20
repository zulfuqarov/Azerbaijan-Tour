import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
function MapWithSearch() {
  const mapRef = useRef();
  const [query, setQuery] = useState({
    InputsValueTravleLocation: "",
  });

  const HandleChangeInput = (e) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5555/Map?locations=${query.InputsValueTravleLocation}`
      );
      const data = await response.data;
        console.log(data)
      if (data && data.length > 0) {
        const firstResult = data[0];
        const newPosition = [
          parseFloat(firstResult.lat),
          parseFloat(firstResult.lon),
        ];

        // Haritayı yeni konuma odaklamak için `flyTo` yöntemini kullanabiliriz.
        mapRef.current.flyTo(newPosition, 13);
      } else {
        console.log("Konum bulunamadı.");
      }
    } catch (error) {
      console.error("Konum araması sırasında bir hata oluştu: " + error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Konum Ara"
          name="InputsValueTravleLocation"
          value={query.InputsValueTravleLocation}
          onChange={HandleChangeInput}
        />
        <button onClick={handleSearch}>Ara</button>
      </div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ width: "100%", height: "400px" }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default MapWithSearch;
