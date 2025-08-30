"use client";
import { Marquee1 } from "@/components/created/marquee1";
import Link from "next/link";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {
  TrendingUp,
  Users,
  Shield,
  BarChart3,
  Smartphone,
  Brain,
  Clock,
  Search,
  Trophy,
  Sparkle
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import FloatingFormulas from "@/components/created/formula";
import Footer from "@/components/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import NavbarDemo from "@/components/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream-100 dark:bg-gray-900">
      <StickyBanner />
      <NavbarDemo/>
<section className="relative h-screen w-full overflow-hidden">
  {/* Background image */}
  <Image
    width={1920}
  height={1080}
    src="/images/pexels-photo-326235.jpeg"
    alt="Beautiful landscape background"
    fill
    priority
    className="object-cover object-center z-0" // Pushes background behind everything
  />

  {/* Optional overlay (gradient/dark filter) */}
  <div className="absolute inset-0 bg-black/30 -z-5"></div>

  {/* Foreground content */}
  <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-20 sm:py-28 lg:py-36">
      {/* Left: Text */}
      <div className="flex flex-col items-start justify-center">
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl
            font-bold text-pastel-blue-200
            leading-[1.08] sm:leading-[1.06] lg:leading-[1.04]
            tracking-tight
            max-w-[18ch]
          "
        >
          <span className="block">AI that helps you,</span>
          <span className="block">Ace your exam.</span>
        </h1>

        {/* Subheading */}
        <p
          className="
            mt-4 sm:mt-5 lg:mt-6
            text-base sm:text-lg md:text-xl
            text-pastel-blue-100 dark:text-gray-300
            max-w-[52ch] leading-relaxed
          "
        >
          One place to get answers, ace your tests, and crack every exam with the help of AI.
        </p>

        {/* CTAs */}
        <div className="mt-5 sm:mt-6 lg:mt-8 flex items-center gap-3">
          <Link href="/" className="inline-block">
            <button
              type="button"
              className="
                inline-flex items-center justify-center
                rounded-md
                px-10 py-3
                text-sm font-semibold
                text-white
                bg-accent-info
                shadow-sm transition
                hover:bg-pastel-blue-500 active:opacity-90
                focus:outline-none focus:ring-2 focus:ring-accent-info focus:ring-offset-2
              "
            >
              Start Now
            </button>
          </Link>

          <Link href="/" className="inline-block">
            <button
              type="button"
              className="
                inline-flex items-center justify-center
                rounded-md
                px-10 py-3
                text-sm font-semibold
                text-accent-info
                bg-accent-info/10
                border border-accent-info/20
                shadow-sm transition
                hover:bg-accent-info/15 hover:border-accent-info/30
                active:opacity-90
                focus:outline-none focus:ring-2 focus:ring-accent-info/40 focus:ring-offset-2
              "
            >
              Start Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Right side: Hero mascot */}
      <div className="flex justify-center lg:justify-end">
        <Image
          height={500}
          width={500}
          src="/icons/hero-imagea.png"
          alt="Student mascot on mountain"
          className="
            w-[90%] max-w-sm 
            sm:max-w-md sm:scale-110 sm:translate-x-0 sm:translate-y-4
            md:max-w-lg md:scale-125 md:-translate-x-24 md:translate-y-6
            lg:max-w-xl lg:scale-150 lg:-translate-x-50 lg:translate-y-30
            drop-shadow-lg
          "
        />
      </div>
    </div>
  </div>
</section>

      <section className="w-full max-w-7xl mx-auto px-6 my-16 relative">
        {/* Floating Image (absolute, no layout shift) */}
<Image
height={100}
width={100}
  src="/icons/features-image.png"
  alt="Features Illustration"
  className="
    absolute 
    top-0 
    left-1/4 
    sm:max-w-md sm:scale-110 sm:translate-x-0 sm:translate-y-4
    md:max-w-lg md:scale-125 md:-translate-x-12 md:translate-y-6
    lg:max-w-xl lg:scale-150 lg:-translate-x-160 lg:translate-y-30
    transform -translate-x-1/2
    drop-shadow-2xl pointer-events-none
    hidden md:lg:block
  "
