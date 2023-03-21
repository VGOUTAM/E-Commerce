import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Men from './components/NavMen'
import Women from './components/NavWomen'
import Kids from './components/NavKids'
import Electronics from './components/NavElectronics'
import Ethnics from './components/Ethnics'
import MenFormals from './components/MenFormals'
import MenWinter from "./components/MenWinter"
import MenShorts from './components/MenShorts'
import BridalDress from './components/BridalDresses'
import BridalJewellery from './components/BridalJewellery'
import WomenAprons from './components/Aprons'
import WomenLingerie from './components/Lingerie'
import WomenTops from './components/WomenTops'


 
function App(){
    
    return(
        <Routes>
            <Route path= '/' element= {<Home />}  />
            <Route path= 'login' element= {<Login />}  />
            <Route path= 'signup' element= {<SignUp />}  />
            <Route path= 'men' element= {<Men />}  />
            <Route path= 'women' element= {<Women />}  />
            <Route path= 'kids' element= {<Kids />}  />
            <Route path= 'electronics' element= {<Electronics />}  />
            <Route path= 'ethnics' element= {<Ethnics />}  />
            <Route path= 'menformals' element= {<MenFormals />}  />
            <Route path= 'winterwear' element= {<MenWinter />}  />
            <Route path= 'shorts' element= {<MenShorts />}  />
            <Route path= 'bridalwardrobe' element= {<BridalDress />}  />
            <Route path= 'bridaljewellery' element= {<BridalJewellery />}  />
            <Route path= 'aprons' element= {<WomenAprons />}  />
            <Route path= 'lingerie' element= {<WomenLingerie />}  />
            <Route path= 'tops' element= {<WomenTops />}  />

        </Routes>
    );
}

export default App;