<script>
  /*
  while sayings
    foreach word
      print letter
      wait 100
    wait 3000
  */

  /*
  blacklisted terms chez nous:
    low-hanging fruit
    MVP
    widget
  */


  window.onload = init

  var sayings = [
    'Have Vision',
    'Design Responsibly',
    'New Method',
    'Be Ethical',
    'New Design',
    'Fearless',
    'Sustainable',
    'Upcycle',
    'Reuse',
    'No Limits',
    'The Future is here',
    'You still reading?',
    'Contact us'
  ]

  var element = document.getElementById('js-typewriter')

  function init(j) {
    if ( typeof j === 'object' )
      j = 0 // first time only
    var word_counter = j < sayings.length ? j : 0
    var text = sayings[word_counter]
    var letter_counter = 0
    type(text, letter_counter, word_counter)
  }

  function type(text, letter_counter, word_counter) {
    // attention global
    if ( !is_visible(element) ) // if element is offscreen, wait 2s and try again
      return setTimeout(type, 1000, text, letter_counter, word_counter)
    var new_text = text.substr(0, letter_counter)
    var last_counter = text.length > letter_counter
    // attention global
    element.innerHTML = `${new_text}${ last_counter ? '|' : '' }`
    if ( last_counter )
      setTimeout(type, 100, text, letter_counter+1, word_counter)
    else
      setTimeout(init, 2000, word_counter+1)
  }

  function is_visible(elm) {
    var rect = elm.getBoundingClientRect()
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
  }
</script>
