import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Imgcarousel = ({imgs}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
     <Carousel activeIndex={index} onSelect={handleSelect} style={{maxWidth:'28rem'}}>
      {imgs.map((img,i) => (
      <Carousel.Item key={i} style={{height:'25rem', objectFit:'contain'}} >
        <img src={img} alt="phone" />
      </Carousel.Item>     
      ))}

    </Carousel>
  )
}

export default Imgcarousel