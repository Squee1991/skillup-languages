<template>
  <svg class="mascot" viewBox="0 0 240 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="120" cy="250" rx="80" ry="8" fill="#1e1b4b" opacity="0.15" />
    <!-- кольца -->
    <ellipse cx="120" cy="226" rx="88" ry="22" fill="#22c55e" stroke="#1e1b4b" stroke-width="5" />
    <ellipse cx="120" cy="204" rx="70" ry="20" fill="#22c55e" stroke="#1e1b4b" stroke-width="5" />
    <circle cx="70" cy="226" r="6" fill="#15803d" />
    <circle cx="170" cy="228" r="6" fill="#15803d" />
    <circle cx="150" cy="204" r="5" fill="#15803d" />
    <circle cx="86" cy="206" r="5" fill="#15803d" />
    <!-- шея -->
    <path d="M98 188 C92 162 100 148 108 140 L136 140 C146 150 148 168 142 188 Z" fill="#22c55e" stroke="#1e1b4b" stroke-width="5" />
    <path d="M110 186 C108 168 112 156 118 150 L126 150 C132 158 134 170 130 186 Z" fill="#bbf7d0" />
    <ellipse cx="120" cy="186" rx="52" ry="17" fill="#22c55e" stroke="#1e1b4b" stroke-width="5" />
    <circle cx="96" cy="184" r="5" fill="#15803d" />
    <circle cx="146" cy="186" r="5" fill="#15803d" />
    <!-- язычок -->
    <path class="tongue" d="M120 146 L120 166 M120 166 l-7 9 M120 166 l7 9" stroke="#ef4444" stroke-width="4" stroke-linecap="round" fill="none" />
    <!-- голова -->
    <ellipse cx="120" cy="118" rx="62" ry="44" fill="#22c55e" stroke="#1e1b4b" stroke-width="5" />
    <circle cx="80" cy="132" r="4" fill="#15803d" />
    <circle cx="162" cy="130" r="4" fill="#15803d" />
    <!-- глаза -->
    <circle cx="98" cy="106" r="17" fill="#fff" stroke="#1e1b4b" stroke-width="4" />
    <circle cx="142" cy="106" r="17" fill="#fff" stroke="#1e1b4b" stroke-width="4" />
    <g class="pupils">
      <circle cx="101" cy="108" r="8" fill="#1e1b4b" />
      <circle cx="145" cy="108" r="8" fill="#1e1b4b" />
      <circle cx="104" cy="104" r="3" fill="#fff" />
      <circle cx="148" cy="104" r="3" fill="#fff" />
    </g>
    <circle cx="112" cy="128" r="2.5" fill="#1e1b4b" />
    <circle cx="128" cy="128" r="2.5" fill="#1e1b4b" />
    <path d="M100 136 q20 14 40 0" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" />
    <ellipse cx="76" cy="122" rx="10" ry="6" fill="#f472b6" opacity="0.7" />
    <ellipse cx="164" cy="122" rx="10" ry="6" fill="#f472b6" opacity="0.7" />
    <!-- сомбреро -->
    <g class="sombrero" transform="translate(0 -24) rotate(-8 120 80)">
      <ellipse cx="120" cy="82" rx="100" ry="20" fill="#f59e0b" stroke="#1e1b4b" stroke-width="5" />
      <ellipse cx="120" cy="82" rx="84" ry="13" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="8 6" />
      <path d="M86 82 C88 42 104 22 120 22 C136 22 152 42 154 82 Z" fill="#fbbf24" stroke="#1e1b4b" stroke-width="5" stroke-linejoin="round" />
      <polyline points="89,66 97,58 105,66 113,58 121,66 129,58 137,66 145,58 151,66" fill="none" stroke="#ef4444" stroke-width="4" stroke-linejoin="round" />
      <circle cx="105" cy="44" r="3" fill="#22c55e" />
      <circle cx="135" cy="44" r="3" fill="#22c55e" />
    </g>
  </svg>
</template>

<style scoped>
.mascot {
  width: 100%;
  height: auto;
  overflow: visible;
}

.tongue {
  transform-origin: 120px 146px;
  animation: flick 2.2s ease-in-out infinite;
}

.sombrero {
  animation: tip 3s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center bottom;
}

@keyframes flick {
  0%,
  60%,
  100% {
    transform: scaleY(0);
  }
  70%,
  85% {
    transform: scaleY(1);
  }
}

@keyframes tip {
  0%,
  100% {
    rotate: 0deg;
  }
  50% {
    rotate: 5deg;
  }
}
</style>
