import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BadgeCheck, ChevronLeft, Compass, Globe, Layers, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import pathwayBg from '@/assets/additional-pictures/IMG_9133.JPG';

type PathwayKey = 'ib' | 'cambridge';

const pathways: Record<
  PathwayKey,
  {
    key: PathwayKey;
    label: string;
    tagline: string;
    description: string;
    bullets: string[];
    chips: string[];
    cta: string;
    link: string;
    icon: typeof Globe;
  }
> = {
  ib: {
    key: 'ib',
    label: 'IB Primary Years Pathway',
    tagline: 'Inquiry-led, concept-based, globally minded.',
    description:
      'The IB pathway nurtures curiosity through transdisciplinary units that connect ideas, cultures, and real-life action.',
    bullets: [
      'Inquiry-led projects build deep conceptual understanding.',
      'Authentic assessments and exhibitions celebrate growth.',
      'Wellbeing, reflection, and learner agency are built-in.',
    ],
    chips: ['Inquiry-led', 'Global Mindset', 'Student Agency'],
    cta: 'Explore IB Primary Years',
    link: '/programmes/primary-years',
    icon: Globe,
  },
  cambridge: {
    key: 'cambridge',
    label: 'Cambridge International Pathway',
    tagline: 'Structured, academically rigorous, exam-ready.',
    description:
      'The Cambridge pathway offers clear academic milestones with measurable progress from early years toward IGCSE.',
    bullets: [
      'Clear, structured assessments benchmark every stage.',
      'Content-rich curriculum strengthens subject mastery.',
      'Builds confidence for Cambridge Lower Secondary & IGCSE.',
    ],
    chips: ['Structured Progress', 'Academic Milestones', 'Exam Readiness'],
    cta: 'Explore Cambridge Primary',
    link: '/programmes/cambridge-primary',
    icon: Layers,
  },
};

type PromptOption = {
  key: PathwayKey;
  title: string;
  description: string;
  highlights: string[];
  icon: typeof Compass;
  chip: string;
};

type Prompt = {
  id: string;
  question: string;
  subtitle: string;
  options: PromptOption[];
};

const prompts: Prompt[] = [
  {
    id: 'learning-style',
    question: 'How does your child learn best?',
    subtitle: 'Choose the description that resonates most.',
    options: [
      {
        key: 'ib',
        title: 'Curious Explorer',
        description: 'Thrives on asking “why?”, connecting ideas, and presenting learning creatively.',
        highlights: ['Enjoys big-picture thinking', 'Loves collaborative inquiries', 'Lights up during exhibitions'],
        icon: Compass,
        chip: 'Inquiry & Creativity',
      },
      {
        key: 'cambridge',
        title: 'Focused Achiever',
        description: 'Thrives on clear goals, structured milestones, and measurable progress.',
        highlights: ['Motivated by benchmarks', 'Prefers organised lessons', 'Enjoys subject mastery'],
        icon: Target,
        chip: 'Structured Progress',
      },
    ],
  },
  {
    id: 'family-priority',
    question: 'What is your family prioritising right now?',
    subtitle: 'Pick the focus that feels most important.',
    options: [
      {
        key: 'ib',
        title: 'Global Citizenship',
        description: 'You value empathy, international mindedness, and creative problem-solving.',
        highlights: ['Learning through action', 'Interdisciplinary projects', 'Confidence in presenting ideas'],
        icon: Globe,
        chip: 'Global Perspective',
      },
      {
        key: 'cambridge',
        title: 'Academic Clarity',
        description: 'You value clear benchmarks, subject mastery, and exam-ready preparation.',
        highlights: ['Step-by-step progression', 'Frequent assessments', 'Strong subject fundamentals'],
        icon: Layers,
        chip: 'Exam Pathway',
      },
    ],
  },
  {
    id: 'assessment-style',
    question: 'Which assessment style suits your child?',
    subtitle: 'Think about how they like to show their learning.',
    options: [
      {
        key: 'ib',
        title: 'Authentic Showcases',
        description: 'Prefers portfolios, exhibitions, and real-world projects to demonstrate understanding.',
        highlights: ['Portfolios & reflections', 'Student-led presentations', 'Action-oriented outcomes'],
        icon: Compass,
        chip: 'Authentic Assessment',
      },
      {
        key: 'cambridge',
        title: 'Formal Milestones',
        description: 'Prefers tests with clear criteria, structured rubrics, and measurable results.',
        highlights: ['Structured exams', 'Milestone tracking', 'Confidence in timed settings'],
        icon: Layers,
        chip: 'Formal Assessment',
      },
    ],
  },
];

