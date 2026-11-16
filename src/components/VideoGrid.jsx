import React from 'react';
import VideoCard from './VideoCard';
import ShortsSection from './ShortsSection';
import { SearchX, RotateCcw } from 'lucide-react';

export default function VideoGrid({
  videos,
  onSelectVideo,
  onSelectShort,
  activeCategory,
  searchQuery,
  onResetFilters
}) {
  // Empty state if no videos match search or category
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#272727] flex items-center justify-center text-[#aaaaaa] mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">
          No matching videos found
        </h3>
        <p className="text-sm text-[#aaaaaa] max-w-sm mb-6">
          {searchQuery
            ? `We couldn't find any results for "${searchQuery}". Try different keywords or browse all categories.`
            : `There are currently no videos listed under "${activeCategory}".`}
        </p>
        <button
          onClick={onResetFilters}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#f1f1f1] hover:bg-white text-[#0f0f0f] rounded-full text-sm font-semibold transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset to All</span>
        </button>
      </div>
    );
  }

  // Split videos to show first 6 (2 rows of 3 columns), then Shorts section, then remaining videos
  const firstBatch = videos.slice(0, 6);
  const remainingBatch = videos.slice(6);

  return (
    <div className="px-4 sm:px-6 py-6 max-w-[2200px] mx-auto">
      {/* First 3-Column Video Row(s) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8">
        {firstBatch.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onSelectVideo={onSelectVideo}
          />
        ))}
      </div>

      {/* Shorts Section (Horizontal shelf placed after initial video grid) */}
      {activeCategory === 'All' && !searchQuery && (
        <ShortsSection onSelectShort={onSelectShort} />
      )}

      {/* Remaining 3-Column Video Row(s) */}
      {remainingBatch.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8 mt-4">
          {remainingBatch.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelectVideo={onSelectVideo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

