import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./pages/Home";
import Login from './pages/login/Login';
import User from './pages/User';
import Recoverpass from './pages/recoverpassword/Recoverpass';
import Register from './pages/register/Register';
import UserList from './pages/userlist/Userlist';




function App() {
  return (
    
<>
<Header />
<Routes >
    
<Route path="/" element={<Home />} />,
<Route path="/user" element={<User />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/recover" element={<Recoverpass />} />
<Route path="/userlist" element={<UserList />} />

 
</Routes>




<Footer />

</>
  );
}

export default App;
