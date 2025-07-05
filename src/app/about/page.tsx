import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8 font-headline">
          আমাদের সম্পর্কে
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>নিসবতে উয়াইসিয়া</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              আমরা একটি আধ্যাত্মিক সংগঠন যা সুফিবাদের চিরন্তন শিক্ষা প্রচারের জন্য নিবেদিত, যা প্রেম, শান্তি এবং মানবতার উন্নতির উপর দৃষ্টি নিবদ্ধ করে। আমাদের বিষয়বস্তু আধ্যাত্মিক যাত্রায় অনুসন্ধানকারীদের অনুপ্রাণিত এবং গাইড করার লক্ষ্য রাখে।
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                যোগাযোগ ও ঠিকানা
              </h3>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold font-bengali text-lg">
                    মিরপুর, ঢাকা, বাংলাদেশ
                  </p>
                  <p className="text-muted-foreground">
                    Mirpur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">contact@rahnumadigest.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
