import hs1 from '@/assets/headshot1.jpg';
import hs2 from '@/assets/headshot2.jpg';
import hs3 from '@/assets/headshot3.jpg';

export interface PaymentRecord {
  id: string;
  userName: string;
  userEmail: string;
  userAvatar?: string;
  masterclass: string;
  date: string; // e.g. "Mar 20, 2026"
  timestamp: string; // ISO date for filtering/sorting
  amount: number;
  status: 'successful' | 'refunded' | 'failed';
}

export const INITIAL_PAYMENTS: PaymentRecord[] = [
  {
    id: 'pay-1',
    userName: 'Amara Okafor',
    userEmail: 'amara.o@gmail.com',
    userAvatar: hs1,
    masterclass: 'Foundations of Gospel Bass',
    date: 'Mar 20, 2026',
    timestamp: '2026-03-20T10:00:00Z',
    amount: 349,
    status: 'successful',
  },
  {
    id: 'pay-2',
    userName: 'Daniel Mensah',
    userEmail: 'd.mensah@outlook.com',
    userAvatar: hs2,
    masterclass: 'Foundations of Gospel Bass',
    date: 'Mar 22, 2026',
    timestamp: '2026-03-22T14:30:00Z',
    amount: 349,
    status: 'successful',
  },
  {
    id: 'pay-3',
    userName: 'Grace Adeyemi',
    userEmail: 'grace.adeyemi@yahoo.com',
    userAvatar: hs3,
    masterclass: 'Advanced Worship Direction',
    date: 'Apr 2, 2026',
    timestamp: '2026-04-02T11:15:00Z',
    amount: 499,
    status: 'successful',
  },
  {
    id: 'pay-4',
    userName: 'Joshua Park',
    userEmail: 'joshua.park@gmail.com',
    userAvatar: hs3,
    masterclass: 'Foundations of Gospel Bass',
    date: 'Mar 28, 2026',
    timestamp: '2026-03-28T09:00:00Z',
    amount: 349,
    status: 'successful',
  },
  {
    id: 'pay-5',
    userName: 'Ruth Eze',
    userEmail: 'ruth.eze@gmail.com',
    masterclass: 'Advanced Worship Direction',
    date: 'Apr 8, 2026',
    timestamp: '2026-04-08T16:20:00Z',
    amount: 499,
    status: 'successful',
  },
  {
    id: 'pay-6',
    userName: 'Marcus Bell',
    userEmail: 'marcus.bell@icloud.com',
    userAvatar: hs1,
    masterclass: 'Rhythm Section Mastery',
    date: 'Dec 20, 2025',
    timestamp: '2025-12-20T15:00:00Z',
    amount: 299,
    status: 'refunded',
  },
  {
    id: 'pay-7',
    userName: 'Naomi Carter',
    userEmail: 'naomi.c@gmail.com',
    userAvatar: hs2,
    masterclass: 'Foundations of Gospel Bass',
    date: 'Apr 1, 2026',
    timestamp: '2026-04-01T10:45:00Z',
    amount: 349,
    status: 'successful',
  },
  {
    id: 'pay-8',
    userName: 'Elijah Brown',
    userEmail: 'elijah.brown@gmail.com',
    masterclass: 'Rhythm Section Mastery',
    date: 'Dec 28, 2025',
    timestamp: '2025-12-28T13:10:00Z',
    amount: 299,
    status: 'successful',
  },
  {
    id: 'pay-9',
    userName: 'Sade Lawal',
    userEmail: 'sade.lawal@gmail.com',
    masterclass: 'Foundations of Gospel Bass',
    date: 'Apr 5, 2026',
    timestamp: '2026-04-05T17:30:00Z',
    amount: 349,
    status: 'failed',
  },
  {
    id: 'pay-10',
    userName: 'Isaac Thompson',
    userEmail: 'isaac.t@gmail.com',
    masterclass: 'Advanced Worship Direction',
    date: 'Apr 15, 2026',
    timestamp: '2026-04-15T09:40:00Z',
    amount: 499,
    status: 'successful',
  },
];
