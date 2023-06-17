import Image from "next/image";
import { Main } from "src/components/Main";
import { gql, useQuery } from "@apollo/client";
import { apolloClient } from "src/graphql/apolloClient";
import {
  CreateProductReviewDocument,
  CreateProductReviewMutation,
  CreateProductReviewMutationVariables,
  useCreateProductReviewMutation,
} from "generated/graphql";
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

const Product = () => {
  // const { data: products } = useQuery(gql`
  //   query Assets {
  //     products {
  //       id
  //       description
  //       slug
  //       name
  //       price
  //       images {
  //         url
  //         width
  //         height
  //       }
  //     }
  //   }
  // `);
  // if (data) {
  //   console.log(products);
  // }
  const [createReview, { data, loading, error }] =
    useCreateProductReviewMutation();

  const addReview = () => {
    createReview({
      variables: {
        review: {
          email: "gosia_kow@gazeta.pl",
          headline: "first review",
          name: "first review",
          content: "I hope that it works",
        },
      },
    });
  };

  return (
    <>
      <button onClick={addReview} type="button">
        Add review
      </button>
      {/* <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        width={1000}
        height={1000}
        crossOrigin="anonymous"
      /> */}
      <div>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
        {loading && <pre>{JSON.stringify(loading, null, 2)}</pre>}
        {/* <p>{data.description}</p>
        <p className="weight-bold my-4 text-red-600">{data.rating}</p> */}
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 ">
      <Main>
        <Product />
      </Main>
    </div>
  );
}
