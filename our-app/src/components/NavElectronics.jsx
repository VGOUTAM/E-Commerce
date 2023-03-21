import React from 'react'
import Navbar from './Navbar'
import ElecMainCarousel from "./Electronics_MainCarousel";
import ElecCardGroup from "./ElecSection_Cards"
// import Apple from "./Elec_Apple"
import Footer from './Footer'

const Apple  = React.lazy(() => import('./Elec_Apple'))

function Elec(){
    return(
        <div className='paddingDueToNavbar'>
            <Navbar />
            <ElecMainCarousel />
            <ElecCardGroup />
            <Apple />
            <Footer color="black"/>
        </div>
    )
}

export default Elec;