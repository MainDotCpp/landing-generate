/* --------------------------------------------------------------------------
 *  Smooth Scroller Script, version 1.0.1
 *  (c) 2007 Dezinerfolio Inc. <midart@gmail.com>
 *
 *  For details, please check the website : http://dezinerfolio.com/
 *
/*-------------------------------------------------------------------------- */

Scroller = {
  // control the speed of the scroller.
  // dont change it here directly, please use Scroller.speed=50;
  speed: 10,

  // returns the Y position of the div
  gy(d) {
    gy = d.offsetTop
    if (d.offsetParent) {
      while (d = d.offsetParent) gy += d.offsetTop
    }
    return gy
  },

  // returns the current scroll position
  scrollTop() {
    body = document.body
    d = document.documentElement
    if (body && body.scrollTop)
      return body.scrollTop
    if (d && d.scrollTop)
      return d.scrollTop
    if (window.pageYOffset)
      return window.pageYOffset
    return 0
  },

  // attach an event for an element
  // (element, type, function)
  add(event, body, d) {
    if (event.addEventListener)
      return event.addEventListener(body, d, false)
    if (event.attachEvent)
      return event.attachEvent(`on${body}`, d)
  },

  // kill an event of an element
  end(e) {
    if (window.event) {
      window.event.cancelBubble = true
      window.event.returnValue = false
      return
    }
    if (e.preventDefault && e.stopPropagation) {
      e.preventDefault()
      e.stopPropagation()
    }
  },

  // move the scroll bar to the particular div.
  scroll(d) {
    i = window.innerHeight || document.documentElement.clientHeight
    h = document.body.scrollHeight
    a = Scroller.scrollTop()
    if (d > a) {
      if (h - d > i)
        a += Math.ceil((d - a) / Scroller.speed)
      else
        a += Math.ceil((d - a - (h - d)) / Scroller.speed)
    }
    else {
      a = a + (d - a) / Scroller.speed
    }
    window.scrollTo(0, a)
    if (a == d || Scroller.offsetTop == a)
      clearInterval(Scroller.interval)
    Scroller.offsetTop = a
  },
  // initializer that adds the renderer to the onload function of the window
  init() {
    Scroller.add(window, 'load', Scroller.render)
  },

  // this method extracts all the anchors and validates then as # and attaches the events.
  render() {
    a = document.getElementsByTagName('a')
    Scroller.end(this)
    window.onscroll
    for (i = 0; i < a.length; i++) {
      l = a[i]
      if (l.href && l.href.includes('#ss') && ((l.pathname == location.pathname) || (`/${l.pathname}` == location.pathname))) {
        Scroller.add(l, 'click', Scroller.end)
        l.onclick = function () {
          Scroller.end(this)
          l = this.hash.substr(1)
          a = document.getElementsByTagName('a')
          for (i = 0; i < a.length; i++) {
            if (a[i].name == l) {
              clearInterval(Scroller.interval)
              Scroller.interval = setInterval(`Scroller.scroll(${Scroller.gy(a[i])})`, 10)
            }
          }
        }
      }
    }
  },
}
// invoke the initializer of the scroller
Scroller.init()

/* ------------------------------------------------------------
 *						END OF CODE
/*----------------------------------------------------------- */

/*
 * IE PNG Fix v1.4
 *
 * Copyright (c) 2006 Takashi Aida http://www.isella.com/aod2/
 *
 */

// IE5.5+ PNG Alpha Fix v1.0RC4
// (c) 2004-2005 Angus Turnbull http://www.twinhelix.com

// This is licensed under the CC-GNU LGPL, version 2.1 or later.
// For details, see: http://creativecommons.org/licenses/LGPL/2.1/

