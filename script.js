const planets = [
  {
    name: "عطارد",
    kind: "كوكب صخري",
    color: "#c5a78b",
    size: 4,
    orbit: 1.15,
    speed: 0.92,
    distance: "0.39 وحدة فلكية",
    year: "88 يومًا",
    radius: "2,440 كم",
    type: "صخري",
    fact: "لا يملك عطارد غلافًا جويًا كثيفًا، وتتسع الفروق بين حرارة نهاره وليله على نحو مذهل.",
    description:
      "أصغر كواكب المجموعة الشمسية وأقربها إلى الشمس. سطحه مليء بالفوهات، ولا يملك قمرًا طبيعيًا.",
    card: "عالم صغير تحفره الفوهات في أقرب مدار للشمس.",
  },
  {
    name: "الزهرة",
    kind: "كوكب صخري",
    color: "#e5be86",
    size: 7,
    orbit: 1.68,
    speed: 0.7,
    distance: "0.72 وحدة فلكية",
    year: "225 يومًا",
    radius: "6,052 كم",
    type: "صخري",
    fact: "غلافه الغني بثاني أكسيد الكربون يجعل الزهرة أشد كواكب المجموعة حرارة، بنحو 465°م.",
    description:
      "عالم شديد السطوع تحجبه سحب كثيفة من حمض الكبريتيك. دورانه بطيء ومعاكس لاتجاه معظم الكواكب.",
    card: "سحب لامعة وحرارة سطح تحطم الأرقام.",
  },
  {
    name: "الأرض",
    kind: "كوكب صخري",
    color: "#64b6d2",
    size: 8,
    orbit: 2.25,
    speed: 0.54,
    distance: "1 وحدة فلكية",
    year: "365.25 يومًا",
    radius: "6,371 كم",
    type: "صخري",
    fact: "كوكبنا هو الوحيد المعروف حتى الآن بوجود حياة على سطحه، ويحمي غلافه الجوي معظم الكائنات من الإشعاع الضار.",
    description:
      "عالم مائي ديناميكي يدور في منطقة تسمح بوجود الماء السائل على السطح. يرافقه قمر طبيعي واحد.",
    card: "عالم أزرق صغير؛ موطننا الوحيد المعروف.",
  },
  {
    name: "المريخ",
    kind: "كوكب صخري",
    color: "#db795d",
    size: 6,
    orbit: 2.88,
    speed: 0.43,
    distance: "1.52 وحدة فلكية",
    year: "687 يومًا",
    radius: "3,390 كم",
    type: "صخري",
    fact: "على المريخ بركان أوليمبوس مونس؛ وهو أكبر بركان معروف في المجموعة الشمسية.",
    description:
      "يُعرف بالكوكب الأحمر بسبب أكاسيد الحديد في تربته. تحفظ تضاريسه آثار أنهار وبحيرات قديمة.",
    card: "كوكب أحمر يحمل آثار مياه من زمن بعيد.",
  },
  {
    name: "المشتري",
    kind: "عملاق غازي",
    color: "#d9a876",
    size: 16,
    orbit: 3.75,
    speed: 0.28,
    distance: "5.20 وحدة فلكية",
    year: "11.86 سنة أرضية",
    radius: "69,911 كم",
    type: "غازي",
    fact: "البقعة الحمراء العظيمة عاصفة هائلة رُصدت منذ قرون، وعلى المشتري عشرات الأقمار، منها أوروبا الجليدي.",
    description:
      "أكبر كواكب المجموعة الشمسية؛ عملاق غازي تحيط به أحزمة من السحب وله نظام واسع من الأقمار.",
    card: "عملاق غازي؛ عالم تهيمن عليه عاصفة هائلة.",
  },
  {
    name: "زحل",
    kind: "عملاق غازي",
    color: "#e0c18b",
    size: 14,
    orbit: 4.65,
    speed: 0.21,
    distance: "9.58 وحدة فلكية",
    year: "29.45 سنة أرضية",
    radius: "58,232 كم",
    type: "غازي",
    fact: "حلقات زحل المذهلة تتكون أساسًا من جليد الماء وشظايا صخرية، وسماكتها صغيرة جدًا مقارنةً بعرضها.",
    description:
      "عملاق غازي مشهور بحلقاته العريضة والمسطحة المكوّنة من مليارات القطع الجليدية والصخرية.",
    card: "حلقات من الجليد والصخر ترسم أجمل مداراته.",
  },
  {
    name: "أورانوس",
    kind: "عملاق جليدي",
    color: "#87cdd4",
    size: 12,
    orbit: 5.55,
    speed: 0.16,
    distance: "19.2 وحدة فلكية",
    year: "84 سنة أرضية",
    radius: "25,362 كم",
    type: "جليدي",
    fact: "يميل محور أورانوس بنحو 98°؛ لذا يبدو كأنه يدور على جانبه، مع فصول تمتد سنوات طويلة.",
    description:
      "عملاق جليدي بعيد يميل على جانبه تقريبًا. يبدو أزرق مخضرًا بسبب الميثان في غلافه الجوي.",
    card: "عملاق جليدي بارد يميل محوره نحو جانبه.",
  },
  {
    name: "نبتون",
    kind: "عملاق جليدي",
    color: "#6587e7",
    size: 12,
    orbit: 6.4,
    speed: 0.13,
    distance: "30.1 وحدة فلكية",
    year: "164.8 سنة أرضية",
    radius: "24,622 كم",
    type: "جليدي",
    fact: "الرياح في الغلاف الجوي لنبتون من الأسرع في المجموعة الشمسية، وقد تتجاوز سرعتها 2,000 كم/ساعة.",
    description:
      "أبعد الكواكب المعروفة عن الشمس، عملاق جليدي أزرق شديد البرودة تشتد فيه الرياح.",
    card: "عالم أزرق بعيد؛ رياحه من الأسرع في المجموعة.",
  },
];
const articles = {
  blackhole: {
    kicker: "ظواهر كونية · الجاذبية",
    title: "الثقوب السوداء",
    lead: "مناطق في الزمكان تنضغط فيها المادة حتى تصبح الجاذبية شديدة، فلا يستطيع الضوء الإفلات بعد حدّ يُسمّى أفق الحدث.",
    paragraphs: [
      "تتشكل الثقوب السوداء النجمية عندما ينهار قلب نجم ضخم بعد نفاد وقوده. وتوجد أيضًا ثقوب فائقة الكتلة في مراكز كثير من المجرات، ومنها مجرتنا درب التبانة.",
      "لا نراها مباشرة؛ لكننا نستدل عليها من تأثير جاذبيتها في الأجرام والغاز المحيط بها، ومن الإشعاع المنبعث من المادة الساخنة قبل أن تعبر أفق الحدث. وهي لا تبتلع الكون من بعيد—فجاذبيتها تتصرف كجاذبية أي جرم له الكتلة نفسها ما دمنا خارج نطاقها.",
    ],
    facts: [
      ["أفق الحدث", "لا يستطيع الضوء الإفلات بعد عبوره هذا الحد."],
      ["القوس A*", "هذا اسم الثقب الأسود فائق الكتلة في مركز درب التبانة."],
      ["كيف نرصده؟", "نستدل عليه من حركة النجوم والغاز ومن ظلّه."],
    ],
  },
  stars: {
    kicker: "مكوّنات الكون · التفاعلات النووية",
    title: "النجوم",
    lead: "كُرات ضخمة من البلازما يشعّ ضوؤها بفعل الاندماج النووي في أعماقها.",
    paragraphs: [
      "تولد النجوم في سحب من الغاز والغبار تنهار بفعل الجاذبية. ومع ازدياد الضغط والحرارة في مركز النجم تبدأ نوى الهيدروجين بالاندماج لتكوين الهيليوم، وتُطلق الطاقة.",
      "تختلف النجوم في كتلتها ولمعانها وحرارتها وأعمارها. وعند نهاية حياة النجم الضخم قد يحدث انفجار مستعر أعظم يبعثر عناصر ثقيلة تكوّنت في داخله إلى الفضاء.",
    ],
    facts: [
      ["أقرب نجم", "الشمس هي أقرب نجم إلى الأرض."],
      ["مصدر الطاقة", "ينتج النجم طاقته من اندماج الهيدروجين إلى هيليوم."],
      ["لون النجم", "يكشف لون النجم عن درجة حرارة سطحه."],
    ],
  },
  galaxies: {
    kicker: "مكوّنات الكون · البنية الكبرى",
    title: "المجرّات",
    lead: "أنظمة هائلة تضم نجومًا وغازًا وغبارًا ومادة مظلمة، ترتبط معًا بالجاذبية.",
    paragraphs: [
      "تأتي المجرات بأشكال مختلفة؛ منها الحلزونية والبيضاوية وغير المنتظمة. وتقع مجموعتنا الشمسية في مجرة درب التبانة، وهي مجرة حلزونية يتجاوز قطر قرصها مئة ألف سنة ضوئية تقريبًا.",
      "تتفاعل المجرات وتندمج عبر مليارات السنين. مجرة المرأة المسلسلة، أقرب مجرة كبيرة إلى درب التبانة، تتحرك نحوها، ويتوقع أن تندمجا بعد عدة مليارات من السنين.",
    ],
    facts: [
      ["موطننا", "تقع مجموعتنا الشمسية في مجرة درب التبانة."],
      ["السنة الضوئية", "هي وحدة مسافة تقيس ما يقطعه الضوء خلال سنة."],
      ["جارنا الكبير", "المرأة المسلسلة أقرب مجرة كبيرة إلى درب التبانة."],
    ],
  },
  moons: {
    kicker: "عوالم قريبة · الأقمار الطبيعية",
    title: "الأقمار",
    lead: "أجرام تدور حول الكواكب، وبعضها يملك محيطات تحت سطحه أو غلافًا جويًا نشطًا.",
    paragraphs: [
      "قمر الأرض يؤثر في المد والجزر ويساعد على استقرار ميل محور الكوكب. أما في النظام الشمسي الخارجي، فتخبئ أقمار مثل أوروبا وإنسيلادوس محيطات محتملة تحت قشور جليدية.",
      "قمر تيتان، أحد أقمار زحل، له غلاف جوي كثيف وبحيرات وأنهار من الهيدروكربونات السائلة على سطحه البارد. الأقمار عالم متنوع وليس مجرد توابع صامتة.",
    ],
    facts: [
      ["آيو", "يمتاز بنشاط بركاني هو الأشد في المجموعة الشمسية."],
      ["أوروبا", "قد يخفي محيطًا مائيًا تحت قشرته الجليدية."],
      ["تيتان", "يحيط به غلاف جوي كثيف، وعلى سطحه بحيرات من الميثان."],
    ],
  },
  smallbodies: {
    kicker: "بقايا التكوين · الصخور والجليد",
    title: "الكويكبات والمذنبات",
    lead: "أجسام صغيرة تحفظ بقايا من المواد التي تشكّل منها النظام الشمسي قبل نحو 4.6 مليارات سنة.",
    paragraphs: [
      "الكويكبات أجسام صخرية أو معدنية، تتركز أعداد كبيرة منها في الحزام الواقع بين المريخ والمشتري. والمذنبات أجسام غنية بالجليد والغبار؛ حين تقترب من الشمس تسخن مادتها وتكوّن هالة وذيلاً قد يمتد ملايين الكيلومترات.",
      "أما الشهب فهي الوميض الذي ينتج عن احتراق جسيمات صغيرة عند دخولها الغلاف الجوي، وتُعرف بقاياها التي تصل إلى الأرض باسم النيازك.",
    ],
    facts: [
      [
        "الكويكبات",
        "أجسام صخرية أو معدنية، ويقع كثير منها بين المريخ والمشتري.",
      ],
      ["المذنبات", "تسخن قرب الشمس، فيظهر حولها ذيل من الغاز والغبار."],
      ["الشهب", "وميض ينتج عن احتراق جسم صغير في الغلاف الجوي."],
    ],
  },
  "cosmic-events": {
    kicker: "ظواهر كونية · مشهد متغيّر",
    title: "الظواهر الكونية",
    lead: "الكون مسرح لعمليات مذهلة تمتد من كوكبنا إلى أقاصي الزمكان.",
    paragraphs: [
      "الشفق القطبي يحدث عندما تتفاعل جسيمات مشحونة من الرياح الشمسية مع الغلاف المغناطيسي والجوي للأرض، فيضيء السماء قرب القطبين. والكسوف والخسوف محاذاة هندسية طبيعية بين الشمس والأرض والقمر.",
      "على المقاييس الأوسع، يحوّل المستعر الأعظم العناصرَ إلى الفضاء، وتتموّج موجات الجاذبية عند تسارع كتل هائلة مثل اندماج ثقبين أسودين. كل ظاهرة نافذة إلى قانون فيزيائي أعمق.",
    ],
    facts: [
      [
        "الشفق القطبي",
        "ينشأ عندما تتفاعل جسيمات الرياح الشمسية مع الغلاف الجوي للأرض.",
      ],
      ["المستعر الأعظم", "انفجار نجمي يبعثر عناصر ثقيلة إلى الفضاء."],
      ["موجات الجاذبية", "تموّجات في الزمكان تنتج عن حركة أجسام هائلة."],
    ],
  },
};
const allBodies = [
  ...planets.map((p, i) => ({
    name: p.name,
    kind: p.kind,
    type: "planet",
    index: i,
  })),
  { name: "الشمس", kind: "نجم", type: "topic", article: "stars" },
  { name: "القمر", kind: "قمر طبيعي", type: "topic", article: "moons" },
  { name: "درب التبانة", kind: "مجرة", type: "topic", article: "galaxies" },
  {
    name: "ثقب أسود",
    kind: "ظاهرة كونية",
    type: "topic",
    article: "blackhole",
  },
  { name: "مذنب", kind: "جرم صغير", type: "topic", article: "smallbodies" },
  {
    name: "مستعر أعظم",
    kind: "ظاهرة كونية",
    type: "topic",
    article: "cosmic-events",
  },
];
const query = (selector, root = document) => root.querySelector(selector);
const queryAll = (selector, root = document) => [
  ...root.querySelectorAll(selector),
];
let selectedIndex = 2,
  running = true,
  orbitsVisible = true,
  labelsVisible = true,
  zoom = 1,
  speed = 1,
  elapsed = 0,
  previous = 0,
  camera = { x: 0, y: 0 },
  drag = null,
  hovered = -1;
