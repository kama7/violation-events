<template>
  <b-container fluid>
    <div class="main-layout">
      <BaseHeader/>

      <div class="main-layout__content">
        <router-view/>
      </div>
    </div>
  </b-container>
</template>

<script>
import BaseHeader from '@/components/common/BaseHeader';

export default {
  components: { BaseHeader }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-flow: column;
}

.main-layout__content {
  padding-top: 56px;
  flex: 1 1 auto;
}
</style>
