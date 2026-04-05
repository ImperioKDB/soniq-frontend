import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Compare from "@/components/Compare";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6">
      <Hero />
      <Demo />
      <Compare />
      
      {/* Quick Footer */}
      <footer className="text-center py-10 text-slate-600 text-sm border-t border-slate-900">
        © {new Date().getFullYear()} Optilearn. Built for high-speed learning.
      </footer>
    </main>
  );
}
