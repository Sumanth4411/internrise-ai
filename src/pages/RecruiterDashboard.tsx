import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, FileText, Download, LogOut, Search, Filter, Star, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockCandidates = [
  { id: 1, name: "Alex Johnson", score: 85, skills: ["React", "TypeScript", "Node.js"], projects: 5, status: "shortlisted", match: 92 },
  { id: 2, name: "Sarah Chen", score: 78, skills: ["Python", "ML", "TensorFlow"], projects: 4, status: "pending", match: 88 },
  { id: 3, name: "Mike Brown", score: 72, skills: ["Java", "Spring", "AWS"], projects: 3, status: "pending", match: 75 },
  { id: 4, name: "Emily Davis", score: 91, skills: ["React", "Go", "Docker"], projects: 7, status: "shortlisted", match: 95 },
  { id: 5, name: "James Wilson", score: 65, skills: ["Python", "Django", "SQL"], projects: 2, status: "rejected", match: 60 },
];

const mockCriteria = {
  requiredSkills: ["React", "TypeScript", "Node.js"],
  minScore: 70,
  minProjects: 2,
};

const RecruiterDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="gradient-primary p-2 rounded-lg">
              <Rocket className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Intern<span className="text-gradient">Ryze</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">TechCorp Inc.</span>
            <Link to="/"><Button variant="ghost" size="sm"><LogOut className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Recruiter Dashboard</h1>
          <p className="text-muted-foreground">Find and evaluate the best internship candidates.</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Candidates", value: "156", icon: Users },
            { label: "Shortlisted", value: "24", icon: Star },
            { label: "Avg. Score", value: "76", icon: FileText },
            { label: "Pending Review", value: "45", icon: Filter },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10"><stat.icon className="h-5 w-5 text-primary" /></div>
                <div><p className="text-2xl font-bold">{stat.value}</p><p className="text-sm text-muted-foreground">{stat.label}</p></div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Candidate List */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Candidates</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." className="pl-9 w-full" /></div>
                    <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCandidates.map((candidate) => (
                    <div key={candidate.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-secondary/30 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{candidate.name}</h4>
                          <Badge variant={candidate.status === "shortlisted" ? "default" : candidate.status === "rejected" ? "destructive" : "secondary"}>
                            {candidate.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {candidate.skills.map((s) => <span key={s} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{s}</span>)}
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>Score: <strong className="text-foreground">{candidate.score}</strong></span>
                          <span>Projects: <strong className="text-foreground">{candidate.projects}</strong></span>
                          <span>Match: <strong className="text-accent">{candidate.match}%</strong></span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm"><CheckCircle className="h-4 w-4 text-green-500" /></Button>
                        <Button variant="ghost" size="sm"><XCircle className="h-4 w-4 text-red-500" /></Button>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">Showing 5 of 156 candidates</p>
                  <Button variant="hero"><Download className="h-4 w-4 mr-2" /> Export Shortlist</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Criteria Panel */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Filter className="h-5 w-5 text-primary" /> Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockCriteria.requiredSkills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Minimum Score</h4>
                  <div className="flex items-center gap-3">
                    <Progress value={mockCriteria.minScore} className="flex-1 h-2" />
                    <span className="text-sm font-medium">{mockCriteria.minScore}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Min. Projects</h4>
                  <p className="text-2xl font-bold text-primary">{mockCriteria.minProjects}+</p>
                </div>
                <Button variant="outline" className="w-full">Edit Criteria</Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">AI Ranking Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Top candidate Emily Davis has 95% skill match</p>
                <p>• 4 candidates exceed your score threshold</p>
                <p>• React proficiency is highest among applicants</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RecruiterDashboard;
