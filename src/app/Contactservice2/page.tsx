export default function Contactservice2() {
    return (
      <section className="relative bg-black py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative z-10 text-center text-white p-8 md:p-16 max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-400">
            Your Next-Level Experience Awaits
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            We offer a range of dynamic, tailor-made solutions designed to elevate your business to new heights. Let’s push the boundaries.
          </p>
          <div className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-yellow-600">
            Start Now
          </div>
        </div>
  
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-gradient-to-br from-gray-800 to-black rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute left-[40%] top-[15%] w-[150px] h-[150px] bg-gradient-to-br from-gray-700 to-red-600 rounded-full opacity-50 animate-bounce"></div>
        </div>
  
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="grid grid-cols-10 gap-4 w-full h-full animate-pulse">
            <div className="bg-gradient-to-r from-gray-700 to-black col-span-1 opacity-60"></div>
            <div className="bg-gradient-to-r from-gray-700 to-red-600 col-span-2 opacity-70"></div>
            <div className="bg-gradient-to-r from-gray-800 to-black col-span-1 opacity-50"></div>
          </div>
        </div>
  
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0">
          <div className="w-[120px] h-[120px] bg-gradient-to-br from-red-600 to-black rounded-full animate-spin-slow"></div>
        </div>
      </section>
    );
  }
  