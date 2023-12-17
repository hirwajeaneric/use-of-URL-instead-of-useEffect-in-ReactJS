import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
