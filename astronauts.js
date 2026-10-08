const astronautProfiles = [
  {
    name: "يوري غاغارين",
    latin: "Yuri Gagarin",
    image: "gagarin.webp",
    nationality: "الاتحاد السوفيتي / روسيا",
    birth: "9 مارس 1934",
    date: "12 أبريل 1961",
    mission: "فوستوك 1",
    duration: "108 دقائق",
    why: "أول إنسان يدور حول الأرض؛ مهّد لبدء عصر الرحلات البشرية إلى الفضاء.",
    source: "Britannica",
    url: "https://www.britannica.com/biography/Yuri-Gagarin",
  },
  {
    name: "نيل أرمسترونغ",
    latin: "Neil Armstrong",
    image: "armstrong.webp",
    nationality: "الولايات المتحدة الأمريكية",
    birth: "5 أغسطس 1930",
    date: "20 يوليو 1969",
    mission: "أبولو 11",
    duration: "نحو 21 ساعة على سطح القمر",
    why: "قائد أول هبوط بشري على القمر، وأول إنسان تطأ قدماه سطحه.",
    source: "NASA",
    url: "https://www.nasa.gov/people/neil-a-armstrong/",
  },
  {
    name: "سالي رايد",
    latin: "Sally Ride",
    image: "sally-ride.webp",
    nationality: "الولايات المتحدة الأمريكية",
    birth: "26 مايو 1951",
    date: "18 يونيو 1983",
    mission: "STS-7 / تشالنجر",
    duration: "6 أيام و2 ساعة",
    why: "أول امرأة أمريكية تصل إلى الفضاء، وشاركت في نشر قمرين صناعيين وأبحاث علمية.",
    source: "NASA",
    url: "https://www.nasa.gov/people/sally-ride/",
  },
  {
    name: "الأمير سلطان بن سلمان",
    latin: "Sultan bin Salman",
    image: "sultan-bin-salman.webp",
    nationality: "المملكة العربية السعودية",
    birth: "27 يونيو 1956",
    date: "17 يونيو 1985",
    mission: "STS-51-G / ديسكفري",
    duration: "7 أيام و1 ساعة",
    why: "أول رائد فضاء سعودي وعربي ومسلم؛ شارك في مهمة إطلاق أقمار صناعية وتجارب علمية.",
    source: "Saudipedia",
    url: "https://saudipedia.com/en/are-there-saudi-astronauts",
  },
  {
    name: "هزاع المنصوري",
    latin: "Hazzaa Al Mansoori",
    image: "hazzaa-al-mansoori.webp",
    nationality: "الإمارات العربية المتحدة",
    birth: "13 ديسمبر 1983",
    date: "25 سبتمبر 2019",
    mission: "سويوز MS-15 / محطة الفضاء الدولية",
    duration: "8 أيام",
    why: "أول إماراتي يصل إلى الفضاء؛ أجرى تجارب علمية وصوّر الحياة اليومية في المحطة بالعربية.",
    source: "UAE Astronaut Programme",
    url: "https://www.mbrsc.ae/service/uae-astronaut-program/",
  },
  {
    name: "سلطان النيادي",
    latin: "Sultan Al Neyadi",
    image: "sultan-al-neyadi.webp",
    nationality: "الإمارات العربية المتحدة",
    birth: "23 مايو 1981",
    date: "2 مارس 2023",
    mission: "كرو-6 / محطة الفضاء الدولية",
    duration: "نحو 6 أشهر",
    why: "أول عربي يخوض مهمة طويلة في محطة الفضاء الدولية، وشارك في تجارب علمية وسير فضائي.",
    source: "NASA · Crew-6",
    url: "https://www.nasa.gov/mission/crew-6/",
  },
  {
    name: "ريانة برناوي",
    latin: "Rayyanah Barnawi",
    image: "rayyanah-barnawi.webp",
    nationality: "المملكة العربية السعودية",
    birth: "—",
    date: "21 مايو 2023",
    mission: "أكسيوم-2 / محطة الفضاء الدولية",
    duration: "نحو 8 أيام",
    why: "أول امرأة سعودية تصل إلى الفضاء؛ شاركت في أبحاث الخلايا الجذعية والصحة البشرية.",
    source: "Saudi Space Agency",
    url: "https://ssa.gov.sa/en/humanSpaceProgram/?path=/human-space-program/",
  },
  {
    name: "علي القرني",
    latin: "Ali AlQarni",
    image: "ali-alqarni.webp",
    nationality: "المملكة العربية السعودية",
    birth: "—",
    date: "21 مايو 2023",
    mission: "أكسيوم-2 / محطة الفضاء الدولية",
    duration: "نحو 8 أيام",
    why: "رائد فضاء سعودي شارك في مهمة علمية وتجارب تعليمية على متن المحطة الدولية.",
    source: "Axiom Space · Ax-2",
    url: "https://www.axiomspace.com/mission-blog/ax2-ksa-release",
  },
  {
    name: "سارة صبري",
    latin: "Sara Sabry",
    image: "sarah-sabry.webp",
    nationality: "جمهورية مصر العربية",
    birth: "—",
    date: "4 أغسطس 2022",
    mission: "بلو أوريجن NS-22",
    duration: "رحلة شبه مدارية قصيرة",
    why: "أول مصرية تصل إلى الفضاء؛ حملت تجارب علمية ورسالة تشجع الشباب العربي على دراسة الفضاء.",
    source: "Blue Origin · NS-22",
    url: "https://www.blueorigin.com/missions/ns-22",
  },
  {
    name: "سونيتا ويليامز",
    latin: "Sunita Williams",
    image: "sunita-williams.webp",
    nationality: "الولايات المتحدة الأمريكية",
    birth: "19 سبتمبر 1965",
    date: "9 ديسمبر 2006",
    mission: "إكسبيديشن 14/15",
    duration: "195 يومًا في المهمة الأولى",
    why: "رائدة فضاء وقائدة محطة؛ نفذت عدة عمليات سير فضائي وأسهمت في أبحاث طويلة الأمد في المدار.",
    source: "NASA",
    url: "https://www.nasa.gov/people/sunita-l-williams/",
  },
];

