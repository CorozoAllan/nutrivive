const menus = {
    lunes: {
        desayuno: { plato: "Avena con frutas y yogur", tiempo: "🕒 10 min" },
        almuerzo: { plato: "Pollo a la plancha con arroz y ensalada", tiempo: "🕒 20 min" },
        merienda: { plato: "Manzana y frutos secos", tiempo: "🕒 5 min" },
        cena: { plato: "Tortilla de vegetales", tiempo: "🕒 15 min" },
        ingredientes: [
            "Hojuelas de avena", "Yogur natural", "Fresas o banano",
            "Pechuga de pollo", "Arroz integral", "Lechuga y tomate",
            "Manzana roja", "Nueces o almendras", "2 huevos", "Espinaca y pimiento"
        ]
    },
    martes: {
        desayuno: { plato: "Tostadas integrales con aguacate", tiempo: "🕒 8 min" },
        almuerzo: { plato: "Pescado al horno con vegetales", tiempo: "🕒 25 min" },
        merienda: { plato: "Yogur natural con fresas", tiempo: "🕒 5 min" },
        cena: { plato: "Ensalada de pollo", tiempo: "🕒 15 min" },
        ingredientes: [
            "Pan integral", "1 aguacate maduro", "Filete de pescado blanco",
            "Brócoli y zanahoria", "Yogur natural", "Fresas frescas",
            "Pechuga de pollo cocida", "Mix de hojas verdes", "Limón y aceite de oliva"
        ]
    },
    miercoles: {
        desayuno: { plato: "Huevos revueltos con pan integral", tiempo: "🕒 10 min" },
        almuerzo: { plato: "Arroz con lentejas y ensalada", tiempo: "🕒 20 min" },
        merienda: { plato: "Banano y almendras", tiempo: "🕒 3 min" },
        cena: { plato: "Crema de verduras", tiempo: "🕒 18 min" },
        ingredientes: [
            "2 huevos", "Pan integral", "Lentejas cocidas",
            "Arroz", "Pepino y tomate", "1 banano",
            "Puñado de almendras", "Zapallo o calabacín", "Cebolla y ajo"
        ]
    },
    jueves: {
        desayuno: { plato: "Yogur con granola y frutas", tiempo: "🕒 5 min" },
        almuerzo: { plato: "Pollo con papas al horno", tiempo: "🕒 25 min" },
        merienda: { plato: "Batido de frutas", tiempo: "🕒 7 min" },
        cena: { plato: "Sándwich integral de atún", tiempo: "🕒 10 min" },
        ingredientes: [
            "Yogur griego", "Granola sin azúcar", "Fruta picada",
            "Pechuga de pollo", "Papas pequeñas", "Leche o bebida vegetal",
            "Lata de atún en agua", "Pan de molde integral", "Lechuga"
        ]
    },
    viernes: {
        desayuno: { plato: "Avena con banano", tiempo: "🕒 10 min" },
        almuerzo: { plato: "Pescado con arroz y vegetales", tiempo: "🕒 20 min" },
        merienda: { plato: "Frutas frescas", tiempo: "🕒 5 min" },
        cena: { plato: "Ensalada de huevo", tiempo: "🕒 12 min" },
        ingredientes: [
            "Avena en hojuelas", "1 banano", "Canela en polvo",
            "Filete de pescado", "Arroz", "Vainitas y zanahoria",
            "Manzana o mandarina", "2 huevos duros", "Espinaca y tomate cherry"
        ]
    },
    sabado: {
        desayuno: { plato: "Pan integral con huevo", tiempo: "🕒 10 min" },
        almuerzo: { plato: "Pollo al horno con ensalada", tiempo: "🕒 25 min" },
        merienda: { plato: "Yogur con frutas", tiempo: "🕒 5 min" },
        cena: { plato: "Wrap de vegetales", tiempo: "🕒 12 min" },
        ingredientes: [
            "Pan integral", "2 huevos", "Muslo o pechuga de pollo",
            "Lechuga, pepino y aguacate", "Yogur natural", "Arándanos o fresas",
            "Tortilla integral", "Pimiento, zanahoria y hummus"
        ]
    },
    domingo: {
        desayuno: { plato: "Tostadas con queso fresco", tiempo: "🕒 7 min" },
        almuerzo: { plato: "Carne magra con arroz y vegetales", tiempo: "🕒 25 min" },
        merienda: { plato: "Frutos secos y fruta", tiempo: "🕒 3 min" },
        cena: { plato: "Sopa de verduras", tiempo: "🕒 20 min" },
        ingredientes: [
            "Pan integral", "Queso fresco bajo en grasa", "Filete de carne magra",
            "Arroz", "Brócoli y coliflor", "Mix de frutos secos",
            "Pera o manzana", "Zanahoria, apio y papa"
        ]
    }
};

