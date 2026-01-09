import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const benefits = [
    "AI-powered skill assessment",
    "Smart resume analysis",
    "Personalized recommendations",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                AI-Powered Internship Platform
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="text-gradient">Internship Journey</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              AI-powered internship eligibility & talent evaluation. Get personalized insights, 
              improve your skills, and land your dream internship.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/signup">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Start Free Today
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="glass" size="xl" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6 shadow-large">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-foreground">Readiness Score</h3>
                  <p className="text-sm text-muted-foreground">AI Assessment</p>
                </div>
                <div className="gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-2xl">
                  85%
                </div>
              </div>

              {/* Mock Skills */}
              <div className="space-y-4 mb-6">
                {[
                  { skill: "React.js", level: 90 },
                  { skill: "TypeScript", level: 75 },
                  { skill: "Python", level: 65 },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{item.skill}</span>
                      <span className="text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock AI Insight */}
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="gradient-accent p-2 rounded-lg">
                    <Sparkles className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1">AI Recommendation</h4>
                    <p className="text-xs text-muted-foreground">
                      Focus on improving Python skills. Consider building a data analysis project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass p-3 rounded-xl shadow-medium"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-accent rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">Eligible!</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
