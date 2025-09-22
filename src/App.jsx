import {React} from 'react'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import ProductCards from "./components/ProductCards"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="w-full font-stretch-50%">
      <Navbar/>
      <div className="flex h-full mt-5">
        <div className="w-150 h-full"><Sidebar /></div>
        <div className="w-full h-full"><ProductCards/></div>
      </div>
      <div className=' absolute w-full'>
<div className='h-180 w-full bg-blue-200'>

      <Footer/>
</div>
      </div>
      
    </div>
  )
}

export default App
