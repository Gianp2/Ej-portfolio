import { Project, DesignerProfile } from '../types';
import aetherRender from '../assets/images/aether_render.jpg';
import aetherSketch from '../assets/images/aether_sketch.jpg';
import koveRender from '../assets/images/kove_render.jpg';
import koveSketch from '../assets/images/kove_sketch.jpg';
import orbitRender from '../assets/images/orbit_render.jpg';
import orbitSketch from '../assets/images/orbit_sketch.jpg';

export const designerProfile: DesignerProfile = {
  name: "Gianluca Pasquinelli",
  title: "Diseñador Industrial & de Producto",
  bio: "Especializado en fusionar la estética minimalista, la ergonomía avanzada y la viabilidad técnica para crear productos de consumo icónicos y sostenibles.",
  aboutText: "Soy Gianluca Pasquinelli, un diseñador industrial con más de 6 años de experiencia creando hardware de consumo, muebles de oficina y electrodomésticos inteligentes. Creo que el gran diseño industrial reside en la armonía perfecta entre el trazo inicial a mano y la precisión del render fotorrealista. Mi proceso valora el pensamiento iterativo, el estudio de la ergonomía física y la selección consciente de materiales (CMF) para asegurar que cada objeto sea funcional, hermoso y sustentable.",
  skills: [
    "Dibujo Conceptual e Ideación",
    "Modelado 3D (SolidWorks, Rhino)",
    "Renderizado Fotorrealista (KeyShot, Blender)",
    "Estrategia de CMF (Color, Material, Finish)",
    "Prototipado Rápido e Impresión 3D",
    "Estudios de Usabilidad y Ergonomía",
    "Diseño para Manufactura (DFM)"
  ],
  tools: [
    "SolidWorks",
    "Rhinoceros",
    "KeyShot",
    "Adobe Creative Cloud",
    "Figma",
    "Blender",
    "Wacom Cintiq / Procreate"
  ],
  experience: [
    {
      role: "Diseñador de Producto Senior",
      company: "Luminal Design Studio, Santiago",
      period: "2023 - Presente",
      description: "Liderando la ideación y desarrollo CMF de dispositivos de audio y smart home para clientes globales, asegurando transiciones sin fricciones desde el bocetado conceptual hasta la producción en masa."
    },
    {
      role: "Diseñador Industrial",
      company: "Aura Innovations, Barcelona",
      period: "2021 - 2023",
      description: "Colaboración directa en el diseño de electrodomésticos compactos. Responsable de la creación de prototipos funcionales y botes de diseño estéticos mediante bocetos analógicos e iteraciones rápidas en CAD."
    },
    {
      role: "Diseñador de Producto Junior",
      company: "Prisma Studio, Buenos Aires",
      period: "2020 - 2021",
      description: "Soporte en modelado conceptual 3D, preparación de renders fotorrealistas para presentaciones con clientes y análisis ergonómico para mobiliario urbano."
    }
  ]
};

