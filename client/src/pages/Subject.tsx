import { useParams, Link } from "wouter";
import { useState } from "react";
import { 
  ChevronLeft, 
  PlayCircle, 
  Play,
  FileText, 
  CheckCircle, 
  Lock,
  Download,
  MessageSquare,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Subject() {
  const { id } = useParams();
  const [activeLesson, setActiveLesson] = useState(1);

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col lg:flex-row gap-6">
      {/* Sidebar - Course Content */}
      <div className="w-full lg:w-80 shrink-0 flex flex-col bg-card border rounded-xl overflow-hidden h-full">
        <div className="p-4 border-b bg-muted/30">
          <Link href="/dashboard">
            <a className="text-xs text-muted-foreground hover:text-primary flex items-center mb-2">
              <ChevronLeft className="h-3 w-3 mr-1" /> Back to Dashboard
            </a>
          </Link>
          <h2 className="font-bold text-lg">Mathematics Form 4</h2>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            <span>12 Lessons</span>
            <span>•</span>
            <span>15 Quizzes</span>
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-6">
            {[
              { title: "Unit 1: Calculus", lessons: [
                { id: 1, title: "Introduction to Limits", type: "video", duration: "15 min", completed: true },
                { id: 2, title: "Limit Laws", type: "text", duration: "10 min", completed: true },
                { id: 3, title: "Continuity", type: "video", duration: "20 min", completed: false },
                { id: 4, title: "Unit 1 Quiz", type: "quiz", duration: "30 min", locked: true },
              ]},
              { title: "Unit 2: Integration", lessons: [
                { id: 5, title: "Antiderivatives", type: "video", duration: "18 min", locked: true },
                { id: 6, title: "Definite Integrals", type: "text", duration: "25 min", locked: true },
              ]}
            ].map((unit, i) => (
              <div key={i}>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">{unit.title}</h3>
                <div className="space-y-2">
                  {unit.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => !lesson.locked && setActiveLesson(lesson.id)}
                      className={`w-full flex items-center gap-3 p-2 rounded-lg text-left transition-colors ${
                        activeLesson === lesson.id 
                          ? "bg-primary/10 text-primary" 
                          : lesson.locked 
                            ? "opacity-50 cursor-not-allowed" 
                            : "hover:bg-muted"
                      }`}
                    >
                      {lesson.completed ? (
                        <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                      ) : lesson.locked ? (
                        <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{lesson.title}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          {lesson.type === "video" && <PlayCircle className="h-3 w-3" />}
                          {lesson.type === "text" && <FileText className="h-3 w-3" />}
                          {lesson.type === "quiz" && <Trophy className="h-3 w-3" />}
                          {lesson.duration}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden rounded-xl border bg-card">
        {/* Content Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold">Introduction to Limits</h1>
            <p className="text-muted-foreground text-sm mt-1">Unit 1 • Lesson 1</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Download
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" /> Ask Tutor
            </Button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <Tabs defaultValue="video" className="max-w-3xl mx-auto">
            <TabsList className="mb-6">
              <TabsTrigger value="video">Video Lesson</TabsTrigger>
              <TabsTrigger value="notes">Study Notes</TabsTrigger>
              <TabsTrigger value="quiz">Practice Quiz</TabsTrigger>
            </TabsList>

            <TabsContent value="video" className="space-y-6">
              <div className="aspect-video bg-black rounded-xl flex items-center justify-center relative group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
                <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="prose prose-sm max-w-none">
                <h3>Key Concepts</h3>
                <ul>
                  <li>Definition of a limit</li>
                  <li>Approaching from left vs right</li>
                  <li>When limits do not exist</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="notes">
              <div className="prose max-w-none">
                <h2>Understanding Limits</h2>
                <p>
                  In calculus, a limit is the value that a function (or sequence) approaches as the input (or index) approaches some value. Limits are essential to calculus and mathematical analysis, and are used to define continuity, derivatives, and integrals.
                </p>
                <div className="bg-muted p-4 rounded-lg border my-4">
                  <p className="font-mono text-sm">
                    lim(x→c) f(x) = L
                  </p>
                </div>
                <p>
                  This reads as "the limit of f of x as x approaches c equals L".
                </p>
              </div>
            </TabsContent>

            <TabsContent value="quiz">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg">Question 1 of 5</h3>
                      <p className="text-muted-foreground">
                        If f(x) approaches 5 as x approaches 2 from the left, and approaches 5 as x approaches 2 from the right, what is the limit as x approaches 2?
                      </p>
                    </div>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one" className="flex-1 cursor-pointer">The limit is 5</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two" className="flex-1 cursor-pointer">The limit is 2</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="option-three" id="option-three" />
                        <Label htmlFor="option-three" className="flex-1 cursor-pointer">The limit does not exist</Label>
                      </div>
                    </RadioGroup>
                    <Button className="w-full">Check Answer</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
