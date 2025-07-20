import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    company: "TechStart Solutions",
    content: "The Android app developed for our business exceeded all expectations. The user interface is intuitive, and the functionality perfectly matches our requirements. Highly professional work!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e6?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Programming Student",
    company: "Code Academy Graduate",
    content: "The ICT training program was comprehensive and well-structured. I went from zero programming knowledge to building my first Android app in just 3 months. Excellent teaching methodology!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Dr. Amanda Rivera",
    role: "Education Director",
    company: "Digital Learning Institute",
    content: "Outstanding corporate training delivery. The team was engaged throughout, and the practical approach to teaching Android development made complex concepts accessible to everyone.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    company: "InnovateTech",
    content: "Professional, reliable, and delivered exactly what was promised. The mobile app has become a key part of our business operations. The ongoing support has been exceptional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "HR Manager",
    company: "Global Tech Corp",
    content: "The digital literacy training for our staff was transformative. Clear explanations, hands-on practice, and excellent follow-up support. Our team's productivity has significantly improved.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients and students say about working with me
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-0 shadow-strong relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
              <div className="mb-8">
                <p className="text-lg md:text-xl leading-relaxed text-foreground italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {testimonials[currentIndex].company}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}