export const projects: Project[] = [
  {
    id: "aether-headset",
    title: "Aether Premium Headset",
    category: "Hardware de Consumo",
    year: "2026",
    client: "Aether Audio",
    brief: "Diseñar unos audífonos circumaurales inalámbricos que ofrezcan una comodidad acústica excepcional, un aislamiento acústico óptimo y una firma de diseño elegante y minimalista basada en materiales circulares.",
    problem: "Muchos audífonos de diadema del mercado actual sobrecargan la cabeza debido a una mala distribución del peso, o bien utilizan plásticos de un solo uso de baja calidad que envejecen mal estéticamente y dañan el planeta.",
    solution: "Aether introduce una diadema flotante de tensión progresiva y copas pivotantes de aluminio anodizado. Cada componente está diseñado para ser desmontable y reparable, utilizando almohadillas de cuero orgánico regenerativo de tacto ultra suave.",
    sketchUrl: aetherSketch,
    renderUrl: aetherRender,
    sketchCaption: "Boceto inicial destacando el sistema de pivote ergonómico de 360 grados, la suspensión de diadema de tensión elástica, y el flujo de los cables internos integrados.",
    renderCaption: "Render final en KeyShot mostrando el acabado cepillado satinado, la costura de precisión de la piel y el ensamble impecable de los componentes acústicos.",
    cmf: [
      {
        colorName: "Espacio Gris Mate",
        colorValue: "#3e4246",
        material: "Aluminio Anodizado 6061-T6",
        finish: "Granallado ultra fino (sandblasted) y anodizado satinado"
      },
      {
        colorName: "Carbón Orgánico",
        colorValue: "#1c1d1f",
        material: "Cuero de Bio-Polímero Regenerativo",
        finish: "Piel texturizada de grano micro, costuras de costadillo hechas a mano"
      },
      {
        colorName: "Acento Cobre Líquido",
        colorValue: "#b87333",
        material: "Cobre Reciclado de Alta Conductividad",
        finish: "Pulido espejo en anillos exteriores y contactos de carga"
      }
    ],
    dimensions: {
      width: "185 mm",
      height: "210 mm",
      depth: "82 mm",
      weight: "275 g"
    },
    features: [
      "Diadema de tensión flotante para una distribución de presión equilibrada de 0.3 N.",
      "Aislamiento acústico pasivo avanzado mediante estructura de copa de resonancia variable.",
      "Ensamblaje modular sin adhesivos mecánicos, facilitando el reciclaje y reparación independiente.",
      "Controles hápticos táctiles invisibles grabados mediante láser en la copa derecha."
    ],
    tags: ["Audio", "Sustentable", "Hardware", "Ergonomía"],
    featured: true
  },
  {
    id: "kove-brewer",
    title: "Kove Coffee Brewer",
    category: "Electrodomésticos",
    year: "2025",
    client: "Kove Labs",
    brief: "Reimaginar la cafetera de goteo manual para el hogar contemporáneo, convirtiendo el acto cotidiano de preparar café de especialidad en una experiencia escultórica, táctil y de altísima precisión.",
    problem: "Los métodos de vertido tradicionales (V60, Chemex) suelen ser inestables sobre la mesa, se enfrían rápidamente y carecen de un marco integrado que mantenga el ángulo y la altura de goteo óptimos.",
    solution: "Kove es una estación monolítica de goteo con base estabilizadora de terrazo de concreto, columnas de soporte de cerámica de doble pared para un aislamiento térmico sin rival, y un soporte flotante de bronce cepillado ajustable en altura.",
    sketchUrl: koveSketch,
    renderUrl: koveRender,
    sketchCaption: "Líneas de construcción isométrica que analizan el centro de gravedad, el flujo gravitacional del líquido, y las proporciones áureas aplicadas a las columnas de cerámica.",
    renderCaption: "Render fotorrealista mostrando la espectacular textura granular del terrazo, la cerámica mate pulida a mano y el funnel de goteo de bronce cálido cepillado.",
    cmf: [
      {
        colorName: "Blanco Arenisca",
        colorValue: "#ecebe6",
        material: "Cerámica de Alta Temperatura Dual-Wall",
        finish: "Esmaltado mate texturizado por el exterior, vitrificado liso interior"
      },
      {
        colorName: "Latón Cepillado",
        colorValue: "#c5a059",
        material: "Bronce de Fundición Marítimo",
        finish: "Cepillado unidireccional y recubrimiento anti-huellas mate"
      },
      {
        colorName: "Terrazo Granítico",
        colorValue: "#a39e93",
        material: "Concreto de Cemento Portland y Cuarzo",
        finish: "Pulido al diamante y sellado cerámico de grado alimentario"
      }
    ],
    dimensions: {
      width: "160 mm",
      height: "310 mm",
      depth: "180 mm",
      weight: "1.450 g"
    },
    features: [
      "Canales en espiral internos con ángulo de vertido patentado de 60° para un flujo de extracción ideal.",
      "Anillo de bloqueo de altura ajustable mediante embrague de fricción micrométrico.",
      "Base de terrazo pesado de alta densidad para evitar volcamientos accidentales.",
      "Superficie de soporte con silicona térmica empotrada magnéticamente para recolectar gotas de exceso."
    ],
    tags: ["Cocina", "Lifestyle", "Estructural", "Materiales"],
    featured: true
  },
  {
    id: "orbit-projector",
    title: "Orbit Smart Projector",
    category: "Electrónica de Consumo",
    year: "2026",
    client: "Orbit Tech",
    brief: "Crear un proyector inteligente portátil para interiores que se aleje de la típica caja de plástico gris, integrándose en la decoración del hogar moderno como un objeto decorativo y acústico de alta calidad.",
    problem: "Los proyectores portátiles son difíciles de posicionar (requieren apilar libros, inclinar tripiés), tienen mala calidad de sonido integrada y lucen descontextualizados en una sala de estar moderna.",
    solution: "Un proyector esférico suspendido en un brazo gimbal de rotación omnidireccional. La esfera está envuelta en un tejido acústico de Kvadrat, que actúa como rejilla de un altavoz envolvente de 360°, y cuenta con una lente de vidrio templado de nivel óptico.",
    sketchUrl: orbitSketch,
    renderUrl: orbitRender,
    sketchCaption: "Boceto a mano alzada e ideación con marcador Copic que estudia las articulaciones del gimbal metálico, la ventilación pasiva trasera y la rotación angular del eje central.",
    renderCaption: "Render fotorrealista de estilo de vida mostrando el proyector en un estante de madera de roble, destacando el contraste de textura entre el textil suave y el brazo de cobre satinado.",
    cmf: [
      {
        colorName: "Gris Carbón Textil",
        colorValue: "#2a2d34",
        material: "Tejido de Lana Kvadrat Eco-Fibers",
        finish: "Tramado acústico de poro abierto con tratamiento retardante de llama"
      },
      {
        colorName: "Cobre Rosado Satinado",
        colorValue: "#b76e79",
        material: "Aleación de Aluminio y Cobre Reciclado",
        finish: "Micro-mecanizado por CNC, anodizado perlado y cepillado circular"
      },
      {
        colorName: "Vidrio Negro Óptico",
        colorValue: "#0c0d0e",
        material: "Cristal Gorila Glass de Silicato de Alúmina",
        finish: "Pulido esférico de ultra alta precisión con revestimiento anti-reflectante"
      }
    ],
    dimensions: {
      width: "140 mm",
      height: "185 mm",
      depth: "140 mm",
      weight: "980 g"
    },
    features: [
      "Brazo gimbal inteligente que rota 360° horizontales y 180° verticales con autofoco láser integrado.",
      "Altavoces Harman Kardon emparejados simétricamente dentro de la cámara acústica suspendida.",
      "Sistema de ventilación hiper-silencioso de flujo laminar (menos de 18 dB en funcionamiento).",
      "Conectividad inalámbrica total con batería de 4 horas de duración integrada."
    ],
    tags: ["Electrónica", "Entretenimiento", "Mecánico", "Tejido"],
    featured: true
  }
];
