"use client"
import { useState } from 'react';

export default function Faqsec() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "What services do you provide?",
            answer: "We provide Ecommerce Products, design services, and digital marketing strategies."
        },
        {
            question: "How long have you been in business?",
            answer: "We have been in business for over 10 years, delivering exceptional services to our clients."
        },
        {
            question: "What makes your team unique?",
            answer: "Our team is a combination of creativity, technical expertise, and customer-first philosophy."
        },
    ];

    const toggleAnswer = (index:any) => {
        if (activeIndex === index) {
            setActiveIndex(null); 
        } else {
            setActiveIndex(index); 
        }
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center text-black">
                <h2 className="text-4xl font-extrabold mb-10">
                    Frequently Asked <span className="text-gray-400">Questions</span>
                </h2>
                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <div
                                onClick={() => toggleAnswer(index)}
                                className="flex justify-between items-center cursor-pointer text-lg font-semibold hover:text-gray-800"
                            >
                                <span>{item.question}</span>
                                <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="mt-2 text-gray-700 text-sm">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