const canvas = query("#solar-canvas"),
  ctx = canvas.getContext("2d"),
  wrap = query("#canvas-wrap");
let width = 0,
  height = 0,
  dpr = 1,
  starField = [];
function updatePlanetInfo(index) {
  selectedIndex = (index + planets.length) % planets.length;
  const p = planets[selectedIndex];
  query("#body-index").textContent =
    `${String(selectedIndex + 1).padStart(2, "0")} / 08`;
  query("#body-kind").textContent = p.kind;
  query("#body-name").textContent = p.name;
  query("#body-description").textContent = p.description;
  query("#body-distance").textContent = p.distance;
  query("#body-year").textContent = p.year;
  query("#body-fact").textContent = p.fact;
  query("#selected-orb").style.setProperty("--planet-color", p.color);
  queryAll(".planet-chip").forEach((b, i) => {
    b.classList.toggle("selected", i === selectedIndex);
    b.setAttribute("aria-pressed", String(i === selectedIndex));
  });
  queryAll(".planet-card").forEach((b, i) =>
    b.classList.toggle("is-selected", i === selectedIndex),
  );
}
function renderPlanets() {
  const selector = query("#planet-selector"),
    cards = query("#planet-cards");
  selector.innerHTML = "";
  cards.innerHTML = "";
  planets.forEach((p, i) => {
    const chip = document.createElement("button");
    chip.className = "planet-chip";
    chip.type = "button";
    chip.title = p.name;
    chip.setAttribute("aria-label", `عرض معلومات ${p.name}`);
    chip.setAttribute("aria-pressed", "false");
    chip.style.setProperty("--planet-color", p.color);
    chip.innerHTML = "<span></span>";
    chip.addEventListener("click", () => updatePlanetInfo(i));
    selector.append(chip);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "planet-card";
    card.style.setProperty("--planet-color", p.color);
    card.setAttribute(
      "aria-label",
      `${p.name}: ${p.kind}. ${p.card} اختيار في المحاكي`,
    );
    card.innerHTML = `<span class="planet-card-top"><span>${String(i + 1).padStart(2, "0")} / كوكب ${p.type === "غازي" || p.type === "جليدي" ? "عملاق" : "داخلي"}</span><span class="planet-card-arrow">↙</span></span><span class="planet-visual"><i class="planet-sphere ${p.name === "زحل" ? "ring" : ""}"></i></span><h3>${p.name}</h3><span class="planet-type">${p.kind} · ${p.distance}</span><p class="planet-card-fact">${p.card}</p>`;
    card.addEventListener("click", () => {
      updatePlanetInfo(i);
      document
        .querySelector("#simulator")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
    cards.append(card);
  });
  updatePlanetInfo(selectedIndex);
}
function resizeCanvas() {
  const rect = wrap.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = rect.width;
  height = rect.height;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  starField = [];
  const starCount = Math.round((width * height) / 5200);
  for (let i = 0; i < starCount; i += 1) {
    starField.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.35 + Math.random() * 1.05,
      a: 0.3 + Math.random() * 0.52,
      phase: Math.random() * Math.PI * 2,
    });
  }
  drawScene();
}
function orbitRadius(factor) {
  const max = 6.4;
  const base = Math.min((width * 0.46) / max, (height * 0.43) / max);
  return base * factor * zoom;
}
function getBodyPosition(index) {
  const p = planets[index];
  const angle = p.speed * elapsed * 0.14 + index * 1.03;
  const r = orbitRadius(p.orbit);
  return {
    x: width * 0.51 + camera.x + Math.cos(angle) * r,
    y: height * 0.51 + camera.y + Math.sin(angle) * r * 0.54,
  };
}
function drawOrbit(cx, cy, r) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, r, r * 0.54, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(190,207,245,.15)";
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 6]);
  ctx.stroke();
  ctx.setLineDash([]);
}
function drawScene(now = performance.now()) {
  ctx.clearRect(0, 0, width, height);
  for (const s of starField) {
    const twinkle = (Math.sin(now * 0.001 + s.phase) + 1) * 0.09;
    ctx.globalAlpha = Math.min(1, s.a + twinkle);
    ctx.fillStyle = "#c5d5f7";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  const cx = width * 0.51 + camera.x,
    cy = height * 0.51 + camera.y;
  const sunR = Math.max(13, Math.min(20, width * 0.024)) * Math.min(zoom, 1.5);
  if (orbitsVisible) {
    for (const p of planets) drawOrbit(cx, cy, orbitRadius(p.orbit));
  }
  const sunGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, sunR * 3.3);
  sunGlow.addColorStop(0, "rgba(255,223,141,.30)");
  sunGlow.addColorStop(0.32, "rgba(250,174,89,.12)");
  sunGlow.addColorStop(1, "rgba(255,159,79,0)");
  ctx.fillStyle = sunGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, sunR * 3.3, 0, Math.PI * 2);
  ctx.fill();
  const sg = ctx.createRadialGradient(
    cx - sunR * 0.3,
    cy - sunR * 0.35,
    1,
    cx,
    cy,
    sunR,
  );
  sg.addColorStop(0, "#fff4cd");
  sg.addColorStop(0.42, "#ffd779");
  sg.addColorStop(1, "#e4853c");
  ctx.fillStyle = sg;
  ctx.beginPath();
  ctx.arc(cx, cy, sunR, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  if (labelsVisible) {
    ctx.font = "9px Cairo, sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#d9c38d";
    ctx.fillText("الشمس", cx, cy + sunR + 16);
  }
  const positions = [];
  planets.forEach((p, i) => {
    const pos = getBodyPosition(i);
    positions.push(pos);
    const r =
      Math.max(3.1, p.size * (width < 520 ? 0.43 : 0.46)) *
      Math.sqrt(Math.max(0.65, zoom));
    if (i === selectedIndex) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r + 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(160,234,220,.55)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    if (i === hovered) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r + 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(248,248,255,.5)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    const g = ctx.createRadialGradient(
      pos.x - r * 0.36,
      pos.y - r * 0.42,
      1,
      pos.x,
      pos.y,
      r * 1.3,
    );
    g.addColorStop(0, "#ffffff");
    g.addColorStop(0.12, lighten(p.color));
    g.addColorStop(0.63, p.color);
    g.addColorStop(1, darken(p.color));
    ctx.fillStyle = g;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = i === selectedIndex ? 15 : 7;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    if (i === 5) {
      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(-0.27);
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.9, r * 0.62, 0, Math.PI, Math.PI * 2);
      ctx.strokeStyle = "#e4c795";
      ctx.lineWidth = Math.max(1.5, r * 0.19);
      ctx.stroke();
      ctx.globalCompositeOperation = "destination-over";
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.9, r * 0.62, 0, 0, Math.PI);
      ctx.strokeStyle = "#af9165";
      ctx.lineWidth = Math.max(1.1, r * 0.12);
      ctx.stroke();
      ctx.restore();
    }
    if (labelsVisible) {
      ctx.textAlign = "center";
      ctx.font = `${i === selectedIndex ? "600 " : ""}9px Cairo, sans-serif`;
      ctx.fillStyle = i === selectedIndex ? "#c8f4e9" : "#a5aec0";
      ctx.fillText(p.name, pos.x, pos.y - r - 9);
    }
  });
  ctx.globalAlpha = 1;
  return positions;
}
function lighten(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  return `rgb(${Math.min(255, r + 50)},${Math.min(255, g + 50)},${Math.min(255, b + 50)})`;
}
function darken(hex) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.round(v * 0.48);
  return `rgb(${f((n >> 16) & 255)},${f((n >> 8) & 255)},${f(n & 255)})`;
}
function frame(now) {
  const dt = Math.min((now - previous) / 1000, 0.06);
  previous = now;
  if (running) elapsed += dt * speed;
  drawScene(now);
  requestAnimationFrame(frame);
}
renderPlanets();
resizeCanvas();
new ResizeObserver(resizeCanvas).observe(wrap);
requestAnimationFrame(frame);
query("#play-toggle").addEventListener("click", () => {
  running = !running;
  query("#play-symbol").textContent = running ? "Ⅱ" : "▶";
  query("#play-label").textContent = running ? "إيقاف" : "تشغيل";
  query("#play-toggle").setAttribute(
    "aria-label",
    running ? "إيقاف الحركة" : "استئناف الحركة",
  );
});
query("#speed-control").addEventListener("input", (e) => {
  speed = [0, 0.25, 0.65, 1, 1.8][Number(e.target.value)];
  query("#speed-label").textContent =
    `×${speed === 0.25 ? "¼" : speed === 0.65 ? "½" : speed}`;
});
query("#toggle-orbits").addEventListener("click", (e) => {
  orbitsVisible = !orbitsVisible;
  e.currentTarget.setAttribute("aria-pressed", String(orbitsVisible));
});
query("#toggle-labels").addEventListener("click", (e) => {
  labelsVisible = !labelsVisible;
  e.currentTarget.setAttribute("aria-pressed", String(labelsVisible));
});
function setZoom(value) {
  zoom = Math.min(1.8, Math.max(0.58, value));
  query("#zoom-readout").textContent = `${Math.round(zoom * 100)}%`;
}
query("#zoom-in").addEventListener("click", () => setZoom(zoom + 0.12));
query("#zoom-out").addEventListener("click", () => setZoom(zoom - 0.12));
query("#reset-view").addEventListener("click", () => {
  camera = { x: 0, y: 0 };
  setZoom(1);
  elapsed = 0;
  running = true;
  query("#play-symbol").textContent = "Ⅱ";
  query("#play-label").textContent = "إيقاف";
  query("#play-toggle").setAttribute("aria-label", "إيقاف الحركة");
});
wrap.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    setZoom(zoom + (e.deltaY < 0 ? 0.06 : -0.06));
  },
  { passive: false },
);
function pointerPosition(e) {
  const r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}
