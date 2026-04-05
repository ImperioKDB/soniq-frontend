import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* CSS Neon Radial Glow (0kb asset) */}
      <div className="absolute -z-10 w-[300px] h-[300px] bg-neon-cyan/20 rounded-full blur-[100px] top-10" />
      <div className="absolute -z-10 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[130px] bottom-0" />

      <div className="inline-flex items-center gap-2 bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800 mb-6">
        <Sparkles className="w-4 h-4 text-neon-cyan" />
        <span className="text-sm font-medium text-slate-300">The Ultimate Student Upgrade</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-center max-w-4xl">
        Stop Studying. <span className="text-neon-cyan">Start Uploading.</span>
      </h1>
      
      <p className="mt-6 text-lg text-slate-400 text-center max-w-2xl">
        Optilearn turns your messy lecture notes into a private audio-learning empire. Quizzes, Flashcards, and Audiobooks generated in seconds.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 bg-neon-cyan text-neon-dark font-bold rounded-lg shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
          Get Started Free <ArrowRight className="w-4 h-4" />
        </button>
        <button className="px-6 py-3 bg-transparent border border-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors">
          Browse Free Databases
        </button>
      </div>
    </section>
  );
}
