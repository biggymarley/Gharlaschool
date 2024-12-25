import { useState } from 'react'
import './App.css'
import SkateSchool from './skate'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SkateSchool/>
    </>
  )
}

export default App