export const PathwaySelectionSection = () => {
  const [stage, setStage] = useState<'intro' | 'question' | 'result'>('intro');
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, PathwayKey>>({});
  const [selectedPathway, setSelectedPathway] = useState<PathwayKey | null>(null);
  const [showCompare, setShowCompare] = useState(false);

  const recommended = selectedPathway ? pathways[selectedPathway] : null;
  const RecommendedIcon = recommended?.icon ?? Globe;

  const totalPrompts = prompts.length;

  const stageLabel = useMemo(() => {
    if (stage === 'intro') return 'start';
    if (stage === 'question') return `prompt-${currentPromptIndex + 1}`;
    return 'result';
  }, [stage, currentPromptIndex]);

  const progressValue =
    stage === 'intro' ? 0 : stage === 'question' ? (currentPromptIndex + 1) / totalPrompts : 1;

  const currentPrompt = prompts[currentPromptIndex];

  const handleStart = () => {
    setStage('question');
    setShowCompare(false);
  };

  const handleSelect = (key: PathwayKey) => {
    if (stage !== 'question' || !currentPrompt) {
      setSelectedPathway(key);
      setStage('result');
      setShowCompare(false);
      return;
    }

    const nextAnswers = { ...answers, [currentPrompt.id]: key };
    setAnswers(nextAnswers);

    const isLastPrompt = currentPromptIndex === totalPrompts - 1;
    if (isLastPrompt) {
      const scores = prompts.reduce(
        (acc, prompt) => {
          const response = nextAnswers[prompt.id];
          if (response === 'ib') acc.ib += 1;
          if (response === 'cambridge') acc.cambridge += 1;
          return acc;
        },
        { ib: 0, cambridge: 0 },
      );

      const winner: PathwayKey =
        scores.ib === scores.cambridge
          ? nextAnswers[currentPrompt.id]
          : scores.ib > scores.cambridge
            ? 'ib'
            : 'cambridge';

      setSelectedPathway(winner);
      setStage('result');
      setShowCompare(false);
      return;
    }

    setTimeout(() => {
      setCurrentPromptIndex((prev) => prev + 1);
    }, 200);
  };

  const handleRestart = () => {
    setStage('intro');
    setCurrentPromptIndex(0);
    setAnswers({});
    setSelectedPathway(null);
    setShowCompare(false);
  };

  const handleBack = () => {
    if (currentPromptIndex === 0) return;
    setCurrentPromptIndex((prev) => prev - 1);
  };

  const handleGlobalBack = () => {
    if (stage === 'intro') return;
    if (stage === 'question') {
      if (currentPromptIndex === 0) {
        setStage('intro');
        return;
      }
      handleBack();
      return;
    }
    if (stage === 'result') {
      setStage('question');
      setCurrentPromptIndex(totalPrompts - 1);
    }
  };

  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={pathwayBg}
          alt="Students at Think and Grow International"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-warm-cream/80" />
      </div>
      <div className="section-inner flex justify-center">
        <div className="rounded-3xl bg-card shadow-floating border border-primary/10 p-6 md:p-10 max-w-5xl w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressValue * 100}%` }} />
          </div>
          <div className="mt-4 mb-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <button
                type="button"
                onClick={handleGlobalBack}
                className={[
                  'inline-flex items-center gap-2 font-semibold transition-colors',
                  stage === 'intro' ? 'opacity-30 cursor-default' : 'hover:text-primary',
                ].join(' ')}
                disabled={stage === 'intro'}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80"
              >
                <ChevronLeft className="w-4 h-4" />
                Restart guide
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {stage === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-center space-y-5"
              >
                <h3 className="font-display text-3xl md:text-4xl text-foreground">
                  Discover the curriculum that matches your child&apos;s rhythm.
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Answer quick prompts and we&apos;ll recommend the pathway that feels like home. You can still compare
                  both options afterwards.
                </p>
                <button
                  type="button"
                  onClick={handleStart}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-soft hover:gap-4 transition-all"
                >
                  Launch Pathway Guide
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {stage === 'question' && currentPrompt && (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-center space-y-3 mb-8">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">{currentPrompt.question}</h3>
                  <p className="text-base text-muted-foreground">{currentPrompt.subtitle}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {currentPrompt.options.map(({ key, title, description, highlights, icon: Icon, chip }) => {
                    const isActive = answers[currentPrompt.id] === key;
                    return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleSelect(key)}
                        className={[
                          'text-left rounded-3xl border p-6 bg-accent/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                          isActive ? 'border-primary shadow-floating -translate-y-1' : 'border-primary/15 hover:-translate-y-1 hover:shadow-floating',
                        ].join(' ')}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-soft">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-display text-2xl text-foreground">{title}</h4>
                      </div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                          {chip}
                        </span>
                      <p className="text-muted-foreground mb-4">{description}</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {highlights.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold mt-5">
                          {isActive ? 'Selected' : 'Select this vibe'}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {stage === 'result' && recommended && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                        <RecommendedIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-primary/80">We Recommend</p>
                        <h3 className="font-display text-3xl text-foreground">{recommended.label}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground">{recommended.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {recommended.chips.map((chip) => (
                        <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          <BadgeCheck className="w-4 h-4" />
                          {chip}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {recommended.bullets.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={recommended.link}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-soft hover:gap-3 transition-all"
                      >
                        {recommended.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setShowCompare((prev) => !prev)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary font-semibold"
                      >
                        {showCompare ? 'Hide comparison' : 'Compare both'}
                      </button>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-warm-cream/80 p-6 space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Why this fits</p>
                    <h4 className="font-display text-2xl text-foreground">{recommended.tagline}</h4>
                    <p className="text-muted-foreground">
                      {selectedPathway === 'ib'
                        ? 'Expect inquiry blocks, cross-subject projects, and reflective check-ins that grow confidence and compassion.'
                        : 'Expect structured scopes, milestone trackers, and rigorous subject mastery that lead straight into Cambridge exams.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => setStage('question')}
                      className="text-sm text-primary font-semibold inline-flex items-center gap-2"
                    >
                      Revisit learning styles
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {showCompare && (
                    <motion.div
                      key="comparison"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl border border-primary/15 p-6 bg-accent/30"
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-4">Side-by-side snapshot</p>
                      <div className="grid gap-5 md:grid-cols-2">
                        {(Object.values(pathways) as typeof pathways[PathwayKey][]).map(({ key, label, chips, bullets, icon: Icon }) => (
                          <div
                            key={key}
                            className={[
                              'rounded-2xl border bg-white/70 p-5 space-y-4',
                              key === selectedPathway ? 'border-primary/40 shadow-soft' : 'border-border',
                            ].join(' ')}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
                                  {key === selectedPathway ? 'Your pick' : 'Also available'}
                                </p>
                                <h5 className="font-display text-xl">{label}</h5>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {chips.slice(0, 2).map((chip) => (
                                <span key={chip} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                  {chip}
                                </span>
                              ))}
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {bullets.slice(0, 2).map((point) => (
                                <li key={point} className="flex gap-2 items-start">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

