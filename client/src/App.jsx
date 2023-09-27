import { Route, Routes } from "react-router"
import Contects from "./page/Contects"

import Contact from "./component/Contect"


function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Contects />} />
          <Route path="/contectForm" element={<Contact />} />
        </Routes>


      </div>

    </>
  )
}

export default App
