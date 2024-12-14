'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function OurTeam() {
  const [showMore, setShowMore] = useState(false);

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      description:
        "With a vision for innovation, John leads the team with passion and expertise, always pushing boundaries for success.",
      Image: "/media (1).png",
    },
    {
      name: "Jane Smith",
      role: "Lead Designer",
      description:
        "Jane creates visually captivating experiences, bringing ideas to life with her innovative designs and creative vision.",
      Image: "/media (2).png",
    },
    {
      name: "Mike Johnson",
      role: "Technical Director",
      description:
        "Mike is the backbone of the tech team, ensuring every project is built on a solid and scalable technical foundation.",
      Image: "/media (3).png",
    },
    {
      name: "Sarah Lee",
      role: "Marketing Strategist",
      description:
        "Sarah is an expert in digital marketing and customer engagement, driving results through strategic campaigns.",
      Image: "/media (4).png",
    },
    {
      name: "David Brown",
      role: "Project Manager",
      description:
        "David oversees projects from conception to execution, ensuring timelines and deliverables are met with precision.",
      Image: "/media (5).png",
    },
    {
      name: "Emma White",
      role: "UX/UI Designer",
      description:
        "Emma designs seamless user interfaces and experiences, focusing on intuitive design that delights users.",
      Image: "/media (6).png",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-black">
        <h2 className="text-4xl font-extrabold mb-10">
          Meet the <span className="text-gray-400">Team</span>
        </h2>
        <p className="text-lg mb-12">
          Our team of experts are dedicated to providing top-notch solutions for
          your business needs. Let’s introduce you to the minds behind the magic.
        </p>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, showMore ? teamMembers.length : 3).map((member, index) => (
            <div
              key={index}
              className="relative transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-48 bg-gray-700 rounded-xl mx-auto mt-10 z-0 relative group">
                {/* Hover effect: Image will appear on hover */}
                <div className="absolute top-0 left-0 w-full h-full rounded-xl transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-105">
                  <Image
                    src={member.Image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
                {/* Text in the center of the card */}
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-2xl font-semibold">{member.name}</span>
                </div>
              </div>
              <div className="p-6 bg-gray-800 text-white z-10 rounded-xl transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                <p className="text-sm text-gray-400 mb-4">{member.description}</p>
                <a href="#" className="text-red-600 font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-lg font-semibold text-gray-400 hover:underline"
          >
            {showMore ? "Show Less" : "See More Team Members"}
          </button>
        </div>
      </div>
    </section>
  );
}
