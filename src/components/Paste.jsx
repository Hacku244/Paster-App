import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Paste = () => {
  // for view
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const TextToggle = ({ paste }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
      setIsExpanded((prev) => !prev); // You can use previous state for more reliable toggling
    };
  };

  const [searchTerm, setSearchTerm] = useState("");

  const pastes = useSelector((state) => state.paste.pastes);

  //console.log(pastes);

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  // function for Good format of date

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return ` Created at :  ${formattedDate} ${formattedTime}`;
  };

  return (
    <div>
      <input
        className="p-4 rounded-2xl w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[600px] mt-5   text-[#F87060] bg-[#102542] border-4 border-[#F87060]"
        type="search"
        placeholder="Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5 ">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div
                className="flex flex-col rounded-2xl  border-4 gap-5 mt-4 mb-4 border-[#F87060] p-4  text-[#F87060] sm:p-3 "
                key={paste._id}
              >
                <div className=" place-content-between ">{paste.title}</div>

                {/* <div>
                  {paste.content}
                  </div>*/}

                <div>
                  {isExpanded
                    ? paste.content
                    : `${paste.content.slice(0, 150)}...`}
                  <span
                    onClick={toggleText}
                    style={{ color: "orange", cursor: "pointer" }}
                  >
                    {isExpanded ? " Show less" : " Read more"}
                  </span>
                </div>

                <div className="flex flex-col place-content-evenly sm:flex-row gap-3 sm:gap-5 ">
                  <button className="text-[#102542] bg-[#F87060]  ">
                    <Link
                      className="text-[#102542] bg-[#F87060]"
                      to={`/?pasteId=${paste._id}`}
                    >
                      Edit
                    </Link>
                  </button>

                  <button className="text-[#102542] bg-[#F87060]">
                    <Link
                      className="text-[#102542] bg-[#F87060]"
                      to={`/pastes/${paste._id}`}
                    >
                      View
                    </Link>
                  </button>

                  <button
                    className="text-[#102542] bg-[#F87060]"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    Delete
                  </button>

                  <button
                    className="text-[#102542] bg-[#F87060] "
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("Copied to clipboard!");
                    }}
                  >
                    Copy
                  </button>

                  {/*<button>
              
              Share
            </button > */}
                  <button
                    className="text-[#102542] bg-[#F87060] "
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: "Check this out!",
                            text: "Here is something interesting:",
                            url: window.location.href, // Or any link you want to share
                          })
                          .then(() => {
                            toast.success("Link shared successfully!");
                          })
                          .catch((error) => {
                            console.error("Error sharing", error);
                          });
                      } else {
                        toast.error("Sharing not supported on this browser");
                      }
                    }}
                  >
                    Share
                  </button>
                </div>

                <div className="text-sm sm:text-base" >
                  {formatDate(paste.createdAt)}

                  {/* <div>  paste.createdAt </div>*/}
                </div>
              </div>
            );
          })}


<footer className="text-center mt-10">
<p className="text-[#F87060] text-xl font-inter font-bold border-b-2 border-[#F87060] inline-block pb-1">
  Developed By Raja Suleman
</p>
</footer>
      </div>
    </div>

     
  );

  
};

export default Paste;
