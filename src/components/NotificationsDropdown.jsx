import React, { useEffect, useRef, useState } from 'react';
import { Settings, MoreVertical, Check } from 'lucide-react';
import { NOTIFICATIONS } from '../data/mockData';

export default function NotificationsDropdown({ isOpen, onClose }) {
  const ref = useRef(null);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <div
      ref={ref}
      className="absolute right-0 top-12 w-96 max-w-[calc(100vw-1rem)] bg-[#282828] border border-[#3f3f3f] rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#3e3e3e]">
        <h3 className="font-semibold text-base text-[#f1f1f1]">Notifications</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={markAllRead}
            title="Mark all as read"
            className="p-1.5 hover:bg-[#3e3e3e] rounded-full text-[#aaaaaa] hover:text-[#f1f1f1] transition-colors"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            title="Settings"
            className="p-1.5 hover:bg-[#3e3e3e] rounded-full text-[#aaaaaa] hover:text-[#f1f1f1] transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 py-2 border-b border-[#3e3e3e] text-xs font-medium">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-3 py-1 rounded-lg transition-colors ${
            activeTab === 'All' ? 'bg-[#f1f1f1] text-[#0f0f0f]' : 'bg-[#383838] text-[#f1f1f1] hover:bg-[#4a4a4a]'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('Mentions')}
          className={`px-3 py-1 rounded-lg transition-colors ${
            activeTab === 'Mentions' ? 'bg-[#f1f1f1] text-[#0f0f0f]' : 'bg-[#383838] text-[#f1f1f1] hover:bg-[#4a4a4a]'
          }`}
        >
          Mentions
        </button>
      </div>

      {/* Notifications list */}
      <div className="max-h-[440px] overflow-y-auto divide-y divide-[#333333]">
        {notifications.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setNotifications(prev =>
                prev.map(n => (n.id === item.id ? { ...n, unread: false } : n))
              );
            }}
            className="flex items-start gap-3 p-3.5 hover:bg-[#383838] cursor-pointer transition-colors relative group"
          >
            {item.unread && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ea6ff] absolute left-1.5 top-5" />
            )}
            <img
              src={item.avatar}
              alt={item.channel}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0 pr-2">
              <p className="text-xs text-[#f1f1f1] leading-relaxed">
                <span className="font-semibold text-white mr-1">{item.channel}</span>
                {item.text}
              </p>
              <span className="text-[11px] text-[#aaaaaa] mt-1 block">
                {item.time}
              </span>
            </div>
            <img
              src={item.thumbnail}
              alt="Video preview"
              className="w-16 h-10 object-cover rounded-md flex-shrink-0"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="p-1 hover:bg-[#4a4a4a] rounded-full text-[#aaaaaa] opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

