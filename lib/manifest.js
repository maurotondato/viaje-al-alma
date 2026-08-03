(function () {
  "use strict";

  var WA_NUMBER = "5491150573508";
  function wa(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  window.__BRAND__ = {
    name: "Viaje al Alma",
    domain: "https://www.viajealalma.com.ar",
    instagram: "https://instagram.com/viajealalma.travel",
    instagramHandle: "@viajealalma.travel",
    email: "viajealalmatours@gmail.com",
    whatsapp: "+54 9 11 5057-3508",
    waLinks: {
      general: wa("Hola! Vi la web de Viaje al Alma y quiero conocer más sobre India 2027 ✨"),
      itinerario: wa("Hola! Me gustaría recibir el itinerario completo de India 2027."),
      maldivas: wa("Hola! Quiero consultar por la extensión a Maldivas."),
      reservar: wa("Hola! Quiero reservar mi lugar para India 2027.")
    },

    trip: {
      name: "India 2027",
      dates: "15 al 27 de febrero de 2027",
      duration: "13 días / 12 noches",
      groupMax: 12,
      extension: {
        name: "Maldivas",
        dates: "27 de febrero al 4 de marzo de 2027",
        duration: "5 noches",
        place: "Dhigurah"
      }
    },

    founders: [
      {
        name: "Agustina",
        role: "Profesora de yoga y psicóloga",
        photo: "assets/img/real-agustina-mauro-taj.webp"
      },
      {
        name: "Mauro",
        role: "Co-fundador de Viaje al Alma",
        photo: "assets/img/real-agustina-mauro-taj.webp"
      }
    ],

    originStory: "En nuestro primer viaje a India sentimos algo profundo, un llamado imposible de ignorar. Cada encuentro, cada mirada y cada aprendizaje nos transformó. India nos abrió el corazón. Así nació la idea de compartir este camino. No un simple viaje, sino una experiencia que toca el alma.",

    highlights: [
      "Grupo reducido de hasta 12 personas, acompañado durante todo el recorrido.",
      "Guías locales de habla hispana en cada etapa.",
      "Clases de yoga y experiencias de meditación, sin necesidad de experiencia previa.",
      "Ceremonias tradicionales y experiencias culturales auténticas.",
      "Transporte privado durante todo el recorrido.",
      "Equilibrio entre cultura, historia, espiritualidad y tiempo libre.",
      "Un mes antes del viaje, encuentros virtuales grupales para prepararnos juntos."
    ],

    itinerary: [
      {
        chapter: "Delhi",
        chapterNote: "La puerta de entrada",
        days: "Día 1 – 2 · 15 y 16 de febrero",
        photo: "assets/img/delhi-lotus-temple.webp",
        text: "Llegada a Nueva Delhi y traslado a Green Park. El primer día queda libre para descansar y adaptarse al ritmo de India, con ayuda para cambiar dinero y conseguir SIM o eSIM. Al día siguiente, con guía local de habla hispana, recorremos el Qutub Minar, el Lotus Temple, India Gate, el Gurdwara Bangla Sahib y el mercado de Dilli Haat: siglos de historia, espiritualidad y modernidad conviviendo en una misma calle."
      },
      {
        chapter: "Mathura y Agra",
        chapterNote: "La tierra de Krishna, el amanecer del Taj Mahal",
        days: "Día 3 – 4 · 17 y 18 de febrero",
        photo: "assets/img/mathura-temple.webp",
        text: "Clase de yoga antes del desayuno y viaje hacia Agra, con una parada en Mathura para visitar el Templo Shri Krishna Janmasthan, uno de los sitios más sagrados del hinduismo. Al día siguiente, muy temprano, el Taj Mahal al amanecer — cuando la primera luz revela cada detalle de la que es, quizás, la construcción más bella del mundo. Después, el Fuerte de Agra y viaje a Jaipur, la Ciudad Rosa."
      },
      {
        chapter: "Jaipur y Akshardham",
        chapterNote: "Los colores del Rajastán",
        days: "Día 5 – 6 · 19 y 20 de febrero",
        photo: "assets/img/jaipur-amber-fort.webp",
        text: "Día completo en Jaipur con guía local: el Amber Fort, el Hawa Mahal — el Palacio de los Vientos — y el Bapu Bazaar, entre palacios, fortalezas y mercados tradicionales. Al regresar a Delhi, visitamos Akshardham, uno de los complejos espirituales más impresionantes de India por su arquitectura monumental."
      },
      {
        chapter: "Rishikesh",
        chapterNote: "La capital mundial del yoga",
        days: "Día 7 – 12 · 21 al 26 de febrero",
        photo: "assets/img/real-rishikesh-ganges-rocas.webp",
        text: "Seis noches a orillas del río Ganges, rodeados por las primeras montañas del Himalaya. Meditación al amanecer frente al Ganges, con la posibilidad de un baño ritual; tardes libres en Tapovan; un kirtan al caer la noche, donde los cantos devocionales crean una atmósfera difícil de describir con palabras. Visitamos templos y espacios espirituales, cruzamos los puentes colgantes de Lakshman Jhula, conocemos el Parmarth Niketan Ashram y participamos de la Ganga Aarti, uno de los rituales más emocionantes de India. Todos los días, una práctica de yoga guiada — algunas dictadas por Agustina, otras por un profesor local. Cerramos con una cena de despedida antes de volver a Delhi."
      },
      {
        chapter: "Cierre o extensión",
        chapterNote: "Regreso o inicio de Maldivas",
        days: "Día 13 · 27 de febrero",
        photo: "assets/img/real-abrazo-despedida.webp",
        text: "Traslado al aeropuerto para el vuelo internacional de regreso, o para comenzar la extensión opcional a Maldivas."
      }
    ],

    maldivas: {
      intro: "Después de la intensidad cultural y espiritual de India, cinco noches para integrar lo vivido frente al océano Índico. Nos alojamos en Dhigurah, una isla local de playas de arena blanca y aguas cristalinas.",
      note: "Es una continuación del viaje a India, no una escapada aislada: se llega volando desde Delhi hasta Malé el mismo día 13, y se comparte con el grupo que ya recorrió India.",
      days: [
        { title: "Llegada a Maldivas", date: "27 de febrero", text: "Vuelo desde Delhi hacia Malé y traslado en lancha rápida hasta Dhigurah, a pocos pasos del mar." },
        { title: "Días libres en la isla", date: "28 de febrero al 3 de marzo", text: "Tiempo para explorar Dhigurah, alquilar una bicicleta, caminar sus playas y aguas turquesas. Se recomienda la excursión — opcional y a cargo de cada viajero — para nadar junto a tiburones ballena y mantarrayas." },
        { title: "Regreso a casa", date: "4 de marzo", text: "Traslado al aeropuerto internacional para emprender el regreso." }
      ]
    },

    includes: [
      "Tour privado con guía en español",
      "Alojamientos con desayuno incluido",
      "Clases de yoga y meditación",
      "Acompañamiento integral antes y durante el viaje"
    ],
    includesMaldivas: [
      "Alojamiento a pasos de una playa paradisíaca",
      "Traslados en lancha rápida entre Malé y Dhigurah, ida y vuelta",
      "Alojamiento con desayuno incluido"
    ],
    excludes: [
      "Pasajes aéreos internacionales (te ayudamos con la gestión)",
      "Comidas no mencionadas en el itinerario",
      "Seguro médico y de viaje (obligatorio)",
      "Gastos personales",
      "Visado — es gratuito para argentinos, te ayudamos con la gestión"
    ],
    excludesMaldivas: [
      "Pasajes aéreos internacionales",
      "Comidas no mencionadas",
      "Seguro médico y de viaje (obligatorio)",
      "Gastos personales",
      "Excursiones de snorkel o buceo — se gestionan directamente en el hotel"
    ],

    faqs: [
      {
        q: "¿Necesito experiencia previa en yoga o meditación?",
        a: "No. No se necesita experiencia previa y tampoco es obligatorio participar de las clases si en algún momento preferís no hacerlo."
      },
      {
        q: "¿Hay límite de edad?",
        a: "Las clases de yoga están pensadas para cualquier edad. El grupo del primer viaje, en febrero de 2026, incluyó viajeras y viajeros de distintas generaciones."
      },
      {
        q: "¿Puedo viajar sola o solo?",
        a: "Sí. Si viajás sin acompañante, te asignamos un compañero o compañera de habitación. También podés optar por habitación individual con un costo adicional — consultanos el valor por WhatsApp."
      },
      {
        q: "¿Cuántas personas viajan en el grupo?",
        a: "Es un grupo reducido, de hasta 12 personas, acompañado durante todo el recorrido."
      },
      {
        q: "¿Qué incluye el viaje?",
        a: "Tour privado con guía en español, alojamiento con desayuno, clases de yoga y meditación, transporte privado durante el recorrido y acompañamiento integral antes y durante el viaje."
      },
      {
        q: "¿Qué no incluye?",
        a: "Los pasajes aéreos internacionales, las comidas no mencionadas en el itinerario, el seguro médico y de viaje (obligatorio) y los gastos personales."
      },
      {
        q: "¿Los vuelos están incluidos?",
        a: "No. Cada persona gestiona su propio vuelo internacional; nosotros te asesoramos si lo necesitás."
      },
      {
        q: "¿Necesito visa para entrar a India?",
        a: "Sí, pero es gratuita para pasaportes argentinos. Te acompañamos en toda la gestión."
      },
      {
        q: "¿Cómo se organiza la extensión a Maldivas?",
        a: "Es opcional y continúa el mismo viaje: se vuela desde Delhi hasta Malé el día 13 y se comparten las 5 noches en Dhigurah con el grupo que hizo India. No está pensada como una escapada aislada de solo playa."
      },
      {
        q: "¿Cómo me preparo antes del viaje?",
        a: "Un mes antes empezamos con encuentros virtuales grupales, para prepararnos juntos a nivel físico, emocional y energético."
      },
      {
        q: "¿Cómo reservo mi lugar?",
        a: "Escribinos por WhatsApp y coordinamos los próximos pasos con vos."
      }
    ],

    nav: [
      { label: "El viaje", href: "#el-viaje" },
      { label: "Quiénes te acompañan", href: "#acompanan" },
      { label: "Itinerario", href: "#itinerario" },
      { label: "Maldivas", href: "#maldivas" },
      { label: "Preguntas", href: "#faq" }
    ]
  };
})();
