import React from 'react'
import { Link } from 'react-router-dom'
import './Electronics.css'

const data = [
    {
        id: 1,
        img: "https://i.pinimg.com/1200x/0e/1e/92/0e1e922d940a97abb62cf5dfa09dfac9.jpg",
        name: "TV",
        text: "From ₹5,499"
    },
    {
        id: 2,
        img: "https://www.ahs.com/contentassets/4055d01ab27645f8891eb174af4a9b26/hero-washermaint.png",
        name: "washingmachine",
        text: "From ₹7,499"
    },
    {
        id: 3,
        img: "https://images.jdmagicbox.com/quickquotes/images_main/-lqvukzhc.jpg",
        name: "Cooler",
        text: "From ₹5,899"
    },
    {
        id: 4,
        img: "https://www.globalbrandsmagazine.com/wp-content/uploads/2025/11/Top-Air-Conditioner-Brands-2025.webp",
        name: "AC",
        text: "From ₹30,899"
    },
    {
        id: 5,
        img: "https://cdn.thewirecutter.com/wp-content/media/2024/09/BEST-REFRIGERATOR-2048px-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
        name: "Refrigerator",
        text: "From ₹12,990"
    },
]

const Electronics = () => {
    return (
        <div>
            <div className="Container">
                <h6>Latest Electronics at Best Price</h6>
                <div className="cards">
                    {data.map((item) => (
                        <div className="p-4 bg-white rounded object-contain" key={item.id}>
                            <Link className='flex flex-col justify-between h-[100%] text-center mt-2' to={`/electronics/${item.name.toLowerCase()}`}>
                                <img src={item.img}
                                    alt="Electronics" />
                                <h3 className='md:text-[18px] text-[15p]'>
                                    {item.name} <br />
                                    <span className='font-semibold font-sans'>{item.text}</span>
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Electronics;