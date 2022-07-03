import './App.css'
import {HashRouter} from 'react-router-dom'
import {Header} from './header/Header'
import {RoutePages} from './routes/RoutePages'

function App() {
  return (
    <div className="App">
      <HashRouter>

        <Header/>

        <hr/>

        <RoutePages/>

      </HashRouter>
    </div>
  )
}

export default App