if (typeof IEPNGFIX == 'undefined') {
// --============================================================================

  var IEPNGFIX = {
    blank: '/mjSFqQ/images/blank.gif',
    filter: 'DXImageTransform.Microsoft.AlphaImageLoader',

    fixit(elem, src, method) {
      if (elem.filters[this.filter]) {
        let filter = elem.filters[this.filter]
        filter.enabled = true
        filter.src = src
        filter.sizingMethod = method
      }
      else {
        elem.style.filter = `progid:${this.filter
        }(src="${src}",sizingMethod="${method}")`
      }
    },

    fixwidth(elem) {
      if (elem.currentStyle.width == 'auto'
        && elem.currentStyle.height == 'auto') {
        elem.style.width = `${elem.offsetWidth}px`
      }
    },

    fixchild(elem, recursive) {
      if (!/MSIE (5\.5|6\.|7\.)/.test(navigator.userAgent))
        return

      for (let i = 0, n = elem.childNodes.length; i < n; i++) {
        let childNode = elem.childNodes[i]
        if (childNode.style) {
          if (childNode.style.position) {
            childNode.style.position = childNode.style.position
          }
          else {
            childNode.style.position = 'relative'
          }
        }
        if (recursive && childNode.hasChildNodes()) {
          this.fixchild(childNode, recursive)
        }
      }
    },

    fix(elem) {
      if (!/MSIE (5\.5|6\.|7\.)/.test(navigator.userAgent))
        return

      let bgImg
			= elem.currentStyle.backgroundImage || elem.style.backgroundImage

      if (elem.tagName == 'IMG') {
        if ((/\.png$/i).test(elem.src)) {
          this.fixwidth(elem)
          this.fixit(elem, elem.src, 'scale')
          elem.src = this.blank
          elem.runtimeStyle.behavior = 'none'
        }
      }
      else if (bgImg && bgImg != 'none') {
        if (bgImg.match(/^url[("']+(.*\.png)[)"']+$/i)) {
          let s = RegExp.$1
          this.fixwidth(elem)
          elem.style.backgroundImage = 'none'
          this.fixit(elem, s, 'scale') // crop | image | scale

          if (elem.tagName == 'A' && elem.style) {
            if (!elem.style.cursor) {
              elem.style.cursor = 'pointer'
            }
          }

          this.fixchild(elem)
          elem.runtimeStyle.behavior = 'none'
        }
      }
    },

    hover(elem, hvImg) {
      let bgImg = elem.style.backgroundImage

      if (!bgImg && elem.currentStyle)
        bgImg = elem.currentStyle.backgroundImage

      if (elem.tagName == 'IMG' && hvImg) {
        let image = elem.src
        elem.onmouseover = function () {
          elem.src = hvImg
          IEPNGFIX.fix(elem)
        }
        elem.onmouseout = function () {
          elem.src = image
          IEPNGFIX.fix(elem)
        }
      }
      else if (bgImg && bgImg != 'none' && hvImg) {
        elem.onmouseover = function () {
          elem.style.backgroundImage = `url(${hvImg})`
          IEPNGFIX.fix(elem)
        }
        elem.onmouseout = function () {
          elem.style.backgroundImage = bgImg
          IEPNGFIX.fix(elem)
        }
      }

      IEPNGFIX.fix(elem)
    },
  }

// --============================================================================
} // end if (typeof IEPNGFIX == 'undefined')

/* ====================================================================================================
//////////////////////////////////////////////////////////////////////////////////////////////////////

 Author : http://www.yomotsu.net
 created: 2007/03/13
 update : 2008/01/21
 Licensed under the GNU Lesser General Public License version 2.1

//////////////////////////////////////////////////////////////////////////////////////////////////////
==================================================================================================== */
var yomotsuRollover = {

  main() {
    let img = document.images; let ipt = document.getElementsByTagName('input'); let i; let preLoadImg = []
    // img elements
    for (i = 0; i < img.length; i++) {
      if ((img[i].src.match(/.*_n\./)) || (img[i].style.filter)) {
        preLoadImg[preLoadImg.length] = new Image()
        preLoadImg[preLoadImg.length - 1].src = img[i].src.replace('_n.', '_r.')

        img[i].onmouseover = yomotsuRollover.over
        img[i].onmouseout = yomotsuRollover.out
        try { img[i].addEventListener('click', yomotsuRollover.click, false) }
        catch (e) { img[i].attachEvent('onclick', (function (el) { return function () { yomotsuRollover.click.call(el) } })(img[i])) }
      }
    }
    // input[image] elements
    for (i = 0; i < ipt.length; i++) {
      if ((ipt[i].src.match(/.*_n\./)) && (ipt[i].getAttribute('type') == 'image')) {
        preLoadImg[preLoadImg.length] = new Image()
        preLoadImg[preLoadImg.length - 1].src = img[i].src.replace('_n.', '_r.')

        ipt[i].onmouseover = yomotsuRollover.over
        ipt[i].onmouseout = yomotsuRollover.out
        try { ipt[i].addEventListener('click', yomotsuRollover.click, false) }
        catch (e) { ipt[i].attachEvent('onclick', (function (el) { return function () { yomotsuRollover.click.call(el) } })(ipt[i])) }
      }
    }
  },

  over() {
    let imgSrc, preLoadImgSrc
    if ((this.style.filter) && (this.style.filter.match(/_n\.png/)))// (IE5.5-6 && png)
      this.style.filter = this.style.filter.replace('_n.png', '_r.png')
    else
      this.src = this.src.replace('_n.', '_r.')
  },

  out() {
    if ((this.style.filter) && (this.style.filter.match(/_r\.png/)))// (IE5.5-6 && png)
      this.style.filter = this.style.filter.replace('_r.png', '_n.png')
    else
      this.src = this.src.replace('_r.', '_n.')
  },

  click() {
    if ((this.style.filter) && (this.style.filter.match(/_r\.png/)))// (IE5.5-6 && png)
      this.style.filter = this.style.filter.replace('_r.png', '_n.png')
    else
      this.src = this.src.replace('_r.', '_n.')
  },

  addEvent() {
    try {
      window.addEventListener('load', this.main, false)
    }
    catch (e) {
      window.attachEvent('onload', this.main)
    }
  },
}

yomotsuRollover.addEvent()
