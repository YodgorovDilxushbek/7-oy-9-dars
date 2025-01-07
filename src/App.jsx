import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Chart from './components/Chart.jsx';
import Json from './components/Json.jsx';
import Registration from './components/RegistrationForm.jsx';
import TodoApp from './components/TodoApp.jsx';
import './App.css';

const App = () => {
  return (
      <MainLayout>
        <Routes>
        <Route path="/todo" element={<TodoApp />} />

          <Route path="/chart" element={<Chart />} />
          <Route path="/json" element={<Json />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </MainLayout>
  );
};

export default App;
