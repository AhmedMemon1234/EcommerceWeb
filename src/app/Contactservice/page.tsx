"use client"
import { useState } from "react";

export default function OurServices() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Discover Our Exceptional Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          We provide top-notch solutions designed to elevate your business and
          help you achieve your goals. Whether you need tech support, business
          strategy, or creative services, we have the expertise to bring your
          vision to life.
        </p>
      </div>

      {/* Paragraph with Read More/Hide feature */}
      <div className="max-w-4xl mx-auto text-gray-700">
        <p className={`${isReadMore ? "" : "line-clamp-3"} transition-all`}>
          Our services are aimed at providing comprehensive solutions that align
          with your business needs. From innovative technology integrations to
          strategic planning and digital marketing, we focus on providing
          measurable outcomes. With years of experience and expertise, we are
          confident in our ability to deliver results that matter to your brand.
          We work closely with our clients to understand their unique challenges
          and offer personalized services that exceed expectations.
          <br />
          <br />
          Our process is built on transparency, collaboration, and innovation.
          We believe in fostering long-term relationships with our clients,
          always adapting to new trends and technology to provide the best
          services possible. With a customer-centric approach, we ensure that
          your needs are at the forefront of everything we do.
        </p>
      </div>

      {/* Button to toggle Read More/Hide */}
      <div className="text-center mt-6">
        <button
          onClick={toggleReadMore}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transform transition duration-300 hover:scale-110"
        >
          {isReadMore ? "Hide" : "Read More"}
        </button>
      </div>
    </section>
  );
}
