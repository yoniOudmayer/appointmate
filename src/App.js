import { Container } from "react-bootstrap";
import SignUp from "./components/SignUp";
import Title from "./components/Title";
import Home from "./components/Home";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"; //this is so we can't acces the home page when we log out
function App() {
  return (
    <div className="App">
        <Router>
      <AuthProvider>
        <Routes>
        <Route path="/*" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path ="/login" element={<Login/>}/>
        </Routes>
      </AuthProvider>
      </Router>
     

     
    </div>
  );
}

export default App;
