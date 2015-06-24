{View} = require 'atom'

module.exports =
class RickyscrollView extends View
  @content: ->
    @div class: 'rickyscroll overlay from-top', =>
      @div "The Rickyscroll package is Alive! It's ALIVE!", class: "message"

  initialize: (serializeState) ->
    atom.workspaceView.append(this)

  # Returns an object that can be retrieved when package is activated
  serialize: ->

  # Tear down any state and detach
  destroy: ->
    @detach()
