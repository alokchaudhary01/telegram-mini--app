import React, { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'

const App = () => {
  useEffect(() => {
    WebApp.ready(); // ऐप initialization पूरा हुआ
    WebApp.expand(); // फुल-स्क्रीन करें
  }, []);
  return (
    <div>App</div>
  )
}

export default App