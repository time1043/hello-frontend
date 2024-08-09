<template>
  <label>
    Purple
    <input type="checkbox" @change="togglePurple" />
  </label>
</template>

<script>
export default {
  props: ["togglePurple"],
};
</script>
