import React, { useEffect, useState } from 'react';
import { Mic, X } from 'lucide-react';

export default function VoiceSearchModal({ isOpen, onClose, onSearch }) {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setPulse(p => !p);
    }, 800);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const suggestions = ["React 19 tutorial", "Lofi chill beats", "Quantum computing", "GTA 6 gameplay"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-[#212121] border border-[#3f3f3f] w-full max-w-lg rounded-3xl p-6 shadow-2xl relative flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#383838] text-[#aaaaaa] hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-normal text-[#f1f1f1] self-start mb-6">
          Search with your voice
        </h2>

        {/* Animated Microphone */}
        <div className="relative my-8 flex items-center justify-center">
          <div
            className={`absolute w-36 h-36 rounded-full bg-[#ff0000]/20 transition-all duration-700 ease-in-out ${
              pulse ? 'scale-125 opacity-70' : 'scale-100 opacity-30'
            }`}
          />
          <div
            className={`absolute w-28 h-28 rounded-full bg-[#ff0000]/30 transition-all duration-500 ease-in-out ${
              pulse ? 'scale-110 opacity-80' : 'scale-95 opacity-40'
            }`}
          />
          <div className="relative w-20 h-20 rounded-full bg-[#ff0000] flex items-center justify-center text-white shadow-lg cursor-pointer">
            <Mic className="w-10 h-10 animate-pulse" />
          </div>
        </div>

        <p className="text-lg font-medium text-[#f1f1f1] mb-2">Listening...</p>
        <p className="text-sm text-[#aaaaaa] text-center max-w-xs mb-6">
          To search by voice, speak now or click one of the quick suggestions below
        </p>

        {/* Quick test voice prompts */}
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestions.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                onSearch(s);
                onClose();
              }}
              className="px-3.5 py-1.5 bg-[#303030] hover:bg-[#3ea6ff]/20 hover:text-[#3ea6ff] hover:border-[#3ea6ff]/40 border border-[#444444] rounded-full text-xs text-[#cccccc] transition-colors"
            >
              "{s}"
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

