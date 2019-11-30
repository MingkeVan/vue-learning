<template>
    <div>
        <tree-menu 
              :nodes="tree.nodes" 
              :depth="0"   
              :label="tree.label"
              >
        </tree-menu>
    </div>
</template>

<script>
import TreeMenu from '../src/TreeMenu.vue' //引入vue文件 必须加后缀？？
export default {
    components: {
      TreeMenu
    },
    data: function () {
      return {
          tree : {
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
        }
    },
}
</script>
