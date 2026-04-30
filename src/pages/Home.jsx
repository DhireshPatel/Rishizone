import React from 'react'
import { useState } from 'react';
import { Route, Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [animate, setAnimate] = useState(false);

    const openPopup = () => {
        setShowPopup(true);

        setTimeout(() => {
            setAnimate(true);
        }, 10);
    };

    const closePopup = () => {
        setAnimate(false);

        setTimeout(() => {
            setShowPopup(false);
        }, 300); // animation duration match karo
    };

    const openMap = () => {
        window.open("https://maps.app.goo.gl/wKHiV7hB1zvXM6x7A", "_blank");
    };

    const openW = () => {
        window.open("https://wa.me/918209783021", "_blank")
    }

    return (
        <div>
            <section className="hero flex flex-col md:flex-row items-center">

                <div className="hero-text order-2 md:order-1">
                    <h1 className='text-2xl font-bold'>Upgrade Your Home with Smart Electronics & Stylish Furniture</h1>
                    <p>Best quality products at unbeatable prices</p>
                    <button onClick={openPopup}>
                        Shop Now
                    </button>
                </div>

                <div className="hero-img order-1 md:order-2 md:w-[2000px]">
                    <img src="https://i.pinimg.com/736x/54/31/c1/5431c1327921bd0a719db6c3806158fe.jpg" alt="products" />
                </div>

            </section>


            <section id='Products' className="categories scroll-mt-20">
                <h2 className='font-bold'>Explore Products</h2>

                <div className="category-container">
                    <div className="Card">
                        <Link to="/electronics">
                            <img src="https://i.pinimg.com/736x/53/55/99/5355998c60f2645de919743c36195d2e.jpg" alt="" />
                            <h3 className='text-[19px]'>Electronics</h3>
                        </Link>
                    </div>

                    <div className="Card">
                        <Link to="/furniture">
                            <img src="https://i.pinimg.com/1200x/92/15/cc/9215cc88a471babc3cc5f727d41f8935.jpg" alt="" />
                            <h3 className='text-[19px]'>Furniture</h3>
                        </Link>
                    </div>

                </div>
            </section>

            <section className="products">
                <h2>Featured Products</h2>
                <div className="product-container" id="productContainer">
                    <div className='flex gap-2'>
                        <div className="product-card">
                            <img src="https://i.pinimg.com/1200x/2b/59/3a/2b593a608992616e2b2b41cf1314ec12.jpg" alt="" />
                            <h3 className='text-[19px]'>Smart TV</h3>
                            <p>Start at only ₹9,999/-</p>
                        </div>
                        <div className="product-card">
                            <img src="https://i.pinimg.com/1200x/a1/ee/43/a1ee43585279e232b27d62f6cb6b0134.jpg" alt="" />
                            <h3 className='text-[19px]'>Refrigerator</h3>
                            <p>Start at only ₹11,999/-</p>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="product-card">
                            <img src="https://i.pinimg.com/736x/eb/5a/1b/eb5a1bd957b65ca951b53880c73e68fa.jpg" alt="" />
                            <h3 className='text-[19px]'>Sofa</h3>
                            <p>Start at only ₹10,999/-</p>
                        </div>
                        <div className="product-card">
                            <img src="https://i.pinimg.com/1200x/73/5e/37/735e37aff4a39e0d53e6e126c39f4da6.jpg" alt="" />
                            <h3 className='text-[19px]'>Bed</h3>
                            <p>Start at only ₹19,999/-</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='Service' className="why">
                <h2>Why Choose Us</h2>

                <div className="why-container">
                    <div className="why-card">
                        <h3>🚚 Free Delivery</h3>
                        <p>Fast and reliable delivery at your doorstep</p>
                    </div>

                    <div className="why-card">
                        <h3>🛡️ Warranty</h3>
                        <p>All products come with warranty support</p>
                    </div>

                    <div className="why-card">
                        <h3>💰 Best Prices</h3>
                        <p>Affordable pricing with great offers</p>
                    </div>

                    <div className="why-card">
                        <h3>📞 Support</h3>
                        <p>24/7 customer support available</p>
                    </div>
                </div>
            </section>

            <section className="offer text-[18px] font-bold font-serif">
                <h2>🔥 Flat 20% Off on Furniture</h2>
                <p>Limited time offer. Hurry up!</p>
            </section>


            <footer >
                <p>&copy; RISHI ENTERPRISES | All Rights Reserved</p>
                <p>Contact: +91 8209783021</p>
            </footer>

            <button className="location-btn bg-slate-400" onClick={openMap}>
                <FaLocationDot size={24} />
            </button>

            <button className="call-btn bg-green-600" onClick={openW}>
                <FaWhatsapp size={24} />
            </button>

            {showPopup && (
                <div
                    className={`fixed inset-0 flex items-center justify-center transition-all duration-300 
    ${animate ? "bg-black bg-opacity-40" : "bg-black bg-opacity-0"}`}
                >

                    <div
                        className={`bg-white p-6 rounded-lg shadow-lg text-center w-[300px]
      transform transition-all duration-300
      ${animate ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                    >

                        <h2 className="text-lg font-bold mb-2">
                            Get best price & offers on WhatsApp
                        </h2>

                        <p className="mb-4">
                            Chat with us for instant help
                        </p>

                        <div className="flex justify-center gap-3">

                            <button
                                onClick={() => {
                                    window.open("https://wa.me/918209783021", "_blank");
                                    closePopup();
                                }}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                <FaWhatsapp size={24} />
                            </button>

                            <button
                                onClick={closePopup}
                                className="bg-gray-300 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>

                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Home
