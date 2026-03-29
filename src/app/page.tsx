import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const SERVICES = [
  {
    title: "Life Coaching",
    desc: "Personalized one-on-one sessions to help you gain clarity, set meaningful goals, and create an actionable roadmap for the life you truly desire.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Confidence & Imposter Syndrome",
    desc: "Break free from self-doubt and imposter syndrome. Build unshakable self-confidence to show up authentically in your career, relationships, and life.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "NLP & Mindfulness",
    desc: "Harness the power of Neuro-Linguistic Programming and mindfulness practices to rewire limiting beliefs, manage stress, and cultivate inner peace.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Anxiety & Mental Wellness",
    desc: "Learn proven techniques to manage anxiety, reduce stress, and nurture your mental health. Build resilience and find calm amidst life's challenges.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Career Growth & Mindset",
    desc: "Develop a powerful growth mindset to accelerate your career. Overcome limiting beliefs, build leadership presence, and create the professional life you deserve.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Women Empowerment",
    desc: "Empowering women to own their voice, break barriers, and step into their full potential. Reclaim your power and create a life on your own terms.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Relationship & Connection",
    desc: "Build deeper, more authentic relationships — with your partner, family, and most importantly, with yourself. Transform how you connect and communicate.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Parenting Coaching",
    desc: "Navigate the beautiful chaos of parenthood with confidence. Learn conscious parenting techniques that nurture both your child's growth and your own wellbeing.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Habit Building & Personal Development",
    desc: "Transform your daily life through intentional habit building. Create sustainable routines and a personal development practice that aligns with your deepest goals.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

const PILLARS = [
  {
    number: "01",
    title: "Awareness",
    desc: "Becoming conscious of the patterns, beliefs, and stories that shape your reality — the essential first step to transformation.",
  },
  {
    number: "02",
    title: "Alignment",
    desc: "Harmonizing your thoughts, emotions, and actions with your authentic self and the life you truly want to live.",
  },
  {
    number: "03",
    title: "Synchronicity",
    desc: "When you're in flow, life begins to conspire in your favour. Learn to recognize and harness the magic of meaningful coincidences.",
  },
  {
    number: "04",
    title: "Transformation",
    desc: "Lasting change that ripples through every area of your life — relationships, career, health, and your deepest sense of purpose.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Neha has this incredible ability to see through the noise and guide you back to what truly matters. My sessions with her transformed the way I approach both my relationships and my career.",
    name: "Priya S.",
    role: "Entrepreneur",
  },
  {
    quote: "I came to Neha feeling completely stuck. Within weeks, I had clarity I hadn't felt in years. Her NLP techniques and warm presence made all the difference.",
    name: "Ankit R.",
    role: "Corporate Leader",
  },
  {
    quote: "The inner child healing work we did together was life-changing. Neha holds such a safe, compassionate space. I finally feel free from patterns that held me back for decades.",
    name: "Meera K.",
    role: "Mother & Teacher",
  },
];

const CONTENT_TOPICS = [
  "Overcome Imposter Syndrome",
  "Build Self Confidence",
  "Mindful Living",
  "Career Growth Mindset",
  "Anxiety Management",
  "Personal Development",
  "Women Empowerment",
  "Habit Building",
  "Mental Health",
  "Emotional Empowerment",
  "Relationships",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Warm ambient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px] animate-float" />
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-rose/[0.06] blur-[100px] animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary/[0.03] blur-[80px] animate-pulse-slow" />
        </div>

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium ornament mb-8">
                Certified Life Coach
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                Find Your{" "}
                <span className="gradient-text italic">
                  Perfect Flow
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl mx-auto">
                Create magic through synchronicity. I&apos;m{" "}
                <span className="text-foreground font-medium">Neha Mittal</span>,
                and I help people rise into their most authentic, empowered selves.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent-light transition-colors duration-300"
                >
                  Begin Your Journey
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-accent/20 text-sm font-medium text-foreground/80 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Inspirational quote */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="mt-16 px-6 py-5 rounded-2xl bg-surface/60 border border-accent/8 max-w-md mx-auto">
                <svg className="w-6 h-6 text-accent/30 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-serif text-sm sm:text-base italic text-foreground/70 leading-relaxed">
                  When you align with your true self, the universe
                  begins to move with you — not against you.
                </p>
                <p className="mt-3 text-xs text-accent font-medium tracking-wide">— Neha Mittal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <div className="w-5 h-8 border border-foreground/15 rounded-full flex justify-center pt-2">
            <div className="w-0.5 h-1.5 bg-accent/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-28 sm:py-36 px-6 bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              About Neha
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight">
              From the corporate world to{" "}
              <span className="gradient-text italic">
                guiding transformation
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  I&apos;m Neha Mittal — a certified life coach, NLP practitioner,
                  and mindfulness guide. After years in the corporate world as a
                  software engineer, I experienced my own deep transformation and
                  realized my true calling was helping others find theirs.
                </p>
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  I founded <span className="text-foreground font-medium">RiseWise Circle</span> to
                  create a space where people can reconnect with their authentic
                  selves, heal old patterns, and design a life that feels truly
                  aligned and magical.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  My approach blends the precision of NLP with the depth of
                  mindfulness and the warmth of heart-centered coaching. Whether
                  you&apos;re navigating a career transition, healing relationships,
                  or seeking deeper purpose — I&apos;m here to walk alongside you.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["ICF Certified", "NLP Practitioner", "Mindfulness Guide", "Workshop Facilitator"].map((badge) => (
                    <span
                      key={badge}
                      className="px-4 py-2 rounded-full border border-accent/15 bg-accent/5 text-xs font-medium text-accent tracking-wide"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stats */}
          <AnimateOnScroll delay={300}>
            <div className="mt-16 pt-10 border-t border-foreground/5 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Lives Transformed" },
                { value: "8+", label: "Years of Practice" },
                { value: "50+", label: "Workshops Held" },
                { value: "6", label: "Coaching Specialties" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-serif text-3xl sm:text-4xl font-semibold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="py-28 sm:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Services
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              How I Can Help You{" "}
              <span className="gradient-text italic">Rise</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              Every journey is unique. I offer a range of coaching modalities
              tailored to meet you exactly where you are and guide you to where
              you want to be.
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={250 + i * 80}>
                <div className="group relative h-full p-7 rounded-2xl border border-foreground/5 bg-surface/30 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.03] rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/[0.07] transition-all duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-accent/8 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/12 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section id="philosophy" className="py-28 sm:py-36 px-6 bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Philosophy
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              The Four Pillars of{" "}
              <span className="gradient-text italic">
                Transformation
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              My coaching philosophy is built on four interconnected pillars
              that guide every session, workshop, and program I offer.
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {PILLARS.map((pillar, i) => (
              <AnimateOnScroll key={pillar.number} delay={250 + i * 100}>
                <div className="group relative p-8 rounded-2xl border border-foreground/5 bg-background hover:border-accent/15 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-4xl font-bold text-accent/15 group-hover:text-accent/30 transition-colors duration-500 shrink-0">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Flow visual */}
          <AnimateOnScroll delay={650}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/5 border border-accent/10">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
                <p className="text-sm text-accent font-medium tracking-wide">
                  Awareness &rarr; Alignment &rarr; Synchronicity &rarr; Transformation
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="py-28 sm:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Testimonials
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Words from Those Who&apos;ve{" "}
              <span className="gradient-text italic">Risen</span>
            </h2>
          </AnimateOnScroll>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={200 + i * 100}>
                <div className="relative h-full p-8 rounded-2xl border border-foreground/5 bg-surface/30 flex flex-col">
                  <svg className="w-8 h-8 text-accent/15 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm text-muted leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-5 border-t border-foreground/5">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted mt-0.5">{t.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Instagram / Content ─── */}
      <section className="py-28 sm:py-36 px-6 bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Content & Community
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Join the{" "}
              <span className="gradient-text italic">RiseWise</span>{" "}
              Community
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              Follow along on Instagram and YouTube for daily inspiration,
              coaching insights, mindfulness tips, and behind-the-scenes of
              the RiseWise Circle journey.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {CONTENT_TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-full border border-foreground/6 bg-background text-sm text-foreground/70 hover:border-accent/25 hover:text-accent transition-colors duration-300 cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="https://www.instagram.com/risewisecircle/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-sm font-medium hover:opacity-90 transition-opacity duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow @risewisecircle
              </a>
              <a
                href="https://www.youtube.com/@RiseWiseCircle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FF0000] text-white text-sm font-medium hover:bg-[#CC0000] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
              <p className="text-sm text-muted">
                New content posted daily
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Contact / CTA ─── */}
      <section id="contact" className="py-28 sm:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Get Started
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Your Transformation{" "}
              <span className="gradient-text italic">Begins Here</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Ready to step into your most aligned, authentic life?
              Book a complimentary discovery call and let&apos;s explore
              how we can work together.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@risewisecircle.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent-light transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Book a Free Discovery Call
              </a>
              <a
                href="https://www.instagram.com/risewisecircle/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-foreground/10 text-sm font-medium text-foreground/80 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Connect on Instagram
              </a>
              <a
                href="https://www.youtube.com/@RiseWiseCircle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-foreground/10 text-sm font-medium text-foreground/80 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </AnimateOnScroll>

          {/* Trust signals */}
          <AnimateOnScroll delay={400}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-muted/60 tracking-wide uppercase">
              <span>Certified Coach</span>
              <span className="w-1 h-1 rounded-full bg-accent/30" />
              <span>NLP Practitioner</span>
              <span className="w-1 h-1 rounded-full bg-accent/30" />
              <span>500+ Clients</span>
              <span className="w-1 h-1 rounded-full bg-accent/30" />
              <span>Online & In-Person</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-10 px-6 border-t border-foreground/5 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-lg font-semibold text-foreground">
                RiseWise
              </span>
              <span className="font-serif text-lg font-light text-accent">
                Circle
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/risewisecircle/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-foreground/8 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@RiseWiseCircle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-foreground/8 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="mailto:hello@risewisecircle.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-foreground/8 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted/50">
              &copy; {new Date().getFullYear()} RiseWise Circle by Neha Mittal. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted/50">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
