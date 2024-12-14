import CommentSection from "../Comment/page";
import OurTeam from "../Ourteam/page";

export default function AboutUsHero() {
    return (
        <>
      <section className="relative bg-gradient-to-r from-black to-gray-800 min-h-screen flex justify-center items-center overflow-hidden">
        {/* 3D Background Circles */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 animate-pulse">
          <div className="w-[600px] h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-full shadow-xl animate-spin-slow"></div>
        </div>
  
        {/* Floating 3D Cube */}
        <div className="absolute inset-0 z-10 flex justify-center items-center animate-spin-slow">
          <div className="w-[250px] h-[250px] bg-gradient-to-br from-black to-gray-600 rounded-xl shadow-2xl animate-spin-slow">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-700 to-black opacity-90 rounded-xl transform rotate-45"></div>
          </div>
        </div>
  
        {/* Hero Text Content */}
        <div className="relative z-10 text-center text-white p-8 md:p-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Welcome to <span className="text-gray-400">Our World</span>
          </h2>
          <p className="text-lg mb-8">
            Dive into the world of innovation, creativity, and cutting-edge solutions. We believe in pushing the boundaries of what’s possible, delivering results that transcend expectations.
          </p>
  
          {/* Call to Action Button */}
          <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-500 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-gray-400">
            Learn More
          </div>
        </div>
  
        {/* Interactive 3D Floating Spheres */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 flex justify-center items-center space-x-6">
          <div className="w-[150px] h-[150px] bg-gradient-to-br from-gray-800 to-gray-600 rounded-full opacity-60 animate-pulse"></div>
          <div className="w-[200px] h-[200px] bg-gradient-to-br from-gray-700 to-gray-500 rounded-full opacity-70 animate-pulse"></div>
        </div>
      </section>
      <OurTeam/>
      <CommentSection/>
      </>
    );
  }
  