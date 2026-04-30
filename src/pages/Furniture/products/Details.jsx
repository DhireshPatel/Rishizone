import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


const products = {
  sofa: [
    {
      id: 1,
      name: "Luxury Sofa",
      Highprice: "₹24,999",
      price: "₹19,999",
      desc: "Premium quality sofa with modern design. Very comfortable and durable.",
      images: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfjKNV2_Vvi98UDsTB8BKofnVOlADWw0BRq6sQjiC3R9aP1v7XX4oKWU5E7Pfksz0wjMrUMRaGNVECDp4wViI75Mq_NhIRBNJMzCT7mnQ",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpVd_Z7upiJUM9MqovMPLCvi3EQLrqcaypLng4owdjt0un48jxXpoPnnz-nnYGil9Tq8rB-ivYknu8xS7vhuc-6GT90jtzQcFLJQ_y9FN0",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1WDumcHWa754-01OVupHFIc9AP7P3PVXwy3p6EYJrcMhhReNglIBs54s6mZANAEiila9nEA65DKEba3GNEsCwjt7Ek0uOjaPs-ZpMcco-",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQk8pJ0nTAwPQh8pxXWDdfnl9FGfew6aYbFy1YTuuW0GjnQD7qq8ZLZ30_yZnXWlRf6lc-woWIYfku6J_-F-9ZWNgyeLoYuXg71KcoIkBQ",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzZIbbH20NwxyyTc8eF-fo7_u06-C5H3iHXQIxJdiudj6N1rjm4XejqPK_W3g6zNvXDMsFskQOnCUnrD_mBp3nEpZBsRouA7z-QEpMyh7u"
      ]
    },
    {
      id: 2,
      name: "Amora 3 Seater Fabric Sofa",
      Highprice: "₹49,999",
      price: "₹39,999",
      desc: "Premium quality sofa with modern design. Very comfortable and durable.",
      images: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQqsU5Z-qelLwX4vNeCtaIanfVPc8fW3ZGoKpi-3K5oAItbUleG0Bt0AqSmm9oQ-DBda6f8K9P3qLEJ0TYqzr2p0wlnYl-",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4cdmAXexF4OPiNt6Nq6kVCtefu_IjEdSZTDALfFQvl15ZV5OAxzObq_ijRIGfAWony74ty_g8gKazrSElCVTOSGC2EqsBYgPjs2OjV98",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7h1Ja5Bo858yFgzlIqyXH_sO1zpweqPifb7Uj6kuIJeL1ToScIJ4lA6vEMD0X0Hcd98wmz3lKREIs8m967EvjARknq1ZgX7CajEecdWOWimvSghojPxBQ5A",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuQXo_XoW_9gWYyQFn0c2AKOWxrKSjGJvbwyT1YUe5syqJDnUdV3rUtX3cDBz1zCL8KujjHJPQ0WbnzRvGpXHdxmicBGjOMe91cTgyLq-4ir-RsM1fghHBZw",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9uU6AGDaPRBEE0E2l8-z3G8hQoYpuhTsDoe6pkxrRzrMRRdjsNktT-Z4TnXAcwEgz1F6-4h3zaoL3ISvFsoh_GsIYSNVD2Idb7Vtw8u3-Fbxa9kc4u-K1ow"
      ]
    },
    {
      id: 3,
      name: "Mikhail White Boucle Fabric 3 Seater Sofa for Living Room",
      Highprice: "₹67,499",
      price: "₹53,999",
      desc: "Premium quality sofa with modern design. Very comfortable and durable.",
      images: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-p8Et2AFlwu7Y0ElcGCPjBZCY2Lyclo3I7BILVhUt95RTQvFbc3B58ktxI4SJdw9nOJKopqVNWYfjVFsq0o8LU7-4vORJ_AbmFa1nZzk",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHQfOgjWvyCg97RbeslKxhjZ76KWhvkw_I3-62k2gZWSYhOp8WD87hxJvDGzDBwI1gaJdCZGdgQkHbk_Vxjys8lMF5ppbOpfwDt6DGO7g",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRD1tPTC54IOZ5xxbM2jzRP7pE5leEz3vc3bv5-YjbMKvMHfOgl5znmdGsNY9jtEIeU4PGG8gZYP_wEsp0Q_jnkYVOgD_f4WoBUoa56Z_m5",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4ND9yTkHMzboBEe2psdoy0luF8Z3f27Rgm3vqCuxhOZbhuidE8rTIG4rhkov38U8veV03fnBBr_w0FEMT8XncZDwNbwLt5msWcddZptM",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzQUY6m0Dz4pjfek8ljKN8lDCJZjrJq2QmVgC_NsY781ZQWdue7EUXnl9ehTifAy5RL7T6B_vYyE9dbZimPLV4WHPoIPEv5KjtF1UFKk7V",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLtagn5CVZAnNESit1kOZ6H2JUvgGhjGukxx-pmqG6WEzrX3LIwDDJfVGSqBDgG4ZHK509jeg_dI_LBoUgjo7bHQOw5Q8h8cVssUoatGgw-DXNH8Eiiot5Qg"
      ]
    }
  ],
  bed: [
    {
      id: 1,
      name: "Modern Bedroom Bed",
      Highprice: "₹62,499",
      price: "₹49,999",
      desc: "Premium quality bed with a strong frame and modern design, offering maximum comfort, durability, and a stylish look for your bedroom.",
      images: [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQKr0p6tFtPChj0EpFRfLu5r0PwkFTYzAZ0n8Jx7iK3Og2Mxs-CCs7lUOXntZR1aY-8EqyxtNaS0ZlqovUs5Om3yTFCnAgVLUk48BstDul",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIcTiuFPfk8iwDWK-k1RyOewdbDccqq03bz_SBUvHxRNhmnoIFhzHUHZRF3PRIKE_M0oQAdBC_bgAQ-uEr43-6tG6uxbCoOkYH5s0c0pwlgkW1a7YKTe0E6GE",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKi8ksw-bctJevXYTFTTuSo8pPiJE3uVkNBPW7JsRuaQ_KJYfKOhn9nC8qUJmBv054tFoCSrILTF2sGA8azXyWur70tVT0JWUOLl7McCgbjTR1qM11YXq9jlA",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSL_Mn5t9xtAkBli6qs-DskKHBA0kVEiZpaJVruk1hJD-ftAHETvZDliXc-98OMByoghSgOIM_IhOEEUSJhh40v9p2FU4CHsX19DkQ6KcNbKfVIGDjO3jB3Yw",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkEtuq6G8Oho9xcBurLs_q38YGDgEdp7XK02Ewp54UKzUBHNPnW06y_yMUwKMjqWZ3M4WCZdUxfs9bzVS0zotMIdg_LA2p1Fp2KTJvpSWKAO3J91ZtHKwYorWS",
      ]
    },
    {
      id: 2,
      name: "Premium Comfort Bed",
      Highprice: "₹24,999",
      price: "₹18,999",
      desc: "Premium quality bed with a strong frame and modern design, offering maximum comfort, durability, and a stylish look for your bedroom.",
      images: [
        "https://m.media-amazon.com/images/I/91lO6tNaZ6L.jpg",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8pvgWUPZVFoJeYKZ98za4ycmoSkL0ZBOo2wSlZqdnh-Meu6bnpyjSPm6CyX3c4G9AllLadzCsGPdol_qTLlFe461DAxl_gzOVTXTXAp9sejcbUNaJDXpAJQ",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRG8e697GkNuAGVhPgBmCH7jY6n1B8TQjDOM46byzIco4KWj_VjRA3wKaj87ZZWsjHf77JDd56gH8Xv0x8n9874_Qo8V3S1eA",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyVWInhkUEJsGhEIvC9wAHyh4iiqIdrohGeKPcNar9GekKWZUR4QDzUiD9foOafXcvm6jr6MTD3yAoTSEefq8jhN5p74qzCKdoCZTqtga5ohzRMs5JujvPOSU",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTyZ6xEyupsW-ba2RwZdixOmTJGeNPxd9U0BbyGShcPvnZt8O6deaFNcdZ0Hs4vPbjSs_mzvDq57JaBvzcs4h9neWOUDsrJ-slRHpDpT6OnXnf63ma7W6XDTgA",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRK676Byvd28Yl0AXJ66XJEXIYHHj2ITHOpv8MSFFGloYQpuoXKkLrb9IFl1hMqXk-VShUBlNxZfyiZAaui3rlPSP6NUM9cVdfJMozequxIoiNtLZf6hUqsxA",
      ]
    },
    {
      id: 3,
      name: "Stylish Double Bed",
      Highprice: "₹23,749",
      price: "₹18,999",
      desc: "Premium quality bed with a strong frame and modern design, offering maximum comfort, durability, and a stylish look for your bedroom.",
      images: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ79-TcI2khUcFpvtnTJHAhxJsH0Gr1Q75DE71Zs8YfgL9qYc3YeQFquURaDRReef70yv2X1Qe32I9wyCRLVepbJaLuKkYJnjMVcJlmF4I",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyyvd3HR77l2bFaG7AcJweBnPJY0n1IJAYn75XZlMyQ63Uv3nzdh8QCv9A3VWCu_JSA8AM1rbSW-l--W1108vfSI3TkJQx8WeJhS8w76c",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDbtiG2v6pHDxSP5T2kqC0mmN-8aTjL8xH1Yn81CG08w6DtJeCwLQB7gGjZMKx1-xIb_ZXFPbpFNoKUQvjSgASFWxZvBSpow",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-IwOQR-PdAgGlT-3FSAbdMS0iFhxzO78ggn10iWVXqXA3VziJCOjfJXxTRqFKdAxJzQtGvvfEvUoE0H6rd-44uJacbPAo",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGPWTt-l8NXMpVhmMKLBm_FkvRl_5PEbrsY0uVIatcscCYHKHR06ub069MiAXr-uADwPEg1F-WRMl3LQG6Fevdvt6NHfI6_g",
      ]
    },
  ],
  table: [
    {
      id: 1,
      name: " Wood Study & Office Table",
      Highprice: "₹8,650",
      price: "₹6,899",
      desc: "A sturdy and spacious office table with a modern design, perfect for a productive and organized workspace.",
      images: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQve2WGwv1MiQrwrUmlghUnsJJ8yRp8VaxLlB5kf4uzF07D0sk0HO1v1k_yFmD4BzcFtUk0zv-5d9M-U9oLo3jSTNkzXVodn5gQ9CHAugA",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLskScqsh-u-A2m-4mxPfiyjc6P9pvfLG9fmp-HgOAIdcPyrnPXArYLLQ1g9YaGIi3ynnNxkp2tF7zu2jZxu7ArrRy3LWOAInraBMLOkXx0uGALySsezKp",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6nwl5ctzVie1IoPWY3e2XyzWVpK3JPKnXA30DeMxYZkizwJGUID-tt3P8F6Snbk8eIHiOIDHqctkIX8aHweCVnRsDHdGmU9acruxPLyQ1IBfo40u85s_s",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVFTgyOIk6KfJL6v5OTjcQsOhqe3JEMPcfvuWPrcWvjb0W9tRHuAPUJfkiIQeAhDph6yniR81FuNuLXruR9KnRRvkP8AZQmpN1Do0la02Jo6sWZj4uSBhQ",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4fdBfV4VLV7aZWyUUKDXwhzv8778x4DYuDvWDLsnQLoLiJMDjElsCR7cxqqtXUNlQs03BPAv8ToGpVXhxTJaUlkUH-7Jnvb8aPc6E1d99CiygDZe9KHdC",

      ]
    },
    {
      id: 2,
      name: " Wood Study & Office Table",
      Highprice: "₹8,650",
      price: "₹6,899",
      desc: "A sturdy and spacious office table with a modern design, perfect for a productive and organized workspace.",
      images: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQce02fL5wFa5m2frAGiS-U2pAtGdfC9ll1DzaSFMbkh9CN-yM5IAfIMfa7ech0WLieMS7FEj9vz-aiwlqXOigu6dsrGS-FqLu6fA28PDc",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcFmkYNvi-frIC3goPT9ESiivnTN5BansyFooTvEbXW3VyUZvjYWHkOEY7M4TcoWQni8v8_VlYn4AK-AwEIvMoyiR-U0YMD3aq4clnlhC7RSAM-6Hd2evtiQ",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmnFgxV3jYxDBll5lYybjqsulP7-WvbcR4gsSZHgepFt1p_O6m4-WYbkxzQmg32kOAfFxURN2D3VIEyG6sPGLAzc7S0y7gfk03MXXYD8GDdUcCdTo10KIOEJR6",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHuJiXCrxzR1rGOABN0xBNpavqVPZwakWgip5vg55JzDAYuFBwfnlpZ2n7CV8bPO8DJ_KK3Ys20elwCIZct-2INofIYlV0CcJQGTd41eQ",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGsIEntkL4xP_Bdobc658fObnUWdBojXnFwEyu1r_pUNs07jhscu7s-viE7I1fb8ljWLCPIPlUpwpguCbVIVJZ4c6KVm3xCYAnnNhnedsN",
      ]
    },
  ],
  almirah: [
    {
      id: 1,
      name: "  Wooden Almirah for Clothes",
      Highprice: "₹28,130",
      price: "₹22,499",
      desc: " Wooden Almirah for Clothes,Door for Bedroom, 4 Door Wardrobe with Drawer, Mirror & Hanging Space ",
      images: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfQCq4pjwPFCBPGbdM1bxc4Jzog38gaTwQ_ixd6nxZ07CcL1nTqPF84a9ul9iSAVktE_7AZPHHk3REHJUYyLFXbhkNxuP_dVakd28bIPNf",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0c4jsMI4RLkWT5teRDVC90NgyruYiEmclnvkqVVYNsMzohYVia4ot1GqoRn4vjAH-AABO086tkr5Z7CJSztylGGAvHhE9Og2bz4BzhS8",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4LcMi61gD5HYuTlSvvXUNMbmNaPfn9lz-lbQiqWVz-qb7AkRNcL1K5G-WeRczBcDkGdohHIXvSda9fzEBLTKDC0d14ZTHNnB7SwcPG2A",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAXNsrJzY2V_gbYTK44GYXQprOhK_h5hSyfBgseY0tVTlAVZt9E5sBoTgGovmEDO54iXqCPd5KxsVmy64UebaAwfca58AOsTujO8ivwlfS",
      ]
    },
    {
      id: 2,
      name: "  Wooden Almirah for Clothes",
      Highprice: "₹26,130",
      price: "₹20,899",
      desc: " Wooden Almirah for Clothes,Door for Bedroom, 4 Door Wardrobe with Drawer, Hanging Space ",
      images: [
        "https://rukminim2.flixcart.com/image/1500/1500/xif0q/wardrobe-closet/q/e/s/no-40-106-4-particle-board-65-w-mlt-3nmf-brown-bluewud-180-brown-original-imahhmeffzsphayd.jpeg",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWXaCa8Q-Q0V6z5pU_zrMUEcwTUiSkea_PjgkBSEIWBKBfCDg_asvS8cWCyvWn_-M5Tc8kgzyyUIBBthz0jsxboSeUSogKUDrLEku_BeQp",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQp4lh8bsq7hOlv0KhmCvnJf6pQxhedGa1kNa5XB4enqxbkBzkwKHy3VnBaaTBBiUbY9iIRYCMveryB-LDdTKGoYSxAgZTi",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLtrNT7S7NIlSdyz37vtEY83eqb-0hMZCZbf0qREdn1AUM2ae9o4J5JRyIWj__4L-jMYzAMgg2tGgf4UUeBhu7shRycLwvjlxDuaqCt0H42uwAMXiEUx5iUA",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRoQ7eEwQb7EAq9SNYP5ymAH68brw5jfHw4hocWYQkRVdqFPDh9XIChNPXIUCSEk08nna0ET8KWjxno00uKYmY4FFvBJJrPZZycEG6N_u3m77_iDQ4Q18-qJg",
      ]
    },
  ],
  chair: [
    {
      id: 1,
      name: "XGen Pro Gaming Chair",
      Highprice: "₹26,130",
      price: "₹20,899",
      desc: "XGen Pro Gaming Chair",
      images: [
        "https://thesleepcompany.in/cdn/shop/files/XGEN_Pro_desktop_Grey_1_b64376f2-eef7-42db-ba96-a327f3a68cf0.webp?v=1774005527&width=1400",
        "https://thesleepcompany.in/cdn/shop/files/XGEN_Pro_desktop_Grey_2_dfc64ae0-41b2-4977-9405-771e3c14fc84.webp?v=1774005527&width=1400",
        "https://thesleepcompany.in/cdn/shop/files/XGEN_Pro_desktop_Grey_3_9bd431ff-837f-497f-a561-d69ffd0802a6.webp?v=1774005527&width=1400",
        "https://thesleepcompany.in/cdn/shop/files/XGEN_Pro_desktop_Grey_4_f76b28e7-6b5e-4864-bb73-5cb8b321a4b7.webp?v=1774005527&width=1400",
        "https://thesleepcompany.in/cdn/shop/files/XGEN_Pro_desktop_Grey_5_09281bdf-0174-4625-823f-823b65c62891.webp?v=1774005527&width=1400",
        "https://thesleepcompany.in/cdn/shop/files/XGEN_Pro_desktop_Grey_6_ed1cc0a6-353f-45a3-a829-c42381bc2dcb.webp?v=1774005527&width=1400",
      ]
    },
    {
      id: 2,
      name: "Drogo Quantum Ergonomic Computer Office Chair",
      Highprice: "₹18,250",
      price: "₹14,590",
      desc: "Adjustable Computer Office Chair Reclining (90°-120°)",
      images: [
        "https://drogo.in/cdn/shop/files/01_25df99de-f751-4d80-8890-7546144a5b2f.jpg?v=1767944176&width=700",
        "https://drogo.in/cdn/shop/files/07_f38b277b-aa94-4fc1-9179-8a22bea3a589.jpg?v=1769680851&width=700",
        "https://drogo.in/cdn/shop/files/03_fa7b0bb9-3687-443c-a2af-91124e26bfb8.jpg?v=1769680851&width=700",
        "https://drogo.in/cdn/shop/files/08_58cceefc-3a2b-46df-bb39-30d4eceae7db.jpg?v=1769680852&width=700",
        "https://drogo.in/cdn/shop/files/06_41ffeb6b-e19b-4daa-aaa4-3c08d896ee95.jpg?v=1769680852&width=700",
        "https://drogo.in/cdn/shop/files/05_6c241b91-d7ca-40dc-9dc0-76b5b07d0b7d.jpg?v=1769680853&width=700",
        "https://drogo.in/cdn/shop/files/10_0b742301-b16d-42ba-bfdc-4fb816cd5600.jpg?v=1769680857&width=700"
      ]
    },
  ]
}

const Details = () => {


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
      <div className="lg:p-1 rounded-xl shadow-xl ">

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
      <div className="p-4 md:p-8 rounded-xl flex flex-col justify-start">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{product.name}</h1>

        <p className="text-gray-600 mt-4">
          {product.desc}
        </p>

        <h2 className="text-2xl text-green-600 mt-5 font-semibold flex gap-3">
          -20%
          <span className="text-slate-400 line-through">{product.Highprice} </span>
          <span>{product.price}</span>
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

                  const message = `Hi, I’m interested in this product. Please share more details:
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

export default Details;