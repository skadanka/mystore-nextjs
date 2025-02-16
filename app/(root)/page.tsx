import ProductList from "@/components/ui/shared/product/product-list";
// import sampleData from "@/public/assets/sample-data/db/sample-data";
import { getLatestProduct} from "@/lib/actions/product.action";
import { Product } from  "@/types/index";

export const metadata = {
  title: "Home",
};

// const delay = (ms:number) => new Promise((res) => setTimeout(res, ms));

export default async function Home() {
  // await delay(2000);
  // const updatedProducts = sampleData.products.map((product) => ({
  //   ...product,
  //   images: product.images.map((image) => `/assets/sample-data${image}`),
  //   banner: product.banner ? `/assets/sample-data/images/${product.banner}` : null,
  // }));

  const products: Product[] = await getLatestProduct();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ProductList data={products} title="Featured Products"/>
      </main>
    </div>
  );
}
