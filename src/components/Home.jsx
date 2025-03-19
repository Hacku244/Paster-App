import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);

      setTitle(paste.title);

      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update paste
      dispatch(updateToPastes(paste));
    } else {
      //create paste
      dispatch(addToPastes(paste));
    }
    // after Creaton or updation

    setTitle("");
    setValue("");
    setSearchParams({});
  }
  return (
    /*<div>
      <div
        className="flex flex-row gap-7 place-content-between
        "
      >
        <input
          className="p-2 rounded-2xl mt-6 w-[60%] pl-5  text-[#F87060] bg-[#102542] border-[#F87060] border-2 "
          type="text "
          value={title}
          placeholder="Enter Title Here "
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          type="submit"
          className="p-2 rounded-2xl   text-[#F87060] bg-[#102542]  border-[#F87060] border-2 mt-6"
        >
          {pasteId ? "Update My Paste " : "Create New Paste"}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="p-4 rounded-2xl mt-4 min-w-[1000px]  border-4
               text-[#F87060] bg-[#102542]  border-[#F87060]"
          value={value}
          placeholder="Enter Content Here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>*/

    <div className="h-screen flex flex-col justify-between">
  <div className="flex flex-col sm:flex-row md:flex-row gap-7 sm:place-content-between md:gap-10">
    <input
      className="p-2 rounded-2xl mt-6 sm:w-[60%] md:w-[50%] w-full pl-5 text-[#F87060] bg-[#102542] border-[#F87060] border-2"
      type="text"
      value={title}
      placeholder="Enter Title Here"
      onChange={(e) => setTitle(e.target.value)}
    />

    <button
      onClick={createPaste}
      type="submit"
      className="p-2 rounded-2xl bg-[#F87060] text-[#102542] border-[#F87060] border-2 mt-6"
    >
      {pasteId ? "Update My Paste" : "Create New Paste"}
    </button>
  </div>

  <div className="mt-8 flex-grow overflow-auto">
    <textarea
      className="p-4 rounded-2xl mt-4 w-full sm:min-w-[1000px] md:min-w-[800px] border-4 text-[#F87060] bg-[#102542] border-[#F87060] min-h-[200px] sm:min-h-[300px] md:min-h-[350px]"
      value={value}
      placeholder="Enter Content Here"
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



  );
};

export default Home;
