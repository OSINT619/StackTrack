import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';
import ProgramForm from './components/ProgramForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/add" element={<ProgramForm />} />
      </Routes>
    </Router>
  );
}

export default App;