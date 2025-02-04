import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootLayout from '@/layouts/df-layout/Layout';  // Import RootLayout

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <div>
          {/* Nội dung của ứng dụng */}
          <h1>Welcome to the App!</h1>
          <p>This is the main content of the app.</p>
        </div>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
