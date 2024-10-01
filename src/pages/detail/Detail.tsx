import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container">
      <div className="flex items-start justify-between">
        <img className="w-full h-96 object-contain" src={product?.images[0]} alt={product?.title} />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">{product?.title}</h2>
          <p className="text-gray-600 mt-2">{product?.description}</p>
          <span className="text-gray-900 font-bold text-lg block mt-4">${product?.price.toFixed(2)}</span>
          <button onClick={() => navigate(-1)} className="text-sm p-2 bg-black text-white rounded-md mt-5">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
