(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{3154:function(module,exports){eval("module.exports = function(hljs) {\n  var COMMENT = {\n    variants: [\n      hljs.COMMENT('--', '$'),\n      hljs.COMMENT(\n        '{-',\n        '-}',\n        {\n          contains: ['self']\n        }\n      )\n    ]\n  };\n\n  var CONSTRUCTOR = {\n    className: 'type',\n    begin: '\\\\b[A-Z][\\\\w\\']*', // TODO: other constructors (built-in, infix).\n    relevance: 0\n  };\n\n  var LIST = {\n    begin: '\\\\(', end: '\\\\)',\n    illegal: '\"',\n    contains: [\n      {className: 'type', begin: '\\\\b[A-Z][\\\\w]*(\\\\((\\\\.\\\\.|,|\\\\w+)\\\\))?'},\n      COMMENT\n    ]\n  };\n\n  var RECORD = {\n    begin: '{', end: '}',\n    contains: LIST.contains\n  };\n\n  var CHARACTER = {\n    className: 'string',\n    begin: '\\'\\\\\\\\?.', end: '\\'',\n    illegal: '.'\n  };\n\n  return {\n    keywords:\n      'let in if then else case of where module import exposing ' +\n      'type alias as infix infixl infixr port effect command subscription',\n    contains: [\n\n      // Top-level constructions.\n\n      {\n        beginKeywords: 'port effect module', end: 'exposing',\n        keywords: 'port effect module where command subscription exposing',\n        contains: [LIST, COMMENT],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'import', end: '$',\n        keywords: 'import as exposing',\n        contains: [LIST, COMMENT],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'type', end: '$',\n        keywords: 'type alias',\n        contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]\n      },\n      {\n        beginKeywords: 'infix infixl infixr', end: '$',\n        contains: [hljs.C_NUMBER_MODE, COMMENT]\n      },\n      {\n        begin: 'port', end: '$',\n        keywords: 'port',\n        contains: [COMMENT]\n      },\n\n      // Literals and names.\n\n      CHARACTER,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      CONSTRUCTOR,\n      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\\\w\\']*'}),\n      COMMENT,\n\n      {begin: '->|<-'} // No markup, relevance booster\n    ],\n    illegal: /;/\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/elm.js?")}}]);