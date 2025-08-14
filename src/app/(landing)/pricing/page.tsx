"use client";
import Navbar from "@/components/navBar";
import Link from "next/link";
import { 
  Check, 
  X, 
  Crown, 
  BookOpen,
  Trophy
} from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import Footer from "@/components/footer";
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

export default function PricingPage() {
  const plans = [
    {
      name: "Free Starter",
      price: 0,
      period: "forever",
      description: "Perfect for getting started with exam preparation",
      color: "blue",
      popular: false,
      features: [
        { text: "1 Practice Tests", included: true },
        { text: "Basic Performance Analytics", included: true },
        { text: "Community Access", included: false },
        { text: "AI Question Generation", included: false },
        { text: "Detailed Solutions", included: false },
        { text: "Priority Support", included: false },
        { text: "Performance Comparison", included: false },
      ],
      cta: "Get Started Free",
      icon: BookOpen
    },
    {
      name: "Student Pro",
      price: 99,
      originalPrice: 199,
      period: "month",
      description: "Ideal for serious JEE/NEET/Other aspirants",
      color: "purple",
      popular: true,
      features: [
        { text: "30 Practice Tests", included: true },
        { text: "Advanced Analytics & Insights", included: true },
        { text: "AI-Powered Question Bank", included: true },
        { text: "Performance Comparison", included: true },
        { text: "Study Groups & Forums", included: true },
        { text: "Email Support", included: true }
      ],
      cta: "Start Free Trial",
      icon: Trophy
    },
    {
      name: "Premium Elite",
      price: 599,
      originalPrice: 999,
      period: "month",
      description: "Ultimate package for competitive exam success",
      color: "orange",
      popular: false,
      features: [
        { text: "over 100 Practice Tests", included: true },
        { text: "Advanced Analytics & Insights", included: true },
        { text: "AI-Powered Question Bank", included: true },
        { text: "Performance Comparison", included: true },
        { text: "Early Access to New Features", included: true },
        { text: "Priority Support 24/7", included: true }
      ],
      cta: "Go Premium",
      icon: Crown
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
            Choose Your Success Path
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join over 50,000+ students who cracked JEE & NEET with MockCrack
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              "✓ 7-day free trial",
              "✓ Cancel anytime",
              "✓ Money-back guarantee",
              "✓ All features included"
            ].map((item, index) => (
              <motion.span 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 shadow-sm border ${
                plan.popular ? 'border-purple-200 shadow-lg' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan Icon */}
              <motion.div 
                className={`w-12 h-12 rounded-xl bg-${plan.color}-500 flex items-center justify-center text-white mb-4`}
              >
                <plan.icon className="w-6 h-6" />
              </motion.div>

              {/* Plan Details */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">₹</span>
                  <NumberTicker 
                    value={plan.price} 
                    className="text-3xl font-bold text-gray-900"
                  />
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500 line-through">₹{plan.originalPrice}</span>
                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Save {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-gray-300 mr-3 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={plan.price === 0 ? "/register" : "/checkout"}
                className={`w-full py-3 px-4 rounded-lg font-medium text-center block transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-purple-500 text-white hover:bg-purple-600' 
                    : plan.price === 0
                    ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              q: "Can I switch plans anytime?",
              a: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
            },
            {
              q: "Is there a money-back guarantee?",
              a: "Absolutely! We offer a 30-day money-back guarantee if you're not satisfied with MockCrack."
            },
            {
              q: "Do you offer student discounts?",
              a: "Yes, we offer special discounts for students from economically weaker sections. Contact support for details."
            },
            {
              q: "How does the free trial work?",
              a: "You get full access to all premium features for 7 days. No credit card required to start your trial."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <h4 className="font-medium text-gray-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
