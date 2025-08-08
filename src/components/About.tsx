
import { CheckCircle, Users, Award, Globe } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from certified Qaris, Islamic scholars, and Arabic language experts"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join students from over 50 countries in our diverse learning community"
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Receive internationally recognized certificates upon course completion"
    }
  ];

  const benefits = [
    "Flexible online learning schedule",
    "One-on-one tutoring sessions",
    "Interactive digital classroom",
    "Progress tracking and assessments",
    "Lifetime access to course materials",
    "24/7 technical support"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Quran Edu
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are dedicated to making Islamic education accessible to Muslims worldwide. 
              Our platform combines traditional Islamic scholarship with modern technology 
              to provide comprehensive learning experiences.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Platform?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    Join 5000+ Students
                  </div>
                  <p className="text-gray-600">
                    Start your Islamic education journey today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
