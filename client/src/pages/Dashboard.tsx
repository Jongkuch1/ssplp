import { Link } from "wouter";
import { 
  Play, 
  Clock, 
  Trophy, 
  TrendingUp, 
  MoreHorizontal,
  BookOpen,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", hours: 2.5 },
  { name: "Tue", hours: 1.8 },
  { name: "Wed", hours: 3.2 },
  { name: "Thu", hours: 4.0 },
  { name: "Fri", hours: 2.1 },
  { name: "Sat", hours: 1.5 },
  { name: "Sun", hours: 0.5 },
];

const subjects = [
  { id: 1, title: "Mathematics", progress: 75, color: "bg-blue-500", icon: "📐" },
  { id: 2, title: "Physics", progress: 45, color: "bg-purple-500", icon: "⚛️" },
  { id: 3, title: "English Literature", progress: 90, color: "bg-yellow-500", icon: "📚" },
  { id: 4, title: "History", progress: 30, color: "bg-amber-700", icon: "🌍" },
  { id: 5, title: "Biology", progress: 10, color: "bg-green-500", icon: "🧬" },
  { id: 6, title: "Chemistry", progress: 60, color: "bg-teal-500", icon: "🧪" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Welcome back, Jongkuch</h1>
          <p className="text-muted-foreground">Here's what's happening with your learning today.</p>
        </div>
        <Button className="bg-primary text-white shadow-md shadow-primary/20">
          <Play className="mr-2 h-4 w-4" /> Resume Learning
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Weekly Activity</p>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">15.6 hrs</div>
            <p className="text-xs text-secondary mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +2.5h from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Lessons Completed</p>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground mt-1">
              Top 5% of class
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Quiz Average</p>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">88%</div>
            <p className="text-xs text-secondary mt-1">
              Excellent work!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">Points Earned</p>
              <div className="h-4 w-4 rounded-full bg-accent" />
            </div>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground mt-1">
              Level 4 Scholar
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Continue Learning */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Continue Learning</h2>
              <Button variant="link" className="text-primary">View Schedule</Button>
            </div>
            <Card className="border-l-4 border-l-primary overflow-hidden">
              <div className="p-6 flex flex-col sm:flex-row gap-6">
                <div className="h-24 w-24 sm:h-32 sm:w-32 bg-muted rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-4xl">📐</span>
                </div>
                <div className="flex-1 py-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">Mathematics • Form 4</p>
                      <h3 className="text-xl font-bold">Calculus: Introduction to Limits</h3>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    Learn about the fundamental concept of limits and how they form the basis of calculus. 
                    Includes practice problems and video explanation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* All Subjects */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Your Subjects</h2>
              <Button variant="outline" size="sm">Browse Library</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <Link key={subject.id} href={`/subject/${subject.id}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`h-10 w-10 rounded-full ${subject.color} bg-opacity-10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                          {subject.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold group-hover:text-primary transition-colors">{subject.title}</h3>
                          <p className="text-xs text-muted-foreground">12 Lessons</p>
                        </div>
                      </div>
                      <Progress value={subject.progress} className="h-1.5" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Learning Activity Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} 
                      dy={10}
                    />
                    <Tooltip 
                      cursor={{ fill: "hsl(var(--muted)/0.5)" }}
                      contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    />
                    <Bar 
                      dataKey="hours" 
                      fill="hsl(var(--primary))" 
                      radius={[4, 4, 0, 0]} 
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tutors */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Tutoring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                    JD
                  </div>
                  <div>
                    <p className="font-medium text-sm">Physics Review</p>
                    <p className="text-xs text-muted-foreground mb-1">with Mr. John Deng</p>
                    <div className="flex items-center gap-2 text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded w-fit">
                      <Clock className="h-3 w-3" />
                      Today, 4:00 PM
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs">Schedule Session</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
