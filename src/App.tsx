import Main from "./components/pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/chat/:id' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
