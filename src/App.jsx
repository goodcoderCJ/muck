import { lazy } from 'react';
import {Routes, Route} from "react-router-dom"



const Layout = lazy(() => import("./components/Layout"));

const Home =lazy(()=>import("./pages/Home"))

import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
        </Route>
 </Routes>
    </>
  )
}

export default App
