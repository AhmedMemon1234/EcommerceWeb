"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Customersays() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "/Ourcustomer.webp",
      text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
      name: "John Doe"
    },
    {
      image: "/Ourcustomer2.webp",
      text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
      name: "Karolina Adair"
    },
    {
      image: "Ourcustomer3.webp",
      text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
      name: "Simon Konecki"
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="mt-20 my-6 font-[sans-serif]">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800">&quot;Our Customer Says&quot;</h2>
        <p className="text-sm text-gray-800 mt-4 leading-relaxed">
          Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in
        </p>
      </div>

      <div className="relative mt-20">
        <div className="flex justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="arrow-button absolute left-0 transform -translate-y-1/2 text-xl"
          >
            &lt;
          </button>
          <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white">
            <Image
              src={testimonials[currentIndex].image}
              className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7"
              alt={testimonials[currentIndex].name}
              width={300}
              height={100}
            />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-800 leading-relaxed">{testimonials[currentIndex].text}</p>
            </div>

            <div className="flex justify-center space-x-1 mt-6">
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6 text-center">
              <h4 className="text-sm whitespace-nowrap font-bold">{testimonials[currentIndex].name}</h4>
            </div>
          </div>
          <button
            onClick={nextTestimonial}
            className="arrow-button absolute right-0 transform -translate-y-1/2 text-xl"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
