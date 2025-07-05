export type Content = {
  id: string;
  type: "article" | "image" | "video";
  title: string;
  description?: string;
  language: "en" | "bn" | "ar" | "ur";
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  content?: string;
  author: string;
  date: string;
};

export const mockContent: Content[] = [
  {
    id: "1",
    type: "article",
    title: "The Path of Spiritual Enlightenment",
    description: "An introductory article on the Naqshbandi path and its core principles of love, peace, and service.",
    language: "en",
    tags: ["Sufism", "Spirituality", "Introduction"],
    imageUrl: "https://placehold.co/600x400.png",
    author: "Admin",
    date: "2024-05-20",
  },
  {
    id: "2",
    type: "article",
    title: "আধ্যাত্মিকতার পথে যাত্রা",
    description: "নকশবন্দীয়া তরিকার পরিচিতি এবং এর মূলনীতি - প্রেম, শান্তি ও মানবসেবা।",
    language: "bn",
    tags: ["তাসাউফ", "আধ্যাত্মিকতা", "ভূমিকা"],
    imageUrl: "https://placehold.co/600x400.png",
    author: "অ্যাডমিন",
    date: "2024-05-19",
  },
  {
    id: "3",
    type: "image",
    title: "Peace Within",
    description: "A serene landscape representing inner tranquility.",
    language: "en",
    tags: ["Meditation", "Nature", "Peace"],
    imageUrl: "https://placehold.co/600x400.png",
    author: "Admin",
    date: "2024-05-18",
  },
  {
    id: "4",
    type: "video",
    title: "Daily Wisdom Short",
    description: "A short clip from a recent lecture on finding purpose.",
    language: "en",
    tags: ["Wisdom", "Lecture", "Shorts"],
    imageUrl: "https://placehold.co/600x400.png",
    videoUrl: "https://www.youtube.com/shorts/example",
    author: "Admin",
    date: "2024-05-17",
  },
  {
    id: "5",
    type: "article",
    title: "طريق النور",
    description: "مقالة تعريفية عن الطريقة النقشبندية ومبادئها الأساسية في المحبة والسلام والخدمة.",
    language: "ar",
    tags: ["تصوف", "روحانيات", "مقدمة"],
    imageUrl: "https://placehold.co/600x400.png",
    author: "مدير",
    date: "2024-05-16",
  },
    {
    id: "6",
    type: "image",
    title: "Gathering of Hearts",
    description: "Photo from the latest spiritual gathering.",
    language: "en",
    tags: ["Community", "Event"],
    imageUrl: "https://placehold.co/600x400.png",
    author: "Admin",
    date: "2024-05-15",
  },
  {
    id: "7",
    type: "video",
    title: "Zikr Session Highlights",
    description: "Immerse yourself in the remembrance of the Divine.",
    language: "en",
    tags: ["Zikr", "Remembrance", "Shorts"],
    imageUrl: "https://placehold.co/600x400.png",
    videoUrl: "https://www.facebook.com/shorts/example",
    author: "Admin",
    date: "2024-05-14",
  },
    {
    id: "8",
    type: "article",
    title: "روحانیت کا راستہ",
    description: "نقشبندیہ راستے اور اس کے محبت، امن اور خدمت کے بنیادی اصولوں پر ایک تعارفی مضمون۔",
    language: "ur",
    tags: ["تصوف", "روحانیت", "تعارف"],
    imageUrl: "https://placehold.co/600x400.png",
    author: "ایڈمن",
    date: "2024-05-13",
  },
];
