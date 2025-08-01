import { getBlogContent } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ZikrPage() {
  const zikrContent = await getBlogContent("Zikr");

  // Since we expect only one post for this, we take the first one.
  const post = zikrContent[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8 font-headline">
          {post ? post.title : "জিকিরের পদ্ধতি"}
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>{post ? post.title : "আল্লাহর নৈকট্য লাভের পদ্ধতি"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 prose dark:prose-invert max-w-none">
            {post ? (
              <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
            ) : (
              <p className="text-lg text-muted-foreground">
                কোনো তথ্য পাওয়া যায়নি। অনুগ্রহ করে আপনার ব্লগস্পট সাইটে "Zikr" ট্যাগ দিয়ে একটি পোস্ট তৈরি করুন।
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
