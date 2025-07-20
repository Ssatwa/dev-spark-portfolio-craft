import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, GraduationCap, Users, Code, Lightbulb, Laptop } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Custom Android applications built with modern technologies like Kotlin, Jetpack Compose, and Material Design principles.",
    features: ["Native Android Development", "Modern UI/UX Design", "Database Integration", "API Development"]
  },
  {
    icon: GraduationCap,
    title: "ICT Training & Education",
    description: "Comprehensive digital literacy programs and programming courses designed for learners of all skill levels.",
    features: ["Digital Literacy Training", "Programming Fundamentals", "Web Development Courses", "Mobile App Development"]
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Tailored technology training solutions for businesses looking to upskill their workforce in modern technologies.",
    features: ["Team Workshops", "Custom Curriculum", "Hands-on Projects", "Progress Tracking"]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack development services including web applications, APIs, and system integration solutions.",
    features: ["Web Applications", "REST API Development", "Database Design", "System Integration"]
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    description: "Strategic technology guidance to help businesses make informed decisions about their digital transformation.",
    features: ["Technology Assessment", "Architecture Planning", "Best Practices", "Implementation Strategy"]
  },
  {
    icon: Laptop,
    title: "Digital Solutions",
    description: "End-to-end digital solutions including automation tools, productivity apps, and business process optimization.",
    features: ["Process Automation", "Custom Tools", "Workflow Optimization", "Digital Transformation"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions and training programs to help you achieve your goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}