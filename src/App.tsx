import { useEffect, useState } from "react"

// ---- TYPES ----
interface Project {
  id: number
  title: string
  year: string
  category: string
  summary: string
  description: string
  challenge: string
  process: string
  outcome: string
  tags: string[]
  images: string[]
  thumbnail: string
}

// ---- DATA ----
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ergonomische Handgreep",
    year: "2024",
    category: "Industrieel Ontwerp",
    summary:
      "Herontwerp van een industrieel handgereedschap gericht op het verminderen van gebruiksbelasting en het verbeteren van veiligheid bij langdurig gebruik.",
    description:
      "Bestaande handgereedschappen veroorzaken bij langdurig gebruik vermoeidheid en overbelasting van de pols. Dit project richtte zich op het grondig herontwerpen van een slijpgereedschapgreep op basis van ergonomisch onderzoek, waardoor zowel comfort als gebruiksveiligheid aantoonbaar zijn verbeterd.",
    challenge:
      "Professionals die dagelijks met handgereedschap werken ervaren vermoeidheid en klachten door repetitieve belasting. De uitdaging was het ontwerp fundamenteel te verbeteren zonder de functionaliteit of productiekosten significant te verhogen.",
    process:
      "Via observatiestudies en interviews met gebruikers werden drukpunten en problematische handposities in kaart gebracht. Digitale 3D-scans van handposities dienden als basis voor parametrisch modelleren in Fusion 360. Vijf iteraties van schuim- en 3D-printprototypes werden getest met dezelfde gebruikersgroep.",
    outcome:
      "Het definitieve ontwerp reduceert de belasting op de handpalm met 40% en verbetert de grip bij nat gebruik. Een lokaal productiebedrijf neemt het ontwerp mee in hun volgende productlijn.",
    tags: ["Ergonomie", "3D-modelleren", "Gebruikersonderzoek", "Fusion 360"],
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1565732767769-1c3dfd2e4b25?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1581092787765-e3feb951d987?w=1400&h=900&fit=crop&auto=format",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Modulair Opbergsysteem",
    year: "2024",
    category: "Meubelontwerp",
    summary:
      "Flexibel modulair systeem dat zonder gereedschap wordt samengesteld en zich aanpast aan elke ruimte en behoefte.",
    description:
      "Standaardmeubels passen zich niet aan aan veranderende ruimtes of gebruiksbehoeften. Dit modulaire opbergsysteem bestaat uit vijf vrij combineerbare basiscomponenten. Elk element koppelt aan elk ander zonder gereedschap, zodat de gebruiker het systeem naar wens uitbreidt of herindelt.",
    challenge:
      "Het doel was een systeem te ontwerpen dat écht aanpasbaar is zonder daarvoor in te boeten op structurele kwaliteit of esthetische samenhang.",
    process:
      "Na marktonderzoek naar bestaande systemen werd gewerkt aan parametrisch ontwerpen in Fusion 360. Lasercut multiplex-prototypes werden getest op stabiliteit en gebruiksgemak. Acht testgebruikers stelden het systeem zelfstandig samen op basis van alleen pictogramkaarten.",
    outcome:
      "Een afgerond systeem van vijf moduletypes, produceerbaar uit standaard plaatmateriaal. Schaalbaar, eenvoudig te transporteren en direct toe te voegen aan bestaande inrichtingen.",
    tags: ["Meubelontwerp", "Parametrisch Ontwerp", "Fusion 360", "Materiaalonderzoek"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&h=900&fit=crop&auto=format",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Duurzame Verpakking",
    year: "2023",
    category: "Verpakkingsontwerp",
    summary:
      "Herontwerp van een productlijnverpakking waarbij minder materiaalgebruik en hergebruikswaarde centraal staan.",
    description:
      "Een lokale voedingsproducent had verpakkingen die zowel milieuvervuilend als visueel niet onderscheidend waren in het schap. Dit project leverde een nieuwe lijn op: geperst karton, plasticvrij, en ontworpen om na gebruik als bewaar- of presentatiebox te dienen.",
    challenge:
      "De bestaande verpakking bestond grotendeels uit niet-recycleerbaar materiaal en communiceerde de merkwaarden niet. De klant wilde gelijktijdig verduurzamen en herkenbaarder worden.",
    process:
      "Benchmarkonderzoek naar concurrenten en duurzame alternatieven, gevolgd door materiaalonderzoek naar geperst karton en plantaardige inkten. Meerdere mockups werden in het schap getest naast concurrentproducten. De klant werd in elke fase betrokken bij de feedbackrondes.",
    outcome:
      "De nieuwe verpakkingslijn gebruikt 68% minder materiaal dan het vorige ontwerp. Consumentenfeedback toonde een hogere merkwaardering en een aantoonbaar hoger hergebruikspercentage.",
    tags: ["Duurzaamheid", "Verpakkingsontwerp", "Materiaalonderzoek", "Merkstrategie"],
    images: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d9d?w=1400&h=900&fit=crop&auto=format",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Opvouwbare Fietstas",
    year: "2023",
    category: "Productontwerp",
    summary:
      "Compacte fietstas die terugvouwt tot handformaat en zowel op de fiets als off-bike volledig functioneert.",
    description:
      "Fietsers missen een tas die na het parkeren eenvoudig mee te nemen is zonder opvallend of omvangrijk te zijn. Deze opvouwbare fietstas biedt 12 liter bergruimte op de fiets en vouwt door één enkelvoudige beweging terug tot handformaat.",
    challenge:
      "Bestaande fietstassen zijn te groot of te zwaar om dagelijks off-bike te dragen. Gebruikers laten tassen achter of nemen een aparte kleine tas mee – beide leiden tot onnodige verspilling en ongemak.",
    process:
      "Veldonderzoek met woon-werkfietsers bracht de kernbehoefte scherp in beeld. Materiaalonderzoek richtte zich op lichtgewicht gecoat nylon en magneetsluitingen. Via technische tekeningen en draagbare prototypes werden de vouwmechanismen iteratief verbeterd.",
    outcome:
      "Een functioneel eindprototype dat 12 liter bergruimte biedt, opvouwt tot 20×12 cm, en bevestigt via een universeel compatibel dragerbeugelsysteem.",
    tags: ["Soft Goods", "Mechanisch Ontwerp", "Mobiliteit", "Gebruikersonderzoek"],
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=900&fit=crop&auto=format",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&auto=format",
  },
]

