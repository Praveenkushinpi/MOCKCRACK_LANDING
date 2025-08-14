"use client";
import Navbar from "@/components/navBar";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { 
  TrendingUp, 
  Clock, 
  Award, 
  Brain,
  BarChart3,
  Users,
  Shield,
  Smartphone,
  Lightbulb,
  Heart
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import FloatingFormulas from "@/components/created/formula";
import Footer from "@/components/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5
    }
  }
};

export default function BentoFeaturesPage() {
  return (
    <main className="relative min-h-screen bg-cream-100 dark:bg-gray-900 overflow-x-hidden">
      <Navbar />
      
      {/* Features Introduction */}
      <section className="w-full max-w-7xl mx-auto px-6 my-16 relative">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloatingFormulas/>
          </motion.div>
          
          <motion.div 
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Feature{" "}
              <Highlighter action="highlight" color="#FFB6C1">
                Showcase
              </Highlighter>
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Unlock your potential with{" "}
              <Highlighter action="underline" color="#87CEFA">
                cutting-edge tools
              </Highlighter>{" "}
              designed for{" "}
              <Highlighter action="highlight" color="#FFD700">
                maximum learning efficiency
              </Highlighter>{" "}
              and{" "}
              <Highlighter action="underline" color="#98FB98">
                exam success
              </Highlighter>
              .
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[800px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          
          {/* Large Feature Card - AI Question Generation */}
          <motion.div 
            className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300/20 rounded-full"
              animate="animate"
            />
            <div>
              <div>
                <motion.div 
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-white mb-6"
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="h-7 w-7" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                  <Highlighter action="highlight" color="#FFFFFF" className="px-2">
                    AI-Powered
                  </Highlighter>
                  {" "}Question Generation
                </h3>
                <p className="text-blue-800 text-base sm:text-lg mb-6">
                  Transform your notes into comprehensive practice questions using advanced artificial intelligence. Our AI understands context and creates relevant, challenging questions.
                </p>
                <div className="space-y-3">
                  {[
                    "Automatic question creation from any content",
                    "Multiple choice, true/false, and essay questions",
                    "Adaptive difficulty based on performance"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center text-blue-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div 
                className="mt-6 bg-white/30 rounded-xl p-4"
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-blue-900 font-semibold">Questions Generated Over</span>
                  <NumberTicker value={15000} className="text-2xl font-bold text-blue-900" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Medium Feature Card - Smart Analytics */}
          <motion.div 
            className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-6 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-5 -right-5 w-20 h-20 bg-purple-300/20 rounded-full"
              animate="animate"
            />
            <div>
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-white mb-4"
                transition={{ duration: 0.3 }}
              >
                <BarChart3 className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-purple-900 mb-3">
                Smart{" "}
                <Highlighter action="underline" color="#8B5CF6">
                  Analytics
                </Highlighter>
              </h3>
              <p className="text-purple-800 text-sm mb-4">
                Get detailed insights into your performance with advanced analytics and personalized recommendations.
              </p>
              <motion.div 
                className="bg-white/30 rounded-lg p-3"
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs text-purple-700">Accuracy Rate</span>
                  <span className="font-bold text-purple-900">87%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Small Feature Card - Mobile App */}
          <motion.div 
            className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-6 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute -bottom-5 -left-5 w-16 h-16 bg-green-300/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white mb-4"
                transition={{ duration: 0.2 }}
              >
                <Smartphone className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-3">
                Mobile{" "}
                <Highlighter action="highlight" color="#FFFFFF">
                  Ready
                </Highlighter>
              </h3>
              <p className="text-green-800 text-sm">
                Study anywhere with our responsive mobile app and offline capabilities.
              </p>
            </div>
          </motion.div>

          {/* Wide Feature Card - Mock Tests */}
          <motion.div 
            className="lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-6 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 bg-orange-300/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="flex justify-between items-start"
            >
              <div className="flex-1">
                <motion.div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white mb-4"
                  transition={{ duration: 0.3 }}
                >
                  <Clock className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3">
                  Realistic{" "}
                  <Highlighter action="underline" color="#F97316">
                    Mock Tests
                  </Highlighter>
                </h3>
                <p className="text-orange-800 text-sm sm:text-base">
                  Experience real exam conditions with timed tests, instant scoring, and detailed performance analysis.
                </p>
              </div>
              <motion.div 
                className="bg-white/30 rounded-lg p-4 ml-4"
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <NumberTicker value={198} className="text-2xl font-bold text-orange-900" />
                  <p className="text-xs text-orange-700">Tests Created</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tall Feature Card - Progress Tracking */}
          <motion.div 
            className="lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-6 flex flex-col shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-8 -left-8 w-20 h-20 bg-pink-300/20 rounded-full"
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div className="flex-1">
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white mb-4"
                transition={{ duration: 0.5 }}
              >
                <TrendingUp className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-pink-900 mb-4">
                Progress{" "}
                <Highlighter action="highlight" color="#FFFFFF">
                  Tracking
                </Highlighter>
              </h3>
              <p className="text-pink-800 text-sm mb-6">
                Monitor your learning journey with comprehensive progress tracking and milestone celebrations.
              </p>
              
              <div className="flex-1 space-y-4">
                <motion.div 
                  className="bg-white/30 rounded-lg p-3"
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-pink-700">Study Streak</span>
                    <span className="font-bold text-pink-900">12 days</span>
                  </div>
                  <div className="w-full bg-pink-300 rounded-full h-2">
                    <motion.div 
                      className="bg-pink-600 h-2 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/30 rounded-lg p-3"
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-pink-700">Weekly Goal</span>
                    <span className="font-bold text-pink-900">8/10 hrs</span>
                  </div>
                  <div className="w-full bg-pink-300 rounded-full h-2">
                    <motion.div 
                      className="bg-pink-600 h-2 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '80%' }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="mt-6 text-center"
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white/40 rounded-lg p-3">
                  <NumberTicker value={847} className="text-xl font-bold text-pink-900" />
                  <p className="text-xs text-pink-700">Questions Solved</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Medium Feature Card - Collaborative Learning */}
          <motion.div 
            className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl p-6 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 bg-indigo-300/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div>
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white mb-4"
                transition={{ duration: 0.3 }}
              >
                <Users className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-3">
                Study{" "}
                <Highlighter action="underline" color="#6366F1">
                  Groups
                </Highlighter>
              </h3>
              <p className="text-indigo-800 text-sm mb-4">
                Join study groups, compete with peers, and learn together in a collaborative environment.
              </p>
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className={`w-8 h-8 ${index < 3 ? `bg-indigo-${400 + index * 100}` : 'bg-indigo-300'} rounded-full border-2 border-white ${index === 3 ? 'flex items-center justify-center text-xs text-indigo-900 font-semibold' : ''}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {index === 3 && '+5'}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small Feature Card - Security */}
          <motion.div 
            className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl p-6 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute -bottom-3 -right-3 w-16 h-16 bg-teal-300/20 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div>
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-white mb-4"
                transition={{ duration: 0.3 }}
              >
                <Shield className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-teal-900 mb-3">
                <Highlighter action="highlight" color="#FFFFFF">
                  Secure
                </Highlighter>
                {" "}& Private
              </h3>
              <p className="text-teal-800 text-sm">
                Your data is protected with enterprise-grade security and privacy measures.
              </p>
            </div>
          </motion.div>

          {/* Wide Feature Card - Achievement System */}
          <motion.div 
            className="lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-6 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-6 left-1/2 w-20 h-20 bg-yellow-300/20 rounded-full"
              animate={{ rotate: 360, x: [-50, -30, -50] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="flex justify-between items-start"
            >
              <div className="flex-1">
                <motion.div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-white mb-4"
                  transition={{ duration: 0.3 }}
                >
                  <Award className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-900 mb-3">
                  Achievement{" "}
                  <Highlighter action="underline" color="#EAB308">
                    System
                  </Highlighter>
                </h3>
                <p className="text-yellow-800 text-sm sm:text-base">
                  Earn badges, unlock achievements, and stay motivated with our gamified learning experience.
                </p>
              </div>
              <div className="flex space-x-2 ml-4">
                {[Award, Heart, Lightbulb].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-br from-yellow-${400 + index * 100} to-yellow-${500 + index * 100} rounded-xl flex items-center justify-center`}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sticky Banner */}
      <StickyBanner/>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
