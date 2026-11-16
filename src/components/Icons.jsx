import React from 'react';

export const YouTubeLogo = ({ className = "h-5" }) => (
  <div className={`flex items-center gap-1 cursor-pointer select-none ${className}`}>
    <div className="relative flex items-center justify-center">
      <svg className="w-8 h-6 text-[#ff0000]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <polygon points="9.545,15.568 15.818,12 9.545,8.432" fill="#ffffff" />
      </svg>
    </div>
    <div className="flex items-start">
      <span className="font-bold text-lg tracking-tighter text-white font-['YouTube_Sans',_-apple-system,_sans-serif] leading-none">
        YouTube
      </span>
      <span className="text-[10px] text-[#aaaaaa] font-medium ml-1 leading-none">
        IN
      </span>
    </div>
  </div>
);

export const YouTubeShortsLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.77 10.32L16.48 9.68C15.65 9.27 14.86 8.78 14.86 8.78C14.86 8.78 15.62 8.35 15.93 8.16C17.47 7.23 18.02 5.22 17.15 3.65C16.28 2.08 14.33 1.5 12.76 2.37L5.58 6.55C4.05 7.45 3.49 9.46 4.36 11.03C4.94 12.07 6.01 12.69 7.15 12.72L8.44 13.36C9.27 13.77 10.06 14.26 10.06 14.26C10.06 14.26 9.3 14.69 8.99 14.88C7.45 15.81 6.9 17.82 7.77 19.39C8.64 20.96 10.59 21.54 12.16 20.67L19.34 16.49C20.87 15.59 21.43 13.58 20.56 12.01C19.98 10.97 18.91 10.35 17.77 10.32Z"
      fill="#FF0000"
    />
    <polygon points="10,8 16,12 10,16" fill="#FFFFFF" />
  </svg>
);

export const VerifiedCheckIcon = ({ className = "w-3.5 h-3.5 text-[#aaaaaa]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

export const LiveIndicatorIcon = () => (
  <span className="flex items-center px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-white bg-[#cc0000] rounded">
    LIVE
  </span>
);

