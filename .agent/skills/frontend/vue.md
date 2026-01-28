---
name: Vue.js Development
description: Best practices and patterns for Vue.js
---

# Vue.js Development Skills

## Core Principles
1.  **Reactivity**: Understand the reactive system (Refs vs Reactive).
2.  **Component Lifecycle**: `onMounted`, `onUpdated`, `onUnmounted`.
3.  **Single File Components (SFC)**: Keep Template, Script, and Style together.

## Setup (Composition API)
Prefer `<script setup>` for better performance and ergonomics.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

## Best Practices
- **Props**: Define strictly typed props.
- **Composables**: Extract logic into composables (use...) instead of mixins.
- **Computed Properties**: Use `computed()` for derived state.
- **Watchers**: Use `watch` or `watchEffect` for side effects.

## Ecosystem
- **Router**: Vue Router
- **State**: Pinia (preferred over Vuex)
- **Tooling**: Vite
