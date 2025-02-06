import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Button>Click me</Button>
          <h1>Hello</h1>
      </main>

    </div>
  );
}
