import ModalComponent from "./components/ModalComponent";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import DynamicFieldsForm from "./components/DynamicFieldsForm";
import Navbar from "./components/Navbar";
import Stickynote from "./components/Stickynote";
import Home from "./components/Home";
import Trainer from "./components/Trainer";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/trainer" element={<Trainer/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/modal" element={<ModalComponent/>}/>
          <Route path="/dynamic" element={<DynamicFieldsForm/>}/>
          <Route path="/sticky" element={<Stickynote/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
