import getDomTree from './../distribution/'

const domTree = getDomTree((`
<Button class="container">
<Button class="1">
</Button>
<Button class="2">
</Button>
</Button>`))

document.querySelector('.container').innerHTML = JSON.stringify(domTree, undefined, 2);
