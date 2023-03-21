import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {off_ImgArr1,off_ImgArr2} from './ElectronicsSection_ImagesArray.js';
import ElecCard from "./Elec_Card"




function Elec_Cards() {
  return (
    <Container fluid style={{backgroundColor:"black"}}>
    <h1  style={{textAlign:"center",color:"#E6E6FA",marginBottom:"40px"}}>New At Stores</h1>
    
    <Row>
    {off_ImgArr1.map(img =>{
      return(<Col><ElecCard src={img}/></Col>)
    })}    
    </Row>

    <Row> 
    {off_ImgArr2.map(img =>{
      return(<Col><ElecCard src={img}/></Col>)
    })}    
    </Row>

    </Container>
  )
}

export default Elec_Cards;