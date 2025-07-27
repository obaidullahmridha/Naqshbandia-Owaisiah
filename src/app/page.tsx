
import { getBlogContent } from "@/lib/data";
import { HomePageClient } from "@/components/home-page-client";

export default async function Home() {
  const [articles, images, videos] = await Promise.all([
    getBlogContent("Article"),
    getBlogContent("Image"),
    getBlogContent("Video"),
  ]);

  return <HomePageClient articles={articles} images={images} videos={videos} />;
}
