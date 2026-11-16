import React, { useState } from 'react';
import {
  X,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share2,
  MoreVertical,
  Music2,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { MOCK_SHORTS } from '../data/mockData';

export default function ShortsModal({ short, onClose, onSelectShort }) {
  const [likesCount, setLikesCount] = useState(1200000);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!short) return null;

  const currentIndex = MOCK_SHORTS.findIndex(s => s.id === short.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % MOCK_SHORTS.length;
    onSelectShort(MOCK_SHORTS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + MOCK_SHORTS.length) % MOCK_SHORTS.length;
    onSelectShort(MOCK_SHORTS[prevIdx]);
  };

  const toggleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
      setLikesCount(c => c - 1);
    } else {
      setHasLiked(true);
      if (hasDisliked) setHasDisliked(false);
      setLikesCount(c => c + 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none animate-in fade-in duration-150">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 p-2 rounded-full bg-[#272727]/80 hover:bg-[#383838] text-white z-50 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="flex items-center gap-4 max-h-[92vh]">
        {/* Vertical Player Card */}
        <div className="relative aspect-[9/16] h-[85vh] max-w-[450px] rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#333333]">
          {/* Background image or mock video */}
          <img
            src={short.thumbnail}
            alt={short.title}
            className="w-full h-full object-cover"
          />

          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          {/* Bottom Channel Info & Title */}
          <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2.5">
            {/* Channel Row */}
            <div className="flex items-center gap-2.5">
              <img
                src={short.avatar}
                alt={short.channel}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20"
              />
              <span className="font-semibold text-sm text-white drop-shadow">
                @{short.channel.replace(/\s+/g, '').toLowerCase()}
              </span>
              <button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`px-3 py-1 rounded-full text-xs font-semibold shadow transition-colors ${
                  isSubscribed
                    ? 'bg-[#333333] text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            {/* Short Title */}
            <p className="text-sm font-medium text-white line-clamp-2 drop-shadow leading-snug">
              {short.title}
            </p>

            {/* Sound Audio Tag */}
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Music2 className="w-3.5 h-3.5 animate-spin" />
              <span className="truncate">Original audio — {short.channel}</span>
            </div>
          </div>
        </div>

        {/* Right Vertical Action Bar */}
        <div className="flex flex-col items-center gap-4 text-white">
          {/* Like */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={toggleLike}
              className={`p-3 rounded-full transition-colors ${
                hasLiked ? 'bg-[#ff0000] text-white' : 'bg-[#272727] hover:bg-[#383838]'
              }`}
            >
              <ThumbsUp className="w-6 h-6" />
            </button>
            <span className="text-xs font-medium">{short.likes}</span>
          </div>

          {/* Dislike */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => {
                setHasDisliked(!hasDisliked);
                if (hasLiked) setHasLiked(false);
              }}
              className={`p-3 rounded-full transition-colors ${
                hasDisliked ? 'bg-[#ff0000] text-white' : 'bg-[#272727] hover:bg-[#383838]'
              }`}
            >
              <ThumbsDown className="w-6 h-6" />
            </button>
            <span className="text-xs font-medium">Dislike</span>
          </div>

          {/* Comments */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => alert(`Comments for: ${short.title}`)}
              className="p-3 bg-[#272727] hover:bg-[#383838] rounded-full transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
            </button>
            <span className="text-xs font-medium">{short.comments}</span>
          </div>

          {/* Share */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => alert("Link copied to clipboard")}
              className="p-3 bg-[#272727] hover:bg-[#383838] rounded-full transition-colors"
            >
              <Share2 className="w-6 h-6" />
            </button>
            <span className="text-xs font-medium">Share</span>
          </div>

          {/* 3-dots */}
          <button
            onClick={() => alert("More options")}
            className="p-3 bg-[#272727] hover:bg-[#383838] rounded-full transition-colors"
          >
            <MoreVertical className="w-6 h-6" />
          </button>

          {/* Navigation Up / Down */}
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={handlePrev}
              title="Previous Short"
              className="p-2.5 bg-[#272727] hover:bg-[#383838] rounded-full text-white transition-colors"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              title="Next Short"
              className="p-2.5 bg-[#272727] hover:bg-[#383838] rounded-full text-white transition-colors"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

