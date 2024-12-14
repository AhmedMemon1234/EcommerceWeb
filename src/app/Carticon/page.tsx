"use client";
import { useState } from "react";
import Image from "next/image";

// Define the type for a cart item
interface CartItem {
    id: number;
    name: string;
    price: string;
    image: string;
}

export default function CartSection() {
    // Initialize cartItems with the type CartItem[]
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleAddToCart = (item: CartItem) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <div className="p-4">
            {/* Product Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <Image src="/shirt2.jpg" alt="T-shirt" width={500} height={500} />
                    <button
                        onClick={() => handleAddToCart({ id: 1, name: "T-shirt", price: "$12", image: "/shirt2.jpg" })}
                        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
                    >
                        Add to Cart
                    </button>
                </div>

                {/* Cart Section */}
                <div className="relative">
                    <button className="relative">
                        🛒 <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2">{cartItems.length}</span>
                    </button>
                    {cartItems.length > 0 && (
                        <div className="absolute right-0 bg-white shadow-lg p-4 w-64">
                            <h3 className="font-bold">Cart Items</h3>
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.id} className="flex items-center gap-4">
                                        <Image src={item.image} alt={item.name} width={50} height={50} />
                                        <div>
                                            <p>{item.name}</p>
                                            <p>{item.price}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
