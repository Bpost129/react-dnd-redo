import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Shop from './pages/Shop/Shop'
import MonsterList from './pages/MonsterList/MonsterList'
import MonsterDetails from './pages/MonsterDetails/MonsterDetails'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/monsters' element={<MonsterList />} />
        <Route path='/monsters/:monsterId' element={<MonsterDetails />} />
      </Routes>
    </>
  )
}

export default App
