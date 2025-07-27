import { getBlogContent, type Content } from "@/lib/data";
import { ContentCard } from "@/components/content-card";

export default async function BooksPage() {
  const books = await getBlogContent("Book");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2 font-headline text-center">
          বইসমূহ
        </h1>
        <p className="text-lg text-muted-foreground">
          আমাদের প্রকাশিত বইয়ের সংগ্রহ
        </p>
      </div>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <ContentCard key={book.id} content={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground mt-8">
          কোনো বই পাওয়া যায়নি।
        </p>
      )}
    </div>
  );
}
