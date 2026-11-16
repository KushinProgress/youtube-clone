import React, { useEffect, useRef } from 'react';
import {
  User,
  ShieldAlert,
  Moon,
  Globe,
  Settings,
  HelpCircle,
  MessageSquareWarning,
  LogOut,
  Users,
  DollarSign,
  Keyboard,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function AccountDropdown({ isOpen, onClose }) {
  const ref = useRef(null);

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

  return (
    <div
      ref={ref}
      className="absolute right-0 top-12 w-72 bg-[#282828] border border-[#3f3f3f] rounded-2xl shadow-2xl z-50 overflow-hidden divide-y divide-[#3e3e3e] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-100"
    >
      {/* Profile Header */}
      <div className="p-4 flex gap-3 items-center">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
          alt="User Profile"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ff0000]/50"
        />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-[#f1f1f1] truncate">Alex Morgan</p>
          <p className="text-xs text-[#aaaaaa] truncate">@alexmorgan_dev</p>
          <a
            href="#account"
            onClick={(e) => {
              e.preventDefault();
              alert("Manage Google Account clicked");
            }}
            className="text-xs text-[#3ea6ff] hover:underline mt-1 block"
          >
            Manage your Google Account
          </a>
        </div>
      </div>

      {/* Section 1: Account Options */}
      <div className="py-2">
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <User className="w-5 h-5 text-[#aaaaaa]" />
          <span>Your channel</span>
        </button>
        <button className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <div className="flex items-center gap-3.5">
            <Users className="w-5 h-5 text-[#aaaaaa]" />
            <span>Switch account</span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#aaaaaa]" />
        </button>
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <LogOut className="w-5 h-5 text-[#aaaaaa]" />
          <span>Sign out</span>
        </button>
      </div>

      {/* Section 2: Studio & Subscriptions */}
      <div className="py-2">
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <ExternalLink className="w-5 h-5 text-[#aaaaaa]" />
          <span>YouTube Studio</span>
        </button>
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <DollarSign className="w-5 h-5 text-[#aaaaaa]" />
          <span>Purchases and memberships</span>
        </button>
      </div>

      {/* Section 3: Preferences */}
      <div className="py-2">
        <button className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <div className="flex items-center gap-3.5">
            <Moon className="w-5 h-5 text-[#aaaaaa]" />
            <span>Appearance: Dark</span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#aaaaaa]" />
        </button>
        <button className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <div className="flex items-center gap-3.5">
            <Globe className="w-5 h-5 text-[#aaaaaa]" />
            <span>Location: India</span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#aaaaaa]" />
        </button>
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <Keyboard className="w-5 h-5 text-[#aaaaaa]" />
          <span>Keyboard shortcuts</span>
        </button>
      </div>

      {/* Section 4: System */}
      <div className="py-2">
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <Settings className="w-5 h-5 text-[#aaaaaa]" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <HelpCircle className="w-5 h-5 text-[#aaaaaa]" />
          <span>Help</span>
        </button>
        <button className="w-full flex items-center gap-3.5 px-4 py-2 hover:bg-[#383838] text-left text-sm text-[#f1f1f1]">
          <MessageSquareWarning className="w-5 h-5 text-[#aaaaaa]" />
          <span>Send feedback</span>
        </button>
      </div>
    </div>
  );
}

