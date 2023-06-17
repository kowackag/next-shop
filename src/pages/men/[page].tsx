import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import React from "react";
import { Pagination } from "src/components/Pagination/Pagination";
import { Product } from "src/components/Product";
import { ApiDataType, InferGetStaticPathsType } from "src/constans/types";

const prodByPage = 9;

const Men = ({
  data,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  
  if (error) {
    return (
      <div className="flex-grow px-8 py-8 text-2xl text-red-800">
        <p>Some errors with fetching data....</p>
        {error && (
          <p className="text-sm italic py-2">{`Details: ${
            JSON.parse(error).message
          }`}</p>
        )}
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex-grow px-8 py-8 text-2xl text-zinc-700">
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-8 mx-2 flex">
      <div className="hidden lg:block w-1/4 text-4xl">Filters</div>
      <div className="grow">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center grow">
          {data.map((item) => (
            <li key={item.id} className="flex">
              <Product
                id={item.id.toString()}
                title={item.title}
                price={item.price}
                newPrice={item.newPrice}
                image={[{ src: item.image, alt: item.title }]}
                colors={item.colors}
                sizes={item.sizes || ["s"]}
              />
            </li>
          ))}
        </ul>
        <Pagination path="men" length={10} />
      </div>
    </div>
  );
};

export default Men;

export const getStaticPaths = async () => {
  const pages = Array.from({ length: 10 }, (_, i) => i + 1);
  return {
    paths: pages.map((item) => {
      return {
        params: {
          page: item.toString(),
        },
      };
    }),
    fallback: true,
    // fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.page) {
    return {
      props: {},
      notFound: true,
    };
  }
  const offset = (Number(params.page) - 1) * prodByPage;

  try {
    const res = await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=${prodByPage}&offset=${offset}`
    );
    const data: ApiDataType[] = await res.json();
    return {
      props: {
        page: params.page,
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify(error),
      },
    };
  }
};

// ------------------ 1st version without GraphQL--------------------

// import React from "react";
// import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
// import { ProductDetails } from "src/components/ProductDetails";
// import { ApiDataType, InferGetStaticPathsType } from "src/constans/types";
// import Head from "next/head";

// const ProductId = ({
//   data,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   if (!data) {
//     return <div>upsss</div>;
//   }
//   return (
//     <>
//       <Head>
//         <title>{data.title}</title>
//       </Head>
//       <ProductDetails
//         id={data.id}
//         colors={["red"]}
//         title={data.title}
//         description={data.description}
//         price={data.price.toString()}
//         sizes={["xs", "40"]}
//         discount="-15%"
//         newPrice={99}
//         images={[{ src: data.image, alt: data.title }]}
//         longDescription={data.longDescription}
//       />
//     </>
//   );
// };

// export default ProductId;

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `https://naszsklep-api.vercel.app/api/products/?take=250&offset=0`
//   );
//   const data: ApiDataType[] = await res.json();
//   return {
//     paths: data.map((item) => {
//      return {
//         params: {
//           prodId: item.id,
//         },
//       };
//     }),
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async ({
//   params,
// }: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
//   if (!params?.prodId) {
//     return {
//       props: {},
//       notFound: true,
//     };
//   }
//   const res = await fetch(
//     `https://naszsklep-api.vercel.app/api/products/${params.prodId}`
//   );
//   const data: ApiDataType = await res.json();
//   return {
//     props: {
//       page: params.prodId,
//       data,
//     },
//     revalidate: 10,
//   };
// };