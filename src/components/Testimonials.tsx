
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Hassan",
    location: "London, UK",
    course: "Quran Recitation",
    rating: 5,
    text: "The online Quran classes have been a blessing for my family. My children have improved their recitation significantly, and the teachers are very patient and knowledgeable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Fatima Al-Zahra",
    location: "Toronto, Canada",
    course: "Arabic Language",
    rating: 5,
    text: "I never thought I could learn Arabic online, but this platform proved me wrong. The structured curriculum and interactive sessions made learning enjoyable and effective.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Omar Abdullah",
    location: "Sydney, Australia",
    course: "Islamic Studies",
    rating: 5,
    text: "The Islamic Studies course has deepened my understanding of our beautiful religion. The scholars are authentic and the content is well-researched and comprehensive.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Aisha Khan",
    location: "New York, USA",
    course: "Kids Quran Learning",
    rating: 5,
    text: "My 8-year-old daughter loves her Quran classes. The teachers use fun activities and games that keep her engaged while learning. Highly recommend for children!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Yusuf Ibrahim",
    location: "Dubai, UAE",
    course: "Quran Memorization",
    rating: 5,
    text: "The Hifz program is exceptional. The systematic approach and regular revision schedules have helped me memorize Quran efficiently. Alhamdulillah!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Maryam Ahmed",
    location: "Birmingham, UK",
    course: "Tafseer Studies",
    rating: 5,
    text: "The Tafseer course has opened my heart to the deeper meanings of Quran. The explanations are clear and the historical context provided is invaluable.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our global community of learners who have transformed their Islamic knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-emerald-600 font-semibold">
                    {testimonial.course}
                  </span>
                </div>
                
                <div className="relative">
                  <Quote className="h-8 w-8 text-emerald-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
