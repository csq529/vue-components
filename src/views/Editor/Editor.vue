<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>

  <!-- Or manually control the data synchronization（或手动控制数据流） -->
  <!-- <quill-editor :content="content"
                :options="editorOption"
                @change="onEditorChange($event)">
  </quill-editor> -->
</template>

<script>

  // you can also register quill modules in the component
  // import Quill from 'quill'
  // import { someModule } from '../../../node_moudles/someQuillModule.js'
  // Quill.register('modules/someModule', someModule)
  
  export default {
    data () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {
          modules:{
            toolbar:[
              // ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
              // ['blockquote', 'code-block'],     //引用，代码块
  
  
              // [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
              // [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
              // [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
              // [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
              // [{ 'direction': 'rtl' }],             // 文本方向
  
  
              // [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
              // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
  
  
              // [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
              // [{ 'font': [] }],     //字体
              // [{ 'align': [] }],    //对齐方式
  
  
              // ['clean'],    //清除字体样式
              // handlers: {
              //   link: function(value) {
              //     console.log('value:', value)
              //   }
              // },
              ['image','video', 'link']    //上传图片、上传视频
  
            ]
          }
          // some quill options
        }
      }
    },
    // manually control the data synchronization
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
    methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>