import React from 'react';
import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Video,
  Download,
  ListVideo,
  History,
  User,
  ChevronRight,
  Flame,
  Music2,
  Gamepad2,
  Newspaper,
  Trophy,
  Radio,
  Settings,
  Flag,
  HelpCircle,
  MessageSquareWarning,
  Tv,
  Disc3,
  Baby
} from 'lucide-react';
import { YouTubeShortsLogo, YouTubeLogo, LiveIndicatorIcon } from './Icons';
import { SUBSCRIPTIONS } from '../data/mockData';

export default function Sidebar({
  isExpanded,
  isMobileOpen,
  onCloseMobile,
  activeItem,
  onSelectItem
}) {
  const mainNav = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shorts', label: 'Shorts', customIcon: YouTubeShortsLogo },
    { id: 'subscriptions', label: 'Subscriptions', icon: PlaySquare }
  ];

  const youNav = [
    { id: 'channel', label: 'Your channel', icon: User },
    { id: 'history', label: 'History', icon: History },
    { id: 'playlists', label: 'Playlists', icon: ListVideo },
    { id: 'your_videos', label: 'Your videos', icon: Video },
    { id: 'watch_later', label: 'Watch Later', icon: Clock },
    { id: 'liked_videos', label: 'Liked videos', icon: ThumbsUp },
    { id: 'downloads', label: 'Downloads', icon: Download }
  ];

  const exploreNav = [
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'music_explore', label: 'Music', icon: Music2 },
    { id: 'gaming_explore', label: 'Gaming', icon: Gamepad2 },
    { id: 'news_explore', label: 'News', icon: Newspaper },
    { id: 'sports_explore', label: 'Sports', icon: Trophy },
    { id: 'podcasts_explore', label: 'Podcasts', icon: Radio }
  ];

  const moreFromYT = [
    { id: 'yt_premium', label: 'YouTube Premium', icon: Tv },
    { id: 'yt_studio', label: 'YouTube Studio', icon: Disc3 },
    { id: 'yt_music', label: 'YouTube Music', icon: Music2 },
    { id: 'yt_kids', label: 'YouTube Kids', icon: Baby }
  ];

  const systemNav = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'report', label: 'Report history', icon: Flag },
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'feedback', label: 'Send feedback', icon: MessageSquareWarning }
  ];

  const renderItem = (item) => {
    const isActive = activeItem === item.id;
    const Icon = item.icon;
    const CustomIcon = item.customIcon;

    return (
      <button
        key={item.id}
        onClick={() => onSelectItem(item.id)}
        className={`w-full flex items-center gap-6 px-3 py-2.5 rounded-xl text-sm font-normal text-[#f1f1f1] yt-transition text-left ${
          isActive
            ? 'bg-[#272727] font-semibold text-white'
            : 'hover:bg-[#272727] active:bg-[#3f3f3f]'
        }`}
      >
        {CustomIcon ? (
          <div className="w-6 h-6 flex items-center justify-center">
            <CustomIcon className="w-5 h-5" />
          </div>
        ) : (
          <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
        )}
        <span className="truncate">{item.label}</span>
      </button>
    );
  };

  // Mini rail sidebar when collapsed on desktop
  const renderMiniSidebar = () => (
    <aside className="w-[72px] bg-[#0f0f0f] flex flex-col items-center py-2 px-1 gap-1 select-none flex-shrink-0 hidden md:flex sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto no-scrollbar">
      {mainNav.map((item) => {
        const isActive = activeItem === item.id;
        const Icon = item.icon;
        const CustomIcon = item.customIcon;
        return (
          <button
            key={item.id}
            onClick={() => onSelectItem(item.id)}
            className={`w-16 py-4 flex flex-col items-center justify-center rounded-xl gap-1 text-[10px] yt-transition ${
              isActive
                ? 'bg-[#272727] text-white font-medium'
                : 'hover:bg-[#272727] text-[#f1f1f1]'
            }`}
          >
            {CustomIcon ? (
              <CustomIcon className="w-5 h-5" />
            ) : (
              <Icon className="w-5 h-5 stroke-[1.8]" />
            )}
            <span className="truncate max-w-[60px] text-center">{item.label}</span>
          </button>
        );
      })}

      <button
        onClick={() => onSelectItem('you')}
        className={`w-16 py-4 flex flex-col items-center justify-center rounded-xl gap-1 text-[10px] yt-transition ${
          activeItem === 'you'
            ? 'bg-[#272727] text-white font-medium'
            : 'hover:bg-[#272727] text-[#f1f1f1]'
        }`}
      >
        <User className="w-5 h-5 stroke-[1.8]" />
        <span className="truncate max-w-[60px] text-center">You</span>
      </button>
    </aside>
  );

  // Full expanded content
  const sidebarContent = (
    <div className="h-full overflow-y-auto px-3 py-3 space-y-3 divide-y divide-[#272727] select-none text-[#f1f1f1]">
      {/* Main Nav: Home, Shorts, Subscriptions */}
      <div className="space-y-0.5">
        {mainNav.map(renderItem)}
      </div>

      {/* "You" Section */}
      <div className="pt-3 space-y-0.5">
        <button
          onClick={() => onSelectItem('you')}
          className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-white hover:bg-[#272727] rounded-xl yt-transition mb-1"
        >
          <span>You</span>
          <ChevronRight className="w-4 h-4 text-[#aaaaaa]" />
        </button>
        {youNav.map(renderItem)}
      </div>

      {/* Followed Channels / Subscriptions */}
      <div className="pt-3">
        <h4 className="px-3 pb-2 text-sm font-semibold text-white">Subscriptions</h4>
        <div className="space-y-0.5">
          {SUBSCRIPTIONS.map((sub) => (
            <button
              key={sub.id}
              onClick={() => onSelectItem(`sub_${sub.id}`)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm hover:bg-[#272727] yt-transition group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={sub.avatar}
                  alt={sub.name}
                  className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                />
                <span className="truncate text-left text-sm text-[#f1f1f1]">
                  {sub.name}
                </span>
              </div>
              {sub.isLive ? (
                <LiveIndicatorIcon />
              ) : sub.unread ? (
                <span className="w-1.5 h-1.5 bg-[#3ea6ff] rounded-full flex-shrink-0" />
              ) : null}
            </button>
          ))}
        </div>
      </div>

      {/* Explore */}
      <div className="pt-3">
        <h4 className="px-3 pb-2 text-sm font-semibold text-white">Explore</h4>
        <div className="space-y-0.5">
          {exploreNav.map(renderItem)}
        </div>
      </div>

      {/* More from YouTube */}
      <div className="pt-3">
        <h4 className="px-3 pb-2 text-sm font-semibold text-white">More from YouTube</h4>
        <div className="space-y-0.5">
          {moreFromYT.map(renderItem)}
        </div>
      </div>

      {/* System Nav */}
      <div className="pt-3 space-y-0.5">
        {systemNav.map(renderItem)}
      </div>

      {/* Footer text */}
      <div className="pt-4 px-3 text-[11px] text-[#717171] leading-relaxed space-y-3 font-normal pb-8">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Press</a>
          <a href="#" className="hover:underline">Copyright</a>
          <a href="#" className="hover:underline">Contact us</a>
          <a href="#" className="hover:underline">Creators</a>
          <a href="#" className="hover:underline">Advertise</a>
          <a href="#" className="hover:underline">Developers</a>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Policy & Safety</a>
          <a href="#" className="hover:underline">How YouTube works</a>
          <a href="#" className="hover:underline">Test new features</a>
        </div>
        <p className="pt-2 text-[#606060]">© 2026 Google LLC</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop View */}
      {isExpanded ? (
        <aside className="w-60 bg-[#0f0f0f] flex-shrink-0 hidden md:block sticky top-14 h-[calc(100vh-3.5rem)]">
          {sidebarContent}
        </aside>
      ) : (
        renderMiniSidebar()
      )}

      {/* Mobile Drawer (Visible when hamburger clicked on small screens or drawer mode) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            onClick={onCloseMobile}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="relative w-64 max-w-[80vw] h-full bg-[#0f0f0f] border-r border-[#272727] z-10 flex flex-col shadow-2xl">
            {/* Drawer Header */}
            <div className="h-14 px-4 flex items-center gap-4 border-b border-[#272727]">
              <button
                onClick={onCloseMobile}
                className="p-2 hover:bg-[#272727] rounded-full text-[#f1f1f1]"
              >
                <Home className="w-5 h-5" />
              </button>
              <YouTubeLogo />
            </div>
            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto">
              {sidebarContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
