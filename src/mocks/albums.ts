export interface Track {
  id: string;
  title: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  coverImage: string;
  tracks: Track[];
}

export const albums: Album[] = [
  {
    id: "saying-things",
    title: "Saying Things",
    artist: "Bria Phillips",
    year: "2021",
    description: "Saying Things is a deeply personal album that blends contemporary jazz with soulful bass lines and introspective lyrics. Recorded over six months in New York, this album captures the raw emotion of human connection and the power of musical storytelling.",
    coverImage: "https://readdy.ai/api/search-image?query=album%20cover%20art%20colorful%20pink%20neon%20hair%20woman%20musician%20artistic%20photography%2C%20vibrant%20colors%2C%20dark%20background%2C%20music%20album%20artwork%2C%20professional%20photography%2C%20dramatic%20lighting&width=400&height=400&seq=album-saying-things&orientation=squarish",
    tracks: [
      { id: "hello", title: "Hello", duration: "3:42" },
      { id: "saying-things-track", title: "Saying Things", duration: "4:15" },
      { id: "field-of-joy-track", title: "Field of Joy", duration: "3:58" },
      { id: "all-the-same-track", title: "All The Same", duration: "5:02" },
    ],
  },
  {
    id: "field-of-joy",
    title: "Field of Joy",
    artist: "Kristi Simon",
    year: "2020",
    description: "Field of Joy is an electrifying fusion of jazz and electronic music, featuring intricate bass work and hypnotic rhythms that transport listeners to another dimension.",
    coverImage: "https://readdy.ai/api/search-image?query=album%20cover%20art%20silhouette%20musician%20dark%20background%20dramatic%20lighting%20concert%20photography%2C%20moody%20atmosphere%2C%20black%20and%20white%20tones%2C%20professional%20music%20album%20artwork&width=400&height=400&seq=album-field-joy&orientation=squarish",
    tracks: [
      { id: "opening", title: "Opening", duration: "2:30" },
      { id: "field-main", title: "Field of Joy", duration: "4:45" },
      { id: "sunrise", title: "Sunrise", duration: "3:22" },
      { id: "echo", title: "Echo", duration: "4:10" },
    ],
  },
  {
    id: "all-the-same",
    title: "All The Same",
    artist: "Kristi Simon",
    year: "2020",
    description: "All The Same explores themes of unity and diversity through a rich tapestry of bass-driven grooves and melodic compositions that challenge conventional music boundaries.",
    coverImage: "https://readdy.ai/api/search-image?query=album%20cover%20art%20grunge%20typography%20escape%20the%20ordinary%20text%20pattern%20dark%20background%2C%20street%20art%20style%2C%20bold%20letters%2C%20music%20album%20artwork%2C%20dramatic%20contrast&width=400&height=400&seq=album-all-same&orientation=squarish",
    tracks: [
      { id: "intro-ats", title: "Intro", duration: "1:45" },
      { id: "same-old", title: "Same Old", duration: "3:55" },
      { id: "different", title: "Different", duration: "4:20" },
      { id: "unity", title: "Unity", duration: "5:15" },
    ],
  },
  {
    id: "before-we-met",
    title: "Before We Met",
    artist: "Kristi Simon",
    year: "2019",
    description: "Before We Met is a nostalgic journey through memories and emotions, featuring lush arrangements and heartfelt bass performances that resonate deeply with listeners.",
    coverImage: "https://readdy.ai/api/search-image?query=album%20cover%20art%20guitarist%20performing%20on%20stage%20warm%20spotlight%20lighting%2C%20concert%20photography%2C%20musician%20silhouette%2C%20dramatic%20stage%20lighting%2C%20music%20album%20artwork&width=400&height=400&seq=album-before-met&orientation=squarish",
    tracks: [
      { id: "memories", title: "Memories", duration: "4:02" },
      { id: "before-main", title: "Before We Met", duration: "3:48" },
      { id: "yesterday", title: "Yesterday", duration: "4:30" },
      { id: "goodbye", title: "Goodbye", duration: "3:15" },
    ],
  },
  {
    id: "november-birdie",
    title: "November Birdie",
    artist: "Kristi Simon",
    year: "2019",
    description: "November Birdie captures the melancholic beauty of autumn through experimental bass compositions and ambient soundscapes that paint vivid sonic landscapes.",
    coverImage: "https://readdy.ai/api/search-image?query=album%20cover%20art%20abstract%20close%20up%20vinyl%20record%20red%20orange%20colors%2C%20macro%20photography%2C%20artistic%20music%20album%20artwork%2C%20warm%20tones%2C%20minimalist%20design&width=400&height=400&seq=album-november&orientation=squarish",
    tracks: [
      { id: "november-intro", title: "November", duration: "3:10" },
      { id: "birdie", title: "Birdie", duration: "4:55" },
      { id: "autumn-leaves", title: "Autumn Leaves", duration: "3:40" },
      { id: "winter-coming", title: "Winter Coming", duration: "5:20" },
    ],
  },
  {
    id: "a-simpler-time",
    title: "A Simpler Time",
    artist: "Kristi Simon",
    year: "2018",
    description: "A Simpler Time is a reflective album that strips back the complexity of modern music to reveal the pure, unfiltered beauty of bass guitar and minimalist arrangements.",
    coverImage: "https://readdy.ai/api/search-image?query=album%20cover%20art%20two%20DJ%20silhouettes%20performing%20at%20concert%20with%20colorful%20stage%20lights%2C%20dark%20atmosphere%2C%20electronic%20music%20event%2C%20dramatic%20lighting%2C%20music%20album%20artwork&width=400&height=400&seq=album-simpler&orientation=squarish",
    tracks: [
      { id: "simpler-intro", title: "Simpler Days", duration: "3:25" },
      { id: "back-then", title: "Back Then", duration: "4:08" },
      { id: "nostalgia", title: "Nostalgia", duration: "3:52" },
      { id: "peace", title: "Peace", duration: "4:45" },
    ],
  },
];
