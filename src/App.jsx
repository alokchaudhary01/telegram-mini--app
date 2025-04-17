import { useEffect, useState } from 'react';
import { WebApp } from '@twa-dev/sdk';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    // Get user data or use fallback for browser
    const telegramUser = WebApp.initDataUnsafe?.user || {
      first_name: 'Guest',
      last_name: '',
    };
    setUser(telegramUser);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'white' }}>
        Hello, {user?.first_name}!
      </h1>
    </div>
  );
}

export default App;