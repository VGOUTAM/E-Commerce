// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ImgSample from "./ImageSample.jsx";

function Elec_Card(props) {
  return (
    <Card style={{ width: '18rem',marginBottom:"25px" }}>
      <Card.Img variant="top" src={props.src} />
      
    </Card>
  );
}

export default Elec_Card;