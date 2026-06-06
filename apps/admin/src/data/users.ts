import hs1 from '@/assets/headshot1.jpg';
import hs2 from '@/assets/headshot2.jpg';
import hs3 from '@/assets/headshot3.jpg';
import img1 from '@/assets/bassmasterclass1.jpg';
import img2 from '@/assets/basemasterclass2.jpg';
import img3 from '@/assets/isthisforyou1.png';
import img4 from '@/assets/servicesliveperformance.jpg';
import img5 from '@/assets/servicesmusicdirection.jpg';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface EnrolledCohort {
  masterclassId: number;
  title: string;
  image: string;
  status: 'active' | 'upcoming' | 'completed';
  enrolledDate: string;
  dateRange: string;   // e.g. "Apr 10, 2026 - May 22, 2026"
  price: number;
  sessionsTotal: number;
  sessionsAttended: number;
}

export type PaymentStatus = 'successful' | 'refunded' | 'failed';

export interface Payment {
  id: string;
  masterclass: string;
  date: string;
  amount: number;
  status: PaymentStatus;
}

export interface User {
  id: string;
  name: string;
  email: string;
  joined: string;         // display join date
  lastActive?: string;    // e.g. "May 15, 6:00 PM"
  cohorts: number;
  avatar?: string;
  phone?: string;
  location?: string;
  enrolledCohorts: EnrolledCohort[];
  payments: Payment[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const ALL_USERS: User[] = [
  {
    id: 'U1', name: 'Amara Okafor', email: 'amara.o@gmail.com',
    joined: 'Sep 12, 2025', lastActive: 'May 15, 6:00 PM', cohorts: 4, avatar: hs1,
    phone: '+1 (555) 201-4321', location: 'Atlanta, GA',
    enrolledCohorts: [
      { masterclassId: 1, title: 'Foundations of Gospel Bass', image: img1, status: 'upcoming', enrolledDate: 'Sep 12, 2025', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 349, sessionsTotal: 4, sessionsAttended: 2 },
      { masterclassId: 1, title: 'Foundations of Gospel Bass', image: img1, status: 'upcoming', enrolledDate: 'Sep 12, 2025', dateRange: 'Apr 10, 2026 - May 27, 2026', price: 349, sessionsTotal: 4, sessionsAttended: 1 },
      { masterclassId: 2, title: 'Tonality and Mastery',       image: img2, status: 'upcoming', enrolledDate: 'Sep 12, 2025', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 499, sessionsTotal: 3, sessionsAttended: 0 },
      { masterclassId: 3, title: 'Groove Playing',             image: img3, status: 'upcoming', enrolledDate: 'Sep 12, 2025', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 299, sessionsTotal: 3, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1',  masterclass: 'Foundations of Gospel Bass',  date: 'Mar 20, 2026', amount: 349, status: 'successful' },
      { id: 'p2',  masterclass: 'Foundations of Gospel Bass',  date: 'Mar 22, 2026', amount: 349, status: 'successful' },
      { id: 'p3',  masterclass: 'Advanced Worship Direction',  date: 'Apr 2, 2026',  amount: 499, status: 'successful' },
      { id: 'p4',  masterclass: 'Foundations of Gospel Bass',  date: 'Mar 28, 2026', amount: 349, status: 'successful' },
      { id: 'p5',  masterclass: 'Advanced Worship Direction',  date: 'Apr 8, 2026',  amount: 499, status: 'successful' },
      { id: 'p6',  masterclass: 'Rhythm Section Mastery',      date: 'Dec 20, 2025', amount: 299, status: 'refunded'   },
      { id: 'p7',  masterclass: 'Foundations of Gospel Bass',  date: 'Apr 1, 2026',  amount: 349, status: 'successful' },
      { id: 'p8',  masterclass: 'Rhythm Section Mastery',      date: 'Dec 28, 2025', amount: 299, status: 'successful' },
      { id: 'p9',  masterclass: 'Foundations of Gospel Bass',  date: 'Apr 5, 2026',  amount: 349, status: 'failed'     },
      { id: 'p10', masterclass: 'Advanced Worship Direction',  date: 'Apr 15, 2026', amount: 499, status: 'successful' },
    ],
  },
  {
    id: 'U2', name: 'Daniel Mensah', email: 'd.mensah@outlook.com',
    joined: 'Oct 3, 2025', lastActive: 'May 10, 4:30 PM', cohorts: 1, avatar: hs2,
    phone: '+1 (555) 348-9002', location: 'Houston, TX',
    enrolledCohorts: [
      { masterclassId: 4, title: 'The Art of Live Performance', image: img4, status: 'active', enrolledDate: 'Oct 3, 2025', dateRange: 'Apr 20, 2026 - Jun 1, 2026', price: 399, sessionsTotal: 5, sessionsAttended: 3 },
    ],
    payments: [
      { id: 'p1', masterclass: 'The Art of Live Performance', date: 'Oct 3, 2025', amount: 399, status: 'successful' },
    ],
  },
  {
    id: 'U3', name: 'Grace Adeyemi', email: 'grace.adeyemi@yahoo.com',
    joined: 'Oct 21, 2025', cohorts: 1,
    phone: '+1 (555) 112-6700', location: 'Charlotte, NC',
    enrolledCohorts: [
      { masterclassId: 2, title: 'Advanced Worship Direction', image: img2, status: 'upcoming', enrolledDate: 'Oct 21, 2025', dateRange: 'May 15, 2026 - Jun 26, 2026', price: 499, sessionsTotal: 3, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Advanced Worship Direction', date: 'Oct 21, 2025', amount: 499, status: 'successful' },
    ],
  },
  {
    id: 'U4', name: 'Joshua Park', email: 'joshua.park@gmail.com',
    joined: 'Nov 8, 2025', cohorts: 1, avatar: hs3,
    location: 'Los Angeles, CA',
    enrolledCohorts: [
      { masterclassId: 1, title: 'Foundations of Gospel Bass', image: img1, status: 'active', enrolledDate: 'Nov 8, 2025', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 349, sessionsTotal: 4, sessionsAttended: 1 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Foundations of Gospel Bass', date: 'Nov 8, 2025', amount: 349, status: 'successful' },
    ],
  },
  {
    id: 'U5', name: 'Ruth Eze', email: 'ruth.eze@gmail.com',
    joined: 'Dec 1, 2025', cohorts: 1, avatar: hs2,
    phone: '+44 7911 234567', location: 'London, UK',
    enrolledCohorts: [
      { masterclassId: 3, title: 'Rhythm Section Mastery', image: img3, status: 'completed', enrolledDate: 'Dec 1, 2025', dateRange: 'Jan 12, 2026 - Feb 23, 2026', price: 299, sessionsTotal: 3, sessionsAttended: 3 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Rhythm Section Mastery', date: 'Dec 1, 2025', amount: 299, status: 'successful' },
    ],
  },
  {
    id: 'U6', name: 'Marcus Bell', email: 'marcus.bell@icloud.com',
    joined: 'Jan 15, 2026', cohorts: 1,
    phone: '+1 (555) 900-1122', location: 'Chicago, IL',
    enrolledCohorts: [
      { masterclassId: 4, title: 'The Art of Live Performance', image: img4, status: 'active', enrolledDate: 'Jan 15, 2026', dateRange: 'Apr 20, 2026 - Jun 1, 2026', price: 399, sessionsTotal: 5, sessionsAttended: 1 },
    ],
    payments: [
      { id: 'p1', masterclass: 'The Art of Live Performance', date: 'Jan 15, 2026', amount: 399, status: 'successful' },
    ],
  },
  {
    id: 'U7', name: 'Naomi Carter', email: 'naomi.c@gmail.com',
    joined: 'Feb 4, 2026', cohorts: 1, avatar: hs1,
    location: 'Nashville, TN',
    enrolledCohorts: [
      { masterclassId: 1, title: 'Foundations of Gospel Bass', image: img1, status: 'active', enrolledDate: 'Feb 4, 2026', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 349, sessionsTotal: 4, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Foundations of Gospel Bass', date: 'Feb 4, 2026', amount: 349, status: 'successful' },
    ],
  },
  {
    id: 'U8', name: 'Elijah Brown', email: 'elijah.brown@gmail.com',
    joined: 'Feb 19, 2026', cohorts: 1,
    phone: '+1 (555) 745-3390', location: 'Dallas, TX',
    enrolledCohorts: [
      { masterclassId: 2, title: 'Advanced Worship Direction', image: img2, status: 'upcoming', enrolledDate: 'Feb 19, 2026', dateRange: 'May 15, 2026 - Jun 26, 2026', price: 499, sessionsTotal: 3, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Advanced Worship Direction', date: 'Feb 19, 2026', amount: 499, status: 'successful' },
    ],
  },
  {
    id: 'U9', name: 'Sade Lawal', email: 'sade.lawal@gmail.com',
    joined: 'Mar 11, 2026', cohorts: 1,
    phone: '+234 802 345 6789', location: 'Lagos, Nigeria',
    enrolledCohorts: [
      { masterclassId: 1, title: 'Foundations of Gospel Bass', image: img1, status: 'active', enrolledDate: 'Mar 11, 2026', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 349, sessionsTotal: 4, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Foundations of Gospel Bass', date: 'Mar 11, 2026', amount: 349, status: 'successful' },
    ],
  },
  {
    id: 'U10', name: 'Isaac Thompson', email: 'isaac.t@gmail.com',
    joined: 'Apr 2, 2026', cohorts: 1,
    phone: '+1 (555) 627-8841', location: 'Atlanta, GA',
    enrolledCohorts: [
      { masterclassId: 1, title: 'Foundations of Gospel Bass', image: img1, status: 'active', enrolledDate: 'Apr 2, 2026', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 349, sessionsTotal: 4, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Foundations of Gospel Bass', date: 'Apr 2, 2026', amount: 349, status: 'successful' },
    ],
  },
  {
    id: 'U11', name: 'Tina Adebayo', email: 'tina.adebayo@gmail.com',
    joined: 'Apr 5, 2026', cohorts: 2, avatar: hs3,
    phone: '+1 (555) 342-5580', location: 'Brooklyn, NY',
    enrolledCohorts: [
      { masterclassId: 2, title: 'Advanced Worship Direction',   image: img2, status: 'upcoming', enrolledDate: 'Apr 5, 2026', dateRange: 'May 15, 2026 - Jun 26, 2026', price: 499, sessionsTotal: 3, sessionsAttended: 0 },
      { masterclassId: 5, title: 'Music Direction Fundamentals', image: img5, status: 'upcoming', enrolledDate: 'Apr 5, 2026', dateRange: 'Jun 5, 2026 - Jul 17, 2026',  price: 449, sessionsTotal: 4, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Advanced Worship Direction',   date: 'Apr 5, 2026', amount: 499, status: 'successful' },
      { id: 'p2', masterclass: 'Music Direction Fundamentals', date: 'Apr 5, 2026', amount: 449, status: 'successful' },
    ],
  },
  {
    id: 'U12', name: 'Kevin Park', email: 'kevin.park@gmail.com',
    joined: 'Apr 7, 2026', cohorts: 1, avatar: hs1,
    location: 'Seattle, WA',
    enrolledCohorts: [
      { masterclassId: 4, title: 'The Art of Live Performance', image: img4, status: 'active', enrolledDate: 'Apr 7, 2026', dateRange: 'Apr 20, 2026 - Jun 1, 2026', price: 399, sessionsTotal: 5, sessionsAttended: 1 },
    ],
    payments: [
      { id: 'p1', masterclass: 'The Art of Live Performance', date: 'Apr 7, 2026', amount: 399, status: 'successful' },
    ],
  },
  {
    id: 'U13', name: 'Chioma Eze', email: 'chioma.eze@gmail.com',
    joined: 'Apr 9, 2026', cohorts: 1, avatar: hs2,
    phone: '+234 803 456 7890', location: 'Abuja, Nigeria',
    enrolledCohorts: [
      { masterclassId: 4, title: 'The Art of Live Performance', image: img4, status: 'active', enrolledDate: 'Apr 9, 2026', dateRange: 'Apr 20, 2026 - Jun 1, 2026', price: 399, sessionsTotal: 5, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'The Art of Live Performance', date: 'Apr 9, 2026', amount: 399, status: 'successful' },
    ],
  },
  {
    id: 'U14', name: 'Darius Fowler', email: 'darius.f@gmail.com',
    joined: 'Apr 12, 2026', cohorts: 3,
    phone: '+1 (555) 908-2231', location: 'Memphis, TN',
    enrolledCohorts: [
      { masterclassId: 1, title: 'Foundations of Gospel Bass',  image: img1, status: 'active',   enrolledDate: 'Apr 12, 2026', dateRange: 'Apr 10, 2026 - May 22, 2026', price: 349, sessionsTotal: 4, sessionsAttended: 0 },
      { masterclassId: 4, title: 'The Art of Live Performance', image: img4, status: 'active',   enrolledDate: 'Apr 12, 2026', dateRange: 'Apr 20, 2026 - Jun 1, 2026',  price: 399, sessionsTotal: 5, sessionsAttended: 0 },
      { masterclassId: 2, title: 'Advanced Worship Direction',  image: img2, status: 'upcoming', enrolledDate: 'Apr 12, 2026', dateRange: 'May 15, 2026 - Jun 26, 2026', price: 499, sessionsTotal: 3, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Foundations of Gospel Bass',  date: 'Apr 12, 2026', amount: 349, status: 'successful' },
      { id: 'p2', masterclass: 'The Art of Live Performance', date: 'Apr 12, 2026', amount: 399, status: 'successful' },
      { id: 'p3', masterclass: 'Advanced Worship Direction',  date: 'Apr 12, 2026', amount: 499, status: 'successful' },
    ],
  },
  {
    id: 'U15', name: 'Priya Sharma', email: 'priya.sharma@gmail.com',
    joined: 'Apr 14, 2026', cohorts: 1, avatar: hs3,
    location: 'Toronto, Canada',
    enrolledCohorts: [
      { masterclassId: 6, title: 'Studio Production for Worshippers', image: img5, status: 'completed', enrolledDate: 'Apr 14, 2026', dateRange: 'Feb 1, 2026 - Mar 15, 2026', price: 529, sessionsTotal: 6, sessionsAttended: 6 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Studio Production for Worshippers', date: 'Apr 14, 2026', amount: 529, status: 'successful' },
    ],
  },
  {
    id: 'U16', name: 'Felix Obi', email: 'felix.obi@gmail.com',
    joined: 'Apr 18, 2026', cohorts: 2, avatar: hs1,
    phone: '+234 801 234 5678', location: 'Port Harcourt, Nigeria',
    enrolledCohorts: [
      { masterclassId: 6, title: 'Studio Production for Worshippers', image: img5, status: 'completed', enrolledDate: 'Apr 18, 2026', dateRange: 'Feb 1, 2026 - Mar 15, 2026', price: 529, sessionsTotal: 6, sessionsAttended: 6 },
      { masterclassId: 4, title: 'The Art of Live Performance',       image: img4, status: 'active',    enrolledDate: 'Apr 18, 2026', dateRange: 'Apr 20, 2026 - Jun 1, 2026',  price: 399, sessionsTotal: 5, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Studio Production for Worshippers', date: 'Apr 18, 2026', amount: 529, status: 'successful' },
      { id: 'p2', masterclass: 'The Art of Live Performance',        date: 'Apr 18, 2026', amount: 399, status: 'successful' },
    ],
  },
  {
    id: 'U17', name: 'Nadia Kamara', email: 'nadia.kamara@gmail.com',
    joined: 'Apr 20, 2026', cohorts: 1, avatar: hs2,
    location: 'Accra, Ghana',
    enrolledCohorts: [
      { masterclassId: 6, title: 'Studio Production for Worshippers', image: img5, status: 'completed', enrolledDate: 'Apr 20, 2026', dateRange: 'Feb 1, 2026 - Mar 15, 2026', price: 529, sessionsTotal: 6, sessionsAttended: 6 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Studio Production for Worshippers', date: 'Apr 20, 2026', amount: 529, status: 'successful' },
    ],
  },
  {
    id: 'U18', name: 'Jordan Cross', email: 'jordan.cross@gmail.com',
    joined: 'Apr 22, 2026', cohorts: 1,
    phone: '+1 (555) 123-4567', location: 'Phoenix, AZ',
    enrolledCohorts: [
      { masterclassId: 6, title: 'Studio Production for Worshippers', image: img5, status: 'completed', enrolledDate: 'Apr 22, 2026', dateRange: 'Feb 1, 2026 - Mar 15, 2026', price: 529, sessionsTotal: 6, sessionsAttended: 6 },
    ],
    payments: [
      { id: 'p1', masterclass: 'Studio Production for Worshippers', date: 'Apr 22, 2026', amount: 529, status: 'refunded' },
    ],
  },
  {
    id: 'U19', name: 'Sarah Mensah', email: 'sarah.mensah@gmail.com',
    joined: 'Apr 25, 2026', cohorts: 2, avatar: hs3,
    phone: '+233 20 987 6543', location: 'Kumasi, Ghana',
    enrolledCohorts: [
      { masterclassId: 4, title: 'The Art of Live Performance', image: img4, status: 'active',   enrolledDate: 'Apr 25, 2026', dateRange: 'Apr 20, 2026 - Jun 1, 2026',  price: 399, sessionsTotal: 5, sessionsAttended: 0 },
      { masterclassId: 2, title: 'Advanced Worship Direction',  image: img2, status: 'upcoming', enrolledDate: 'Apr 25, 2026', dateRange: 'May 15, 2026 - Jun 26, 2026', price: 499, sessionsTotal: 3, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'The Art of Live Performance', date: 'Apr 25, 2026', amount: 399, status: 'successful' },
      { id: 'p2', masterclass: 'Advanced Worship Direction',  date: 'Apr 25, 2026', amount: 499, status: 'successful' },
    ],
  },
  {
    id: 'U20', name: 'Tobi Adesanya', email: 'tobi.a@gmail.com',
    joined: 'Apr 28, 2026', cohorts: 1,
    phone: '+234 809 876 5432', location: 'Ibadan, Nigeria',
    enrolledCohorts: [
      { masterclassId: 4, title: 'The Art of Live Performance', image: img4, status: 'active', enrolledDate: 'Apr 28, 2026', dateRange: 'Apr 20, 2026 - Jun 1, 2026', price: 399, sessionsTotal: 5, sessionsAttended: 0 },
    ],
    payments: [
      { id: 'p1', masterclass: 'The Art of Live Performance', date: 'Apr 28, 2026', amount: 399, status: 'successful' },
    ],
  },
];
