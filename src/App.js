import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
 
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('resume', file);
  
      try {
        const response = await axios.post('http://localhost:5000/uploads', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('Parsed Data:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".pdf,.docx" />
        <button type="submit">Upload</button>
      </form>
    
  );
}

export default App;
