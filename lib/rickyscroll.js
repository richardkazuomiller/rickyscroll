function focus_left(){
  var pane = atom.workspace.getActivePane();
  var index;
  index = pane.getActiveItemIndex();
  if (index > 0) {
    pane.activateItemAtIndex(index - 1);
  } else {
    atom.workspace.activatePreviousPane();
    var prevpane = atom.workspace.activePane;
    prevpane.activateItemAtIndex(prevpane.items.length-1)
  }
}

function focus_right(){
  var pane = atom.workspace.getActivePane();
  var index;
  index = pane.getActiveItemIndex();
  if (index < pane.items.length - 1) {
    pane.activateItemAtIndex(index + 1);
  } else {
    atom.workspace.activateNextPane();
    atom.workspace.activePane.activateItemAtIndex(0)
  }
}

console.log('foo')
atom.commands.add("atom-workspace","rickyscroll:focus-left", function(){
  focus_left()
});
atom.commands.add("atom-workspace","rickyscroll:focus-right", function(){
  focus_right();
});
module.exports = {
  activate : function(state){
  },
  deactivate : function(){
  },
  serialize : {
  }
}
