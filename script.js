// Tailwind Marquee
tailwind.config.theme.extend.keyframes = {
  ...tailwind.config.theme.extend.keyframes,
  marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
};

// Navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add(
      "bg-black/60",
      "backdrop-blur-xl",
      "border-b",
      "border-white/10",
      "shadow-lg"
    );
  } else {
    navbar.classList.remove(
      "bg-black/60",
      "backdrop-blur-xl",
      "border-b",
      "border-white/10",
      "shadow-lg"
    );
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Menu 
const menus = [
  {
    "id": 1,
    "name": "Seblak Original",
    "category": "Seblak Paket",
    "description": "Pentol mekar 2, sosis, cireng, pentol, sayur, telur kocok, kerupuk",
    "price": "10K",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    "spicy_level": 3,
    "is_best_seller": true
  },
  {
    "id": 2,
    "name": "Seblak Siomay",
    "category": "Seblak Paket",
    "description": "Siomay 5, cireng, pentol, sayur, telur kocok, kerupuk",
    "price": "10K",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    "spicy_level": 2,
    "is_best_seller": false
  },
  {
    "id": 3,
    "name": "Seblak Balungan",
    "category": "Seblak Paket",
    "description": "Krongkongan ayam, cireng, pentol, sayur, telur kocok, kerupuk",
    "price": "10K",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    "spicy_level": 3,
    "is_best_seller": false
  },
  {
    "id": 4,
    "name": "Seblak Ceker",
    "category": "Seblak Paket",
    "description": "Ceker kecil 4, pentol, cireng, sayur, telur kocok, kerupuk",
    "price": "10K",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    "spicy_level": 4,
    "is_best_seller": true
  },
  {
    "id": 5,
    "name": "Seblak Pentol",
    "category": "Seblak Paket",
    "description": "Pentol 5, cireng, sayur, telur kocok, kerupuk",
    "price": "10K",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zBho658brr2aVN_B7SsWYjuY0zn0sw8VvDq6joPxQYy_MGsG4oQDBkP7-6Tqoci9zpTr-cit8THNXm5FfasBD9LrbuIjr3WwQXFa1uD1QeRnY3xJsV7Km8ypnWOlk0-Ugwd4C6K30QxmDgvf_4Mwns7ORH3SAllV3rF8e1G6t3f1-mamcNNNkhrX6gJbk4MRSV-kNE0EkYM8AYBkWOvBzt9q8cQM6y9cPMRZe4BXLvxaE-U3P4vuQyP2VvNyi3HuVNNlN5xntg",
    "spicy_level": 2,
    "is_best_seller": false
  }
]
  ;

const menuGrid = document.getElementById("menu-grid");

menuGrid.innerHTML = menus.map(menu => `
  <div
    class="group relative flex flex-col bg-[#161616] rounded-xl border border-[#333] overflow-hidden shadow-retro transition-all duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#a30300]"
  >
    <div class="aspect-[4/3] w-full bg-gray-800 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style="background-image: url('${menu.image}')"
        data-alt="${menu.name}"
      ></div>

      ${menu.is_best_seller ? `
        <div class="absolute top-3 left-3 bg-primary text-white text-xs font-black px-2 py-1 rounded shadow-sm uppercase">
          Best Seller
        </div>
      ` : ""}
    </div>

    <div class="p-5 flex flex-col flex-1">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">
          ${menu.name}
        </h3>

        <div class="flex gap-0.5 text-primary">
          ${Array(menu.spicy_level).fill(`
            <span class="material-symbols-outlined text-[16px] filled">
              local_fire_department
            </span>
          `).join("")}
        </div>
      </div>

      <p class="text-gray-400 text-sm mb-6 line-clamp-2">
        ${menu.description}
      </p>

      <div class="mt-auto flex items-center justify-between">
        <span class="text-accent-gold text-2xl font-black tracking-tight">
          ${menu.price}
        </span>
      </div>
    </div>
  </div>
`).join("");

// Toppings
const toppings = [
  { id: 1, name: "Jamur Enoki", price: "6K" },
  { id: 2, name: "Balungan", price: "4K" },
  { id: 3, name: "Telor Ayam", price: "4K" },
  { id: 4, name: "Cuanki", price: "2K" },
  { id: 5, name: "Pilus", price: "2K" },
  { id: 6, name: "Siomay", price: "2K" },
  { id: 7, name: "Kerupuk", price: "2K" },
  { id: 8, name: "Mie Kuning", price: "2K" },
  { id: 9, name: "Ceker Besar", price: "2K" },
  { id: 10, name: "Ceker Kecil", price: "1K" },
  { id: 11, name: "Cireng (5 biji)", price: "1K" }
];

document.getElementById("topping-list").innerHTML =
  toppings.map(t => `
    <span
      class="px-5 py-3 bg-tropical-mint/10 border-2 border-tropical-mint
             text-tropical-mint font-black uppercase tracking-widest
             text-sm rounded-lg flex items-center gap-2"
    >
      ${t.name}
      <span class="text-xs text-amber-gold">${t.price}</span>
    </span>
  `).join("");