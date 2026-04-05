'use client';
import { useState } from 'react';
import { Brain, Headphones, BookOpen, Check } from 'lucide-react';

export default function Demo() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left side: Copy & Feature bullets */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">How it feels to use Optilearn</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Headphones className="w-6 h-6 text-neon-cyan flex-shrink-0" />
              <p><span className="text-white font-medium">Turn notes to Audiobooks:</span> Listen to your study material while commuting or resting.</p>
            </div>
            <div className="flex gap-4">
              <Brain className="w-6 h-6 text-neon-cyan flex-shrink-0" />
              <p><span className="text-white font-medium">Auto-quizzing:</span> No need to write questions; the AI generates active recall tasks automatically.</p>
            </div>
          </div>
        </div>

        {/* Right side: Interactive Card */}
        <div className="flex justify-center">
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full max-w-[340px] h-48 cursor-pointer [perspective:1000px]"
          >
            <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
              
              {/* Front side */}
              <div className="glass absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-6 backface-hidden">
                <BookOpen className="w-6 h-6 text-slate-500 mb-3" />
                <p className="text-center text-white text-base">Tap to see what Optilearn extracted from your Physics PDF</p>
                <span className="text-xs text-neon-cyan mt-4">Tap to flip</span>
              </div>
              
              {/* Back side */}
              <div className="absolute inset-0 bg-neon-purple/20 border border-neon-purple/50 rounded-2xl flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] backface-hidden">
                <Check className="w-6 h-6 text-neon-cyan mb-3" />
                <p className="text-center text-white text-base">Flashcard created: "Acceleration is the rate of change of velocity."</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
            }
            
