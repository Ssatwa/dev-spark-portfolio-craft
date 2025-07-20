import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    label: "Experience",
    value: "5+ Years"
  },
  {
    icon: Users,
    label: "Students Trained",
    value: "500+"
  },
  {
    icon: Award,
    label: "Apps Published",
    value: "15+"
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Tech Hub"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and education, bridging the gap between innovation and learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                With over <strong>5 years of experience</strong> in software development and ICT training, 
                I specialize in creating innovative Android applications and empowering individuals 
                through comprehensive technology education.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                My journey began with a passion for mobile development, where I've successfully 
                launched <strong>15+ applications</strong> on the Google Play Store. This experience 
                naturally evolved into sharing knowledge through ICT training programs, where I've 
                had the privilege of training over <strong>500 students</strong> in digital literacy 
                and programming fundamentals.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                I believe in the power of technology to transform lives and businesses. Whether 
                developing custom applications or conducting training workshops, my goal is to 
                deliver solutions that are not only technically sound but also user-friendly 
                and impactful.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary text-sm py-1 px-3">
                Mobile Development Expert
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent-foreground text-sm py-1 px-3">
                Certified Trainer
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-sm py-1 px-3">
                Tech Consultant
              </Badge>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Professional headshot"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-medium"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Software Developer & ICT Trainer</h3>
                  <p className="text-muted-foreground mb-6">
                    Bridging technology and education for a digital future
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-card border-0 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <highlight.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{highlight.value}</div>
                    <div className="text-sm text-muted-foreground">{highlight.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}