const SKILLS = [
  { name: "3D Modelleren", tools: "Fusion 360 · Rhino 3D · KeyShot" },
  { name: "Probleemanalyse & Onderzoek", tools: "Gebruikersinterviews · Benchmarking" },
  { name: "Prototypen & Testen", tools: "Schuimmodellen · 3D-printen · Lasercutting" },
  { name: "Technische Uitwerking", tools: "Maattekeningen · Toleranties · Stuklijsten" },
  { name: "Ontwerpstrategie", tools: "PvE · Iteratiecycli · Stakeholdercommunicatie" },
  { name: "Visualisatie & Presentatie", tools: "Rendering · Handschetsen · Adobe Suite" },
]

const FAQ_ITEMS = [
  {
    q: "Welke software gebruik je?",
    a: "Mijn primaire 3D-tool is Fusion 360, dat ik gebruik voor parametrisch modelleren en technische uitwerking. Voor organischere vormen werk ik met Rhino 3D. Productvisualisaties maak ik in KeyShot. Presentaties ontwerp ik in Figma en de Adobe Suite.",
  },
  {
    q: "Hoe ga je om met feedback tijdens het ontwerpproces?",
    a: "Feedback is voor mij een wezenlijk onderdeel van het proces – niet iets dat achteraf plaatsvindt. Door vroeg en regelmatig te tonen, ook als iets nog niet af is, voorkom ik dat ik lang in de verkeerde richting werk. Na elke feedbackronde leg ik vast welke keuzes ik maak en waarom, zodat er wederzijds begrip ontstaat over de richting.",
  },
  {
    q: "Ben je beschikbaar voor stages of samenwerkingen?",
    a: "Ja. Ik ben actief op zoek naar een stage of afstudeerplek waarbij ik betrokken ben bij het volledige traject: van eerste onderzoek tot productieklaar ontwerp. Ik werk ook graag samen met andere ontwerpers, ingenieurs of bureaus aan projecten die vragen om een gestructureerde aanpak.",
  },
  {
    q: "Wat trekt je aan in industrieel productontwerp?",
    a: "Het feit dat elk besluit zichtbaar en tastbaar is. Een product moet functioneren, passen en aanvoelen zoals het bedoeld is – er is geen ruimte voor vaagheid. Die concreetheid houdt me scherp en dwingt me om onderbouwde keuzes te maken op elk niveau van het ontwerp.",
  },
  {
    q: "Hoe ziet jouw typische ontwerpproces eruit?",
    a: "Ik begin altijd met het begrijpen van het échte probleem – niet het symptoom. Daarna stel ik een programma van eisen op dat als toetssteen dient gedurende het hele project. Vanuit daar werk ik in iteratieve cycli van schetsen, modelleren en testen totdat het ontwerp klopt op zowel functioneel als esthetisch niveau.",
  },
]

