import { Routes, Route } from "react-router-dom";
import {Home, Register, Login} from "./containers/public"
import { path } from "./ultils/constants";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />}/>  
          <Route path={path.REGISTER} element={<Register />}/>  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
