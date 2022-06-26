<script>
export default {
  data: () => ({
    thanks: '',
  }),
  async mounted() {
    this.thanks = await fetch('/api/thanks.js').then((res) => res.json())
  },
}
</script>

<template>
  <p>{{ thanks }}</p>
</template>
