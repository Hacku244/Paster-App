import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
   /* <div className="flex flex-row gap-4  border-solid bg-[#102542] place-content-evenly
      border-4 border-[#F87060] rounded-2xl p-4 min-w-[1200px] shadow-lg font-sans text-2xl font-medium">
      <NavLink className=" text-[#F87060] "  to="/">Home</NavLink>

      <NavLink className=" text-[#F87060] "  to="/pastes">Paste</NavLink>
    </div>*/
    <div className="flex flex-col sm:flex-row gap-4 bg-[#102542] place-content-evenly border-4 border-[#F87060] rounded-2xl p-4 shadow-lg font-sans text-xl sm:text-2xl font-medium">
  <NavLink className="text-[#F87060]" to="/">
    Home
  </NavLink>

  <NavLink className="text-[#F87060]" to="/pastes">
    Paste
  </NavLink>
</div>



  );
};

export default Navbar;


