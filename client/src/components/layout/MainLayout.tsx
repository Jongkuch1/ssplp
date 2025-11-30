import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { 
  BookOpen, 
  LayoutDashboard, 
  Video, 
  Download, 
  Settings, 
  Menu, 
  Bell, 
  Search,
  User,
  Wifi,
  WifiOff,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/generated_images/minimalist_education_logo.png";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [location] = useLocation();
  const [isOnline, setIsOnline] = useState(true);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  // Simulate online/offline toggle for demo purposes
  const toggleNetwork = () => setIsOnline(!isOnline);
  const toggleLanguage = () => setLanguage(prev => prev === "en" ? "ar" : "en");

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: BookOpen, label: "My Subjects", path: "/subjects" },
    { icon: Video, label: "Tutoring", path: "/tutoring" },
    { icon: Download, label: "Downloads", path: "/downloads" },
  ];

  const isLanding = location === "/";

  if (isLanding) {
    return <>{children}</>;
  }

  return (
    <div className={cn("min-h-screen bg-background flex", language === "ar" ? "direction-rtl" : "")} dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/">
            <a className="flex items-center gap-2 font-serif font-bold text-xl text-primary">
              <img src={logoImage} alt="SSPLP Logo" className="h-8 w-8 object-contain" />
              <span>SSPLP</span>
            </a>
          </Link>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                location === item.path 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">Network Status</span>
              <button onClick={toggleNetwork} className="text-xs text-primary hover:underline">
                Toggle
              </button>
            </div>
            <div className={cn(
              "flex items-center gap-2 text-sm font-medium", 
              isOnline ? "text-secondary" : "text-orange-500"
            )}>
              {isOnline ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
              {isOnline ? "Online Mode" : "Offline Mode"}
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Jongkuch Anyar</p>
              <p className="text-xs text-muted-foreground truncate">Form 4 Student</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile & Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Top Header */}
        <header className="h-16 border-b bg-card flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                {/* Mobile Sidebar Content - Simplified duplication */}
                <div className="h-16 flex items-center px-6 border-b">
                  <span className="font-serif font-bold text-xl text-primary">SSPLP</span>
                </div>
                <nav className="flex-1 py-6 px-4 space-y-1">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <a className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                        location === item.path 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}>
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            <div className="relative hidden md:block w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search for lessons, topics, or tutors..."
                className="w-full h-9 pl-9 pr-4 rounded-md border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="hidden md:flex gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "English" : "عربي"}
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-destructive rounded-full" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
