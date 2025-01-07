import React from 'react';
import { NavLink } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <>
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="navbar">
            <nav className="flex justify-center w-full">
              <ul className="flex space-x-6">
                <li>
                  <NavLink
                    to="/chart"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-800 text-white rounded-lg px-4 py-2"
                        : "hover:bg-blue-700 hover:text-white rounded-lg px-4 py-2"
                    }
                  >
                    Chart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/json"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-800 text-white rounded-lg px-4 py-2"
                        : "hover:bg-blue-700 hover:text-white rounded-lg px-4 py-2"
                    }
                  >
                    JSON
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/registration"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-800 text-white rounded-lg px-4 py-2"
                        : "hover:bg-blue-700 hover:text-white rounded-lg px-4 py-2"
                    }
                  >
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/todo"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-blue-800 text-white rounded-lg px-4 py-2"
                        : "hover:bg-blue-700 hover:text-white rounded-lg px-4 py-2"
                    }
                  >
                    TodoApp
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="py-8 container mx-auto px-4">{children}</main>
    </>
  );
}

export default MainLayout;
