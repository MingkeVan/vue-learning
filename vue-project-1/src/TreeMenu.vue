<template>
  <div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">
        <i v-if="nodes" class="fa" :class="iconClasses"></i>
        {{ label }}
      </div>
    </div>
    <tree-menu 
      v-if="showChildren"
      v-for="node in nodes"
      :key="node.label" 
      :nodes="node.nodes" 
      :label="node.label"
      :depth="depth + 1"   
    >
    </tree-menu>
  </div>
</template>

<script>
export default {
    name: 'tree-menu',
    props: [ 'nodes', 'label', 'depth' ],
    data() {
       return {
         showChildren: false
       }
    },
    computed: {
      iconClasses() {
        return {
          'fa-plus-square-o': !this.showChildren,
          'fa-minus-square-o': this.showChildren
        }
      },
      labelClasses() {
        return { 'has-children': this.nodes }
      },
      indent() {
        return { transform: `translate(${this.depth * 50}px)` }
      }
    },
    methods: {
      toggleChildren() {
         this.showChildren = !this.showChildren;
      }
    },
}
</script>


<style lang="less" scoped>

.tree-menu .label-wrapper{
  
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc; 
  
}

.tree-menu .has-children {
  cursor: pointer;
}

</style>