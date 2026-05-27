import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Menu, X, MapPin, Phone, Star, Shield,
  Dumbbell, Activity, Flame, CheckCircle, Clock, Instagram,
  Heart, Zap, Award, TrendingUp, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

import logoPath from "@assets/254204a3-6cf1-4b5f-97bb-a66762f81437_1779655396101.png";

/* ─── NEW BUILDING PHOTOS ─── */
import heroBg    from "@assets/f97cc117-5014-4a57-be0f-4874c86604abvbv_1779669077975.png";
import buildingFront  from "@assets/f97cc117-5014-4a57-be0f-4874c86604abvbv.png";
import buildingAngle  from "@assets/ChatGPT_Image_May_25,_2026,_05_17_30_AM1_1779669470898.png";

/* ─── NEW INTERIOR / EQUIPMENT ─── */
import imgMainFloorWide   from "@assets/ChatGPT_Image_May_25,_2026,_05_11_28_AM_1779669397520.png";
import imgMainFloor2      from "@assets/ChatGPT_Image_May_25,_2026,_04_54_54_AM_1779669292655.png";
import imgTreadmills      from "@assets/ChatGPT_Image_May_25,_2026,_04_54_50_AM_1779669267724.png";
import imgCardioRoom      from "@assets/ChatGPT_Image_May_25,_2026,_05_09_37_AM_1779669359607.png";
import imgBenchEquip      from "@assets/ChatGPT_Image_May_25,_2026,_04_54_47_AM_1779669245421.png";
import imgDumbbells       from "@assets/ChatGPT_Image_May_25,_2026,_05_13_34_AM_1779669427786.png";
import imgFunctional      from "@assets/ChatGPT_Image_May_25,_2026,_05_07_37_AM_1779669331110.png";

/* ─── NEW PEOPLE / ACTIVITY ─── */
import imgTireFlip        from "@assets/1ec88d22-83d4-4f2a-92e6-35996c51bac1_1779669116625.png";
import imgGroupClass      from "@assets/4e899986-de47-4a19-a654-e3205bb03d68_1779669141747.png";
import imgMirrorSelfie    from "@assets/ChatGPT_Image_May_25,_2026,_04_54_25_AM_1779669167696.png";
import imgManOnBall       from "@assets/ChatGPT_Image_May_25,_2026,_04_54_32_AM_1779669187762.png";
import imgTransform       from "@assets/ChatGPT_Image_May_25,_2026,_04_54_42_AM_1779669214144.png";

const galleryImages = [
  { src: imgMainFloorWide,  label: "Main Training Floor" },
  { src: imgTreadmills,     label: "Cardio Zone" },
  { src: imgGroupClass,     label: "Group Fitness Class" },
  { src: imgDumbbells,      label: "Dumbbell Rack" },
  { src: imgTireFlip,       label: "Functional Training" },
  { src: imgTransform,      label: "Transformation Results" },
  { src: imgBenchEquip,     label: "Strength Equipment" },
  { src: imgCardioRoom,     label: "Cardio Equipment" },
  { src: imgFunctional,     label: "Functional Zone" },
  { src: imgMirrorSelfie,   label: "Premium Facility" },
  { src: imgManOnBall,      label: "Expert Training" },
  { src: imgMainFloor2,     label: "Weight Section" },
];

const WHATSAPP_LINK = "https://wa.me/918319279360?text=Hi,%20I%20want%20to%20know%20about%20membership%20at%20Lion's%20Gym";

