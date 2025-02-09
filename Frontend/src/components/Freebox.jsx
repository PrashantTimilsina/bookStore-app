import "slick-carousel/slick/slick.css";
import axios from "axios";

import "slick-carousel/slick/slick-theme.css";
// import list from "./../../public/list.json";
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";
function Freebox() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-qell.onrender.com/book");
        console.log(res.data);
        setBook(res.data.filter((el) => el.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-20">
        <div>
          <h1 className="pb-2 text-xl font-semibold">Free Offered Courses</h1>
          <p>
            Explore our free courses designed to expand your knowledge and
            skills. Learn at your own pace and unlock new opportunities today!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebox;
