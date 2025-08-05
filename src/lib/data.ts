export interface Content {
  id: string;
  type: "article" | "image" | "video" | "book" | "about" | "tree" | "zikr";
  title: string;
  description?: string;
  language: "en" | "bn" | "ar" | "ur";
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  content?: string;
  author: string;
  date: string;
}

const BLOG_URL = "https://naqshbandiaowaisiahbd.blogspot.com";

function extractImageUrl(content: string): string {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : "https://placehold.co/600x400.png";
}

function extractVideoUrl(content: string): string | undefined {
  const iframeRegex = /<iframe[^>]+src="([^">]+)"/;
  const match = content.match(iframeRegex);
  if (match) return match[1];

  const videoRegex = /<video[^>]+src="([^">]+)"/;
  const matchVideo = content.match(videoRegex);
  return matchVideo ? matchVideo[1] : undefined;
}


function cleanDescription(content: string): string {
  return content.replace(/<[^>]*>/g, "").substring(0, 200) + '...';
}

function mapEntryToContent(entry: any, type?: Content['type']): Content {
  const contentHtml = entry.content.$t;
  const tags = entry.category?.map((cat: any) => cat.term) || [];
  
  // Determine language from tags or default to Bengali
  let language: Content['language'] = 'bn';
  if (tags.includes('English')) language = 'en';
  if (tags.includes('Arabic')) language = 'ar';
  if (tags.includes('Urdu')) language = 'ur';
  
  let determinedType: Content['type'] = type || 'article';
  if(!type) {
    if(tags.includes("Article")) determinedType = 'article';
    else if(tags.includes("Image")) determinedType = 'image';
    else if(tags.includes("Video")) determinedType = 'video';
    else if(tags.includes("Book")) determinedType = 'book';
    else if(tags.includes("About")) determinedType = 'about';
    else if(tags.includes("Tree")) determinedType = 'tree';
    else if(tags.includes("Zikr")) determinedType = 'zikr';
  }


  return {
    id: entry.id.$t.split('.post-')[1],
    type: determinedType,
    title: entry.title.$t,
    description: cleanDescription(contentHtml),
    language: language,
    tags: tags.filter((t: string) => !["Article", "Image", "Video", "Book", "About", "Tree", "Zikr", "English", "Arabic", "Urdu"].includes(t)),
    imageUrl: extractImageUrl(contentHtml),
    videoUrl: extractVideoUrl(contentHtml),
    content: contentHtml,
    author: entry.author[0].name.$t,
    date: new Date(entry.published.$t).toISOString(),
  };
}

const tagToTypeMap: Record<string, Content['type']> = {
  "Article": "article",
  "Image": "image",
  "Video": "video",
  "Book": "book",
  "About": "about",
  "Tree": "tree",
  "Zikr": "zikr"
};


export async function getBlogContent(tag: "Article" | "Image" | "Video" | "Book" | "About" | "Tree" | "Zikr"): Promise<Content[]> {
  try {
    const res = await fetch(`${BLOG_URL}/feeds/posts/default/-/${tag}?alt=json&max-results=50`);
    if (!res.ok) {
      throw new Error(`Failed to fetch blog content for tag: ${tag}`);
    }
    const data = await res.json();
    if (!data.feed.entry) {
      return [];
    }
    
    const type = tagToTypeMap[tag] || 'article';
    
    return data.feed.entry.map((entry: any) => mapEntryToContent(entry, type));
  } catch (error) {
    console.error("Error fetching blog content:", error);
    return [];
  }
}

export async function getPostById(id: string): Promise<Content | null> {
  try {
    const res = await fetch(`${BLOG_URL}/feeds/posts/default/${id}?alt=json`);
     if (!res.ok) {
      throw new Error(`Failed to fetch post with id: ${id}`);
    }
    const data = await res.json();
    if (!data.entry) {
        return null;
    }
    return mapEntryToContent(data.entry);
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    return null;
  }
}