const MARQUEE_ITEMS = [
  "Save ₹4001 on Annual Membership",
  "8+ Years of Trust in Vidisha",
  "Modern Equipment • Expert Trainers",
  "JOIN NOW & Get Free Diet Plan",
  "4.9 ★ Google Rating",
  "Personal Training Available",
  "Open 6 AM – 10 PM Daily",
  "VIDISHA'S PREMIUM FITNESS DESTINATION",
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1], staggerChildren: 0.12 } }
};

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MarqueeTicker() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden bg-primary py-2 relative z-30">
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-5 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs shrink-0">
            <span className="w-1 h-1 bg-white/70 rounded-full shrink-0"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const bottomParallaxY = useTransform(scrollY, [0, 5000], [0, -80]);
  const statsRef = useRef<HTMLElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    ['home','about','services','gallery','membership','contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    if (statsRef.current) {
      const s = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsInView(true); }, { threshold: 0.4 });
      s.observe(statsRef.current);
      return () => s.disconnect();
    }
    return () => obs.disconnect();
  }, []);

  const countYears   = useCountUp(8,    1.5, statsInView);
  const countMembers = useCountUp(1000, 2,   statsInView);
  const countReviews = useCountUp(350,  1.8, statsInView);
  const countRating  = useCountUp(49,   1.2, statsInView);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
      {/* ── NAV ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${isScrolled ? 'liquid-glass-nav border-b border-white/10 py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5">
            <img src={logoPath} alt="Lion's Gym" className="w-10 h-10 rounded-full border-2 border-primary" />
            <div className="leading-none text-left">
              <div className="font-heading font-bold text-lg tracking-widest text-white">LION'S GYM</div>
              <div className="text-[9px] tracking-[0.3em] text-secondary font-bold uppercase">LET'S GO THE GYM</div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {['home','about','services','gallery','membership','contact'].map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors relative group ${activeSection===item?'text-primary':'text-gray-300 hover:text-white'}`}>
                {item}
                <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-secondary transition-all duration-300 ${activeSection===item?'w-full':'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none uppercase tracking-widest text-[11px] px-5 h-8">
                Join Now
              </Button>
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl pt-20 px-6 flex flex-col items-center gap-2 overflow-y-auto">
            {['home','about','services','gallery','membership','contact'].map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className={`text-xl font-heading font-bold uppercase tracking-widest py-3.5 border-b border-white/8 w-full text-center ${activeSection===item?'text-primary':'text-white'}`}>
                {item}
              </button>
            ))}
            <div className="flex gap-3 w-full mt-4">
              <a href="tel:+918319279360" className="flex-1">
                <Button className="w-full h-12 bg-white text-black font-bold uppercase rounded-none tracking-wider text-sm">
                  <Phone size={16} className="mr-1.5"/> Call
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex-1">
                <Button className="w-full h-12 bg-[#25D366] text-white font-bold uppercase rounded-none tracking-wider text-sm flex items-center justify-center gap-1.5">
                  <WhatsAppIcon className="w-4 h-4"/> WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ── HERO ── */}
      <section id="home" className="relative flex flex-col overflow-hidden" style={{minHeight: '100dvh'}}>
        <motion.div style={{scale: bgScale}} className="absolute inset-0 z-0">
          <img src={heroBg} alt="Lion's Gym Building" className="w-full h-full object-cover"
            style={{objectPosition: 'center 25%'}} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>
        </motion.div>

        <motion.div style={{opacity: heroOpacity}} className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto px-4 w-full pt-24 pb-6">
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">

              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 liquid-glass-pill border-secondary/35 mb-5">
                <Award className="w-3.5 h-3.5 text-secondary"/>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-secondary">8+ Years of Trust in Vidisha</span>
              </motion.div>

              <motion.h1 variants={fadeIn}
                className="font-heading font-bold uppercase leading-[1.0] mb-4 text-white">
                <span className="block text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl">Transform</span>
                <span className="block text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl">Your Body At</span>
                <span className="block text-[2.6rem] sm:text-6xl md:text-8xl lg:text-9xl text-primary font-display tracking-wide bg-[#ba878700] font-bold">LION'S GYM</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-sm sm:text-base text-gray-300 mb-6 max-w-md leading-relaxed">
                Premium fitness in Vidisha — modern equipment, expert guidance, and real body transformation. Open 7 days a week.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-1.5 mb-7">
                {["Modern Equipment","Expert Trainers","AC Environment","Personal Training"].map((b,i) => (
                  <span key={i} className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white/85 liquid-glass-pill px-3 py-1">
                    {b}
                  </span>
                ))}
              </motion.div>

              {/* Desktop CTAs (hidden on mobile — mobile uses sticky bottom bar) */}
              <motion.div variants={fadeIn} className="hidden sm:flex flex-row gap-3">
                <a href="tel:+918319279360">
                  <Button size="lg" className="h-12 bg-white text-black hover:bg-gray-100 font-bold uppercase tracking-widest rounded-none flex items-center gap-2 px-7">
                    <Phone size={17}/> Call Now
                  </Button>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <Button size="lg" className="h-12 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold uppercase tracking-widest rounded-none flex items-center gap-2 px-7">
                    <WhatsAppIcon className="w-4 h-4"/> WhatsApp
                  </Button>
                </a>
                <a href="https://maps.app.goo.gl/XhhWQeTqvnjQo5U7A" target="_blank" rel="noreferrer">
                  <Button size="lg" className="h-12 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-none flex items-center gap-2 px-7">
                    <MapPin size={17}/> Directions
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.9,duration:0.6}}
            className="border-t border-white/10 liquid-glass-dark grid grid-cols-4 divide-x divide-white/8 -mx-4">
            {[
              {val:"8+",    lbl:"Years",   c:"text-secondary"},
              {val:"1000+", lbl:"Members", c:"text-white"},
              {val:"4.9★",  lbl:"Rating",  c:"text-secondary"},
              {val:"350+",  lbl:"Reviews", c:"text-white"},
            ].map((s,i) => (
              <div key={i} className="flex flex-col items-center py-3 sm:py-4 px-2 text-center">
                <span className={`text-xl sm:text-3xl font-heading font-bold ${s.c}`}>{s.val}</span>
                <span className="text-[9px] sm:text-xs uppercase tracking-widest text-gray-400 font-bold">{s.lbl}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <MarqueeTicker />
      {/* ── OUR HOME — Building showcase ── */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:0.7}} className="text-center mb-8">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Vidisha's Premier Fitness Destination</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-2">Our Home</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {/* Main large building photo */}
            <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              transition={{duration:0.8}} className="relative overflow-hidden md:row-span-1">
              <img src={buildingFront} alt="Lion's Gym Building Front"
                className="w-full h-64 sm:h-80 md:h-[420px] object-cover object-top"/>
              <div className="absolute bottom-3 left-3">
                <div className="liquid-glass-dark px-3 py-2 border-l-2 border-secondary rounded-r-lg">
                  <p className="text-secondary text-[9px] font-bold uppercase tracking-widest">Lion's Gym Vidisha</p>
                  <h3 className="text-white font-heading font-bold text-base sm:text-lg uppercase">Puranpura, Vidisha</h3>
                </div>
              </div>
            </motion.div>

            {/* Second building angle */}
            <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              transition={{duration:0.8,delay:0.1}} className="relative overflow-hidden">
              <img src={buildingAngle} alt="Lion's Gym Building Side View"
                className="w-full h-64 sm:h-80 md:h-[420px] object-cover object-top border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px] opacity-[1] pl-[60px] pr-[60px] pt-[0px] pb-[0px] ml-[0px] mr-[0px] mt-[0px] mb-[0px]"/>
              <div className="absolute bottom-3 left-3">
                <div className="liquid-glass-dark px-3 py-2 border-l-2 border-primary rounded-r-lg">
                  <h3 className="text-white font-heading font-bold text-base sm:text-lg uppercase">Est. 2016</h3>
                  <p className="text-gray-300 text-xs mt-0.5">8+ Years of excellence</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-8">
            {[
              {val:"8+",      lbl:"Years of Trust"},
              {val:"1000+",   lbl:"Members"},
              {val:"4.9★",    lbl:"Google Rating"},
              {val:"6AM–10PM",lbl:"Open Daily"},
            ].map((b,i) => (
              <div key={i} className="flex flex-col items-center liquid-glass-sm rounded-xl px-5 py-2.5">
                <span className="text-lg sm:text-2xl font-display font-bold text-secondary">{b.val}</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 font-bold">{b.lbl}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
            <a href="tel:+918319279360">
              <Button className="w-full sm:w-auto h-12 bg-white text-black font-bold uppercase tracking-widest rounded-none px-8 flex items-center justify-center gap-2">
                <Phone size={16}/> Call Now
              </Button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button className="w-full sm:w-auto h-12 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold uppercase tracking-widest rounded-none px-8 flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-4 h-4"/> Join on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
      {/* ── ABOUT ── */}
      <section id="about" className="py-12 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariants}>
              <motion.div variants={fadeIn}>
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Why Lion's Gym?</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 uppercase text-white leading-tight">
                  More Than<br /><span className="text-primary">Just A Gym</span>
                </h2>
              </motion.div>
              <motion.p variants={fadeIn} className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4 mb-7">
                Lion's Gym is Vidisha's premier fitness destination — modern equipment, expert coaching, a clean hygienic space, and a results-driven culture that keeps members coming back.
              </motion.p>
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
                {[
                  {icon:Dumbbell,   title:"Modern Equipment"},
                  {icon:Users,      title:"Expert Trainers"},
                  {icon:Heart,      title:"Clean Environment"},
                  {icon:CheckCircle,title:"Personal Guidance"},
                  {icon:Shield,     title:"Pro Atmosphere"},
                  {icon:Flame,      title:"Transformation Focus"},
                ].map((f,i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg liquid-glass-sm group-hover:bg-primary/20 flex items-center justify-center shrink-0 border-primary/20 transition-colors">
                      <f.icon className="w-4 h-4 text-primary"/>
                    </div>
                    <span className="font-bold text-white text-sm">{f.title}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeIn} className="mt-7">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none uppercase tracking-widest h-11 px-7">
                    Join the Community
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
              <div className="relative overflow-hidden">
                <img src={imgMainFloorWide} alt="Inside Lion's Gym"
                  className="w-full h-72 sm:h-96 md:h-[480px] object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-1">Vidisha's #1 Choice</p>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase text-white">Built for Results</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── FACILITY SHOWCASE ── */}
      <section className="py-12 md:py-20 bg-card/15 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
            className="text-center mb-8">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">World-Class Equipment</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-2">Inside Our Facility</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {src:imgMainFloor2,    label:"Training Floor",    desc:"Full weight + machine area"},
              {src:imgTreadmills,    label:"Cardio Zone",       desc:"Treadmills, bikes & ellipticals"},
              {src:imgFunctional,    label:"Functional Zone",   desc:"Boxing, tire flips & battle ropes"},
              {src:imgBenchEquip,    label:"Strength Area",     desc:"Bench press & barbell racks"},
              {src:imgGroupClass,    label:"Group Fitness",     desc:"Energy-packed group sessions"},
              {src:imgTireFlip,      label:"Functional Training",desc:"Dynamic training circuits"},
            ].map((item,i) => (
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.6,delay:i*0.07}} className="group relative overflow-hidden">
                <img src={item.src} alt={item.label}
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-600"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold text-base uppercase">{item.label}</h4>
                  <p className="text-gray-300 text-xs mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {[
              {icon:Dumbbell,  title:"Free Weights",   desc:"2kg – 50kg range"},
              {icon:Activity,  title:"Cardio Machines",desc:"Treadmills, bikes, ellipticals"},
              {icon:Users,     title:"Expert Trainers",desc:"Certified coaches daily"},
              {icon:Award,     title:"AC Environment", desc:"Cool & hygienic space"},
            ].map((f,i) => (
              <div key={i} className="liquid-glass rounded-xl p-4 hover:border-primary/35 transition-all">
                <f.icon className="w-5 h-5 text-primary mb-2.5"/>
                <h4 className="text-white font-bold text-sm uppercase mb-1">{f.title}</h4>
                <p className="text-gray-400 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── SERVICES ── */}
      <section id="services" className="py-12 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 uppercase text-white">Our Services</h2>
            <p className="text-gray-400 text-sm mt-3">Strength, cardio, weight loss, and full body transformation programs.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariants}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {title:"Strength Training",    desc:"Free weights & machines for max muscle.",   icon:Dumbbell,   tag:"Popular"},
              {title:"Personal Training",    desc:"1-on-1 coaching for your specific goals.",  icon:Users,      tag:""},
              {title:"Weight Loss",          desc:"Cardio + strength for maximum fat burn.",    icon:Flame,      tag:"Popular"},
              {title:"Body Transformation",  desc:"Structured training + nutrition guidance.",  icon:Activity,   tag:""},
              {title:"Cardio Training",      desc:"Modern treadmills, bikes & ellipticals.",   icon:TrendingUp, tag:""},
              {title:"Muscle Gain",          desc:"Expert hypertrophy programs for growth.",    icon:Zap,        tag:""},
              {title:"Functional Fitness",   desc:"Mobility, balance & athletic performance.", icon:CheckCircle,tag:""},
              {title:"Expert Guidance",      desc:"Certified trainers available every day.",   icon:Award,      tag:""},
            ].map((s,i) => (
              <motion.div key={i} variants={fadeIn}
                className="liquid-glass rounded-xl p-5 hover:border-primary/30 transition-all group relative overflow-hidden">
                {s.tag && <div className="absolute top-2.5 right-2.5 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5">{s.tag}</div>}
                <div className="w-10 h-10 bg-white/5 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <s.icon className="w-5 h-5 text-white group-hover:text-primary transition-colors"/>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wide">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ── GALLERY ── */}
      <section id="gallery" className="py-12 md:py-20 bg-card/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Visual Tour</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-1 uppercase text-white">Photo Gallery</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Real photos from our facility in Vidisha</p>
            </div>
            <a href="https://www.instagram.com/lions_gym19" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-none uppercase font-bold tracking-widest text-xs h-9">
                <Instagram className="w-3.5 h-3.5 mr-2"/> @lions_gym19
              </Button>
            </a>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {galleryImages.map((img,i) => (
              <motion.div key={i} variants={fadeIn} className="group relative overflow-hidden aspect-square">
                <img src={img.src} alt={`Lion's Gym - ${img.label}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-400"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/75 to-transparent">
                  <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ── TRANSFORMATION ── */}
      <section className="py-12 md:py-20 bg-background border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
            className="text-center mb-8">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Real Members • Real Results</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-2">Transformations</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {src:imgTransform,  title:"Strength Gained",   sub:"Mirror selfie after 6 months"},
              {src:imgMirrorSelfie, title:"Body Composition", sub:"Lean muscle transformation"},
              {src:imgManOnBall,  title:"Confidence Built",  sub:"Member training results"},
            ].map((item,i) => (
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.6,delay:i*0.1}} className="group relative overflow-hidden">
                <img src={item.src} alt={item.title}
                  className="w-full h-72 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-600"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold text-base uppercase">{item.title}</h4>
                  <p className="text-gray-300 text-xs mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── MEMBERSHIP ── */}
      <section id="membership" className="py-12 md:py-24 bg-card/15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Pricing</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 uppercase text-white">Membership Plans</h2>
            <p className="text-gray-400 text-sm mt-3">No hidden fees. Start your transformation today.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {name:"Basic",    dur:"1 Month",  price:"999",  mrp:"1380", save:"301",  popular:false,
               features:["Gym Access","Basic Training","Locker Facility","Diet Guidance"]},
              {name:"Silver",   dur:"3 Months", price:"2499", mrp:"3500", save:"1001", popular:false,
               features:["Gym Access","Expert Training","Locker Facility","Diet Guidance","1 Body Test"]},
              {name:"Gold",     dur:"6 Months", price:"4499", mrp:"6500", save:"2001", popular:true,
               features:["Gym Access","Expert Training","Personalized Diet","Locker Facility","2 Body Tests","Priority Support"]},
              {name:"Platinum", dur:"12 Months",price:"7999", mrp:"12000",save:"4001", popular:false,
               features:["Gym Access","4 Personal Sessions","Personalized Diet","Locker Facility","4 Body Tests","Priority Support","Special Discounts"]},
            ].map((plan,i) => (
              <motion.div key={i} variants={fadeIn}
                className={`relative liquid-glass flex flex-col overflow-hidden transition-all hover:-translate-y-1 rounded-2xl ${plan.popular?'border-secondary! shadow-xl shadow-secondary/15':'hover:border-white/20'}`}>
                {plan.popular && <div className="bg-secondary text-black text-[10px] font-bold uppercase tracking-widest text-center py-1.5">Most Popular</div>}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl text-white uppercase mb-0.5">{plan.name}</h3>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-4">{plan.dur}</p>
                  <div className="mb-5">
                    <span className="text-3xl font-heading font-bold text-white">₹{plan.price}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-500 text-xs line-through">₹{plan.mrp}</span>
                      <span className="text-secondary text-xs font-bold">Save ₹{plan.save}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f,fi) => (
                      <li key={fi} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"/>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    <Button className={`w-full rounded-none uppercase font-bold tracking-widest text-xs h-10 ${plan.popular?'bg-secondary hover:bg-secondary/90 text-black':'bg-white/8 hover:bg-white/15 text-white border border-white/10'}`}>
                      Get {plan.name} Plan
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ── HOW IT WORKS ── */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Your Path</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 uppercase text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {[
              {step:"01",title:"Join",       desc:"Commit to your goals and join our community.",      icon:Users},
              {step:"02",title:"Train",      desc:"Follow expert guidance and push limits daily.",      icon:Dumbbell},
              {step:"03",title:"Transform",  desc:"See real changes in strength and physique.",         icon:Activity},
              {step:"04",title:"Inspire",    desc:"Become the motivation for others.",                  icon:Flame},
            ].map((s,i) => (
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.5,delay:i*0.12}} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full liquid-glass border-2 border-primary flex items-center justify-center mb-3 shadow-[0_0_24px_rgba(225,6,0,0.3)] relative">
                  <span className="absolute -top-2.5 -right-1 font-heading font-bold text-[10px] text-secondary bg-black px-1">{s.step}</span>
                  <s.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white"/>
                </div>
                <h3 className="text-base sm:text-xl font-bold uppercase text-white mb-1.5">{s.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm max-w-[180px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── STATS ── */}
      <section ref={statsRef} className="py-12 bg-gradient-to-r from-primary/8 via-background to-primary/8 border-y border-primary/15 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(circle, #cc0000 1px, transparent 1px)",backgroundSize:"35px 35px"}}></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {value:countYears,   suffix:"+",  label:"Years of Trust",       icon:Shield},
              {value:countMembers, suffix:"+",  label:"Members Transformed",  icon:Users},
              {value:countReviews, suffix:"+",  label:"Google Reviews",       icon:Star},
              {value:(countRating/10).toFixed(1), suffix:"★", label:"Average Rating", icon:Award},
            ].map((s,i) => (
              <motion.div key={i} initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
                transition={{duration:0.5,delay:i*0.12}} className="flex flex-col items-center">
                <s.icon className="w-5 h-5 text-primary mb-2"/>
                <span className="text-3xl sm:text-5xl font-heading font-bold text-white mb-1">{s.value}{s.suffix}</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-bold">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── REVIEWS ── */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-secondary"/> 4.9 Rating on Google
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-1 uppercase text-white">Community Trust</h2>
            </div>
            <a href="https://maps.app.goo.gl/XhhWQeTqvnjQo5U7A" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-none uppercase font-bold tracking-widest text-xs h-9">
                All Reviews
              </Button>
            </a>
          </div>

          {/* Mobile: grid; Desktop: scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {name:"Rajesh Kumar",  stars:5, review:"Best gym in Vidisha. Professional trainers and top-notch equipment. Highly recommended for body transformation!"},
              {name:"Priya Sharma",  stars:5, review:"Very clean and hygienic. As a female I feel completely safe working out here. Great cardio section."},
              {name:"Amit Verma",    stars:5, review:"Joined 6 months ago and results are amazing. Personal training guidance is worth every penny. Lost 12kg!"},
              {name:"Sunita Patel",  stars:5, review:"Spacious gym with excellent atmosphere. Enough machines so you never wait. Staff is always helpful."},
              {name:"Vikash Singh",  stars:5, review:"Premium vibe, solid equipment, great energy. Been a member 2 years. Best fitness center in town."},
              {name:"Deepak Mishra", stars:5, review:"Great environment and motivated trainers. The personal diet plan alone is worth the membership fee!"},
            ].map((r,i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.5,delay:i*0.07}}
                className="liquid-glass rounded-2xl hover:border-white/22 transition-all p-5 relative overflow-hidden">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(r.stars)].map((_,idx) => <Star key={idx} className="w-3.5 h-3.5 fill-secondary text-secondary"/>)}
                  <span className="text-secondary font-bold text-xs ml-1">5.0</span>
                </div>
                <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">"{r.review}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-sm border border-primary/30 shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs uppercase">{r.name}</p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Google Review • Vidisha</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FULL-WIDTH BANNER ── */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <motion.div style={{y:bottomParallaxY}} className="absolute inset-0 scale-110">
          <img src={heroBg} alt="Lion's Gym" className="w-full h-full object-cover" style={{objectPosition:"center 30%"}}/>
          <div className="absolute inset-0 bg-black/72"></div>
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
            className="text-secondary font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-3">
            Puranpura, Vidisha, Madhya Pradesh
          </motion.p>
          <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
            className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-3">
            Ready to Unleash<br/><span className="text-primary">Your Potential?</span>
          </motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.3}}
            className="text-gray-300 text-sm sm:text-lg mb-6 max-w-md">
            Join 1000+ members who transformed at Lion's Gym. Start today.
          </motion.p>
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.4}}
            className="flex gap-3 flex-wrap justify-center">
            <a href="tel:+918319279360">
              <Button size="lg" className="h-11 sm:h-13 bg-white text-black hover:bg-gray-100 font-bold uppercase tracking-widest rounded-none px-6 flex items-center gap-2">
                <Phone size={16}/> Call Now
              </Button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button size="lg" className="h-11 sm:h-13 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold uppercase tracking-widest rounded-none px-6 flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4"/> Join Today
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      {/* ── PROMO BAND ── */}
      <section className="bg-gradient-to-r from-black via-[#100000] to-black border-t border-primary/15 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {icon:Zap,      tag:"Limited Offer",    title:"Save ₹4001",   desc:"On Annual Platinum Membership.", c:"border-primary/25", ic:"text-primary"},
              {icon:Users,    tag:"Free Session",      title:"Free Trial",   desc:"Visit for a complimentary trial. No commitment.",  c:"border-secondary/25",ic:"text-secondary"},
              {icon:Activity, tag:"New Members",       title:"Free Diet Plan",desc:"Personalized diet plan with any membership.",    c:"border-primary/25", ic:"text-primary"},
              {icon:Award,    tag:"Since 2016",        title:"8+ Years",     desc:"Vidisha's most trusted gym.",   c:"border-secondary/25",ic:"text-secondary"},
            ].map((p,i) => (
              <a key={i} href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                className={`group block liquid-glass rounded-xl border ${p.c} p-4 hover:border-white/20 transition-all`}>
                <div className="flex items-center gap-1.5 mb-2">
                  <p.icon className={`w-3.5 h-3.5 ${p.ic}`}/>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${p.ic}`}>{p.tag}</span>
                </div>
                <h4 className="text-white font-heading font-bold text-base uppercase mb-1">{p.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-2 hidden sm:block">{p.desc}</p>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${p.ic}`}>Get Offer →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ── CONTACT ── */}
      <section id="contact" className="py-12 md:py-24 bg-card/15 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={sectionVariants}>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 uppercase text-white mb-6">
                Ready to Start?
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  {icon:MapPin,   label:"Location",      val:"Puranpura, Vidisha, Madhya Pradesh 464001"},
                  {icon:Clock,    label:"Timing",         val:"6:00 AM – 10:00 PM (Mon to Sun)"},
                  {icon:Phone,    label:"Call / WhatsApp",val:"8319279360"},
                  {icon:Instagram,label:"Instagram",      val:"@lions_gym19"},
                ].map((item,i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 liquid-glass-sm rounded-xl border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-4.5 h-4.5 text-primary"/>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-0.5">{item.label}</h4>
                      <p className="text-gray-400 text-sm">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+918319279360" className="flex-1">
                  <Button className="w-full h-11 bg-white text-black font-bold uppercase tracking-widest rounded-none text-xs flex items-center justify-center gap-1.5">
                    <Phone size={14}/> Call Us
                  </Button>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex-1">
                  <Button className="w-full h-11 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold uppercase tracking-widest rounded-none text-xs flex items-center justify-center gap-1.5">
                    <WhatsAppIcon className="w-3.5 h-3.5"/> WhatsApp
                  </Button>
                </a>
                <a href="https://www.instagram.com/lions_gym19" target="_blank" rel="noreferrer" className="flex-1">
                  <Button className="w-full h-11 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase tracking-widest rounded-none text-xs">
                    Instagram
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}
              className="h-72 sm:h-96 lg:h-auto min-h-[300px] border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.617757912235!2d77.8188173!3d23.5350849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c050021b3af85%3A0xc6829ee15e61d87e!2sLion&#39;s%20Gym!5e0!3m2!1sen!2sin!4v1709214000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{border:0,filter:"invert(90%) hue-rotate(180deg) contrast(95%)"}}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map"/>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── FOOTER (compact) ── */}
      <footer className="bg-black py-7 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-3">
              <img src={logoPath} alt="Logo" className="w-10 h-10 rounded-full border border-white/20"/>
              <div>
                <div className="font-heading font-bold text-white tracking-widest text-base">LION'S GYM</div>
                <div className="text-[9px] text-secondary font-bold uppercase tracking-[0.25em]">LET'S GO THE GYM</div>
                <div className="text-gray-500 text-[10px]">Puranpura, Vidisha MP 464001</div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/lions_gym19" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full liquid-glass-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all">
                <Instagram className="w-4 h-4"/>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full liquid-glass-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#25D366] transition-all">
                <WhatsAppIcon className="w-4 h-4"/>
              </a>
              <a href="https://maps.app.goo.gl/XhhWQeTqvnjQo5U7A" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full liquid-glass-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                <MapPin className="w-4 h-4"/>
              </a>
              <a href="tel:+918319279360"
                className="w-9 h-9 rounded-full liquid-glass-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
                <Phone className="w-4 h-4"/>
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-5 pt-4 text-center">
            <p className="text-gray-600 text-[10px]">© {new Date().getFullYear()} Lion's Gym Vidisha. All rights reserved. | Best Gym in Vidisha</p>
          </div>
        </div>
      </footer>
      {/* ── MOBILE STICKY BOTTOM ACTION BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/12 shadow-2xl liquid-glass-dark" style={{paddingBottom:'env(safe-area-inset-bottom)'}}>
        <a href="tel:+918319279360" className="flex-1 h-14 flex items-center justify-center gap-2 text-white font-bold text-sm uppercase tracking-wide border-r border-white/10 active:bg-white/10">
          <Phone className="w-4 h-4"/> Call
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex-1 h-14 bg-[#25D366] flex items-center justify-center gap-2 text-white font-bold text-sm uppercase tracking-wide active:bg-[#1ebe5b]">
          <WhatsAppIcon className="w-4 h-4"/> WhatsApp
        </a>
      </div>
      {/* Desktop-only floating WhatsApp */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5b] rounded-full flex items-center justify-center shadow-xl text-white transition-transform hover:scale-110">
          <WhatsAppIcon className="w-7 h-7"/>
        </a>
      </div>
    </div>
  );
}
