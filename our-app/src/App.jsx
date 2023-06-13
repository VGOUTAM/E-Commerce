import React, { createContext, useReducer } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Men from './components/NavMen'
import Women from './components/NavWomen'
import Kids from './components/NavKids'
import Electronics from './components/NavElectronics'
import Ethnics from './components/MenEthnics'
import MenFormals from './components/MenFormals'
import MenWinter from "./components/MenWinter"
import MenShorts from './components/MenShorts'
import BridalDress from './components/BridalDresses'
import BridalJewellery from './components/BridalJewellery'
import WomenAprons from './components/Aprons'
import WomenLingerie from './components/Lingerie'
import WomenTops from './components/WomenTops'
import Logout from './components/Logout';
import {reducer, initialState} from '../src/reducer/UseReducer.js'
import EmptyCart from './components/EmptyCart'
import EmptyWishlist from './components/EmptyWishlist'
import WishList from './components/WishList'
import Cart from './components/Cart'


export const userContext = createContext();

function App(){
    // const user = useContext(userContext);
    const [state, dispatch]= useReducer(reducer, initialState)
   
    return(
        <>
        <userContext.Provider value={{state, dispatch}}>
        <Routes>
            <Route path= '/' element= {<Home />}  />
            <Route path= 'login' element= {<Login />}  />
            <Route path= 'signup' element= {<SignUp />}  />
            <Route path= 'men' element= {<Men />}  />
            <Route path= 'women' element= {<Women />}  />
            <Route path= 'kids' element= {<Kids />}  />
            <Route path= 'electronics' element= {<Electronics />}  />
            <Route path= 'ethnics' element= {<Ethnics />}  />
            <Route path= 'wishlist' element= {<WishList />}  />   
            <Route path= 'emptyWishlist' element= {<EmptyWishlist />}  />   
            <Route path= 'cart' element= {<Cart />}  />   
            <Route path='emptyCart' element={<EmptyCart />}    />
            <Route path= 'menformals' element= {<MenFormals />}  />
            <Route path= 'winterwear' element= {<MenWinter />}  />
            <Route path= 'shorts' element= {<MenShorts />}  />
            <Route path= 'bridalwardrobe' element= {<BridalDress />}  />
            <Route path= 'bridaljewellery' element= {<BridalJewellery />}  />
            <Route path= 'aprons' element= {<WomenAprons />}  />
            <Route path= 'lingerie' element= {<WomenLingerie />}  />
            <Route path= 'tops' element= {<WomenTops />}  />
            <Route path= 'logout' element= {<Logout />}  />

        </Routes>
        </userContext.Provider>
        </>
    );
}

export default App;