const stickersAlimentos = [
    { palabras: ["avena", "granola"], icono: "🌾" },
    { palabras: ["yogur"], icono: "🥛" },
    { palabras: ["fresa", "arándano", "frutos rojos", "fruta", "banano", "manzana", "pera", "mandarina"], icono: "🍓" },
    { palabras: ["pollo"], icono: "🍗" },
    { palabras: ["arroz"], icono: "🍚" },
    { palabras: ["lechuga", "espinaca", "hojas verdes", "brócoli", "coliflor", "vainitas", "verdura", "vegetal", "pepino", "tomate", "pimiento", "zanahoria", "aguacate", "cebolla", "ajo", "zapallo", "calabacín", "apio", "papa", "hummus"], icono: "🥗" },
    { palabras: ["nuez", "nueces", "almendra", "frutos secos", "mix de frutos"], icono: "🥜" },
    { palabras: ["huevo"], icono: "🥚" },
    { palabras: ["pan", "tostada", "sándwich", "wrap", "tortilla integral"], icono: "🍞" },
    { palabras: ["pescado", "atún"], icono: "🐟" },
    { palabras: ["carne"], icono: "🥩" },
    { palabras: ["lenteja"], icono: "🫘" },
    { palabras: ["leche", "bebida vegetal"], icono: "🫗" },
    { palabras: ["queso"], icono: "🧀" },
    { palabras: ["limón", "aceite", "canela"], icono: "🍋" }
];

const recetasDetalle = {
    ensalada: {
        categoria: "Almuerzo",
        titulo: "Ensalada fresca",
        tiempo: "🕒 12 min • 1 porción",
        ingredientes: [
            "2 tazas de lechuga romana o espinaca fresca",
            "1/2 aguacate cortado en cubos",
            "6 tomates cherry partidos a la mitad",
            "1/4 de pepino en rodajas",
            "1 cucharada de semillas de girasol o nueces",
            "Jugo de medio limón, aceite de oliva y pizca de sal"
        ],
        pasos: [
            "Lava y desinfecta bien las hojas verdes, los tomates y el pepino.",
            "Corta los vegetales en trozos medianos y colócalos en un bowl.",
            "Agrega el aguacate en cubos y espolvorea las semillas por encima.",
            "Aliña justo antes de servir con limón, aceite de oliva y sal al gusto."
        ]
    },
    desayuno: {
        categoria: "Desayuno",
        titulo: "Desayuno energético",
        tiempo: "🕒 8 min • 1 porción",
        ingredientes: [
            "1 taza de yogur natural o griego sin azúcar",
            "4 cucharadas de avena en hojuelas o granola",
            "1/2 taza de fresas o arándanos frescos",
            "1/2 banano en rodajas",
            "1 cucharadita de miel o semillas de chía"
        ],
        pasos: [
            "Sirve el yogur natural como base en un recipiente hondo.",
            "Añade la avena o granola por un costado para mantener su textura crocante.",
            "Decora con las rodajas de banano y los frutos rojos.",
            "Finaliza con un toque de chía o miel si deseas un dulzor extra."
        ]
    },
    cena: {
        categoria: "Cena",
        titulo: "Plato equilibrado",
        tiempo: "🕒 15 min • 1 porción",
        ingredientes: [
            "150 g de pechuga de pollo en tiras (o tofu firme)",
            "1 taza de brócoli y pimiento rojo en tiras",
            "1/2 taza de quinoa o arroz cocido",
            "1 cucharadita de aceite de oliva",
            "Ajo en polvo, pimienta y un toque de salsa de soya baja en sodio"
        ],
        pasos: [
            "Saltea las tiras de pollo en un sartén con aceite de oliva y especias por 6 minutos.",
            "Agrega el brócoli y el pimiento al mismo sartén y cocina 5 minutos más.",
            "Sirve el salteado acompañado de la porción de quinoa o arroz caliente."
        ]
    }
};

const botonesDias = document.querySelectorAll(".dia");
const desayunoEl = document.getElementById("desayuno");
const almuerzoEl = document.getElementById("almuerzo");
const meriendaEl = document.getElementById("merienda");
const cenaEl = document.getElementById("cena");

const tiempoDesayunoEl = document.getElementById("tiempo-desayuno");
const tiempoAlmuerzoEl = document.getElementById("tiempo-almuerzo");
const tiempoMeriendaEl = document.getElementById("tiempo-merienda");
const tiempoCenaEl = document.getElementById("tiempo-cena");

