(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{3240:function(module,exports){eval("module.exports = function(hljs) {\n  var KEYWORDS = {\n      keyword:\n        'in of on if for while finally var new function do return void else break catch ' +\n        'instanceof with throw case default try this switch continue typeof delete ' +\n        'let yield const export super debugger as async await import',\n      literal:\n        'true false null undefined NaN Infinity',\n      built_in:\n        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +\n        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +\n        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +\n        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +\n        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +\n        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +\n        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +\n        'Behavior bool color coordinate date double enumeration font geocircle georectangle ' +\n        'geoshape int list matrix4x4 parent point quaternion real rect ' +\n        'size string url variant vector2d vector3d vector4d' +\n        'Promise'\n    };\n\n  var QML_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9\\\\._]*';\n\n  // Isolate property statements. Ends at a :, =, ;, ,, a comment or end of line.\n  // Use property class.\n  var PROPERTY = {\n      className: 'keyword',\n      begin: '\\\\bproperty\\\\b',\n      starts: {\n        className: 'string',\n        end: '(:|=|;|,|//|/\\\\*|$)',\n        returnEnd: true\n      }\n  };\n\n  // Isolate signal statements. Ends at a ) a comment or end of line.\n  // Use property class.\n  var SIGNAL = {\n      className: 'keyword',\n      begin: '\\\\bsignal\\\\b',\n      starts: {\n        className: 'string',\n        end: '(\\\\(|:|=|;|,|//|/\\\\*|$)',\n        returnEnd: true\n      }\n  };\n\n  // id: is special in QML. When we see id: we want to mark the id: as attribute and\n  // emphasize the token following.\n  var ID_ID = {\n      className: 'attribute',\n      begin: '\\\\bid\\\\s*:',\n      starts: {\n        className: 'string',\n        end: QML_IDENT_RE,\n        returnEnd: false\n      }\n  };\n\n  // Find QML object attribute. An attribute is a QML identifier followed by :.\n  // Unfortunately it's hard to know where it ends, as it may contain scalars,\n  // objects, object definitions, or javascript. The true end is either when the parent\n  // ends or the next attribute is detected.\n  var QML_ATTRIBUTE = {\n    begin: QML_IDENT_RE + '\\\\s*:',\n    returnBegin: true,\n    contains: [\n      {\n        className: 'attribute',\n        begin: QML_IDENT_RE,\n        end: '\\\\s*:',\n        excludeEnd: true,\n        relevance: 0\n      }\n    ],\n    relevance: 0\n  };\n\n  // Find QML object. A QML object is a QML identifier followed by { and ends at the matching }.\n  // All we really care about is finding IDENT followed by { and just mark up the IDENT and ignore the {.\n  var QML_OBJECT = {\n    begin: QML_IDENT_RE + '\\\\s*{', end: '{',\n    returnBegin: true,\n    relevance: 0,\n    contains: [\n      hljs.inherit(hljs.TITLE_MODE, {begin: QML_IDENT_RE})\n    ]\n  };\n\n  return {\n    aliases: ['qt'],\n    case_insensitive: false,\n    keywords: KEYWORDS,\n    contains: [\n      {\n        className: 'meta',\n        begin: /^\\s*['\"]use (strict|asm)['\"]/\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      { // template string\n        className: 'string',\n        begin: '`', end: '`',\n        contains: [\n          hljs.BACKSLASH_ESCAPE,\n          {\n            className: 'subst',\n            begin: '\\\\$\\\\{', end: '\\\\}'\n          }\n        ]\n      },\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'number',\n        variants: [\n          { begin: '\\\\b(0[bB][01]+)' },\n          { begin: '\\\\b(0[oO][0-7]+)' },\n          { begin: hljs.C_NUMBER_RE }\n        ],\n        relevance: 0\n      },\n      { // \"value\" container\n        begin: '(' + hljs.RE_STARTERS_RE + '|\\\\b(case|return|throw)\\\\b)\\\\s*',\n        keywords: 'return throw case',\n        contains: [\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.REGEXP_MODE,\n          { // E4X / JSX\n            begin: /</, end: />\\s*[);\\]]/,\n            relevance: 0,\n            subLanguage: 'xml'\n          }\n        ],\n        relevance: 0\n      },\n      SIGNAL,\n      PROPERTY,\n      {\n        className: 'function',\n        beginKeywords: 'function', end: /\\{/, excludeEnd: true,\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),\n          {\n            className: 'params',\n            begin: /\\(/, end: /\\)/,\n            excludeBegin: true,\n            excludeEnd: true,\n            contains: [\n              hljs.C_LINE_COMMENT_MODE,\n              hljs.C_BLOCK_COMMENT_MODE\n            ]\n          }\n        ],\n        illegal: /\\[|%/\n      },\n      {\n        begin: '\\\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots\n      },\n      ID_ID,\n      QML_ATTRIBUTE,\n      QML_OBJECT\n    ],\n    illegal: /#/\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/qml.js?")}}]);