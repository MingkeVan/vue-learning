import Vue from 'vue'
import VueBigTreeList from '../src/VueBigTreeList.js'

let tree = {
    label: 'root',
    nodes: [
      {
        label: 'item1',
        nodes: [
          {
            label: 'item1.1'
          },
          {
            label: 'item1.2',
            nodes: [
              {
                label: 'item1.2.1'
              }
            ]
          }
        ]
      }, 
      {
        label: 'item2'  
      }
    ]
  }
  
new Vue({
  el: '#app',
  data: {
    tree
  },
  components: {
    VueBigTreeList
  }
})