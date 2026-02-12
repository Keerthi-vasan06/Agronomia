import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeVideo from './home.mp4'; // Adjust the path as needed
import { Button } from '@mui/material';

export default function CropRecommendation() {
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorous, setPhosphorous] = useState('');
  const [potassium, setPotassium] = useState('');
  const [ph, setPh] = useState('');
  const [state, setState] = useState('SelectState');
  const [district, setDistrict] = useState('');
  const [month, setMonth] = useState('JAN');
  const [prediction, setPrediction] = useState('');

  const handlePredict = () => {
    alert("Predicted crop: Paddy");
    setPrediction("Paddy");
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgb(3, 21, 27)',
      }}
    >
      <div
        style={{
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent background for the container
          borderRadius: '15px', // Rounded edges for the container
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        }}
        className="clip"
      >
        <video autoPlay loop muted playsInline className="homeclip" style={{ width: '100%', borderRadius: '8px' }}>
          <source src={homeVideo} type="video/mp4" />
        </video>
        <div className="container-fluid" style={{ color: 'white' }}>
          <h3 style={{ marginTop: '-600px', color:'#b73535'}}>Crop Recommendation 🌱</h3>
          <br />

          {/* Input Groups with Rounded Corners and Translucent Background */}
          {['Nitrogen', 'Phosphorous', 'Potassium', 'pH', 'District'].map((label, index) => (
            <div className="input-group mb-3" key={index} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '20px' }}>
              <span className="input-group-text">{label}</span>
              <input
                type="text"
                className="form-control"
                placeholder={`${label} content of the soil: float`}
                value={label === 'Nitrogen' ? nitrogen : label === 'Phosphorous' ? phosphorous : label === 'Potassium' ? potassium : label === 'pH' ? ph : district}
                onChange={(e) => {
                  if (label === 'Nitrogen') setNitrogen(e.target.value);
                  else if (label === 'Phosphorous') setPhosphorous(e.target.value);
                  else if (label === 'Potassium') setPotassium(e.target.value);
                  else if (label === 'pH') setPh(e.target.value);
                  else if (label === 'District') setDistrict(e.target.value);
                }}
              />
            </div>
          ))}

          {/* State Selection */}
          <div className="input-group mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}>
            <span className="input-group-text">State</span>
            <select
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="SelectState">-- select state --</option>
              {/* Additional state options */}
            </select>
          </div>

          {/* Month Selection */}
          <div className="input-group mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '20px',}}>
            <span className="input-group-text">Month</span>
            <select
              className="form-control"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="JAN">JAN</option>
              {/* Additional month options */}
            </select>
          </div>

          {/* Predict Button */}
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Button
              onClick={handlePredict}
              type="submit"
              variant="contained"
              style={{
                backgroundColor: 'green',
                color: 'white',
                borderRadius: '20px', // Rounded button
              }}
              className="customButton"
            >
              Predict
            </Button>
          </div>

          {/* Prediction Display */}
          <div style={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
            <h3>Prediction: {prediction}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
