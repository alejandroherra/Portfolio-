"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ORBS_EN, UI_TEXT } from "./portfolio-translations";

 

const GITHUB_URL = "https://github.com/alejandroherra";
const LINKEDIN_URL = "https://www.linkedin.com/in/alejandroherra";
const EMAIL_URL = "mailto:Alejandrohs@live.com";
const WHATSAPP_URL = "https://wa.me/50664695907";
const PHONE_URL = "tel:+50664561416";
const LANGUAGE_STORAGE_KEY = "galaktik-portfolio-language";

const ORBS = [
  {
    id: "programacion",
    name: "Programación",
    icon: "</>",
    color: "#64e8ff",
    angle: -1.08,
    eyebrow: "01 / SOFTWARE ENGINEERING",
    title: "Código que transforma ideas.",
    description:
      "Desarrollo de aplicaciones modernas, experiencias web 3D y soluciones personalizadas, con foco en arquitectura, seguridad, rendimiento y calidad. Actualmente también trabajo con React Native para iOS, Android, macOS y Windows.",
    stats: [
      ["~6", "años desde mis primeros pasos"],
      [
        "2019 Septiembre",
        " Mi inicios en programacion con HTML CSS JS C# y ASP.net ",
      ],
    ],
    sections: [
      {
        title: "Galaktik Corp.",
        subtitle: "Founder / Project Manager · 2022 – Actualidad",
        items: [
          "Fundación y dirección de una iniciativa tecnológica enfocada en software personalizado, productos digitales y soluciones de inteligencia artificial.",
          "Arquitectura y desarrollo de aplicaciones front end, sitios web, servicios backend y APIs REST.",
          "Desarrollo con React, Vue, Angular, TypeScript, Tailwind CSS, Node.js  usando Firebase y MongoDB.",
          "Guiando un equipo de 3 programadores y varios freelancers",
          "Reuniendome con clientes en persona y virtual para llevar ideas a cabo por Figma, entendimiento de la idea y proyeccion",
          "Planificacion de cada cosa, asi sea website, software a medida, AI agents, chatbots, aplicaciones, sistemas, integraciones o mejoras a tecnologias mas recientes asi como el cargo de dirigir los proyectos, controlar las versiones y revisar trabajo de colaboradores.",
        ],
      },
      {
        title: "Concentrix",
        subtitle: "QA Testing & Front End Developer · Febrero 2023 – Enero 2026",
        items: [
          "Desarrollo front end y aseguramiento de calidad para aplicaciones web corporativas.",
          "Identificación, documentación, reproducción y análisis de defectos.",
          "Pruebas automatizadas con Jest y React Testing Library.",
          "Pruebas end-to-end con Cypress para aplicaciones y flujos de usuario.",
          "Integración de servicios backend, APIs REST, operaciones CRUD y routing.",
          "Trabajo con Git y GitHub en entornos Agile.",
        ],
      },
      {
        title: "React Native y desarrollo multiplataforma",
        subtitle: "iOS · Android · macOS · Windows",
        items: [
          "Actualmente también trabajo con React Native para desarrollar aplicaciones para iOS, Android, macOS y Windows.",
          "Construcción de interfaces reutilizables y adaptación de funcionalidades a las necesidades de cada plataforma.",
          "Desarrollo con atención a la experiencia de usuario, la organización del código y el mantenimiento del proyecto.",
          "Aprendizaje continuo de herramientas y particularidades del ecosistema multiplataforma.",
        ],
        tags: [
          "React Native",
          "iOS",
          "Android",
          "macOS",
          "Windows",
          "Aplicaciones multiplataforma",
        ],
      },
      {
        title: "Participación en proyectos open source",
        subtitle: "Colaboración con la comunidad",
        items: [
          "He participado en proyectos como Prettier, MongoDB y muchos otros repositorios de la comunidad.",
          "Mi actividad y mis contribuciones públicas pueden consultarse en mi perfil de GitHub.",
        ],
      },
      {
        title: "Especialidades",
        tags: [
          "Front End Engineering",
          "Aplicaciones responsive",
          "Experiencias web 3D",
          "APIs REST",
          "Arquitectura de software",
          "QA Automation",
          "Unit Testing",
          "Integration Testing",
          "E2E Testing",
          "Aplicaciones multiplataforma",
          "React Native",
          "Código seguro",
          "Buenas prácticas",
        ],
      },
    ],
  },
  {
    id: "ai",
    name: "AI",
    icon: "✦",
    color: "#b394ff",
    angle: -0.36,
    eyebrow: "02 / ARTIFICIAL INTELLIGENCE",
    title: "Inteligencia con propósito.",
    description:
      "Ingeniería de AI, entrenamiento y evaluación de modelos, prompt engineering, coordinación técnica y contribuciones a proyectos open source.",
    stats: [
      ["70+", "tracks de proyectos AI"],
      ["LLMs", "entrenamiento y evaluación"],
      ["AI", "integraciones personalizadas"],
    ],
    sections: [
      {
        title: "Scale AI / Outlier",
        subtitle:
          "Front End AI Prompt Engineer · AI Software Engineer · Queue Manager · Junio 2024 – Actualidad",
        items: [
          "Liderazgo y coordinación de más de 70 tracks de proyectos de AI.",
          "Gestión de colas y coordinación entre desarrolladores, evaluadores, reviewers y stakeholders.",
          "Apoyo a onboardings, resolución de bloqueos técnicos y operativos, y seguimiento de objetivos de calidad.",
          "Creación, revisión y evaluación de tareas técnicas para entrenar modelos avanzados.",
          "Evaluación de código generado, razonamiento, precisión técnica y cumplimiento de instrucciones.",
          "Trabajo con prompts de ingeniería de software, desarrollo front end y AI conversacional.",
          "Participación en programas de evaluación de lenguaje, voz, código y capacidades multimodales.",
        ],
      },
      {
        title: "Soluciones AI en Galaktik",
        items: [
          "Diseño e implementación de aplicaciones potenciadas por AI.",
          "Configuración de chatbots, flujos conversacionales e instrucciones de sistema.",
          "Integración de código y automatizaciones para aplicaciones AI.",
          "Experimentación con machine learning en JavaScript utilizando TensorFlow.js.",
          "Trabajo con reconocimiento facial y cálculos en proyectos de largo horizonte.",
        ],
      },
      {
        title: "Contribuciones a proyectos de AI",
        subtitle: "Open source y colaboración técnica",
        items: [
          "He aportado a proyectos como OmniRoute, disponible en GitHub, y a muchos otros repositorios.",
          "Mantengo una actitud de colaboración, experimentación y aprendizaje continuo dentro de la comunidad.",
          "Mi actividad pública y mis contribuciones pueden consultarse en mi perfil de GitHub.",
        ],
        tags: ["OmniRoute", "AI", "Open Source", "GitHub"],
      },
      {
        title: "Áreas de trabajo",
        tags: [
          "Prompt Engineering",
          "LLM Evaluation",
          "AI Model Training",
          "Human Feedback",
          "AI Code Evaluation",
          "SWE AI Evaluation",
          "Conversational AI",
          "Chatbot Configuration",
          "System Instructions",
          "Multimodal Evaluation",
          "AI Quality Assurance",
          "TensorFlow",
          "TensorFlow.js",
          "Three.js",
          "n8n",
          "Claude Code",
          "OpenCode",
          "Antigravity CLI",
        ],
      },
    ],
  },
  {
    id: "estudios",
    name: "Estudios",
    icon: "⌘",
    color: "#ffca7b",
    angle: 0.36,
    eyebrow: "03 / EDUCATION & TECH STACK",
    title: "Aprender. Construir. Evolucionar.",
    description:
      "Formación académica, certificados, idiomas y tecnologías utilizadas a lo largo de mi experiencia profesional.",
    stats: [
      ["Software", "ingeniería"],
      ["C1", "inglés"],
      ["B2", "portugués"],
    ],
    sections: [
      {
        title: "Universidad Fidélitas",
        subtitle: "Bachelor’s Degree in Software Engineering",
        items: ["Grado en Ingeniería de Software."],
      },
      {
        title: "Scale AI / Outlier",
        subtitle: "Certificaciones y reconocimientos",
        items: [
          "Prompt Engineering Certificate.",
          "Front End Engineering Diploma.",
          "AI Software Engineer Certificate.",
          "AI Training Certificate.",
          "Queue Manager Certificate / Recognition.",
          "Quality Manager Recognition.",
          "Scale AI GitHub Member Badge.",
          "Cursos de OpenClaw, Claude Code, OpenCode, Gemini CLI y OpenAI CLI para desarrollo con AI.",
        ],
      },
      {
        title: "INA",
        subtitle: "Idiomas y formación técnica",
        items: [
          "English C1 Certificate.",
          "Portuguese B2 Certificate.",
          "Spanish C2 Certificate.",
          "Curso de Programación Orientada a Objetos.",
          "Curso de Front End.",
        ],
      },
      {
        title: "Harvard",
        subtitle: "Cursos",
        items: ["CS50 — Introduction to Computer Science."],
      },
      {
        title: "Lenguajes",
        tags: ["JavaScript", "TypeScript", "C++", "Java", "C#", "Python"],
      },
      {
        title: "Frameworks y librerías front end",
        tags: [
          "React",
          "React Native",
          "Vue.js",
          "Angular",
          "Tailwind CSS",
          "Three.js",
          "ASP.net MVC",
          "LangChain",
          "TensorFlow",
          "Spring Boot",
          "Pygame",
        ],
      },
      {
        title: "Databases y comunicaciones",
        tags: [
          "Node.js",
          "MongoDB",
          "RESTful APIs",
          "JWT/PASETO",
          "Firebase",
          "SQL/MySQL ",
        ],
      },
      {
        title: "Inteligencia artificial y automatización",
        tags: [
          "n8n",
          "Prompt Engineering",
          "LLM Training",
          "LLM Evaluation",
          "AI Chatbots",
          "MCP",
          "AI Agents development",
          "Cursor, Windsurf, Antigravity, Opencode, Claude Code",
        ],
      },
      {
        title: "Testing y calidad",
        tags: [
          "Jest",
          "React Testing Library",
          "Cypress",
          "Unit Testing",
          "Integration Testing",
          "E2E Testing",
          "QA Automation",
          "Testing con AI basados en evaluaciones seguidas de otras evaluaciones y siguiendo rubricas especificas",
        ],
      },
      {
        title: "Arquitecturas y metodologías",
        tags: [
          "Clean Architecture",
          "Hexagonal Architecture",
          "FDD",
          "FSD",
          "Scream Architecture",
          "Component-based Architecture",
          "Agile",
        ],
      },
      {
        title: "Diseño, colaboración y plataformas",
        tags: ["Figma", "Jira", "Git", "GitHub", "Docker"],
      },
    ],
  },
  {
    id: "reclutador",
    name: "Mensaje para el reclutador",
    icon: "✉",
    color: "#80edd8",
    angle: 1.08,
    eyebrow: "04 / MENSAJE PARA EL RECLUTADOR",
    title: "Bases sólidas. Mentalidad adaptable.",
    description:
      "Soy Software Engineer. Empecé hace casi seis años aprendiendo los fundamentos y escribiendo código a mano. La tecnología cambia constantemente, pero sigo construyendo sobre bases sólidas: código seguro, buenas prácticas y disposición para aprender.",
    stats: [
      ["~6", "años desde mis primeros pasos"],
      ["Calidad", "seguridad y buenas prácticas"],
      ["Siempre", "abierto a aprender"],
    ],
    sections: [
      {
        title: "Mi Criterio de la programación y como la trabajo en si.",
        items: [
          "Comencé aprendiendo las bases de la programación y escribiendo código a mano para comprender la lógica detrás de cada solución, sin embargo con los avances actuales me adapto a la cambiante desde hace 2 años apoyandome desde copilot cuando empece hasta los actuales modelos que hacen ver lo que un equipo de ingenieria de 40 personas veria dificil  .",
          "Y bueno esa formación me permite analizar problemas, entender tecnologías nuevas y construir soluciones sin depender únicamente de una herramienta o un framework, me considero Front End engineer pero tambien considero que al adquirir bases solidas, buenas practicas, orden, aplicar arquitecturas correctas y distintos frameworks o librerias de acuerdo al proyecto, pensando en cual solucion aporta mas o lo mismo consumiendo menos, absolutamente cualquier persona puede llevar a cabo una tarea. .",
          "Por ultimo, No niego la IA y la uso siempre, sin embargo todo el codigo que esta produce antes de llegar a produccion o a una conclusion si funciona o no, se testea de todas las formas, se documenta y se documenta con comentarios concretos, con bases y que sirvan de apoyo a algun mantenimiento futuro ",
        ],
      },
      {
        title: "Adaptabilidad tecnológica",
        items: [
          "Puedo adaptarme para trabajar en cualquier lenguaje, apoyándome en fundamentos sólidos y aprendiendo las particularidades de cada tecnología.",
          "Entiendo que el desarrollo de software evoluciona constantemente y que mantenerse abierto al cambio forma parte del trabajo.",
          "Entiendo, y he trabajado en multiples arquitecturas de software en distintos proyectos, entiendo los ordenes, como trabajar en local y en produccion, como llevar un equipo y como ser liderado.",
        ],
      },
      {
        title: "Cómo trabajo dentro de un equipo",
        items: [
          "Priorizo el código seguro, legible, mantenible y alineado con buenas prácticas.",
          "Respeto los estándares de la empresa, sus reglas y las directrices de mis superiores y responsables técnicos.",
          "Estoy abierto a revisiones de código, retroalimentación y cambios que ayuden a mejorar el resultado.",
          "Busco entender las necesidades del proyecto y colaborar con responsabilidad, comunicación y criterio profesional.",
        ],
      },
      {
        title: "Siempre dispuesto a aprender",
        items: [
          "Estoy abierto a aprender cualquier tecnología, lenguaje, herramienta o metodología que el equipo necesite, eso me gustaria recalcarlo y siento que es importante dado que ahora el codigo en si no es un impedimento mas una herramienta.",
        ],
        tags: [
          "Software Engineering",
          "Aprendizaje continuo",
          "Código seguro",
          "Buenas prácticas",
          "Trabajo en equipo",
          "Adaptabilidad",
        ],
      },
    ],
  },
];

