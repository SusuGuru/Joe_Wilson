import img1 from '@/assets/bassmasterclass1.jpg';
import img2 from '@/assets/basemasterclass2.jpg';
import img3 from '@/assets/isthisforyou1.png';
import img4 from '@/assets/servicesliveperformance.jpg';
import img5 from '@/assets/servicesmusicdirection.jpg';
import img6 from '@/assets/servicesmusicproduction.jpg';
import hs1 from '@/assets/headshot1.jpg';
import hs2 from '@/assets/headshot2.jpg';
import hs3 from '@/assets/headshot3.jpg';

// Cycle through headshots for mock data
const headshots = [hs1, hs2, hs3];
const hs = (i: number) => headshots[i % headshots.length];

// ─── Types ────────────────────────────────────────────────────────────────────

export type Status = 'active' | 'upcoming' | 'completed';

export interface Resource {
  name: string;
  size: string;
}

export interface Session {
  id: number;
  date: string;      // e.g. "15"
  month: string;     // e.g. "MAY"
  title: string;
  datetime: string;  // e.g. "May 15, 6:00 PM"
  status: Status;
  liveLink?: string;
  replayLink?: string;
  resources: Resource[];
}

export interface Enrollee {
  name: string;
  email: string;
  joinedDate: string;
  avatar: string;
}

export interface Masterclass {
  id: number;
  title: string;
  description: string;
  image: string;
  status: Status;
  startDate: string;
  endDate: string;
  enrolled: number;
  sessions: number;
  price: number;
  sessionsData: Session[];
  enrollees: Enrollee[];
  infoText: string;
}

// ─── Status config ────────────────────────────────────────────────────────────

