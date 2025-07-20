import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white text-3xl md:text-4xl block mb-2">Hi, I'm</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Alex Gathatwa
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl">Software Developer & ICT Trainer</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Crafting innovative mobile applications and empowering the next generation 
              through comprehensive ICT education and training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-strong"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Button size="icon" variant="ghost" className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Github className="h-6 w-6" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}