import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useHttp } from "../../../hooks/http.hook";
import Project from "../../views/Projects/Project";
import useMediaQuery from '@mui/material/useMediaQuery';
import { TransitionGroup } from "react-transition-group";

const TestCarousel = () => {
  const [cards, setCards] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0)
  const mobile = useMediaQuery('(min-width:600px)')


  const { request } = useHttp();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    request("http://localhost:3001/cards").
      then(setCards)
  }

  const handleChange = (selectedIndex) => {
    if (currentSlide !== selectedIndex) {
      setCurrentSlide(selectedIndex);
    }
  };
  return (
    <TransitionGroup>
      <Carousel
        onChange={(index) => handleChange(index)}
        centerMode
        centerSlidePercentage={mobile ? '30' : '65'}
        autoPlay={false}
        onClickItem={handleChange}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {
          cards.map((card, index) => (
            <Project active={currentSlide === index ? true : false} card={card} key={index} />
          ))
        }
      </Carousel>
    </TransitionGroup>
  );
};

export default TestCarousel