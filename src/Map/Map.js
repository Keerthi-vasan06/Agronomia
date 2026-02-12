import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve(); 
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSLmm_femD03Wnm0GEvuOxsnbjdWiKpKc&v=weekly&callback=initMap';
        script.async = true;
        script.defer = true;

        script.onload = () => resolve();
        script.onerror = () => reject(Error("Google Maps JavaScript API could not load."));

        document.head.appendChild(script);
      });
    };

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      });
    };

    window.initMap = initMap; 
    loadGoogleMapsAPI().catch((error) => console.error(error));

    return () => {
      delete window.initMap;
    };
  }, []);

  return (
    <div id="map" style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      {/* The Google Map will be rendered here */}
    </div>
  );
};

export default Map;