const btnToggleLista = document.getElementById("btn-toggle-lista");
const nombreDiaLista = document.getElementById("nombre-dia-lista");
const panelLista = document.getElementById("panel-lista-compras");
const itemsLista = document.getElementById("items-lista-compras");

function obtenerStickerAlimento(nombreIngrediente) {
    const texto = nombreIngrediente.toLowerCase();
    for (const entrada of stickersAlimentos) {
        if (entrada.palabras.some(palabra => texto.includes(palabra))) {
            return entrada.icono;
        }
    }
    return "🥗";
}

function renderizarListaCompras(ingredientes) {
    itemsLista.innerHTML = "";
    ingredientes.forEach(item => {
        const li = document.createElement("li");
        const sticker = obtenerStickerAlimento(item);

        const stickerSpan = document.createElement("span");
        stickerSpan.className = "sticker-alimento";
        stickerSpan.textContent = sticker;

        const textoSpan = document.createElement("span");
        textoSpan.className = "texto-ingrediente";
        textoSpan.textContent = item;

        li.append(stickerSpan, textoSpan);

        li.addEventListener("click", () => {
            li.classList.toggle("comprado");
        });

        itemsLista.appendChild(li);
    });
}

function cambiarMenu(diaSeleccionado) {
    const menu = menus[diaSeleccionado];
    if (!menu) return;

    desayunoEl.textContent = menu.desayuno.plato;
    tiempoDesayunoEl.textContent = menu.desayuno.tiempo;

    almuerzoEl.textContent = menu.almuerzo.plato;
    tiempoAlmuerzoEl.textContent = menu.almuerzo.tiempo;

    meriendaEl.textContent = menu.merienda.plato;
    tiempoMeriendaEl.textContent = menu.merienda.tiempo;

    cenaEl.textContent = menu.cena.plato;
    tiempoCenaEl.textContent = menu.cena.tiempo;

    nombreDiaLista.textContent = diaSeleccionado;
    renderizarListaCompras(menu.ingredientes);

    botonesDias.forEach(boton => {
        boton.classList.toggle("activo", boton.dataset.dia === diaSeleccionado);
    });
}

botonesDias.forEach(boton => {
    boton.addEventListener("click", function() {
        cambiarMenu(this.dataset.dia);
    });
});

btnToggleLista.addEventListener("click", () => {
    panelLista.classList.toggle("oculto");
});

const botonesDescarga = document.querySelectorAll(".btn-tienda, .btn-tienda-img");
const mensajeDescarga = document.getElementById("mensaje-descarga");

botonesDescarga.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (boton.getAttribute("href") === "#descargar") {
            e.preventDefault();
            const tienda = boton.dataset.tienda || "tu tienda";
            mensajeDescarga.textContent = `🌿 ¡Pronto disponible en ${tienda}! Estamos preparando la versión móvil de NutriVive.`;
            mensajeDescarga.classList.remove("oculto");
        }
    });
});

const tarjetasRecetas = document.querySelectorAll(".receta");
const modalReceta = document.getElementById("modal-receta");
const cerrarModalBtn = document.getElementById("cerrar-modal");

tarjetasRecetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const clave = tarjeta.dataset.receta;
        const datos = recetasDetalle[clave];
        if (!datos) return;

        document.getElementById("modal-categoria").textContent = datos.categoria;
        document.getElementById("modal-titulo").textContent = datos.titulo;
        document.getElementById("modal-tiempo").textContent = datos.tiempo;

        const ulIngredientes = document.getElementById("modal-ingredientes");
        ulIngredientes.innerHTML = datos.ingredientes.map(ing => `<li>${ing}</li>`).join("");

        const olPasos = document.getElementById("modal-pasos");
        olPasos.innerHTML = datos.pasos.map(paso => `<li>${paso}</li>`).join("");

        modalReceta.classList.remove("oculto");
    });
});

cerrarModalBtn.addEventListener("click", () => {
    modalReceta.classList.add("oculto");
});

modalReceta.addEventListener("click", (e) => {
    if (e.target === modalReceta) {
        modalReceta.classList.add("oculto");
    }
});

const formSuscripcion = document.getElementById("form-suscripcion");
const correoInput = document.getElementById("correo-usuario");
const mensajeSuscripcion = document.getElementById("mensaje-suscripcion");

formSuscripcion.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = correoInput.value.trim();
    if (correo) {
        mensajeSuscripcion.textContent = `🌿 ¡Listo! Te enviaremos nuestras novedades a ${correo}.`;
        mensajeSuscripcion.classList.remove("oculto");
        correoInput.value = "";
    }
});

cambiarMenu("lunes");