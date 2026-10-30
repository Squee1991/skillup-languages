<template>
  <svg class="owl" viewBox="0 0 240 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <!-- тень -->
    <ellipse cx="120" cy="248" rx="70" ry="9" fill="#1e1b4b" opacity="0.15" />
    <!-- ушки -->
    <path d="M58 70 L46 22 L92 52 Z" fill="#7c3aed" stroke="#1e1b4b" stroke-width="5" stroke-linejoin="round" />
    <path d="M182 70 L194 22 L148 52 Z" fill="#7c3aed" stroke="#1e1b4b" stroke-width="5" stroke-linejoin="round" />
    <!-- тело -->
    <path
      d="M120 40 C190 40 205 100 205 150 C205 210 170 238 120 238 C70 238 35 210 35 150 C35 100 50 40 120 40 Z"
      fill="#8b5cf6"
      stroke="#1e1b4b"
      stroke-width="5"
    />
    <!-- животик -->
    <path d="M120 130 C160 130 172 170 168 198 C162 226 140 232 120 232 C100 232 78 226 72 198 C68 170 80 130 120 130 Z" fill="#fde68a" stroke="#1e1b4b" stroke-width="4" />
    <path d="M100 170 q8 8 16 0 M124 170 q8 8 16 0 M110 196 q8 8 16 0" stroke="#f59e0b" stroke-width="4" fill="none" stroke-linecap="round" />
    <!-- крылья -->
    <path class="wing-l" d="M40 140 C10 150 12 190 42 200" fill="#6d28d9" stroke="#1e1b4b" stroke-width="5" stroke-linecap="round" />
    <path class="wing-r" d="M200 140 C232 120 236 92 222 80" fill="none" stroke="#1e1b4b" stroke-width="5" stroke-linecap="round" />
    <path class="wing-r" d="M200 140 C232 120 236 92 222 80 C212 100 205 110 198 118 Z" fill="#6d28d9" />
    <!-- глаза -->
    <circle cx="90" cy="100" r="30" fill="#fff" stroke="#1e1b4b" stroke-width="5" />
    <circle cx="150" cy="100" r="30" fill="#fff" stroke="#1e1b4b" stroke-width="5" />
    <g class="pupils">
      <circle cx="95" cy="102" r="13" fill="#1e1b4b" />
      <circle cx="155" cy="102" r="13" fill="#1e1b4b" />
      <circle cx="100" cy="96" r="5" fill="#fff" />
      <circle cx="160" cy="96" r="5" fill="#fff" />
    </g>
    <!-- клюв -->
    <path d="M110 124 L130 124 L120 142 Z" fill="#f97316" stroke="#1e1b4b" stroke-width="4" stroke-linejoin="round" />
    <!-- щёчки -->
    <ellipse cx="66" cy="134" rx="11" ry="7" fill="#f472b6" opacity="0.7" />
    <ellipse cx="174" cy="134" rx="11" ry="7" fill="#f472b6" opacity="0.7" />
    <!-- шапочка выпускника -->
    <g transform="rotate(-10 120 40)">
      <path d="M70 34 L120 14 L170 34 L120 54 Z" fill="#1e1b4b" />
      <rect x="96" y="38" width="48" height="16" rx="4" fill="#1e1b4b" />
      <path d="M170 34 L170 62" stroke="#fbbf24" stroke-width="4" />
      <circle cx="170" cy="66" r="6" fill="#fbbf24" stroke="#1e1b4b" stroke-width="3" />
    </g>
  </svg>
</template>

<style scoped>
.owl {
  width: 100%;
  height: auto;
  overflow: visible;
}

.wing-r {
  transform-origin: 200px 140px;
  animation: wave 1.6s ease-in-out infinite;
}

.pupils {
  animation: look 5s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-18deg);
  }
}

@keyframes look {
  0%,
  40%,
  100% {
    transform: translateX(0);
  }
  50%,
  70% {
    transform: translateX(-8px);
  }
}
</style>
