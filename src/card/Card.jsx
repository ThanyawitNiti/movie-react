import { useState } from "react";
import Modal from "../modal/Modal";

export default function Card({name,overview,rate,bgDrop,poster}) {
    const [isOpen,setIsopen] = useState(false)
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
    const bgDropUrl = bgDrop ? `${imageBaseUrl}${bgDrop}` : null;
    const posterUrl = poster ?  `${imageBaseUrl}${poster}` : null;

  return (
    <>
    <div className="border-2 border-gray-400  flex flex-col justify-center items-center py-3 px-3 rounded-lg hover:shadow-2xl gap-2">
      <div className='w-full'>
        <img src={bgDropUrl} className="rounded-lg"/>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="font-bold">{name}</div>
        <div>Rating : {rate}</div>
      </div>
      {/* <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        laborum provident non dolorum ullam consequatur eius dolor sapiente modi
        labore accusantium libero temporibus assumenda, iure ut eveniet,
        necessitatibus magni cum.
    </div> */}
      <div className="border-2 border-blue-300  rounded-lg px-2 font-medium bg-blue-500 text-slate-200">
        <button >
            More Detail
        </button>
        </div>
    </div>
    <Modal/>
    </>
  );
}
