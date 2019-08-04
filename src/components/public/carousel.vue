<template>
  <v-carousel height="100px" 
    cycle 
    :hide-delimiter-background ="hideDelimitersBg"
    :hide-delimiter ="hideDelimiters"
    :show-arrows="showArrows">
    <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
        >
          <v-layout
            align-center
            fill-height
            justify-center
          >
            <div class="display-3">Slide {{ i + 1 }}</div>
        </v-layout>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> 
</template>

<script>
    export default {
        props:{
            colors:{
                type: Array,
                default: ()=>{
                    return [
                      'primary',
                      'secondary',
                      'yellow darken-2',
                      'red',
                      'orange'
                    ]
                }

            },
            showArrows:{
                type: Boolean,
                default: true
            },
            hideDelimiters:{
                type: Boolean,
                default: false
            },
            hideDelimitersBg:{
                type: Boolean,
                default: false
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>