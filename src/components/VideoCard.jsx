import React, { useState, useRef, useEffect } from 'react';
import {
  MoreVertical,
  Clock,
  ListPlus,
  Share2,
  Ban,
  MinusCircle,
  Flag,
  ListVideo
} from 'lucide-react';
import { VerifiedCheckIcon } from './Icons';

export default function VideoCard({ video, onSelectVideo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuClick = (e, action) => {
    e.stopPropagation();
    alert(`Action: "${action}" for "${video.title}"`);
    setIsMenuOpen(false);
  };

  return (
    <div
      onClick={() => onSelectVideo(video)}
      className="group flex flex-col cursor-pointer select-none transition-transform duration-200"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#202020] mb-3">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Video Duration Badge */}
        <span className="absolute bottom-1.5 right-1.5 bg-black/85 text-white text-[11px] font-medium px-1.5 py-0.5 rounded tracking-wide">
          {video.duration}
        </span>

        {/* Watched Progress Bar */}
        {video.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#505050]">
            <div
              className="h-full bg-[#ff0000]"
              style={{ width: `${video.progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Video Info: Avatar & Text */}
      <div className="flex gap-3 items-start relative">
        {/* Channel Avatar */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            alert(`View channel: ${video.channel.name}`);
          }}
          className="flex-shrink-0 mt-0.5"
        >
          <img
            src={video.channel.avatar}
            alt={video.channel.name}
            className="w-9 h-9 rounded-full object-cover ring-1 ring-transparent hover:ring-white/40 transition-all"
          />
        </div>

        {/* Video Details */}
        <div className="flex-1 min-w-0 pr-6">
          <h3
            className="text-sm font-medium text-[#f1f1f1] group-hover:text-white line-clamp-2 leading-snug mb-1"
            title={video.title}
          >
            {video.title}
          </h3>

          {/* Channel Name with Verified Badge */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              alert(`View channel: ${video.channel.name}`);
            }}
            className="flex items-center gap-1 text-[13px] text-[#aaaaaa] hover:text-[#f1f1f1] transition-colors"
          >
            <span className="truncate">{video.channel.name}</span>
            {video.channel.verified && <VerifiedCheckIcon />}
          </div>

          {/* Views & Upload Date */}
          <div className="text-[12px] text-[#aaaaaa] flex items-center gap-1 mt-0.5">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.uploadedAt}</span>
          </div>
        </div>

        {/* Three-Dot Menu Button */}
        <div ref={menuRef} className="absolute right-0 top-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            title="More actions"
            className={`p-1.5 rounded-full hover:bg-[#272727] text-[#aaaaaa] hover:text-white transition-opacity ${
              isMenuOpen ? 'opacity-100 bg-[#272727]' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          {/* Three-Dot Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute right-0 top-8 w-56 bg-[#282828] border border-[#3f3f3f] rounded-xl shadow-2xl py-2 z-40 animate-in fade-in zoom-in-95 duration-100">
              <button
                onClick={(e) => handleMenuClick(e, 'Add to queue')}
                className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1]"
              >
                <ListPlus className="w-4 h-4 text-[#aaaaaa]" />
                <span>Add to queue</span>
              </button>
              <button
                onClick={(e) => handleMenuClick(e, 'Save to Watch later')}
                className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1]"
              >
                <Clock className="w-4 h-4 text-[#aaaaaa]" />
                <span>Save to Watch later</span>
              </button>
              <button
                onClick={(e) => handleMenuClick(e, 'Save to playlist')}
                className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1]"
              >
                <ListVideo className="w-4 h-4 text-[#aaaaaa]" />
                <span>Save to playlist</span>
              </button>
              <button
                onClick={(e) => handleMenuClick(e, 'Share')}
                className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1]"
              >
                <Share2 className="w-4 h-4 text-[#aaaaaa]" />
                <span>Share</span>
              </button>
              <div className="border-t border-[#3e3e3e] my-1" />
              <button
                onClick={(e) => handleMenuClick(e, 'Not interested')}
                className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1]"
              >
                <Ban className="w-4 h-4 text-[#aaaaaa]" />
                <span>Not interested</span>
              </button>
              <button
                onClick={(e) => handleMenuClick(e, "Don't recommend channel")}
                className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1]"
              >
                <MinusCircle className="w-4 h-4 text-[#aaaaaa]" />
                <span>Don't recommend channel</span>
              </button>
              <button
                onClick={(e) => handleMenuClick(e, 'Report')}
                className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1]"
              >
                <Flag className="w-4 h-4 text-[#aaaaaa]" />
                <span>Report</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