/>

<Image
height={100}
width={100}
  src="/icons/features-imagea.png"
  alt="Features Illustration"
  className="
    absolute 
    top-0 left-1/2 transform -translate-x-1/2
    drop-shadow-2xl pointer-events-none

    sm:max-w-md sm:scale-110 sm:translate-y-4
    md:max-w-lg md:scale-125 md:-translate-x-12 md:translate-y-6
    lg:max-w-xl lg:scale-150 lg:-translate-x-20 lg:translate-y-12
    xl:max-w-xl xl:scale-100 xl:translate-x-[430px] xl:translate-y-[950px]
    hidden md:lg:block
  "
/>
<Image
height={100}
width={100}
  src="/icons/features-imageap.png"
  alt="Features Illustration"
  className="
    absolute 
    top-0 left-1/2 transform -translate-x-1/2
    drop-shadow-2xl pointer-events-none

    sm:max-w-md sm:scale-110 sm:translate-y-4
    md:max-w-lg md:scale-125 md:-translate-x-12 md:translate-y-6
    lg:max-w-xl lg:scale-150 lg:-translate-x-20 lg:translate-y-12
    xl:max-w-xl xl:scale-50 xl:translate-x-[-1040px] xl:translate-y-[1400px]
    hidden md:lg:block
  "
/>

        <div className="relative z-10">
          <FloatingFormulas />

          {/* Header Section */}
          <div className="pl-6 text-center lg:text-left lg:w-1/2 mx-auto mb-20 relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Core{" "}
              <Highlighter action="highlight" color="#87CEFA">
                Features
              </Highlighter>
            </h2>
            <p className=" mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
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

          {/* Features Grid - Clean & Professional */}
          <div className="space-y-8">
            {/* Row 1: AI Notes + Smart Search */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* AI Notes - Large Card */}
              <div className="lg:col-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 to-red-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-200 shadow-sm">
                     <Brain className="w-6 h-6 " />
                  </div>
                  <div className="flex-1">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-700 bg-red-200 rounded-full mb-3">
  <Sparkle className="w-3 h-3" />
  New
</span>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      <Highlighter action="highlight" color="#FFF0F0">
                        Perfect notes every time*
                      </Highlighter>
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Convert your study materials into comprehensive practice
                      questions using{" "}
                      <Highlighter action="underline" color="#FF6B6B">
                        advanced AI technology
                      </Highlighter>{" "}
                      that adapts to your learning style.
                    </p>
                  </div>
                </div>

                {/* Screenshot Placeholder */}
                <div className="relative h-64 lg:h-80 bg-white rounded-2xl shadow-inner border-2 border-dashed border-red-300 flex items-center justify-center mb-4">
                 <Image
                    height={100}
                    width={100}
                    src="/images/sea.png"
                    alt="AI Notes Screenshot"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Smart Search */}
              <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-200 shadow-sm">
                     <Search className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-200 rounded-full mb-3">
  <Sparkle className="w-3 h-3" />
  New
