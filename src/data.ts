export interface ImageItem {
  id: string;
  url: string;
  title: string;
  category: string;
  aspectRatio: number; // width / height
}

export const galleryImages: ImageItem[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    title: "Silent Peaks",
    category: "Landscape",
    aspectRatio: 1.5,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1000&q=80",
    title: "Forest Canopy",
    category: "Nature",
    aspectRatio: 0.8,
  },
  {
    id: "3",
    url: "https://res.cloudinary.com/dt3m8h52i/image/upload/v1780488075/joseph-reeder-INVi7be11S8-unsplash_rrxvzr.jpg",
    title: "Deep Valley",
    category: "Landscape",
    aspectRatio: 1.2,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    title: "Ethereal Glow",
    category: "Abstract",
    aspectRatio: 0.6,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    title: "Wilderness",
    category: "Nature",
    aspectRatio: 1.4,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80",
    title: "Morning Mist",
    category: "Landscape",
    aspectRatio: 0.7,
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200&q=80",
    title: "Alpine Echo",
    category: "Landscape",
    aspectRatio: 1.1,
  },
];
