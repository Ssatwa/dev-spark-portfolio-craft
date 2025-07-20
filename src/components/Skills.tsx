import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Kotlin", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 75 },
      { name: "TypeScript", level: 70 }
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Android SDK", level: 90 },
      { name: "Jetpack Compose", level: 85 },
      { name: "Room Database", level: 80 },
      { name: "Material Design", level: 85 },
      { name: "Firebase", level: 75 }
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Django", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 }
    ]
  }
];

const tools = [
  "Android Studio", "VS Code", "IntelliJ IDEA", "Git", "Docker",
  "Figma", "Postman", "Firebase Console", "Google Cloud Platform",
  "Jira", "Slack", "Linux", "Windows", "macOS"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across multiple programming languages, frameworks, and development tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-0 hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>Proficiency levels in core technologies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Tools & Technologies</CardTitle>
            <CardDescription className="text-center">
              Development tools and platforms I work with regularly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}