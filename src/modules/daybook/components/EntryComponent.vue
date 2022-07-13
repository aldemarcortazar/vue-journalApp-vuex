<template>
  <div
    class=" entry-container mb-3 pointer"
    @click="$router.push({ name: 'entry', params: { id: 20 } })"
  >
    <!-- title -->
    <div
      class="entry-title d-flex"
    >
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
      Ipsum do sit ut occaecat magna officia dolor excepteur tempor officia et. Occaecat veniam sunt eiusmod eiusmod officia nulla cupidatat amet deserunt. Ex duis minim aute aute esse ea incididunt nulla. Deserunt mollit irure cupidatat magna aliqua quis id quis consectetur irure anim dolor sunt voluptate. Id ullamco elit id enim esse labore ipsum.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
}


.entry-description{
  font-size: 12px;
}

</style>