import React, { useState, useRef } from 'react';
import {
  X,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  Bookmark,
  MoreHorizontal,
  Check,
  Send,
  Sparkles
} from 'lucide-react';
import { VerifiedCheckIcon } from './Icons';

export default function VideoModal({ video, onClose, onSelectVideo, allVideos }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likesCount, setLikesCount] = useState(14800);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(video.comments || []);
  const [copiedToast, setCopiedToast] = useState(false);

  const videoRef = useRef(null);

  if (!video) return null;

  const handleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
      setLikesCount(prev => prev - 1);
    } else {
      setHasLiked(true);
      if (hasDisliked) setHasDisliked(false);
      setLikesCount(prev => prev + 1);
    }
  };

  const handleDislike = () => {
    if (hasDisliked) {
      setHasDisliked(false);
    } else {
      setHasDisliked(true);
      if (hasLiked) {
        setHasLiked(false);
        setLikesCount(prev => prev - 1);
      }
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const added = {
      id: `c_${Date.now()}`,
      author: 'Alex Morgan',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      text: newComment.trim(),
      time: 'Just now',
      likes: 0
    };
    setComments([added, ...comments]);
    setNewComment('');
  };

  const upNextVideos = (allVideos || []).filter(v => v.id !== video.id);

  return (
    <div className="fixed inset-0 z-50 bg-[#0f0f0f] overflow-y-auto animate-in fade-in duration-150">
      {/* Top Floating Bar with Close */}
      <div className="sticky top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-[#272727]">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#272727] text-white transition-colors"
            title="Back to feed"
          >
            <X className="w-6 h-6" />
          </button>
          <span className="text-sm font-medium text-[#aaaaaa] truncate max-w-md hidden sm:inline">
            {video.title}
          </span>
        </div>

        {copiedToast && (
          <div className="bg-[#272727] text-white text-xs px-3 py-1.5 rounded-full border border-[#3f3f3f] flex items-center gap-1.5 shadow-lg">
            <Check className="w-3.5 h-3.5 text-green-400" />
            <span>Link copied to clipboard!</span>
          </div>
        )}
      </div>

      <div className="max-w-[1720px] mx-auto px-4 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video & Details (2 columns on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Player Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
              <video
                ref={videoRef}
                src={video.videoSampleUrl}
                poster={video.thumbnail}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {video.title}
            </h1>

            {/* Channel Info & Action Buttons Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#272727]">
              {/* Channel Info */}
              <div className="flex items-center gap-3">
                <img
                  src={video.channel.avatar}
                  alt={video.channel.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm text-white hover:underline cursor-pointer">
                      {video.channel.name}
                    </span>
                    {video.channel.verified && <VerifiedCheckIcon />}
                  </div>
                  <span className="text-xs text-[#aaaaaa]">
                    {video.channel.subscribers} subscribers
                  </span>
                </div>

                {/* Subscribe Button */}
                <button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`ml-3 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSubscribed
                      ? 'bg-[#272727] text-[#f1f1f1] hover:bg-[#383838]'
                      : 'bg-white text-black hover:bg-[#e0e0e0]'
                  }`}
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Like / Dislike Pill */}
                <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-3.5 py-2 hover:bg-[#383838] text-sm font-medium transition-colors ${
                      hasLiked ? 'text-[#3ea6ff]' : 'text-white'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                    <span>{likesCount.toLocaleString()}</span>
                  </button>
                  <div className="w-[1px] h-6 bg-[#3f3f3f]" />
                  <button
                    onClick={handleDislike}
                    className={`px-3 py-2 hover:bg-[#383838] transition-colors ${
                      hasDisliked ? 'text-[#3ea6ff]' : 'text-white'
                    }`}
                  >
                    <ThumbsDown className={`w-4 h-4 ${hasDisliked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-3.5 py-2 bg-[#272727] hover:bg-[#383838] rounded-full text-sm font-medium text-white transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                {/* Download Button */}
                <button
                  onClick={() => alert("Downloading video in 1080p...")}
                  className="flex items-center gap-2 px-3.5 py-2 bg-[#272727] hover:bg-[#383838] rounded-full text-sm font-medium text-white transition-colors hidden md:flex"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>

                {/* Save Button */}
                <button
                  onClick={() => alert("Saved to Watch Later playlist")}
                  className="p-2 bg-[#272727] hover:bg-[#383838] rounded-full text-white transition-colors"
                  title="Save to playlist"
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                {/* More Button */}
                <button
                  onClick={() => alert("More options")}
                  className="p-2 bg-[#272727] hover:bg-[#383838] rounded-full text-white transition-colors"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description Box */}
            <div className="bg-[#272727] rounded-xl p-3.5 text-sm">
              <div className="flex gap-2 font-semibold text-white mb-1">
                <span>{video.views}</span>
                <span>•</span>
                <span>{video.uploadedAt}</span>
                <span className="text-[#3ea6ff] ml-2">#tech #programming</span>
              </div>
              <p
                className={`text-[#f1f1f1] whitespace-pre-line leading-relaxed ${
                  isDescExpanded ? '' : 'line-clamp-3'
                }`}
              >
                {video.description}
              </p>
              <button
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="text-xs font-semibold text-white mt-2 hover:underline focus:outline-none"
              >
                {isDescExpanded ? 'Show less' : '...more'}
              </button>
            </div>

            {/* Comments Section */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-6">
                <h3 className="text-lg font-bold text-white">
                  {comments.length} Comments
                </h3>
                <span className="text-sm font-medium text-[#aaaaaa] cursor-pointer hover:text-white">
                  Sort by
                </span>
              </div>

              {/* Add Comment Input */}
              <form onSubmit={handleAddComment} className="flex gap-3 items-start">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full bg-transparent border-b border-[#3f3f3f] focus:border-white py-1 text-sm text-[#f1f1f1] focus:outline-none transition-colors"
                  />
                  {newComment.trim() && (
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => setNewComment('')}
                        className="px-3 py-1.5 text-xs text-[#aaaaaa] hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#3ea6ff] hover:bg-[#3ea6ff]/80 text-[#0f0f0f] rounded-full text-xs font-semibold transition-colors"
                      >
                        Comment
                      </button>
                    </div>
                  )}
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-4 pt-2">
                {comments.map((c) => (
                  <div key={c.id} className="flex gap-3 text-sm">
                    <img
                      src={c.avatar}
                      alt={c.author}
                      className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-medium text-xs text-white">
                          @{c.author.toLowerCase()}
                        </span>
                        <span className="text-[11px] text-[#aaaaaa]">{c.time}</span>
                      </div>
                      <p className="text-sm text-[#f1f1f1] leading-relaxed">
                        {c.text}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-[#aaaaaa]">
                        <button className="flex items-center gap-1 hover:text-white">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{c.likes > 0 ? c.likes : ''}</span>
                        </button>
                        <button className="hover:text-white">
                          <ThumbsDown className="w-3.5 h-3.5" />
                        </button>
                        <button className="font-semibold hover:text-white">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Up Next / Recommendations Column (1 column) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white mb-2">Recommended</h3>
            <div className="space-y-3">
              {upNextVideos.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => onSelectVideo(rec)}
                  className="flex gap-2.5 cursor-pointer group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-[#202020] flex-shrink-0">
                    <img
                      src={rec.thumbnail}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/85 text-white text-[10px] font-medium px-1 rounded">
                      {rec.duration}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 pr-1">
                    <h4 className="text-xs font-semibold text-white group-hover:text-blue-400 line-clamp-2 leading-snug">
                      {rec.title}
                    </h4>
                    <p className="text-[11px] text-[#aaaaaa] mt-1 truncate">
                      {rec.channel.name}
                    </p>
                    <p className="text-[11px] text-[#aaaaaa]">
                      {rec.views} • {rec.uploadedAt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

