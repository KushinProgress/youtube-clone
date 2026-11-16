import React, { useEffect, useRef } from 'react';
import { Upload, Radio, SquarePen, PlaySquare } from 'lucide-react';

export default function CreateDropdown({ isOpen, onClose }) {
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

  const items = [
    { icon: Upload, label: 'Upload video' },
    { icon: Radio, label: 'Go live' },
    { icon: SquarePen, label: 'Create post' }
  ];

  return (
    <div
      ref={ref}
      className="absolute right-0 top-12 w-56 bg-[#282828] border border-[#3f3f3f] rounded-xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-100"
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <button
            key={idx}
            onClick={() => {
              alert(`Action: "${item.label}" clicked`);
              onClose();
            }}
            className="w-full flex items-center gap-4 px-4 py-2.5 hover:bg-[#3e3e3e] text-left text-sm text-[#f1f1f1] transition-colors"
          >
            <Icon className="w-5 h-5 text-[#f1f1f1]" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

