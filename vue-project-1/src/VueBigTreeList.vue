<template>
  <div class="vue-big-tree-list">
    <div :style="indent" @click="toggleChildren">{{ label }}</div>
    <vue-big-tree-list 
      :key="sss"
      v-if="showChildren"
      v-for="node in nodes" 
      :nodes="node.nodes" 
      :label="node.label"
      :depth="depth + 1"
    >
    </vue-big-tree-list>
  </div>
</template>

<script>
export default {
  name: 'vue-big-tree-list',
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
  }
}
</script>


<style lang="less" rel="stylesheet/less">
  @font-face {
    font-family: 'icomoon';
    src:  url('fonts/icomoon.eot?ui1hbx');
    src:  url('fonts/icomoon.eot?ui1hbx#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?ui1hbx') format('truetype'),
    url('fonts/icomoon.woff?ui1hbx') format('woff'),
    url('fonts/icomoon.svg?ui1hbx#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  .vtl-icon {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &.vtl-menu-icon {
      margin-right: 4px;
      &:hover {
        color: inherit;
      }
    }
    &:hover {
      color: blue;
    }
  }

  .vtl-icon-file:before {
    content: "\e906";
  }
  .vtl-icon-folder:before {
    content: "\e907";
  }
  .vtl-icon-caret-down:before {
    content: "\e901";
  }
  .vtl-icon-caret-right:before {
    content: "\e900";
  }
  .vtl-icon-edit:before {
    content: "\e902";
  }
  .vtl-icon-folder-plus-e:before {
    content: "\e903";
  }
  .vtl-icon-plus:before {
    content: "\e904";
  }
  .vtl-icon-trash:before {
    content: "\e905";
  }


  .vtl-border {
    height: 5px;
    &.vtl-up {
      margin-top: -5px;
      background-color: transparent;
    }
    &.vtl-bottom {
      background-color: transparent;
    }
    &.vtl-active {
      border-bottom: 3px dashed blue;
      /*background-color: blue;*/
    }
  }

  .vtl-tree-node {
    display: flex;
    align-items: center;
    padding: 5px 0 5px 1rem;
    .vtl-input {
      border: none;
      max-width: 150px;
      border-bottom: 1px solid blue;
    }
    &:hover {
      background-color: #f0f0f0;
    }
    &.vtl-active {
      outline: 2px dashed pink;
    }
    .vtl-caret {
      margin-left: -1rem;
    }
    .vtl-operation {
      margin-left: 2rem;
      letter-spacing: 1px;
    }
  }


  .vtl-item {
    cursor: pointer;
  }
  .vtl-tree-margin {
    margin-left: 2em;
  }
</style>
