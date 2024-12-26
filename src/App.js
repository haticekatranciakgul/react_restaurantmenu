
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Detail from './Pages/Detail.js';
import Content from './Components/Content/index.js'
import { Provider } from "./Context";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Content />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
