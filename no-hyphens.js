document.querySelectorAll("body *").forEach(function(element){
  element.childNodes.forEach(function(node){
    if(node.nodeType===Node.TEXT_NODE){
      node.textContent=node.textContent
        .replace(/([A-Za-z])-([A-Za-z])/g,"$1 $2")
        .replace(/\s*[—–]\s*/g,", ");
    }
  });
});