function renderAstronauts() {
  const grid = document.querySelector("#astronaut-grid");
  if (!grid) return;
  grid.innerHTML = astronautProfiles
    .map(
      (a, i) =>
        `<article class="astronaut-card"><div class="astronaut-photo"><img src="./assets/astronauts/${a.image}" alt="صورة رائد الفضاء ${a.name}" loading="lazy"><span>${String(i + 1).padStart(2, "0")}</span></div><div class="astronaut-content"><div class="astronaut-name"><div><span class="astronaut-latin">${a.latin}</span><h3>${a.name}</h3></div><span class="astronaut-flag">✦</span></div><div class="astronaut-meta"><span><b>الجنسية</b>${a.nationality}</span><span><b>تاريخ الرحلة</b>${a.date}</span><span><b>المهمة</b>${a.mission}</span><span><b>المدة</b>${a.duration}</span></div><p>${a.why}</p><a class="astronaut-source" href="${a.url}" target="_blank" rel="noreferrer noopener">مصدر البطاقة: ${a.source} ↗</a></div></article>`,
    )
    .join("");
}

function initIntro() {
  const intro = document.querySelector("#intro-screen");
  if (!intro) return;
  document.body.classList.add("intro-lock");
  const close = () => {
    intro.classList.add("is-leaving");
    document.body.classList.remove("intro-lock");
    setTimeout(() => intro.remove(), 650);
  };
  intro.querySelector("[data-skip-intro]")?.addEventListener("click", close);
  window.setTimeout(close, 3600);
}

document.addEventListener("DOMContentLoaded", () => {
  renderAstronauts();
  initIntro();
});
