import Image from "next/image";

export default function Bannerbottom(){
    return(
        <div className="font-[sans-serif] bg-gray-200 relative w-auto mx-auto rounded overflow-hidden mt-4"
        >
        <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 py-10 border-y-8 border-red-500">
          <div className="text-center px-6">
            <h3 className="font-extrabold text-5xl text-red-600 leading-tight"><span className="text-gray-800">Winter</span> Sale</h3>
            <h6 className="text-2xl text-gray-800 mt-2">Limited Time Deal</h6>
            <p className="text-gray-800 text-base leading-relaxed mt-4">Discover amazing discounts and deals. Don't miss out on our exclusive Winter offers for a limited time.</p>
  
            <button type="button" className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-red-600 hover:bg-red-600 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
              Explore More
            </button>
          </div>
  
          <div className="bg-gradient-to-tr bg-red-600 rounded-tl-full rounded-bl-full w-full h-max">
            <div className="p-2">
              <Image src="/winter.jpg" className="h-64 w-64 rounded-full object-cover border-4 border-white" alt="img" width={256} height={256}/>
            </div>
          </div>
        </div>
      </div>
    )
}