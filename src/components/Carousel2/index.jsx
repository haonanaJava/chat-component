import styled from "styled-components";

const Slider = styled.div`
  width: 300px;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
`;

const A = styled.a`
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 0 0.5rem 0;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  position: relative;

  &:active {
    top: 1px;
  }

  &:focus {
    background-color: #000;
  }
`;

const Slides = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  }
`;

const Slide = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

export default function Carousel2({ children, ...restProps }) {
  return (
    <Slider>
      {restProps.slides.map((slide, index) => {
        return (
          <A
            key={index}
            href={`#${slide.id}`}
            aria-label={`Slide ${index + 1}`}
          >
            {index + 1}
          </A>
        );
      })}
      <Slides>
        {restProps.slides.map((slide, index) => {
          return (
            <Slide key={index} id={`slide${index + 1}`}>
              {slide.content}
            </Slide>
          );
        })}
      </Slides>
    </Slider>
  );
}
