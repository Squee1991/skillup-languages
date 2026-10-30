<template>
  <svg class="mascot" viewBox="0 0 240 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <clipPath id="globe-clip">
        <circle cx="120" cy="140" r="92" />
      </clipPath>
    </defs>
    <ellipse cx="120" cy="252" rx="70" ry="8" fill="#1e1b4b" opacity="0.15" />
    <!-- ножки -->
    <ellipse cx="96" cy="240" rx="20" ry="11" fill="#f97316" stroke="#1e1b4b" stroke-width="5" />
    <ellipse cx="144" cy="240" rx="20" ry="11" fill="#f97316" stroke="#1e1b4b" stroke-width="5" />
    <!-- ручки -->
    <g class="arm-wave">
      <path d="M36 196 C18 190 10 174 14 158" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round" />
      <circle cx="14" cy="150" r="11" fill="#38bdf8" stroke="#1e1b4b" stroke-width="5" />
    </g>
    <path d="M204 196 C220 204 226 216 222 226" stroke="#1e1b4b" stroke-width="6" fill="none" stroke-linecap="round" />
    <circle cx="221" cy="230" r="11" fill="#38bdf8" stroke="#1e1b4b" stroke-width="5" />
    <!-- планета -->
    <circle cx="120" cy="140" r="92" fill="#38bdf8" />
    <g clip-path="url(#globe-clip)" fill="#4ade80" stroke="#1e1b4b" stroke-width="4" stroke-linejoin="round">
      <path d="M40 80 C70 58 112 70 104 96 C98 116 66 122 52 110 C42 102 34 92 40 80 Z" />
      <path d="M150 62 C182 56 214 86 204 112 C196 130 166 122 156 106 C148 92 140 72 150 62 Z" />
      <path d="M140 196 C164 182 196 196 186 220 C176 240 140 238 134 222 C130 210 132 202 140 196 Z" />
      <path d="M34 168 C52 156 78 172 70 194 C62 210 36 206 30 190 C28 180 28 174 34 168 Z" />
    </g>
    <circle cx="120" cy="140" r="92" fill="none" stroke="#1e1b4b" stroke-width="5" />
    <!-- блик -->
    <path d="M62 84 C72 66 90 56 108 52" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7" />
    <!-- наушники -->
    <path d="M36 138 C36 30 204 30 204 138" stroke="#1e1b4b" stroke-width="18" fill="none" stroke-linecap="round" />
    <path d="M36 138 C36 30 204 30 204 138" stroke="#ec4899" stroke-width="9" fill="none" stroke-linecap="round" />
    <rect x="20" y="114" width="30" height="52" rx="13" fill="#ec4899" stroke="#1e1b4b" stroke-width="5" />
    <rect x="190" y="114" width="30" height="52" rx="13" fill="#ec4899" stroke="#1e1b4b" stroke-width="5" />
    <!-- глаза -->
    <circle cx="96" cy="134" r="22" fill="#fff" stroke="#1e1b4b" stroke-width="5" />
    <circle cx="144" cy="134" r="22" fill="#fff" stroke="#1e1b4b" stroke-width="5" />
    <g class="pupils">
      <circle cx="99" cy="137" r="11" fill="#1e1b4b" />
      <circle cx="147" cy="137" r="11" fill="#1e1b4b" />
      <circle cx="103" cy="132" r="4" fill="#fff" />
      <circle cx="151" cy="132" r="4" fill="#fff" />
    </g>
    <!-- улыбка -->
    <path d="M100 168 Q120 196 140 168 Z" fill="#1e1b4b" stroke="#1e1b4b" stroke-width="4" stroke-linejoin="round" />
    <path d="M110 180 Q120 174 130 180 Q126 188 120 188 Q114 188 110 180 Z" fill="#f472b6" />
    <ellipse cx="70" cy="164" rx="11" ry="7" fill="#f472b6" opacity="0.8" />
    <ellipse cx="170" cy="164" rx="11" ry="7" fill="#f472b6" opacity="0.8" />
    <!-- искорки -->
    <path class="spark spark-1" d="M214 40 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z" fill="#fbbf24" stroke="#1e1b4b" stroke-width="3" stroke-linejoin="round" />
    <path class="spark spark-2" d="M26 30 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="#fbbf24" stroke="#1e1b4b" stroke-width="3" stroke-linejoin="round" />
  </svg>
</template>

<style scoped>
.mascot {
  width: 100%;
  height: auto;
  overflow: visible;
}

.arm-wave {
  transform-origin: 36px 196px;
  animation: wave 1.6s ease-in-out infinite;
}

.pupils {
  animation: look 5s ease-in-out infinite;
}

.spark {
  transform-box: fill-box;
  transform-origin: center;
  animation: twinkle 2s ease-in-out infinite;
}

.spark-2 {
  animation-delay: -1s;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(16deg);
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
    transform: translateX(-7px);
  }
}

@keyframes twinkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(0.6) rotate(45deg);
  }
}
</style>
