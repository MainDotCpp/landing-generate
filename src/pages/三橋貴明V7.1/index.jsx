import { redirect } from '@/utils/redicrect'
import background from './static/images/background.jpg'
import bottomImage from './static/images/bottom-image.png'
import line from './static/images/line.png'
import middleImage from './static/images/middle-image.jpg'
import stockMarket from './static/images/stock-market.jpg'
import userAvatar from './static/images/user-avatar.jpg'
import './static/fonts/open-sans.css'
// import './static/js/ladipagev3.min.js'
import './index.css'

export const config = {
  title: '三橋貴明',
}

export default () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>皆様、こんにちは。私は三橋貴明と申します。</title>
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Expires" content={-1} />
      <meta name="keywords" content="" />
      <meta
        name="description"
        content="皆様、こんにちは。私は三橋貴明と申します。"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="25.html" />
      <meta property="og:url" content="https://www.takakimitsuhashi.com/25" />
      <meta
        property="og:title"
        content="皆様、こんにちは。私は三橋貴明と申します。"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="./static/images/avatar.png"
      />
      <meta
        property="og:description"
        content="皆様、こんにちは。私は三橋貴明と申します。"
      />
      <meta name="format-detection" content="telephone=no" />
      <link
        rel="icon"
        type="image/x-icon"
        href="./static/images/avatar.png"
      />
      <link
        rel="shortcut icon"
        href="./static/images/avatar.png"
      />
      <link
        rel="apple-touch-icon"
        href="./static/images/avatar.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="./static/images/avatar.png"
      />
      <meta
        name="msapplication-TileImage"
        content="./static/images/avatar.png"
      />
      <meta name="revisit-after" content="days" />
      <link rel="dns-prefetch" />

      <style
        id="style_ladi"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
        '\n        a,\n        abbr,\n        acronym,\n        address,\n        applet,\n        article,\n        aside,\n        audio,\n        b,\n        big,\n        blockquote,\n        body,\n        button,\n        canvas,\n        caption,\n        center,\n        cite,\n        code,\n        dd,\n        del,\n        details,\n        dfn,\n        div,\n        dl,\n        dt,\n        em,\n        embed,\n        fieldset,\n        figcaption,\n        figure,\n        footer,\n        form,\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6,\n        header,\n        hgroup,\n        html,\n        i,\n        iframe,\n        img,\n        input,\n        ins,\n        kbd,\n        label,\n        legend,\n        li,\n        mark,\n        menu,\n        nav,\n        object,\n        ol,\n        output,\n        p,\n        pre,\n        q,\n        ruby,\n        s,\n        samp,\n        section,\n        select,\n        small,\n        span,\n        strike,\n        strong,\n        sub,\n        summary,\n        sup,\n        table,\n        tbody,\n        td,\n        textarea,\n        tfoot,\n        th,\n        thead,\n        time,\n        tr,\n        tt,\n        u,\n        ul,\n        var,\n        video {\n            margin: 0;\n            padding: 0;\n            border: 0;\n            outline: 0;\n            font-size: 100%;\n            font: inherit;\n            vertical-align: baseline;\n            box-sizing: border-box;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale\n        }\n\n        article,\n        aside,\n        details,\n        figcaption,\n        figure,\n        footer,\n        header,\n        hgroup,\n        menu,\n        nav,\n        section {\n            display: block\n        }\n\n        body {\n            line-height: 1\n        }\n\n        a {\n            text-decoration: none\n        }\n\n        ol,\n        ul {\n            list-style: none\n        }\n\n        blockquote,\n        q {\n            quotes: none\n        }\n\n        blockquote:after,\n        blockquote:before,\n        q:after,\n        q:before {\n            content: \'\';\n            content: none\n        }\n\n        table {\n            border-collapse: collapse;\n            border-spacing: 0\n        }\n\n        .ladi-loading {\n            z-index: 900000000000;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            background-color: rgba(0, 0, 0, .1)\n        }\n\n        .ladi-loading .loading {\n            width: 80px;\n            height: 80px;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            right: 0;\n            margin: auto;\n            overflow: hidden;\n            position: absolute\n        }\n\n        .ladi-loading .loading div {\n            position: absolute;\n            width: 6px;\n            height: 6px;\n            background: #fff;\n            border-radius: 50%;\n            animation: ladi-loading 1.2s linear infinite\n        }\n\n        .ladi-loading .loading div:nth-child(1) {\n            animation-delay: 0s;\n            top: 37px;\n            left: 66px\n        }\n\n        .ladi-loading .loading div:nth-child(2) {\n            animation-delay: -.1s;\n            top: 22px;\n            left: 62px\n        }\n\n        .ladi-loading .loading div:nth-child(3) {\n            animation-delay: -.2s;\n            top: 11px;\n            left: 52px\n        }\n\n        .ladi-loading .loading div:nth-child(4) {\n            animation-delay: -.3s;\n            top: 7px;\n            left: 37px\n        }\n\n        .ladi-loading .loading div:nth-child(5) {\n            animation-delay: -.4s;\n            top: 11px;\n            left: 22px\n        }\n\n        .ladi-loading .loading div:nth-child(6) {\n            animation-delay: -.5s;\n            top: 22px;\n            left: 11px\n        }\n\n        .ladi-loading .loading div:nth-child(7) {\n            animation-delay: -.6s;\n            top: 37px;\n            left: 7px\n        }\n\n        .ladi-loading .loading div:nth-child(8) {\n            animation-delay: -.7s;\n            top: 52px;\n            left: 11px\n        }\n\n        .ladi-loading .loading div:nth-child(9) {\n            animation-delay: -.8s;\n            top: 62px;\n            left: 22px\n        }\n\n        .ladi-loading .loading div:nth-child(10) {\n            animation-delay: -.9s;\n            top: 66px;\n            left: 37px\n        }\n\n        .ladi-loading .loading div:nth-child(11) {\n            animation-delay: -1s;\n            top: 62px;\n            left: 52px\n        }\n\n        .ladi-loading .loading div:nth-child(12) {\n            animation-delay: -1.1s;\n            top: 52px;\n            left: 62px\n        }\n\n        @keyframes ladi-loading {\n\n            0%,\n            100%,\n            20%,\n            80% {\n                transform: scale(1)\n            }\n\n            50% {\n                transform: scale(1.5)\n            }\n        }\n\n        .ladipage-message {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            z-index: 10000000000;\n            background: rgba(0, 0, 0, .3)\n        }\n\n        .ladipage-message .ladipage-message-box {\n            width: 400px;\n            max-width: calc(100% - 50px);\n            height: 160px;\n            border: 1px solid rgba(0, 0, 0, .3);\n            background-color: #fff;\n            position: fixed;\n            top: calc(50% - 155px);\n            left: 0;\n            right: 0;\n            margin: auto;\n            border-radius: 10px\n        }\n\n        .ladipage-message .ladipage-message-box span {\n            display: block;\n            background-color: rgba(6, 21, 40, .05);\n            color: #000;\n            padding: 12px 15px;\n            font-weight: 600;\n            font-size: 16px;\n            line-height: 16px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px\n        }\n\n        .ladipage-message .ladipage-message-box .ladipage-message-text {\n            display: -webkit-box;\n            font-size: 14px;\n            padding: 0 20px;\n            margin-top: 16px;\n            line-height: 20px;\n            -webkit-line-clamp: 3;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            word-break: break-word\n        }\n\n        .ladipage-message .ladipage-message-box .ladipage-message-close {\n            display: block;\n            position: absolute;\n            right: 15px;\n            bottom: 10px;\n            margin: 0 auto;\n            padding: 10px 0;\n            border: none;\n            width: 80px;\n            text-transform: uppercase;\n            text-align: center;\n            color: #000;\n            background-color: #e6e6e6;\n            border-radius: 5px;\n            text-decoration: none;\n            font-size: 14px;\n            line-height: 14px;\n            font-weight: 600;\n            cursor: pointer;\n            outline: 0\n        }\n\n        .lightbox-screen {\n            display: none;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            right: 0;\n            margin: auto;\n            z-index: 9000000080;\n            background: rgba(0, 0, 0, .5)\n        }\n\n        .lightbox-screen .lightbox-close {\n            position: absolute;\n            z-index: 9000000090;\n            cursor: pointer\n        }\n\n        .lightbox-screen .lightbox-hidden {\n            display: none\n        }\n\n        .lightbox-screen .lightbox-close {\n            width: 16px;\n            height: 16px;\n            margin: 10px;\n            background-repeat: no-repeat;\n            background-position: center center;\n            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")\n        }\n\n        * {\n            -webkit-tap-highlight-color: #fff0\n        }\n\n        body {\n            font-size: 12px;\n            -ms-text-size-adjust: none;\n            -moz-text-size-adjust: none;\n            -o-text-size-adjust: none;\n            -webkit-text-size-adjust: none;\n            background-color: #fff\n        }\n\n        .overflow-hidden {\n            overflow: hidden\n        }\n\n        .ladi-transition {\n            transition: all 150ms linear 0s\n        }\n\n        .z-index-1 {\n            z-index: 1\n        }\n\n        .opacity-0 {\n            opacity: 0\n        }\n\n        .height-0 {\n            height: 0 !important\n        }\n\n        .pointer-events-none {\n            pointer-events: none\n        }\n\n        .transition-parent-collapse-height {\n            transition: height 150ms linear 0s\n        }\n\n        .transition-parent-collapse-top {\n            transition: top 150ms linear 0s\n        }\n\n        .transition-readmore {\n            transition: height 350ms linear 0s\n        }\n\n        .transition-collapse {\n            transition: height 150ms linear 0s\n        }\n\n        body.grab {\n            cursor: grab\n        }\n\n        .ladi-wraper {\n            width: 100%;\n            min-height: 100%;\n            overflow: hidden;\n            touch-action: manipulation\n        }\n\n        .ladi-container {\n            position: relative;\n            margin: 0 auto;\n            height: 100%\n        }\n\n        .ladi-overlay {\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            pointer-events: none\n        }\n\n        .ladi-element {\n            position: absolute\n        }\n\n        @media (hover: hover) {\n            .ladi-check-hover {\n                opacity: 0;\n            }\n        }\n\n        .ladi-section {\n            margin: 0 auto;\n            position: relative;\n        }\n\n        .ladi-section[data-tab-id] {\n            display: none;\n        }\n\n        .ladi-section.selected[data-tab-id] {\n            display: block;\n        }\n\n        .ladi-section .ladi-section-background {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            pointer-events: none;\n            overflow: hidden;\n        }\n\n        .ladi-box {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n        }\n\n        .ladi-group {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n        }\n\n        .ladi-shape {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            pointer-events: none;\n        }\n\n        .ladi-shape .ladi-cart-number {\n            position: absolute;\n            top: -2px;\n            right: -7px;\n            background: #f36e36;\n            text-align: center;\n            width: 18px;\n            height: 18px;\n            line-height: 18px;\n            font-size: 12px;\n            font-weight: bold;\n            color: #fff;\n            border-radius: 100%;\n        }\n\n        .ladi-image {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n        }\n\n        .ladi-image .ladi-image-background {\n            background-repeat: no-repeat;\n            background-position: left top;\n            background-size: cover;\n            background-attachment: scroll;\n            background-origin: content-box;\n            position: absolute;\n            margin: 0 auto;\n            width: 100%;\n            height: 100%;\n            pointer-events: none;\n        }\n\n        .ladi-headline {\n            width: 100%;\n            display: inline-block;\n            word-break: break-word;\n            background-size: cover;\n            background-position: center center;\n        }\n\n        .ladi-headline a {\n            text-decoration: underline;\n        }\n\n        .ladi-paragraph {\n            width: 100%;\n            display: inline-block;\n            word-break: break-word;\n        }\n\n        .ladi-paragraph a {\n            text-decoration: underline;\n        }\n\n        a[data-action] {\n            user-select: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            cursor: pointer;\n        }\n\n        a:visited {\n            color: inherit;\n        }\n\n        a:link {\n            color: inherit;\n        }\n\n        [data-opacity="0"] {\n            opacity: 0;\n        }\n\n        [data-hidden="true"] {\n            display: none;\n        }\n\n        [data-action="true"] {\n            cursor: pointer;\n        }\n\n        .ladi-hidden {\n            display: none;\n        }\n\n        .ladi-animation-hidden {\n            visibility: hidden !important;\n            opacity: 0 !important;\n        }\n\n        .element-click-selected {\n            cursor: pointer;\n        }\n\n        .is-2nd-click {\n            cursor: pointer;\n        }\n\n        .ladi-button-shape.is-2nd-click,\n        .ladi-accordion-shape.is-2nd-click {\n            z-index: 3;\n        }\n\n        .backdrop-popup {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            z-index: 90000060;\n        }\n\n        .backdrop-dropbox {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            z-index: 90000040;\n        }\n\n        .ladi-lazyload {\n            background-image: none !important;\n        }\n\n        .ladi-list-paragraph ul li.ladi-lazyload:before {\n            background-image: none !important;\n        }\n\n        .ladi-element.ladi-auto-scroll {\n            overflow-x: auto;\n            overflow-y: hidden;\n            width: 100% !important;\n            left: 0 !important;\n            -webkit-overflow-scrolling: touch;\n        }\n\n        [data-hint]:not([data-timeout-id-copied]):before,\n        [data-hint]:not([data-timeout-id-copied]):after {\n            display: none !important;\n        }\n\n        .ladi-section.ladi-auto-scroll {\n            overflow-x: auto;\n            overflow-y: hidden;\n            -webkit-overflow-scrolling: touch;\n        }\n    ',
        }}
      />
      <style
        type="text/css"
        id="style_animation"
        dangerouslySetInnerHTML={{
          __html:
        '\n        @media (max-width: 767px) {\n\n            #GROUP1,\n            #PARAGRAPH3,\n            #GROUP13,\n            #GROUP14 {\n                opacity: 0 !important;\n                pointer-events: none !important;\n            }\n        }\n    ',
        }}
      />
      <style
        id="style_page"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
        '\n        body {\n            direction: ltr;\n        }\n\n        .ladi-wraper {\n            margin: 0 auto;\n            width: 420px;\n        }\n\n        body {\n            font-family: "Open Sans", sans-serif\n        }\n    ',
        }}
      />
      <style
        id="style_element"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
        `\n        #SECTION1 {\n            height: 2180.1px;\n        }\n\n        #SECTION1>.ladi-section-background {\n            background-image: url("${background}");\n            background-size: cover;\n            background-position: 50% 0%;\n            background-repeat: repeat;\n            background-attachment: fixed;\n        }\n\n        #HEADLINE3 {\n            width: 383px;\n            top: 317px;\n            left: 23.5px;\n        }\n\n        #HEADLINE3>.ladi-headline {\n            font-size: 18px;\n            font-weight: bold;\n            line-height: 1.6;\n            color: rgb(255, 255, 255);\n            text-align: center;\n        }\n\n        #HEADLINE3>.ladi-headline:hover,\n        #BOX2>.ladi-box:hover,\n        #HEADLINE4>.ladi-headline:hover,\n        #BOX3>.ladi-box:hover,\n        #HEADLINE6>.ladi-headline:hover,\n        #BOX6>.ladi-box:hover,\n        #HEADLINE9>.ladi-headline:hover,\n        #BOX8>.ladi-box:hover,\n        #PARAGRAPH3>.ladi-paragraph:hover,\n        #PARAGRAPH4>.ladi-paragraph:hover,\n        #BOX11>.ladi-box:hover,\n        #HEADLINE13>.ladi-headline:hover,\n        #BOX12>.ladi-box:hover,\n        #HEADLINE14>.ladi-headline:hover {\n            opacity: 1;\n        }\n\n        #GROUP1,\n        #GROUP13,\n        #GROUP14 {\n            width: 371.5px;\n            height: 68.3467px;\n        }\n\n        #GROUP1 {\n            top: 511.5px;\n            left: 25px;\n        }\n\n        #GROUP1.ladi-animation>.ladi-group,\n        #GROUP13.ladi-animation>.ladi-group,\n        #GROUP14.ladi-animation>.ladi-group {\n            animation-name: pulse;\n            animation-delay: 0s;\n            animation-duration: 2s;\n            animation-iteration-count: infinite;\n        }\n\n        #BOX2,\n        #BOX11,\n        #BOX12 {\n            width: 371.5px;\n            height: 68px;\n        }\n\n        #BOX2,\n        #IMAGE4>.ladi-image>.ladi-image-background,\n        #BOX3,\n        #BOX6,\n        #BOX8,\n        #IMAGE9>.ladi-image>.ladi-image-background,\n        #BOX11,\n        #IMAGE14>.ladi-image>.ladi-image-background,\n        #BOX12,\n        #IMAGE15>.ladi-image>.ladi-image-background,\n        #IMAGE16>.ladi-image>.ladi-image-background {\n            top: 0px;\n            left: 0px;\n        }\n\n        #BOX2>.ladi-box,\n        #BOX11>.ladi-box,\n        #BOX12>.ladi-box {\n            border-width: 2px;\n            border-radius: 15px;\n            border-style: solid;\n            border-color: rgb(255, 255, 255);\n            background-color: rgb(84, 84, 84);\n        }\n\n        #BOX2>.ladi-box,\n        #BOX8>.ladi-box,\n        #BOX11>.ladi-box,\n        #BOX12>.ladi-box {\n            box-shadow: rgb(0, 0, 0) 0px 15px 20px -15px;\n        }\n\n        #IMAGE4,\n        #SHAPE1,\n        #IMAGE14,\n        #SHAPE8,\n        #IMAGE15,\n        #SHAPE9 {\n            width: 56.6538px;\n            height: 55.3067px;\n        }\n\n        #IMAGE4,\n        #IMAGE14,\n        #IMAGE15 {\n            top: 6.34667px;\n            left: 5.5725px;\n        }\n\n        #IMAGE4>.ladi-image>.ladi-image-background,\n        #IMAGE14>.ladi-image>.ladi-image-background,\n        #IMAGE15>.ladi-image>.ladi-image-background {\n            width: 61.1525px;\n            height: 61px;\n            background-image: url("${userAvatar}");\n        }\n\n        #IMAGE4>.ladi-image,\n        #IMAGE14>.ladi-image,\n        #IMAGE15>.ladi-image {\n            border-radius: 100px;\n        }\n\n        #SHAPE1,\n        #SHAPE8,\n        #SHAPE9 {\n            top: 6.34665px;\n            left: 314.846px;\n        }\n\n        #SHAPE1 svg:last-child,\n        #SHAPE8 svg:last-child,\n        #SHAPE9 svg:last-child {\n            fill: rgb(0, 0, 0);\n        }\n\n        #HEADLINE4,\n        #HEADLINE13,\n        #HEADLINE14 {\n            width: 247px;\n            top: 6.34667px;\n            left: 65.9412px;\n        }\n\n        #HEADLINE4>.ladi-headline,\n        #HEADLINE13>.ladi-headline,\n        #HEADLINE14>.ladi-headline {\n            font-size: 12.9px;\n            font-weight: bold;\n            line-height: 1.6;\n            color: rgb(255, 255, 255);\n            text-align: center;\n        }\n\n        #GROUP4 {\n            width: 370px;\n            height: 391.5px;\n            top: 598.5px;\n            left: 25.75px;\n        }\n\n        #BOX3 {\n            width: 370px;\n            height: 380px;\n        }\n\n        #BOX3>.ladi-box,\n        #BOX6>.ladi-box {\n            border-width: 5px;\n            border-radius: 15px;\n            border-color: rgb(84, 84, 84);\n            background-image: linear-gradient(rgb(0, 0, 0), rgb(84, 84, 84));\n            background-color: initial;\n            background-size: initial;\n            background-origin: initial;\n            background-position: initial;\n            background-repeat: initial;\n            background-attachment: initial;\n            -webkit-background-clip: initial;\n            box-shadow: rgb(0, 0, 0) 0px 15px 20px -15px;\n        }\n\n        #HEADLINE6 {\n            width: 317px;\n            top: 17.5px;\n            left: 26.5px;\n        }\n\n        #HEADLINE6>.ladi-headline {\n            font-size: 18px;\n            font-weight: bold;\n            line-height: 1.6;\n            color: rgb(255, 255, 255);\n            text-align: left;\n        }\n\n        #GROUP5,\n        #BOX6 {\n            width: 375.56px;\n            height: 329px;\n        }\n\n        #GROUP5 {\n            top: 1737.5px;\n            left: 22.22px;\n        }\n\n        #HEADLINE9 {\n            width: 356px;\n            top: 28.5px;\n            left: 9.78px;\n        }\n\n        #HEADLINE9>.ladi-headline {\n            font-size: 17px;\n            font-weight: bold;\n            line-height: 1.6;\n            color: rgb(255, 255, 255);\n            text-align: center;\n        }\n\n        #GROUP9,\n        #BOX8 {\n            width: 398.5px;\n            height: 54px;\n        }\n\n        #GROUP9 {\n            top: 8px;\n            left: 0px;\n            right: 0px;\n            bottom: auto;\n            position: fixed;\n            z-index: 90000050;\n            margin: 0px auto;\n        }\n\n        #BOX8>.ladi-box {\n            border-width: 1px;\n            border-radius: 15px;\n            border-style: solid;\n            border-color: rgb(255, 255, 255);\n            background-image: url("${stockMarket}");\n            background-size: cover;\n            background-origin: content-box;\n            background-position: 50% 0%;\n            background-repeat: repeat;\n            background-attachment: scroll;\n        }\n\n        #PARAGRAPH3 {\n            width: 346px;\n            top: 9px;\n            left: 26.25px;\n        }\n\n        #PARAGRAPH3>.ladi-paragraph {\n            font-size: 15px;\n            font-weight: bold;\n            line-height: 1.2;\n            color: rgb(255, 236, 82);\n            text-align: center;\n        }\n\n        #PARAGRAPH3>.ladi-paragraph,\n        #PARAGRAPH4>.ladi-paragraph {\n            text-shadow: rgb(0, 0, 0) 1px 1px 1px;\n        }\n\n        #PARAGRAPH3.ladi-animation>.ladi-paragraph {\n            animation-name: pulse;\n            animation-delay: 0s;\n            animation-duration: 2s;\n            animation-iteration-count: 1;\n        }\n\n        #IMAGE9,\n        #IMAGE9>.ladi-image>.ladi-image-background {\n            width: 401.5px;\n            height: 226.066px;\n        }\n\n        #IMAGE9 {\n            top: 76.695px;\n            left: 14.25px;\n        }\n\n        #IMAGE9>.ladi-image>.ladi-image-background {\n            background-image: url("${middleImage}");\n        }\n\n        #PARAGRAPH4 {\n            width: 381px;\n            top: 349.5px;\n            left: 19.5px;\n        }\n\n        #PARAGRAPH4>.ladi-paragraph {\n            font-size: 18px;\n            font-weight: bold;\n            line-height: 1.4;\n            color: rgb(255, 222, 89);\n            text-align: center;\n        }\n\n        #GROUP13 {\n            top: 998.327px;\n            left: 22.22px;\n        }\n\n        #GROUP14 {\n            top: 2083.33px;\n            left: 31.25px;\n        }\n\n        #IMAGE16,\n        #IMAGE16>.ladi-image>.ladi-image-background {\n            width: 407px;\n            height: 651.2px;\n        }\n\n        #IMAGE16 {\n            top: 1075.9px;\n            left: 6.5px;\n        }\n\n        #IMAGE16>.ladi-image>.ladi-image-background {\n            background-image: url("${bottomImage}");\n        }\n    `,
        }}
      />
      <style
        id="style_lazyload"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
        '\n        body.lazyload .ladi-overlay,\n        body.lazyload .ladi-box,\n        body.lazyload .ladi-button-background,\n        body.lazyload .ladi-collection-item:before,\n        body.lazyload .ladi-countdown-background,\n        body.lazyload .ladi-form-item-background,\n        body.lazyload .ladi-form-label-container .ladi-form-label-item.image,\n        body.lazyload .ladi-frame-background,\n        body.lazyload .ladi-gallery-view-item,\n        body.lazyload .ladi-gallery-control-item,\n        body.lazyload .ladi-headline,\n        body.lazyload .ladi-image-background,\n        body.lazyload .ladi-image-compare,\n        body.lazyload .ladi-list-paragraph ul li:before,\n        body.lazyload .ladi-section-background,\n        body.lazyload .ladi-survey-option-background,\n        body.lazyload .ladi-survey-option-image,\n        body.lazyload .ladi-tabs-background,\n        body.lazyload .ladi-video-background,\n        body.lazyload .ladi-banner,\n        body.lazyload .ladi-spin-lucky-screen,\n        body.lazyload .ladi-spin-lucky-start {\n            background-image: none !important;\n        }\n    ',
        }}
      />

      <div className="ladi-wraper">
        <div id="SECTION1" className="ladi-section">
          <div className="ladi-section-background" />
          <div className="ladi-container">
            <div id="HEADLINE3" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                皆様、こんにちは。私は三橋貴明と申します。
                <br />
              </h3>
            </div>
            <div data-action="true" id="GROUP1" className="ladi-element" onClick={redirect}>
              <div className="ladi-group">
                <div id="BOX2" className="ladi-element">
                  <div className="ladi-box ladi-transition" />
                </div>
                <div id="IMAGE4" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background" />
                  </div>
                </div>
                <div id="SHAPE1" className="ladi-element">
                  <div className="ladi-shape">
                    <img
                      src={line}
                      width="100%"
                      height="100%"
                      alt="LINE"
                    />
                  </div>
                </div>
                <div id="HEADLINE4" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    ここをクリック三橋貴明 の
                    LINEを追加今す関連情報を無料で受け取るために、率先してメッセージを送信してください
                    <br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="GROUP4" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX3" className="ladi-element">
                  <div className="ladi-box ladi-transition" />
                </div>
                <div id="HEADLINE6" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    投資と株式の分野で25年の実戦経験を持つ私が、誇りと責任を持ってお約束いたします。
                    <br />
                    皆様にお届けするすべての銘柄は、長年にわたり実証されてきた私独自の投資手法に基づき、厳選されたものです。
                    <br />
                    正しい戦略に従ってご一緒いただければ、月に1,000万円以上の利益を目指すことは十分可能です。
                    <br />
                    これは単なる約束ではなく、私の「名誉」をかけてお届けする銘柄です。
                    <br />
                    <br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="GROUP5" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX6" className="ladi-element">
                  <div className="ladi-box ladi-transition" />
                </div>
                <div id="HEADLINE9" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    最近は株教育に力を入れており、株の知識や自分の投資哲学を人々に共有することに努めています。
                    「三橋貴明投資教室」を開設し、多くのプロ投資家をお招きして無料公開講座を開催してきました。
                    私自身の投資経験と強力なChatgptを使って、投資とお金の稼ぎ方を教えます。
                    私たちは、お客様の投資の力を最大限に活用し、ご自身の資産を増やすお手伝いをいたします。
                    最も重要なことは、これらがすべて無料であるということです。
                    <br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="GROUP9" className="ladi-element" onClick={redirect}>
              <div className="ladi-group">
                <div id="BOX8" className="ladi-element">
                  <div className="ladi-box ladi-transition" />
                </div>
                <div id="PARAGRAPH3" className="ladi-element">
                  <div className="ladi-paragraph ladi-transition">
                    会社設立25周年を記念し、感謝の気持ちを込めて今月の有望株3〜5銘柄をプレゼントいたします。
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div id="IMAGE9" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background" />
              </div>
            </div>
            <div id="PARAGRAPH4" className="ladi-element">
              <div className="ladi-paragraph ladi-transition">
                私は投資と株式の分野で25年の経験を持っており、今回皆様にお渡しする銘柄は、1ヶ月で1,000万円の利益を目指せると自信を持ってお約束いたします。
                <br />
                利益が出なかった場合、15日以内ならお客様に2倍返金いたします。
                <br />
              </div>
            </div>
            <div data-action="true" id="GROUP13" className="ladi-element" onClick={redirect}>
              <div className="ladi-group">
                <div id="BOX11" className="ladi-element">
                  <div className="ladi-box ladi-transition" />
                </div>
                <div id="IMAGE14" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background" />
                  </div>
                </div>
                <div id="SHAPE8" className="ladi-element">
                  <div className="ladi-shape">
                    <img
                      src={line}
                      width="100%"
                      height="100%"
                      alt="LINE"
                    />
                  </div>
                </div>
                <div id="HEADLINE13" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    ここをクリック三橋貴明 の
                    LINEを追加今す関連情報を無料で受け取るために、率先してメッセージを送信してください
                    <br />
                  </h3>
                </div>
              </div>
            </div>
            <div data-action="true" id="GROUP14" className="ladi-element" onClick={redirect}>
              <div className="ladi-group">
                <div id="BOX12" className="ladi-element">
                  <div className="ladi-box ladi-transition" />
                </div>
                <div id="IMAGE15" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background" />
                  </div>
                </div>
                <div id="SHAPE9" className="ladi-element">
                  <div className="ladi-shape">
                    <img
                      src={line}
                      width="100%"
                      height="100%"
                      alt="LINE"
                    />
                  </div>
                </div>
                <div id="HEADLINE14" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    ここをクリック三橋貴明 の
                    LINEを追加今す関連情報を無料で受け取るために、率先してメッセージを送信してください
                    <br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="IMAGE16" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="backdrop-popup" className="backdrop-popup" />
      <div id="backdrop-dropbox" className="backdrop-dropbox" />
      <div id="lightbox-screen" className="lightbox-screen" />
      {/* [if lt IE 9]><![endif] */}
      <link
        href="./static/fonts/open-sans.css"
        rel="stylesheet"
        type="text/css"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
        '\n        @-webkit-keyframes pulse {\n            0% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n            }\n\n            50% {\n                -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n            }\n\n            100% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n            }\n        }\n\n        @keyframes pulse {\n            0% {\n                -webkit-transform: scale(1);\n                -ms-transform: scale(1);\n                transform: scale(1);\n            }\n\n            50% {\n                -webkit-transform: scale(1.1);\n                -ms-transform: scale(1.1);\n                transform: scale(1.1);\n            }\n\n            100% {\n                -webkit-transform: scale(1);\n                -ms-transform: scale(1);\n                transform: scale(1);\n            }\n        }\n\n        @-webkit-keyframes breathe {\n            0% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n                opacity: 1;\n            }\n\n            50% {\n                -webkit-transform: scale(1.05);\n                transform: scale(1.05);\n                opacity: 0.8;\n            }\n\n            100% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n                opacity: 1;\n            }\n        }\n\n        @keyframes breathe {\n            0% {\n                -webkit-transform: scale(1);\n                -ms-transform: scale(1);\n                transform: scale(1);\n                opacity: 1;\n            }\n\n            50% {\n                -webkit-transform: scale(1.05);\n                -ms-transform: scale(1.05);\n                transform: scale(1.05);\n                opacity: 0.8;\n            }\n\n            100% {\n                -webkit-transform: scale(1);\n                -ms-transform: scale(1);\n                transform: scale(1);\n                opacity: 1;\n            }\n        }\n\n        #GROUP1>.ladi-group,\n        \n        #GROUP13>.ladi-group,\n        #GROUP14>.ladi-group {\n            animation: breathe 3s ease-in-out infinite !important;\n        }\n    ',
        }}
      />

    </>

  )
}
