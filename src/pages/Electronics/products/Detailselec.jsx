import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";



const products = {
    tv: [
        {
            id: 1,
            name: "VW 24 Inch HD Ready LED TV",
            Highprice: "₹7,000",
            price: "₹5,499",
            desc: "VW 24 Inch HD Ready LED TV",
            images: [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJh46iwZAU_xVehA3GpFV84ovOTNHte-B2L31RQMg8WIjMKxqf969cb1ob_mWa5FUd8xUPm98DuZXiE1bd8MHk5Z9JCAP397mJOSyGrsAr",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVup6BBB2GK1QNzuXyjj5FqdZHRcw_pgxL44DC-KdbRj9Q_JWd78mOFkxaxxtMZgSrBD7LmtlJDt9L7G6B5y5V0AA3JkiigqzfJ5MYDvj3NWGAU5-g4hNv",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIWyefa7NdUFcZt6u-X2Ff-QP2KULWETrqbMNhkLbcs-szounfpykBnXO42yxyZuq98nF4AkkXBVzsOKI8FBAFONd9MOmzqUQ_Tc2QBJf_v3Hi8veb9QhU",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/television/w/0/e/-original-imahgs5xggzhdgvf.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/television/0/j/b/-original-imahgs5xucgemz5w.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/television/i/z/u/-original-imahgs5xrvdwum5k.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/television/q/3/n/-original-imahgs5xw34zpzt3.jpeg?q=90",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjtoCEcgOov0v7UGAruyHLfc0RubkrecGB72h9VbtHC-pPm163J0gcUlrjkH_Rv-4JO8LA2gXejzjFkjk7lLjy3iDLz2nirvIf845YY1rS-S0lPzVLRKXc",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTMWgkKOAv-4dnYu324ugzJXkNvCJUXLDfXhgrt_ftMAYJh_f9OotlZly49DSm6PKuddxh31ZYTKSV0-QkeqHV8w8NurDu-4SCkJz06tePCPxJCOfpBiW92lg",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCPzYm1V8fZAu4u2uP9XqpeSMaDOo5T--ttVhvrfx_EeOUavCBc0x0zs0pwsCjaYtj_fD9FbstcNQs7M-tCgiZyIC_Y4GrMVVEzFrNGSiarcPemsZgWHfucw",

            ]
        },
        {
            id: 2,
            name: "Panasonic HD LED Smart TV",
            Highprice: "₹11,899",
            price: "₹9,999",
            desc: "Panasonic HD LED Smart TV",
            images: [
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQy3vYLeT4IHGP8_OzxywFkfTT0g5B96yaV104uu71EUutN5AxE2baZ-JQzpvCSb5ttC1DHJ1YU4hDvsVYcNhg0TcHCJewxonBjt079d7uzSpqzIz9-_W-I1g",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnI245jbOw2M99nfLp29QcOfHZlAGkbqwH6JvFkLJuPSonF8-rvOFltiG6UtztKdXl10XaPmY_5MG2XwMDR1mCEBJT0VGP",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUpyKIq8eRQ4TD3dtVMKCLlEnyxwIi5SSOb-V7-9-rUt4LMjN5RKg2-8NAB_vhT8xd5M_65jmLcFvZArAIvB7RsFhCK5nsnd_YRv4iIFRzbjVSec906P7Ojg",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtzJrAYY_X1P5_5iDQrm6MSPeseqjPuFExUmDBhcK_qHXwSGXgpSCT-92fXuFot5yMk5mNDMfeZkIdXXSjvA4ivdpYHVuXUC9H30JKagOEkfY3Mg2yBckPvw",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScaD-j_hyh8AKDaNI8XyP82ruld0Qr2VMDKAbsi_gVdfrWDgkIRdPFwJIKUDN4UuUU7944_R95kYmJO9K7z74fqh-Matpa-w"
            ]
        },
        {
            id: 3,
            name: "Xiaomi X Pro QLED Series Smart TV 4K Ultra HD",
            Highprice: "₹60,990",
            price: "₹54,999",
            desc: "Xiaomi X Pro QLED Series Smart TV 4K Ultra HD",
            images: [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRD1POGXxDHdq47TyQGXfRanOYYnVKcj_eKCNAUl467vO4izNk1AKsx6lEAQ9lYJ_T8gbfD4t98S_kqNYr2YgPBwTXXAIf2K7gEknHhWkbdEqGcicN7Nv4Cjk",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQF8C6NUUYPccMtQOUyr9X7WC7sysCsRacZuLSWst7Rp0_MzJqu3EyIwWgGzH6SmEIn7HGtTyz_pnwj-uAtB1UVG5kXWIhw3c5H_KfmIm0VyNd2ygjLHPHLEqU",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1gOyGk_qRfO1TH9g-IWrFXbLP5k_EiEd_3yck_zIlDQODfOMkZVH1xv5gOYumWnQHHxpuI3Y78tVFm0WauEGD6ng_oDQGPKAntojFFZ4",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmARD1PeREcPEXdbUEZ0mt26eJABjwmBJI-Z5P-YqGMLFQQC65IdmT9F96-qcaVzAfzz21TE3TqvGi8rCghsF20Uwi45r-ZvB7uLayk7E",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxErynAXREES60vsXAXm6tIDs6yO4AQSQO-S8xNn8AKSMvqG4TG9WoqZevc7BHUlD0dDA2GoJBY1bCvEfuJj7-0wDAByYBmOypuwcsc7A",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZIkjsLBcMYGN4zewLs6pe5iCs0kYpA22YmQwBRT2JQQCBEiisZjtri1MBTjSqy0HxCv3kvbZ19iOjfpWt3alviddCFedhdoPvZtUSHjaz",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGPbgAmqsHPb5X956jyyqzqlIkzRj2s7J0DvLxoXZ29QZNDFPBnqhjahp9Kz3msJCF8itjI2wMpLVg3CGAhaE-pIkskWWm7NsJPTmjDNE7DrBldVf-Fc7g0w"
            ]
        }
    ],
    washingmachine: [
        {
            id: 1,
            name: "Bosch WAK24169IN 7 Kg",
            Highprice: "₹19,990",
            price: "17,490",
            desc: "Bosch WAK24169IN 7 Kg Fully Automatic Front Load Washing machine",
            images: [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ47LeKimvNZXm4fUvcRNq5liv3mjdIMn3BnX0OxxTh4jBgEjqS3c4efmIN8jPIjClEsZ4XuWLihX2VK8JwQooxzWdc6ALP",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7OpWUk5nD-ouWPJwvnAyNkoYe5NYI2gd2GQ-6iD7QyPytenns66x2UPlEwN3N76xe1_oVr2jQ6vho7qYna3QkJaU7UdN9no0mpgurm5oA",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSczt79RzQu_IeBeSSYEFEzXDwuFHXC-D-Fj211AGlFSmnkHzbHHkmBax9_IbK_fQESArAh4miycRK50S7z87Cp_GTL3EAkZYSP14j0B4U",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJLKtYuOKfk0tZM3Q3Th5OBw9iXv2-RG51RtNBNjsiXW7cti0_J8ov0r5t8HHJFkoVkXhRvlcr0a_EuXCBU6GYxtDMG9MydvgPSl9Q8gJvjY7zrQPbKBMaGg",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQk8sGBNyLxCV4EPaa75LQShwAKkX6R5PfUGvqiARu4wrR4zzTLuLay08B3HBTd9OemScOfCKsVYH3yJZFxdyOx8QSwNEs2EeubGubD29jqO2socaVcNDTS7Q",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkkrc2OW-PsoVkLC5ZE89Jc9dsdzQjSATTGid5MhJfoA_9p4-3laj4tOiH--GYIy0S-BeiYCT8ooUZCvaeF5SdDPq1lsCGOMqGLmD1jkKRprNxq7DcR3ke"
            ]
        },
        {
            id: 2,
            name: "Voltas Beko",
            Highprice: "₹13,699",
            price: "₹11,599",
            desc: "Voltas Beko 9 KG 5 Star Semi Automatic Washing Machine",
            images: [
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2PJeEE9IAZwacVTZN5JNS8Q50M70k8kBBZ2dRXdwJI57R1P6uMajUAOWa8-QEXi4CAxqsfXdjSoz_CRAahYGLt4fT2a8ubYtVWmNJ29jA9QLL-GmWF2ps9PM",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTyR1lfSsY4BoGCf6cs0AJjj0AQKkE0hUEumN_8FzxVVEVzRxpL5OxJTHdOPnBV4cUdHP9APnIP2dGLRYpUxltmfLkcGUOgNLQDebhBKfK0Tjjq7AitjGf4",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXBNNBYC6Pc9cl8lbVMC1op0kJscMMRwwBMUL4xHJi2rGwZLrUUPNKmIyiXpXgVX-1L1oxENqU_NJlnCjHOUwCSIzF9_4see3P17KjJqyPVXKSulIKWVexLmc",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcywtsqkgUXWR_tQeWGLfdrPiGn-_QbPKmr9xLHMA4YAvCzQH8s_SJD1awuqoI6eRRA46LZZBaA2SPtG9Gvw3BKuucmn2eUtB9b156wH8xO4B2oh1UF1OSsU0",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNtcuS6gBX_GX6IdybSYC2vRwL8kH9Hz482ecVSIBoDH5Yq_EOXoQ6BA-H8r0exmuwmMLwUfVfEhibyvSwlHMzIFQJwNykFQZkRV6uk4remRH7U_xzGO2S",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTa1-8TMDGUmRCLkPRors0PNTm0nVR93d5kDIMM1mUVg4Zv4AZoxzPEzVHEONBptdPsdibMiiPPcAgRGAmQjZmbg9p38UelOQ",
            ]
        },
    ],
    cooler: [
        {
            id: 1,
            name: "Novamax Rambo",
            Highprice: "₹15,690",
            price: "₹13,599",
            desc: "Novamax Rambo 100 L Commercial Air Cooler",
            images: [
                "https://rukmini1.flixcart.com/image/1500/1500/xif0q/air-cooler/y/3/z/400-400-rambo-100-novamax-original-imahm33gvctgns8u.jpeg?q=70",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTi2bXrNl7LDN3atbMXq3J6PGaVuuv106V5ZmrVXBt4keexI5fP--lFVj8JUAxKutYq8GvGnVWyxDTsuXMHc_7hIk9Bh4nNQAvKcB3LkUJt0OsgaQkgFqocyw",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGf1R9L08_-Lu0Nck56LgJ5qfkAkTdbIBnWxOBF_g6iwc4jS0JuVF9YhtYdHTAIYf0A8Xf2o28h1otmf3acLQctuYo_v3DJmkf8QazYkPZEPeifKpuRZ8VN8uD",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTdaWrZI57DzYKE_suc5i8ot_an-lumchaZbX9Vp7tmtDWa4UR0dlhE4rTZ_x2r4_9CLbJLubSMA47DT1grnIseK17HHyA_Sajbs2pJp_XV",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbtRQUs3UNZ7N5svIEgguO8Te6mru0vPQw-FfQ89hW4ZvYKGi9CoIy_1GDvfp6tr82g3SwHMPiw2BVpvFwaXq1IVHrnv8K08kP7h0SG5w",

            ]
        },
        {
            id: 2,
            name: "Maharaja Whiteline Rambo Desert Air Cooler",
            Highprice: "₹8,890",
            price: "₹6,899",
            desc: "Maharaja Whiteline Rambo Desert Air Cooler",
            images: [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSmTeCKmcGsMjCR9ryfBdJkw69ZjdrSVCmkLejFur91P-_e9XlZa8u5y9Ys5DzvjKOsqCmlHAHldVkDrXHSJOuhNy-AqP-HuzL7W5iJW9f-EEqBgXKRbvj2KA",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMCWWoBNtcd_I3aUOhbAwMVgoGoZJK9fb1cjK0FAQE8InOygeEF17mLUOXxrOrpqQIsL29NfEVD3aqGW3PQDZKY3dQg0S65A",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZGRHGUMCeitPNpM810rj6iz6ksM-XjH3oD587d27c6XEapQe6af8xd5sU6gmNUsx4PEkcp93gZsLF80RiX0gi-uV3U6MqOA",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIXD-YnZDiId7ifUFhf2UdPEw_SffQyt7XFzDs29lhnSENVxIk4xBC0tFy4BvVywSev82_Y0JWlNCwWm5J8HlTRgXqeOKk",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOAObfDJlPwuETWr84VbKukcxX1UkInjC05Al0OOnm_Dl8_-ODTOiHjJ4zmNk2hb8pxirfvBnJKqj2Z6Evbw1BtL1FFSXYyw",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWHxy2ZMESXkZ-nj1qEUCf62x8hSe6Rx9iwVf6rfYyGI2DCiHxoQRC5cRGFM5pNMG2lqNe9vMgiGsZyg-UJsn6LbJ7JFC2",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQFXiTRVWpwHsEvTL1sKYyGTh3nANKreYTOIC8tDUkzwcSdmAZtbKcGco_ugQhFmQqROften-XA1C4EA8ZoOG5GJO4RTzzXU_ihPyahmY"
            ]
        },
    ],
    ac: [
        {
            id: 1,
            name: "Blue Star 2 Ton 5 Star Split Inverter AC",
            Highprice: "₹63,490",
            price: "₹58,990",
            desc: "Blue Star 2 Ton 5 Star Split Inverter AC",
            images: [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQF64gsan1Kjpa7hBLRUZlmVCHCDkhIuaC-QjkILIX3mDnCOexmH14cVYrVfYhfhyHCNMMwm6N-dc7YeXLF10ZjcUIi9MZDV83iQp1D75YpfCMI9ePqEQdtKg",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0MWBYlV6ppM-Adpx0ivXZ2qezb_Lj7qVQz9uMmmTU7XW5ZAng_XJZzz6epC5k6Nj7gvb4ecGCTs7QiMqTmWr_TAWQtpmtKv74GJBmIlRo6jx2UA0lP4-5YQ",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhFCJ0CCBHYrsXeplCZ4oaHrq9Tm4XwLHuREVRjT-oqL890r50yBYX9VX7Wat9iSeendg-bdtjlKJeI3zygrONrLnDNBJKQhNoFJFGRqjs2a8EqIGUrQXd",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnYh_sb9QecmswloooectnmeLZPd3HyX135GMY9XJJax1Sc1Ag85UknAeWrLvUaq8xdVNL07QNRtOZb3UWw7nzL4lygxk9swrUtaFCEkmFYyrtrcnUyrMV",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTak6_1UDjF9ihUYUhWr3AolwfmBjTVeftqbFJIkcXD8won4--xO6NcR9Esi6r2MNu1sb6VKqcKBIU2gx7agz9ZtMOwEqriAags-DZ_Hznsonb6zVnpqXn_",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQRRIeGOd3lRAjwJHy0jANhc6h8rZLIkhs_g2F7i8QxmVGdTw-Y1RTp_BoPfcJSkliruIypnzMKwwAIQJLx-Jl3cz4ynr3kRpRL0tE3Ew"
            ]
        },
        {
            id: 2,
            name: "Samsung 1.5 Ton AC",
            Highprice: "₹46,700",
            price: "₹40,490",
            desc: "Samsung 1.5 Ton 5 Star Split Inverter AC",
            images: [
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTyklSlp9tjliPL-AKFV9gcJrmaLS1j5c2ejycCBAktNceboTMx-t3Aqxs6bhiIM11r1CLFCmRGPuS4lH5YRW7VlG658VOclmyTrlQd3VIR7CVEB9kAZndZQ",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSF_kGIr4eZ5wxPG50z-efckHeaTpvT16pdk00cCwpSdwdHjR-lmX-lYbdc7Hgatw1ItegDRWD5Y8V-XQX9VaYxzhGPzBpN0w",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKiOjWjyjJ5Qtwgdg6P3-u8h1yFaVXFvLrGQo_EEYpHLE3UQMGgVQ1Tn9z3MMvre2ISPom8z9Yt3Xn5ugikxdqFDxPuCQ3R3WE64ZEe4jrqVQVMqX1gbCCaw",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2PCfxKRNU2rj3AGsb4zFB6ZtZF8LftW8o8fjDaISN5VFUOIxu1kL-LxVPOj3DHhix7w98bq1uMN_o6IZPGOZqm9hvKKdXKsULN8bC3xKrwhCkhDt-Zkjj7bM",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTY0-zmn7EiX99TZC4YA2ABpjk7d188QZnmcOHsWmEyXPtwaADav3ee18yMcGZcT145puCZecooqYZN4QjdneThsEwYSVAqGiewrzlfWz0",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKt7W0HTdGRnfDqN_l_XCYjMGmjsSy1A2OUGatBEZENj_6lOMtTSrBqbucYYVApBkPWbLpRacRw0Xx_aacHMURFLUt4M9N_EcXLL494Ysy56aaHHJOMP4m",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQBGuUHcqBpxYyv0RqIL3wi6n0rIImWOfEUrxpx7iMGKkq_Yzty1yFttA6b50AXFOYAjl_0QfjJDC2DYW-IG1skX746vqQa6yUqltbTICqAwTW67xSN_xqg9Q",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAkOHkNjshAs7VH_hzZrog1l9z5dlBiXp6BCty8typV9AFY005_rbsk3HRP3mtYfCwjposGw4VI0IOksna8q625RtuwbyuJamvhgpntEXy",
            ]
        },
    ],
    refrigerator: [
        {
            id: 1,
            name: "Midea 560 L Side by Side Refrigerator",
            Highprice: "₹49,999",
            price: "₹46,990",
            desc: "Midea 560 L Side by Side Refrigerator",
            images: [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQD0DD-gZaD_Ykve2rPscGPLNSUkDtKWZk6ZhC5ZitKx1jc0j6MrJfB0IF8dvmTTw4YBmC6wlPjZNT-Fwc-GMoRO-sZW21AizW15ZNsspRuXW9GvSAan7gS5Q",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrTMuz3B68n3bQdrrAk_UBY3e9U94YHjsNiRFjeQ0rweetrFuL0XbTv3rl6ahb8ixS6o3wLCyTrZMYAmRBotPXi5RuyzkKszszkK8xS0MQXwqzzaLy8v62gA",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSW_KnGVjVWWrjS9JqrA5B3yDAILWP1-Hs9tDQKukvBbdWbmOOHX_WsXBFP8QsIQr4Swu7kRXfgbEa9-EwzfZkdlQQ_FBDEGeuB4a_dTe26S--JNbiSr5xm",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiM937ZPCOOQ_fItFRqDMf3AlSgw3JR7SbRli3WXs1TFik9JNnZfGEyt0UKvw5vmrElY-Vi7Ilp3yAqXGtH4pyVierKvD4VrzKdyHlKAJH",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSF2542NGfH8n8w-QbMvP5YdaNJfSX1jBG1nVoO77nVc2jFQdMzSOW3kTvd86jzwsGE18dXGkY12gIvHeEiduro0EPpNBZui07MvuMxgpTh",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWvrsmnLo9wnVCtEJ7idIY6UleYPIV0dq7KWkox8up1IQ7_7II5n4rFv590A_UlTFOxDmwRX2V_CpbbZl8jICbYpzxjnUn2OdAAajWYAlS",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2D3UQSFWNKkaoE34iU_JvgBmifWvCH9ahNIj2apX7tHTfQ1Aj9mUhDM_k-UjQfziU-r-x-LSEHjDiz69MrB_eTZNRwLajFDOFtNu14Z4neFqRpS0aibnHB5I"
            ]
        },
        {
            id: 2,
            name: "241L Frost free double door Refrigerator",
            Highprice: "₹27,000",
            price: "₹24,990",
            desc: "241 L Frost Free Double Door 3 Star Refrigerator  with Powered by E-Tech, 7 in 1 Multi Modes, 360 Degree Cooling, Active Deodorizer, Extraordinary Space, Advanced Inverter Compressor (Brush Grey, IFBFF-2913DBSE)",
            images: [
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/i/a/r/-original-imagyzrfcu7t3xjg.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/i/f/w/-original-imagyxqfrudjayhk.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/p/n/p/-original-imahcy9aura3juax.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/a/s/h/-original-imagyxqfmhh8xewe.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/k/1/l/-original-imahyx29k4v3w9ns.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/g/n/g/-original-imagyxqfzzqaygbz.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/v/c/z/-original-imahyx29kvdtuyjc.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/f/q/4/-original-imahcy9aywafphr8.jpeg?q=90",
                "https://rukminim2.flixcart.com/image/1366/1366/xif0q/refrigerator-new/y/9/w/-original-imahdf2adnugmcuy.jpeg?q=90",
            ]
        },
    ]
}

