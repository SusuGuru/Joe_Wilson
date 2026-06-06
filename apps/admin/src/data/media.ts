export interface MediaItem {
  id: string;
  name: string;
  size: string;
  sizeBytes: number;
  date: string; // e.g. "Apr 1, 2026"
  timestamp: string; // ISO date for sorting/filtering
  type: 'document' | 'audio' | 'image';
}

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'm-1',
    name: 'Tone Cheatsheet.pdf',
    size: '1.2 MB',
    sizeBytes: 1200000,
    date: 'Apr 1, 2026',
    timestamp: '2026-04-01T10:00:00Z',
    type: 'document',
  },
  {
    id: 'm-2',
    name: 'Reference Tracks.zip',
    size: '48 MB',
    sizeBytes: 48000000,
    date: 'Apr 1, 2026',
    timestamp: '2026-04-01T11:30:00Z',
    type: 'audio',
  },
  {
    id: 'm-3',
    name: 'Hero Portrait.jpg',
    size: '3.4 MB',
    sizeBytes: 3400000,
    date: 'Mar 28, 2026',
    timestamp: '2026-03-28T09:15:00Z',
    type: 'image',
  },
  {
    id: 'm-4',
    name: 'Groove Patterns.pdf',
    size: '890 KB',
    sizeBytes: 890000,
    date: 'Apr 8, 2026',
    timestamp: '2026-04-08T15:20:00Z',
    type: 'document',
  },
  {
    id: 'm-5',
    name: 'Live Worship Demo.mp3',
    size: '12 MB',
    sizeBytes: 12000000,
    date: 'Apr 10, 2026',
    timestamp: '2026-04-10T14:00:00Z',
    type: 'audio',
  },
  {
    id: 'm-6',
    name: 'Stage Photo Set.zip',
    size: '62 MB',
    sizeBytes: 62000000,
    date: 'Mar 15, 2026',
    timestamp: '2026-03-15T16:45:00Z',
    type: 'image',
  },
  {
    id: 'm-7',
    name: 'Press Kit 2026.pdf',
    size: '5.1 MB',
    sizeBytes: 5100000,
    date: 'Feb 20, 2026',
    timestamp: '2026-02-20T10:10:00Z',
    type: 'document',
  },
  {
    id: 'm-8',
    name: 'Walking Lines Practice.mp3',
    size: '8.7 MB',
    sizeBytes: 8700000,
    date: 'Apr 12, 2026',
    timestamp: '2026-04-12T13:00:00Z',
    type: 'audio',
  },
];
