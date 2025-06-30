import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
	  <section className="min-h-screen flex flex-col"> 
		  <Header />
		  <div className="py-4 mt-2 ">
			  <p className="px-10 md:px-14  text-2xl font-bold">UK Used Laptops Computer in Nigeria</p>
			  <div className="px-10 md:px-14  mt-8 py-3 bg-gray-700 text-white flex justify-center items-center">
				<p className="text-xl font-semibold">Welcome to our Store</p>
			  </div>
		  </div>
		  <main className="flex-1">
			  <Outlet/>
		  </main>
		  <Footer/>
	</section>
  )
}

export default Layout