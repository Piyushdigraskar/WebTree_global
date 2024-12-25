import React, { useState, useEffect } from 'react';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data from the API
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {user ? (
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg flex overflow-hidden">
          {/* Image Section */}
          <div className="w-1/3 p-4">
            <img
              className="w-full h-full object-cover rounded-lg shadow-md"
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
            />
          </div>

          {/* Info Section */}
          <div className="w-2/3 p-6">
            <div className="font-semibold text-2xl text-gray-800 mb-4">
              {user.name.first} {user.name.last}
            </div>
            <div className="text-gray-600 text-sm mb-4">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="text-gray-600 text-sm mb-4">
              <strong>Location:</strong> {user.location.city}, {user.location.country}
            </div>
            <div className="text-gray-600 text-sm mb-4">
              <strong>Phone:</strong> {user.phone}
            </div>
            <div className="flex space-x-4 mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                Contact
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                View Profile
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;