import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import Recipe from '../components/recipe/recipe';
import Card from '../components/card/card.jsx';
import Footer from '../components/footer/footer.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
     <Banner></Banner>
     <Recipe></Recipe>
     <Card></Card>
     <Footer></Footer>
    </>
  )
}

export default App
