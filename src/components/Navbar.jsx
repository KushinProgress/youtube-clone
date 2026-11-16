import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  Search,
  Mic,
  Plus,
  Bell,
  X,
  History,
  TrendingUp,
  Video
} from 'lucide-react';
import { YouTubeLogo } from './Icons';
import CreateDropdown from './CreateDropdown';
import NotificationsDropdown from './NotificationsDropdown';
import AccountDropdown from './AccountDropdown';
import VoiceSearchModal from './VoiceSearchModal';
import { SEARCH_SUGGESTIONS } from '../data/mockData';

export default function Navbar({
  onToggleSidebar,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onResetToHome
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  const searchContainerRef = useRef(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    setIsSearchFocused(false);
    onSearchSubmit(searchQuery);
  };

  const handleSuggestionClick = (text) => {
    onSearchChange(text);
    setIsSearchFocused(false);
    onSearchSubmit(text);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0f0f0f] border-b border-[#272727] px-4 h-14 flex items-center justify-between select-none">
        {/* Left Section: Hamburger & YouTube Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            title="Guide"
            className="p-2 hover:bg-[#272727] active:bg-[#3f3f3f] rounded-full text-[#f1f1f1] transition-colors focus:outline-none"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div onClick={onResetToHome} className="cursor-pointer">
            <YouTubeLogo />
          </div>
        </div>

        {/* Center Section: Search Bar & Mic */}
        <div className="flex-1 max-w-[732px] mx-4 hidden sm:flex items-center justify-center">
          <div className="flex items-center w-full max-w-[640px] gap-3">
            <div
              ref={searchContainerRef}
              className="relative flex items-center flex-1"
            >
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center w-full rounded-l-full rounded-r-none border overflow-hidden transition-colors ${
                  isSearchFocused
                    ? 'border-[#1c62b9] bg-[#121212]'
                    : 'border-[#303030] bg-[#121212]'
                }`}
              >
                {/* Search Icon inside input when focused */}
                {isSearchFocused && (
                  <div className="pl-4 pr-1 text-[#aaaaaa]">
                    <Search className="w-4 h-4" />
                  </div>
                )}

                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className={`w-full bg-transparent text-[#f1f1f1] text-sm py-2 px-4 focus:outline-none placeholder-[#888888] ${
                    isSearchFocused ? 'pl-2' : 'pl-4'
                  }`}
                />

                {/* Clear search button (X) */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="p-1.5 mr-1 hover:bg-[#272727] text-[#aaaaaa] hover:text-[#f1f1f1] rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </form>

              {/* Search Button */}
              <button
                type="button"
                onClick={handleSearchSubmit}
                title="Search"
                className="h-10 px-6 bg-[#222222] hover:bg-[#272727] active:bg-[#333333] border border-l-0 border-[#303030] rounded-r-full flex items-center justify-center text-[#f1f1f1] transition-colors"
              >
                <Search className="w-5 h-5 text-[#f1f1f1]" />
              </button>

              {/* Search Suggestions Dropdown */}
              {isSearchFocused && (
                <div className="absolute left-0 right-14 top-11 bg-[#212121] border border-[#303030] rounded-2xl shadow-2xl py-3 z-50 overflow-hidden">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#aaaaaa] px-4 pb-1">
                    Suggestions
                  </div>
                  {SEARCH_SUGGESTIONS.filter((s) =>
                    s.text.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      onMouseDown={() => handleSuggestionClick(item.text)}
                      className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#303030] text-left text-sm text-[#f1f1f1] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        {item.type === 'history' ? (
                          <History className="w-4 h-4 text-[#aaaaaa]" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-[#aaaaaa]" />
                        )}
                        <span className="font-medium">{item.text}</span>
                      </div>
                      <span className="text-xs text-[#717171] opacity-0 group-hover:opacity-100">
                        Select
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Microphone Button */}
            <button
              onClick={() => setIsVoiceModalOpen(true)}
              title="Search with your voice"
              className="p-2.5 bg-[#222222] hover:bg-[#272727] active:bg-[#383838] rounded-full text-[#f1f1f1] transition-colors flex-shrink-0"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Section: Create, Notifications, Profile */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Mobile search trigger */}
          <button
            onClick={() => {
              const q = prompt('Search YouTube:');
              if (q !== null) {
                onSearchChange(q);
                onSearchSubmit(q);
              }
            }}
            title="Search"
            className="p-2 hover:bg-[#272727] rounded-full text-[#f1f1f1] sm:hidden"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Create Button */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCreateOpen(!isCreateOpen);
                setIsNotificationsOpen(false);
                setIsAccountOpen(false);
              }}
              title="Create"
              className="flex items-center gap-2 px-3 py-1.5 bg-[#272727] hover:bg-[#383838] active:bg-[#454545] text-[#f1f1f1] rounded-full text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden md:inline">Create</span>
            </button>
            <CreateDropdown
              isOpen={isCreateOpen}
              onClose={() => setIsCreateOpen(false)}
            />
          </div>

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsCreateOpen(false);
                setIsAccountOpen(false);
              }}
              title="Notifications"
              className="p-2 hover:bg-[#272727] active:bg-[#383838] rounded-full text-[#f1f1f1] transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#cc0000] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full leading-tight">
                9+
              </span>
            </button>
            <NotificationsDropdown
              isOpen={isNotificationsOpen}
              onClose={() => setIsNotificationsOpen(false)}
            />
          </div>

          {/* User Profile Avatar */}
          <div className="relative ml-1">
            <button
              onClick={() => {
                setIsAccountOpen(!isAccountOpen);
                setIsCreateOpen(false);
                setIsNotificationsOpen(false);
              }}
              title="Alex Morgan"
              className="focus:outline-none ring-2 ring-transparent hover:ring-[#3ea6ff] rounded-full transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>
            <AccountDropdown
              isOpen={isAccountOpen}
              onClose={() => setIsAccountOpen(false)}
            />
          </div>
        </div>
      </header>

      {/* Voice Search Modal */}
      <VoiceSearchModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onSearch={(query) => {
          onSearchChange(query);
          onSearchSubmit(query);
        }}
      />
    </>
  );
}

