import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

export default function CategoryChips({ activeCategory, onSelectCategory }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -260 : 260;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(checkScroll, 300);
  };

  return (
    <div className="sticky top-14 z-30 bg-[#0f0f0f] py-3 px-4 border-b border-[#272727]/40 flex items-center relative">
      {/* Left Scroll Chevron with fade gradient */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/90 to-transparent pr-8 z-10">
          <button
            onClick={() => handleScroll('left')}
            className="w-8 h-8 rounded-full bg-[#0f0f0f] hover:bg-[#272727] active:bg-[#3f3f3f] border border-[#272727] flex items-center justify-center text-[#f1f1f1] transition-colors shadow-lg"
            title="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Chips Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full"
      >
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap yt-transition flex-shrink-0 ${
                isActive
                  ? 'bg-[#f1f1f1] text-[#0f0f0f]'
                  : 'bg-[#272727] text-[#f1f1f1] hover:bg-[#383838] active:bg-[#4a4a4a]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Right Scroll Chevron with fade gradient */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/90 to-transparent pl-8 z-10">
          <button
            onClick={() => handleScroll('right')}
            className="w-8 h-8 rounded-full bg-[#0f0f0f] hover:bg-[#272727] active:bg-[#3f3f3f] border border-[#272727] flex items-center justify-center text-[#f1f1f1] transition-colors shadow-lg"
            title="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

