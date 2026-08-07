import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddHog({
      ...formData,
      weight: parseFloat(formData.weight) || 0,
    });
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: "",
    });
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input 
          id="specialty" 
          name="specialty" 
          value={formData.specialty} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input 
          id="weight" 
          name="weight" 
          type="number" 
          step="0.1" 
          value={formData.weight} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label htmlFor="highest medal achieved">Highest Medal Achieved:</label>
        <input 
          id="highest medal achieved" 
          name="highest medal achieved" 
          value={formData["highest medal achieved"]} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input 
          id="image" 
          name="image" 
          value={formData.image} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label htmlFor="greased">Greased?</label>
        <input 
          id="greased" 
          name="greased" 
          type="checkbox" 
          checked={formData.greased} 
          onChange={handleChange} 
        />
      </div>
      <button className="ui button submit" type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;