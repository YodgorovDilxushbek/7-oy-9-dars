  import React, { useState } from 'react';
  import { CssBaseline, Container } from '@mui/material';
  import TodoApp from './components/Todoapp';
  import RegistrationForm from './components/RegistrationForm';

  const App = () => {
    const [activeComponent, setActiveComponent] = useState('TodoApp');

    const handleNavigation = (component) => {
      setActiveComponent(component);
    };

    return (
      <>
        <CssBaseline />
        <div className="bg-blue-500 p-4">
          <header className="flex justify-between items-center">
            <h1 className="text-white text-3xl font-bold">My App</h1>
            <nav className="space-x-4">
              <button
                onClick={() => handleNavigation('TodoApp')}
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                Todo App
              </button>
              <button
                onClick={() => handleNavigation('RegistrationForm')}
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                Registration Form
              </button>
            </nav>
          </header>
        </div>
        <Container>
          {activeComponent === 'TodoApp' ? <TodoApp /> : <RegistrationForm />}
        </Container>
      </>
    );
  };

  export default App;