/*
 * Las traducciones sustituyen solo el contenido.
 * Los identificadores y propiedades visuales se conservan.
 */
const ENGLISH_ORBS = ORBS.map((orb) => ({
  ...orb,
  ...ORBS_EN[orb.id],
  id: orb.id,
  icon: orb.icon,
  color: orb.color,
  angle: orb.angle,
}));

const INITIAL_ORB_INDEX = 1;
const MIN_YAW = ORBS[0].angle;
const MAX_YAW = ORBS[ORBS.length - 1].angle;

const VERTEX_SHADER = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vView;

  void main() {
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);

    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-viewPosition.xyz);

    gl_Position = projectionMatrix * viewPosition;
  }
`;

const FRAGMENT_SHADER = `
  uniform vec3 uColor;
  uniform float uTime;

  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vView;

  void main() {
    float fresnel = pow(
      1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0),
      2.4
    );

    float waves = sin(
      vPosition.y * 15.0 +
      sin(vPosition.x * 8.0 + uTime * 0.7) * 1.8 +
      uTime
    );

    float bands = smoothstep(0.55, 1.0, waves);

    float energy = (
      sin(vPosition.x * 9.0 - uTime * 0.6) *
      sin(vPosition.z * 9.0 + uTime * 0.4)
    ) * 0.5 + 0.5;

    vec3 base = mix(
      vec3(0.012, 0.022, 0.055),
      uColor,
      0.12 + energy * 0.18 + bands * 0.23
    );

    vec3 color = base + uColor * fresnel * 1.25;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function createGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;

  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);

  gradient.addColorStop(0, "rgba(255,255,255,0.65)");
  gradient.addColorStop(0.25, "rgba(255,255,255,0.28)");
  gradient.addColorStop(0.6, "rgba(255,255,255,0.07)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);

  return new THREE.CanvasTexture(canvas);
}

