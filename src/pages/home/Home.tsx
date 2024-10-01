import axios from "axios";
import { FC, useEffect, useState } from "react";
import ProductCard from "../../components/product/Product";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

const Home: FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        console.log(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container py-5">
      <div className="grid grid-cols-5 gap-4">
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
