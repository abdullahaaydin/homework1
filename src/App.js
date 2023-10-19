
import { Route, Routes } from "react-router-dom";
import SuppliersPage from "./Homework8/Suppliers";

function App() { 
  return (<>
  <Routes>
    
  <Route path="/" element={<SuppliersPage/>}/>

  </Routes>  
  </>)
}
export default App;
