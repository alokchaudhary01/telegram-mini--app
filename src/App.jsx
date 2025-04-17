import { useEffect, useState } from "react";

function App() {
  const [viewportHeight, setViewportHeight] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready(); // Important for Telegram to init
      tg.expand();
      setViewportHeight(tg.viewportHeight);
    }
  }, []);

  const handleClick = () => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.showAlert(`Viewport Height: ${tg.viewportHeight}`);
    } else {
      alert("Telegram WebApp not available");
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Telegram Mini App</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Show Viewport Height
      </button>
      {viewportHeight && (
        <p className="mt-4 text-gray-700">Height: {viewportHeight}</p>
      )}
    </div>
  );
}

export default App;
