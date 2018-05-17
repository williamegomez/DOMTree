import getDomTree from './../distribution/'

const domTree = getDomTree((`
  <button>
    <p class="coso">
      <a>ink here</a>
    </p>
    <hola />
    <ul>
      <li><button></button></li>
      <li><button></button></li>
    </ul>
  </button>`))

document.querySelector('.container').innerHTML = JSON.stringify(domTree, undefined, 2);
