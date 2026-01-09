import { motion } from "framer-motion";
import { 
  Brain, 
  FileText, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Get intelligent insights on your skills, resume, and internship readiness using advanced AI algorithms.",
    color: "from-primary to-primary/70",
  },
  {
    icon: FileText,
    title: "Smart Resume Parser",
    description: "Upload your resume and receive instant feedback on strengths, weaknesses, and improvement areas.",
    color: "from-accent to-accent/70",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your skill development over time with interactive charts and detailed analytics.",
    color: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Recruiter Dashboard",
    description: "Companies can create custom eligibility criteria and find the best-matched candidates instantly.",
    color: "from-accent to-primary",
  },
  {
    icon: Zap,
    title: "Instant Scoring",
    description: "Receive your internship readiness score within seconds, with detailed breakdown and recommendations.",
    color: "from-primary/80 to-primary",
  },
  {
    icon: Shield,
    title: "Verified Assessments",
    description: "Take skill assessments that are trusted by top companies and verified by industry experts.",
    color: "from-accent/80 to-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-gradient"> Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools designed to bridge the gap between students and their dream internships.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass p-6 rounded-2xl h-full hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