function LanguageSwitcher({
  language,
  onChange,
  label,
  disabled = false,
}) {
  return (
    <div
      className="vo-language-switch"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        lang="es"
        className={language === "es" ? "is-active" : ""}
        onClick={() => onChange("es")}
        aria-label="Español"
        aria-pressed={language === "es"}
        title="Español"
        disabled={disabled}
      >
        ES
      </button>

      <button
        type="button"
        lang="en"
        className={language === "en" ? "is-active" : ""}
        onClick={() => onChange("en")}
        aria-label="English"
        aria-pressed={language === "en"}
        title="English"
        disabled={disabled}
      >
        EN
      </button>
    </div>
  );
}

/*
 * Iconos SVG de contacto.
 * No requieren librerías adicionales.
 */
function ContactIcon({ type }) {
  const paths = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.5 7.5c.3 3.8 2.2 5.7 6 6l1-1.5-2-1-1 1c-1.3-.6-2.4-1.7-3-3l1-1-1-2-1 1.5Z" />
      </>
    ),
    phone: (
      <path d="M21 16.5v3a1.5 1.5 0 0 1-1.7 1.5A18.5 18.5 0 0 1 3 4.7 1.5 1.5 0 0 1 4.5 3h3A1.5 1.5 0 0 1 9 4.3l.4 2.5a1.5 1.5 0 0 1-.4 1.3L7.5 9.5a15 15 0 0 0 7 7l1.4-1.5a1.5 1.5 0 0 1 1.3-.4l2.5.4a1.5 1.5 0 0 1 1.3 1.5Z" />
    ),
    github: (
      <>
        <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7" />
        <path d="M15 22v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 7a4.4 4.4 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.6 3.4 5.6 3.7 5.6 3.7A4.4 4.4 0 0 0 5.5 7a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.9 5.7 5.6 6A3 3 0 0 0 9 18.6V22" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[type]}
    </svg>
  );
}

/*
 * Footer de contacto compartido por todos los orbes.
 * Hereda --orb-color desde el panel.
 */
