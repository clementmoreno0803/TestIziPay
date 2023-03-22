<template>
<li>
  <div class="card">
    <img :src="poster" alt="">
    <h3>{{title}}</h3>
    <span>{{year}}</span>
    <base-button :class="mode">
      <span>{{type}}</span>
    </base-button>
  </div>
</li>
</template>

<script>
export default({
props: ['id','poster','title','year','mode','type']
})
</script>

<style scoped>
.card{
  width: 100%;
  padding: 30px;
  border: 1px solid black;
}
</style>