canvas.addEventListener("pointerdown", (e) => {
  const p = pointerPosition(e);
  drag = { x: p.x, y: p.y, cx: camera.x, cy: camera.y, moved: false };
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener("pointermove", (e) => {
  const p = pointerPosition(e);
  if (drag) {
    const dx = p.x - drag.x,
      dy = p.y - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
    camera.x = drag.cx + dx;
    camera.y = drag.cy + dy;
  } else {
    const hit = bodyAt(p);
    hovered = hit;
    canvas.style.cursor = hit > -1 ? "pointer" : "grab";
  }
});
canvas.addEventListener("pointerup", (e) => {
  if (!drag) return;
  const p = pointerPosition(e);
  if (!drag.moved) {
    const hit = bodyAt(p);
    if (hit > -1) updatePlanetInfo(hit);
  }
  drag = null;
});
canvas.addEventListener("pointercancel", () => (drag = null));
canvas.addEventListener("dblclick", () => {
  camera = { x: 0, y: 0 };
  setZoom(1);
});
function bodyAt(p) {
  const cx = width * 0.51 + camera.x,
    cy = height * 0.51 + camera.y,
    sr = Math.max(13, Math.min(20, width * 0.024)) * Math.min(zoom, 1.5);
  if (Math.hypot(p.x - cx, p.y - cy) < sr + 8) {
    return -2;
  }
  for (let i = planets.length - 1; i >= 0; i--) {
    const q = getBodyPosition(i);
    const r =
      Math.max(3.1, planets[i].size * (width < 520 ? 0.43 : 0.46)) *
      Math.sqrt(Math.max(0.65, zoom));
    if (Math.hypot(p.x - q.x, p.y - q.y) < Math.max(r + 8, 12)) return i;
  }
  return -1;
}
const dialog = query("#detail-dialog");
function openArticle(key) {
  const a = articles[key];
  if (!a) return;
  query("#dialog-kicker").textContent = a.kicker;
  query("#dialog-title").textContent = a.title;
  query("#dialog-lead").textContent = a.lead;
  query("#dialog-body").innerHTML = a.paragraphs
    .map((x) => `<p>${x}</p>`)
    .join("");
  query("#dialog-facts").innerHTML = a.facts
    .map(
      ([label, value]) =>
        `<span class="dialog-fact">${label}<strong>${value}</strong></span>`,
    )
    .join("");
  dialog.showModal();
}
queryAll("[data-open]").forEach((button) =>
  button.addEventListener("click", () => openArticle(button.dataset.open)),
);
query("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
function openEntity(name) {
  const item = allBodies.find((x) => x.name === name);
  if (!item) return;
  if (item.type === "planet") {
    updatePlanetInfo(item.index);
    document
      .querySelector("#simulator")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  } else openArticle(item.article);
}
const search = query("#site-search"),
  results = query("#search-results");
function performSearch(q) {
  results.innerHTML = "";
  if (!q.trim()) {
    results.classList.remove("open");
    return;
  }
  const query = q.trim();
  const matches = allBodies
    .filter((x) => {
      const article = x.article ? articles[x.article] : null;
      const terms = [
        x.name,
        x.kind,
        ...(article
          ? [article.title, article.kicker, article.lead, ...article.paragraphs]
          : []),
      ];
      if (x.type === "planet") {
        const p = planets[x.index];
        terms.push(p.description, p.fact, p.distance);
      }
      return terms.some((term) => term.includes(query));
    })
    .slice(0, 7);
  results.classList.add("open");
  if (!matches.length) {
    results.innerHTML =
      '<div class="no-results">لم نعثر على نتيجة—جرّب كلمة أخرى.</div>';
    return;
  }
  matches.forEach((x) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "search-result";
    b.setAttribute("role", "option");
    b.innerHTML = `<strong>${x.type === "topic" ? articles[x.article].title : x.name}</strong><small>${x.kind}</small>`;
    b.addEventListener("click", () => {
      results.classList.remove("open");
      search.value = "";
      openEntity(x.name);
    });
    results.append(b);
  });
}
search.addEventListener("input", (e) => performSearch(e.target.value));
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const first = query(".search-result", results);
    if (first) first.click();
  }
  if (e.key === "Escape") results.classList.remove("open");
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap")) results.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    search.focus();
  }
});
const menu = query("#menu-toggle");
menu.addEventListener("click", () => {
  const open = query(".main-nav").classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
});
queryAll(".nav-link").forEach((a) =>
  a.addEventListener("click", () => {
    query(".main-nav").classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
