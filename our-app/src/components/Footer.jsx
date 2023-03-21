import React from 'react';
import ArrayItems from "./Footer_Array"
import List from "./Footer_List.jsx";
import Contact from "./Contact";



function Footer(props){
 
  return (
    <div style={{backgroundColor:props.color ,marginTop:"50px"}}>
   
      <table className="tableSpacing">

      <tr>
      {ArrayItems.map(obj =>{
        return<th><div className="footerTitle">{obj.title}</div></th>;})}
      </tr>

      <tr>
      {ArrayItems.map(obj=>{
        return(
          <td>
            {obj.items.map(item =>{
              return <div className="footerItems"><List value={item}/></div>
            })}
          </td>
        )
        })}
      </tr>
      </table>
      <Contact />
    </div>
  )
};

export default Footer;
