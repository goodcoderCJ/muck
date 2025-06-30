import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
	const date = new Date().getFullYear();
  return (
	  <div className='py-4 px-6 sm:px-14 md:px-14 bg-gray-800 flex gap-4 md:gap-0 justify-between items-center text-white'>
		  <div className="flex gap-1 text-xs md:text-sm  items-center">
			<p className='p-1 border border-white text-white flex items-center justify-center w-6 h-6 rounded-[4px] font-bold'>M</p>
			<span className="hidden md:flex">&copy;{date}</span>
		  </div>
		  <div className="flex flex-col text-white gap-2">
			  <p className="text-xl font-bold"> Contact</p>
			  <div className="">
			  <p className="flex gap-2 text-xs md:text-sm"><span><FaPhone/></span>+234 8167200929</p>
			  <p className="flex gap-2  text-xs md:text-sm"><span><MdLocationPin/></span>Shop 13, FSS Shopping Complex, Commercial Road,Ikeja</p>
			</div>
		  </div>
	</div>
  )
}

export default Footer