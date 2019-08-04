<template>
  <v-carousel :height="height+'px'" 
    cycle 
    :hide-delimiter-background ="hideDelimitersBg"
    :hide-delimiter ="hideDelimiters"
    :show-arrows="showArrows">
    <v-carousel-item
        v-for="(color, i) in items"
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
            items:{
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
            height:{
                type: Number,
                default: 300
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>