import React from 'react'
import ElecMainCarousel from "./Electronics_MainCarousel";
import ElecCardGroup from "./ElecSection_Cards"
import Footer from './Footer'
import Navbar from './Navbar';


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