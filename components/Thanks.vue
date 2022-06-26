<script>
export default {
  data: () => ({
    joke: '',
  }),
  async mounted() {
    this.joke = await fetch('/api/thanksmessage').then((res) => res.json())
  },
}
</script>

<template>
  <p>{{ thanksmessage }}</p>
</template>
