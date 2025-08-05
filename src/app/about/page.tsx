import { getBlogContent, type Content } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AboutPage() {
  const aboutContent = await getBlogContent("About");

  // Since we expect only one "About" post, we take the first one.
  const post = aboutContent[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8 font-headline">
          {post ? post.title : "পরিচিতি"}
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>{post ? post.title : "আমাদের সম্পর্কে"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 max-w-none">
            {post ? (
              <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
            ) : (
              <p className="text-lg text-muted-foreground">
                কোনো পরিচিতি তথ্য পাওয়া যায়নি। অনুগ্রহ করে আপনার ব্লগস্পট সাইটে "About" ট্যাগ দিয়ে একটি পোস্ট তৈরি করুন।
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
