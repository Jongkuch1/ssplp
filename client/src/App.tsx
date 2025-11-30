import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Subject from "@/pages/Subject";
import { MainLayout } from "@/components/layout/MainLayout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      <Route path="/dashboard">
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </Route>
      
      <Route path="/subjects">
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </Route>

      <Route path="/subject/:id">
        <MainLayout>
          <Subject />
        </MainLayout>
      </Route>
      
      <Route path="/tutoring">
        <MainLayout>
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Tutoring module placeholder
          </div>
        </MainLayout>
      </Route>

      <Route path="/downloads">
        <MainLayout>
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Offline downloads placeholder
          </div>
        </MainLayout>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
