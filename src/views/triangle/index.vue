<template>
  <div>
    <ul class="tree">
      <li>项目1</li>
      <li>项目2</li>
      <li class="expand">项目3
        <ul>
          <li>子项3.1</li>
          <li>子项3.2</li>
          <li>子项3.3</li>
        </ul>
      </li>
      <li>项目4
        <ul>
          <li>子项4.1</li>
          <li>子项4.2</li>
        </ul>
      </li>
      <li>项目5</li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    const tree = document.querySelector('.tree');

    tree.addEventListener('click', (evt) => {
      if(evt.target.tagName === 'LI') {
        if(evt.target.className === 'expand') {
          evt.target.className = '';
        } else {
          evt.target.className = 'expand';
        }
      }
    });
  }
}
</script>

<style scoped>
html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .tree {
    margin: 20px;
  }
  ul {
    list-style: none;
    font-size: 16px;
  }

  .tree li::before {
    color: #999;
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 10.4px;
    border-color: transparent;
    border-left-color: currentColor;
    transform: translateX(6px);
  }

  .tree li.expand::before {
    transform: rotate(90deg) translateX(6px) ;
  }

  .tree li > ul {
    display: none;
    margin-left: 40px;
  }

  .tree li.expand > ul {
    display: block;
    margin-left: 40px;
  }
</style>