(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{3106:function(module,exports){eval("module.exports = function(hljs) {\n  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';\n  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';\n\n  var AS3_REST_ARG_MODE = {\n    className: 'rest_arg',\n    begin: '[.]{3}', end: IDENT_RE,\n    relevance: 10\n  };\n\n  return {\n    aliases: ['as'],\n    keywords: {\n      keyword: 'as break case catch class const continue default delete do dynamic each ' +\n        'else extends final finally for function get if implements import in include ' +\n        'instanceof interface internal is namespace native new override package private ' +\n        'protected public return set static super switch this throw try typeof use var void ' +\n        'while with',\n      literal: 'true false null undefined'\n    },\n    contains: [\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'class',\n        beginKeywords: 'package', end: '{',\n        contains: [hljs.TITLE_MODE]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class interface', end: '{', excludeEnd: true,\n        contains: [\n          {\n            beginKeywords: 'extends implements'\n          },\n          hljs.TITLE_MODE\n        ]\n      },\n      {\n        className: 'meta',\n        beginKeywords: 'import include', end: ';',\n        keywords: {'meta-keyword': 'import include'}\n      },\n      {\n        className: 'function',\n        beginKeywords: 'function', end: '[{;]', excludeEnd: true,\n        illegal: '\\\\S',\n        contains: [\n          hljs.TITLE_MODE,\n          {\n            className: 'params',\n            begin: '\\\\(', end: '\\\\)',\n            contains: [\n              hljs.APOS_STRING_MODE,\n              hljs.QUOTE_STRING_MODE,\n              hljs.C_LINE_COMMENT_MODE,\n              hljs.C_BLOCK_COMMENT_MODE,\n              AS3_REST_ARG_MODE\n            ]\n          },\n          {\n            begin: ':\\\\s*' + IDENT_FUNC_RETURN_TYPE_RE\n          }\n        ]\n      },\n      hljs.METHOD_GUARD\n    ],\n    illegal: /#/\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/actionscript.js?")}}]);