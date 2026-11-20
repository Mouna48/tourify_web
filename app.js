// ===== Tourify · lógica de las páginas (sin servidor ni base de datos) =====
const D = TOURIFY_DATA;
const porNombre = (a, b) => a.nombre.localeCompare(b.nombre, 'es');

function esc(t) {
    return String(t ?? '').replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function param(nombre) {
    const v = new URLSearchParams(location.search).get(nombre);
    const n = parseInt(v, 10);
    return Number.isNaN(n) ? null : n;
}

// ----- "consultas" sobre los datos -----
const paisPorId      = id => D.paises.find(p => p.id === id);
const ciudadPorId    = id => D.ciudades.find(c => c.id === id);
const categoriaPorId = id => D.categorias.find(c => c.id === id);
const lugarPorId     = id => D.lugares.find(l => l.id === id);
const ciudadesDePais = id => D.ciudades.filter(c => c.paisId === id);
const lugaresDeCiudad = id => D.lugares.filter(l => l.ciudadId === id);
const fotoDePais = id => (ciudadesDePais(id)[0] || {}).foto || '';
function ciudadesTexto(id) {
    const n = ciudadesDePais(id).map(c => c.nombre);
    return n.length === 2 ? n[0] + ' y ' + n[1] : (n.length === 1 ? n[0] : '');
}
function paisesConCategoria(catId) {
    const ids = new Set();
    D.lugares.filter(l => l.categoriaId === catId)
        .forEach(l => ids.add(ciudadPorId(l.ciudadId).paisId));
    return D.paises.filter(p => ids.has(p.id)).sort(porNombre);
}

// ----- trozos comunes -----
function cabecera(volver) {
    return `
<header class="header">
    <div class="header-inner">
        <a href="index.html" class="logo">
            <span class="logo-icon">✈</span>
            <span class="logo-text">Tourify</span>
        </a>
        <nav class="nav">${volver ? `<a href="${volver.href}" class="btn-nav btn-back">← ${esc(volver.texto)}</a>` : ''}</nav>
    </div>
</header>`;
}
function pie() {
    return `
<footer class="footer">
    <div class="footer-inner">
        <div class="footer-col">
            <p class="footer-col-title">Síguenos</p>
            <a href="#" class="footer-link">𝕏 Twitter</a>
            <a href="#" class="footer-link">▶ YouTube</a>
            <a href="#" class="footer-link">📷 Instagram</a>
        </div>
        <div class="footer-col">
            <p class="footer-col-title">Contact Info</p>
            <p class="footer-text">Email: contacto@tourify.com</p>
            <p class="footer-text">Phone: +34 600 123 456</p>
            <p class="footer-text">Address: Plaiaundi Street, Irún, Spain</p>
        </div>
        <div class="footer-col">
            <p class="footer-col-title">Copyright</p>
            <p class="footer-text">© 2025 Tourify. Todos los derechos reservados.</p>
            <a href="#" class="footer-link">Privacy Policy</a>
            <span class="footer-sep">|</span>
            <a href="#" class="footer-link">Terms &amp; Conditions</a>
        </div>
        <div class="footer-logo-col">
            <span class="footer-logo-icon">✈</span>
            <span class="footer-logo-text">Tourify</span>
        </div>
    </div>
</footer>`;
}
const raiz = () => document.getElementById('app');

// ===================== INDEX =====================
function paginaIndex() {
    const catId = param('categoriaId');
    const categoriaActiva = catId ? categoriaPorId(catId) : null;
    const todos = [...D.paises].sort(porNombre);
    const destacados = categoriaActiva
        ? paisesConCategoria(categoriaActiva.id)
        : [1, 7, 6, 9, 3, 12].map(paisPorId).filter(Boolean);
    const categorias = [...D.categorias].sort(porNombre);
    document.title = 'Tourify — Descubre el Mundo';

    raiz().innerHTML = `
${cabecera(null)}
<section class="hero">
    <div class="hero-img-wrapper">
        <img src="${esc(fotoDePais(12))}" alt="Santorini, Grecia" class="hero-img">
        <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
        <h1 class="hero-title">
            Explora ciudades,<br>
            culturas y paisajes<br>
            <em>únicos desde un solo lugar</em>
        </h1>
        <p class="hero-sub">${D.paises.length} países · ${D.ciudades.length} ciudades · ${D.lugares.length} destinos únicos</p>
        <div class="selector-wrapper">
            <select class="selector-select" id="selector-pais">
                <option value="">Elige un país para explorar...</option>
                ${todos.map(p => `<option value="${p.id}">${esc(p.nombre)}</option>`).join('')}
            </select>
        </div>
    </div>
</section>

<section class="categorias-section">
    <div class="container">
        <div class="categorias-bar">
            <a href="index.html" class="categoria-chip${categoriaActiva ? '' : ' categoria-chip--activa'}">Todos</a>
            ${categorias.map(c => `
            <a href="index.html?categoriaId=${c.id}"
               class="categoria-chip${categoriaActiva && categoriaActiva.id === c.id ? ' categoria-chip--activa' : ''}">${esc(c.nombre)}</a>`).join('')}
        </div>
    </div>
</section>

<section class="paises-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">${categoriaActiva
                ? 'Países con lugares de tipo: ' + esc(categoriaActiva.nombre)
                : 'Elige un país y descubre sus ciudades más fascinantes'}</h2>
        </div>
        <div class="paises-grid">
            ${destacados.length === 0
                ? `<p style="color: var(--gray-mid); grid-column: 1/-1; text-align: center; padding: 48px 0;">No hay países disponibles para este filtro.</p>`
                : destacados.map(p => `
            <a href="pais.html?paisId=${p.id}" class="pais-card">
                <div class="pais-img-wrapper">
                    <img src="${esc(fotoDePais(p.id))}" alt="${esc(p.nombre)}" class="pais-img">
                    <div class="pais-img-overlay"></div>
                </div>
                <div class="pais-body">
                    <h3 class="pais-nombre">${esc(p.nombre)}</h3>
                    <p class="pais-desc">${esc(ciudadesTexto(p.id))}</p>
                </div>
            </a>`).join('')}
        </div>
    </div>
</section>
${pie()}`;

    document.getElementById('selector-pais').addEventListener('change', e => {
        if (e.target.value) location.href = 'pais.html?paisId=' + e.target.value;
    });
}

// ===================== PAÍS =====================
function paginaPais() {
    const pais = paisPorId(param('paisId'));
    if (!pais) { location.replace('index.html'); return; }
    document.title = 'Tourify — ' + pais.nombre;

    raiz().innerHTML = `
${cabecera({ href: 'index.html', texto: 'Volver' })}
<section class="pais-hero">
    <div class="pais-hero-img-wrapper">
        <img src="${esc(fotoDePais(pais.id))}" alt="${esc(pais.nombre)}" class="pais-hero-img" onerror="this.style.opacity='0'">
        <div class="hero-overlay"></div>
    </div>
    <div class="pais-hero-content">
        <p class="hero-tag">${esc(pais.continente)}</p>
        <h1 class="hero-title">${esc(pais.nombre)}</h1>
    </div>
</section>

<main class="pais-main">
    <div class="container">
        ${ciudadesDePais(pais.id).map(c => `
        <section class="ciudad-section">
            <div class="ciudad-header">
                <div class="ciudad-header-text">
                    <h2 class="ciudad-title">${esc(c.nombre)}</h2>
                    <p class="ciudad-desc">${esc(c.descripcion)}</p>
                </div>
                <img src="${esc(c.foto)}" alt="${esc(c.nombre)}" class="ciudad-header-img" onerror="this.style.display='none'">
            </div>
            <div class="lugares-grid">
                ${lugaresDeCiudad(c.id).map(l => `
                <article class="lugar-card">
                    <div class="lugar-img-wrapper">
                        <img src="${esc(l.foto)}" alt="${esc(l.nombre)}" class="lugar-img" onerror="this.style.background='#eee'">
                    </div>
                    <div class="lugar-body">
                        <h3 class="lugar-nombre">${esc(l.nombre)}</h3>
                        <p class="lugar-desc">${esc(l.descripcion)}</p>
                        <a href="detalle.html?id=${l.id}" class="lugar-btn">Ver más</a>
                    </div>
                </article>`).join('')}
            </div>
        </section>
        <div class="ciudad-separador"></div>`).join('')}
    </div>
</main>
${pie()}`;
}

// ===================== DETALLE =====================
function paginaDetalle() {
    const lugar = lugarPorId(param('id'));
    if (!lugar) { location.replace('index.html'); return; }
    const ciudad = ciudadPorId(lugar.ciudadId);
    const pais = paisPorId(ciudad.paisId);
    const cat = categoriaPorId(lugar.categoriaId);
    document.title = 'Tourify — ' + lugar.nombre;

    raiz().innerHTML = `
${cabecera({ href: 'pais.html?paisId=' + pais.id, texto: pais.nombre })}
<section class="detalle-hero">
    <img src="${esc(lugar.foto)}" alt="${esc(lugar.nombre)}" class="detalle-hero-img">
    <div class="hero-overlay"></div>
    <div class="detalle-hero-content">
        <p class="hero-tag">${esc(pais.nombre)} · ${esc(ciudad.nombre)}</p>
        <h1 class="hero-title">${esc(lugar.nombre)}</h1>
        ${cat ? `<span class="detalle-categoria">${esc(cat.nombre)}</span>` : ''}
    </div>
</section>

<section class="detalle-body">
    <div class="container">
        <div class="detalle-grid">
            <div class="detalle-texto">
                <h2 class="detalle-titulo">Sobre este lugar</h2>
                <p class="detalle-desc">${esc(lugar.descripcion)}</p>
            </div>
            <div class="detalle-info-card">
                <h3 class="info-card-title">Información</h3>
                <div class="info-row"><span class="info-label">País</span><span class="info-value">${esc(pais.nombre)}</span></div>
                <div class="info-row"><span class="info-label">Ciudad</span><span class="info-value">${esc(ciudad.nombre)}</span></div>
                <div class="info-row"><span class="info-label">Continente</span><span class="info-value">${esc(pais.continente)}</span></div>
                ${cat ? `<div class="info-row"><span class="info-label">Categoría</span><span class="info-value">${esc(cat.nombre)}</span></div>` : ''}
                <a href="pais.html?paisId=${pais.id}" class="btn-volver-pais">Ver más en ${esc(pais.nombre)}</a>
            </div>
        </div>
    </div>
</section>
${pie()}`;
}
