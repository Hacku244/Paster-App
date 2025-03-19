
import React, { useState,useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  const {id} =useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste=allPastes.filter((pst)=>pst._id===id)[0];
 
  return (
   
    <div>
      <div
        className="flex  gap-7  flex-col md:flex-row place-content-center

        "
      >
        <input

          className=" w-full  p-1 rounded-2xl   pl-5 text-[#F87060] bg-[#102542] border-4 border-[#F87060] mt-8  md:w-[70%] lg:w-[60%]
  "
          type="text "
          value={paste.title}
          disabled
          placeholder="Enter Title Here "
          onChange={(e) => setTitle(e.target.value)}
        />

        {/*<button
          onClick={createPaste}
          type="submit"
          className="p-2 rounded-2xl mt-2"
        >
          {pasteId ? "Update My Paste " : "Create New Paste"}
        </button>*/}
      </div>
      <div className="mt-8">
        <textarea
          className="p-4 rounded-2xl mt-4   text-[#F87060] bg-[#102542] border-4 border-[#F87060]   w-full md:min-w-[800px] lg:min-w-[1000px]  "
          value={paste.content}
          placeholder="Enter Content Here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />

<footer className="text-center mt-10">
  <p className="text-[#F87060] text-xl font-inter font-bold border-b-2 border-[#F87060] inline-block pb-1">
     Made with ❤️ by Raja Suleman
  </p>
</footer>


      </div>
    </div>



  )
}

export default ViewPaste