</span>

                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      <Highlighter action="highlight" color="#F0F8FF">
                        One search for everything
                      </Highlighter>
                    </h3>
                  </div>
                </div>

                {/* Screenshot Placeholder */}
                <div className="relative h-64 lg:h-80 bg-white rounded-2xl shadow-inner border-2 border-dashed border-blue-300 flex items-center justify-center mb-4">
                  <Image
                    height={100}
                    width={100}
                    src="/images/sea.png" // <-- replace with your image path
                    alt="AI Notes Screenshot"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <p className="text-gray-700">
                  <Highlighter action="underline" color="#4FC3F7">
                    Personalized study plans
                  </Highlighter>{" "}
                  that adapt to your progress with intelligent recommendations.
                </p>
              </div>
            </div>

            {/* Row 2: Analytics Dashboard + Timer */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
              {/* Analytics Dashboard */}
              <div className="lg:col-span-3 hidden md:block">
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-200 shadow-sm">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                        <Highlighter action="highlight" color="#FFFBF0">
                          Keep every plan on track
                        </Highlighter>
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Advanced analytics and{" "}
                        <Highlighter action="underline" color="#FFD54F">
                          performance tracking
                        </Highlighter>{" "}
                        to optimize your exam preparation with detailed
                        insights.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Screenshot Placeholder */}
                  <div className="relative h-96 lg:h-[28rem] bg-white rounded-2xl shadow-inner border-2 border-dashed border-yellow-300 flex items-center justify-center">
                   <Image
                    height={100}
                    width={100}
                      src="/images/sea.png" // <-- replace with your image path
                      alt="AI Notes Screenshot"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Mock Test Timer */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl border-2 border-purple-100 p-6 shadow-lg hover:shadow-xl transition-shadow h-full hidden md:block">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        <Highlighter action="highlight" color="#F3E5F5">
                          Mock Test Timer
                        </Highlighter>
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Timeline</span>
                        <span>•</span>
                        <span>Progress</span>
                      </div>
                    </div>
                  </div>

                  {/* Timer Screenshot Placeholder */}
                  <div className="bg-purple-50 rounded-xl p-6 mb-6 border-2 border-dashed border-purple-300 flex items-center justify-center h-40">
                   <Image
                    height={100}
                    width={100}
                      src="/images/sea.png" // <-- replace with your image path
                      alt="AI Notes Screenshot"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 mb-6 border-2 border-dashed border-purple-300 flex items-center justify-center h-40">
                    <Image
                    height={100}
                    width={100}
                      src="/images/sea.png" // <-- replace with your image path
                      alt="AI Notes Screenshot"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Timed mock tests with{" "}
                    <Highlighter action="underline" color="#E1BEE7">
                      realistic exam simulations
                    </Highlighter>{" "}
                    and instant performance feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Achievement System + Cross-Platform */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Achievement System */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-200 shadow-sm">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      <Highlighter action="highlight" color="#FFF0F5">
                        Achievement system that motivates
                      </Highlighter>
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <Highlighter action="underline" color="#F8BBD9">
                        Gamified learning
                      </Highlighter>{" "}
                      with badges, streaks, and achievements to keep you
                      motivated throughout your study journey.
                    </p>
                  </div>
                </div>

                {/* Achievement Screenshot Placeholder */}
                <div className="relative h-80 bg-white rounded-2xl shadow-inner border-2 border-dashed border-pink-300 flex items-center justify-center">
                  <Image
                    height={100}
                    width={100}
                    src="/images/sea.png" // <-- replace with your image path
                    alt="AI Notes Screenshot"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Cross-Platform Access */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hidden md:block">
                <div className="flex items-start gap-6 mb-6 ">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-200 shadow-sm">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      <Highlighter action="highlight" color="#F0F4FF">
                        Study anywhere, anytime
                      </Highlighter>
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <Highlighter action="underline" color="#9FA8DA">
                        Cross-platform access
                      </Highlighter>{" "}
                      with seamless sync across all your devices, offline
                      capability, and cloud synchronization.
                    </p>
                  </div>
                </div>

                {/* Multi-device Screenshot Placeholder */}
                <div className="relative h-80 bg-white rounded-2xl shadow-inner border-2 border-dashed border-indigo-300 flex items-center justify-center">
                  <Image
                    height={100}
                    width={100}
                    src="/images/sea.png" // <-- replace with your image path
                    alt="AI Notes Screenshot"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Detailed Features Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 py-16 px-6 sm:px-12 lg:px-24 relative ">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed tracking-tight">
            Advanced{" "}
            <span className="inline-block">
              <Highlighter action="highlight" color="#87CEFA">
                AI Technology
              </Highlighter>
            </span>{" "}
            meets{" "}
            <span className="inline-block align-middle">
              <Highlighter action="underline" color="#FF9800">
                Smart Learning
              </Highlighter>
            </span>
          </p>

          <p className="text-gray-600 text-base sm:text-lg">
            Our cutting-edge features are designed to revolutionize how you
            prepare for exams, combining artificial intelligence with proven
            learning methodologies.
          </p>

          {/* Detailed Feature List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Smart Progress Tracking
                </h4>
                <p className="text-sm text-gray-600">
                  Monitor your improvement with detailed analytics and
                  personalized insights.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Collaborative Learning
                </h4>
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
                <h4 className="font-semibold text-gray-900">
                  Secure & Private
                </h4>
                <p className="text-sm text-gray-600">
                  Your data is protected with enterprise-grade security and
                  privacy measures.
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
    src="images/sea.png"
    title="MockCrack Features Demo"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>


          {/* Enhanced Stats Box */}
          <div className="absolute top-6 right-6 bg-pastel-blue-200 text-black rounded-lg px-6 py-4 shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <NumberTicker
                  value={150}
                  className="text-2xl font-bold tracking-tight"
                />
                <p className="text-xs uppercase">Test Created</p>
              </div>
              <div className="text-center">
                <NumberTicker
                  value={99.9}
                  className="text-2xl font-bold tracking-tight"
                />
                <p className="text-xs uppercase">Uptime %</p>
              </div>
              <div className="text-center col-span-2">
                <NumberTicker
                  value={50000}
                  className="text-2xl font-bold tracking-tight"
                />
                <p className="text-xs uppercase">Our Goal Students to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-16 sm:py-20 lg:py-2 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <Highlighter action="highlight" color="#E3F2FD">
                How It Works
              </Highlighter>
            </h2>
    <Image
