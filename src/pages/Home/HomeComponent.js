import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js'
import SliderIntroduction from '../../components/Introduction/SiderIntroduction.js'
import WordingIntroduction from '../../components/WordingIntroduction.js/WordingIntroduction.js'
import Footer from '../../components/footer/footer.js'

export default function HomeComponent() {
  return (
    <div>
        <div className='row'>
          <Navbar /> 
        </div>
        
        <div className='row'>
          <div className='col'>
            <SliderIntroduction/>
          </div>
          <div className='col'>
            <WordingIntroduction/>
          </div>
         
        </div>
      
        <div className='row'>
          <Footer/> 
        </div>
       
         
    </div>
  )
}
