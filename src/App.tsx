import { Route, Routes } from "react-router";
import Top from "./route/Top";
import Home from "./route/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