const Detailselec = () => {





    //SHOW Popup when clicked on more details. :-
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
        }, 300); // animation duration match karne ke liye.
    };







    const { type, id } = useParams();// URL se id leli.

    const categoryProducts = products[type];

    // const product = products.find((item) => item.id === Number(id)) //Correct Product find kiya.

    const product = categoryProducts?.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h1>Product not found</h1>;
    }

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const thumbRefs = useRef([]);

    useEffect(() => {
        if (thumbRefs.current[current]) {
            thumbRefs.current[current].scrollIntoView({
                behavior: "smooth",
                inline: "center", // center me laayega
                block: "nearest",
            });
        }
    }, [current]);

    const handleBuyNow = () => {
        const phoneNumber = "918209783021";

        const message = `Hello, I want to buy this product:
    Product Name: ${product.name}
    Price: ${product.price}
    Product Link: ${window.location.href}`;

        const encodedMessage = encodeURIComponent(message);

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    return (
        <div className="min-h-fit p-4 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT SIDE - IMAGE SLIDER */}
            <div className="lg:p-1 rounded-xl shadow-xl">

                {/* Main Image */}
                <div className="relative">
                    <img
                        src={product.images[current]}
                        className="w-full h-[350px] object-contain rounded-lg"
                        alt="sofa"
                    />

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 bg-black/50 text-white px-3 py-1 rounded"
                    >
                        ◀
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 bg-black/50 text-white px-3 py-1 rounded"
                    >
                        ▶
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 m-4 overflow-x-auto max-w-full whitespace-nowrap">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            ref={(el) => (thumbRefs.current[index] = el)}
                            src={img}
                            onClick={() => setCurrent(index)}
                            className={`inline-block w-14 h-14 object-cover rounded cursor-pointer flex-shrink-0 ${current === index ? "border-2 border-slate-800" : ""
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE - DETAILS */}
            <div className="p-4 md:p-8 rounded-xl  flex flex-col justify-start">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{product.name}</h1>

                <p className="text-gray-600 mt-4">
                    {product.desc}
                </p>

                <h2 className="text-2xl text-green-600 mt-5 font-semibold flex gap-3">
                    <span className="text-slate-400 line-through">{product.Highprice} </span>
                    {product.price}
                </h2>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                    <button onClick={openPopup} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">
                        More Details
                    </button>

                    <button onClick={handleBuyNow} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                        Buy Now
                    </button>

                </div>
                <p className="mt-8">🚚 Free Delivery | 🔁 7 Days Replacement  <br /> 🛡️ 6 Months Warranty | 💵COD Available</p>
            </div>





            {/* This is ShowPopup , This will show when clicked on More details button. */}
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
                            Chat with us for More details
                        </p>

                        <div className="flex justify-center gap-3">

                            <button
                                onClick={() => {
                                    const phoneNumber = "918209783021";

                                    const message = `Hello, I’d like to know more about this product:
    Product Name: ${product.name}
    Price: ${product.price}
    Product Link: ${window.location.href}`;

                                    const encodedMessage = encodeURIComponent(message);

                                    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                                    window.open(url, "_blank");
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
    );
};

export default Detailselec;