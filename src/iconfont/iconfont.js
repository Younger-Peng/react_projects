;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-selected" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M464.247574 677.487844C474.214622 686.649009 489.665824 686.201589 499.086059 676.479029L798.905035 367.037898C808.503379 357.131511 808.253662 341.319801 798.347275 331.721456 788.44089 322.12311 772.62918 322.372828 763.030833 332.279215L463.211858 641.720346 498.050342 640.711531 316.608839 473.940462C306.453341 464.606085 290.653676 465.271736 281.319299 475.427234 271.984922 485.582733 272.650573 501.382398 282.806071 510.716775L464.247574 677.487844Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-clock" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 625.316262 1024 733.09232 987.060258 821.44823 919.93747 832.170355 911.792017 834.259159 896.496821 826.113707 885.774697 817.968254 875.052572 802.67306 872.963767 791.950935 881.10922 712.006355 941.842033 614.569408 975.238095 512 975.238095 256.160663 975.238095 48.761905 767.839337 48.761905 512 48.761905 256.160663 256.160663 48.761905 512 48.761905 767.839337 48.761905 975.238095 256.160663 975.238095 512 975.238095 606.738266 946.765111 697.157764 894.355733 773.603714 886.741822 784.709602 889.572629 799.884996 900.678517 807.498908 911.784403 815.112819 926.959799 812.282012 934.573709 801.176124 992.505146 716.675526 1024 616.659703 1024 512Z"  ></path>' +
    '' +
    '<path d="M487.619049 609.52381C487.619049 622.989037 498.534771 633.904762 512 633.904762 525.465229 633.904762 536.380951 622.989037 536.380951 609.52381L536.380951 243.809523C536.380951 230.344297 525.465229 219.428572 512 219.428572 498.534771 219.428572 487.619049 230.344297 487.619049 243.809523L487.619049 609.52381Z"  ></path>' +
    '' +
    '<path d="M481.586633 471.564079C472.719716 461.430462 457.316742 460.403597 447.183125 469.270511 437.049508 478.137425 436.022643 493.540401 444.889559 503.674018L615.556226 698.721636C624.42314 708.855253 639.826114 709.882118 649.959731 701.015204 660.093348 692.148288 661.120213 676.745314 652.253299 666.611697L481.586633 471.564079Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dustbin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 448c-17.664 0-32 14.912-32 32.192v383.616c0 17.792 14.848 32.192 32 32.192 17.664 0 32-14.912 32-32.192V480.192A32.448 32.448 0 0 0 512 448z m160 0c-17.664 0-32 14.912-32 32.192v383.616c0 17.792 14.848 32.192 32 32.192 17.664 0 32-14.912 32-32.192V480.192A32.448 32.448 0 0 0 672 448z m-320 0c-17.664 0-32 14.912-32 32.192v383.616c0 17.792 14.848 32.192 32 32.192 17.664 0 32-14.912 32-32.192V480.192A32.448 32.448 0 0 0 352 448z" fill="#313131" ></path>' +
    '' +
    '<path d="M320 128H96.32a95.936 95.936 0 1 0 0 192H128v575.424A128.64 128.64 0 0 0 256.576 1024h510.848A128.64 128.64 0 0 0 896 895.424V320h31.68a95.936 95.936 0 1 0 0-192H704v-32C704 43.008 661.44 0 608.064 0H416C362.88 0 320 42.624 320 96V128z m607.68 64a31.936 31.936 0 1 1 0 64H96.32a31.936 31.936 0 1 1 0-64h831.36zM832 320v575.424A64.64 64.64 0 0 1 767.424 960H256.64A64.64 64.64 0 0 1 192 895.424V320h640zM608.064 64c17.856 0 31.936 14.144 31.936 32V128H384v-32c0-17.92 14.08-32 31.936-32H608z" fill="#313131" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)