"use client";

import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentCard } from "@/components/content-card";
import { getBlogContent, type Content } from "@/lib/data";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<Content[]>([]);
  const [images, setImages] = useState<Content[]>([]);
  const [videos, setVideos] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const [articleData, imageData, videoData] = await Promise.all([
        getBlogContent("Article"),
        getBlogContent("Image"),
        getBlogContent("Video"),
      ]);
      setArticles(articleData);
      setImages(imageData);
      setVideos(videoData);
      setLoading(false);
    };
    fetchContent();
  }, []);

  const filterContent = (items: Content[]) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  };
  
  const filteredArticles = useMemo(() => filterContent(articles), [articles, searchQuery]);
  const filteredImages = useMemo(() => filterContent(images), [images, searchQuery]);
  const filteredVideos = useMemo(() => filterContent(videos), [videos, searchQuery]);


  const renderContent = (items: Content[], isLoading: boolean) => {
    if (isLoading) {
       return (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {Array.from({ length: 8 }).map((_, i) => (
             <div key={i} className="flex flex-col space-y-3">
               <Skeleton className="h-[200px] w-full rounded-xl" />
               <div className="space-y-2">
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-3/4" />
               </div>
             </div>
           ))}
         </div>
       );
    }
    if (items.length === 0) {
      return <p className="text-center text-muted-foreground mt-8">কোনো বিষয়বস্তু পাওয়া যায়নি।</p>
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2 font-headline text-center">
          নিসবতে উয়াইসিয়াতে স্বাগতম
        </h1>
        <p className="text-lg text-muted-foreground">
          আপনার আধ্যাত্মিক অন্তর্দৃষ্টির উৎস
        </p>
      </div>

      <div className="relative mb-8 max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="বিষয়বস্তু অনুসন্ধান করুন..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="articles">প্রবন্ধ</TabsTrigger>
          <TabsTrigger value="images">ছবি</TabsTrigger>
          <TabsTrigger value="videos">ভিডিও</TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="mt-6">
          {renderContent(filteredArticles, loading)}
        </TabsContent>
        <TabsContent value="images" className="mt-6">
          {renderContent(filteredImages, loading)}
        </TabsContent>
        <TabsContent value="videos" className="mt-6">
          {renderContent(filteredVideos, loading)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
