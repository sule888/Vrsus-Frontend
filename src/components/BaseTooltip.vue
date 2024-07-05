<template>
  <div>

    <span class="tooltip">
      <slot></slot>
    </span>


  </div>
</template>


<style scoped>
.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  color: var(--white);
  text-align: center;
  font-size: var(--tooltips);
  width: 100%;
  white-space: nowrap;
}

.tooltip-container:hover .tooltip {
  top: -100%;
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
</style>