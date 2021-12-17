import React from "react"
import Headers from "./components/Headers"
// import { Counter } from './features/counter/Counter';
import "./App.css"
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Detail from "./components/Detail"

function App() {
  return (
    <div>
      <Router>
        <Headers />
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>

      <Home />
    </div>
  )
}

export default App
