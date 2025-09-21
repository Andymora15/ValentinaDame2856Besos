const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");
const randomContainer = document.getElementById("random-image");

let currentIndex = -1;

// Array con las frases, tiempos y imágenes
const lyricsData = [
  { text: "Tú dormida encima de mí", time: 10.73, img: "v1.jpg" },
  { text: "La brisa viene del mar", time: 13.69 },
  { text: "No te dejo de mirar", time: 16.64, img: "v2.jpg" },
  { text: "Eres mi niña de cristal", time: 19.43 },

  { text: "Juro que yo mato por ti", time: 22.25, img: "v4.jpg" },
  { text: "Aunque sé que sabes cuidarte sola", time: 25.06 },
  { text: "Quisiera detener la hora", time: 28.00, img: "v5.jpg" },
  { text: "Pero el tiempo se va como las olas", time: 30.76 },

  { text: "Toda mi tristeza te llevaste", time: 34.61, img: "v.png" },
  { text: "Con un beso tuyo, me calmaste", time: 37.37 },
  { text: "Yo te navegué y me dejaste", time: 40.13, img: "v10.png" },
  { text: "(Ah-ah, ah-ah)", time: 44.39 },

  { text: "¿Cómo llegamos aquí?", time: 46.11, img: "v11.png" },
  { text: "Solo el deseo lo sabe", time: 48.80 },
  { text: "Y todo el tiempo que te tengo cerca", time: 51.95 },
  { text: "No quiero que se acabe", time: 55.27, img: "v12.png" },

  { text: "Y si esto fuera un error", time: 57.74, },
  { text: "Volvería equivocarme", time: 60.29, img: "v28.jpg" },
  { text: "De tu cora no quiero mudarme", time: 63.13 },
  { text: "Yo te cuido y tú me cuida', nena", time: 66.41, img: "v14.png" },

  { text: "Aunque se vaya el Sol, contigo el día nunca acaba", time: 69.36 },
  { text: "Dale, acaba y llega pa' comerte la cara", time: 71.87, img: "v16.png" },
  { text: "El joseo to' los días hasta la madrugada", time: 74.79 },
  { text: "Pa' llevarte a Tokyo y que nunca falte nada", time: 77.39, img: "v15.png" },

  { text: "Tú mi 24 de diciembre", time: 80.34 },
  { text: "Estas gana' no se acaban, son por siempre", time: 83.08, img: "v17.png" },
  { text: "Fuck el pasado, solo importa tu presente", time: 85.54 },
  { text: "Aún siento mariposas cuando te tengo de frente", time: 88.15, img: "v18.png" },

  { text: "Yeah, mami, tú brillas sin luz", time: 91.65 },
  { text: "'Toy loco que se acabe el tour", time: 94.83, img: "v19.png" },
  { text: "Pa' llegar a hacerte un par de mini tú", time: 97.04 },
  { text: "Te tengo como cien cancione' en el stu'", time: 99.69 },

  { text: "Y lo sabes tú, que pa' ti no hay excusa", time: 102.69, img: "v21.png" },
  { text: "Mi boca está llena del MAC que tú usa'", time: 105.56 },
  { text: "Cuando te viste' pa' salir, tú siempre abusa'", time: 108.49 },
  { text: "Tu trajecito Prada va con mi Medusa", time: 111.14, img: "v20.png" },

  { text: "Tú dormida encima de mí", time: 113.89 },
  { text: "La brisa viene del mar", time: 116.63, img: "v22.png" },
  { text: "No te dejo de mirar", time: 119.55 },
  { text: "Eres mi niña de cristal", time: 122.27 },

  { text: "Juro que yo mato por ti", time: 125.06, img: "v23.jpg" },
  { text: "Aunque sé que sabes cuidarte sola", time: 127.92 },
  { text: "Quisiera detener la hora", time: 130.77 },
  { text: "Pero el tiempo se va como las olas", time: 133.47, img: "v24.jpg" },

  { text: "Toda mi tristeza te llevaste", time: 137.37, img: "v25.jpg" },
  { text: "Con un beso tuyo me calmaste", time: 140.19 },
  { text: "Yo te navegué y me dejaste", time: 143.06 },
  { text: "(Ah-ah, ah-ah)", time: 147.02, img: "v26.jpg" },//////////////////

  { text: "¿Cómo llegamos aquí?", time: 148.97},
  { text: "Solo el deseo lo sabe", time: 151.56, img: "v.png" },
  { text: "Y todo el tiempo que te tengo cerca", time: 154.79 },
  { text: "No quiero que se acabe", time: 157.67, img: "v6.jpg" },

  { text: "Y si esto fuera un error", time: 160.68 },
  { text: "Volvería equivocarme", time: 163.10, img: "v28.jpg" },
  { text: "De tu cora no quiero mudarme", time: 165.92 },
  { text: "Yo te cuido y tú me cuida', nena", time: 169.17, img: "v9.png" },
  { text: "", time: 173.08 },

  { text: "Noche, te me fuiste", time: 207 },
  { text: "¿Por qué no te quedaste con nosotros?", time: 210.61},

  { text: "Como prometiste aquella Luna", time: 216.2, img: "v8.png" },
  { text: "Noche, te me fuiste", time: 224.6 },

  { text: "Si yo (si yo)", time: 228.2, img: "v2.jpg" },
  { text: "Solo quiero contigo, uoh-oh-oh, uoh-oh-oh", time: 232.45, img: "v16.png" },
  { text: "No quiero a nadie más (a nadie más)", time: 238.71, img: "v18.png" },
  { text: "Quiero que seas tú (que seas tú)", time: 246.37, img: "v.png" },

  { text: "Te amo mucho sabes ?", time: 250.71, img: "v3.jpg" },
  { text: "Este detalle es solo para ti, mi amor ❤️", time: 255.37, img: "a.jpg" },
  { text: "Espero que al verlo sientas todo lo que te amo,", time: 258.37 },
  { text: " porque cada cosa que hice fue pensando en ti.", time: 262.71, img: "a.jpg" },
  { text: "No hay un solo día en que no estés en mi mente,", time: 266.37 },
  { text: " desde que despierto hasta que cierro los ojos.", time: 270.71 },
  { text: "Pienso en tu sonrisa, en tu mirada, en cómo me haces sentir vivo… ", time: 274.37 }, // cierre
  { text: "y juro que haría cualquier cosa por ti, lo que me pidieras, sin dudar.", time: 278.37},
  { text: "Gracias por existir, por iluminar mi mundo y por ser todo lo que siempre soñé.", time: 282.71 },
  { text: "Te amo demasiado, más de lo que puedo poner en palabras, y cada latido mío late por ti", time: 285.71},
  { text: "<3", time: 277.71, img: "v27.jpg" }
];


