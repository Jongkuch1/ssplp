import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Users, WifiOff, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/hero_illustration_of_students_learning.png";
import logoImage from "@assets/generated_images/minimalist_education_logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="SSPLP Logo" className="h-8 w-8 object-contain" />
            <span className="font-serif font-bold text-xl text-primary">SSPLP</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#curriculum" className="hover:text-primary transition-colors">Curriculum</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Now available nationwide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
                Education for Every <br />
                <span className="text-primary">South Sudanese</span> Student
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Access personalized, curriculum-aligned learning materials anytime, anywhere. 
                Even without internet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="text-base h-12 px-8 shadow-lg shadow-primary/20">
                    Start Learning Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-base h-12 px-8">
                  View Curriculum
                </Button>
              </div>
              
              <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>MoGE Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Free for Students</span>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2rem] transform rotate-3 scale-95 -z-10" />
               <img 
                src={heroImage} 
                alt="Students learning" 
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Built for South Sudan</h2>
            <p className="text-muted-foreground text-lg">
              Designed specifically to address the unique challenges of our educational landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: WifiOff,
                title: "Offline First",
                description: "Download lessons and quizzes. Learn without an internet connection and sync progress when you're back online."
              },
              {
                icon: Book,
                title: "National Curriculum",
                description: "All content is strictly aligned with the South Sudan Ministry of General Education standards."
              },
              {
                icon: Users,
                title: "Expert Tutoring",
                description: "Connect with qualified teachers for one-on-one guidance and support through our virtual classroom."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg text-primary">SSPLP</span>
            <span className="text-muted-foreground text-sm">© 2025</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
