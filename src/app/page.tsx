"use client";
import { useStore } from "src/store";

export default function Home() {
  const { bears, increase } = useStore((state) => state);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="dody">hello world {bears}</div>

      <button type="button" onClick={() => increase(1)}>
        increase
      </button>
    </main>
  );
}