// ---- NAVBAR ----
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const links = [
    { label: "Proces", href: "#proces" },
    { label: "Projecten", href: "#projecten" },
    { label: "Skills", href: "#skills" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`nav-fade fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[#2a2a2a] bg-[#111111]/95 backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-extrabold text-base tracking-[0.22em] text-[#f3f3f3] uppercase fade-in"
        >
          Kaj Niemeijer
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-sans tracking-[0.14em] text-[#b0b0b0] uppercase hover:text-[#ffffff]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] w-6 py-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-px w-full bg-[#f0f0f0] transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-[#f0f0f0] transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-[#f0f0f0] transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#2a2a2a] bg-[#111111] px-6 py-6 flex flex-col gap-5 fade-down">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-sans tracking-[0.14em] text-[#d0d0d0] uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ---- HERO ----
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 pt-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-extrabold leading-none tracking-tight text-[#1b1b1b] whitespace-nowrap pl-4 fade-in"
          style={{ fontSize: "clamp(140px,22vw,320px)" }}
        >
          KAJ
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div>
            <p className="text-sm font-sans tracking-[0.24em] text-[#9a9a9a] uppercase mb-5 fade-up">
              Industrieel Productontwerper — NL
            </p>

            <h1
              className="font-display font-extrabold leading-[0.92] tracking-tight text-[#f5f5f5] uppercase mb-10 pop-up pop-delay-1"
              style={{ fontSize: "clamp(52px,9vw,110px)" }}
            >
              Kaj
              <br />
              Niemeijer
            </h1>

            <a
              href="#projecten"
              className="button-soft inline-flex items-center gap-3 text-sm font-sans tracking-[0.16em] text-[#f5f5f5] uppercase border-b border-[#f5f5f5] pb-1 hover:text-[#b5b5b5] hover:border-[#b5b5b5] pop-up pop-delay-2"
            >
              Bekijk projecten
              <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden>
                <path d="M0 4H16M16 4L12 1M16 4L12 7" stroke="currentColor" strokeWidth="0.75" />
              </svg>
            </a>
          </div>

          <div className="md:pb-2">
            <p className="text-lg font-sans font-light leading-relaxed text-[#b8b8b8] max-w-md pop-up pop-delay-3">
              Ik ontwerp producten die werken doordat ik begrijp waarom een probleem bestaat.
              Mijn aanpak is zorgvuldig en onderbouwd — van eerste analyse tot productierijp ontwerp.
              Ik waardeer samenwerking en zie feedback als een middel om dieper inzicht te krijgen,
              niet als correctie.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center fade-in stagger-3">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#3a3a3a]" />
      </div>
    </section>
  )
}

// ---- PROCESS ----
function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Probleem begrijpen",
      desc: "Ik begin met het achterhalen van het werkelijke probleem – niet het symptoom. Gebruikersonderzoek, observaties en concurrentieanalyse vormen de basis van elk project.",
    },
    {
      num: "02",
      title: "Kaders bepalen",
      desc: "Vanuit de analyse stel ik een programma van eisen op. Dit document definieert wat het ontwerp moet doen en fungeert als toetssteen gedurende het hele traject.",
    },
    {
      num: "03",
      title: "Ontwikkelen & itereren",
      desc: "Ik wissel snel tussen schetsen, 3D-modelleren en prototypen. Elk prototype levert nieuwe inzichten op die direct de volgende iteratie verbeteren.",
    },
    {
      num: "04",
      title: "Uitwerken & afronden",
      desc: "Zodra de richting vaststaat, werk ik het ontwerp technisch volledig uit: maattekeningen, toleranties, materiaalkeuze en productie-instructies.",
    },
  ]

  return (
    <section id="proces" className="section-reveal py-28 md:py-36 px-6 md:px-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex items-center gap-6">
          <span className="text-sm font-sans tracking-[0.24em] text-[#9a9a9a] uppercase whitespace-nowrap">
            Van probleem naar product
          </span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <h2
          className="reveal font-display font-extrabold leading-none tracking-tight text-[#f5f5f5] uppercase mb-16 md:mb-20"
          style={{ fontSize: "clamp(44px,7vw,88px)" }}
        >
          Hoe ik werk
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal p-8 border-t border-[#2a2a2a] ${
                i < 3 ? "lg:border-r lg:border-[#2a2a2a]" : ""
              } ${i % 2 === 0 ? "md:border-r md:border-[#2a2a2a] lg:border-r-0" : ""} ${
                i === 2 ? "lg:border-r lg:border-[#2a2a2a]" : ""
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span
                className="block font-display font-extrabold text-[#252525] leading-none mb-7"
                style={{ fontSize: "clamp(56px,6vw,80px)" }}
              >
                {step.num}
              </span>

              <h3 className="font-display font-semibold text-[#f0f0f0] text-2xl uppercase tracking-wide mb-4">
                {step.title}
              </h3>

              <p className="text-base font-sans font-light text-[#b0b0b0] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- PROJECT CARD ----
function ProjectCard({ project, onClick, delay = 0 }: { project: Project; onClick: () => void; delay?: number }) {
  return (
    <button
      onClick={onClick}
      className="reveal group text-left w-full focus:outline-none"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="media-zoom relative overflow-hidden bg-[#151515] mb-5 aspect-[4/3] card-soft">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#111111] opacity-0 group-hover:opacity-45 transition-opacity duration-400" />
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-sans tracking-[0.16em] text-white uppercase border border-white/30 px-3 py-2 bg-[#111111]/70 backdrop-blur-sm">
            Bekijk project →
          </span>
        </div>
      </div>

      <div>
        <p className="text-xs font-sans text-[#8f8f8f] tracking-[0.14em] uppercase mb-2">
          {project.category} — {project.year}
        </p>

        <h3 className="font-display font-semibold text-[#f0f0f0] text-3xl uppercase tracking-wide leading-tight mb-3">
          {project.title}
        </h3>

        <p className="text-base font-sans font-light text-[#b0b0b0] leading-relaxed line-clamp-2">
          {project.summary}
        </p>
      </div>
    </button>
  )
}

// ---- PROJECT MODAL ----
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setImgIndex((i) => (i + 1) % project.images.length)
      if (e.key === "ArrowLeft") setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)
    }

    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose, project.images.length])

  const prev = () => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)
  const next = () => setImgIndex((i) => (i + 1) % project.images.length)

  return (
    <div
      className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-[#161616] border border-[#2a2a2a] flex flex-col fade-scale">
        <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-[#2a2a2a] shrink-0 gap-4">
          <div className="min-w-0">
            <p className="text-xs font-sans tracking-[0.14em] text-[#9a9a9a] uppercase mb-1">
              {project.category} — {project.year}
            </p>
            <h2 className="font-display font-bold text-[#f0f0f0] text-2xl md:text-4xl uppercase tracking-wide leading-none break-words">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-[#9a9a9a] hover:text-[#f0f0f0] transition-colors border border-[#2a2a2a] hover:border-[#7a7a7a] shrink-0"
            aria-label="Sluiten"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row overflow-hidden flex-1 min-h-0">
          <div className="md:w-[58%] bg-[#0f0f0f] flex flex-col shrink-0">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <img
                key={imgIndex}
                src={project.images[imgIndex]}
                alt={`${project.title} foto ${imgIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-t border-[#222222] gap-3">
              <button
                onClick={prev}
                className="flex items-center gap-2 text-[11px] md:text-xs font-sans tracking-[0.14em] text-[#b0b0b0] uppercase hover:text-[#f0f0f0]"
              >
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden>
                  <path d="M14 4H2M2 4L5 1.5M2 4L5 6.5" stroke="currentColor" strokeWidth="0.75" />
                </svg>
                Vorige
              </button>

              <div className="flex items-center gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`h-px transition-all duration-300 ${
                      i === imgIndex ? "w-7 md:w-8 bg-[#f0f0f0]" : "w-3 md:w-4 bg-[#4a4a4a] hover:bg-[#888]"
                    }`}
                    aria-label={`Foto ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex items-center gap-2 text-[11px] md:text-xs font-sans tracking-[0.14em] text-[#b0b0b0] uppercase hover:text-[#f0f0f0]"
              >
                Volgende
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden>
                  <path d="M0 4H12M12 4L9 1.5M12 4L9 6.5" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto border-t md:border-t-0 md:border-l border-[#2a2a2a]">
            <div className="p-6 md:p-8 flex flex-col gap-8">
              <div>
                <p className="text-xs font-sans tracking-[0.14em] text-[#9a9a9a] uppercase mb-3">
                  Omschrijving
                </p>
                <p className="text-base md:text-lg font-sans font-light text-[#c0c0c0] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-[#242424] pt-7">
                <p className="text-xs font-sans tracking-[0.14em] text-[#9a9a9a] uppercase mb-3">
                  Uitdaging
                </p>
                <p className="text-base md:text-lg font-sans font-light text-[#c0c0c0] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="border-t border-[#242424] pt-7">
                <p className="text-xs font-sans tracking-[0.14em] text-[#9a9a9a] uppercase mb-3">
                  Aanpak
                </p>
                <p className="text-base md:text-lg font-sans font-light text-[#c0c0c0] leading-relaxed">
                  {project.process}
                </p>
              </div>

              <div className="border-t border-[#242424] pt-7">
                <p className="text-xs font-sans tracking-[0.14em] text-[#9a9a9a] uppercase mb-3">
                  Resultaat
                </p>
                <p className="text-base md:text-lg font-sans font-light text-[#c0c0c0] leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              <div className="border-t border-[#242424] pt-7 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-sans tracking-[0.12em] text-[#b5b5b5] uppercase border border-[#343434] px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---- PROJECTS SECTION ----
function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projecten" className="py-28 md:py-36 px-6 md:px-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex items-center gap-6">
          <span className="text-sm font-sans tracking-[0.24em] text-[#9a9a9a] uppercase whitespace-nowrap">
            Werk
          </span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <h2
          className="section-reveal font-display font-extrabold leading-none tracking-tight text-[#f5f5f5] uppercase mb-16 md:mb-20"
          style={{ fontSize: "clamp(44px,7vw,88px)" }}
        >
          Projecten
        </h2>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActive(project)}
              delay={i * 120}
            />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

// ---- SKILLS ----
function SkillsSection() {
  return (
    <section id="skills" className="section-reveal py-28 md:py-36 px-6 md:px-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex items-center gap-6">
          <span className="text-sm font-sans tracking-[0.24em] text-[#9a9a9a] uppercase whitespace-nowrap">
            Competenties
          </span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2
              className="reveal font-display font-extrabold leading-none tracking-tight text-[#f5f5f5] uppercase mb-6"
              style={{ fontSize: "clamp(44px,7vw,88px)" }}
            >
              Skills
            </h2>

            <p className="reveal reveal-delay-1 text-base md:text-lg font-sans font-light text-[#b5b5b5] leading-relaxed max-w-sm">
              Mijn vaardigheden verbinden analytisch onderzoek met technisch maakwerk.
              Ik werk het liefst in trajecten waarbij beide kanten nodig zijn.
            </p>
          </div>

          <div className="min-w-0">
            {SKILLS.map((skill, i) => (
              <div
                key={skill.name}
                className={`reveal py-5 md:py-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-6 ${
                  i < SKILLS.length - 1 ? "border-b border-[#242424]" : ""
                } ${i === 0 ? "border-t border-[#242424]" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-display font-semibold text-[#e3e3e3] text-lg sm:text-xl md:text-2xl uppercase tracking-wide leading-snug md:pr-4">
                  {skill.name}
                </span>

                <span className="text-sm font-sans text-[#9f9f9f] md:text-right tracking-wide leading-relaxed break-words">
                  {skill.tools}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- FAQ ----
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-reveal py-28 md:py-36 px-6 md:px-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex items-center gap-6">
          <span className="text-sm font-sans tracking-[0.24em] text-[#9a9a9a] uppercase whitespace-nowrap">
            Vragen
          </span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2
              className="reveal font-display font-extrabold leading-none tracking-tight text-[#f5f5f5] uppercase"
              style={{ fontSize: "clamp(44px,7vw,88px)" }}
            >
              FAQ
            </h2>
          </div>

          <div>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`reveal border-b border-[#2a2a2a] ${i === 0 ? "border-t" : ""}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <button
                  className="w-full py-6 flex items-start justify-between gap-4 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold text-[#dddddd] text-lg md:text-xl uppercase tracking-wide leading-snug">
                    {item.q}
                  </span>

                  <span className={`accordion-icon shrink-0 mt-1 text-[#8e8e8e] ${open === i ? "is-open" : ""}`}>
                    <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden>
                      <path d="M5.5 0V11M0 5.5H11" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? "max-h-72 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-base md:text-lg font-sans font-light text-[#b8b8b8] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- CONTACT ----
function ContactSection() {
  return (
    <section id="contact" className="section-reveal py-28 md:py-36 px-6 md:px-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex items-center gap-6">
          <span className="text-sm font-sans tracking-[0.24em] text-[#9a9a9a] uppercase whitespace-nowrap">
            Bereikbaar
          </span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start md:items-end">
          <div>
            <h2
              className="reveal font-display font-extrabold leading-none tracking-tight text-[#f5f5f5] uppercase mb-7"
              style={{ fontSize: "clamp(44px,7vw,88px)" }}
            >
              Contact
            </h2>

            <p className="reveal reveal-delay-1 text-base md:text-lg font-sans font-light text-[#b5b5b5] leading-relaxed max-w-sm">
              Heb je een vraag over mijn werk, of wil je kijken of we samen iets kunnen opbouwen?
              Stuur een bericht — ik reageer binnen één werkdag.
            </p>
          </div>

          <div className="flex flex-col gap-0 min-w-0">
            {[
              { label: "E-mail", value: "kajnie28@gmail.com", href: "mailto:kajnie28@gmail.com" },
              { label: "Telefoon", value: "+31 6 466 79022", href: "tel:+31646679022" },
              { label: "LinkedIn", value: "/in/kaj-niemeijer", href: "https://www.linkedin.com/in/kaj-niemeijer" },
            ].map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="reveal group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4 border-b border-[#2a2a2a] py-5 md:py-6 hover:border-[#5a5a5a] min-w-0"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="text-xs font-sans tracking-[0.14em] text-[#9a9a9a] uppercase shrink-0">
                  {item.label}
                </span>

                <span className="font-display font-semibold text-[#f0f0f0] text-lg sm:text-2xl md:text-3xl uppercase tracking-wide group-hover:text-white text-left sm:text-right break-all min-w-0">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- FOOTER ----
function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="text-xs font-sans tracking-[0.14em] text-[#7f7f7f] uppercase">
          © 2026 Kaj Niemeijer
        </span>
        <span className="text-xs font-sans tracking-[0.14em] text-[#7f7f7f] uppercase">
          Industrieel Productontwerper
        </span>
      </div>
    </footer>
  )
}

// ---- APP ----
export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal, .section-reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#111111] min-h-screen">
      <Nav />
      <Hero />
      <ProcessSection />
      <ProjectsSection />
      <SkillsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}