export default function Navbar() {
  return (
    <>
        <section className="flex justify-evenly sticky top-0 bg-white z-10 gap-10 p-6 items-center border-b border-[#E5E7EB]">
          <section className=" md:hidden xl:hidden lg:hidden ">
            <div className="bg-[#7B7171] border w-5 mb-2"></div>
            <div className="bg-[#7B7171] border w-5 mb-2"></div>
            <div className="bg-[#7B7171] border w-5 mb-2"></div>
          </section>

          <section className="">
            <img src="/assets/logo-text.png" alt="logo" />
          </section>

          <section className=" hidden md:block lg:block xl:block">
            <ul className="flex text-[#475569] justify-center gap-10">
              <li><a href="#home" className="hover:text-[#DB2777] font-semibold">Home</a></li>
              <li><a href="#Technologies" className="hover:text-[#DB2777] font-semibold">Technologies</a></li>
              <li><a href="#Projects" className="hover:text-[#DB2777] font-semibold">Projects</a></li>
              <li><a href="#About" className="hover:text-[#DB2777] font-semibold">About</a></li>
              <li><a href="#Contact" className="hover:text-[#DB2777] font-semibold">Contact</a></li>
            </ul>
          </section>

          <section className="flex">
            <button className="font-semibold hover:cursor-pointer hover:bg-black hover:text-white text-[#334155] text-[10px] md:text-[14px]">Sign In</button>
            <button className="bg-[#D91B7E] hover:cursor-pointer hover:bg-black hover:text-white text-white font-semibold text-[10px] md:text-[14px] px-5 py-2 ml-5 rounded-4xl">Sign Up</button>
          </section>

        </section>

    </>
  )
}
