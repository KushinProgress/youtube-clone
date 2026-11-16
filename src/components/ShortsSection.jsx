import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { YouTubeShortsLogo } from './Icons';
import { MOCK_SHORTS } from '../data/mockData';

export default function ShortsSection({ onSelectShort }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === 'left' ? -380 : 380;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  if (isDismissed) return null;

  return (
    <section className="my-8 py-5 border-y border-[#272727] select-none relative group">
      {/* Shorts Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2.5">
          <YouTubeShortsLogo className="w-6 h-6" />
          <h2 className="text-xl font-bold tracking-tight text-white font-['YouTube_Sans',_-apple-system,_sans-serif]">
            Shorts
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {/* Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-1.5 rounded-full border border-[#333333] transition-colors ${
                canScrollLeft
                  ? 'bg-[#222222] hover:bg-[#333333] text-white cursor-pointer'
                  : 'bg-transparent text-[#555555] cursor-not-allowed opacity-40'
              }`}
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-1.5 rounded-full border border-[#333333] transition-colors ${
                canScrollRight
                  ? 'bg-[#222222] hover:bg-[#333333] text-white cursor-pointer'
                  : 'bg-transparent text-[#555555] cursor-not-allowed opacity-40'
              }`}
              title="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setIsDismissed(true)}
            title="Hide Shorts shelf"
            className="p-1.5 hover:bg-[#272727] rounded-full text-[#aaaaaa] hover:text-white transition-colors ml-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Shorts Carousel / Feed */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex items-start gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2"
      >
        {MOCK_SHORTS.map((short) => (
          <div
            key={short.id}
            onClick={() => onSelectShort(short)}
            className="group/card cursor-pointer flex flex-col relative flex-shrink-0 w-[180px] sm:w-[210px] md:w-[230px] snap-start"
          >
            {/* Vertical 9:16 Thumbnail */}
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#202020] mb-2.5 shadow-md border border-[#272727]/60">
              <img
                src={short.thumbnail}
                alt={short.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
              />

              {/* Gradient Overlay for bottom channel tag */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Channel badge on thumbnail */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 pointer-events-none">
                <img
                  src={short.avatar}
                  alt={short.channel}
                  className="w-4 h-4 rounded-full object-cover ring-1 ring-white/30"
                />
                <span className="text-[11px] font-medium text-white/90 truncate drop-shadow">
                  {short.channel}
                </span>
              </div>

              {/* Three dots overlay button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Short options for: "${short.title}"`);
                }}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover/card:opacity-100 transition-opacity"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Stats */}
            <div className="px-1">
              <h3 className="text-sm font-semibold text-[#f1f1f1] group-hover/card:text-white line-clamp-2 leading-snug mb-1">
                {short.title}
              </h3>
              <p className="text-xs text-[#aaaaaa] font-medium">
                {short.views}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
