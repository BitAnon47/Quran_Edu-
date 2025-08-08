
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800"></div>
      
      {/* Arabic pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Learn Quran Online
            </h1>
            <div className="text-2xl md:text-3xl text-emerald-100 mb-4 font-arabic">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Master Quranic recitation, Arabic language, and Islamic studies with our expert tutors. 
              Join thousands of students worldwide in their spiritual journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-4">
              Start Learning Today
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white text-emerald-700 hover:bg-white hover:text-emerald-700 text-lg px-8 py-4">
              View Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-emerald-200" />
              </div>
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-emerald-200">Students</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-emerald-200" />
              </div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-emerald-200">Courses</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-emerald-200" />
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-emerald-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-emerald-200" />
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-emerald-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
