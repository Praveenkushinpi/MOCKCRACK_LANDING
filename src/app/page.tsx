"use client";

import Navbar from "@/components/navBar";
import { Marquee1 } from "@/components/created/marquee1";
import Link from "next/link";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { 
  Target, 
  TrendingUp, 
  Clock, 
  Award, 
  Brain,
  BarChart3,
  Users,
  Shield,
  Smartphone
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import FloatingFormulas from "@/components/created/formula";
import Footer from "@/components/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream-100 dark:bg-gray-900">
      <StickyBanner/>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-24 py-24 sm:py-32 lg:py-40 overflow-hidden backgroundImage">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10"></div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold-italics text-pastel-blue-200 poppins-extrabold leading-tight">
          <span className="block">Smart Prep,</span>
          <span className="block">Better Result.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-pastel-blue-100 dark:text-gray-300 max-w-lg leading-relaxed">
          Discover all the tools and capabilities that make MockCrack the ultimate exam preparation platform.
        </p>

        {/* CTA Button */}
        <Link href="/signup" passHref>
          <button className="mt-6 sm:mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-accent-info text-white font-semibold rounded-lg hover:bg-pastel-blue-300 transition shadow-lg">
           Try Now
          </button>
        </Link>
      </section>

      {/* Core Features Overview */}
      <section className="w-full max-w-7xl mx-auto px-6 my-16 relative">
        <div className="relative z-10">
          <FloatingFormulas/>

          <div className="text-center mb-16 relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Core{" "}
              <Highlighter action="highlight" color="#87CEFA">
                Features
              </Highlighter>
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative">
              Everything you need to{" "}
              <Highlighter action="underline" color="#FF9800">
                ace your exams
              </Highlighter>{" "}
              with{" "}
              <Highlighter action="highlight" color="#FFD700">
                AI-powered intelligence
              </Highlighter>{" "}
              and{" "}
              <Highlighter action="highlight" color="#FFB6C1">
                smart analytics
              </Highlighter>
              .
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                AI-Powered Question Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Convert your notes into comprehensive practice questions using advanced AI technology.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Automatic question creation</li>
                <li>• Multiple question types</li>
                <li>• Difficulty adjustment</li>
              </ul>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Adaptive Learning Path
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Personalized study plans that adapt to your learning style and progress.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Custom study schedules</li>
                <li>• Weakness identification</li>
                <li>• Progress tracking</li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Advanced Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Detailed performance insights and analytics to optimize your preparation.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Performance metrics</li>
                <li>• Time analysis</li>
                <li>• Improvement suggestions</li>
              </ul>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Timed Mock Tests
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Realistic exam simulations with precise timing and authentic test conditions.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Real exam timing</li>
                <li>• Instant scoring</li>
                <li>• Detailed solutions</li>
              </ul>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Achievement System
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Gamified learning with badges, streaks, and achievements to keep you motivated.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Study streaks</li>
                <li>• Performance badges</li>
                <li>• Milestone rewards</li>
              </ul>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Cross-Platform Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Study anywhere, anytime with seamless sync across all your devices.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Mobile & desktop apps</li>
                <li>• Offline capability</li>
                <li>• Cloud synchronization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 py-16 px-6 sm:px-12 lg:px-24 bg-[#faf7f5]">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Advanced{" "}
            <Highlighter action="highlight" color="#87CEFA">
              AI Technology
            </Highlighter>{" "}
            meets{" "}
            <Highlighter action="underline" color="#FF9800">
              Smart Learning
            </Highlighter>
          </p>

          <p className="text-gray-600 text-base sm:text-lg">
            Our cutting-edge features are designed to revolutionize how you prepare for exams, 
            combining artificial intelligence with proven learning methodologies.
          </p>

          {/* Detailed Feature List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Smart Progress Tracking</h4>
                <p className="text-sm text-gray-600">
                  Monitor your improvement with detailed analytics and personalized insights.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Collaborative Learning</h4>
                <p className="text-sm text-gray-600">
                  Study groups, peer comparisons, and shared practice sessions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Secure & Private</h4>
                <p className="text-sm text-gray-600">
                  Your data is protected with enterprise-grade security and privacy measures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Stats & Video */}
        <div className="flex-1 relative w-full">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/e8nsIPZvzH8?si=CaGyJQ5bHnpzrHa"
              title="MockCrack Features Demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Enhanced Stats Box */}
          <div className="absolute top-6 right-6 bg-pastel-blue-200 text-black rounded-lg px-6 py-4 shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <NumberTicker value={150} className="text-2xl font-bold tracking-tight" />
                <p className="text-xs uppercase">Test Created</p>
              </div>
              <div className="text-center">
                <NumberTicker value={99.9} className="text-2xl font-bold tracking-tight" />
                <p className="text-xs uppercase">Uptime %</p>
              </div>
              <div className="text-center col-span-2">
                <NumberTicker value={50000} className="text-2xl font-bold tracking-tight" />
                <p className="text-xs uppercase">Our Goal Students to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <div className="">
        <Marquee1 />
      </div>

      <div>
        <Footer/>
      </div>
    </main>
  );
}