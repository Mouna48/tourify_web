// Datos de Tourify (generados a partir de la base de datos MySQL).
// Solo contiene países, ciudades, categorías y lugares. No hay usuarios ni contraseñas.
const TOURIFY_DATA = {
  "paises": [
    {
      "id": 1,
      "nombre": "Japón",
      "continente": "Asia"
    },
    {
      "id": 2,
      "nombre": "Francia",
      "continente": "Europa"
    },
    {
      "id": 3,
      "nombre": "Italia",
      "continente": "Europa"
    },
    {
      "id": 4,
      "nombre": "España",
      "continente": "Europa"
    },
    {
      "id": 5,
      "nombre": "Tailandia",
      "continente": "Asia"
    },
    {
      "id": 6,
      "nombre": "Turquía",
      "continente": "Asia"
    },
    {
      "id": 7,
      "nombre": "China",
      "continente": "Asia"
    },
    {
      "id": 8,
      "nombre": "Corea",
      "continente": "Asia"
    },
    {
      "id": 9,
      "nombre": "Marruecos",
      "continente": "África"
    },
    {
      "id": 10,
      "nombre": "Canadá",
      "continente": "América"
    },
    {
      "id": 11,
      "nombre": "Alemania",
      "continente": "Europa"
    },
    {
      "id": 12,
      "nombre": "Grecia",
      "continente": "Europa"
    }
  ],
  "ciudades": [
    {
      "id": 1,
      "nombre": "Tokyo",
      "descripcion": "La megalópolis más grande del mundo, donde lo ancestral y lo futurista conviven en perfecta armonía.",
      "foto": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      "paisId": 1
    },
    {
      "id": 2,
      "nombre": "Kioto",
      "descripcion": "La antigua capital imperial de Japón, guardiana de los templos, geishas y jardines más bellos del país.",
      "foto": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "paisId": 1
    },
    {
      "id": 3,
      "nombre": "París",
      "descripcion": "La Ciudad de la Luz, capital mundial del arte, la gastronomía y la moda.",
      "foto": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      "paisId": 2
    },
    {
      "id": 4,
      "nombre": "Niza",
      "descripcion": "La joya de la Costa Azul, con su Paseo de los Ingleses y su casco antiguo de colores vibrantes.",
      "foto": "https://images.unsplash.com/photo-1491166617655-3fef32268d05?w=800&q=80",
      "paisId": 2
    },
    {
      "id": 5,
      "nombre": "Roma",
      "descripcion": "La Ciudad Eterna, donde cada piedra cuenta 2.000 años de historia.",
      "foto": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
      "paisId": 3
    },
    {
      "id": 6,
      "nombre": "Venecia",
      "descripcion": "La ciudad más romántica del mundo, construida sobre el agua y el tiempo.",
      "foto": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80",
      "paisId": 3
    },
    {
      "id": 7,
      "nombre": "Barcelona",
      "descripcion": "La ciudad de Gaudí, el modernismo y la mejor arquitectura del mundo.",
      "foto": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
      "paisId": 4
    },
    {
      "id": 8,
      "nombre": "Madrid",
      "descripcion": "La capital de España, hogar del Prado, el Retiro y la mejor vida nocturna de Europa.",
      "foto": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
      "paisId": 4
    },
    {
      "id": 9,
      "nombre": "Bangkok",
      "descripcion": "La ciudad de los templos dorados, los mercados flotantes y el ritmo frenético del sudeste asiático.",
      "foto": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
      "paisId": 5
    },
    {
      "id": 10,
      "nombre": "Phuket",
      "descripcion": "La isla más famosa de Tailandia, con playas de arena blanca y aguas cristalinas del Mar de Andamán.",
      "foto": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
      "paisId": 5
    },
    {
      "id": 11,
      "nombre": "Estambul",
      "descripcion": "La única ciudad del mundo a caballo entre Europa y Asia, con mezquitas, bazares y palacios otomanos.",
      "foto": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      "paisId": 6
    },
    {
      "id": 12,
      "nombre": "Capadocia",
      "descripcion": "El paisaje más surrealista del mundo, con chimeneas de hadas y globos aerostáticos al amanecer.",
      "foto": "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80",
      "paisId": 6
    },
    {
      "id": 13,
      "nombre": "Pekín",
      "descripcion": "La capital imperial, hogar de la Gran Muralla, la Ciudad Prohibida y el Templo del Cielo.",
      "foto": "https://www.thechinajourney.com/wp-content/uploads/2024/09/beijing-photo-for-pc-banner-1024x682.webp",
      "paisId": 7
    },
    {
      "id": 14,
      "nombre": "Shanghái",
      "descripcion": "El skyline más impresionante del mundo, donde el Bund colonial contrasta con los rascacielos del futuro.",
      "foto": "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800&q=80",
      "paisId": 7
    },
    {
      "id": 15,
      "nombre": "Seúl",
      "descripcion": "La capital más vibrante de Asia, donde los palacios Joseon conviven con el K-pop y la tecnología.",
      "foto": "https://content.r9cdn.net/rimg/dimg/30/0c/6318617a-city-35982-163ff913019.jpg?width=1366&height=768&xhint=2421&yhint=1876&crop=true",
      "paisId": 8
    },
    {
      "id": 16,
      "nombre": "Busan",
      "descripcion": "La ciudad costera de Corea, famosa por sus templos junto al mar y el colorido barrio de Gamcheon.",
      "foto": "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80",
      "paisId": 8
    },
    {
      "id": 17,
      "nombre": "Marrakech",
      "descripcion": "La ciudad roja del Atlas, con su plaza Jemaa el-Fna, sus zocos y sus riads escondidos.",
      "foto": "https://images.unsplash.com/photo-1699210260021-eac11ba4ff86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzYWJsYW5jYSUyMG5pZ2h0fGVufDB8fDB8fHww",
      "paisId": 9
    },
    {
      "id": 18,
      "nombre": "Casablanca",
      "descripcion": "La capital económica de Marruecos, una ciudad moderna junto al Atlántico que combina grandes avenidas, barrios históricos y la impresionante Mezquita Hassan II frente al mar.",
      "foto": "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/04/32/8e.jpg",
      "paisId": 9
    },
    {
      "id": 19,
      "nombre": "Toronto",
      "descripcion": "La ciudad más multicultural del mundo, con la Torre CN y las espectaculares Cataratas del Niágara.",
      "foto": "https://media.cntraveler.com/photos/5b2c0684a98055277ea83e26/master/pass/CN-Tower_GettyImages-615764386.jpg",
      "paisId": 10
    },
    {
      "id": 20,
      "nombre": "Vancouver",
      "descripcion": "La ciudad más bella de Canadá, rodeada de montañas nevadas y el océano Pacífico.",
      "foto": "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&q=80",
      "paisId": 10
    },
    {
      "id": 21,
      "nombre": "Berlín",
      "descripcion": "La capital más cool de Europa, con el Muro, la Puerta de Brandeburgo y una escena cultural sin igual.",
      "foto": "https://images.pexels.com/photos/19284574/pexels-photo-19284574.jpeg",
      "paisId": 11
    },
    {
      "id": 22,
      "nombre": "Múnich",
      "descripcion": "La capital bávara, hogar del Oktoberfest, palacios barrocos y el mayor parque urbano de Europa.",
      "foto": "https://images.unsplash.com/photo-1599982890963-3aabd60064d2?w=800&q=80",
      "paisId": 11
    },
    {
      "id": 23,
      "nombre": "Atenas",
      "descripcion": "La cuna de la civilización occidental, donde la Acrópolis domina la ciudad desde hace 2.500 años.",
      "foto": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
      "paisId": 12
    },
    {
      "id": 24,
      "nombre": "Santorini",
      "descripcion": "La isla más fotogénica del Mediterráneo, con casitas blancas y el atardecer más espectacular del mundo.",
      "foto": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      "paisId": 12
    }
  ],
  "categorias": [
    {
      "id": 1,
      "nombre": "Monumento"
    },
    {
      "id": 2,
      "nombre": "Templo"
    },
    {
      "id": 3,
      "nombre": "Museo"
    },
    {
      "id": 4,
      "nombre": "Parque"
    },
    {
      "id": 5,
      "nombre": "Playa"
    },
    {
      "id": 6,
      "nombre": "Palacio"
    },
    {
      "id": 7,
      "nombre": "Mercado"
    },
    {
      "id": 8,
      "nombre": "Naturaleza"
    }
  ],
  "lugares": [
    {
      "id": 1,
      "nombre": "Templo Senso-ji",
      "descripcion": "El templo más antiguo de Tokyo, fundado en el año 645. Sus puertas rojas y la calle Nakamise lo convierten en una visita imprescindible.",
      "foto": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
      "ciudadId": 1,
      "categoriaId": 2
    },
    {
      "id": 2,
      "nombre": "Torre de Tokyo",
      "descripcion": "Icónica torre de 333 metros de color naranja y blanco. Ofrece vistas panorámicas espectaculares de toda la ciudad y del Monte Fuji.",
      "foto": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80",
      "ciudadId": 1,
      "categoriaId": 1
    },
    {
      "id": 3,
      "nombre": "Palacio Imperial",
      "descripcion": "Residencia principal del Emperador de Japón, rodeado de fosos y hermosos jardines abiertos al público.",
      "foto": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80",
      "ciudadId": 1,
      "categoriaId": 6
    },
    {
      "id": 4,
      "nombre": "Cruce de Shibuya",
      "descripcion": "El cruce peatonal más famoso del mundo. Cada vez que el semáforo cambia, más de 3.000 personas cruzan simultáneamente.",
      "foto": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=80",
      "ciudadId": 1,
      "categoriaId": 1
    },
    {
      "id": 5,
      "nombre": "Templo Kinkaku-ji",
      "descripcion": "El famoso Pabellón Dorado cubierto de pan de oro que se refleja en el lago. Patrimonio de la Humanidad por la UNESCO.",
      "foto": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
      "ciudadId": 2,
      "categoriaId": 2
    },
    {
      "id": 6,
      "nombre": "Bosque de Bambú",
      "descripcion": "Un sendero místico que atraviesa miles de cañas de bambú de hasta 30 metros. El sonido del viento ha sido declarado Patrimonio Sonoro de Japón.",
      "foto": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
      "ciudadId": 2,
      "categoriaId": 8
    },
    {
      "id": 7,
      "nombre": "Santuario Fushimi Inari",
      "descripcion": "Famoso por sus miles de torii rojos que forman túneles por las laderas del Monte Inari. El santuario más visitado de Japón.",
      "foto": "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80",
      "ciudadId": 2,
      "categoriaId": 2
    },
    {
      "id": 8,
      "nombre": "Barrio Gion",
      "descripcion": "El distrito de geishas más famoso de Japón. Sus calles adoquinadas con casas de madera tradicionales son perfectas para pasear al atardecer.",
      "foto": "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=600&q=80",
      "ciudadId": 2,
      "categoriaId": 1
    },
    {
      "id": 9,
      "nombre": "Torre Eiffel",
      "descripcion": "El símbolo más reconocible de Francia con casi 7 millones de turistas al año. Construida en 1889, mide 330 metros.",
      "foto": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80",
      "ciudadId": 3,
      "categoriaId": 1
    },
    {
      "id": 10,
      "nombre": "Museo del Louvre",
      "descripcion": "El museo de arte más grande del mundo con más de 35.000 obras. Alberga la Mona Lisa de Da Vinci y la Venus de Milo.",
      "foto": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",
      "ciudadId": 3,
      "categoriaId": 3
    },
    {
      "id": 11,
      "nombre": "Catedral de Notre-Dame",
      "descripcion": "Obra maestra del gótico francés construida entre los siglos XII y XIV. Reabrió en 2024 tras su restauración.",
      "foto": "https://images.unsplash.com/photo-1470214958064-a4b9d5b0c524?w=600&q=80",
      "ciudadId": 3,
      "categoriaId": 1
    },
    {
      "id": 12,
      "nombre": "Palacio de Versalles",
      "descripcion": "El palacio más suntuoso de Europa con 800 hectáreas de jardines y la famosa Galería de los Espejos.",
      "foto": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80",
      "ciudadId": 3,
      "categoriaId": 6
    },
    {
      "id": 13,
      "nombre": "Paseo de los Ingleses",
      "descripcion": "El bulevar más famoso de la Costa Azul, 7 kilómetros junto al Mediterráneo con elegantes hoteles Belle Époque.",
      "foto": "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&q=80",
      "ciudadId": 4,
      "categoriaId": 1
    },
    {
      "id": 14,
      "nombre": "Casco Antiguo de Niza",
      "descripcion": "Laberinto de callejuelas barrocas de colores vibrantes. El mercado del Cours Saleya es el corazón del barrio.",
      "foto": "https://images.unsplash.com/photo-1600623471616-8c704f2fd52e?w=600&q=80",
      "ciudadId": 4,
      "categoriaId": 7
    },
    {
      "id": 15,
      "nombre": "Colina del Castillo",
      "descripcion": "Aunque el castillo fue demolido en 1706, la colina ofrece las mejores vistas panorámicas de Niza y la Costa Azul.",
      "foto": "https://images.unsplash.com/photo-1551877368-e7a0a4f5d4c8?w=600&q=80",
      "ciudadId": 4,
      "categoriaId": 8
    },
    {
      "id": 16,
      "nombre": "Museo Matisse",
      "descripcion": "Dedicado al pintor Henri Matisse, que vivió en Niza sus últimos años. Alberga la mayor colección del mundo de sus obras.",
      "foto": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
      "ciudadId": 4,
      "categoriaId": 3
    },
    {
      "id": 17,
      "nombre": "Coliseo Romano",
      "descripcion": "El anfiteatro más grande jamás construido, símbolo eterno del Imperio Romano. Tenía capacidad para 80.000 espectadores.",
      "foto": "https://images.unsplash.com/photo-1552432552-06c0b0a94dda?w=600&q=80",
      "ciudadId": 5,
      "categoriaId": 1
    },
    {
      "id": 18,
      "nombre": "Fontana di Trevi",
      "descripcion": "La fuente barroca más grande y famosa del mundo. Lanzar una moneda garantiza el regreso a Roma.",
      "foto": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80",
      "ciudadId": 5,
      "categoriaId": 1
    },
    {
      "id": 19,
      "nombre": "Ciudad del Vaticano",
      "descripcion": "El estado más pequeño del mundo. La Basílica de San Pedro y los Museos Vaticanos con la Capilla Sixtina son únicos.",
      "foto": "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&q=80",
      "ciudadId": 5,
      "categoriaId": 2
    },
    {
      "id": 20,
      "nombre": "Foro Romano",
      "descripcion": "El corazón político de la antigua Roma. Ruinas de templos y arcos triunfales que datan del siglo VI a.C.",
      "foto": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80",
      "ciudadId": 5,
      "categoriaId": 1
    },
    {
      "id": 21,
      "nombre": "Plaza San Marcos",
      "descripcion": "El salón de Europa, rodeado por la Basílica de San Marcos y el Palacio Ducal. Centro de la vida veneciana.",
      "foto": "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
      "ciudadId": 6,
      "categoriaId": 1
    },
    {
      "id": 22,
      "nombre": "Gran Canal",
      "descripcion": "La arteria principal de Venecia, casi 4 kilómetros bordeados por más de 170 palacios renacentistas y barrocos.",
      "foto": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
      "ciudadId": 6,
      "categoriaId": 1
    },
    {
      "id": 23,
      "nombre": "Puente de Rialto",
      "descripcion": "El puente más antiguo sobre el Gran Canal, construido en 1591 en mármol blanco. Centro comercial histórico de Venecia.",
      "foto": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80",
      "ciudadId": 6,
      "categoriaId": 1
    },
    {
      "id": 24,
      "nombre": "Palacio Ducal",
      "descripcion": "Obra maestra del gótico veneciano y símbolo del poder de la República de Venecia durante más de mil años.",
      "foto": "https://images.unsplash.com/photo-1499578124509-1611b77778c8?w=600&q=80",
      "ciudadId": 6,
      "categoriaId": 6
    },
    {
      "id": 25,
      "nombre": "Sagrada Familia",
      "descripcion": "La obra maestra inacabada de Antoni Gaudí, en construcción desde 1882 y declarada Patrimonio de la Humanidad.",
      "foto": "https://mecaluxes.cdnwm.com/img/articulos-de-logistica/sagrada-familia-barcelona-tradicion-innovacion.1.8.jpg",
      "ciudadId": 7,
      "categoriaId": 1
    },
    {
      "id": 26,
      "nombre": "Park Güell",
      "descripcion": "El parque modernista de Gaudí con su famosa terraza de cerámica de colores y vistas panorámicas de Barcelona.",
      "foto": "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=600&q=80",
      "ciudadId": 7,
      "categoriaId": 4
    },
    {
      "id": 27,
      "nombre": "Las Ramblas",
      "descripcion": "El paseo más famoso de España, 1,2 kilómetros con artistas callejeros, flores y el animado Mercado de la Boquería.",
      "foto": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "ciudadId": 7,
      "categoriaId": 7
    },
    {
      "id": 28,
      "nombre": "Barrio Gótico",
      "descripcion": "El corazón histórico de Barcelona con calles medievales de 2.000 años y la Catedral como joya principal.",
      "foto": "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=600&q=80",
      "ciudadId": 7,
      "categoriaId": 1
    },
    {
      "id": 29,
      "nombre": "Museo del Prado",
      "descripcion": "Uno de los museos más importantes del mundo. Alberga Las Meninas de Velázquez y las Pinturas Negras de Goya.",
      "foto": "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=80",
      "ciudadId": 8,
      "categoriaId": 3
    },
    {
      "id": 30,
      "nombre": "Palacio Real",
      "descripcion": "El palacio real más grande de Europa Occidental con 3.418 habitaciones, construido en el siglo XVIII.",
      "foto": "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=600&q=80",
      "ciudadId": 8,
      "categoriaId": 6
    },
    {
      "id": 31,
      "nombre": "Puerta del Sol",
      "descripcion": "El kilómetro cero de España y centro neurálgico de Madrid. La estatua del Oso y el Madroño es su icono.",
      "foto": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80",
      "ciudadId": 8,
      "categoriaId": 1
    },
    {
      "id": 32,
      "nombre": "Parque del Retiro",
      "descripcion": "El pulmón verde de Madrid, 118 hectáreas declaradas Patrimonio de la Humanidad en 2021.",
      "foto": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80",
      "ciudadId": 8,
      "categoriaId": 4
    },
    {
      "id": 33,
      "nombre": "Gran Palacio",
      "descripcion": "El complejo palaciego más impresionante del sudeste asiático, residencia de los reyes tailandeses desde 1782.",
      "foto": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80",
      "ciudadId": 9,
      "categoriaId": 6
    },
    {
      "id": 34,
      "nombre": "Templo Wat Pho",
      "descripcion": "El templo más antiguo y grande de Bangkok, hogar del famoso Buda Reclinado de 46 metros cubierto de pan de oro.",
      "foto": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80",
      "ciudadId": 9,
      "categoriaId": 2
    },
    {
      "id": 35,
      "nombre": "Mercado Flotante",
      "descripcion": "Los vendedores en barcas de madera ofrecen frutas, especias y comida cocinada en los canales de Bangkok.",
      "foto": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
      "ciudadId": 9,
      "categoriaId": 7
    },
    {
      "id": 36,
      "nombre": "Templo Wat Arun",
      "descripcion": "El Templo del Amanecer, con su prang de 82 metros recubierto de porcelana china que brilla con la luz del sol.",
      "foto": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
      "ciudadId": 9,
      "categoriaId": 2
    },
    {
      "id": 37,
      "nombre": "Playa Patong",
      "descripcion": "La playa más famosa de Phuket, 3 kilómetros de arena blanca y aguas cristalinas del Mar de Andamán.",
      "foto": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80",
      "ciudadId": 10,
      "categoriaId": 5
    },
    {
      "id": 38,
      "nombre": "Gran Buda de Phuket",
      "descripcion": "Estatua de mármol blanco de 45 metros que domina la isla desde lo alto. Vistas de 360 grados de toda Phuket.",
      "foto": "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80",
      "ciudadId": 10,
      "categoriaId": 2
    },
    {
      "id": 39,
      "nombre": "Bahía de Phang Nga",
      "descripcion": "Paisaje de karst espectacular con islas de caliza que emergen del mar esmeralda. Famosa por la Isla James Bond.",
      "foto": "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&q=80",
      "ciudadId": 10,
      "categoriaId": 8
    },
    {
      "id": 40,
      "nombre": "Cabo Promthep",
      "descripcion": "El punto más meridional de Phuket, famoso por ofrecer los atardeceres más espectaculares de Tailandia.",
      "foto": "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80",
      "ciudadId": 10,
      "categoriaId": 8
    },
    {
      "id": 41,
      "nombre": "Hagia Sophia",
      "descripcion": "Construida en el año 537, fue catedral cristiana, mezquita y museo. Hoy es de nuevo mezquita activa con mosaicos únicos.",
      "foto": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80",
      "ciudadId": 11,
      "categoriaId": 2
    },
    {
      "id": 42,
      "nombre": "Mezquita Azul",
      "descripcion": "La única mezquita de Turquía con seis minaretes, decorada con más de 20.000 azulejos de cerámica azul cobalto.",
      "foto": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=80",
      "ciudadId": 11,
      "categoriaId": 2
    },
    {
      "id": 43,
      "nombre": "Gran Bazar",
      "descripcion": "Uno de los mercados cubiertos más grandes del mundo, con más de 4.000 tiendas en 61 calles cubiertas desde 1461.",
      "foto": "https://images.unsplash.com/photo-1527838832700-5059252f4b84?w=600&q=80",
      "ciudadId": 11,
      "categoriaId": 7
    },
    {
      "id": 44,
      "nombre": "Palacio Topkapi",
      "descripcion": "Residencia de los sultanes otomanos durante cuatro siglos. El Tesoro Imperial y el harén son sus joyas principales.",
      "foto": "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&q=80",
      "ciudadId": 11,
      "categoriaId": 6
    },
    {
      "id": 45,
      "nombre": "Valle de Göreme",
      "descripcion": "Chimeneas de hadas esculpidas por la erosión durante millones de años. Las primeras comunidades cristianas vivieron aquí.",
      "foto": "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8a?w=600&q=80",
      "ciudadId": 12,
      "categoriaId": 8
    },
    {
      "id": 46,
      "nombre": "Vuelo en Globo",
      "descripcion": "Sobrevolar el valle en globo aerostático al amanecer es una de las experiencias más mágicas del mundo.",
      "foto": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "ciudadId": 12,
      "categoriaId": 8
    },
    {
      "id": 47,
      "nombre": "Ciudad Subterránea de Derinkuyu",
      "descripcion": "Ciudad excavada bajo tierra que albergó hasta 20.000 personas, con 18 niveles que alcanzan los 85 metros.",
      "foto": "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80",
      "ciudadId": 12,
      "categoriaId": 1
    },
    {
      "id": 48,
      "nombre": "Termas de Pamukkale",
      "descripcion": "Terrazas de travertino blanco con piscinas naturales de color turquesa. Patrimonio de la Humanidad.",
      "foto": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
      "ciudadId": 12,
      "categoriaId": 8
    },
    {
      "id": 49,
      "nombre": "Gran Muralla China",
      "descripcion": "La mayor estructura arquitectónica jamás construida, con más de 21.000 kilómetros. Una de las Siete Maravillas del Mundo.",
      "foto": "https://www.thechinajourney.com/wp-content/uploads/2025/04/Tiananmen-Square-Beijing-The-iconic-Tiananmen-Gate-at-sunset-with-red-flags-flying-and-the-grand-portrait-of-Mao-Zedong-capturing-the-heart-of-Chinas-history-and-culture-e1745572581394.webp",
      "ciudadId": 13,
      "categoriaId": 1
    },
    {
      "id": 50,
      "nombre": "Ciudad Prohibida",
      "descripcion": "El palacio imperial más grande del mundo, con 980 edificios. Hogar de 24 emperadores durante casi 500 años.",
      "foto": "https://mochilerosentailandia.com/wp-content/uploads/2018/09/la-ciudad-prohibida-de-pekin-1024x683.jpg",
      "ciudadId": 13,
      "categoriaId": 6
    },
    {
      "id": 51,
      "nombre": "Templo del Cielo",
      "descripcion": "Donde los emperadores realizaban ceremonias para pedir buenas cosechas. La Sala de Oración es una obra maestra.",
      "foto": "https://images.pexels.com/photos/33401338/pexels-photo-33401338.jpeg",
      "ciudadId": 13,
      "categoriaId": 2
    },
    {
      "id": 52,
      "nombre": "Plaza de Tiananmen",
      "descripcion": "La plaza más grande del mundo con 440.000 metros cuadrados en el corazón de Pekín.",
      "foto": "https://www.bautrip.com/images/what-to-visit/plaza-tiananmen-pekin.jpg",
      "ciudadId": 13,
      "categoriaId": 1
    },
    {
      "id": 53,
      "nombre": "El Bund",
      "descripcion": "Paseo marítimo con 52 edificios coloniales europeos frente al skyline futurista de Pudong.",
      "foto": "https://images.pexels.com/photos/30685870/pexels-photo-30685870.jpeg",
      "ciudadId": 14,
      "categoriaId": 1
    },
    {
      "id": 54,
      "nombre": "Torre de Shanghái",
      "descripcion": "El segundo edificio más alto del mundo con 632 metros. El mirador de la planta 118 ofrece vistas increíbles.",
      "foto": "https://images.pexels.com/photos/32061869/pexels-photo-32061869.jpeg",
      "ciudadId": 14,
      "categoriaId": 1
    },
    {
      "id": 55,
      "nombre": "Jardín Yuyuan",
      "descripcion": "Oasis de la China tradicional construido en 1559. Ejemplo perfecto del jardín clásico chino.",
      "foto": "https://images.pexels.com/photos/8776494/pexels-photo-8776494.jpeg",
      "ciudadId": 14,
      "categoriaId": 4
    },
    {
      "id": 56,
      "nombre": "Distrito Tianzifang",
      "descripcion": "El barrio más bohemio de Shanghái, laberinto de callejuelas tradicionales llenas de galerías y boutiques.",
      "foto": "https://www.shutterstock.com/image-photo/shanghai-china-october-27-2025-260nw-2702311465.jpg",
      "ciudadId": 14,
      "categoriaId": 7
    },
    {
      "id": 57,
      "nombre": "Palacio Gyeongbokgung",
      "descripcion": "El mayor palacio real de Seúl, construido en 1395. Símbolo de la dinastía Joseon con más de 7.700 habitaciones.",
      "foto": "https://www.ivisitkorea.com/wp-content/uploads/2024/01/gyeongbokgung_palace.jpg",
      "ciudadId": 15,
      "categoriaId": 6
    },
    {
      "id": 58,
      "nombre": "Barrio Bukchon Hanok",
      "descripcion": "Más de 900 casas tradicionales coreanas llamadas hanok perfectamente conservadas. Un viaje al pasado.",
      "foto": "https://images.pexels.com/photos/6896969/pexels-photo-6896969.jpeg",
      "ciudadId": 15,
      "categoriaId": 1
    },
    {
      "id": 59,
      "nombre": "Mercado de Namdaemun",
      "descripcion": "El mercado más antiguo de Corea, en funcionamiento desde 1414. Más de 10.000 tiendas.",
      "foto": "https://tong.visitkorea.or.kr/cms/resource/67/2612867_image2_1.jpg",
      "ciudadId": 15,
      "categoriaId": 7
    },
    {
      "id": 60,
      "nombre": "Torre N Seúl",
      "descripcion": "Torre de 236 metros en lo alto del monte Namsan con vistas de 360 grados de la ciudad.",
      "foto": "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?w=600&q=80",
      "ciudadId": 15,
      "categoriaId": 1
    },
    {
      "id": 61,
      "nombre": "Templo Haedong Yonggungsa",
      "descripcion": "Uno de los templos budistas más únicos de Corea, construido directamente sobre las rocas del mar en 1376.",
      "foto": "https://images.pexels.com/photos/30940697/pexels-photo-30940697.jpeg",
      "ciudadId": 16,
      "categoriaId": 2
    },
    {
      "id": 62,
      "nombre": "Playa de Haeundae",
      "descripcion": "La playa más famosa de Corea del Sur, 1,5 kilómetros de arena dorada con el moderno skyline al fondo.",
      "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPP5VpKUchGsr3BGTkmektSqebfontrPjjJQ&s",
      "ciudadId": 16,
      "categoriaId": 5
    },
    {
      "id": 63,
      "nombre": "Mercado de Jagalchi",
      "descripcion": "El mayor mercado de pescado de Corea, donde cada mañana los pescadores descargan capturas frescas.",
      "foto": "https://images.pexels.com/photos/32471309/pexels-photo-32471309.jpeg",
      "ciudadId": 16,
      "categoriaId": 7
    },
    {
      "id": 64,
      "nombre": "Aldea Gamcheon",
      "descripcion": "El barrio más colorido de Corea, conocido como el Machu Picchu coreano, con casitas de colores sobre las laderas.",
      "foto": "https://img.freepik.com/fotos-premium/vista-panoramica-aldea-cultural-gamcheon-ubicada-ciudad-busan-corea-sur_73503-1635.jpg",
      "ciudadId": 16,
      "categoriaId": 1
    },
    {
      "id": 65,
      "nombre": "Plaza Jemaa el-Fna",
      "descripcion": "El corazón de Marrakech, declarado Patrimonio Cultural Inmaterial. De noche se convierte en un festival gastronómico.",
      "foto": "https://elarquitectoviajero.com/wp-content/uploads/2014/07/plaza-Jemaa-el-Fna.jpg",
      "ciudadId": 17,
      "categoriaId": 7
    },
    {
      "id": 66,
      "nombre": "Medina de Marrakech",
      "descripcion": "Laberinto medieval declarado Patrimonio de la Humanidad en 1985. Zocos artesanales únicos.",
      "foto": "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1645372985/eusd19nogndvtfkznjtm.jpg",
      "ciudadId": 17,
      "categoriaId": 7
    },
    {
      "id": 67,
      "nombre": "Jardines de la Menara",
      "descripcion": "Oasis de tranquilidad con gran estanque y olivares centenarios. El pabellón reflejado en el agua es icónico.",
      "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUXnLUnSW8j0-39zmmzWKJntLWpc_eFIyAw&s",
      "ciudadId": 17,
      "categoriaId": 4
    },
    {
      "id": 68,
      "nombre": "Palacio Bahía",
      "descripcion": "El palacio más espectacular de Marrakech. Sus jardines de naranjos y techos de cedro tallado son únicos.",
      "foto": "https://www.barcelo.com/guia-turismo/wp-content/uploads/2024/09/ok-palacio-de-la-bahia.jpg",
      "ciudadId": 17,
      "categoriaId": 6
    },
    {
      "id": 69,
      "nombre": "Morocco mall",
      "descripcion": "Uno de los centros comerciales más grandes de África, con tiendas internacionales, restaurantes y actividades de ocio. .",
      "foto": "https://i0.wp.com/www.specialmorocco.com/wp-content/uploads/2025/01/morocco-mall-3-.jpg?fit=1200%2C800&ssl=1",
      "ciudadId": 18,
      "categoriaId": 7
    },
    {
      "id": 70,
      "nombre": "Corniche de Ain Diab",
      "descripcion": "El paseo marítimo más famoso de Casablanca, lleno de playas, cafeterías y restaurantes con vistas al mar..",
      "foto": "https://images.pexels.com/photos/36275164/pexels-photo-36275164.jpeg",
      "ciudadId": 18,
      "categoriaId": 1
    },
    {
      "id": 71,
      "nombre": "Place Mohammed V",
      "descripcion": "La plaza principal de la ciudad, rodeada de edificios históricos y conocida por su ambiente animado y sus fuentes.",
      "foto": "https://images.pexels.com/photos/31027327/pexels-photo-31027327.jpeg",
      "ciudadId": 18,
      "categoriaId": 2
    },
    {
      "id": 72,
      "nombre": "Mezquita Hassan II",
      "descripcion": "Una de las mezquitas más grandes del mundo, famosa por su impresionante arquitectura y su ubicación frente al océano Atlántico..",
      "foto": "https://media.istockphoto.com/id/543475836/es/foto/puesta-de-sol-brillante-de-la-mezquita-hassan-ii.jpg?s=2048x2048&w=is&k=20&c=9tmchp-_0NO_I0ojodzF6j5WBgwJhwsk5DNPz3Gfywg=",
      "ciudadId": 18,
      "categoriaId": 2
    },
    {
      "id": 73,
      "nombre": "Torre CN",
      "descripcion": "Torre de 553 metros, fue la más alta del mundo durante 34 años. El EdgeWalk exterior es la experiencia más extrema de Canadá.",
      "foto": "https://images.pexels.com/photos/29640279/pexels-photo-29640279.jpeg",
      "ciudadId": 19,
      "categoriaId": 1
    },
    {
      "id": 74,
      "nombre": "Cataratas del Niágara",
      "descripcion": "A 90 minutos de Toronto, las cataratas con 168.000 metros cúbicos de agua por segundo crean un espectáculo natural.",
      "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjo8cTElVnLYRjJlWtw-H-m1Xp_A5oiRPBQ&s",
      "ciudadId": 19,
      "categoriaId": 8
    },
    {
      "id": 75,
      "nombre": "Mercado St. Lawrence",
      "descripcion": "Uno de los mejores mercados de alimentos del mundo según National Geographic, en funcionamiento desde 1803.",
      "foto": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&q=80",
      "ciudadId": 19,
      "categoriaId": 7
    },
    {
      "id": 76,
      "nombre": "Barrio Distillery",
      "descripcion": "Antiguo barrio industrial del siglo XIX transformado en el centro de arte y cultura más encantador de Toronto.",
      "foto": "https://images.pexels.com/photos/18325959/pexels-photo-18325959.jpeg",
      "ciudadId": 19,
      "categoriaId": 1
    },
    {
      "id": 77,
      "nombre": "Parque Stanley",
      "descripcion": "Uno de los parques urbanos más grandes de Norteamérica, 405 hectáreas de bosque templado con vistas al Pacífico.",
      "foto": "https://images.musement.com/cover/0079/95/stanleyp-jpg_header-7894856.jpeg?w=1200&h=630&q=95&fit=crop",
      "ciudadId": 20,
      "categoriaId": 4
    },
    {
      "id": 78,
      "nombre": "Barrio de Gastown",
      "descripcion": "El barrio histórico más antiguo de Vancouver con el famoso Reloj de Vapor que emite un silbido cada 15 minutos.",
      "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmR60B-XSEgNU073pb9YUA1OD8TzsmDTrMA&s",
      "ciudadId": 20,
      "categoriaId": 1
    },
    {
      "id": 79,
      "nombre": "Montaña Grouse",
      "descripcion": "Accesible en teleférico en 8 minutos. En verano senderismo, en invierno esquí con vistas nocturnas de la ciudad.",
      "foto": "https://images.pexels.com/photos/1525662/pexels-photo-1525662.jpeg",
      "ciudadId": 20,
      "categoriaId": 8
    },
    {
      "id": 80,
      "nombre": "Mercado Granville Island",
      "descripcion": "El mercado más vibrante de la costa oeste canadiense con productores locales y talleres de artistas.",
      "foto": "https://images.pexels.com/photos/6890290/pexels-photo-6890290.jpeg",
      "ciudadId": 20,
      "categoriaId": 7
    },
    {
      "id": 81,
      "nombre": "Puerta de Brandeburgo",
      "descripcion": "El símbolo más poderoso de Alemania y de la reunificación alemana, un arco neoclásico de 26 metros construido en 1791.",
      "foto": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=80",
      "ciudadId": 21,
      "categoriaId": 1
    },
    {
      "id": 82,
      "nombre": "Muro de Berlín",
      "descripcion": "La East Side Gallery, 1,3 kilómetros de murales en los restos del muro, es la galería de arte al aire libre más larga del mundo.",
      "foto": "https://media.cntraveler.com/photos/5bd0d081a480f70a5952c272/master/pass/East%20Side%20Gallery_CTABWA.jpg",
      "ciudadId": 21,
      "categoriaId": 1
    },
    {
      "id": 83,
      "nombre": "Museo de Pérgamo",
      "descripcion": "Alberga el Altar de Pérgamo del siglo II a.C. y la Puerta de Ishtar de Babilonia. Uno de los museos más visitados de Europa.",
      "foto": "https://images.pexels.com/photos/29038975/pexels-photo-29038975.jpeg",
      "ciudadId": 21,
      "categoriaId": 3
    },
    {
      "id": 84,
      "nombre": "Parque Tiergarten",
      "descripcion": "El pulmón verde de Berlín, 210 hectáreas en el corazón de la ciudad con el Jardín Zoológico más visitado de Europa.",
      "foto": "https://images.pexels.com/photos/18707756/pexels-photo-18707756.jpeg",
      "ciudadId": 21,
      "categoriaId": 4
    },
    {
      "id": 85,
      "nombre": "Marienplatz",
      "descripcion": "La plaza central de Múnich desde 1158. El Nuevo Ayuntamiento con su Glockenspiel de 43 campanas es su joya principal.",
      "foto": "https://images.pexels.com/photos/30944546/pexels-photo-30944546.jpeg",
      "ciudadId": 22,
      "categoriaId": 1
    },
    {
      "id": 86,
      "nombre": "Jardín Inglés",
      "descripcion": "Uno de los parques más grandes del mundo, más grande que el Central Park. Surfistas en el río Eisbach son su imagen más icónica.",
      "foto": "https://images.pexels.com/photos/17401854/pexels-photo-17401854.jpeg",
      "ciudadId": 22,
      "categoriaId": 4
    },
    {
      "id": 87,
      "nombre": "Palacio de Nymphenburg",
      "descripcion": "El palacio de verano de la familia real bávara, una de las residencias barrocas más grandes de Europa.",
      "foto": "https://images.pexels.com/photos/33299600/pexels-photo-33299600.jpeg",
      "ciudadId": 22,
      "categoriaId": 6
    },
    {
      "id": 88,
      "nombre": "Oktoberfest",
      "descripcion": "La fiesta de la cerveza más grande del mundo desde 1810. Millones de personas celebran 16 días de música y tradición bávara.",
      "foto": "https://images.pexels.com/photos/34071574/pexels-photo-34071574.jpeg",
      "ciudadId": 22,
      "categoriaId": 7
    },
    {
      "id": 89,
      "nombre": "Acrópolis de Atenas",
      "descripcion": "El monumento más importante de la civilización occidental coronado por el Partenón. Símbolo eterno de Grecia.",
      "foto": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
      "ciudadId": 23,
      "categoriaId": 1
    },
    {
      "id": 90,
      "nombre": "Museo de la Acrópolis",
      "descripcion": "Uno de los museos arqueológicos más importantes del mundo. Las galerías con suelo de cristal muestran excavaciones.",
      "foto": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=600&q=80",
      "ciudadId": 23,
      "categoriaId": 3
    },
    {
      "id": 91,
      "nombre": "Barrio del Plaka",
      "descripcion": "El barrio más antiguo de Atenas a los pies de la Acrópolis. Callejuelas neoclásicas con buganvillas y tabernas.",
      "foto": "https://images.unsplash.com/photo-1616159056830-5684b83b6fbb?w=600&q=80",
      "ciudadId": 23,
      "categoriaId": 1
    },
    {
      "id": 92,
      "nombre": "Templo de Zeus Olímpico",
      "descripcion": "Las ruinas del templo más grande de la Grecia antigua, tardó 700 años en construirse. Sus columnas de 17 metros impresionan.",
      "foto": "https://images.unsplash.com/photo-1581430872221-d1cfed785922?w=600&q=80",
      "ciudadId": 23,
      "categoriaId": 1
    },
    {
      "id": 93,
      "nombre": "Oia al Atardecer",
      "descripcion": "El pueblo más fotografiado del Mediterráneo. Sus casitas blancas con cúpulas azules sobre el volcán al atardecer son únicas.",
      "foto": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
      "ciudadId": 24,
      "categoriaId": 8
    },
    {
      "id": 94,
      "nombre": "Playa de Perissa",
      "descripcion": "La playa de arena volcánica negra más famosa de Santorini. El contraste entre la arena negra y el mar azul es impresionante.",
      "foto": "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=600&q=80",
      "ciudadId": 24,
      "categoriaId": 5
    },
    {
      "id": 95,
      "nombre": "Fira, la capital",
      "descripcion": "La animada capital de Santorini en el borde de la caldera a 260 metros sobre el mar con vistas incomparables.",
      "foto": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80",
      "ciudadId": 24,
      "categoriaId": 1
    },
    {
      "id": 96,
      "nombre": "Caldera de Santorini",
      "descripcion": "La laguna volcánica más espectacular del Mediterráneo, formada hace 3.600 años. Sus aguas de 400 metros de profundidad.",
      "foto": "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80",
      "ciudadId": 24,
      "categoriaId": 8
    }
  ]
};
