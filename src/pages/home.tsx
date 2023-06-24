import { useCreateProductReviewMutation } from "generated/graphql";

const HomeContent = () => {
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
      <h2 className="mt-8">Test page</h2>
      <button onClick={addReview} type="button">
        Add review
      </button>
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
      <HomeContent />
    </div>
  );
}
