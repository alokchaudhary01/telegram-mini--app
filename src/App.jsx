import { useEffect } from 'react';
import { WebApp } from '@twa-dev/sdk'; // सही import

function App() {
  useEffect(() => {
    WebApp.ready(); // ऐप initialization पूरा हुआ
    WebApp.expand(); // फुल-स्क्रीन करें
  }, []);

  return (
    <div>
      <h1>Hello, Telegram Mini App!</h1>
    </div>
  );
}

export default App;