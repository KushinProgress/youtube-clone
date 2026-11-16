# YouTube Homepage Dark Theme Clone

A responsive, pixel-perfect clone of YouTube's dark theme homepage built with **React 18**, **Tailwind CSS**, and modern SVG icons.

## Features & Components

### 1. Top Navbar
- **YouTube Brand Logo:** Accurate red play badge, YouTube wordmark, and regional superscript (`IN`).
- **Collapsible Sidebar Hamburger Button:** Toggles between full expanded sidebar (240px) and mini rail (72px) on desktop, or mobile drawer on smaller screens.
- **Search Bar:**
  - Distinct dark input styling (`#121212`) with focus border `#1c62b9` and search icon.
  - Interactive search autocomplete suggestions dropdown with recent history and trending items.
  - Quick clear button (`X`) when text is entered.
  - Functional search filtering that updates video cards in real time or upon pressing Enter / clicking Search.
- **Voice Search:** Microphone icon opens a YouTube voice search dialog with a pulsing listening animation and quick sample prompts.
- **"+ Create" Button:** Pill button with camera icon, opening the YouTube Create menu (Upload video, Go live, Create post).
- **Notifications Bell:** Features an active unread count badge (`9+`), opening an interactive notifications flyout with unread indicators and thumbnail previews.
- **User Avatar:** Circular profile avatar with dropdown menu (Channel, Switch account, YouTube Studio, Appearance: Dark, Settings, etc.).

### 2. Collapsible Left Sidebar
- **Main Section:** Home (active pill), Shorts (custom icon), Subscriptions.
- **"You" Section:** Your Channel, History, Playlists, Your Videos, Watch Later, Liked Videos, Downloads.
- **Subscriptions:** Realistic creator list (Marcus Brownlee, Veritas Science, Lofi Tokyo Radio, etc.) with Live badges and unread dots.
- **Explore & More:** Trending, Music, Gaming, News, Sports, Podcasts, YouTube Premium, YouTube Studio, Settings, and footer links.
- **Mini Rail Mode:** Compact 72px sidebar for comfortable viewing when collapsed.
- **Mobile Drawer:** Slides in with a dimmed backdrop blur on narrow viewports.

### 3. Category Navigation (Filter Chips)
- Sticky horizontal category bar with YouTube's pill style (`All`, `Gaming`, `Music`, `Live`, `Mixes`, `Podcasts`, `Graphic Design`, `Web Development`, `Artificial Intelligence`, etc.).
- Active chip highlight (`#f1f1f1` background, `#0f0f0f` text).
- Left & right smooth chevron scroll buttons with gradient fade masks.
- Dynamic filtering of video feed when clicking any category.

### 4. Main Video Feed (Responsive 3-Column Grid)
- Standard 3-column layout on desktop: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- 16:9 aspect ratio thumbnails with `12px` rounded corners and hover zoom effects.
- Accurate video duration badges (e.g. `14:28`, `42:15`) in bottom-right corner.
- Watched progress bar on partially viewed videos.
- Verified creator badges with grey checkmark icons.
- Views count and upload dates (e.g., `842K views • 3 days ago`).
- Interactive three-dot dropdown menu on each video (Save to Watch later, Add to queue, Save to playlist, Share, Not interested, Don't recommend channel).
- Clickable video cards opening a full watch view modal.

### 5. Shorts Section
- Horizontal shelf with YouTube Shorts red icon and dismiss button.
- Smooth horizontally scrollable feed with snap scrolling and left/right chevrons.
- Vertical 9:16 aspect ratio cards with titles, views count, creator tags, and 3-dot menus.
- Clickable Shorts opening an immersive vertical video player with like/dislike, comments, and up/down navigation.

### 6. Video Watch View Modal
- Embedded player with controls.
- Channel bar with toggleable Subscribe button.
- Interactive Like / Dislike pill with real-time counter updates.
- Share button with clipboard copy toast.
- Expandable description box ("...more" / "Show less").
- Interactive Comments section with comment input and upvote buttons.
- "Up Next" recommended video sidebar.

---

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Production Preview
```bash
npm run build
npm run preview
```
Visit: [http://localhost:4173](http://localhost:4173)

