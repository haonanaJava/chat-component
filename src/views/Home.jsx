import Carousel from "../components/Carousel2/index";

const Home = () => {
  const slides = [
    {
      id: "slide1",
      content: "1",
    },
    {
      id: "slide2",
      content: "2",
    },
    {
      id: "slide3",
      content: "3",
    },
    {
      id: "slide4",
      content: "4",
    },
  ];
  return (
    <div className="home">
      <Carousel slides={slides} />
    </div>
  );
};

export default Home;
