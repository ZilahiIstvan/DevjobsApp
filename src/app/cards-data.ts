export interface CardsData {
  id: number;
  compIcon: string;
  compIconBg: string;
  posted: string;
  jobType: string;
  jobTitle: string;
  jobSubTitle: string;
  jobLocation: string;
  website: string;
  apply: string;
  description: string;
  requirements: { content: string; items: string[] };
  role: { content: string; items: string[] };
}
