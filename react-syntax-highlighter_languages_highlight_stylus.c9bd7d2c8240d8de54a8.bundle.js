(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{3264:function(module,exports){eval("module.exports = function(hljs) {\n\n  var VARIABLE = {\n    className: 'variable',\n    begin: '\\\\$' + hljs.IDENT_RE\n  };\n\n  var HEX_COLOR = {\n    className: 'number',\n    begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'\n  };\n\n  var AT_KEYWORDS = [\n    'charset',\n    'css',\n    'debug',\n    'extend',\n    'font-face',\n    'for',\n    'import',\n    'include',\n    'media',\n    'mixin',\n    'page',\n    'warn',\n    'while'\n  ];\n\n  var PSEUDO_SELECTORS = [\n    'after',\n    'before',\n    'first-letter',\n    'first-line',\n    'active',\n    'first-child',\n    'focus',\n    'hover',\n    'lang',\n    'link',\n    'visited'\n  ];\n\n  var TAGS = [\n    'a',\n    'abbr',\n    'address',\n    'article',\n    'aside',\n    'audio',\n    'b',\n    'blockquote',\n    'body',\n    'button',\n    'canvas',\n    'caption',\n    'cite',\n    'code',\n    'dd',\n    'del',\n    'details',\n    'dfn',\n    'div',\n    'dl',\n    'dt',\n    'em',\n    'fieldset',\n    'figcaption',\n    'figure',\n    'footer',\n    'form',\n    'h1',\n    'h2',\n    'h3',\n    'h4',\n    'h5',\n    'h6',\n    'header',\n    'hgroup',\n    'html',\n    'i',\n    'iframe',\n    'img',\n    'input',\n    'ins',\n    'kbd',\n    'label',\n    'legend',\n    'li',\n    'mark',\n    'menu',\n    'nav',\n    'object',\n    'ol',\n    'p',\n    'q',\n    'quote',\n    'samp',\n    'section',\n    'span',\n    'strong',\n    'summary',\n    'sup',\n    'table',\n    'tbody',\n    'td',\n    'textarea',\n    'tfoot',\n    'th',\n    'thead',\n    'time',\n    'tr',\n    'ul',\n    'var',\n    'video'\n  ];\n\n  var LOOKAHEAD_TAG_END = '(?=[\\\\.\\\\s\\\\n\\\\[\\\\:,])';\n\n  var ATTRIBUTES = [\n    'align-content',\n    'align-items',\n    'align-self',\n    'animation',\n    'animation-delay',\n    'animation-direction',\n    'animation-duration',\n    'animation-fill-mode',\n    'animation-iteration-count',\n    'animation-name',\n    'animation-play-state',\n    'animation-timing-function',\n    'auto',\n    'backface-visibility',\n    'background',\n    'background-attachment',\n    'background-clip',\n    'background-color',\n    'background-image',\n    'background-origin',\n    'background-position',\n    'background-repeat',\n    'background-size',\n    'border',\n    'border-bottom',\n    'border-bottom-color',\n    'border-bottom-left-radius',\n    'border-bottom-right-radius',\n    'border-bottom-style',\n    'border-bottom-width',\n    'border-collapse',\n    'border-color',\n    'border-image',\n    'border-image-outset',\n    'border-image-repeat',\n    'border-image-slice',\n    'border-image-source',\n    'border-image-width',\n    'border-left',\n    'border-left-color',\n    'border-left-style',\n    'border-left-width',\n    'border-radius',\n    'border-right',\n    'border-right-color',\n    'border-right-style',\n    'border-right-width',\n    'border-spacing',\n    'border-style',\n    'border-top',\n    'border-top-color',\n    'border-top-left-radius',\n    'border-top-right-radius',\n    'border-top-style',\n    'border-top-width',\n    'border-width',\n    'bottom',\n    'box-decoration-break',\n    'box-shadow',\n    'box-sizing',\n    'break-after',\n    'break-before',\n    'break-inside',\n    'caption-side',\n    'clear',\n    'clip',\n    'clip-path',\n    'color',\n    'column-count',\n    'column-fill',\n    'column-gap',\n    'column-rule',\n    'column-rule-color',\n    'column-rule-style',\n    'column-rule-width',\n    'column-span',\n    'column-width',\n    'columns',\n    'content',\n    'counter-increment',\n    'counter-reset',\n    'cursor',\n    'direction',\n    'display',\n    'empty-cells',\n    'filter',\n    'flex',\n    'flex-basis',\n    'flex-direction',\n    'flex-flow',\n    'flex-grow',\n    'flex-shrink',\n    'flex-wrap',\n    'float',\n    'font',\n    'font-family',\n    'font-feature-settings',\n    'font-kerning',\n    'font-language-override',\n    'font-size',\n    'font-size-adjust',\n    'font-stretch',\n    'font-style',\n    'font-variant',\n    'font-variant-ligatures',\n    'font-weight',\n    'height',\n    'hyphens',\n    'icon',\n    'image-orientation',\n    'image-rendering',\n    'image-resolution',\n    'ime-mode',\n    'inherit',\n    'initial',\n    'justify-content',\n    'left',\n    'letter-spacing',\n    'line-height',\n    'list-style',\n    'list-style-image',\n    'list-style-position',\n    'list-style-type',\n    'margin',\n    'margin-bottom',\n    'margin-left',\n    'margin-right',\n    'margin-top',\n    'marks',\n    'mask',\n    'max-height',\n    'max-width',\n    'min-height',\n    'min-width',\n    'nav-down',\n    'nav-index',\n    'nav-left',\n    'nav-right',\n    'nav-up',\n    'none',\n    'normal',\n    'object-fit',\n    'object-position',\n    'opacity',\n    'order',\n    'orphans',\n    'outline',\n    'outline-color',\n    'outline-offset',\n    'outline-style',\n    'outline-width',\n    'overflow',\n    'overflow-wrap',\n    'overflow-x',\n    'overflow-y',\n    'padding',\n    'padding-bottom',\n    'padding-left',\n    'padding-right',\n    'padding-top',\n    'page-break-after',\n    'page-break-before',\n    'page-break-inside',\n    'perspective',\n    'perspective-origin',\n    'pointer-events',\n    'position',\n    'quotes',\n    'resize',\n    'right',\n    'tab-size',\n    'table-layout',\n    'text-align',\n    'text-align-last',\n    'text-decoration',\n    'text-decoration-color',\n    'text-decoration-line',\n    'text-decoration-style',\n    'text-indent',\n    'text-overflow',\n    'text-rendering',\n    'text-shadow',\n    'text-transform',\n    'text-underline-position',\n    'top',\n    'transform',\n    'transform-origin',\n    'transform-style',\n    'transition',\n    'transition-delay',\n    'transition-duration',\n    'transition-property',\n    'transition-timing-function',\n    'unicode-bidi',\n    'vertical-align',\n    'visibility',\n    'white-space',\n    'widows',\n    'width',\n    'word-break',\n    'word-spacing',\n    'word-wrap',\n    'z-index'\n  ];\n\n  // illegals\n  var ILLEGAL = [\n    '\\\\?',\n    '(\\\\bReturn\\\\b)', // monkey\n    '(\\\\bEnd\\\\b)', // monkey\n    '(\\\\bend\\\\b)', // vbscript\n    '(\\\\bdef\\\\b)', // gradle\n    ';', // a whole lot of languages\n    '#\\\\s', // markdown\n    '\\\\*\\\\s', // markdown\n    '===\\\\s', // markdown\n    '\\\\|',\n    '%', // prolog\n  ];\n\n  return {\n    aliases: ['styl'],\n    case_insensitive: false,\n    keywords: 'if else for in',\n    illegal: '(' + ILLEGAL.join('|') + ')',\n    contains: [\n\n      // strings\n      hljs.QUOTE_STRING_MODE,\n      hljs.APOS_STRING_MODE,\n\n      // comments\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n\n      // hex colors\n      HEX_COLOR,\n\n      // class tag\n      {\n        begin: '\\\\.[a-zA-Z][a-zA-Z0-9_-]*' + LOOKAHEAD_TAG_END,\n        className: 'selector-class'\n      },\n\n      // id tag\n      {\n        begin: '\\\\#[a-zA-Z][a-zA-Z0-9_-]*' + LOOKAHEAD_TAG_END,\n        className: 'selector-id'\n      },\n\n      // tags\n      {\n        begin: '\\\\b(' + TAGS.join('|') + ')' + LOOKAHEAD_TAG_END,\n        className: 'selector-tag'\n      },\n\n      // psuedo selectors\n      {\n        begin: '&?:?:\\\\b(' + PSEUDO_SELECTORS.join('|') + ')' + LOOKAHEAD_TAG_END\n      },\n\n      // @ keywords\n      {\n        begin: '\\@(' + AT_KEYWORDS.join('|') + ')\\\\b'\n      },\n\n      // variables\n      VARIABLE,\n\n      // dimension\n      hljs.CSS_NUMBER_MODE,\n\n      // number\n      hljs.NUMBER_MODE,\n\n      // functions\n      //  - only from beginning of line + whitespace\n      {\n        className: 'function',\n        begin: '^[a-zA-Z][a-zA-Z0-9_\\-]*\\\\(.*\\\\)',\n        illegal: '[\\\\n]',\n        returnBegin: true,\n        contains: [\n          {className: 'title', begin: '\\\\b[a-zA-Z][a-zA-Z0-9_\\-]*'},\n          {\n            className: 'params',\n            begin: /\\(/,\n            end: /\\)/,\n            contains: [\n              HEX_COLOR,\n              VARIABLE,\n              hljs.APOS_STRING_MODE,\n              hljs.CSS_NUMBER_MODE,\n              hljs.NUMBER_MODE,\n              hljs.QUOTE_STRING_MODE\n            ]\n          }\n        ]\n      },\n\n      // attributes\n      //  - only from beginning of line + whitespace\n      //  - must have whitespace after it\n      {\n        className: 'attribute',\n        begin: '\\\\b(' + ATTRIBUTES.reverse().join('|') + ')\\\\b',\n        starts: {\n          // value container\n          end: /;|$/,\n          contains: [\n            HEX_COLOR,\n            VARIABLE,\n            hljs.APOS_STRING_MODE,\n            hljs.QUOTE_STRING_MODE,\n            hljs.CSS_NUMBER_MODE,\n            hljs.NUMBER_MODE,\n            hljs.C_BLOCK_COMMENT_MODE\n          ],\n          illegal: /\\./,\n          relevance: 0\n        }\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/stylus.js?")}}]);