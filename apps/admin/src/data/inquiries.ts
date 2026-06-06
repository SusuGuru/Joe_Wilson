export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string; // e.g. "Apr 18, 2026"
  timestamp: string; // ISO string for sorting
  type: 'booking' | 'general';
  status: 'open' | 'closed';
}

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Pastor Williams',
    email: 'pwilliams@gracechapel.org',
    phone: '+1 (555) 890-1234',
    message: "We'd love to have you direct music for our annual conference in July. Please share your booking package.",
    date: 'Apr 18, 2026',
    timestamp: '2026-04-18T10:30:00Z',
    type: 'booking',
    status: 'open',
  },
  {
    id: 'inq-2',
    name: 'Tina Adebayo',
    email: 'tina.adebayo@gmail.com',
    phone: '+234 803 123 4567',
    message: "Will the Foundations cohort run again in the fall? I missed the enrollment window.",
    date: 'Apr 17, 2026',
    timestamp: '2026-04-17T16:15:00Z',
    type: 'general',
    status: 'open',
  },
  {
    id: 'inq-3',
    name: 'Mount Zion AV Team',
    email: 'av-team@mountzion.org',
    phone: '+1 (555) 432-1098',
    message: "Inquiring about a 2-day workshop with our rhythm section.Budget approved.",
    date: 'Apr 15, 2026',
    timestamp: '2026-04-15T11:00:00Z',
    type: 'booking',
    status: 'open',
  },
  {
    id: 'inq-4',
    name: 'Kevin Brooks',
    email: 'k.brooks@gmail.com',
    message: "Loved your last release. Are session bass tracks available for hire?",
    date: 'Apr 12, 2026',
    timestamp: '2026-04-12T09:45:00Z',
    type: 'general',
    status: 'open',
  },
  {
    id: 'inq-5',
    name: 'Hope Center Lagos',
    email: 'contact@hopecenterlagos.org',
    message: "Booking request for a 3-night revival in October. International travel covered.",
    date: 'Apr 9, 2026',
    timestamp: '2026-04-09T14:30:00Z',
    type: 'booking',
    status: 'open',
  }
];
