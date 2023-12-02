import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Card from "./card/Card";
import axios from "./config/axios";

export default function Page() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/movie/watch/list")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  console.log(data);
  let filterProduct = [...data];
  if (search) {
    filterProduct = data.filter((el) => {
      if (el.original_title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  }
  return (
    <>
      <div className=" w-full h-25 flex flex-row my-2 px-4 gap-3 justify-center">
        <div className=" flex items-center">
          <div className=" font-extrabold bg-gradient-to-r from-colorGreen to-colorYellow rounded-xl py-1 px-1">
            {" "}
            TOP RATED
          </div>
        </div>
        <div className=" w-1/3 items-center flex border-2 border-colorGreen bg-white rounded-lg">
          <div className="w-full px-2">
            <input
              type="text"
              placeholder="Search ..."
              className="h-10 w-full items-center flex rounded-lg  focus:outline-none "
              onChange={handleInput}
            />
          </div>
          <IoSearchOutline className="mr-1 w-10 h-10" />
        </div>
      </div>
      <div className=" flex flex-wrap justify-center">
        <div className="flex flex-row flex-wrap gap-5 justify-center py-4">
          {filterProduct.map((el) => (
            <Card
              key={el.id}
              name={el.original_title}
              overview={el.overview}
              rate={el.vote_average.toFixed(1)}
              bgDrop={el.backdrop_path}
              poster={el.poster_path}
            />
          ))}
        </div>
      </div>
    </>
  );
}
