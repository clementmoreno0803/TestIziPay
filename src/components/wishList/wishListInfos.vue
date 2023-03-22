<template>
<li>
  <div class="card">
    <img :src="poster" alt="">
    <h3>{{title}}</h3>
    <div class="description">
    <span>{{year}}</span>
    <base-button :class="mode">
      <span>{{type}}</span>
    </base-button>
    </div>
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
  border: 1px solid black;
}
.description{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
