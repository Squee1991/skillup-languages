<script setup lang="ts">
// иголки — звезда с чередующимся радиусом вокруг головы
const spikes = Array.from({ length: 44 }, (_, i) => {
  const a = (i / 44) * Math.PI * 2
  const r = i % 2 ? 84 : 110
  return `${(120 + r * Math.cos(a)).toFixed(1)},${(135 + r * Math.sin(a) * 0.95).toFixed(1)}`
}).join(' ')
</script>

<template>
  <svg class="mascot" viewBox="0 0 240 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="120" cy="250" rx="70" ry="8" fill="#1e1b4b" opacity="0.15" />
    <!-- иголки -->
    <polygon class="spikes" :points="spikes" fill="#92400e" stroke="#1e1b4b" stroke-width="5" stroke-linejoin="round" />
    <!-- лапки -->
    <ellipse cx="94" cy="234" rx="20" ry="12" fill="#c08457" stroke="#1e1b4b" stroke-width="5" />
    <ellipse cx="146" cy="234" rx="20" ry="12" fill="#c08457" stroke="#1e1b4b" stroke-width="5" />
    <!-- мордочка -->
    <ellipse cx="120" cy="158" rx="70" ry="66" fill="#fde2b8" stroke="#1e1b4b" stroke-width="5" />
    <!-- глаза -->
    <circle cx="94" cy="142" r="17" fill="#fff" stroke="#1e1b4b" stroke-width="4" />
    <circle cx="146" cy="142" r="17" fill="#fff" stroke="#1e1b4b" stroke-width="4" />
    <g class="pupils">
      <circle cx="97" cy="144" r="8" fill="#1e1b4b" />
      <circle cx="149" cy="144" r="8" fill="#1e1b4b" />
      <circle cx="100" cy="140" r="3" fill="#fff" />
      <circle cx="152" cy="140" r="3" fill="#fff" />
    </g>
    <!-- нос и улыбка -->
    <ellipse cx="120" cy="170" rx="13" ry="10" fill="#1e1b4b" />
    <circle cx="116" cy="167" r="3" fill="#fff" opacity="0.7" />
    <path d="M104 186 q16 14 32 0" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round" />
    <ellipse cx="72" cy="172" rx="11" ry="7" fill="#f472b6" opacity="0.7" />
    <ellipse cx="168" cy="172" rx="11" ry="7" fill="#f472b6" opacity="0.7" />
    <!-- брецель в лапке -->
    <g class="pretzel" transform="translate(180 204) rotate(-15)">
      <path
        d="M0 18 C-26 18 -30 -14 -10 -16 C4 -17 6 0 0 6 C-6 0 -4 -17 10 -16 C30 -14 26 18 0 18 Z"
        fill="none"
        stroke="#1e1b4b"
        stroke-width="13"
        stroke-linejoin="round"
      />
      <path
        d="M0 18 C-26 18 -30 -14 -10 -16 C4 -17 6 0 0 6 C-6 0 -4 -17 10 -16 C30 -14 26 18 0 18 Z"
        fill="none"
        stroke="#c2410c"
        stroke-width="7"
        stroke-linejoin="round"
      />
      <circle cx="-14" cy="6" r="1.8" fill="#fff" />
      <circle cx="14" cy="4" r="1.8" fill="#fff" />
      <circle cx="0" cy="17" r="1.8" fill="#fff" />
    </g>
    <ellipse cx="166" cy="214" rx="12" ry="9" fill="#c08457" stroke="#1e1b4b" stroke-width="4" />
  </svg>
</template>

<style scoped>
.mascot {
  width: 100%;
  height: auto;
  overflow: visible;
}

.spikes {
  transform-origin: 120px 135px;
  animation: bristle 2.4s ease-in-out infinite;
}

.pretzel {
  animation: nibble 2s ease-in-out infinite;
}

@keyframes bristle {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
}

@keyframes nibble {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: -4px -6px;
  }
}
</style>
