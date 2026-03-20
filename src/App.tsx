import DarkVeil from './components/DarkVeil';
import GradientText from './components/GradientText';
import ScrollReveal from './components/ScrollReveal';
import TextType from './components/TextType';
import BorderGlow from './components/BorderGlow';
import CountUp from './components/CountUp';
import GlareHover from './components/GlareHover';
import ShapeGrid from './components/ShapeGrid';

const featureCards = [
  {
    title: 'Moderation',
    description:
      'Smart moderation tools that keep your server safe and under control — without constant manual effort.',
  },
  {
    title: 'Automation',
    description:
      'Automate repetitive tasks and workflows so your server runs smoothly in the background.',
  },
  {
    title: 'Utility',
    description:
      'A collection of essential tools designed to make everyday server management easier.',
  },
  {
    title: 'Performance',
    description:
      'Fast, reliable, and built to handle everything without slowing your server down.',
  },
];

const App = () => {
  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section id="hero" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.04}
            scanlineIntensity={0.05}
            speed={0.5}
            scanlineFrequency={1.2}
            warpAmount={0.8}
          />
        </div>

        <header className="sticky top-0 z-30 w-full px-6 py-4 backdrop-blur-sm">
          <nav className="mx-auto flex w-full items-center justify-between font-['Inter'] text-base font-medium md:text-lg">
            <span className="tracking-[0.16em]">RIAN.DEV</span>
            <ul className="flex items-center gap-8 text-slate-200">
              <li>
                <button type="button" className="nav-item" onClick={scrollToHero}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" className="nav-item">
                  Projects
                </button>
              </li>
              <li>
                <button type="button" className="nav-item">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pt-28 text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-white md:text-6xl">
              <span className="mr-2 text-white">Meet</span>
              <GradientText
                className="inline-flex text-4xl font-normal leading-[1.15] tracking-[-0.01em] md:text-6xl"
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                animationSpeed={8}
                direction="diagonal"
              >
                Cypher V
              </GradientText>
            </h1>
            <TextType
              className="mx-auto mt-4 block max-w-xl text-lg font-medium leading-relaxed tracking-normal text-slate-200"
              text={[
                'Meet CypherV',
                'Your all-in-one Discord bot',
                'Moderation made simple',
                'Automation without clutter',
                'Everything, in one place',
                'Control without complexity',
                'Running silently in the background',
                'Keeping things in order',
                'Less noise, more control',
                'Built for your server',
                'Designed to stay out of your way',
                'Simple on the surface, powerful underneath',
                'Engineered for reliability',
                'Made to handle everything',
              ]}
              typingSpeed={50}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
            <div className="mt-8 flex justify-center">
              <GlareHover
                width="190px"
                height="56px"
                borderRadius="9999px"
                background="linear-gradient(135deg, #7c3aed, #a855f7)"
                borderColor="#a855f7"
                glareColor="#ffffff"
                glareOpacity={0.28}
                className="shadow-[0_10px_24px_rgba(124,58,237,0.45)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <button type="button" className="h-full w-full rounded-full text-base font-normal tracking-wide text-white">
                  Invite Bot
                </button>
              </GlareHover>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[700px] px-6 pb-8 pt-8 text-slate-100">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
          textClassName="font-normal leading-[1.65] tracking-normal"
          gradientWords={['CypherV']}
        >
          {'CypherV is built to quietly power your server, handling moderation, automation, and everything in between.'}
        </ScrollReveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#271E37] bg-[#090512]/80 px-6 py-10 md:px-10">
          <div className="pointer-events-none absolute inset-0">
            <ShapeGrid
              speed={0.24}
              squareSize={40}
              direction="right"
              borderColor="#271E37"
              hoverFillColor="#222222"
              shape="square"
              hoverTrailAmount={0}
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featureCards.map((card) => (
              <BorderGlow
                key={card.title}
                className="min-h-[180px] p-6"
                borderRadius={24}
                backgroundColor="#05060c"
                glowColor="270 95 78"
                colors={['#7c3aed', '#ec4899', '#38bdf8']}
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{card.description}</p>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-28 pt-10 text-center">
        <h2 className="text-3xl font-normal leading-tight text-slate-100 md:text-5xl">
          Watching{' '}
          <CountUp from={0} to={3842} separator="," direction="up" duration={1.2} className="font-normal text-white" /> members and moderating{' '}
          <CountUp from={0} to={100} separator="," direction="up" duration={1} className="font-normal text-white" /> servers right now
        </h2>
      </section>
    </main>
  );
};

export default App;
