
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Clock, Star } from "lucide-react";

const courses = [
  {
    title: "Quran Recitation for Beginners",
    description: "Learn proper Tajweed and pronunciation with certified Qaris. Perfect for those starting their Quranic journey.",
    duration: "12 weeks",
    students: "1,200+",
    rating: 4.9,
    price: "$99",
  image: "/images/quran-recitation.svg",
    level: "Beginner"
  },
  {
    title: "Arabic Language Fundamentals",
    description: "Master Arabic grammar, vocabulary, and conversation skills to better understand the Quran.",
    duration: "16 weeks",
    students: "800+",
    rating: 4.8,
    price: "$149",
  image: "/images/arabic-fundamentals.svg",
    level: "Intermediate"
  },
  {
    title: "Islamic Studies Comprehensive",
    description: "Explore Islamic history, jurisprudence, and contemporary issues with renowned scholars.",
    duration: "20 weeks",
    students: "600+",
    rating: 4.9,
    price: "$199",
  image: "/images/islamic-studies.svg",
    level: "Advanced"
  },
  {
    title: "Quran Memorization (Hifz)",
    description: "Structured program for memorizing the Holy Quran with proper revision techniques.",
    duration: "2 years",
    students: "300+",
    rating: 5.0,
    price: "$299",
  image: "/images/quran-hifz.svg",
    level: "Advanced"
  },
  {
    title: "Kids Quran Learning",
    description: "Fun and interactive Quran learning program designed specifically for children aged 6-12.",
    duration: "8 weeks",
    students: "2,000+",
    rating: 4.9,
    price: "$79",
  image: "/images/kids-quran.svg",
    level: "Beginner"
  },
  {
    title: "Tafseer and Quran Translation",
    description: "Deep understanding of Quranic verses with authentic interpretations and translations.",
    duration: "24 weeks",
    students: "450+",
    rating: 4.8,
    price: "$249",
  image: "/images/tafseer-translation.svg",
    level: "Advanced"
  }
];

export const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of Islamic education courses designed for all levels of learners
          </p>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg aspect-[16/9] bg-emerald-50">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-emerald-600 px-3 py-1 rounded-full text-lg font-bold">
                    {course.price}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};
