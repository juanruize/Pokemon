import './App.css'
import { useLocation, Routes, Route } from 'react-router-dom'
import { Form, Landing, Home, About, Detail} from './views/index'



function App() {

  const location = useLocation()

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<Home/>} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/about" element= {<About/>}/>
      </Routes>
    </div>
  )
}

export default App
