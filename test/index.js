import getDomTree from 'dom-tree-creator'

const domTree = getDomTree((`
  <p class="coso">
    <a>ink here</a>
  </p>
  <hola />
  <ul>
    <li><button></button></li>
    <li><button></button></li>
  </ul>`))

document.querySelector('.container').innerHTML = JSON.stringify(domTree, undefined, 2);
