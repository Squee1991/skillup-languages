<script setup lang="ts">
// Змейка сидит, свернувшись в клубок: одна трубка одинаковой толщины закручивается
// спиралью снизу вверх — от кончика хвоста (спереди внизу) до шеи (сзади наверху).
// Спираль режем на половинки витков: задние рисуем первыми, передние — поверх.
const T0 = Math.PI * 0.04 // кончик хвоста: справа, вытянут в сторону
const T1 = Math.PI * 5.5 // конец спирали: сзади по центру верхнего витка, отсюда растёт шея
const TAIL = Math.PI * 0.75 // на этом участке хвост сужается к кончику и отходит от клубка
const W = 24 // толщина тела
const STEP = Math.PI / 36

const point = (t: number) => {
  const f = (t - T0) / (T1 - T0)
  // хвост отходит наружу от нижнего витка
  const u = Math.max(0, 1 - (t - T0) / (TAIL - T0))
  const r = 86 - 58 * f + 26 * u ** 1.4 // витки сужаются кверху
  const cy = 216 - 48 * f // и поднимаются
  return [120 + r * Math.cos(t), cy + r * 0.28 * Math.sin(t)] as const
}
const fmt = ([x, y]: readonly [number, number]) => `${x.toFixed(1)} ${y.toFixed(1)}`

// ломаная по спирали от a до b
const path = (a: number, b: number) => {
  let d = `M${fmt(point(a))}`
  for (let t = a + STEP; t < b; t += STEP) d += ` L${fmt(point(t))}`
  return `${d} L${fmt(point(b))}`
}

interface Run {
  front: boolean
  from: number
  to: number
  d: string
  // сужающийся хвост — короткими кусочками разной толщины
  tail: { d: string; w: number }[]
  spots: (readonly [number, number])[]
}

const runs: Run[] = []
for (let t = T0; t < T1 - 1e-6; t += STEP) {
  const t2 = Math.min(t + STEP, T1)
  const front = Math.sin((t + t2) / 2) > 0
  let run = runs[runs.length - 1]
  if (!run || run.front !== front) {
    run = { front, from: t, to: t2, d: '', tail: [], spots: [] }
    runs.push(run)
  }
  run.to = t2
  if (t2 <= TAIL + 1e-6) {
    const w = W * (0.2 + 0.8 * ((t2 - T0) / (TAIL - T0)))
    run.tail.push({ d: `M${fmt(point(t))} L${fmt(point(t2))}`, w })
    run.from = t2
  }
  // пятнышки — на передней стороне, примерно через каждые 50°
  if (front && t > TAIL && Math.round((t - T0) / STEP) % 10 === 0) run.spots.push(point(t))
}
// передние половинки чуть заходят на задние, чтобы на стыках по бокам не было зазубрин
for (const r of runs) {
  const pad = r.front ? STEP * 2 : 0
  const from = r.tail.length ? r.from : Math.max(T0, r.from - pad)
  r.d = path(from, Math.min(T1, r.to + pad))
}
const back = runs.filter((r) => !r.front)
const fronts = runs.filter((r) => r.front)
</script>

<template>
  <svg class="mascot" viewBox="0 0 240 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="120" cy="248" rx="86" ry="8" fill="#1e1b4b" opacity="0.15" />
    <!-- задние половинки витков -->
    <g v-for="(r, i) in back" :key="'b' + i" fill="none" stroke-linejoin="round">
      <path :d="r.d" stroke="#1e1b4b" :stroke-width="W + 10" stroke-linecap="round" />
      <path :d="r.d" stroke="#16a34a" :stroke-width="W" stroke-linecap="round" />
    </g>
    <!-- шея: от верхнего витка к голове -->
    <path d="M120 170 L120 148" fill="none" stroke="#1e1b4b" :stroke-width="W + 28" stroke-linecap="round" />
    <path d="M120 170 L120 148" fill="none" stroke="#22c55e" :stroke-width="W + 18" stroke-linecap="round" />
    <!-- передние половинки витков: нижние первыми, верхние ложатся сверху -->
    <g v-for="(r, i) in fronts" :key="'f' + i" fill="none" stroke-linejoin="round">
      <path v-for="(s, j) in r.tail" :key="'to' + j" :d="s.d" stroke="#1e1b4b" :stroke-width="s.w + 10" stroke-linecap="round" />
      <path v-if="r.d" :d="r.d" stroke="#1e1b4b" :stroke-width="W + 10" />
      <path v-for="(s, j) in r.tail" :key="'tf' + j" :d="s.d" stroke="#22c55e" :stroke-width="s.w" stroke-linecap="round" />
      <path v-if="r.d" :d="r.d" stroke="#22c55e" :stroke-width="W" />
      <!-- блик по верху трубки -->
      <path v-if="r.d" :d="r.d" stroke="#86efac" stroke-width="5" stroke-linecap="round" opacity="0.75" transform="translate(0 -6)" />
      <circle v-for="(p, j) in r.spots" :key="'s' + j" :cx="p[0]" :cy="p[1] + 3" r="4" fill="#15803d" stroke="none" />
    </g>
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
