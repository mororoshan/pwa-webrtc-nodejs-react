import { useEffect } from "react";
import ConnectionPage from "./pages/ConnectionPage";
import HardCodedPage from "./pages/HardCodedPage";

const App = () => {
  useEffect(() => {
    
  }, []);

  return (
    <div className="app bg-gray-800 h-full overflow-auto text-white">
      <ConnectionPage />
      {/* <HardCodedPage /> */}
    </div>
  );
};

export default App;
