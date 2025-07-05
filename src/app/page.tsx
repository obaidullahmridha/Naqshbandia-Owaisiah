"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentCard } from "@/components/content-card";
import { mockContent, type Content } from "@/lib/data";
import { Search } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = useMemo(() => {
    if (!searchQuery) return mockContent;
    return mockContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery]);

  const articles = filteredContent.filter((item) => item.type === "article");
  const images = filteredContent.filter((item) => item.type === "image");
  const videos = filteredContent.filter((item) => item.type === "video");

  const renderContent = (items: Content[]) => {
    if (items.length === 0) {
      return <p className="text-center text-muted-foreground mt-8">No content found.</p>
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
        <h1 className="text-4xl font-bold text-primary mb-2 font-headline">
          Welcome to Rahnuma Digest
        </h1>
        <p className="text-lg text-muted-foreground">
          Your source for spiritual insights
        </p>
      </div>

      <div className="relative mb-8 max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search content..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="mt-6">
          {renderContent(articles)}
        </TabsContent>
        <TabsContent value="images" className="mt-6">
          {renderContent(images)}
        </TabsContent>
        <TabsContent value="videos" className="mt-6">
          {renderContent(videos)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
