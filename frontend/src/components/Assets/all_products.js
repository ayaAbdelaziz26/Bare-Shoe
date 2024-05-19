import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import p9 from "./p9.png";
import p10 from "./p10.png";
import p11 from "./p11.png";
import p12 from "./p12.png";
import p13 from "./p13.png";
import p14 from "./p14.png";
import p15 from "./p15.png";
import p16 from "./p16.png";
import p17 from "./p17.png";
import p18 from "./p18.png";
import p19 from "./p19.png";
import p20 from "./p20.png";
import p21 from "./p21.png";
import p22 from "./p22.png";
import p23 from "./p23.png";
import p24 from "./p24.png";
import p25 from "./p25.png";
import p26 from "./p26.png";
import p27 from "./p27.png";
import p28 from "./p28.png";
import p29 from "./p29.png";
import p30 from "./p30.png";
import p31 from "./p31.png";
import p32 from "./p32.png";


let all_product =[
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      brand: "khkjggmj",
      gender: "Women",
      category: "RUNNING",
      price: 160,
      oldPrice: 140,
      is_in_inventory: true,
      image: p1
    },
    {
      id: 2,
      name: "Nike React Miler",
      brand: "NIKE",
      gender: "Men",
      category: "RUNNING",
      price: 130,
      oldPrice: 120,
      is_in_inventory: true,
      image: p2
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      brand: "NIKE",
      gender: "Kids",
      category: "RUNNING",
      price: 120,
      oldPrice: 115,
      is_in_inventory: true,
      image: p3
    },
    {
      id:4,
      name: "Nike Joyride Run Flyknit",
      brand: "NIKE",
      gender: "Women",
      category: "RUNNING",
      price: 180,
      oldPrice: 165,
      is_in_inventory: true,
      image: p4
    },
    {
      id: 5,
      name: "Nike Mercurial Vapor 13 Elite FG",
      brand: "NIKE",
      gender: "Men",
      category: "FOOTBALL",
      price: 250,
      oldPrice: 210,
      is_in_inventory: true,
      image: p5
    },
    {
      id: 6,
      name: "Nike Phantom Vision Elite Dynamic Fit FG",
      brand: "NIKE",
      gender: "Kids",
      category: "FOOTBALL",
      price: 150,
      oldPrice: 140,
      is_in_inventory: true,
      image: p6
    },
    {
      id: 7,
      name: "Nike Phantom Venom Academy FG",
      brand: "NIKE",
      gender: "Women",
      category: "FOOTBALL",
      price: 80,
      oldPrice: 50,
      is_in_inventory: true,
      image: p7
    },
    {
      id: 8,
      name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
      brand: "NIKE",
      gender: "Men",
      category: "FOOTBALL",
      price: 145,
      oldPrice: 140,
      is_in_inventory: true,
      image: p8
    },
    {
      id: 9,
      name: "Nike Mercurial Superfly 7 Pro MDS FG",
      brand: "NIKE",
      gender: "Kids",
      category: "FOOTBALL",
      price: 137,
      oldPrice: 130,
      is_in_inventory: true,
      image: p9
    },
    {
      id: 10,
      name: "Nike Air Force 1",
      brand: "NIKE",
      gender: "Women",
      category: "CASUAL",
      price: 90,
      oldPrice: 70,
      is_in_inventory: true,
      image: p10
    },
    {
      id: 11,
      name: "Nike Air Max 90",
      brand: "NIKE",
      gender: "Kids",
      category: "CASUAL",
      price: 100,
      oldPrice: 90,
      is_in_inventory: true,
      image: p11
    },
    {
      id: 12,
      name: "Nike Air Max 90 LTR",
      brand: "NIKE",
      gender: "Women",
      category: "CASUAL",
      price: 150,
      oldPrice: 135,
      is_in_inventory: true,
      image:p12
    },
    {
      id: 13,
      name: "Nike Joyride Dual Run",
      brand: "NIKE",
      gender: "Men",
      category: "RUNNING",
      price: 110,
      oldPrice: 100,
      is_in_inventory: false,
      image: p13
    },
    {
      id: 14,
      name: "Nike Renew Run",
      brand: "NIKE",
      gender: "Kids",
      category: "RUNNING",
      price: 80,
      oldPrice: 65,
      is_in_inventory: true,
      image: p14
    },
    {
      id: 15,
      name: "Bridgport Advice",
      brand: "HUSHPUPPIES",
      gender: "Women",
      category: "FORMAL",
      price: 30,
      oldPrice: 25,
      is_in_inventory: true,
      image: p15
    },
    {
      id: 16,
      name: "Beck",
      brand: "HUSHPUPPIES",
      gender: "Men",
      category: "FORMAL",
      price: 80,
      oldPrice: 75,
      is_in_inventory: true,
      image: p16
    },
    {
      id: 17,
      name: "Fester",
      brand: "HUSHPUPPIES",
      gender: "Kids",
      category: "FORMAL",
      price: 70,
      oldPrice: 55,
      is_in_inventory: true,
      image: p17
    },
    {
      id: 18,
      name: "Pixel",
      brand: "HUSHPUPPIES",
      gender: "Women",
      category: "FORMAL",
      price: 75,
      oldPrice: 70,
      is_in_inventory: true,
      image: p18
    },
    {
      id: 19,
      name: "Austin",
      brand: "HUSHPUPPIES",
      gender: "Men",
      category: "FORMAL",
      price: 75,
      oldPrice: 70,
      is_in_inventory: true,
      image: p19
    },
    {
      id: 20,
      name: "SS-HL-0135",
      brand: "HUSHPUPPIES",
      gender: "Kids",
      category: "FORMAL",
      price: 30,
      is_in_inventory: true,
      image: p20
    },
    {
      id: 21,
      name: "SS-HL-0136",
      brand: "HUSHPUPPIES",
      gender: "Women",
      category: "FORMAL",
      price: 50,
      oldPrice: 40,
      is_in_inventory: true,
      image: p21
    },
    {
      id: 22,
      name: "SS-HL-0128",
      brand: "HUSHPUPPIES",
      gender: "Men",
      category: "FORMAL",
      price: 35,
      is_in_inventory: true,
      image: p22
    },
    {
      id: 23,
      name: "SS-MS-0075",
      brand: "HUSHPUPPIES",
      gender: "Kids",
      category: "CASUAL",
      price: 25,
      is_in_inventory: true,
      image: p23
    },
    {
      id: 24,
      name: "SS-PM-0093",
      brand: "HUSHPUPPIES",
      gender: "Women",
      category: "CASUAL",
      price: 30,
      is_in_inventory: true,
      image: p24
    },
    {
      id: 25,
      name: "Nizza X Disney",
      brand: "ADIDAS",
      gender: "Men",
      category: "CASUAL",
      price: 55,
      is_in_inventory: true,
      image: p25
    },
    {
      id: 26,
      name: "X_PLR",
      brand: "ADIDAS",
      gender: "Kids",
      category: "CASUAL",
      price: 65,
      is_in_inventory: true,
      image: p26
    },
    {
      id: 27,
      name: "Stan Smith",
      brand: "ADIDAS",
      gender: "Women",
      category: "CASUAL",
      price: 55,
      is_in_inventory: true,
      image: p27
    },
    {
      id: 28,
      name: "NMD_R1",
      brand: "ADIDAS",
      gender: "Men",
      category: "RUNNING",
      price: 120,
      oldPrice: 100,
      is_in_inventory: true,
      image: p28
    },
    {
      id: 29,
      name: "NMD_R1 Flash Red",
      brand: "ADIDAS",
      gender: "Kids",
      category: "CASUAL",
      price: 140,
      oldPrice: 135,
      is_in_inventory: true,
      image: p29
    },
    {
      id: 30,
      name: "Superstar",
      brand: "ADIDAS",
      gender: "Women",
      category: "CASUAL",
      price: 90,
      oldPrice: 85,
      is_in_inventory: true,
      image: p30
    },
    {
      id: 31,
      name: "Club C Revenge Mens",
      brand: "Reebok",
      gender: "Men",
      category: "CASUAL",
      price: 70,
      is_in_inventory: true,
      image: p31
    },
    {
      id: 32,
      name: "SK80-Low",
      brand: "Vans",
      gender: "Kids",
      category: "CASUAL",
      price: 60,
      oldPrice:"",
      is_in_inventory: true,
      image: p32
    }
  ]

export default all_product;