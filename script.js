// Tailwind Marquee
tailwind.config.theme.extend.keyframes = {
  ...tailwind.config.theme.extend.keyframes,
  marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
};

// Banner Preview
function openBannerPreview() {
  document.getElementById("bannerPreview").classList.remove("hidden");
  document.getElementById("bannerPreview").classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeBannerPreview() {
  document.getElementById("bannerPreview").classList.add("hidden");
  document.getElementById("bannerPreview").classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}

// Jam Operasional
const OPERASIONAL = {
  biasa: { open: "16:00", close: "22:00" },
  kamis: null
};

function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function updateOpenStatus() {
  const now = new Date();
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const badge = document.getElementById("openBadge");
  const badgeText = document.getElementById("badgeText");
  const ping = document.getElementById("ping");
  const dot = document.getElementById("dot");

  let isOpen = false;

  if (day !== 4) {
    const open = timeToMinutes(OPERASIONAL.biasa.open);
    const close = timeToMinutes(OPERASIONAL.biasa.close);
    isOpen = currentMinutes >= open && currentMinutes < close;
  }

  if (isOpen) {
    badge.className =
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-light border border-tropical-mint/20 ";
    badgeText.textContent = "Buka Sekarang";
    badgeText.className =
      "text-tropical-mint text-xs font-bold tracking-widest uppercase";
    ping.className =
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-500 opacity-75";
    dot.className =
      "relative inline-flex rounded-full h-2.5 w-2.5 bg-tropical-mint";
  } else {
    badge.className =
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-light border border-red-500/20 ";
    badgeText.textContent = "Sedang Tutup";
    badgeText.className =
      "text-red-400 text-xs font-bold tracking-widest uppercase";
    ping.className = "hidden";
    dot.className =
      "relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500";
  }
}

updateOpenStatus();
setInterval(updateOpenStatus, 60000);

// Navbar - No scroll effect needed as navbar has permanent background
const navbar = document.getElementById("navbar");


// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !isHidden);
});

// Menu Data
const menus = [
  {
    id: 1,
    name: "Seblak Original",
    category: "Seblak Paket",
    description: "Pentol mekar 2, sosis,  pentol, sayur, telur kocok, kerupuk",
    price: "10K",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    spicy_level: 3,
    is_best_seller: true
  },
  {
    id: 2,
    name: "Seblak Siomay",
    category: "Seblak Paket",
    description: "Siomay 5,  pentol, sayur, telur kocok, kerupuk",
    price: "10K",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    spicy_level: 2,
    is_best_seller: false
  },
  {
    id: 3,
    name: "Seblak Balungan",
    category: "Seblak Paket",
    description: "Krongkongan ayam,  pentol, sayur, telur kocok, kerupuk",
    price: "10K",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    spicy_level: 3,
    is_best_seller: false
  },
  {
    id: 4,
    name: "Seblak Ceker",
    category: "Seblak Paket",
    description: "Ceker kecil 4, pentol,  sayur, telur kocok, kerupuk",
    price: "10K",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    spicy_level: 4,
    is_best_seller: true
  },
  {
    id: 5,
    name: "Seblak Pentol",
    category: "Seblak Paket",
    description: "Pentol 5,  sayur, telur kocok, kerupuk",
    price: "10K",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    spicy_level: 2,
    is_best_seller: false
  },
  {
    id: 6,
    name: "Seblak Prasmanan",
    category: "Seblak Paket",
    description: "Minimal Pembelian 10k Free Sayur bumbu Sambel",
    price: "Start From 10K",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    spicy_level: 5,
    is_best_seller: false
  }
];

const menuGrid = document.getElementById("menu-grid");

menuGrid.innerHTML = menus.map(menu => `
       <article
  class="group relative flex flex-col bg-[#a30300] rounded-xl border border-[#7a0200] overflow-hidden shadow-retro transition-all duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#FEC115] text-[#FEC115]"
  role="listitem"
>
  <div class="aspect-[4/3] w-full bg-[#7a0200] relative overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style="background-image: url('${menu.image}')"
      role="img"
      aria-label="${menu.name} - ${menu.description}"
    ></div>

    ${menu.is_best_seller ? `
      <div class="absolute top-3 left-3 bg-[#FEC115] text-[#a30300] text-xs font-black px-2 py-1 rounded shadow-sm uppercase">
        <i class="fas fa-crown mr-1"></i>Best Seller
      </div>
    ` : ""}
  </div>

  <div class="p-5 flex flex-col flex-1">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-xl font-bold transition-colors group-hover:text-white">
        ${menu.name}
      </h3>

      <div class="flex gap-0.5 text-[#FEC115]" aria-label="Level pedas ${menu.spicy_level}">
        ${Array(menu.spicy_level).fill(`
          <i class="fas fa-fire text-[16px]"></i>
        `).join("")}
      </div>
    </div>

    <p class="text-[#FEC115]/80 text-sm mb-6 line-clamp-2">
      ${menu.description}
    </p>

    <div class="mt-auto flex items-center justify-between">
      <span class="text-[#FEC115] text-2xl font-black tracking-tight">
        ${menu.price}
      </span>
    </div>
  </div>
</article>

      `).join("");

// Toppings
const toppings = [
  { id: 1, name: "Jamur Enoki", price: "5K" },
  { id: 2, name: "Balungan", price: "5K" },
  { id: 3, name: "Telor Ayam", price: "4K" },
  { id: 4, name: "Cuanki", price: "2K" },
  { id: 5, name: "Pilus", price: "2K" },
  { id: 6, name: "Siomay", price: "2K" },
  { id: 7, name: "Kerupuk", price: "2K" },
  { id: 8, name: "Mie Kuning", price: "2K" },
  { id: 9, name: "Ceker Besar", price: "2K" },
  { id: 10, name: "Ceker Kecil", price: "1K" }
];

document.getElementById("topping-list").innerHTML =
  toppings.map(t => `
          <span
            class="px-5 py-3 bg-tropical-mint/10 border-2 border-tropical-mint
                   text-tropical-mint font-black uppercase tracking-widest
                   text-sm rounded-lg flex items-center gap-2"
          >
            <i class="fas fa-plus-circle"></i>
            ${t.name}
            <span class="text-xs text-amber-gold">${t.price}</span>
          </span>
        `).join("");