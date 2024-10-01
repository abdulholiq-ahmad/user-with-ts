import { FC } from "react";
import { Link } from "react-router-dom";

interface Product {
  images: string;
  title: string;
  price: number;
  description: string;
  id: number;
}

interface ProductProps {
  data: Product;
}

const ProductCard: FC<ProductProps> = ({ data }) => {
  return (
    <div className="product-card shadow-md rounded-md">
      <img src={data.images} alt={data.title} />
      <div className="p-4 flex flex-col gap-3">
        <Link to={`/product/${data.id}`} className="text-lg  font-semibold cursor-pointer line-clamp-1">
          {data.title}
        </Link>
        <p className="line-clamp-2 text-sm">{data.description}</p>
        <p className="text-lg">
          Price: <span className="font-bold">${data.price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
