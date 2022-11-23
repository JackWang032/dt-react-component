(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{3242:function(module,exports){eval("module.exports = function(hljs) {\n  function orReValues(ops){\n    return ops\n    .map(function(op) {\n      return op\n        .split('')\n        .map(function(char) {\n          return '\\\\' + char;\n        })\n        .join('');\n    })\n    .join('|');\n  }\n\n  var RE_IDENT = '~?[a-z$_][0-9a-zA-Z$_]*';\n  var RE_MODULE_IDENT = '`?[A-Z$_][0-9a-zA-Z$_]*';\n\n  var RE_PARAM_TYPEPARAM = '\\'?[a-z$_][0-9a-z$_]*';\n  var RE_PARAM_TYPE = '\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(' + RE_PARAM_TYPEPARAM + '\\s*(,' + RE_PARAM_TYPEPARAM + ')*)?\\s*\\))?';\n  var RE_PARAM = RE_IDENT + '(' + RE_PARAM_TYPE + ')?(' + RE_PARAM_TYPE + ')?';\n  var RE_OPERATOR = \"(\" + orReValues(['||', '&&', '++', '**', '+.', '*', '/', '*.', '/.', '...', '|>']) + \"|==|===)\";\n  var RE_OPERATOR_SPACED = \"\\\\s+\" + RE_OPERATOR + \"\\\\s+\";\n\n  var KEYWORDS = {\n    keyword:\n      'and as asr assert begin class constraint do done downto else end exception external' +\n      'for fun function functor if in include inherit initializer' +\n      'land lazy let lor lsl lsr lxor match method mod module mutable new nonrec' +\n      'object of open or private rec sig struct then to try type val virtual when while with',\n    built_in:\n      'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ',\n    literal:\n      'true false'\n  };\n\n  var RE_NUMBER = '\\\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +\n    '0[oO][0-7_]+[Lln]?|' +\n    '0[bB][01_]+[Lln]?|' +\n    '[0-9][0-9_]*([Lln]|(\\\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)';\n\n  var NUMBER_MODE = {\n    className: 'number',\n    relevance: 0,\n    variants: [\n      {\n        begin: RE_NUMBER\n      },\n      {\n        begin: '\\\\(\\\\-' + RE_NUMBER + '\\\\)'\n      }\n    ]\n  };\n\n  var OPERATOR_MODE = {\n    className: 'operator',\n    relevance: 0,\n    begin: RE_OPERATOR\n  };\n  var LIST_CONTENTS_MODES = [\n    {\n      className: 'identifier',\n      relevance: 0,\n      begin: RE_IDENT\n    },\n    OPERATOR_MODE,\n    NUMBER_MODE\n  ];\n\n  var MODULE_ACCESS_CONTENTS = [\n    hljs.QUOTE_STRING_MODE,\n    OPERATOR_MODE,\n    {\n      className: 'module',\n      begin: \"\\\\b\" + RE_MODULE_IDENT, returnBegin: true,\n      end: \"\\.\",\n      contains: [\n        {\n          className: 'identifier',\n          begin: RE_MODULE_IDENT,\n          relevance: 0\n        }\n      ]\n    }\n  ];\n\n  var PARAMS_CONTENTS = [\n    {\n      className: 'module',\n      begin: \"\\\\b\" + RE_MODULE_IDENT, returnBegin: true,\n      end: \"\\.\",\n      relevance: 0,\n      contains: [\n        {\n          className: 'identifier',\n          begin: RE_MODULE_IDENT,\n          relevance: 0\n        }\n      ]\n    }\n  ];\n\n  var PARAMS_MODE = {\n    begin: RE_IDENT,\n    end: '(,|\\\\n|\\\\))',\n    relevance: 0,\n    contains: [\n      OPERATOR_MODE,\n      {\n        className: 'typing',\n        begin: ':',\n        end: '(,|\\\\n)',\n        returnBegin: true,\n        relevance: 0,\n        contains: PARAMS_CONTENTS\n      }\n    ]\n  };\n\n  var FUNCTION_BLOCK_MODE = {\n    className: 'function',\n    relevance: 0,\n    keywords: KEYWORDS,\n    variants: [\n      {\n        begin: '\\\\s(\\\\(\\\\.?.*?\\\\)|' + RE_IDENT + ')\\\\s*=>',\n        end: '\\\\s*=>',\n        returnBegin: true,\n        relevance: 0,\n        contains: [\n          {\n            className: 'params',\n            variants: [\n              {\n                begin: RE_IDENT\n              },\n              {\n                begin: RE_PARAM\n              },\n              {\n                begin: /\\(\\s*\\)/,\n              }\n            ]\n          }\n        ]\n      },\n      {\n        begin: '\\\\s\\\\(\\\\.?[^;\\\\|]*\\\\)\\\\s*=>',\n        end: '\\\\s=>',\n        returnBegin: true,\n        relevance: 0,\n        contains: [\n          {\n            className: 'params',\n            relevance: 0,\n            variants: [\n              PARAMS_MODE\n            ]\n          }\n        ]\n      },\n      {\n        begin: '\\\\(\\\\.\\\\s' + RE_IDENT + '\\\\)\\\\s*=>'\n      }\n    ]\n  };\n  MODULE_ACCESS_CONTENTS.push(FUNCTION_BLOCK_MODE);\n\n  var CONSTRUCTOR_MODE = {\n    className: 'constructor',\n    begin: RE_MODULE_IDENT + '\\\\(',\n    end: '\\\\)',\n    illegal: '\\\\n',\n    keywords: KEYWORDS,\n    contains: [\n      hljs.QUOTE_STRING_MODE,\n      OPERATOR_MODE,\n      {\n        className: 'params',\n        begin: '\\\\b' + RE_IDENT\n      }\n    ]\n  };\n\n  var PATTERN_MATCH_BLOCK_MODE = {\n    className: 'pattern-match',\n    begin: '\\\\|',\n    returnBegin: true,\n    keywords: KEYWORDS,\n    end: '=>',\n    relevance: 0,\n    contains: [\n      CONSTRUCTOR_MODE,\n      OPERATOR_MODE,\n      {\n        relevance: 0,\n        className: 'constructor',\n        begin: RE_MODULE_IDENT\n      }\n    ]\n  };\n\n  var MODULE_ACCESS_MODE = {\n    className: 'module-access',\n    keywords: KEYWORDS,\n    returnBegin: true,\n    variants: [\n      {\n        begin: \"\\\\b(\" + RE_MODULE_IDENT + \"\\\\.)+\" + RE_IDENT\n      },\n      {\n        begin: \"\\\\b(\" + RE_MODULE_IDENT + \"\\\\.)+\\\\(\",\n        end: \"\\\\)\",\n        returnBegin: true,\n        contains: [\n          FUNCTION_BLOCK_MODE,\n          {\n            begin: '\\\\(',\n            end: '\\\\)',\n            skip: true\n          }\n        ].concat(MODULE_ACCESS_CONTENTS)\n      },\n      {\n        begin: \"\\\\b(\" + RE_MODULE_IDENT + \"\\\\.)+{\",\n        end: \"}\"\n      }\n    ],\n    contains: MODULE_ACCESS_CONTENTS\n  };\n\n  PARAMS_CONTENTS.push(MODULE_ACCESS_MODE);\n\n  return {\n    aliases: ['re'],\n    keywords: KEYWORDS,\n    illegal: '(:\\\\-|:=|\\\\${|\\\\+=)',\n    contains: [\n      hljs.COMMENT('/\\\\*', '\\\\*/', { illegal: '^(\\\\#,\\\\/\\\\/)' }),\n      {\n        className: 'character',\n        begin: '\\'(\\\\\\\\[^\\']+|[^\\'])\\'',\n        illegal: '\\\\n',\n        relevance: 0\n      },\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'literal',\n        begin: '\\\\(\\\\)',\n        relevance: 0\n      },\n      {\n        className: 'literal',\n        begin: '\\\\[\\\\|',\n        end: '\\\\|\\\\]',\n        relevance:  0,\n        contains: LIST_CONTENTS_MODES\n      },\n      {\n        className: 'literal',\n        begin: '\\\\[',\n        end: '\\\\]',\n        relevance: 0,\n        contains: LIST_CONTENTS_MODES\n      },\n      CONSTRUCTOR_MODE,\n      {\n        className: 'operator',\n        begin: RE_OPERATOR_SPACED,\n        illegal: '\\\\-\\\\->',\n        relevance: 0\n      },\n      NUMBER_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      PATTERN_MATCH_BLOCK_MODE,\n      FUNCTION_BLOCK_MODE,\n      {\n        className: 'module-def',\n        begin: \"\\\\bmodule\\\\s+\" + RE_IDENT + \"\\\\s+\" + RE_MODULE_IDENT + \"\\\\s+=\\\\s+{\",\n        end: \"}\",\n        returnBegin: true,\n        keywords: KEYWORDS,\n        relevance: 0,\n        contains: [\n          {\n            className: 'module',\n            relevance: 0,\n            begin: RE_MODULE_IDENT\n          },\n          {\n            begin: '{',\n            end: '}',\n            skip: true\n          }\n        ].concat(MODULE_ACCESS_CONTENTS)\n      },\n      MODULE_ACCESS_MODE\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/reasonml.js?")}}]);