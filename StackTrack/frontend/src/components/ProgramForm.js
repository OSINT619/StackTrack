import React, { useState } from 'react';
import axios from 'axios';

function ProgramForm() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    features: '',
    notes: '',
    referenceMaterial: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const featuresArray = formData.features.split(',').map((f) => f.trim());
    await axios.post('/api/programs', { ...formData, features: featuresArray });
    alert('Program added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="features"
        placeholder="Features (comma-separated)"
        value={formData.features}
        onChange={handleChange}
        required
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <input
        type="text"
        name="referenceMaterial"
        placeholder="Reference Material URL"
        value={formData.referenceMaterial}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProgramForm;