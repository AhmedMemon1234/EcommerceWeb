export default function ServicesDown() {
    return (
      <section className="bg-white mt-16 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 z-10 relative">
            Our Services <span className="text-red-600">We Provide You !</span>
          </h2>
          <p className="text-lg text-black mb-12 z-10 relative">
            We provide top-notch eCommerce solutions tailored to your business. Explore our services and let us help you grow your online store.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Card */}
            <div className="relative overflow-hidden bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-r from-black to-red-600 rounded-t-xl transform rotate-45 mx-auto mt-10 z-0 relative">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-semibold">
                  eCommerce Web Design
                </span>
              </div>
              <div className="p-6 z-10 relative">
                <p className="text-black mb-6">
                  We create stunning eCommerce websites that drive sales and improve user experience.
                </p>
                <a href="#" className="text-red-600 font-semibold hover:underline">Shop Now</a>
              </div>
            </div>
  
            {/* Second Card */}
            <div className="relative overflow-hidden bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-r from-black to-red-600 rounded-t-xl transform rotate-45 mx-auto mt-10 z-0 relative">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-semibold">
                  Payment Integration
                </span>
              </div>
              <div className="p-6 z-10 relative">
                <p className="text-black mb-6">
                  Secure and seamless payment solutions for your eCommerce store, boosting customer trust.
                </p>
                <a href="#" className="text-red-600 font-semibold hover:underline">Shop Now</a>
              </div>
            </div>
  
            {/* Third Card */}
            <div className="relative overflow-hidden bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-r from-black to-red-600 rounded-t-xl transform rotate-45 mx-auto mt-10 z-0 relative">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-semibold">
                  Product Management
                </span>
              </div>
              <div className="p-6 z-10 relative">
                <p className="text-black mb-6">
                  Efficient product management systems to help you organize, update, and sell your products with ease.
                </p>
                <a href="#" className="text-red-600 font-semibold hover:underline">Shop Now</a>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  