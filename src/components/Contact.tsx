import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "amgathatwa@gmail.com",
    href: "mailto:amgathatwa@gmail.com"
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+254 727498542",
    href: "https://wa.me/254727498542"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ssatwa",
    username: "@Ssatwa"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/AlexGathatwa",
    username: "@AlexGathatwa"
  },
  {
    icon: MessageSquare,
    label: "Twitter",
    href: "https://twitter.com/AlGathatwa",
    username: "@AlGathatwa"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project or training program? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, training request, etc."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or training needs..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach out and connect with me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Social Media</CardTitle>
                <CardDescription>
                  Follow me on social platforms for updates and tech insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}