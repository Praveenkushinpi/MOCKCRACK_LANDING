"use client";
import Navbar from "@/components/navBar";
import { 
  Users, 
  Target, 

  BookOpen,

  Heart,
  Zap,
  Shield,
  Globe,
  CheckCircle,

} from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5
    }
  }
};


export default function AboutPage() {
  const stats = [
    { value: 50000, label: "Question Created", icon: Users, color: "blue" },
    { value: 95, label: "Success Rate %", icon: Target, color: "green" },
    { value: 500, label: "Mock Tests", icon: BookOpen, color: "purple" },
    { value: 24, label: "Support Hours", icon: Shield, color: "orange" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We believe every student deserves access to high-quality exam preparation tools that can transform their academic journey.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Our platform is designed with students in mind, focusing on their unique learning styles and academic goals.",
      color: "red"
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "We leverage cutting-edge AI and machine learning to provide personalized learning experiences for every student.",
      color: "yellow"
    },
    {
      icon: Globe,
      title: "Accessibility for All",
      description: "Making quality education accessible and affordable for students across India, regardless of their background.",
      color: "green"
    }
  ];

  return (
    <main className="relative min-h-screen bg-cream-100 dark:bg-gray-900 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-20 pb-16 relative">
        {/* Background decorations */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full"
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Dreams Through Education
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MockCrack is India&apos;s leading AI-powered exam preparation platform, dedicated to helping students crack competitive exams like JEE and NEET with confidence and excellence.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              "Founded in 2020",
              "50,000+ Success Stories",
              "AI-Powered Learning",
              "Trusted by Students Nationwide"
            ].map((item, index) => (
              <motion.span 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-16">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              <div className={`mx-auto mb-4 w-12 h-12 rounded-full bg-${stat.color}-100 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <NumberTicker 
                value={stat.value} 
                className={`text-3xl font-bold text-${stat.color}-600 block mb-1`} 
              />
              <p className="text-gray-600 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-16">
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                MockCrack was born from a simple yet powerful vision: to democratize access to high-quality exam preparation for every aspiring student in India. Founded in 2025 by two college students and education enthusiasts, we recognized the gap between traditional coaching methods and the evolving needs of modern learners.
              </p>
              <p className="mb-4">
                Our founders, having experienced the challenges of competitive exam preparation firsthand, understood the stress, financial burden, and geographical limitations that students face. This insight drove us to create an innovative platform that combines the best of human expertise with cutting-edge artificial intelligence.
              </p>
              <p className="mb-6">
                Today, MockCrack stands as a testament to the power of technology in education. We want to help over 50,000 students achieve their dreams, with a success rate that speaks to our commitment to excellence. Our AI-powered platform adapts to each student&apos;s learning style, providing personalized recommendations and insights that traditional methods simply cannot match.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We&apos;re driven by the belief that every student deserves the opportunity to achieve their academic goals, regardless of their circumstances.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              <div className={`w-12 h-12 rounded-xl bg-${value.color}-100 flex items-center justify-center mb-4`}>
                <value.icon className={`w-6 h-6 text-${value.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
