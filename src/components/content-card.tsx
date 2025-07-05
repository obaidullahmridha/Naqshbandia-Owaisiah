"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Image as ImageIcon } from "lucide-react";
import type { Content } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  content: Content;
}

const getLanguageClass = (lang: Content["language"]) => {
  switch (lang) {
    case "bn":
      return "font-bengali";
    case "ar":
      return "font-arabic";
    case "ur":
      return "font-urdu";
    default:
      return "font-body";
  }
};

const getTranslatedType = (type: Content["type"]) => {
  switch (type) {
    case "article":
      return "প্রবন্ধ";
    case "image":
      return "ছবি";
    case "video":
      return "ভিডিও";
    default:
      return type;
  }
};

export function ContentCard({ content }: ContentCardProps) {
  const { title, description, imageUrl, tags, language, type } = content;

  const langClass = getLanguageClass(language);
  const translatedType = getTranslatedType(type);

  const TypeIcon =
    type === "video" ? Film : type === "image" ? ImageIcon : null;

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            data-ai-hint="spiritual abstract"
          />
          <div className="absolute top-2 right-2 flex items-center gap-2">
            {TypeIcon && (
              <Badge variant="secondary" className="pl-2">
                <TypeIcon className="h-4 w-4 mr-1" />
                {translatedType}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className={cn("text-lg mb-2 leading-tight", langClass)}>
          {title}
        </CardTitle>
        {description && (
          <CardDescription className={cn("text-sm", langClass)}>
            {description}
          </CardDescription>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto self-end">
          আরও পড়ুন <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
