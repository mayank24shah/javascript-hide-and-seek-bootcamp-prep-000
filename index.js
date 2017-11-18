function getFirstSelector(selector){
  var sel = document.querySelector(selector)
  return sel
}
function nestedTarget(){
 var nestedTarget = document.querySelector('#nested')
 return nestedTarget
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
}

}
function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
   var deepestNode = grandNode.children[0];
   for (var i = 0; !deepestNode.children[i]; i) {
     deepestNode = deepestNode.children[0]
   }
   return deepestNode;
 }