height={100}
width={100}
  src="/icons/howitworks.png"
  alt="Features Illustration"
  className="
    absolute 
    top-0 left-1/2 transform -translate-x-1/2
    drop-shadow-2xl pointer-events-none

    sm:max-w-md sm:scale-110 sm:translate-y-4
    md:max-w-lg md:scale-125 md:-translate-x-12 md:translate-y-6
    lg:max-w-xl lg:scale-150 lg:-translate-x-20 lg:translate-y-12
    xl:max-w-xl xl:scale-100 xl:translate-x-[290px] xl:translate-y-[200px]
    hidden md:block
  "
/>
            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how{" "}
              <Highlighter action="underline" color="#FFB74D">
                MockCrack
              </Highlighter>{" "}
              helps students{" "}
              <Highlighter action="highlight" color="#C8E6C9">
                achieve more
              </Highlighter>{" "}
              with{" "}
              <Highlighter action="highlight" color="#FFCCBC">
                AI-powered learning
              </Highlighter>{" "}
              in just a few simple steps.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative">
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000"></div>

            {/* Video Container */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 ">
              {/* Browser-like Header */}
              <div className="flex items-center justify-between mb-6"></div>

              {/* Video Frame */}
<div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-inner bg-gray-900">
  <iframe
    className="absolute top-0 left-0 w-full h-full rounded-2xl"
    src="images/sea.png"
    title="How MockCrack Works - Complete Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


              {/* Video Description & CTA */}
              <div className="mt-8 text-center">
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  Watch how thousands of students are{" "}
                  <Highlighter action="underline" color="#B39DDB">
                    transforming their study habits
                  </Highlighter>{" "}
                  and achieving{" "}
                  <Highlighter action="highlight" color="#DCEDC1">
                    outstanding results
                  </Highlighter>{" "}
                  with our{" "}
                  <Highlighter action="highlight" color="#FFE0B2">
                    revolutionary platform
                  </Highlighter>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-20">
        <Marquee1 />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
