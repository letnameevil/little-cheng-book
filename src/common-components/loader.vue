<template>
  <div class="mark">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  --c: no-repeat linear-gradient(rgb(190, 234, 241) 0 0);
  background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c),
    var(--c), var(--c), var(--c);
  background-size: 16px 16px;
  animation:
    l32-1 1s infinite,
    l32-2 1s infinite;
}

.mark {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #cccccc40;
}

@keyframes l32-1 {
  0%,
  100% {
    width: 45px;
    height: 45px;
  }
  35%,
  65% {
    width: 65px;
    height: 65px;
  }
}
@keyframes l32-2 {
  0%,
  40% {
    background-position:
      0 0,
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0,
      50% 0,
      50% 50%;
  }
  60%,
  100% {
    background-position:
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0,
      50% 0,
      0 0,
      50% 50%;
  }
}
</style>