export const statusConfig: Record<Status, { label: string; dot: string; pill: string }> = {
  active:    { label: 'Active',    dot: 'bg-emerald-400', pill: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  upcoming:  { label: 'Upcoming',  dot: 'bg-brand',       pill: 'bg-blue-50 text-brand border border-blue-200' },
  completed: { label: 'Completed', dot: 'bg-gray-400',    pill: 'bg-gray-100 text-gray-600 border border-gray-200' },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const masterclasses: Masterclass[] = [
  {
    id: 1,
    title: 'Foundations of Gospel Bass',
    description: 'A 6-week immersive cohort covering groove, walking lines, and worship dynamics for the modern gospel musician.',
    image: img1,
    status: 'active',
    startDate: 'Apr 10, 2026',
    endDate: 'May 22, 2026',
    enrolled: 5,
    sessions: 4,
    price: 349,
    infoText: 'This cohort is designed for intermediate bass players who want to level up their gospel vocabulary. Students should have basic music theory knowledge and be comfortable reading simple charts.',
    sessionsData: [
      {
        id: 1, date: '10', month: 'APR', title: 'The Gospel Groove Foundation',
        datetime: 'Apr 10, 6:00 PM', status: 'completed',
        liveLink: 'https://zoom.us/j/example',
        resources: [
          { name: 'Groove Workbook.pdf', size: '2.4 MB' },
          { name: 'Backing Tracks.zip', size: '14 MB' },
        ],
      },
      {
        id: 2, date: '17', month: 'APR', title: 'Walking Lines & Chord Tones',
        datetime: 'Apr 17, 6:00 PM', status: 'completed',
        resources: [{ name: 'Walking Lines Chart.pdf', size: '1.1 MB' }],
      },
      {
        id: 3, date: '1', month: 'MAY', title: 'Worship Dynamics & Space',
        datetime: 'May 1, 6:00 PM', status: 'active',
        liveLink: 'https://zoom.us/j/example2',
        resources: [],
      },
      {
        id: 4, date: '22', month: 'MAY', title: 'Live Cohort Showcase',
        datetime: 'May 22, 6:00 PM', status: 'upcoming',
        resources: [],
      },
    ],
    enrollees: [
      { name: 'Isaac Thompson',  email: 'isaac@example.com',  joinedDate: 'Apr 1, 2026',  avatar: hs(0) },
      { name: 'Ruth Eze',        email: 'ruth@example.com',   joinedDate: 'Apr 3, 2026',  avatar: hs(1) },
      { name: 'Sade Lawal',      email: 'sade@example.com',   joinedDate: 'Apr 3, 2026',  avatar: hs(2) },
      { name: 'Grace Adeyemi',   email: 'grace@example.com',  joinedDate: 'Apr 5, 2026',  avatar: hs(0) },
      { name: 'Naomi Carter',    email: 'naomi@example.com',  joinedDate: 'Apr 7, 2026',  avatar: hs(1) },
    ],
  },
  {
    id: 2,
    title: 'Advanced Worship Direction',
    description: 'An intensive for music directors leading praise teams — arrangement, rehearsal flow, and live communication.',
    image: img2,
    status: 'upcoming',
    startDate: 'May 15, 2026',
    endDate: 'Jun 26, 2026',
    enrolled: 3,
    sessions: 3,
    price: 499,
    infoText: 'This masterclass is built for experienced musicians who are stepping into or already serving in a music director role. Expect deep dives into arrangement, rehearsal leadership, and real-time band communication.',
    sessionsData: [
      {
        id: 1, date: '15', month: 'MAY', title: 'The MD Mindset',
        datetime: 'May 15, 6:00 PM', status: 'upcoming',
        liveLink: 'https://zoom.us/j/md1',
        resources: [
          { name: 'Tone Cheatsheet.pdf', size: '1.2 MB' },
          { name: 'Reference Tracks.pdf', size: '1.2 MB' },
        ],
      },
      {
        id: 2, date: '22', month: 'MAY', title: 'Arranging On The Fly',
        datetime: 'May 22, 6:00 PM', status: 'upcoming',
        resources: [],
      },
      {
        id: 3, date: '29', month: 'MAY', title: 'Cueing & Hand Signals',
        datetime: 'May 29, 6:00 PM', status: 'upcoming',
        resources: [],
      },
    ],
    enrollees: [
      { name: 'Pastor Williams', email: 'pastor@church.com', joinedDate: 'Apr 18, 2026', avatar: hs(0) },
      { name: 'Tina Adebayo',    email: 'tina@example.com',  joinedDate: 'Apr 20, 2026', avatar: hs(1) },
      { name: 'David Osei',      email: 'david@example.com', joinedDate: 'Apr 22, 2026', avatar: hs(2) },
    ],
  },
  {
    id: 3,
    title: 'Rhythm Section Mastery',
    description: "Lock in with drums, keys, and guitar — taught from the bassist's perspective.",
    image: img3,
    status: 'completed',
    startDate: 'Jan 12, 2026',
    endDate: 'Feb 23, 2026',
    enrolled: 2,
    sessions: 3,
    price: 299,
    infoText: 'A completed cohort exploring the relationship between bass, drums, keys, and guitar in a worship context. Students learned how to listen, lock in, and lead from the bottom up.',
    sessionsData: [
      {
        id: 1, date: '12', month: 'JAN', title: 'Locking With the Drummer',
        datetime: 'Jan 12, 6:00 PM', status: 'completed',
        resources: [{ name: 'Rhythm Worksheet.pdf', size: '900 KB' }],
      },
      {
        id: 2, date: '26', month: 'JAN', title: 'Keys & Bass Voicings',
        datetime: 'Jan 26, 6:00 PM', status: 'completed',
        resources: [],
      },
      {
        id: 3, date: '23', month: 'FEB', title: 'Guitar & Bass Interplay',
        datetime: 'Feb 23, 6:00 PM', status: 'completed',
        resources: [{ name: 'Interplay Guide.pdf', size: '1.5 MB' }],
      },
    ],
    enrollees: [
      { name: 'Mark Okonkwo', email: 'mark@example.com', joinedDate: 'Jan 5, 2026',  avatar: hs(0) },
      { name: 'Lisa Chen',    email: 'lisa@example.com', joinedDate: 'Jan 6, 2026',  avatar: hs(1) },
    ],
  },
  {
    id: 4,
    title: 'The Art of Live Performance',
    description: 'Stage presence, setlist flow, and real-time communication with your band and congregation.',
    image: img4,
    status: 'active',
    startDate: 'Apr 20, 2026',
    endDate: 'Jun 1, 2026',
    enrolled: 7,
    sessions: 5,
    price: 399,
    infoText: 'Focused on the performance side of worship ministry — building confidence on stage, reading rooms, and creating setlists that serve both the music and the message.',
    sessionsData: [
      { id: 1, date: '20', month: 'APR', title: 'Stage Presence 101',       datetime: 'Apr 20, 6:00 PM', status: 'completed', resources: [] },
      { id: 2, date: '27', month: 'APR', title: 'Setlist Architecture',     datetime: 'Apr 27, 6:00 PM', status: 'completed', resources: [{ name: 'Setlist Templates.pdf', size: '800 KB' }] },
      { id: 3, date: '4',  month: 'MAY', title: 'Reading the Room',         datetime: 'May 4, 6:00 PM',  status: 'active',    resources: [] },
      { id: 4, date: '18', month: 'MAY', title: 'Band Communication Live',  datetime: 'May 18, 6:00 PM', status: 'upcoming',  resources: [] },
      { id: 5, date: '1',  month: 'JUN', title: 'Capstone Performance',     datetime: 'Jun 1, 6:00 PM',  status: 'upcoming',  resources: [] },
    ],
    enrollees: [
      { name: 'James Ola',       email: 'james@example.com',  joinedDate: 'Apr 10, 2026', avatar: hs(0) },
      { name: 'Sarah Mensah',    email: 'sarah@example.com',  joinedDate: 'Apr 11, 2026', avatar: hs(1) },
      { name: 'Kevin Park',      email: 'kevin@example.com',  joinedDate: 'Apr 12, 2026', avatar: hs(2) },
      { name: 'Amara Diallo',    email: 'amara@example.com',  joinedDate: 'Apr 13, 2026', avatar: hs(0) },
      { name: 'Tobi Adesanya',   email: 'tobi@example.com',   joinedDate: 'Apr 14, 2026', avatar: hs(1) },
      { name: 'Chioma Eze',      email: 'chioma@example.com', joinedDate: 'Apr 15, 2026', avatar: hs(2) },
      { name: 'Darius Fowler',   email: 'darius@example.com', joinedDate: 'Apr 16, 2026', avatar: hs(0) },
    ],
  },
  {
    id: 5,
    title: 'Music Direction Fundamentals',
    description: 'Build a strong foundation in choir direction, reading charts, and leading a worship team.',
    image: img5,
    status: 'upcoming',
    startDate: 'Jun 5, 2026',
    endDate: 'Jul 17, 2026',
    enrolled: 0,
    sessions: 4,
    price: 449,
    infoText: 'An entry-level music direction cohort. No prior MD experience required — just a passion for leading worship and a desire to sharpen your skills.',
    sessionsData: [
      { id: 1, date: '5',  month: 'JUN', title: 'Reading Chord Charts',       datetime: 'Jun 5, 6:00 PM',  status: 'upcoming', resources: [] },
      { id: 2, date: '19', month: 'JUN', title: 'Directing Vocals & Choir',   datetime: 'Jun 19, 6:00 PM', status: 'upcoming', resources: [] },
      { id: 3, date: '3',  month: 'JUL', title: 'Rehearsal Planning',         datetime: 'Jul 3, 6:00 PM',  status: 'upcoming', resources: [] },
      { id: 4, date: '17', month: 'JUL', title: 'Leading Under Pressure',     datetime: 'Jul 17, 6:00 PM', status: 'upcoming', resources: [] },
    ],
    enrollees: [],
  },
  {
    id: 6,
    title: 'Studio Production for Worshippers',
    description: 'Take your worship recordings from raw tracks to radio-ready — DAW setup, mixing, and mastering.',
    image: img6,
    status: 'completed',
    startDate: 'Feb 1, 2026',
    endDate: 'Mar 15, 2026',
    enrolled: 4,
    sessions: 6,
    price: 529,
    infoText: 'Completed cohort covering the full production pipeline — from recording setup to final mix. Students worked in Logic Pro X and Pro Tools.',
    sessionsData: [
      { id: 1, date: '1',  month: 'FEB', title: 'DAW Setup & Signal Flow',    datetime: 'Feb 1, 6:00 PM',  status: 'completed', resources: [{ name: 'DAW Guide.pdf', size: '3.1 MB' }] },
      { id: 2, date: '8',  month: 'FEB', title: 'Recording Vocals & Drums',   datetime: 'Feb 8, 6:00 PM',  status: 'completed', resources: [] },
      { id: 3, date: '15', month: 'FEB', title: 'EQ & Compression Basics',    datetime: 'Feb 15, 6:00 PM', status: 'completed', resources: [] },
      { id: 4, date: '22', month: 'FEB', title: 'Mixing a Worship Track',     datetime: 'Feb 22, 6:00 PM', status: 'completed', resources: [{ name: 'Mix Template.als', size: '2.8 MB' }] },
      { id: 5, date: '1',  month: 'MAR', title: 'Mastering Fundamentals',     datetime: 'Mar 1, 6:00 PM',  status: 'completed', resources: [] },
      { id: 6, date: '15', month: 'MAR', title: 'Release & Distribution',     datetime: 'Mar 15, 6:00 PM', status: 'completed', resources: [] },
    ],
    enrollees: [
      { name: 'Felix Obi',     email: 'felix@example.com',  joinedDate: 'Jan 25, 2026', avatar: hs(0) },
      { name: 'Nadia Kamara',  email: 'nadia@example.com',  joinedDate: 'Jan 26, 2026', avatar: hs(1) },
      { name: 'Jordan Cross',  email: 'jordan@example.com', joinedDate: 'Jan 28, 2026', avatar: hs(2) },
      { name: 'Priya Sharma',  email: 'priya@example.com',  joinedDate: 'Jan 30, 2026', avatar: hs(0) },
    ],
  },
];
