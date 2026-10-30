<template>
  <svg class="mascot" viewBox="0 0 240 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="120" cy="250" rx="72" ry="8" fill="#1e1b4b" opacity="0.15" />
    <!-- хвост -->
    <g class="tail">
      <ellipse cx="190" cy="206" rx="28" ry="46" transform="rotate(40 190 206)" fill="#6b3410" stroke="#1e1b4b" stroke-width="5" />
      <path d="M170 196 L206 226 M180 184 L214 212 M176 214 L198 232 M168 186 L200 214" stroke="#3b1a06" stroke-width="3" stroke-linecap="round" opacity="0.6" />
    </g>
    <!-- ушки -->
    <circle cx="66" cy="72" r="17" fill="#b45309" stroke="#1e1b4b" stroke-width="5" />
    <circle cx="174" cy="72" r="17" fill="#b45309" stroke="#1e1b4b" stroke-width="5" />
    <circle cx="66" cy="72" r="7" fill="#f9a8d4" />
    <circle cx="174" cy="72" r="7" fill="#f9a8d4" />
    <!-- тело -->
    <path
      d="M120 50 C185 50 200 105 200 152 C200 212 168 238 120 238 C72 238 40 212 40 152 C40 105 55 50 120 50 Z"
      fill="#b45309"
      stroke="#1e1b4b"
      stroke-width="5"
    />
    <ellipse cx="120" cy="196" rx="52" ry="40" fill="#fde4c4" />
    <!-- лапки -->
    <ellipse cx="92" cy="238" rx="22" ry="12" fill="#92400e" stroke="#1e1b4b" stroke-width="5" />
    <ellipse cx="148" cy="238" rx="22" ry="12" fill="#92400e" stroke="#1e1b4b" stroke-width="5" />
    <path d="M84 234 v8 M92 233 v9 M100 234 v8 M140 234 v8 M148 233 v9 M156 234 v8" stroke="#1e1b4b" stroke-width="2.5" stroke-linecap="round" opacity="0.5" />
    <!-- глаза -->
    <circle cx="92" cy="106" r="16" fill="#fff" stroke="#1e1b4b" stroke-width="4" />
    <circle cx="148" cy="106" r="16" fill="#fff" stroke="#1e1b4b" stroke-width="4" />
    <g class="pupils">
      <circle cx="95" cy="108" r="8" fill="#1e1b4b" />
      <circle cx="151" cy="108" r="8" fill="#1e1b4b" />
      <circle cx="98" cy="104" r="3" fill="#fff" />
      <circle cx="154" cy="104" r="3" fill="#fff" />
    </g>
    <!-- мордочка -->
    <ellipse cx="120" cy="140" rx="40" ry="26" fill="#fde4c4" stroke="#1e1b4b" stroke-width="4" />
    <ellipse cx="120" cy="127" rx="14" ry="10" fill="#1e1b4b" />
    <circle cx="116" cy="124" r="3" fill="#fff" opacity="0.7" />
    <path d="M104 142 q16 10 32 0" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" />
    <!-- зубы -->
    <rect x="109" y="145" width="22" height="20" rx="4" fill="#fff" stroke="#1e1b4b" stroke-width="3" />
    <path d="M120 145 L120 165" stroke="#1e1b4b" stroke-width="3" />
    <ellipse cx="72" cy="138" rx="11" ry="7" fill="#f472b6" opacity="0.7" />
    <ellipse cx="168" cy="138" rx="11" ry="7" fill="#f472b6" opacity="0.7" />
    <!-- пероги в лапках -->
    <g class="pierogi">
      <path d="M86 210 C90 180 150 180 154 210 Z" fill="#fde68a" stroke="#1e1b4b" stroke-width="4" stroke-linejoin="round" />
      <path d="M96 192 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round" />
      <ellipse cx="90" cy="208" rx="13" ry="10" fill="#b45309" stroke="#1e1b4b" stroke-width="4" />
      <ellipse cx="150" cy="208" rx="13" ry="10" fill="#b45309" stroke="#1e1b4b" stroke-width="4" />
    </g>
  </svg>
</template>

<style scoped>
.mascot {
  width: 100%;
  height: auto;
  overflow: visible;
}

.tail {
  transform-origin: 170px 220px;
  animation: wag 1.4s ease-in-out infinite;
}

.pierogi {
  animation: nibble 2.2s ease-in-out infinite;
}

@keyframes wag {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

@keyframes nibble {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -6px;
  }
}
</style>
