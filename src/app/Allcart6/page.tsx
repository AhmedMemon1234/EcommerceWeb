'use client';
import { useState } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  size?: string;
  color?: string;
};

const products = [
  { id: 1, name: 'Mobile', image: '/women1.jpg', price: '$12' },
  { id: 2, name: 'Watch 2', image: '/watch1.jpg', price: '$15' },
  { id: 3, name: 'Toys', image: '/toys.jpg', price: '$20' },
  { id: 4, name: 'Toys 2', image: '/toy2.jpg', price: '$18' },
  { id: 5, name: 'Mobile', image: '/mobile.jpg', price: '$22' },
  { id: 6, name: 'Mobile2', image: '/mob14.jpg', price: '$25' },
  { id: 7, name: 'Women 1', image: '/women1.jpg', price: '$30' },
  { id: 8, name: 'Women 2', image: '/women2.jpg', price: '$28' },
  { id: 9, name: 'Women 3', image: '/women3.jpg', price: '$35' },
  { id: 10, name: 'Shirt 1', image: '/shirt2.jpg', price: '$40' },
  { id: 11, name: 'Shirt 2', image: '/shirt1.jpg', price: '$42' },
  { id: 12, name: 'Watch 3', image: '/watchpic5.jpg', price: '$50' },
];

export default function Cartsec2() {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string>('/women1.jpg');
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [showOrderMessage, setShowOrderMessage] = useState<boolean>(false);

  // Form input states
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('credit-card');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleSizeChange = (size: string) => setSelectedSize(size);
  const handleColorChange = (color: string) => setSelectedColor(color);
  const handleTabChange = (tab: string) => setShowDescription(tab === 'Description');
  const handleImageClick = (image: string) => setSelectedImage(image);

  const handleAddToCart = (product: Product) => {
    const updatedProduct = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      image: selectedImage,
    };

    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);

    setSelectedSize('');
    setSelectedColor('');

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== productId));
  };

  const toggleCartSidebar = () => setCartOpen(!cartOpen);

  // Form validation
  const handleFormChange = () => {
    if (name && email && address && phone) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to your cart before placing an order.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOrderPlaced(true);
      setShowOrderMessage(true);
      setTimeout(() => setShowOrderMessage(false), 3000);
    }, 2000);
  };

  return (
    <div className="font-sans">
      {/* Success Message */}
      {showMessage && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2 z-50">
          Successfully added to cart!
        </div>
      )}

      <div className="p-4 max-w-6xl mx-auto">
        {/* Product Section */}
        <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full lg:sticky top-0 flex gap-3 z-10">
            <Image
              src={selectedImage}
              alt="Product"
              className="w-3/4 rounded-lg object-cover"
              width={500}
              height={500}
            />
            <div className="w-20 flex flex-col gap-3">
              {["/women1.jpg", "/women1.jpg", "/women1.jpg", "/women1.jpg"].map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt="Thumbnail"
                  className="w-full cursor-pointer rounded-lg"
                  width={1000}
                  height={1000}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="lg:pl-8">
            <h2 className="text-2xl font-bold text-gray-800">Smart Suit For Woman Original | USA Stock </h2>
            <h3 className="text-4xl font-bold text-gray-800 mt-8">$1200</h3>

            {/* Sizes Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {["SM", "MD", "LG", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center ${selectedSize === size ? "border-gray-800" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Colors</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {["#000", "#ccc", "#ffa500", "#f00"].map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`w-12 h-11 rounded-lg ${selectedColor === color ? "border-2 border-gray-800" : "border-2"} hover:border-gray-800`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-10 flex gap-4">
              <button
                type="button"
                onClick={() => handleAddToCart({ id: 1, name: 'Smart Suit For Woman Original | USA Stock ', price: "$1200", image: selectedImage })}
                className="flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white border border-gray-800 text-base rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* "Just For You" Section */}
        <h2 className="text-3xl font-bold text-gray-800 mt-12">Just For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg object-cover"
                width={200}
                height={200}
              />
              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="text-lg mt-2">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Order Form */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold">Enter Your Information</h3>
          <div className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                handleFormChange();
              }}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleFormChange();
              }}
            />
            <textarea
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-lg"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                handleFormChange();
              }}
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-lg"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                handleFormChange();
              }}
            />

            {/* Payment Method Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Payment Method</h3>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mt-4"
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="Cashondelivery">Cash On Delivery</option>
              </select>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="mt-8">
            <button
              onClick={handlePlaceOrder}
              disabled={!isFormValid}
              className={`px-6 py-3 ${isFormValid ? 'bg-green-500' : 'bg-gray-300'} text-white rounded-lg text-xl`}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>

      {/* Order Placed Confirmation */}
      {showOrderMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold">Order Placed!</h2>
            <p className="mt-4">Thank you for your order. You will receive a confirmation email soon.</p>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed right-0 overflow-scroll top-0 w-1/3 h-full bg-white shadow-lg p-4 z-50">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <ul className="mt-4">
            {cartItems.length === 0 ? (
              <p>No items in the cart.</p>
            ) : (
              cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-md object-cover"
                    />
                    <span className="ml-4">{item.name}</span>
                    {item.size && <span className="ml-4 text-sm text-gray-600">{item.size}</span>}
                    {item.color && (
                      <span
                        className="ml-2 w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className="mt-4">
            <button
              onClick={toggleCartSidebar}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Close Cart
            </button>
          </div>
        </div>
      )}

      {/* Toggle Cart Button */}
      <button
        onClick={toggleCartSidebar}
        className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg"
      >
        Cart ({cartItems.length})
      </button>
    </div>
  );
}
