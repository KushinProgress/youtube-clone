import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CategoryChips from './components/CategoryChips';
import VideoGrid from './components/VideoGrid';
import VideoModal from './components/VideoModal';
import ShortsModal from './components/ShortsModal';
import { MOCK_VIDEOS } from './data/mockData';

export default function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [activeSidebarItem, setActiveSidebarItem] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedShort, setSelectedShort] = useState(null);

  // Toggle sidebar on desktop or mobile
  const handleToggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen(prev => !prev);
    } else {
      setIsSidebarExpanded(prev => !prev);
    }
  };

  const handleResetToHome = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSubmittedSearch('');
    setActiveSidebarItem('home');
  };

  const handleSearchSubmit = (query) => {
    setSubmittedSearch(query);
  };

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    setSubmittedSearch('');
    setSearchQuery('');
  };

  const handleSidebarItemSelect = (id) => {
    setActiveSidebarItem(id);
    if (id === 'home') {
      handleResetToHome();
    } else if (id === 'shorts') {
      setActiveCategory('All');
      // Scroll to shorts
      const shortsEl = document.querySelector('section');
      if (shortsEl) {
        shortsEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id.startsWith('sub_')) {
      const subId = id.replace('sub_', '');
      alert(`Filtering videos for subscription channel`);
    } else {
      alert(`Navigating to "${id}" section`);
    }
    setIsMobileSidebarOpen(false);
  };

  // Filtered videos calculation
  const filteredVideos = useMemo(() => {
    return MOCK_VIDEOS.filter((video) => {
      // 1. Search filter
      const query = (submittedSearch || searchQuery).trim().toLowerCase();
      if (query) {
        const matchesTitle = video.title.toLowerCase().includes(query);
        const matchesChannel = video.channel.name.toLowerCase().includes(query);
        const matchesCategory = video.category.toLowerCase().includes(query);
        const matchesDesc = video.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesChannel && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      // 2. Category filter
      if (activeCategory !== 'All') {
        if (activeCategory === 'Live') {
          return video.category === 'Lofi Beats' || video.category === 'Music';
        }
        if (activeCategory === 'Mixes') {
          return video.category === 'Lofi Beats' || video.category === 'Music';
        }
        if (activeCategory === 'Recently uploaded') {
          return video.uploadedAt.includes('day') || video.uploadedAt.includes('hours');
        }
        return video.category.toLowerCase() === activeCategory.toLowerCase();
      }

      return true;
    });
  }, [submittedSearch, activeCategory]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] flex flex-col selection:bg-[#ff0000] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onToggleSidebar={handleToggleSidebar}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onResetToHome={handleResetToHome}
      />

      {/* Main Layout Body */}
      <div className="flex flex-1 overflow-x-hidden">
        {/* Left Sidebar */}
        <Sidebar
          isExpanded={isSidebarExpanded}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          activeItem={activeSidebarItem}
          onSelectItem={handleSidebarItemSelect}
        />

        {/* Content Area */}
        <main className="flex-1 min-w-0 flex flex-col bg-[#0f0f0f]">
          {/* Category Navigation Bar */}
          <CategoryChips
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* Main Video Feed (Responsive 3-Column Grid) & Shorts Shelf */}
          <div className="flex-1">
            <VideoGrid
              videos={filteredVideos}
              onSelectVideo={setSelectedVideo}
              onSelectShort={setSelectedShort}
              activeCategory={activeCategory}
              searchQuery={submittedSearch}
              onResetFilters={handleResetToHome}
            />
          </div>
        </main>
      </div>

      {/* Video Watch Overlay Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onSelectVideo={setSelectedVideo}
          allVideos={MOCK_VIDEOS}
        />
      )}

      {/* Shorts Player Modal */}
      {selectedShort && (
        <ShortsModal
          short={selectedShort}
          onClose={() => setSelectedShort(null)}
          onSelectShort={setSelectedShort}
        />
      )}
    </div>
  );
}
