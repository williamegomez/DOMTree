"use strict";

function getAttributes (template, reg) {
  const templateSane = template.replace(/\t|\n/g, '');
  const tags = []
  var match = reg.exec(templateSane);
  while (match != null) {
    if (match[2] && match[2] != '/') {
      tags.push(match[2])
    }
    else {
      tags.push('')
    }
    match = reg.exec(templateSane);
  }
  return tags
}

function getTags (template, reg) {
  const templateSane = template.replace(/\t|\n/g, '');
  const tags = []
  var match = reg.exec(templateSane);
  while (match != null) {
    if (match[1]) {
      tags.push(match[1])
    } else {
      tags.push(match[2])
    }
    match = reg.exec(templateSane);
  }
  return tags
}

function separateAttributes (attributeString) {
  var reg = /((\w|\-)*)=\"([^\"]*)"/g

  var attributesArray = []
  var match = reg.exec(attributeString);
  while (match != null) {
    attributesArray.push({
    attributeName: match[1],
    attributeValue: match[3]
    })
    match = reg.exec(attributeString);
  }

  return attributesArray
}

function getChildrenTags (tagsArray, attributes) {
  if (tagsArray.length === 0) {
    return []
  }
  var tempArray = tagsArray
  var childrenTags = []

  for(let i=0; i<tempArray.length ; i++) {
    let tag = tagsArray[i]

    var arrayMayorThanI = tempArray.slice(i + 1)
    let indexFinish = arrayMayorThanI.indexOf(`/${tag}`) + i + 1
    if (indexFinish === -1) {
      childrenTags[tag] = ''
      i = i + 1
      continue
    }

    let subArray = tempArray.slice(i + 1, indexFinish)

    var limitinit = i
    var limitend = indexFinish
    while (subArray.indexOf(tag) != -1) {
      indexFinish = tempArray.slice(indexFinish + 1).indexOf(`/${tag}`) + indexFinish + 1
      subArray = tempArray.slice(i + 1, limitend)
      limitinit = limitinit + 1
    }

    var childrens = getChildrenTags(tempArray.slice(i+1,indexFinish), attributes.slice(i+1,indexFinish))
    var node = {}
    node.parent = tag
    node.children = childrens
    node.attributes = separateAttributes(attributes[i])

    childrenTags.push(node)

    i = indexFinish
  }
  return childrenTags
}

module.exports = function getDomTree (template) {
  var reg = /<(\w+)[^>]*>|<(\/(\w+)[^>]*)>/g
  const Tags = getTags(template, reg)

  reg = /<(\w+)\s*([^>]+)*>/g
  const Attributes = getAttributes(template, reg)

  return getChildrenTags(Tags, Attributes)
}
