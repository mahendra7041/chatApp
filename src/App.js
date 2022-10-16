import Welcome from "./components/Welcome";
import Chatroom from "./components/Chatroom";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/:roomId" element={<Chatroom />} />
    </Routes>
  );
}

export default App;
