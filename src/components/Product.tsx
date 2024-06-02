import Image,{ StaticImageData } from "next/image";
import React from "react";

// Define the type for the product prop
interface Product {
  manufacture: string;
  Poster: StaticImageData | string;
  Title: string;
  brand: string;
}

interface ProductProps {
  product: Product;
}

const Product = ({ product: { manufacture, Poster, Title, brand } }: ProductProps) => {
  return (
    <div className="product">
      <div>
        <p>Manufacture: {manufacture}</p>
      </div>

      <div>
        <Image
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
          width={400} // Provide a width
          height={400} // Provide a height
        />
      </div>

      <div>
        <span>{brand}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default Product;
