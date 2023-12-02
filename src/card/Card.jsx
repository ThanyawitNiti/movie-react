import { useState } from "react";
import Modal from "../modal/Modal";

export default function Card({name,overview,rate,bgDrop,poster}) {
    const [isOpen,setIsopen] = useState(false)
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
    const bgDropUrl = bgDrop ? `${imageBaseUrl}${bgDrop}` : null;
    const posterUrl = poster ?  `${imageBaseUrl}${poster}` : null;

  return (
    <>
    <div className="border-2 border-gray  flex flex-col justify-center items-center py-3 px-3 rounded-lg hover:shadow-2xl gap-2">
      <div className='w-full'>
        <img src={bgDropUrl} className="rounded-lg"/>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="font-bold">{name}</div>
        <div>Rating : {rate}</div>
      </div>
      <div className="border-2 border-gray  rounded-lg px-2 font-medium bg-iceflake text-slate-200 hover:bg-melon hover:shadow-xl">
        <button onClick={()=>setIsopen(true)}>
            Summary
        </button>
        </div>
    </div>
    <Modal
    open={isOpen}
    title="Detail"
    onClose={()=>setIsopen(false)}
    maxWidth={44}>
        <div className="flex justify-center flex-col items-center gap-3">
            <div className="h-1/2 w-1/2  ">
                <img src={posterUrl} className="rounded-lg"/>
            </div>
            <div className="font-medium">
                {overview}
            </div>
        </div>
    </Modal>
    </>
  );
}
