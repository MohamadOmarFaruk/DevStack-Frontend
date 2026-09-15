import bannerStack from '../assets/banner-stack.png'
export default function Hero() {
  return (
    <section className="block container mx-auto  md:flex md:justify-between md:items-center">
      <section className="">
        <h1 className="text-[30px] text-center md:text-left font-bold md:text-[60px] xl:text-[60px] lg:text-[60px] ">Build Your Ideal <br />
          <span className="text-[#FF5722]">Develop</span><span className="text-[#D81B7E]">ment</span> <span className="text-[#7C3AED]">Stack</span> </h1>

          <p className="text-[12px] text-center md:text-left text-[#475569] mt-5">Explore frontend, backend, database, and tooling options, <br />
          compare them  side  by side, and put together the stack that fits your <br />
            next project.</p>

            <section className="pt-10 flex justify-center md:justify-start gap-5">
              <button className=" text-white font-semibold rounded-[10px] px-4 py-2 bg-linear-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
               <button className=" text-[#374151] font-semibold rounded-[10px] px-10 py-2 border border-[#E5E7EB]">Learn More</button>
            </section>
      </section>
      <section className="">
        <img src={bannerStack} alt="the banner stack image" className="w-155 mx-auto" />
      </section>
    </section>
  )
}
