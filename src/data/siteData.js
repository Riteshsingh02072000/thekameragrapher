import featuredA from '../assets/logos/featured-a.svg';
import featuredB from '../assets/logos/featured-b.svg';
import featuredC from '../assets/logos/featured-c.svg';
import featuredD from '../assets/logos/featured-d.svg';
import featuredE from '../assets/logos/featured-e.svg';
import featuredF from '../assets/logos/featured-f.svg';

const asset = (path) => encodeURI(`/portfolio/${path}`);

export const heroImage = asset('hero/LAX_0556.jpg');

export const categories = [
  {
    slug: 'automotive',
    label: 'Automotive',
    title: 'Automotive',
    description: 'Sculpted metal, cinematic roads, and precision-lit machine portraits.',
    longDescription:
      'Automotive frames focused on performance, atmosphere, and the emotional design of motion. Built for campaigns, launches, editorial spreads, and collector storytelling.',
    coverImage: {
      src: asset('automotive/DEF_0395.jpg'),
      alt: 'Automotive photography cover',
    },
    photos: [
      { id: 'auto-1', src: asset('automotive/DEF_0395.jpg'), alt: 'Automotive photo one', title: 'Midnight Chassis', meta: 'Editorial / Night drive / Precision lighting' },
      { id: 'auto-2', src: asset('automotive/DEF_7643.jpg'), alt: 'Automotive photo two', title: 'Heatline', meta: 'Motion blur / Road sequence / Performance tone' },
      { id: 'auto-3', src: asset('automotive/DJI_0347.jpg'), alt: 'Automotive photo three', title: 'Chrome Study', meta: 'Detail frame / Reflections / Sculpted contrast' },
      { id: 'auto-4', src: asset('automotive/ENG_0325.jpg'), alt: 'Automotive photo four', title: 'Redline Silence', meta: 'Luxury campaign / Sunset highway / Hero shot' },
    ],
  },
  {
    slug: 'portrait',
    label: 'Portrait',
    title: 'Portrait',
    description: 'Editorial portraiture with cinematic skin tones and composed intimacy.',
    longDescription:
      'Portrait sessions crafted with restraint, texture, and mood. Ideal for personal brands, editorials, artists, and timeless identity-driven storytelling.',
    coverImage: {
      src: asset('portrait/DEF_7414.jpg'),
      alt: 'Portrait photography cover',
    },
    photos: [
      { id: 'portrait-1', src: asset('portrait/DEF_7414.jpg'), alt: 'Portrait photo one', title: 'Soft Gold', meta: 'Natural light / Editorial beauty / Warm grade' },
      { id: 'portrait-2', src: asset('portrait/LAX_0179 (3).jpg'), alt: 'Portrait photo two', title: 'Studio Whisper', meta: 'Controlled light / Quiet gaze / Refined framing' },
      { id: 'portrait-3', src: asset('portrait/LAX_0241.jpg'), alt: 'Portrait photo three', title: 'Afterglow', meta: 'Window light / Intimate composition / Luxe tone' },
      { id: 'portrait-4', src: asset('portrait/LAX_0733.jpg'), alt: 'Portrait photo four', title: 'Monochrome Pulse', meta: 'Black and white / Character study / Sharp contrast' },
    ],
  },
  {
    slug: 'travel',
    label: 'Travel',
    title: 'Travel',
    description: 'Destinations captured as atmosphere, memory, and lived-in perspective.',
    longDescription:
      'Travel imagery balancing scale with intimacy, from textured alleyways to open landscapes. Designed for tourism campaigns, editorials, and destination features.',
    coverImage: {
      src: asset('travel/LAX_0090 (1).jpg'),
      alt: 'Travel photography cover',
    },
    photos: [
      { id: 'travel-1', src: asset('travel/LAX_0090 (1).jpg'), alt: 'Travel photo one', title: 'Arrival Light', meta: 'Coastal morning / Destination editorial / Clean atmosphere' },
      { id: 'travel-2', src: asset('travel/LAX_0118 (2).jpg'), alt: 'Travel photo two', title: 'Worn Stone', meta: 'Historic textures / Wander sequence / Human scale' },
      { id: 'travel-3', src: asset('travel/LAX_0334 (1).jpg'), alt: 'Travel photo three', title: 'Far Ridge', meta: 'Mountain passage / Quiet color palette / Open frame' },
      { id: 'travel-4', src: asset('travel/LAX_0573.jpg'), alt: 'Travel photo four', title: 'City Horizon', meta: 'Urban destination / Golden hour / Story-led view' },
    ],
  },
  {
    slug: 'street',
    label: 'Street',
    title: 'Street',
    description: 'Candid urban rhythm, shadows, geometry, and split-second gestures.',
    longDescription:
      'Street work rooted in timing, observation, and visual tension. These images elevate fleeting moments into graphic, human-centered narratives.',
    coverImage: {
      src: asset('street/DEF_0461 (1).jpg'),
      alt: 'Street photography cover',
    },
    photos: [
      { id: 'street-1', src: asset('street/DEF_0461 (1).jpg'), alt: 'Street photo one', title: 'Crosswalk Theory', meta: 'Urban geometry / Fast timing / Graphic shadows' },
      { id: 'street-2', src: asset('street/ENG_0325.jpg'), alt: 'Street photo two', title: 'Blue Corner', meta: 'Night city / Reflections / Candid movement' },
      { id: 'street-3', src: asset('street/LAX_0248 (2).jpg'), alt: 'Street photo three', title: 'Passing Signal', meta: 'Rush sequence / Gesture study / Editorial grit' },
      { id: 'street-4', src: asset('street/LAX_0253 (1).jpg'), alt: 'Street photo four', title: 'Parallel Lives', meta: 'Crowd rhythm / Layered composition / Quiet drama' },
    ],
  },
  {
    slug: 'drone',
    label: 'Drone',
    title: 'Drone',
    description: 'Aerial perspectives where scale, abstraction, and landscape collide.',
    longDescription:
      'Drone galleries built around altitude, geometry, and spatial drama. Perfect for landscape campaigns, tourism visuals, architecture, and high-impact openers.',
    coverImage: {
      src: asset('drone/DJI_0245.jpg'),
      alt: 'Drone photography cover',
    },
    photos: [
      { id: 'drone-1', src: asset('drone/DJI_0245.jpg'), alt: 'Drone photo one', title: 'Tidal Geometry', meta: 'Coastline / Aerial study / High-altitude calm' },
      { id: 'drone-2', src: asset('drone/DJI_0280.jpg'), alt: 'Drone photo two', title: 'Gridline', meta: 'City plan / Structured abstraction / Clean symmetry' },
      { id: 'drone-3', src: asset('drone/DJI_0347.jpg'), alt: 'Drone photo three', title: 'Fields Below', meta: 'Landscape patchwork / Color blocks / Altitude detail' },
      { id: 'drone-4', src: asset('drone/DJI_0421.jpg'), alt: 'Drone photo four', title: 'Ridge Echo', meta: 'Mountain pass / Vertical drama / Layered depth' },
    ],
  },
];

export const categoriesBySlug = Object.fromEntries(categories.map((category) => [category.slug, category]));

export const navigationItems = categories.map(({ slug, title }) => ({
  slug,
  label: title,
}));

export const featuredPlatforms = [
  { name: 'Aperture Select', logo: featuredA },
  { name: 'Roadline', logo: featuredB },
  { name: 'Nomad Journal', logo: featuredC },
  { name: 'Framehouse', logo: featuredD },
  { name: 'Altitude Review', logo: featuredE },
  { name: 'Northlight', logo: featuredF },
];
