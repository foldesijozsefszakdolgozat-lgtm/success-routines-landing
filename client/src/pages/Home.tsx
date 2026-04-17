import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Clock, Zap, Moon } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Warm Sophistication with Organic Shapes
 * - Warm color palette: Cream background, terracotta accents, sage green
 * - Organic, flowing layouts with curved dividers
 * - Playfair Display for headlines (elegance), Lato for body (warmth)
 * - Narrative-driven flow building emotional connection
 * - Conversion-focused with clear CTAs and social proof
 */

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 11, seconds: 58 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const affiliateLink = "https://www.checkout-ds24.com/redir/633282/Josephsteez/";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-accent">Success Routines</div>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
          >
            Get Instant Access
            <ArrowRight size={18} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663173283262/dLqqJKRsVRUD3f9PkhGgza/hero-background-CDiRk3G2qu8NiURZBiUPBJ.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 z-1" />

        <div className="container relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-display text-accent leading-tight">
                  Why 90% of Hard Workers Never Reach the Top
                </h1>
                <p className="text-2xl text-secondary font-semibold">
                  And The 'Rhythm Secret' That Separates the Busy from the Billionaires
                </p>
              </div>

              <p className="text-body text-foreground/80 leading-relaxed max-w-lg">
                It isn't a lack of effort; it's a lack of <span className="font-bold text-accent">Architecture</span>. Stop 'grinding' through your to-do list and discover the <span className="font-bold">"Success Cadence"</span> that generates <span className="font-bold text-accent">10x the results with half the stress</span>.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Unlock Your Success Cadence
                  <ArrowRight size={20} />
                </a>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">$17.99</p>
                  <p className="text-sm text-foreground/60">
                    <span className="line-through">$47</span> 62% OFF
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-sm text-foreground/70">✓ 60-Day Money-Back Guarantee</p>
                <p className="text-sm text-foreground/70">✓ Instant Digital Download</p>
                <p className="text-sm text-foreground/70">✓ Bonus Ebook Included FREE</p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663173283262/dLqqJKRsVRUD3f9PkhGgza/success-journey-4xs2sJrv8mfUq7vWAfPwth.webp"
                  alt="Success Journey"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Curved Divider */}
        <svg
          className="absolute bottom-0 left-0 right-0 z-5"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="#faf8f3"
          />
        </svg>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-heading text-accent mb-6">
                Stop the 'Morning-Muddle'
              </h2>
              <p className="text-body text-foreground/80">
                Break through the invisible barrier of 'Reactive Living.' Stop checking your email the second you wake up and learn the <span className="font-bold">3-step 'Priority Anchor'</span> that ensures your most important work is done before the world starts asking for your time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                {
                  icon: Clock,
                  title: "Morning Clarity",
                  description: "Start your day with absolute focus and intention",
                },
                {
                  icon: Zap,
                  title: "Peak Productivity",
                  description: "Get more done in less time with proven systems",
                },
                {
                  icon: Moon,
                  title: "Evening Recovery",
                  description: "Rest deeply and recharge for tomorrow",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border"
                >
                  <item.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Background */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663173283262/dLqqJKRsVRUD3f9PkhGgza/features-illustration-GxbSczn5dtUJtdYCk6dR84.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="container relative z-10">
          <h2 className="text-heading text-center text-accent mb-16">
            What You'll Learn Inside
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Morning routines that set a positive tone for the entire day",
              "Productivity hacks used by top performers across industries",
              "How to manage time and energy for maximum efficiency",
              "Evening rituals that promote rest, reflection, and recovery",
              "Simple steps to create your own success-driven daily routine",
              "The science of Circadian Alignment and Deep Work Batching",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-body text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-heading text-center text-accent mb-16">
            Trusted by 365,000+ Readers
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Lance Fisher",
                location: "Palo Alto, California",
                text: "I was constantly busy but never felt like I was making real progress. This book addressed that frustration immediately. Daily Routines of Successful People showed me how structure, not motivation, was the missing piece.",
                rating: 5,
              },
              {
                name: "Thomas McLean",
                location: "Carmel, Indiana",
                text: "My biggest problem was inconsistency. I would start strong and fall off within days. This book broke down how successful people rely on simple, repeatable routines instead of willpower.",
                rating: 5,
              },
              {
                name: "Jeremy Bill",
                location: "Fremont, California",
                text: "This book helped me understand how successful people prioritize their time and energy. The routines are realistic and adaptable, not extreme. I now feel more in control of my day.",
                rating: 5,
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="p-8 bg-background border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                </div>
                <p className="text-body text-foreground/80 mb-6">"{review.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-foreground/60">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/70">
              Join thousands of successful professionals who've transformed their daily routines
            </p>
          </div>
        </div>
      </section>

      {/* Why This Ebook is Different */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="container max-w-3xl">
          <h2 className="text-heading text-accent mb-8">
            Why This Ebook is Different
          </h2>

          <div className="space-y-6 text-body text-foreground/80">
            <p>
              Unlike generic productivity guides, <span className="font-bold">Daily Routines of Successful People</span> draws inspiration from real-life achievers and translates their strategies into simple, actionable steps you can apply right away.
            </p>

            <p>
              It's about creating a routine that works for <span className="font-bold">YOU</span>, not copying someone else's lifestyle. We move beyond "waking up at 5 AM" clichés to deconstruct the science of Circadian Alignment, Deep Work Batching, and Systematic Recovery.
            </p>

            <p>
              Learn how to build a customized <span className="font-bold">"High-Performance OS"</span> that automates your discipline, eliminates distractions, and protects your energy so you can dominate your field without sacrificing your well-being.
            </p>

            <p className="pt-4 text-lg font-semibold text-accent">
              Stop leaving your success to chance. Start designing it, one hour at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-heading">Limited Time Offer</h2>

          <div className="flex justify-center gap-8 text-center">
            <div className="bg-accent-foreground/20 rounded-lg p-6 min-w-24">
              <p className="text-4xl font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </p>
              <p className="text-sm mt-2">Hours</p>
            </div>
            <div className="bg-accent-foreground/20 rounded-lg p-6 min-w-24">
              <p className="text-4xl font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </p>
              <p className="text-sm mt-2">Minutes</p>
            </div>
            <div className="bg-accent-foreground/20 rounded-lg p-6 min-w-24">
              <p className="text-4xl font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </p>
              <p className="text-sm mt-2">Seconds</p>
            </div>
          </div>

          <p className="text-lg">
            Special Price: <span className="text-3xl font-bold">$17.99</span> (Was $47)
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background">
        <div className="container text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-heading text-accent">
            Engineer Your Path to Excellence
          </h2>

          <p className="text-body text-foreground/80">
            Success isn't a stroke of luck; it's a repeatable sequence of daily actions. Your success routine starts today.
          </p>

          <div className="space-y-4 pt-8">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto px-12 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
            >
              Get Instant Access Now
            </a>

            <div className="space-y-3 text-sm text-foreground/70">
              <p>✓ Instant Digital Download</p>
              <p>✓ 60-Day Money-Back Guarantee</p>
              <p>✓ Bonus Ebook Included FREE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container text-center space-y-4 text-foreground/60 text-small">
          <p>
            © 2026 Daily Routines of Successful People. All rights reserved.
          </p>
          <p>
            This ebook is for educational purposes only. Results will vary depending on personal discipline, consistency, and circumstances.
          </p>
          <p>
            <a href="#" className="text-accent hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-accent hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
