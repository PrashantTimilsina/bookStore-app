import { useEffect, useState } from "react";
// import list from "./../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-qell.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="container mx-auto max-w-screen-2xl px-4 dark:bg-slate-900 dark:text-white md:px-20">
        <div className="mt-16 items-center justify-center p-2 text-center">
          <h1 className="mt-16 p-4 text-2xl md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Join us on an exciting journey of learning and discovery. Whether
            you're looking to expand your skills, explore new opportunities, or
            simply gain knowledge, we have something for you. Let's grow and
            achieve great things together!
          </p>
          <Link to="/">
            <button className="mt-6 rounded-md bg-pink-500 px-4 py-2 text-white duration-300 hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
