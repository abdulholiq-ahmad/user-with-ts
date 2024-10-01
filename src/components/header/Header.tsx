import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const headerLinks: string[] = ["Product", "Blog", "Contact"];

  const headerLink: JSX.Element[] = headerLinks?.map((item: string, inx: number) => (
    <li key={inx} className="text-base font-medium font-mono">
      {item}
    </li>
  ));
  return (
    <section className="bg-black w-full">
      <div className="container flex items-center py-3 bg-black text-white">
        <Link to={"/"} className="text-2xl font-mono font-extrabold">
          Logotip
        </Link>
        <ul className="flex gap-4 ml-auto ">{headerLink}</ul>
      </div>
    </section>
  );
};

export default Header;
