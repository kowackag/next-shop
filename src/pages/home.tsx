import Image from "next/image";
import { Main } from "src/components/Main";

const DATA = {
  description:
    "Weve used Inter font family for all of the Tailwind UI examples because its a beautiful font for UI design and is completely open-source and  free. Using a custom font is nice because it allows us to make the  components look the same on all browsers and operating systems. You can  use any font you want in your own project of course, but if youd like to  use Inter, the easiest way is to first add it via the CDNWeve used Inter  font family for all of the Tailwind UI examples because its a beautiful  font for UI design and is completely open-source and free. Using a  custom font is nice because it allows us to make the components look the  same on all browsers and operating systems. You can use any font you  want in your own project of course, but if youd like to use Inter, the  easiest way is to first add it via the CDN",
  thumbnailUrl: "https://picsum.photos/id/1/600/300",
  thumbnailAlt: "netbook on desk",
  rating: 4.8,
};

interface ProductProps {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

const Product = ({ data }: ProductProps) => {
  return (
    <>
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        width={1000}
        height={1000}
        crossOrigin="anonymous"
      />
      <div>
        <p>{data.description}</p>
        <p className="weight-bold my-4 text-red-600">{data.rating}</p>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 ">
      <Main>
        <Product data={DATA} />
      </Main>
    </div>
  );
}
