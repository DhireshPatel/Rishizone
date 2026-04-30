import React from 'react'
import { Link } from 'react-router-dom'
import './Furniture.css'

const data = [
    {
        id: 1,
        img: "https://i.pinimg.com/1200x/6d/08/87/6d08873e2d8c041e51aa75d4b301f43e.jpg",
        name: "sofa",
        text: "From ₹19,990"
    },
    {
        id: 2,
        img: "https://i.pinimg.com/1200x/38/a4/4e/38a44ef5721ced959c0200849f50e6a6.jpg",
        name: "bed",
        text: "From ₹18,999"
    },
    {
        id: 3,
        img: "https://i.pinimg.com/1200x/33/c2/8e/33c28e1c551cb3aa19d0ed10d070e4f4.jpg",
        name: "table",
        text: "From ₹6,899"
    },
    {
        id: 4,
        img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/11/22111611/where-to-store-safe-as-per-vastu.jpg",
        name: "almirah",
        text: "From ₹20,899"
    },
    {
        id: 5,
        img: "https://www.corsair.com/wp-content/uploads/2024/07/TC500_PR_Image01-1024x576.png",
        name: "Chair",
        text: "From ₹14,990"
    }
]

const Furniture = () => {
    return (
        <div>
            <div className="Container">
                <h6>Latest Furniture at Best Price</h6>
                <div className="cards">
                    {data.map((item) => (
                        <div className="Card" key={item.id}>
                            <Link to={`/furniture/${item.name.toLowerCase()}`}>
                                <img src={item.img}
                                    alt="Furniture" />
                                <h3 className='md:text-[18px]'>
                                    {item.name} <br />
                                    <span className='font-semibold font-sans'>{item.text}</span>
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Furniture
