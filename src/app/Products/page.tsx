import React from "react";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { StaticImageData } from 'next/image';
import Footer from "@/components/Footer";
import './Product.css';

// Images Import 
import Canon_IR_ADV_4225 from "@/assets/Canon IR ADV 4225.jpg";
import Canon_IR_ADV_4545 from "@/assets/Canon IR ADV 4545.jpg";
import Canon_IR_ADV_4235 from "@/assets/Canon IR ADV 4235-45-51.jpg";
import Xerox_7830 from "@/assets/Xerox W.c 7830-35.jpg";
import Xerox_7845 from "@/assets/Xerox W.c 7845-55.jpg";
import Xerox_5955 from "@/assets/Xerox W.c 5955.jpg";
import Xerox_60_70 from "@/assets/Xerox C 60-70.jpg";
import Xerox_5855 from "@/assets/Xerox W.c 5855.jpg";
import Xerox_altalink_b8055 from "@/assets/Xerox altalink b8055.jpg";
import Xerox_5875 from "@/assets/Xerox W.c 5875.jpg";
import Kyocera_3212i from "@/assets/Kyocera 3212i.jpg";
import Kyocera_2040 from "@/assets/Kyocera 2040.jpg";
import Kyocera_4125 from "@/assets/Kyocera 4125.jpg";

interface ProductType {
  manufacture: string;
  Poster: StaticImageData | string;
  Title: string;
  brand: string;
  Description: string;
  Price: string;
}


const product01: ProductType = {manufacture: "2012", Poster: Canon_IR_ADV_4225, Title: "IR ADV 4225", brand: "Canon", Description: "A Xerox machine, also known as a photocopier or copier, is a multifunctional office device designed to efficiently reproduce documents, images, and materials. Using xerography technology, it creates copies by generating an electrostatic image of the document on a light-sensitive photoreceptor drum and transferring toner onto paper. Modern Xerox machines often include scanning capabilities, enabling digitization of documents, various file format options, and even printing features for direct output from digital files or scanned copies. They come with a range of features such as automatic document feeding, duplex printing, network connectivity for remote access, and security measures like user authentication and encrypted printing. These machines vary in speed, paper handling capacities, and user interfaces, catering to diverse needs in offices, educational institutions, commercial printing environments, and home offices. Overall, Xerox machines offer efficiency, cost-effectiveness, versatility, and high-quality results, making them indispensable tools for document management across different sectors.", Price: "105000" }
const product02: ProductType = {manufacture: "2013", Poster: Canon_IR_ADV_4545, Title: "IR ADV 4545", brand: "Canon", Description: "Brilliant Product\nawesome\namazing", Price: "353463" }
const product03: ProductType = {manufacture: "2014", Poster: Canon_IR_ADV_4235, Title: "IR ADV 4235/45/51", brand: "Canon", Description: "Brilliant Product", Price: "235235" }
const product04: ProductType = {manufacture: "2008", Poster: Xerox_7830, Title: "W.c 7830/35", brand: "Xerox", Description: "Brilliant Product", Price: "23523" }
const product05: ProductType = {manufacture: "2009", Poster: Xerox_7845, Title: "W.c 7845/55", brand: "Xerox", Description: "Brilliant Product", Price: "78959" }
const product06: ProductType = {manufacture: "2010", Poster: Xerox_5955, Title: "W.C 5955", brand: "Xerox", Description: "Brilliant Product", Price: "907897" }
const product07: ProductType = {manufacture: "2011", Poster: Xerox_60_70, Title: "C 60/70", brand: "Xerox", Description: "Brilliant Product", Price: "87878" }
const product08: ProductType = {manufacture: "2005", Poster: Xerox_5855, Title: "W.c 5855", brand: "Xerox", Description: "Brilliant Product", Price: "86786" }
const product09: ProductType = {manufacture: "2006", Poster: Xerox_altalink_b8055, Title: "Altalink B8055", brand: "Xerox", Description: "Brilliant Product", Price: "96796" }
const product10: ProductType = {manufacture: "2007", Poster: Xerox_5875, Title: "W.c 5875", brand: "Xerox", Description: "Brilliant Product", Price: "160678" }
const product11: ProductType = {manufacture: "2015", Poster: Kyocera_3212i, Title: "3212i", brand: "Kyocera", Description: "Brilliant Product", Price: "56858" }
const product12: ProductType = {manufacture: "2016", Poster: Kyocera_2040, Title: "2040", brand: "Kyocera", Description: "Brilliant Product", Price: "85685" }
const product13: ProductType = {manufacture: "2017", Poster: Kyocera_4125, Title: "4125", brand: "Kyocera", Description: "Brilliant Product", Price: "96856" }


function Products() {
  return (
    <>
      <Navbar />
      <div className="app">
        <h1>All Products</h1>
        <div className="container">
          <Product product={product01} />
          <Product product={product02} />
          <Product product={product03} />
          <Product product={product04} />
          <Product product={product05} />
          <Product product={product06} />
          <Product product={product07} />
          <Product product={product08} />
          <Product product={product09} />
          <Product product={product10} />
          <Product product={product11} />
          <Product product={product12} />
          <Product product={product13} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
