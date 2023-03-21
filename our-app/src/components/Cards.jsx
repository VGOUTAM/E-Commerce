function Cards(props) {
  return (
    <div className='wrap_para'>
        <img src={props.image} alt='' style={{width:'300px',marginBottom:"20px"}} />
        <br />
        <h3 className='trendingText'>{props.head}</h3>
        <br />
        <p className='trendingText'>{props.cont} </p>

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image} className='cardImage'/>
      <Card.Body>
        <Card.Title>{props.head}</Card.Title>
        <Card.Text>{props.cont}</Card.Text>
      </Card.Body>
    </Card> */}
    </div>
    
  );
}

export default Cards;