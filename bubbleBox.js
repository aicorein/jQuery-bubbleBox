/*! bubbleBox.js v1.0.0 | (c) AiCorein */
function addBubbleAll(parents, children, args) {
  mainElems = $(parents);
  childElems = $(children);

  if (args == null) {
    var args = {
      direction: 'right',
      offsetX: 10,
      offsetY: 0,
      fadeInDelay: 300,
      fadeOutDelay: 0,
      fadeInTime: 100,
      fadeOutTime: 0,
    }
  }
  if (args.direction === undefined) args.direction = 'right'
  if (args.offsetX === undefined) args.offsetX = 10
  if (args.offsetY === undefined) args.offsetY = 0
  if (args.fadeInDelay === undefined) args.fadeInDelay = 300
  if (args.fadeOutDelay === undefined) args.fadeOutDelay = 300
  if (args.fadeInTime === undefined) args.fadeInTime = 100
  if (args.fadeOutTime === undefined) args.fadeOutTime = 100
  var { direction, offsetX, offsetY, fadeInDelay, fadeOutDelay, fadeInTime, fadeOutTime } = args

  mainElems.css('position', 'relative')
  childElems.css({
    display: 'none',
    position: 'absolute',
    'z-index': 99,
    width: `${childElems.outerWidth()}px`,
    'min-height': `${childElems.outerHeight()}px`,
    margin: '0',
  })

  switch (direction) {
    case 'right':
      childElems.css({
        right: `${-childElems.outerWidth() - offsetX}px`,
        bottom: `${mainElems.outerHeight() / 2 - childElems.outerHeight() / 2 + offsetY}px`
      })
      break
    case 'bottom':
      childElems.css({
        bottom: `${-childElems.outerHeight() + offsetY}px`,
        left: `${mainElems.outerWidth() / 2 - childElems.outerWidth() / 2 + offsetX}px`
      })
      break
    case 'left':
      childElems.css({
        left: `${-childElems.outerWidth() + offsetX}px`,
        bottom: `${mainElems.outerHeight() / 2 - childElems.outerHeight() / 2 + offsetY}px`
      })
      break
    case 'top':
      childElems.css({
        top: `${-childElems.outerHeight() - offsetY}px`,
        left: `${mainElems.outerWidth() / 2 - childElems.outerWidth() / 2 + offsetX}px`
      })
      break
  }

  for (let i = 0; i < mainElems.length; i++) {
    mainElems[i].addEventListener('mouseenter', function () {
      if (this.fadeTimer) {
        clearTimeout(this.fadeTimer);
      }
      this.displayTimer = setTimeout(function () {
        $(childElems[i]).stop().fadeIn(fadeInTime);
      }, fadeInDelay);
    });
    mainElems[i].addEventListener('mouseleave', function () {
      if (this.displayTimer) {
        clearTimeout(this.displayTimer);
      }
      this.fadeTimer = setTimeout(function () {
        $(childElems[i]).stop().fadeOut(fadeOutTime);
      }, fadeOutDelay)
    });
  }
}

function addBubble(parent, child, args) {
  mainElem = $(parent);
  childElem = $(child);

  if (args == null) {
    var args = {
      direction: 'right',
      offsetX: 0,
      offsetY: 0,
      fadeInDelay: 300,
      fadeOutDelay: 0,
      fadeInTime: 100,
      fadeOutTime: 0,
    }
  }
  if (args.direction === undefined) args.direction = 'right'
  if (args.offsetX === undefined) args.offsetX = 0
  if (args.offsetY === undefined) args.offsetY = 0
  if (args.fadeInDelay === undefined) args.fadeInDelay = 300
  if (args.fadeOutDelay === undefined) args.fadeOutDelay = 300
  if (args.fadeInTime === undefined) args.fadeInTime = 100
  if (args.fadeOutTime === undefined) args.fadeOutTime = 100
  var { direction, offsetX, offsetY, fadeInDelay, fadeOutDelay, fadeInTime, fadeOutTime } = args

  mainElem.css('position', 'relative')
  childElem.css({
    display: 'none',
    position: 'absolute',
    'z-index': 99,
    width: `${childElem.outerWidth()}px`,
    'min-height': `${childElem.outerHeight()}px`,
    margin: '0',
  })

  switch (direction) {
    case 'right':
      childElem.css({
        right: `${-childElem.outerWidth() - offsetX}px`,
        bottom: `${mainElem.outerHeight() / 2 - childElem.outerHeight() / 2 + offsetY}px`
      })
      break
    case 'bottom':
      childElem.css({
        bottom: `${-childElem.outerHeight() + offsetY}px`,
        left: `${mainElem.outerWidth() / 2 - childElem.outerWidth() / 2 + offsetX}px`
      })
      break
    case 'left':
      childElem.css({
        left: `${-childElem.outerWidth() + offsetX}px`,
        bottom: `${mainElem.outerHeight() / 2 - childElem.outerHeight() / 2 + offsetY}px`
      })
      break
    case 'top':
      childElem.css({
        top: `${-childElem.outerHeight() - offsetY}px`,
        left: `${mainElem.outerWidth() / 2 - childElem.outerWidth() / 2 + offsetX}px`
      })
      break
  }

  mainElem[0].addEventListener('mouseenter', function () {
    if (this.fadeTimer) {
      clearTimeout(this.fadeTimer);
    }
    this.displayTimer = setTimeout(function () {
      childElem.stop().fadeIn(fadeInTime);
    }, fadeInDelay);
  });
  mainElem[0].addEventListener('mouseleave', function () {
    if (this.displayTimer) {
      clearTimeout(this.displayTimer);
    }
    this.fadeTimer = setTimeout(function () {
      childElem.stop().fadeOut(fadeOutTime);
    }, fadeOutDelay)
  });
}