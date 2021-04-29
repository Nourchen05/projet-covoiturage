import { Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrent } from './JS/actions/user'
import PrivateRoute from './Router/PrivateRoute'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/navbar/sidebar/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import AddRoad from './pages/Road'
import RoadId from './components/road/RoadById'
import Profil from './pages/Profil'
import ProfilUpdate from './pages/ProfilUpdate'
import Message from './pages/Message'
import Reservation from './pages/Reservation'
import Footer from './components/footer/Footer'
import './App.css';



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch])
  
   // Responsive NavBar
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar toggle={toggleOpen} />
      <Sidebar isOpen={isOpen} toggle={toggleOpen}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inscription" component={Register} />
        <Route path="/connexion" component={Login} />
        <Route path="/search" component={Search} />
        <PrivateRoute path="/road/add" exact component={AddRoad} />
        <PrivateRoute path="/road/:road_id" component={RoadId} />
        <PrivateRoute path="/user/profil" component={ProfilUpdate} />
        <PrivateRoute path="/user/road" component={Reservation} />
        <PrivateRoute path="/user/messages/:user_s/:user_r" exact component={Message} />
        <PrivateRoute path="/user/:user_id" exact component={Profil} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
