import DarkVeil from './components/DarkVeil';
import GradientText from './components/GradientText';
import ScrollReveal from './components/ScrollReveal';
import TextType from './components/TextType';
import BorderGlow from './components/BorderGlow';
import CountUp from './components/CountUp';
import GlareHover from './components/GlareHover';
import ShapeGrid from './components/ShapeGrid';
import GradualBlur from './components/GradualBlur';
import TargetCursor from './components/TargetCursor';
import Cubes from './components/Cubes';
import LetterGlitch from './components/LetterGlitch';
import SpotlightCard from './components/SpotlightCard';
import TextPressure from './components/TextPressure';
import DecryptedText from './components/DecryptedText';

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

const privacyCards = [
  {
    title: '24/7',
    description: "Our bot stays online 24/7 so you don't need to worry about moderation.",
  },
  {
    title: 'Ticket System',
    description: 'All of the messages in tickets are not stored anywhere in the bot.',
  },
  {
    title: 'Privacy',
    description: 'There is no database for storing messages, ids or tokens.',
  },
  {
    title: 'Security',
    description: 'No hidden owners or bot control near the developers of bot.',
  },
];

const App = () => {
  const isPrivacyPage = typeof window !== 'undefined' && window.location.pathname === '/privacy';

  const goToPrivacy = () => {
    window.location.pathname = '/privacy';
  };
  const goHome = () => {
    window.location.pathname = '/';
  };

  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (isPrivacyPage) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen overflow-hidden">
          <LetterGlitch
            glitchColors={['#2a0d4d', '#5b21b6', '#a855f7']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
          />
          <header className="absolute top-0 z-[2000] w-full bg-transparent px-6 py-4">
            <nav className="mx-auto flex w-full items-center justify-between font-['Inter'] text-base font-medium md:text-lg">
              <span className="tracking-[0.16em]">RIAN.DEV</span>
              <ul className="flex items-center gap-8 text-slate-200">
                <li>
                  <button type="button" className="nav-item" onClick={goHome}>
                    Home
                  </button>
                </li>
                <li>
                  <button type="button" className="nav-item">
                    Privacy
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
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
            <h1 className="font-['Inter'] text-5xl font-medium text-white md:text-7xl">
              <span className="block">Your Privacy Matters The</span>
              <span className="mt-2 block">Most</span>
            </h1>
          </div>
        </section>
        <section className="w-full bg-black px-6 pb-24 pt-12">
          <p className="mx-auto max-w-5xl text-center font-['Inter'] text-3xl font-bold leading-relaxed text-white md:text-4xl">
            As concerns of privacy we can&apos;t see your messages or control the bots remotely. It works only if prompted or triggered with certain actions if using moderation and anti-nuke setup.
          </p>
        </section>
        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {privacyCards.map((card) => (
              <SpotlightCard
                key={card.title}
                className="border-white/20 bg-black/80 transition-colors duration-300 hover:border-purple-500/70 hover:bg-purple-950/70"
                spotlightColor="rgba(88, 28, 135, 0.45)"
              >
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-200">{card.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="mb-8 text-center">
            <DecryptedText
              text="Your Data always safe"
              animateOn="view"
              speed={40}
              sequential
              revealDirection="start"
              className="font-['Inter'] text-3xl font-normal text-white md:text-4xl"
              encryptedClassName="font-['Inter'] text-3xl font-normal text-purple-300/70 md:text-4xl"
              parentClassName="inline-block"
            />
          </div>
          <div className="relative h-[300px]">
            <TextPressure
              text="Rian.exe"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={36}
            />
          </div>
        </section>
        <footer className="border-t border-white/10 bg-black px-6 py-8 text-slate-300">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="/" className="hover:text-white" onClick={(e) => { e.preventDefault(); goHome(); }}>
                Home
              </a>
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                About
              </a>
              <a href="#" className="hover:text-white">
                Discord
              </a>
            </div>
            <p className="mt-4 text-center text-xs tracking-[0.16em] text-slate-400">© VANGUARD SYSTEMS</p>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <TargetCursor targetSelector=".snappy-container .cursor-target" spinDuration={2} hideDefaultCursor={false} parallaxOn hoverDuration={0.2} />
      <GradualBlur target="page" position="top" height="7rem" strength={2.6} divCount={7} curve="bezier" exponential opacity={1} zIndex={0} />
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

        <header className="sticky top-0 z-[2000] w-full bg-transparent px-6 py-4">
          <nav className="mx-auto flex w-full items-center justify-between font-['Inter'] text-base font-medium md:text-lg">
            <span className="tracking-[0.16em]">RIAN.DEV</span>
            <ul className="flex items-center gap-8 text-slate-200">
              <li>
                <button type="button" className="nav-item cursor-target" onClick={scrollToHero}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" className="nav-item cursor-target" onClick={goToPrivacy}>
                  Privacy
                </button>
              </li>
              <li>
                <button type="button" className="nav-item cursor-target">
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
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="shadow-[0_10px_24px_rgba(124,58,237,0.45)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <button type="button" className="h-full w-full rounded-full text-base font-normal tracking-wide text-white">
                  Invite Now
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
        <div className="relative overflow-hidden rounded-3xl border border-[#6d28d9] bg-[#090512]/80 px-6 py-10 shadow-[0_0_65px_rgba(147,51,234,0.72),0_0_120px_rgba(168,85,247,0.38)] md:px-10">
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
                className="min-h-[180px] bg-white/5 p-6 backdrop-blur-xl"
                borderRadius={24}
                backgroundColor="rgba(5,6,12,0.35)"
                glowColor="284 100 78"
                colors={['#7c3aed', '#a855f7', '#ec4899']}
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{card.description}</p>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-28 pt-10 text-center">
        <h2 className="text-3xl font-bold leading-tight text-white [text-shadow:0_0_20px_rgba(255,255,255,0.8)] md:text-5xl">
          Watching{' '}
          <CountUp from={0} to={3842} separator="," direction="up" duration={1.2} className="font-bold text-white" /> members and moderating{' '}
          <CountUp from={0} to={100} separator="," direction="up" duration={1} className="font-bold text-white" /> servers right now
        </h2>
      </section>

      <section className="snappy-container w-full pb-24 pt-4">
        <div className="relative mx-auto w-[96%] overflow-hidden rounded-3xl border border-white/35 bg-black/85 px-6 py-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-xl md:px-10">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
            <Cubes
              gridSize={8}
              maxAngle={45}
              radius={3}
              borderStyle="1.5px solid rgba(255,255,255,0.5)"
              faceColor="#0b0b0b"
              rippleColor="#ffffff"
              rippleSpeed={1.5}
              autoAnimate
              rippleOnClick
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {['MAKE', 'YOUR', 'SERVER'].map((label) => (
              <button
                key={label}
                type="button"
                className="cursor-target w-full rounded-2xl border border-white/60 bg-black/70 py-5 text-4xl font-bold tracking-wide text-white backdrop-blur-md md:text-5xl"
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="cursor-target relative z-10 mt-5 w-full rounded-2xl border border-white/60 bg-black/70 py-5 text-4xl font-bold tracking-wide text-white backdrop-blur-md md:text-5xl"
          >
            COMPLETE
          </button>
        </div>
      </section>

      <footer className="w-full pb-16 pt-6 text-slate-300">
        <div className="w-full border-y border-white/10 bg-black/70 px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a href="#hero" className="hover:text-white">
              Home
            </a>
            <a href="/privacy" className="hover:text-white" onClick={(e) => { e.preventDefault(); goToPrivacy(); }}>
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Discord
            </a>
          </div>
          <p className="mt-4 text-center text-xs tracking-[0.16em] text-slate-400">© VANGUARD SYSTEMS</p>
        </div>
      </footer>
    </main>
  );
};

export default App;
