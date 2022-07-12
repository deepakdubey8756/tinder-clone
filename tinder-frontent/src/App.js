import './App.css';
import {useState, useEffect} from "react";
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import axios from "axios"
function App() {

  // profile
  const [profile, setprofile] = useState([]);
  async function fetchProfile(){
    const req = await axios.get(`https://tinder-backend-ubuntu.herokuapp.com/fetchUser`)
    setprofile(req.data)
  }
  useEffect(() => {
    fetchProfile()
  }, []);

  return (
    <div className="App">
      <Header/>
      <Home profile={profile} setProfile={setprofile}/>
      <Footer profile={profile} setProfile={setprofile} fetchProfile={fetchProfile}/>
    </div>
  );
}

export default App;