function OrbContactFooter({ language, text }) {
  const copy =
    language === "en"
      ? {
          eyebrow: "LET’S CONNECT",
          heading: "Let’s build something extraordinary.",
          action: "Get in touch",
          navigation: "Contact options",
          email: "Email",
          whatsapp: "WhatsApp",
          whatsappDetail: "Start a conversation",
          phone: "Direct call",
          github: "GitHub",
          linkedin: "LinkedIn",
          linkedinDetail: "Professional profile",
          location: "Escazú, Costa Rica · 10201",
          locationLabel: "Location",
        }
      : {
          eyebrow: "CONECTEMOS",
          heading: "Construyamos algo extraordinario.",
          action: "Contactar",
          navigation: "Opciones de contacto",
          email: "Correo electrónico",
          whatsapp: "WhatsApp",
          whatsappDetail: "Iniciemos una conversación",
          phone: "Llamada directa",
          github: "GitHub",
          linkedin: "LinkedIn",
          linkedinDetail: "Perfil profesional",
          location: "Escazú, Costa Rica · 10201",
          locationLabel: "Ubicación",
        };

  const links = [
    {
      id: "email",
      icon: "email",
      label: copy.email,
      value: "Alejandrohs@live.com",
      href: EMAIL_URL,
    },
    {
      id: "whatsapp",
      icon: "whatsapp",
      label: copy.whatsapp,
      value: copy.whatsappDetail,
      href: WHATSAPP_URL,
      external: true,
    },
    {
      id: "phone",
      icon: "phone",
      label: copy.phone,
      value: "+506 6456 1416",
      href: PHONE_URL,
    },
    {
      id: "github",
      icon: "github",
      label: copy.github,
      value: "@alejandroherra",
      href: GITHUB_URL,
      external: true,
    },
    {
      id: "linkedin",
      icon: "linkedin",
      label: copy.linkedin,
      value: copy.linkedinDetail,
      href: LINKEDIN_URL,
      external: true,
    },
  ];

  return (
    <footer className="vo-orb-contact">
      <div className="vo-orb-contact-heading">
        <div className="vo-orb-contact-intro">
          <span className="vo-orb-contact-eyebrow">
            <span aria-hidden="true" />
            {copy.eyebrow}
          </span>

          <h3>{text.contactHeading || copy.heading}</h3>

          <p>Victor Alejandro Herra Solis</p>
        </div>

        <a
          className="vo-orb-contact-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            language === "en"
              ? "Get in touch via WhatsApp"
              : "Contactar por WhatsApp"
          }
        >
          {copy.action}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <nav
        className="vo-orb-contact-grid"
        aria-label={copy.navigation}
      >
        {links.map((link) => (
          <a
            key={link.id}
            className={`vo-orb-contact-link vo-orb-contact-link--${link.id}`}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <span className="vo-orb-contact-icon">
              <ContactIcon type={link.icon} />
            </span>

            <span className="vo-orb-contact-copy">
              <span className="vo-orb-contact-label">
                {link.label}
              </span>

              <span className="vo-orb-contact-value">
                {link.value}
              </span>
            </span>

            <span
              className="vo-orb-contact-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        ))}
      </nav>

      <div className="vo-orb-contact-bottom">
        <div
          className="vo-orb-contact-location"
          aria-label={`${copy.locationLabel}: ${copy.location}`}
        >
          <ContactIcon type="location" />
          <span>{copy.location}</span>
        </div>

        <span
          className="vo-orb-contact-signature"
          aria-hidden="true"
        >
          GALAKTIK <span>✧</span>
        </span>
      </div>
    </footer>
  );
}

export default function PortfolioOrbes() {
  const containerRef = useRef(null);
  const labelsRef = useRef([]);
  const targetYawRef = useRef(ORBS[INITIAL_ORB_INDEX].angle);
  const selectedRef = useRef(null);
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const requestRenderRef = useRef(null);

  const [language, setLanguage] = useState("es");
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(INITIAL_ORB_INDEX);
  const [error, setError] = useState(false);

  const text = UI_TEXT[language];
  const localizedOrbs = language === "en" ? ENGLISH_ORBS : ORBS;
  const currentOrb = selected !== null ? localizedOrbs[selected] : null;

  /*
   * El primer render usa español tanto en servidor como en cliente.
   * Después se recupera la preferencia del navegador.
   */
  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem(
        LANGUAGE_STORAGE_KEY
      );

      if (savedLanguage === "es" || savedLanguage === "en") {
        // oxlint-disable-next-line react/set-state-in-effect -- recupera una preferencia del navegador
        setLanguage(savedLanguage);
      }
    } catch {
      // El portfolio sigue funcionando si localStorage está bloqueado.
    }
  }, []);

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage !== "es" && nextLanguage !== "en") return;

    setLanguage(nextLanguage);

    try {
      window.localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        nextLanguage
      );
    } catch {
      // Guardar la preferencia es opcional.
    }
  };

  useEffect(() => {
    selectedRef.current = selected;

    const canvas = containerRef.current?.querySelector("canvas");

    if (canvas) {
      canvas.tabIndex = selected === null ? 0 : -1;
    }

    requestRenderRef.current?.();
  }, [selected]);

  const openOrb = (index) => {
    targetYawRef.current = ORBS[index].angle;
    selectedRef.current = index;

    setSelected(index);
    setActive(index);
    requestRenderRef.current?.();
  };

  const closeOrb = () => {
    selectedRef.current = null;
    setSelected(null);
    requestRenderRef.current?.();
  };

  /*
   * Escena Three.js optimizada.
   * Cambiar el idioma no reconstruye la escena.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const isMobile = mobileQuery.matches;
    let reducedMotion = motionQuery.matches;
    let renderer;

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
      });
    } catch (err) {
      console.error("No se pudo iniciar la escena 3D:", err);
      // oxlint-disable-next-line react/set-state-in-effect -- fallback si WebGL no está disponible
      setError(true);
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const canvas = renderer.domElement;
    canvas.className = "vo-canvas";
    canvas.tabIndex = selectedRef.current === null ? 0 : -1;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", UI_TEXT.es.sceneLabel);

    container.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 100);

    camera.position.set(0, 0, 0);

    const glowTexture = createGlowTexture();

    const sphereGeometry = new THREE.SphereGeometry(
      0.78,
      isMobile ? 24 : 32,
      isMobile ? 16 : 24
    );

    const ringGeometry = new THREE.TorusGeometry(
      1.05,
      0.009,
      4,
      64
    );

    const secondRingGeometry = new THREE.TorusGeometry(
      1.2,
      0.005,
      4,
      64
    );

    const groups = [];
    const hitTargets = [];

    const starCount = isMobile ? 500 : 900;
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = THREE.MathUtils.randFloat(25, 85);
      const theta = Math.random() * Math.PI * 2;
      const vertical = THREE.MathUtils.randFloatSpread(2);
      const horizontal = Math.sqrt(
        Math.max(0, 1 - vertical * vertical)
      );

      starsPositions[i * 3] =
        radius * horizontal * Math.cos(theta);

      starsPositions[i * 3 + 1] = radius * vertical;

      starsPositions[i * 3 + 2] =
        radius * horizontal * Math.sin(theta);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starsPositions, 3)
    );

    const stars = new THREE.Points(
      starsGeometry,
      new THREE.PointsMaterial({
        color: "#bccaff",
        size: 0.075,
        transparent: true,
        opacity: 0.65,
        sizeAttenuation: true,
        depthWrite: false,
      })
    );

    scene.add(stars);

    ORBS.forEach((orb, index) => {
      const group = new THREE.Group();

      group.position.set(
        Math.sin(orb.angle) * 8,
        0,
        -Math.cos(orb.angle) * 8
      );

      const sphereMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uColor: { value: new THREE.Color(orb.color) },
          uTime: { value: 0 },
        },
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
      });

      const sphere = new THREE.Mesh(
        sphereGeometry,
        sphereMaterial
      );

      sphere.userData.orbIndex = index;

      group.add(sphere);
      hitTargets.push(sphere);

      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTexture,
          color: orb.color,
          transparent: true,
          opacity: 0.36,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );

      glow.scale.set(3.7, 3.7, 1);
      group.add(glow);

      const ring = new THREE.Mesh(
        ringGeometry,
        new THREE.MeshBasicMaterial({
          color: orb.color,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );

      ring.rotation.set(0.6, 0.35, index * 0.6);
      group.add(ring);

      const secondRing = new THREE.Mesh(
        secondRingGeometry,
        new THREE.MeshBasicMaterial({
          color: orb.color,
          transparent: true,
          opacity: 0.24,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );

      secondRing.rotation.set(-0.7, 0.5, 0.9);
      group.add(secondRing);

      scene.add(group);

      groups.push({
        group,
        sphere,
        ring,
        secondRing,
      });
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const direction = new THREE.Vector3();
    const labelPosition = new THREE.Vector3();
    const intersections = [];

    const labelCache = ORBS.map(() => ({
      transform: "",
      visibility: "",
      opacity: "",
    }));

    let width = 1;
    let height = 1;
    let yaw = targetYawRef.current;
    let previousActive = INITIAL_ORB_INDEX;
    let elapsed = 0;
    let lastTime = null;
    let lastRenderTime = null;
    let lastHoverTime = 0;
    let animationFrame = 0;
    let disposed = false;
    let inView = true;

    const frameInterval = 1000 / 60;

    const canRender = () =>
      !disposed &&
      !document.hidden &&
      inView &&
      selectedRef.current === null;

    const stopAnimation = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }

      lastTime = null;
      lastRenderTime = null;
    };

    function requestRender() {
      if (!canRender()) {
        stopAnimation();
        return;
      }

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    requestRenderRef.current = requestRender;

    const resize = () => {
      width = Math.max(container.clientWidth, 1);
      height = Math.max(container.clientHeight, 1);

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        mobileQuery.matches ? 1 : 1.5,
        Math.sqrt(1800000 / (width * height))
      );

      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      lastRenderTime = null;
      requestRender();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((entries) => {
            inView = entries[0]?.isIntersecting ?? true;
            requestRender();
          })
        : null;

    intersectionObserver?.observe(container);

    const getHit = (event) => {
      const rect = canvas.getBoundingClientRect();

      if (!rect.width || !rect.height) return null;

      pointer.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      scene.updateMatrixWorld(true);
      camera.updateMatrixWorld();

      raycaster.setFromCamera(pointer, camera);

      intersections.length = 0;

      raycaster.intersectObjects(
        hitTargets,
        false,
        intersections
      );

      return intersections[0] ?? null;
    };

    const drag = {
      active: false,
      pointerId: null,
      startX: 0,
      startY: 0,
      lastX: 0,
      moved: false,
    };

    const onPointerDown = (event) => {
      if (selectedRef.current !== null) return;

      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      if (drag.active) return;

      drag.active = true;
      drag.pointerId = event.pointerId;
      drag.startX = event.clientX;
      drag.startY = event.clientY;
      drag.lastX = event.clientX;
      drag.moved = false;

      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor = "grabbing";
    };

    const onPointerMove = (event) => {
      if (selectedRef.current !== null) return;

      if (drag.active && event.pointerId === drag.pointerId) {
        const delta = event.clientX - drag.lastX;
        drag.lastX = event.clientX;

        if (
          Math.hypot(
            event.clientX - drag.startX,
            event.clientY - drag.startY
          ) > 6
        ) {
          drag.moved = true;
        }

        if (drag.moved) {
          targetYawRef.current = THREE.MathUtils.clamp(
            targetYawRef.current - delta * 0.0035,
            MIN_YAW,
            MAX_YAW
          );

          requestRender();
        }

        return;
      }

      if (event.pointerType !== "mouse") return;

      const now = performance.now();

      if (now - lastHoverTime < 70) return;

      lastHoverTime = now;

      const cursor = getHit(event) ? "pointer" : "grab";

      if (canvas.style.cursor !== cursor) {
        canvas.style.cursor = cursor;
      }
    };

    const finishPointer = (event, cancelled = false) => {
      if (!drag.active || event.pointerId !== drag.pointerId) {
        return;
      }

      const isClick =
        !cancelled &&
        !drag.moved &&
        Math.hypot(
          event.clientX - drag.startX,
          event.clientY - drag.startY
        ) <= 6;

      drag.active = false;
      drag.pointerId = null;

      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }

      canvas.style.cursor = "grab";

      if (!isClick || selectedRef.current !== null) return;

      const hit = getHit(event);

      if (!hit) return;

      const index = hit.object.userData.orbIndex;

      targetYawRef.current = ORBS[index].angle;
      selectedRef.current = index;

      setSelected(index);
      setActive(index);
      requestRender();
    };

    const onPointerUp = (event) => finishPointer(event);

    const onPointerCancel = (event) => {
      finishPointer(event, true);
    };

    const onLostPointerCapture = () => {
      drag.active = false;
      drag.pointerId = null;
      canvas.style.cursor = "grab";
    };

    const onKeyDown = (event) => {
      if (selectedRef.current !== null) return;
      if (document.activeElement !== canvas) return;

      if (
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
      ) {
        event.preventDefault();

        const sign = event.key === "ArrowLeft" ? -1 : 1;

        targetYawRef.current = THREE.MathUtils.clamp(
          targetYawRef.current + sign * 0.4,
          MIN_YAW,
          MAX_YAW
        );

        requestRender();
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        targetYawRef.current = ORBS[previousActive].angle;
        selectedRef.current = previousActive;

        setSelected(previousActive);
        setActive(previousActive);
        requestRender();
      }
    };

    const onWheel = (event) => {
      if (selectedRef.current !== null) return;
      if (event.ctrlKey) return;

      const rawDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (!rawDelta) return;

      const delta =
        rawDelta *
        (event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? height
            : 1);

      event.preventDefault();

      targetYawRef.current = THREE.MathUtils.clamp(
        targetYawRef.current + delta * 0.0016,
        MIN_YAW,
        MAX_YAW
      );

      requestRender();
    };

    const onVisibilityChange = () => {
      requestRender();
    };

    const onMotionChange = () => {
      reducedMotion = motionQuery.matches;
      requestRender();
    };

    function animate(timestamp) {
      animationFrame = 0;

      if (!canRender()) {
        stopAnimation();
        return;
      }

      if (
        lastRenderTime !== null &&
        timestamp - lastRenderTime < frameInterval - 0.5
      ) {
        requestRender();
        return;
      }

      const delta =
        lastTime === null
          ? 1 / 60
          : Math.min((timestamp - lastTime) / 1000, 0.05);

      lastTime = timestamp;
      lastRenderTime = timestamp;

      if (!reducedMotion) {
        elapsed += delta;
      }

      yaw = reducedMotion
        ? targetYawRef.current
        : THREE.MathUtils.damp(
            yaw,
            targetYawRef.current,
            7,
            delta
          );

      if (Math.abs(yaw - targetYawRef.current) < 0.0001) {
        yaw = targetYawRef.current;
      }

      direction.set(Math.sin(yaw), 0, -Math.cos(yaw));
      camera.lookAt(direction);
      camera.updateMatrixWorld();

      let nearest = 0;

      for (let index = 1; index < ORBS.length; index++) {
        if (
          Math.abs(ORBS[index].angle - yaw) <
          Math.abs(ORBS[nearest].angle - yaw)
        ) {
          nearest = index;
        }
      }

      if (nearest !== previousActive) {
        previousActive = nearest;
        setActive(nearest);
      }

      const motionTime = reducedMotion ? 0 : elapsed;

      for (let index = 0; index < groups.length; index++) {
        const entry = groups[index];

        entry.group.position.y =
          Math.sin(motionTime * 0.75 + index * 1.8) * 0.09;

        entry.sphere.material.uniforms.uTime.value = motionTime;
        entry.sphere.rotation.y = motionTime * 0.08;

        entry.sphere.scale.setScalar(
          nearest === index ? 1.045 : 1
        );

        entry.ring.rotation.z =
          index * 0.6 + motionTime * 0.1;

        entry.secondRing.rotation.y =
          0.5 + motionTime * 0.12;
      }

      scene.updateMatrixWorld(true);

      for (let index = 0; index < groups.length; index++) {
        const label = labelsRef.current[index];

        if (!label) continue;

        labelPosition
          .set(0, -1.18, 0)
          .applyMatrix4(groups[index].group.matrixWorld)
          .project(camera);

        const x = Math.round(
          (labelPosition.x * 0.5 + 0.5) * width
        );

        const y = Math.round(
          (-labelPosition.y * 0.5 + 0.5) * height
        );

        const visible =
          labelPosition.z >= -1 &&
          labelPosition.z <= 1 &&
          x > 15 &&
          x < width - 15 &&
          y > 0 &&
          y < height;

        const cache = labelCache[index];
        const visibility = visible ? "visible" : "hidden";
        const opacity = nearest === index ? "1" : "0.72";

        if (cache.visibility !== visibility) {
          label.style.visibility = visibility;
          cache.visibility = visibility;
        }

        if (!visible) continue;

        const transform =
          `translate3d(${x}px, ${y}px, 0) translateX(-50%)`;

        if (cache.transform !== transform) {
          label.style.transform = transform;
          cache.transform = transform;
        }

        if (cache.opacity !== opacity) {
          label.style.opacity = opacity;
          cache.opacity = opacity;
        }
      }

      renderer.render(scene, camera);

      if (
        !reducedMotion ||
        Math.abs(yaw - targetYawRef.current) > 0.0001
      ) {
        requestRender();
      } else {
        lastTime = null;
        lastRenderTime = null;
      }
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerCancel);

    canvas.addEventListener(
      "lostpointercapture",
      onLostPointerCapture
    );

    canvas.addEventListener("wheel", onWheel, {
      passive: false,
    });

    window.addEventListener("keydown", onKeyDown);

    document.addEventListener(
      "visibilitychange",
      onVisibilityChange
    );

    motionQuery.addEventListener("change", onMotionChange);

    resize();

    return () => {
      disposed = true;
      stopAnimation();

      if (requestRenderRef.current === requestRender) {
        requestRenderRef.current = null;
      }

      resizeObserver.disconnect();
      intersectionObserver?.disconnect();

      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerCancel);

      canvas.removeEventListener(
        "lostpointercapture",
        onLostPointerCapture
      );

      canvas.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );

      motionQuery.removeEventListener("change", onMotionChange);

      const geometries = new Set();
      const materials = new Set();

      scene.traverse((object) => {
        if (object.geometry) {
          geometries.add(object.geometry);
        }

        if (object.material) {
          const list = Array.isArray(object.material)
            ? object.material
            : [object.material];

          list.forEach((material) => {
            materials.add(material);
          });
        }
      });

      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());

      glowTexture.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  /*
   * Actualiza la accesibilidad del canvas sin reconstruir Three.js.
   */
  useEffect(() => {
    const canvas = containerRef.current?.querySelector("canvas");

    if (canvas) {
      canvas.setAttribute(
        "aria-label",
        UI_TEXT[language].sceneLabel
      );

      canvas.setAttribute("lang", language);
    }

    requestRenderRef.current?.();
  }, [language]);

  /*
   * Accesibilidad del panel:
   * foco inicial, Escape y navegación contenida con Tab.
   */
  useEffect(() => {
    if (selected === null) return;

    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();

        selectedRef.current = null;
        setSelected(null);
        requestRenderRef.current?.();
      }

      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const focusIsInside = panelRef.current?.contains(
          document.activeElement
        );

        if (!focusIsInside) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        } else if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);

      if (
        previousFocus instanceof HTMLElement &&
        previousFocus.isConnected
      ) {
        previousFocus.focus();
      }
    };
  }, [selected]);

  return (
    <main className="vo-root" lang={language}>
      <style>{STYLES}</style>

      <div
        className="vo-nebula vo-nebula-one"
        aria-hidden="true"
      />

      <div
        className="vo-nebula vo-nebula-two"
        aria-hidden="true"
      />

      <div className="vo-grid" aria-hidden="true" />

      <header
        className="vo-header"
        aria-hidden={currentOrb ? true : undefined}
      >
        <a
          className="vo-brand"
          href="https://galaktikweb.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={text.brandLabel}
          tabIndex={currentOrb ? -1 : undefined}
        >
          <span className="vo-brand-symbol" aria-hidden="true">
            ✧
          </span>

          <span>
            GALAKTIK
            <small>PERSONAL UNIVERSE</small>
          </span>
        </a>

        <div className="vo-header-actions">
          <LanguageSwitcher
            language={language}
            onChange={changeLanguage}
            label={text.languageSelector}
            disabled={Boolean(currentOrb)}
          />

          <a
            className="vo-contact"
            href={EMAIL_URL}
            tabIndex={currentOrb ? -1 : undefined}
          >
            {text.talk}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section
        className="vo-intro"
        aria-hidden={currentOrb ? true : undefined}
      >
        <div className="vo-status">
          <span />
          AI SOFTWARE ENGINEER · FRONT-END ENGINEER
        </div>

        <h1>
          Victor Alejandro
          <br />
          <span>Herra Solis</span>
        </h1>

        <p>
          {text.introFirst}
          <br />
          {text.introSecond}
        </p>
      </section>

      <div
        ref={containerRef}
        className="vo-scene"
        aria-hidden={currentOrb ? true : undefined}
      />

      {!error &&
        localizedOrbs.map((orb, index) => (
          <button
            key={orb.id}
            type="button"
            ref={(element) => {
              labelsRef.current[index] = element;
            }}
            className="vo-orb-label"
            style={{ "--orb-color": orb.color }}
            onClick={() => openOrb(index)}
            aria-label={text.viewInfo(orb.name)}
            aria-hidden={currentOrb ? true : undefined}
            tabIndex={currentOrb ? -1 : undefined}
          >
            <span className="vo-orb-icon" aria-hidden="true">
              {orb.icon}
            </span>

            <strong>{orb.name}</strong>
            <small>{text.explore}</small>
          </button>
        ))}

      {error && (
        <div
          className="vo-fallback"
          role="status"
          aria-hidden={currentOrb ? true : undefined}
        >
          <span aria-hidden="true">✧</span>
          <h2>{text.fallbackTitle}</h2>
          <p>{text.fallbackDescription}</p>
        </div>
      )}

      <footer
        className="vo-footer"
        aria-hidden={currentOrb ? true : undefined}
      >
        <div className="vo-instructions">
          <span aria-hidden="true">↔</span>
          {text.instructions}
        </div>

        <nav
          className="vo-navigation"
          aria-label={text.navigationLabel}
        >
          {localizedOrbs.map((orb, index) => (
            <button
              key={orb.id}
              type="button"
              onClick={() => openOrb(index)}
              className={active === index ? "is-active" : ""}
              style={{ "--orb-color": orb.color }}
              aria-label={text.openOrb(orb.name)}
              tabIndex={currentOrb ? -1 : undefined}
            >
              <span className="vo-nav-dot" aria-hidden="true" />
              {orb.name}
            </button>
          ))}
        </nav>

        <div className="vo-footer-meta">
          <span>ESCAZÚ, COSTA RICA</span>

          <div className="vo-footer-links">
            <a
              href={EMAIL_URL}
              tabIndex={currentOrb ? -1 : undefined}
            >
              {text.contactFooter}
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={text.githubLabel}
              tabIndex={currentOrb ? -1 : undefined}
            >
              GITHUB ↗
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={currentOrb ? -1 : undefined}
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </footer>

      {currentOrb && (
        <div
          className="vo-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeOrb();
            }
          }}
        >
          <section
            ref={panelRef}
            className="vo-panel"
            style={{ "--orb-color": currentOrb.color }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="vo-panel-title"
            aria-describedby="vo-panel-description"
          >
            <div className="vo-panel-topbar">
              <span className="vo-panel-category">
                <span aria-hidden="true">
                  {currentOrb.icon}
                </span>
                {currentOrb.name}
              </span>

              <div className="vo-panel-actions">
                <LanguageSwitcher
                  language={language}
                  onChange={changeLanguage}
                  label={text.languageSelector}
                />

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="vo-close"
                  onClick={closeOrb}
                  aria-label={text.close}
                >
                  <span aria-hidden="true">✕</span>
                </button>
              </div>
            </div>

            <div
              className="vo-panel-scroll"
              key={currentOrb.id}
            >
              <div className="vo-panel-hero">
                <span className="vo-eyebrow">
                  {currentOrb.eyebrow}
                </span>

                <h2 id="vo-panel-title">
                  {currentOrb.title}
                </h2>

                <p id="vo-panel-description">
                  {currentOrb.description}
                </p>

                <div
                  className="vo-stats"
                  style={{
                    gridTemplateColumns: `repeat(${currentOrb.stats.length}, minmax(0, 1fr))`,
                  }}
                >
                  {currentOrb.stats.map(
                    ([value, label], index) => (
                      <div key={index}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="vo-sections">
                {currentOrb.sections.map((section, index) => (
                  <article
                    className="vo-card"
                    key={`${currentOrb.id}-section-${index}`}
                  >
                    <div className="vo-card-heading">
                      <span className="vo-section-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3>{section.title}</h3>

                        {section.subtitle && (
                          <p>{section.subtitle}</p>
                        )}
                      </div>
                    </div>

                    {section.items && (
                      <ul>
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.tags && (
                      <div className="vo-tags">
                        {section.tags.map((tag, tagIndex) => (
                          <span key={tagIndex}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>

              <OrbContactFooter
                language={language}
                text={text}
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

const STYLES = `
  /* =========================================================
     Base
     ========================================================= */

  .vo-root {
    --text: #f1f4ff;
    --muted: #8b95ae;
    position: relative;
    isolation: isolate;
    width: 100%;
    height: 100svh;
    min-height: 620px;
    overflow: hidden;
    background:
      radial-gradient(
        ellipse at 50% 65%,
        #101528 0%,
        #070914 55%,
        #04060d 100%
      );
    color: var(--text);
    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;
  }

  .vo-root *,
  .vo-root *::before,
  .vo-root *::after {
    box-sizing: border-box;
  }

  .vo-root button,
  .vo-root a {
    -webkit-tap-highlight-color: transparent;
  }

  .vo-root button {
    font: inherit;
  }

  .vo-root a {
    color: inherit;
    text-decoration: none;
  }

  .vo-root button:focus-visible,
  .vo-root a:focus-visible,
  .vo-canvas:focus-visible {
    outline: 2px solid #d9e3ff;
    outline-offset: 5px;
  }

  /* =========================================================
     Fondo
     ========================================================= */

  .vo-nebula {
    position: absolute;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    opacity: .17;
    pointer-events: none;
    z-index: 0;
  }

  .vo-nebula-one {
    left: 38%;
    top: 28%;
    background:
      radial-gradient(
        circle,
        rgba(101, 64, 233, .65) 0%,
        rgba(101, 64, 233, .18) 38%,
        transparent 70%
      );
  }

  .vo-nebula-two {
    left: -20%;
    top: 30%;
    background:
      radial-gradient(
        circle,
        rgba(8, 123, 166, .6) 0%,
        rgba(8, 123, 166, .15) 38%,
        transparent 70%
      );
  }

  .vo-grid {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: .035;
    pointer-events: none;
    background-image:
      linear-gradient(#aab9ee 1px, transparent 1px),
      linear-gradient(90deg, #aab9ee 1px, transparent 1px);
    background-size: 90px 90px;
    mask-image: linear-gradient(transparent 35%, #000);
  }

  /* =========================================================
     Header
     ========================================================= */

  .vo-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 30px 5%;
    z-index: 3;
    pointer-events: none;
  }

  .vo-header a,
  .vo-header button {
    pointer-events: auto;
  }

  .vo-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    flex-shrink: 0;
    font-size: 13px;
    font-weight: 750;
    letter-spacing: 3px;
  }

  .vo-brand-symbol {
    color: #b394ff;
    font-size: 40px;
    font-weight: 400;
    line-height: 1;
  }

  .vo-brand small {
    display: block;
    margin-top: 5px;
    font-size: 8px;
    color: var(--muted);
    letter-spacing: 2px;
    white-space: nowrap;
  }

  .vo-header-actions,
  .vo-panel-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    flex-shrink: 0;
  }

  .vo-language-switch {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 4px;
    border: 1px solid #ffffff20;
    border-radius: 100px;
    background: #0c1024e6;
    pointer-events: auto;
    flex-shrink: 0;
  }

  .vo-language-switch button {
    display: grid;
    place-items: center;
    min-width: 34px;
    min-height: 32px;
    padding: 6px 9px;
    border: 1px solid transparent;
    border-radius: 100px;
    background: transparent;
    color: #8f99b2;
    font-size: 10px;
    font-weight: 650;
    letter-spacing: .6px;
    line-height: 1;
    cursor: pointer;
    transition:
      color .2s,
      background .2s,
      border-color .2s;
  }

  .vo-language-switch button:hover:not(:disabled) {
    color: #f1f4ff;
    background: #ffffff08;
  }

  .vo-language-switch button.is-active {
    color: #f1f4ff;
    border-color: #b394ff40;
    background: #b394ff20;
  }

  .vo-language-switch button:disabled {
    cursor: default;
  }

  .vo-language-switch button:focus-visible {
    outline-offset: 2px;
  }

  .vo-contact {
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid #ffffff20;
    border-radius: 100px;
    padding: 11px 19px;
    font-size: 12px;
    white-space: nowrap;
    background: #ffffff04;
    transition:
      background .2s,
      border-color .2s;
  }

  .vo-contact:hover {
    background: #ffffff0c;
    border-color: #ffffff50;
  }

  /* =========================================================
     Introducción
     ========================================================= */

  .vo-intro {
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    width: min(90%, 750px);
    text-align: center;
    z-index: 2;
    pointer-events: none;
  }

  .vo-status {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 9px;
    letter-spacing: 2px;
    color: #b6bfd4;
    line-height: 1.5;
  }

  .vo-status > span {
    width: 5px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #80edd8;
    box-shadow: 0 0 12px #80edd880;
  }

  .vo-intro h1 {
    margin: 20px 0 15px;
    font-size: clamp(32px, 4.2vw, 59px);
    letter-spacing: -2.5px;
    line-height: 1.08;
    font-weight: 550;
  }

  .vo-intro h1 > span {
    background:
      linear-gradient(
        100deg,
        #bed9ff,
        #c3acff 65%,
        #f0d8be
      );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .vo-intro p {
    margin: 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.8;
    text-wrap: balance;
  }

  /* =========================================================
     Escena y etiquetas
     ========================================================= */

  .vo-scene {
    position: absolute;
    inset: 0;
    z-index: 1;
    contain: strict;
  }

  .vo-canvas {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
    cursor: grab;
  }

  .vo-orb-label {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    transform: translate3d(0, 0, 0) translateX(-50%);
    will-change: transform;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    width: 168px;
    min-width: 0;
    padding: 8px 10px;
    border: none;
    background: transparent;
    color: var(--text);
    cursor: pointer;
    visibility: hidden;
    transition: opacity .2s;
  }

  .vo-orb-icon {
    color: var(--orb-color);
    font-size: 18px;
    text-shadow: 0 0 20px var(--orb-color);
  }

  .vo-orb-label strong {
    max-width: 100%;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .2px;
    text-align: center;
    line-height: 1.35;
    text-wrap: balance;
  }

  .vo-orb-label small {
    color: var(--muted);
    font-size: 8px;
    letter-spacing: 2px;
    margin-top: 2px;
  }

  .vo-orb-label:hover strong {
    color: var(--orb-color);
  }

  /* =========================================================
     Footer de navegación de la escena
     ========================================================= */

  .vo-footer {
    position: absolute;
    bottom: 24px;
    left: 5%;
    right: 5%;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    pointer-events: none;
  }

  .vo-instructions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-size: 10px;
    line-height: 1.5;
    text-align: center;
    color: var(--muted);
  }

  .vo-instructions > span {
    color: #b8c2dc;
    font-size: 19px;
    flex-shrink: 0;
  }

  .vo-navigation {
    display: flex;
    gap: 5px;
    max-width: 100%;
    padding: 6px;
    border: 1px solid #ffffff12;
    border-radius: 100px;
    background: #0c1024ed;
    pointer-events: auto;
  }

  .vo-navigation button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    min-width: 0;
    border: 1px solid transparent;
    border-radius: 100px;
    background: transparent;
    color: #8f99b2;
    padding: 10px 17px;
    font-size: 11px;
    line-height: 1.35;
    cursor: pointer;
    transition:
      color .2s,
      background .2s,
      border-color .2s;
  }

  .vo-navigation button:hover,
  .vo-navigation button.is-active {
    background: #ffffff08;
    border-color: #ffffff12;
    color: #f1f4ff;
  }

  .vo-nav-dot {
    width: 5px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--orb-color);
    opacity: .4;
  }

  .is-active .vo-nav-dot {
    opacity: 1;
    box-shadow: 0 0 10px var(--orb-color);
  }

  .vo-footer-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;
    color: #707c99;
    font-size: 8px;
    letter-spacing: 2px;
  }

  .vo-footer-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 12px 20px;
    pointer-events: auto;
  }

  .vo-footer-meta a {
    pointer-events: auto;
  }

  .vo-footer-meta a:hover {
    color: #d9e3ff;
  }

  /* =========================================================
     Fallback WebGL
     ========================================================= */

  .vo-fallback {
    position: absolute;
    z-index: 3;
    top: 44%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: min(85%, 430px);
  }

  .vo-fallback > span {
    font-size: 46px;
    color: #b394ff;
  }

  .vo-fallback h2 {
    font-size: 20px;
    font-weight: 500;
  }

  .vo-fallback p {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.7;
  }

  /* =========================================================
     Modal y panel
     ========================================================= */

  .vo-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(2, 4, 11, .92);
    animation: vo-fade-in .2s ease-out;
  }

   .vo-panel {
    display: flex;
    flex-direction: column;
    width: min(100%, 820px);
    max-height: 90%;
    min-height: 0;
    border: 1px solid #ffffff1a;
    border-radius: 24px;
    background:
      radial-gradient(
        ellipse at 90% 0%,
        #ffffff05,
        transparent 45%
      ),
      #0b1020;
    box-shadow: 0 35px 120px #0008;
    overflow: hidden;
    animation: vo-panel-in .25s ease-out;
  }

  .vo-panel-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 19px 27px;
    border-bottom: 1px solid #ffffff0c;
    flex-shrink: 0;
  }

  .vo-panel-category {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    font-size: 12px;
    line-height: 1.4;
    color: #d8def0;
    overflow-wrap: anywhere;
  }

  .vo-panel-category > span {
    color: var(--orb-color);
    font-size: 20px;
    flex-shrink: 0;
  }

  .vo-close {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: 1px solid #ffffff18;
    border-radius: 50%;
    background: #ffffff04;
    color: #c8d0e8;
    cursor: pointer;
    font-size: 12px !important;
  }

  .vo-close:hover {
    background: #ffffff12;
  }

  .vo-panel-scroll {
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    min-height: 0;
    padding: 34px;
    scrollbar-width: thin;
    scrollbar-color: #ffffff25 transparent;
  }

  .vo-eyebrow {
    color: var(--orb-color);
    font-size: 9px;
    letter-spacing: 2px;
    line-height: 1.7;
  }

  .vo-panel-hero h2 {
    max-width: 610px;
    margin: 15px 0;
    font-size: clamp(28px, 4vw, 43px);
    letter-spacing: -1.4px;
    line-height: 1.12;
    font-weight: 550;
    overflow-wrap: anywhere;
  }

  .vo-panel-hero > p {
    max-width: 620px;
    font-size: 13px;
    line-height: 1.8;
    color: #9aa6c1;
    margin-bottom: 26px;
  }

  .vo-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    padding: 20px 0 25px;
    border-top: 1px solid #ffffff0c;
    border-bottom: 1px solid #ffffff0c;
    margin-bottom: 25px;
  }

  .vo-stats > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  .vo-stats strong {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: -1px;
    color: var(--orb-color);
    overflow-wrap: anywhere;
  }

  .vo-stats span {
    color: #8491ad;
    font-size: 10px;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  .vo-sections {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .vo-card {
    padding: 23px;
    background: rgba(255, 255, 255, .018);
    border: 1px solid #ffffff0b;
    border-radius: 15px;
  }

  .vo-card-heading {
    display: flex;
    align-items: flex-start;
    gap: 13px;
  }

  .vo-card-heading > div {
    min-width: 0;
  }

  .vo-section-number {
    padding-top: 3px;
    color: var(--orb-color);
    font-size: 10px;
    font-family:
      ui-monospace,
      SFMono-Regular,
      Menlo,
      monospace;
    opacity: .8;
    flex-shrink: 0;
  }

  .vo-card h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 550;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }

  .vo-card-heading p {
    margin: 6px 0 0;
    color: #8090ad;
    font-size: 10px;
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  .vo-card ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    margin: 18px 0 0 26px;
    list-style: none;
  }

  .vo-card li {
    position: relative;
    padding-left: 14px;
    color: #a8b3cb;
    font-size: 12px;
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  .vo-card li::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--orb-color);
    opacity: .6;
  }

  .vo-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 17px;
  }

  .vo-tags > span {
    max-width: 100%;
    padding: 7px 10px;
    color: #bcc6dc;
    background: #ffffff03;
    border: 1px solid #ffffff0d;
    border-radius: 6px;
    font-size: 10px;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }

  /* =========================================================
     Footer de contacto de cada orbe
     ========================================================= */

  .vo-orb-contact {
    position: relative;
    isolation: isolate;
    margin-top: 32px;
    padding: clamp(20px, 4vw, 30px);
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 22px;
    background:
      radial-gradient(
        ellipse at 100% 0%,
        rgba(255, 255, 255, .045),
        transparent 65%
      ),
      linear-gradient(
        145deg,
        rgba(255, 255, 255, .025),
        rgba(255, 255, 255, .008)
      );
  }

  .vo-orb-contact::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 26px;
    right: 26px;
    height: 1px;
    background:
      linear-gradient(
        90deg,
        transparent,
        var(--orb-color),
        transparent
      );
    opacity: .7;
    pointer-events: none;
  }

  .vo-orb-contact-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 25px;
  }

  .vo-orb-contact-intro {
    min-width: 0;
  }

  .vo-orb-contact-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--orb-color);
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 2px;
    line-height: 1.5;
  }

  .vo-orb-contact-eyebrow > span {
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--orb-color);
  }

  .vo-orb-contact-intro h3 {
    max-width: 420px;
    margin: 12px 0 9px;
    color: #f1f4ff;
    font-size: clamp(22px, 3.5vw, 29px);
    font-weight: 550;
    letter-spacing: -.8px;
    line-height: 1.2;
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  .vo-orb-contact-intro p {
    margin: 0;
    color: #a5b1ca;
    font-size: 12px;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  .vo-root .vo-orb-contact-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    min-height: 46px;
    flex-shrink: 0;
    padding: 12px 20px;
    border: 1px solid var(--orb-color);
    border-radius: 13px;
    background: var(--orb-color);
    color: #080d19;
    font-size: 12px;
    font-weight: 750;
    line-height: 1.4;
    transition:
      transform .2s ease,
      box-shadow .2s ease;
  }

  .vo-orb-contact-cta > span {
    font-size: 19px;
    line-height: 1;
  }

  .vo-orb-contact-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, .25);
  }

  .vo-orb-contact-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .vo-root .vo-orb-contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    min-height: 78px;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 14px;
    background: rgba(5, 9, 20, .35);
    color: #edf2ff;
    transition:
      background .2s ease,
      border-color .2s ease,
      transform .2s ease;
  }

  .vo-orb-contact-link--email {
    grid-column: 1 / -1;
  }

  .vo-orb-contact-icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, .06);
    border-radius: 11px;
    background: rgba(255, 255, 255, .035);
    color: var(--orb-color);
  }

  .vo-orb-contact-link--whatsapp .vo-orb-contact-icon {
    background: rgba(37, 211, 102, .09);
    border-color: rgba(37, 211, 102, .14);
    color: #8ef0b0;
  }

  .vo-orb-contact-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
  }

  .vo-orb-contact-label {
    color: #a5b1ca;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.4;
  }

  .vo-orb-contact-value {
    color: #edf2ff;
    font-size: 12px;
    font-weight: 550;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  .vo-orb-contact-link--email .vo-orb-contact-value {
    font-size: clamp(13px, 2.3vw, 16px);
    letter-spacing: -.2px;
  }

  .vo-orb-contact-arrow {
    flex-shrink: 0;
    color: #8d9bb6;
    font-size: 18px;
    line-height: 1;
    transition:
      color .2s ease,
      transform .2s ease;
  }

  .vo-orb-contact-link:hover {
    transform: translateY(-2px);
    border-color: var(--orb-color);
    background: rgba(255, 255, 255, .045);
  }

  .vo-orb-contact-link:hover .vo-orb-contact-arrow {
    color: var(--orb-color);
    transform: translate(2px, -2px);
  }

  .vo-root .vo-orb-contact a:focus-visible {
    outline: 2px solid var(--orb-color);
    outline-offset: 3px;
  }

  .vo-orb-contact-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, .07);
  }

  .vo-orb-contact-location {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    color: #a5b1ca;
    font-size: 10px;
    line-height: 1.6;
  }

  .vo-orb-contact-location svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--orb-color);
  }

  .vo-orb-contact-location > span {
    overflow-wrap: anywhere;
  }

  .vo-orb-contact-signature {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #8d9bb6;
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 2px;
  }

  .vo-orb-contact-signature > span {
    color: var(--orb-color);
    font-size: 20px;
    line-height: 1;
  }

  /* =========================================================
     Animaciones
     ========================================================= */

  @keyframes vo-fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes vo-panel-in {
    from {
      opacity: 0;
      transform: translateY(12px) scale(.985);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* =========================================================
     Responsive
     ========================================================= */

  @media (min-height: 850px) {
    .vo-intro {
      top: 105px;
    }

    .vo-footer {
      bottom: 32px;
    }
  }

  @media (max-width: 600px) {
    .vo-root {
      min-height: 620px;
    }

    .vo-header {
      padding: 20px 5%;
      gap: 10px;
    }

    .vo-brand {
      gap: 8px;
      font-size: 11px;
      letter-spacing: 2px;
    }

    .vo-brand-symbol {
      font-size: 32px;
    }

    .vo-brand small {
      font-size: 7px;
      letter-spacing: 1px;
    }

    .vo-header-actions {
      gap: 7px;
    }

    .vo-language-switch {
      gap: 2px;
      padding: 3px;
    }

    .vo-language-switch button {
      min-width: 30px;
      min-height: 32px;
      padding: 6px 7px;
      font-size: 9px;
    }

    .vo-contact {
      padding: 10px 11px;
      gap: 7px;
      font-size: 10px;
    }

    .vo-intro {
      top: 85px;
    }

    .vo-status {
      font-size: 7px;
      letter-spacing: 1px;
    }

    .vo-intro h1 {
      letter-spacing: -1.5px;
    }

    .vo-intro p {
      font-size: 11px;
    }

    .vo-orb-label {
      width: 140px;
    }

    .vo-orb-label strong {
      font-size: 12px;
    }

    .vo-footer {
      bottom: 22px;
      gap: 12px;
    }

    .vo-instructions {
      font-size: 9px;
    }

    .vo-navigation {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: min(100%, 390px);
      gap: 4px;
      padding: 6px;
      border-radius: 20px;
    }

    .vo-navigation button {
      min-width: 0;
      min-height: 38px;
      padding: 9px 8px;
      font-size: 10px;
      line-height: 1.35;
      border-radius: 14px;
    }

    .vo-footer-meta {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      text-align: center;
      font-size: 7px;
      letter-spacing: 1px;
    }

    .vo-footer-links {
      justify-content: center;
      gap: 16px;
    }

    .vo-modal-backdrop {
      padding: 12px;
    }

    .vo-panel {
      max-height: 96%;
      border-radius: 18px;
    }

    .vo-panel-topbar {
      padding: 14px 16px;
      gap: 8px;
    }

    .vo-panel-category {
      gap: 7px;
      font-size: 11px;
    }

    .vo-panel-actions {
      gap: 7px;
    }

    .vo-panel-scroll {
      padding: 24px 19px;
    }

    .vo-card {
      padding: 18px 15px;
    }

    .vo-card ul {
      margin-left: 5px;
    }

    .vo-card li {
      font-size: 11px;
    }

    .vo-stats strong {
      font-size: clamp(17px, 5.2vw, 23px);
    }

    .vo-stats span {
      font-size: 9px;
    }

    .vo-orb-contact {
      margin-top: 25px;
      padding: 20px 16px;
      border-radius: 18px;
    }

    .vo-orb-contact-heading {
      align-items: stretch;
      flex-direction: column;
      gap: 18px;
      margin-bottom: 18px;
    }

    .vo-orb-contact-intro h3 {
      max-width: none;
      font-size: 24px;
    }

    .vo-root .vo-orb-contact-cta {
      width: 100%;
      justify-content: space-between;
      min-height: 48px;
      padding: 13px 16px;
    }

    .vo-orb-contact-grid {
      grid-template-columns: minmax(0, 1fr);
      gap: 9px;
    }

    .vo-root .vo-orb-contact-link {
      min-height: 74px;
      padding: 13px;
    }

    .vo-orb-contact-bottom {
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }
  }

  @media (max-width: 380px) {
    .vo-header {
      padding: 17px 4%;
      gap: 6px;
    }

    .vo-brand {
      gap: 5px;
      font-size: 10px;
      letter-spacing: 1px;
    }

    .vo-brand-symbol {
      font-size: 27px;
    }

    .vo-brand small {
      font-size: 6px;
      letter-spacing: .7px;
    }

    .vo-header-actions {
      gap: 5px;
    }

    .vo-contact {
      padding: 9px 8px;
      gap: 4px;
      font-size: 9px;
    }

    .vo-language-switch button {
      min-width: 27px;
      padding: 6px;
    }

    .vo-panel-topbar {
      padding: 12px;
    }

    .vo-panel-category {
      font-size: 10px;
    }

    .vo-panel-category > span {
      font-size: 17px;
    }

    .vo-panel-actions {
      gap: 5px;
    }

    .vo-panel-scroll {
      padding: 20px 14px;
    }

    .vo-orb-contact {
      padding: 18px 13px;
    }

    .vo-orb-contact-intro h3 {
      font-size: 22px;
    }

    .vo-root .vo-orb-contact-link {
      gap: 10px;
      padding: 12px;
    }

    .vo-orb-contact-icon {
      width: 35px;
      height: 35px;
    }

    .vo-orb-contact-value {
      font-size: 11px;
    }
  }

  @media (max-height: 700px) and (min-width: 601px) {
    .vo-header {
      padding-top: 20px;
    }

    .vo-intro {
      top: 75px;
    }

    .vo-intro h1 {
      font-size: 36px;
      margin: 12px 0;
    }

    .vo-intro p {
      font-size: 11px;
    }

    .vo-footer {
      bottom: 17px;
      gap: 12px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vo-root *,
    .vo-root *::before,
    .vo-root *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;