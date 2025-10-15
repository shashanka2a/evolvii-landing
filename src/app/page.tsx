'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlitchText } from '@/components/GlitchText';
import { GlowingCard } from '@/components/GlowingCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import exampleImage from '@/assets/5f76cd8f050264837e28b39616ff35850177b07a.png';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail('');
    // Redirect to evolvii.online
    window.open('https://evolvii.online', '_blank');
  };

  const manifestoPoints = [
    "we reject eco-anxiety paralysis",
    "action over endless scrolling", 
    "community beats isolation",
    "progress not perfection",
    "your voice matters now"
  ];

  const founderMessage = {
    headline: "every other climate app is a lullaby,",
    subheadline: "we are the scream when they finally wake up.",
    quote: "people don't pull up info dashboards during disasters, they scroll, they panic… but imagine if they pulled up evolvii instead and she ACTUALLY helps everyone?!",
    tagline: "100% action, 100% style",
    description: "evolvii transforms awareness into impact, a little hug and a nice big shove, and style, whatever that means. (she does it with style.)",
    funnel: ["doom", "action", "change"],
    motto: "no soul stealing, just soul saving sass"
  };

  const faqData = [
    {
      question: "What is evolvii?",
      answer: "evolvii is a platform that transforms eco-anxiety into actionable climate solutions. We connect passionate individuals with real-world projects and communities that make a difference."
    },
    {
      question: "How does it work?",
      answer: "Our AI-powered platform matches you with climate actions based on your interests, skills, and location. From local cleanups to policy advocacy, we make it easy to find your place in the climate movement."
    },
    {
      question: "Is it really free?",
      answer: "Yes! evolvii is completely free to use. We believe climate action shouldn't be behind a paywall. Our mission is to democratize environmental activism."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up with your email below. We'll send you personalized action opportunities and connect you with like-minded activists in your area."
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-[#121212]">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/evolvii-logo-large.svg" 
              alt="evolvii logo" 
              className="h-16 md:h-20 mx-auto"
            />
          </motion.div>
          
          <GlitchText 
            text="eco-paralysis detected!!!" 
            className="text-4xl md:text-6xl lg:text-8xl mb-8 tracking-tight leading-tight"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            turn climate anxiety into unstoppable action. connect. create. evolve.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm md:text-base text-orange-300 max-w-xl mx-auto mb-8"
          >
            a new funnel: <span className="text-orange-400">doom → action → change</span>
          </motion.div>
          
          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button
              onClick={() => window.open('https://evolvii.online/', '_blank')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              try evolvii
            </Button>
            <Button
              onClick={() => window.open('https://givebutter.com/OaQqYK', '_blank')}
              variant="outline"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
            >
              donate
            </Button>
          </motion.div>
        </motion.div>

        {/* Award Badges */}
        <AnimatedSection delay={0.8} direction="up" className="flex flex-col sm:flex-row gap-6 mt-12">
          <GlowingCard 
            glowColor="purple" 
            className="text-center" 
            onClick={() => window.open('https://evolvii.online', '_blank')}
          >
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              evolvii
            </div>
            <div className="text-xs text-gray-300 mb-1">ACTIVISM.</div>
            <div className="text-xs text-gray-300 mb-1">INTELLIGENCE.</div>
            <div className="text-xs text-gray-300 mb-3">ATTITUDE</div>
            <div className="text-xs text-gray-400 italic">soul saving sass</div>
          </GlowingCard>
          
          <GlowingCard 
            glowColor="blue" 
            className="text-center"
            onClick={() => window.open('https://evolvii.online', '_blank')}
          >
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              WINNER OF
            </div>
            <div className="text-sm text-gray-300 mb-2">THE BEST</div>
            <div className="text-sm text-gray-300 mb-2">OVERALL</div>
            <div className="text-sm text-gray-300 mb-2">SOLUTION</div>
            <div className="text-xs text-gray-400">HACKATHON</div>
            <div className="text-xs text-gray-400">MIAMI 2023</div>
          </GlowingCard>
        </AnimatedSection>
      </section>

      {/* Founder Message Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {founderMessage.headline}
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              {founderMessage.subheadline}
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-20">
          <GlowingCard glowColor="orange" className="p-8 text-center">
            <div className="space-y-6">
              <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                "{founderMessage.quote}"
              </blockquote>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  {founderMessage.tagline}
                </span>
                <span className="text-gray-500">~</span>
              </div>
            </div>
          </GlowingCard>
        </AnimatedSection>

        {/* The Funnel */}
        <AnimatedSection delay={0.6} className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
            {founderMessage.funnel.map((step, index) => (
              <React.Fragment key={step}>
                <GlowingCard 
                  glowColor={index === 0 ? 'orange' : index === 1 ? 'blue' : 'purple'} 
                  className="text-center min-w-[120px]"
                >
                  <div className="text-xl md:text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {step}
                  </div>
                </GlowingCard>
                {index < founderMessage.funnel.length - 1 && (
                  <div className="text-2xl text-purple-400 rotate-90 md:rotate-0">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </AnimatedSection>

        {/* Description & Motto */}
        <AnimatedSection delay={0.8} className="text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {founderMessage.description}
          </p>
          <div className="bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent text-lg md:text-xl">
            {founderMessage.motto}
          </div>
        </AnimatedSection>
      </section>

      {/* Manifesto */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {manifestoPoints.map((point, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.2} 
              direction="up"
              className="group"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300 cursor-default">
                  {point}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            evolve
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            get started towards a better future.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-orange-500/20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'start evolving'}
            </Button>
          </form>
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            questions?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-700 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-800/50 transition-colors text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1580411786883-30583eb94985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmxvcmFsJTIwYWN0aXZpc3QlMjBuYXR1cmV8ZW58MXx8fHwxNzU5NTE0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Minimalist floral nature"
              className="w-32 h-32 rounded-full mx-auto mb-6 opacity-60 object-cover"
              width={128}
              height={128}
            />
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            join a global community of changemakers. together, we're not just fighting climate change — 
            we're evolving into the solution.
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>© 2025 evolvii</span>
            <span>•</span>
            <span>built with activism + intelligence + attitude</span>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  );
}