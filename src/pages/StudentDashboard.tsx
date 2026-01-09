import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Rocket, User, FileText, Code, TrendingUp, Sparkles, Github, Linkedin, LogOut, Upload, BookOpen, Award } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const mockUser = {
  name: "Alex Johnson",
  email: "alex@university.edu",
  education: "B.Tech Computer Science, MIT",
  github: "github.com/alexj",
  linkedin: "linkedin.com/in/alexj",
  readinessScore: 78,
};

const mockSkills = [
  { skill: "React.js", level: 85, subject: "React.js", A: 85 },
  { skill: "TypeScript", level: 72, subject: "TypeScript", A: 72 },
  { skill: "Python", level: 65, subject: "Python", A: 65 },
  { skill: "Node.js", level: 58, subject: "Node.js", A: 58 },
  { skill: "SQL", level: 70, subject: "SQL", A: 70 },
  { skill: "Git", level: 80, subject: "Git", A: 80 },
];

const mockProjects = [
  { title: "E-commerce Platform", tech: ["React", "Node.js", "MongoDB"], github: "#" },
  { title: "Weather Dashboard", tech: ["Vue.js", "OpenWeather API"], github: "#" },
  { title: "Task Manager CLI", tech: ["Python", "SQLite"], github: "#" },
];

const progressData = [
  { month: "Jan", score: 45 },
  { month: "Feb", score: 52 },
  { month: "Mar", score: 58 },
  { month: "Apr", score: 65 },
  { month: "May", score: 72 },
  { month: "Jun", score: 78 },
];

const aiInsights = {
  skillGaps: ["Data Structures & Algorithms", "System Design", "Cloud Services (AWS/GCP)"],
  resumeTips: ["Add quantifiable achievements", "Include more technical keywords", "Expand project descriptions"],
  projectSuggestions: ["Build a real-time chat application", "Create a machine learning project", "Contribute to open source"],
};

const StudentDashboard = () => {
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
            <span className="text-sm text-muted-foreground hidden sm:block">{mockUser.email}</span>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {mockUser.name.split(" ")[0]}! 👋</h1>
          <p className="text-muted-foreground">Track your progress and improve your internship readiness.</p>
        </motion.div>

        {/* Score Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
          <Card className="gradient-primary border-0 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-primary-foreground/80 mb-1">Internship Readiness Score</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary-foreground">{mockUser.readinessScore}</span>
                    <span className="text-primary-foreground/80 text-xl">/100</span>
                  </div>
                  <p className="text-primary-foreground/70 text-sm mt-2">You're doing great! Keep improving.</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="glass" className="bg-primary-foreground/20 text-primary-foreground border-0">
                    <Upload className="h-4 w-4 mr-2" /> Upload Resume
                  </Button>
                  <Button variant="glass" className="bg-primary-foreground/20 text-primary-foreground border-0">
                    <BookOpen className="h-4 w-4 mr-2" /> Take Assessment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Code className="h-5 w-5 text-primary" /> Skills Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {mockSkills.map((skill) => (
                        <div key={skill.skill}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{skill.skill}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={mockSkills}>
                          <PolarGrid stroke="hsl(var(--border))" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                          <Radar name="Skills" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Progress Chart */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-accent" /> Progress Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                        <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Award className="h-5 w-5 text-primary" /> Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {mockProjects.map((project, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                        <div>
                          <h4 className="font-medium">{project.title}</h4>
                          <div className="flex gap-2 mt-1">{project.tech.map((t) => <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{t}</span>)}</div>
                        </div>
                        <Button variant="ghost" size="sm"><Github className="h-4 w-4" /></Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - AI Insights */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> AI Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-destructive">Skill Gaps to Address</h4>
                    <ul className="space-y-1">{aiInsights.skillGaps.map((g, i) => <li key={i} className="text-sm text-muted-foreground">• {g}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-primary">Resume Tips</h4>
                    <ul className="space-y-1">{aiInsights.resumeTips.map((t, i) => <li key={i} className="text-sm text-muted-foreground">• {t}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-accent">Project Ideas</h4>
                    <ul className="space-y-1">{aiInsights.projectSuggestions.map((s, i) => <li key={i} className="text-sm text-muted-foreground">• {s}</li>)}</ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Profile Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><User className="h-5 w-5" /> Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p><strong>Name:</strong> {mockUser.name}</p>
                  <p><strong>Education:</strong> {mockUser.education}</p>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm"><Github className="h-4 w-4 mr-1" /> GitHub</Button>
                    <Button variant="outline" size="sm"><Linkedin className="h-4 w-4 mr-1" /> LinkedIn</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
