import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Home",
};

const delay = (ms:number) => new Promise((res) => setTimeout(res, ms));

export default async function Home() {
  await delay(2000);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Button>Click me</Button>
          <h1>Hello</h1>
      </main>

    </div>
  );
}
