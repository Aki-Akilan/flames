import React, {useState} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FlamesStart from './components/flamesStart/flames_start'
import FlamesMain from './components/flamesmain/flames_main'
import FlamesMatch from './components/flames_match/flames_match'
export const userContext=React.createContext();
function App() {
  const [win,setwin]=useState("");
  const [n1,setn1]=useState("")
  const [n2,setn2]=useState("")
  return (
    <userContext.Provider value={{win:win,setwin:setwin,n1:n1,n2:n2,setn1:setn1,setn2:setn2}}>
    <React.Fragment>
    <Router>
            
            <Routes>
              <Route path="/" exact element={<FlamesStart/>}/>
              <Route path="/flamesmain" element={<FlamesMain/>}/>
              <Route path="/flamesmatch"  element={<FlamesMatch/>}/>
            </Routes>
            
    </Router>
    
    </React.Fragment>
    </userContext.Provider>
  )
}

export default App
