<template>
  <div class="home">
    <carrosell/>
  </div>
</template>

<script>
	
// @ is an alias to /src
import Carrosell from '@/components/Carrosell.vue'

export default {
  name: 'home',
  components: {
    Carrosell
  }
}
</script>
