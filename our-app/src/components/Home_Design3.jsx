import React from 'react'
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {homeDesign3} from "./KidsSection_ImagesArray";
import { useScroll } from "react-use-gesture";
import { useSpring } from "react-spring";


function Design3(){

    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
      }));

      const bind = useScroll(event => {
        set({
          transform: `perspective(500px) rotateY(${
            event.scrolling ? event.delta[0] : 0
          }deg)`
        });
      });

      console.log(style,bind)
    
    return(             
              <>
                <div className="container">
                  {homeDesign3.map(src => (
                    <div
                      key={src}
                      className="card"
                      style={{
                        backgroundImage: `url(${src})`
                      }}
                    />
                  ))}
                </div>
              </>
            
          
    )
}

export default Design3;