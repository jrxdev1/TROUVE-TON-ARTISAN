import './App.css'
import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FicheArtisans from './pages/FicheArtisans';
import ListeArtisans from './pages/ListeArtisans';
import Error from './pages/Error';

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/ficheartisans/:id' element={<FicheArtisans></FicheArtisans>}></Route>
      <Route path='/specialite/:id' element={<ListeArtisans></ListeArtisans>}></Route>
      <Route path='/error' element={<Error></Error>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
