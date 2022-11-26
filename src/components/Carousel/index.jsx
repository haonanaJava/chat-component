import "./style.css";

function Carousel(props) {
  const imgList = [
    {
      id: 1,
      url: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1669020833555-ce8ca02adc0eimage",
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/arnaud-mariat-IPXcUYHeErc-unsplash.jpg",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg",
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      id: 4,
      url: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1669020860976-316713be328cimage",
      title: "Fourth slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      id: 5,
      url: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1669020860976-316713be328cimage",
      title: "Fourth slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      id: 6,
      url: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1669020860976-316713be328cimage",
      title: "Fourth slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      id: 7,
      url: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1669020860976-316713be328cimage",
      title: "Fourth slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  return (
    <div className="wrapper">
      <ul className="lil-nav">
        {imgList.map((item, index) => {
          return (
            <a href={`#${item.id}`} key={item.id}>
              <img
                className="lil-nav__img"
                src={item.url}
                alt={item.description}
              />
            </a>
          );
        })}
      </ul>
      <div className="gallery">
        {imgList.map((item, index) => {
          return (
            <img
              className="gallery__img"
              id={item.id}
              src={item.url}
              alt={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
