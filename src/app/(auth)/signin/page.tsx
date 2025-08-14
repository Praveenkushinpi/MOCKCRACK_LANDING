"use client";
import Link from "next/link";
import { 
  BookOpen,
  CheckCircle,
  Shield
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";

export default function SignUpPage() {
  const handleGoogleSignIn = () => {
    // Add Google OAuth logic here
    console.log("Google sign in clicked");
  };

  const handleAppleSignIn = () => {
    // Add Apple OAuth logic here
    console.log("Apple sign in clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full" />
      <div className="fixed top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full" />
      <div className="fixed bottom-20 left-1/4 w-20 h-20 bg-pink-200/20 rounded-full" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Side - Branding & Benefits */}
        <div className="hidden lg:block">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">MockCrack</h1>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your{" "}
              <Highlighter action="highlight" color="#FFB6C1">
                Success Journey
              </Highlighter>{" "}
              Today
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Be among the{" "}
              <Highlighter action="underline" color="#87CEFA">
                first students
              </Highlighter>{" "}
              to experience our revolutionary{" "}
              <Highlighter action="highlight" color="#FFD700">
                AI-powered exam preparation
              </Highlighter>{" "}
              platform for JEE & NEET.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "AI-powered personalized learning paths",
                "Comprehensive practice test library", 
                "Real-time performance insights",
                "Expert doubt clearing support"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Early Access Benefits</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Exclusive lifetime discounts</li>
                <li>• Priority feature requests</li>
                <li>• Direct access to our team</li>
                <li>• Shape the future of MockCrack</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">MockCrack</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join MockCrack Early</h2>
            <p className="text-gray-600">Get exclusive early access to our platform - completely free</p>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="space-y-4 mb-6">
            {/* Google Sign Up Button */}
            <button 
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center px-4 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Apple Sign Up Button */}
            <button 
              onClick={handleAppleSignIn}
              className="w-full flex items-center justify-center px-4 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.037-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Early Access Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Early Access • Limited Spots</span>
            </div>
          </div>

          {/* Terms */}
          <div className="text-center mb-6">
            <p className="text-xs text-gray-500">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Security Notice */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-500 mr-2" />
              <p className="text-xs text-gray-600 text-center">
                Your data is encrypted and secure. We never share your information.
              </p>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-600 hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
