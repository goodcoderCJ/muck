import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
// import { useRef } from "react";

const Header = () => {
	// const cartNumber = useRef(null)
  return (
	  <header className="py-4 px-10 md:px-14  bg-gray-800 flex justify-between items-center">
		  <Link to="/" className="text-white text-[1.3rem] font-bold"><span className="border rounded-[3px] p-1 border-white">M</span>uck.ng</Link>
		  <div className="hidden border rounded-[3px] p-2 bg-white sm:flex md:flex lg:flex items-center w-[60%]">
			  <input type="search" className="flex-1 px-2 py-2 border-0  outline-0 text-sm" placeholder="Search"/>
			  <div className="flex p-2 items-center justify-center bg-blue-500">
				<IoSearch className="text-white"/>
			  </div>
		  </div>
		  <IoSearch className="text-white sm:hidden md:hidden lg:hidden"/>
		  <div className="flex gap-12 items-center">
			{/* <div className="relative">
						  <div className="flex items-center justify-center h-7 w-7 p-1 rounded-full bg-amber-600 text-white absolute top-[-15px] right-[-15px] z-[100]"><p ref={cartNumber}>0</p></div>
						<FaShoppingCart className="text-white relative text-[1.7rem]"/>
			</div> */}
			<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
						  <IoPersonSharp/>
			</div>
		  </div>
		  
	</header>
  )
}

export default Header