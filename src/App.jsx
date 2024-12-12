import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Shop from './pages/Shop/Shop'
import MonsterList from './pages/MonsterList/MonsterList'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/monsters' element={<MonsterList />} />
      </Routes>
    </>
  )
}

export default App
