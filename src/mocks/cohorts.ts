export interface Session {
  id: string;
  title: string;
}

export interface Resource {
  id: string;
  title: string;
  fileSize: string;
}

export interface Cohort {
  id: string;
  title: string;
  description: string;
  image: string;
  status: "ACTIVE" | "COMPLETED";
  sessions: number;
  endDate: string;
  sessionList?: Session[];
  resourceList?: Resource[];
}

const mockSessions: Session[] = [
  { id: "s1", title: "HELLO" },
  { id: "s2", title: "SAYING THINGS" },
  { id: "s3", title: "FIELD OF JOY" },
  { id: "s4", title: "ALL THE SAME" },
  { id: "s5", title: "HELLO" },
  { id: "s6", title: "SAYING THINGS" },
  { id: "s7", title: "FIELD OF JOY" },
  { id: "s8", title: "ALL THE SAME" }
];

const mockResources: Resource[] = [
  { id: "r1", title: "Groove Charts.pdf", fileSize: "PDF • 4.2 MB" },
  { id: "r2", title: "Groove Charts.pdf", fileSize: "PDF • 4.2 MB" },
  { id: "r3", title: "Groove Charts.pdf", fileSize: "PDF • 4.2 MB" },
  { id: "r4", title: "Groove Charts.pdf", fileSize: "PDF • 4.2 MB" }
];

export const cohorts: Cohort[] = [
  {
    id: "1",
    title: "Advanced Sound Design",
    description: "Master the architecture of synthesis and complex signal routing for film and gaming scores.",
    image: "https://images.unsplash.com/photo-1516280440502-a2ce31cb4f0a?q=80&w=2070&auto=format&fit=crop",
    status: "ACTIVE",
    sessions: 12,
    endDate: "MAY 15",
    sessionList: mockSessions,
    resourceList: mockResources
  },
  {
    id: "2",
    title: "Modern Jazz Theory",
    description: "Master the architecture of synthesis and complex signal routing for film and gaming scores.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2069&auto=format&fit=crop",
    status: "ACTIVE",
    sessions: 12,
    endDate: "MAY 15"
  },
  {
    id: "3",
    title: "Scoring For Film",
    description: "Master the architecture of synthesis and complex signal routing for film and gaming scores.",
    image: "https://images.unsplash.com/photo-1520689445100-2e861d9a04a3?q=80&w=2070&auto=format&fit=crop",
    status: "ACTIVE",
    sessions: 12,
    endDate: "MAY 15"
  },
  {
    id: "4",
    title: "Vocal Performance",
    description: "Master the architecture of synthesis and complex signal routing for film and gaming scores.",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop",
    status: "COMPLETED",
    sessions: 12,
    endDate: "MAY 15"
  },
  {
    id: "5",
    title: "Bass Mastery",
    description: "Master the architecture of synthesis and complex signal routing for film and gaming scores.",
    image: "https://images.unsplash.com/photo-1525926477800-7a3aa6732dc2?q=80&w=2070&auto=format&fit=crop",
    status: "COMPLETED",
    sessions: 12,
    endDate: "MAY 15"
  },
  {
    id: "6",
    title: "Advanced Sound Design",
    description: "Master the architecture of synthesis and complex signal routing for film and gaming scores.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    status: "COMPLETED",
    sessions: 12,
    endDate: "MAY 15"
  }
];
