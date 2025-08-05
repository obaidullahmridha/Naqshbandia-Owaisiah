import { getPostById } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { bn } from "date-fns/locale";

export default async function PostPage({
  params,
}: {
  params: { type: string; id: string };
}) {
  const post = await getPostById(params.id);

  if (!post) {
    return <div className="container py-8">পোস্টটি খুঁজে পাওয়া যায়নি।</div>;
  }
  
  const formattedDate = format(new Date(post.date), "PPP", { locale: bn });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-headline text-center">
              {post.title}
            </h1>
            <div className="text-center text-muted-foreground text-sm flex justify-center items-center gap-4">
              <span>{post.author}</span>
              <span>&bull;</span>
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
          </header>
          <Card>
            <CardContent className="p-6 max-w-none">
              {post.videoUrl && post.type === "video" ? (
                <div className="aspect-video mb-6">
                  <iframe
                    src={post.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={post.title}
                  ></iframe>
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />
              )}
            </CardContent>
            <CardHeader>
                <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                        {tag}
                        </Badge>
                    ))}
                </div>
            </CardHeader>
          </Card>
        </article>
      </div>
    </div>
  );
}