// Función para mostrar imagen sincronizada
function showSyncedImage(imgName) {
  if (!imgName) return;

  const img = document.createElement("img");
  img.src = `img/${imgName}`;
  img.classList.add("random-img");

  // Tamaño responsive: máximo 20% del ancho del contenedor
  img.style.width = "20%";
  img.style.height = "auto";
  img.style.position = "absolute";
  img.style.opacity = "0";
  img.style.transition = "opacity 1s ease";

  // Calculamos la posición aleatoria respetando los límites
  // Se usa porcentaje para que sea responsive
  const leftPos = Math.random() * 80; // 0% a 80%
  const topPos = Math.random() * 70;  // 0% a 70%
  img.style.left = `${leftPos}%`;
  img.style.top = `${topPos}%`;

  randomContainer.appendChild(img);

  // Fade-in
  requestAnimationFrame(() => {
    img.style.opacity = "1";
  });

  // Mantener visible 3 segundos y luego fade-out
  setTimeout(() => {
    img.style.opacity = "0";
    setTimeout(() => img.remove(), 1000);
  }, 4000);
}




// Función que actualiza la letra en pantalla
function updateLyrics() {
  const currentTime = audio.currentTime;

  // Encuentra la línea actual según el tiempo
  let nextIndex = lyricsData.findIndex((line, index) => {
    const nextLineTime = lyricsData[index + 1]?.time || Infinity;
    return currentTime >= line.time && currentTime < nextLineTime;
  });

  if (nextIndex !== -1 && nextIndex !== currentIndex) {
    currentIndex = nextIndex;
    lyrics.innerHTML = lyricsData[currentIndex].text;

    if (lyricsData[currentIndex].img) {
      showSyncedImage(lyricsData[currentIndex].img);
    }
  }

  // Efecto fade-in de la letra
  if (currentIndex !== -1) {
    const fadeInDuration = 0.3; // segundos
    const timeSinceLine = currentTime - lyricsData[currentIndex].time;
    const opacity = Math.min(1, timeSinceLine / fadeInDuration);
    lyrics.style.opacity = opacity;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  requestAnimationFrame(updateLyrics);
}

// Inicia la animación cuando el audio empieza a reproducirse
audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});
