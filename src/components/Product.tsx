import { Color } from "./Color/Color";
import { Size } from "./Size/Size";
import { PriceBox } from "./PriceBox/PriceBox";
import { ImageBox } from "./ImageBox/ImageBox";

interface ProductProps {
  colors: string[];
  description: string;
  title: string;
  price: string;
  newPrice?: string;
  discount?: string;
}

export const Product = ({
  colors,
  title,
  description,
  price,
  newPrice,
  discount,
}: ProductProps) => {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 text-zinc-800">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <ImageBox />
          <div className="sticky top-0">
            <div className="max-w-[35ch] space-y-2 mt-8">
              <h1 className="text-4xl font-bold">{title}</h1>
            </div>

            <PriceBox price={price} discount={discount} newPrice={newPrice} />

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{description}</p>
              </div>
              <button className="mt-2 text-sm font-medium underline">
                Read More
              </button>
            </div>

            <form className="mt-8 mb-4 text-zinc-800">
              <fieldset>
                <legend className="mb-2 font-medium">Color</legend>
                <div className="flex flex-wrap gap-1">
                  {colors.map((item, ind) => (
                    <Color key={`${item}_${ind}`} colorName={item} id={ind} />
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-8 mb-4">
                <legend className="mb-2 font-medium ">Size</legend>
                <div className="flex flex-wrap gap-1">
                  <Size text="xs" />
                  <Size text="s" />
                  <Size text="m" />
                  <Size text="l" />
                  <Size text="xl" />
                </div>
              </fieldset>

              <div className="mt-8 flex gap-4">
                <div>
                  <label htmlFor="quantity" className="sr-only"></label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <button
                  type="submit"
                  className="block rounded bg-sky-700 px-5 py-3 text-sm font-medium text-white"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
