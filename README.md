How to use it:

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

Get the tree:


[
  {
    "parent": "p",
    "children": [
      {
        "parent": "a",
        "children": [],
        "attributes": []
      }
    ],
    "attributes": [
      {
        "attributeName": "class",
        "attributeValue": "coso"
      }
    ]
  },
  {
    "parent": "hola",
    "children": [],
    "attributes": []
  },
  {
    "parent": "ul",
    "children": [
      {
        "parent": "li",
        "children": [
          {
            "parent": "button",
            "children": [],
            "attributes": []
          }
        ],
        "attributes": []
      },
      {
        "parent": "li",
        "children": [
          {
            "parent": "button",
            "children": [],
            "attributes": []
          }
        ],
        "attributes": []
      }
    ],
    "attributes": []
  }
]
