export interface EventCategory {
  title: string;
  prizeMoney: string;
  runnersUp: string;
  details?: string[];
}

export interface RegistrationDetails {
  menFee: string;
  womenFee: string;
  contactNumbers: string[];
}

export interface MyfEvent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  venue: string;
  status: "upcoming" | "ongoing" | "completed";
  prizePool: string;
  consolationPrize?: string;
  coverImage: string;
  categories: EventCategory[];
  registration: RegistrationDetails;
  description: string;
  collaborators?: string[];
  bannerImages: string[];
}

export const eventsData: MyfEvent[] = [
  {
    id: "evt-001",
    slug: "northeast-open-3x3-2026",
    title: "ALL NORTHEAST OPEN 3x3",
    subtitle: "MYF 4TH MEN & WOMEN BASKETBALL TOURNAMENT",
    startDate: "May 16, 2026",
    endDate: "May 17, 2026",
    venue: "Kokrajhar, Assam",
    status: "upcoming",
    prizePool: "₹1,00,000",
    consolationPrize: "₹20,000 (Top 2 Mens: ₹6,000 each | Top 2 Womens: ₹4,000 each)",
    coverImage: "/images/gallery/ne-open-1.png",
    categories: [
      {
        title: "Men Category",
        prizeMoney: "₹40,000",
        runnersUp: "₹20,000",
        details: ["Certificates & Trophies provided"],
      },
      {
        title: "Women Category",
        prizeMoney: "₹25,000",
        runnersUp: "₹15,000",
        details: ["Certificates & Trophies provided"],
      },
    ],
    registration: {
      menFee: "₹1200 / team",
      womenFee: "₹600 / team",
      contactNumbers: ["+91 9365978785", "+91 7086679509"],
    },
    description: "This isn't just another tournament—It's about empowering youth & building a stronger community through sports. Expect high energy, pure street intensity, and the best basketball talent from across the Northeast. Limited slots available, with no age limit.",
    collaborators: ["BTC GOV", "Gurukul National School, Basugaon", "Kushboo Kids Pre School, Kokrajhar", "IIAHM"],
    // Placeholder image array for an image gallery on the detail page
    bannerImages: [
      "/images/gallery/ne-open-1.png",
      "/images/gallery/ne-awards-1.png",
      "/images/gallery/youth-league-1.png", 
      "/images/gallery/republic-2.png"
    ]
  },
];
