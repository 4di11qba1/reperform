import './App.css'
import Login from './components/Login'
import.meta.glob("/src/styles/*.(scss|css)", { eager: true })

function App() {

  return (
    <>
      <div>
        <Login />
      </div>
    </>
  )
}

export default App
