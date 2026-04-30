import React from 'react'

const About = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12 px-6">
                <div className="max-w-7xl grid md:grid-cols-2 gap-8 items-center">

                    <img
                        src="https://cdn.home-designing.com/wp-content/uploads/2025/04/simple-wall-mounted-tv-600x450.jpg"
                        alt="About Us"
                        className="rounded shadow-md"
                    />

                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-800 mb-4">
                            Welcome to RISHI ENTERPRISES — Smart Tech. Smarter Living. <br />
                            We help you create a smart and comfortable home.
                        </p>
                        <p className="text-gray-700 mb-4">
                            From modern gadgets to elegant furniture, we offer products that combine
                            functionality, style, and affordability.
                        </p>
                        <p className='text-gray-700 mb-4'>
                            <span className='text-xl'>At RISHI ENTERPRISES, we focus on:</span> <br />
                            - High-quality products you can trust <br />
                            - Affordable pricing for every budget <br />
                            - Clean, modern designs that fit your lifestyle <br />
                            - Friendly customer support
                        </p>
                        <p className='text-gray-700 mb-4'>
                            <span className='text-xl'>🎯 Our Mission</span> <br />
                            To provide reliable electronics and stylish furniture that improve everyday living without breaking your budget.
                        </p>
                        <p className='text-gray-700 mb-4'>
                            <span className='text-xl'>👁️ Our Vision</span> <br />
                            To become a trusted name in every home for electronics and furniture solutions.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
