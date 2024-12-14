"use client";

import React, { useState } from "react";
import {
  FaShoppingCart,
  FaStar,
  FaPaintBrush,
  FaTiktok,
  FaVideo,
  FaCamera,
  FaPhotoVideo,
  FaFigma,
  FaVectorSquare,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  stars: number;
  icon: JSX.Element;
};

type CartProduct = Product & {
  size: string;
  version: string;
};

const products: Product[] = [
  { id: 1, title: "Pro Canva Subscription", description: "Create stunning designs with Canva Pro.", price: "$12.99", stars: 4.5, icon: <FaPaintBrush className="text-6xl text-blue-500" /> },
  { id: 2, title: "TikTok Growth Tools", description: "Boost your social media presence.", price: "$8.99", stars: 4.0, icon: <FaTiktok className="text-6xl text-purple-500" /> },
  { id: 3, title: "CapCut Video Editor", description: "Advanced editing tools at your fingertips.", price: "$10.99", stars: 4.8, icon: <FaVideo className="text-6xl text-red-500" /> },
  { id: 4, title: "PicsArt Premium", description: "Unleash your creativity with PicsArt.", price: "$9.49", stars: 4.7, icon: <FaCamera className="text-6xl text-yellow-500" /> },
  { id: 5, title: "Adobe Photoshop", description: "Professional photo editing software.", price: "$20.99", stars: 4.9, icon: <FaPhotoVideo className="text-6xl text-green-500" /> },
  { id: 6, title: "Figma Pro", description: "Collaborative design and prototyping tool.", price: "$15.49", stars: 4.8, icon: <FaFigma className="text-6xl text-indigo-500" /> },
  { id: 7, title: "Vector Art Bundle", description: "Exclusive vector design bundle.", price: "$7.99", stars: 4.3, icon: <FaVectorSquare className="text-6xl text-orange-500" /> },
  { id: 8, title: "Final Cut Pro", description: "Professional video editing software.", price: "$299.99", stars: 4.6, icon: <FaVideo className="text-6xl text-gray-500" /> },
];

export default function CartApp() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, { size: string; version: string }>>({});

  const handleAddToCart = (product: Product) => {
    const options = selectedOptions[product.id];
    if (!options || !options.size || !options.version) {
      alert("Please select a size and version before adding to the cart.");
      return;
    }
    const updatedProduct: CartProduct = {
      ...product,
      size: options.size,
      version: options.version,
    };
    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  const toggleCartSidebar = () => setCartOpen(!cartOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Please add items to the cart before placing the order.");
      return;
    }
    if (formData.name && formData.email && formData.phone && formData.address && formData.paymentMethod) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOrderPlaced(true);
      }, 3000);
    } else {
      alert("Please fill out all fields before placing the order.");
    }
  };

  if (orderPlaced) {
    setTimeout(() => setOrderPlaced(false), 3000);
    return (
      <div className="flex items-center justify-center h-screen bg-green-100">
        <div className="text-center">
          <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-green-800">Order Placed Successfully!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <div className="p-4 max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Premium Tools</h2>
          <button
            onClick={toggleCartSidebar}
            className="relative p-2 text-white bg-blue-600 rounded-full"
          >
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <div className="w-full flex justify-center items-center">{product.icon}</div>
              <h3 className="text-xl font-bold mt-4">{product.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{product.description}</p>
              <p className="text-lg font-semibold mt-2">{product.price}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-400 mr-2" />
                <span>{product.stars} stars</span>
              </div>
              <select
                className="w-full mt-2 border rounded-lg p-2"
                onChange={(e) =>
                  setSelectedOptions((prev) => ({
                    ...prev,
                    [product.id]: { ...prev[product.id], size: e.target.value },
                  }))
                }
                value={selectedOptions[product.id]?.size || ""}
              >
                <option value="">Select Size (GBs)</option>
                <option value="100MB">100MB</option>
                <option value="500MB">500MB</option>
                <option value="1GB">1GB</option>
                <option value="5GB">5GB</option>
              </select>
              <select
                className="w-full mt-2 border rounded-lg p-2"
                onChange={(e) =>
                  setSelectedOptions((prev) => ({
                    ...prev,
                    [product.id]: { ...prev[product.id], version: e.target.value },
                  }))
                }
                value={selectedOptions[product.id]?.version || ""}
              >
                <option value="">Select Version</option>
                <option value="17.1">17.1</option>
                <option value="17.5">17.5</option>
                <option value="18.1">18.1</option>
                <option value="18.5">18.5</option>
              </select>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {cartOpen && (
          <div className="fixed top-36 right-28 w-80 bg-white shadow-lg p-4">
            <h3 className="text-xl font-bold mb-4">Cart</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.size} / {item.version}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <h4 className="text-lg font-semibold mt-4">Customer Info</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-2 border rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 border rounded-lg p-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full mt-2 border rounded-lg p-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full mt-2 border rounded-lg p-2"
            />
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="w-full mt-2 border rounded-lg p-2"
            >
              <option value="">Select Payment Method</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Place Order"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
