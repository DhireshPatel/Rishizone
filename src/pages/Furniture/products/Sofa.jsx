import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const data = {
    sofa: [
        {
            id: 1,
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfjKNV2_Vvi98UDsTB8BKofnVOlADWw0BRq6sQjiC3R9aP1v7XX4oKWU5E7Pfksz0wjMrUMRaGNVECDp4wViI75Mq_NhIRBNJMzCT7mnQ",
            name: "₹19,999",
        },
        {
            id: 2,
            img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQqsU5Z-qelLwX4vNeCtaIanfVPc8fW3ZGoKpi-3K5oAItbUleG0Bt0AqSmm9oQ-DBda6f8K9P3qLEJ0TYqzr2p0wlnYl-",
            name: "₹39,999",
        },
        {
            id: 3,
            img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-p8Et2AFlwu7Y0ElcGCPjBZCY2Lyclo3I7BILVhUt95RTQvFbc3B58ktxI4SJdw9nOJKopqVNWYfjVFsq0o8LU7-4vORJ_AbmFa1nZzk",
            name: "₹53,999",
        },
    ],
    bed: [
        {
            id: 1,
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQKr0p6tFtPChj0EpFRfLu5r0PwkFTYzAZ0n8Jx7iK3Og2Mxs-CCs7lUOXntZR1aY-8EqyxtNaS0ZlqovUs5Om3yTFCnAgVLUk48BstDul",
            name: "₹49,999"
        },
        {
            id: 2,
            img: "https://m.media-amazon.com/images/I/91lO6tNaZ6L.jpg",
            name: "₹18,999"
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ79-TcI2khUcFpvtnTJHAhxJsH0Gr1Q75DE71Zs8YfgL9qYc3YeQFquURaDRReef70yv2X1Qe32I9wyCRLVepbJaLuKkYJnjMVcJlmF4I",
            name: "₹25,599"
        },
    ],
    table: [
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQve2WGwv1MiQrwrUmlghUnsJJ8yRp8VaxLlB5kf4uzF07D0sk0HO1v1k_yFmD4BzcFtUk0zv-5d9M-U9oLo3jSTNkzXVodn5gQ9CHAugA",
            name: "₹6,899"
        },
        {
            id: 2,
            img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQce02fL5wFa5m2frAGiS-U2pAtGdfC9ll1DzaSFMbkh9CN-yM5IAfIMfa7ech0WLieMS7FEj9vz-aiwlqXOigu6dsrGS-FqLu6fA28PDc",
            name: "₹6,899"
        },
    ],
    almirah: [
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfQCq4pjwPFCBPGbdM1bxc4Jzog38gaTwQ_ixd6nxZ07CcL1nTqPF84a9ul9iSAVktE_7AZPHHk3REHJUYyLFXbhkNxuP_dVakd28bIPNf",
            name: "₹22,499"
        },
        {
            id: 2,
            img: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/wardrobe-closet/q/e/s/no-40-106-4-particle-board-65-w-mlt-3nmf-brown-bluewud-180-brown-original-imahhmeffzsphayd.jpeg",
            name: "₹20,899"
        },
    ],
    chair: [
        {
            id: 1,
            img: "https://thesleepcompany.in/cdn/shop/files/XGEN_Pro_desktop_Grey_1_b64376f2-eef7-42db-ba96-a327f3a68cf0.webp?v=1774005527&width=1400",
            name: "₹20,899"
        },
        {
            id: 2,
            img: "https://drogo.in/cdn/shop/files/01_25df99de-f751-4d80-8890-7546144a5b2f.jpg?v=1767944176&width=700",
            name: "₹14,990"
        },
    ]
};

const Sofa = () => {

    const { type } = useParams(); // sofa, bed

    const products = data[type]; //Correct Product find kiya.

    if (!products) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
            <div className="p-0 m-2 ">
                <h2 className="lg:text-2xl text-lg mx-2 my-3">Latest Furniture at Best Price</h2>
                <div className="gap-5 mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {products.map((item) => (
                        <div className="bg-white p-3 rounded-md w-46 lg:w-48" key={item.id}>
                            <Link className='flex flex-col justify-between h-[100%]' to={`/furniture/${type}/${item.id}`}>
                                <img className='object-contain h-32 bg-slate-100 rounded' src={item.img}
                                    alt="Sofa" />
                                <h3 className='text-center font-sans font-semibold'>{item.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sofa