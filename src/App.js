import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Redirect to a specified URL
    const redirectTo = (url) => {
      window.location.href = url;
    };

    redirectTo('https://salemseats.com');
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
      {/* Add any additional content or components here */}
    </div>
  );
}

export default App;
