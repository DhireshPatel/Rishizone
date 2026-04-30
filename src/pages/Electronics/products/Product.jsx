import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const data = {
    tv: [
        {
            id: 1,
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ84xOhCaVz2kvvr1sJF-LlhTwASnlcXxfyGtUGPEpFockrINibg4i8L0b7owsUlI6Nvwwz58-1egv1LZtSK5vTT5o6m1sNggCLPEt9pUkIOv2uRC-sUEEZ",
            name: "₹5,499",
        },
        {
            id: 2,
            img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQy3vYLeT4IHGP8_OzxywFkfTT0g5B96yaV104uu71EUutN5AxE2baZ-JQzpvCSb5ttC1DHJ1YU4hDvsVYcNhg0TcHCJewxonBjt079d7uzSpqzIz9-_W-I1g",
            name: "₹9,999",
        },
        {
            id: 3,
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRD1POGXxDHdq47TyQGXfRanOYYnVKcj_eKCNAUl467vO4izNk1AKsx6lEAQ9lYJ_T8gbfD4t98S_kqNYr2YgPBwTXXAIf2K7gEknHhWkbdEqGcicN7Nv4Cjk",
            name: "₹54,999",
        },
    ],
    washingmachine: [
        {
            id: 1,
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ47LeKimvNZXm4fUvcRNq5liv3mjdIMn3BnX0OxxTh4jBgEjqS3c4efmIN8jPIjClEsZ4XuWLihX2VK8JwQooxzWdc6ALP",
            name: "₹17,490"
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2PJeEE9IAZwacVTZN5JNS8Q50M70k8kBBZ2dRXdwJI57R1P6uMajUAOWa8-QEXi4CAxqsfXdjSoz_CRAahYGLt4fT2a8ubYtVWmNJ29jA9QLL-GmWF2ps9PM",
            name: "₹11,599"
        },
    ],
    cooler: [
        {
            id: 1,
            img: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/air-cooler/y/3/z/400-400-rambo-100-novamax-original-imahm33gvctgns8u.jpeg?q=70",
            name: "₹13,599"
        },
        {
            id: 2,
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSmTeCKmcGsMjCR9ryfBdJkw69ZjdrSVCmkLejFur91P-_e9XlZa8u5y9Ys5DzvjKOsqCmlHAHldVkDrXHSJOuhNy-AqP-HuzL7W5iJW9f-EEqBgXKRbvj2KA",
            name: "₹6,899"
        },
    ],
    ac: [
        {
            id: 1,
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQF64gsan1Kjpa7hBLRUZlmVCHCDkhIuaC-QjkILIX3mDnCOexmH14cVYrVfYhfhyHCNMMwm6N-dc7YeXLF10ZjcUIi9MZDV83iQp1D75YpfCMI9ePqEQdtKg",
            name: "₹58,990"
        },
        {
            id: 2,
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuuMdt-Wllo68YmntdpHBWRNsL7pwgS0YsTGBOfnFJ4OlwE1iSH9gbWK1tY5d30b7fWrEFPHxiADZvL4F4mCD938jJ1ttig9huX747iP0",
            name: "₹40,490"
        },
    ],
    refrigerator: [
        {
            id: 1,
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQD0DD-gZaD_Ykve2rPscGPLNSUkDtKWZk6ZhC5ZitKx1jc0j6MrJfB0IF8dvmTTw4YBmC6wlPjZNT-Fwc-GMoRO-sZW21AizW15ZNsspRuXW9GvSAan7gS5Q",
            name: "₹46,990"
        },
        {
            id: 2,
            img: "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/i/a/r/-original-imagyzrfcu7t3xjg.jpeg?q=90",
            name: "₹24,990"
        },
    ]
};

const Product = () => {

    const { type } = useParams();

    const products = data[type]; //Correct Product find kiya.

    if (!products) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
            <div className="p-0 m-2 ">
                <h2 className="lg:text-2xl text-lg mx-2 my-3">Latest Electronics at Best Price</h2>
                <div className="gap-5 mx-3  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {products.map((item) => (
                        <div className="bg-white p-3 rounded-md w-46 lg:w-48" key={item.id}>
                            <Link className='flex flex-col justify-between h-[100%]' to={`/electronics/${type}/${item.id}`}>
                                <img className='object-contain h-32' src={item.img}
                                    alt="Product" />
                                <h3 className='text-center font-sans font-semibold'>{item.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product