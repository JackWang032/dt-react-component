(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{3153:function(module,exports){eval("module.exports = function(hljs) {\n  var ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_.]*(\\\\!|\\\\?)?';\n  var ELIXIR_METHOD_RE = '[a-zA-Z_]\\\\w*[!?=]?|[-+~]\\\\@|<<|>>|=~|===?|<=>|[<>]=?|\\\\*\\\\*|[-/+%^&*~`|]|\\\\[\\\\]=?';\n  var ELIXIR_KEYWORDS =\n    'and false then defined module in return redo retry end for true self when ' +\n    'next until do begin unless nil break not case cond alias while ensure or ' +\n    'include use alias fn quote require import with|0';\n  var SUBST = {\n    className: 'subst',\n    begin: '#\\\\{', end: '}',\n    lexemes: ELIXIR_IDENT_RE,\n    keywords: ELIXIR_KEYWORDS\n  };\n\n  var SIGIL_DELIMITERS = '[/|([{<\"\\']'\n  var LOWERCASE_SIGIL = {\n    className: 'string',\n    begin: '~[a-z]' + '(?=' + SIGIL_DELIMITERS + ')',\n    contains: [\n      {\n        endsParent:true,\n        contains: [{\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n          variants: [\n            { begin: /\"/, end: /\"/ },\n            { begin: /'/, end: /'/ },\n            { begin: /\\//, end: /\\// },\n            { begin: /\\|/, end: /\\|/ },\n            { begin: /\\(/, end: /\\)/ },\n            { begin: /\\[/, end: /\\]/ },\n            { begin: /\\{/, end: /\\}/ },\n            { begin: /</, end: />/ }\n          ]\n        }]\n      },\n    ],\n  };\n\n  var UPCASE_SIGIL = {\n    className: 'string',\n    begin: '~[A-Z]' + '(?=' + SIGIL_DELIMITERS + ')',\n    contains: [\n      { begin: /\"/, end: /\"/ },\n      { begin: /'/, end: /'/ },\n      { begin: /\\//, end: /\\// },\n      { begin: /\\|/, end: /\\|/ },\n      { begin: /\\(/, end: /\\)/ },\n      { begin: /\\[/, end: /\\]/ },\n      { begin: /\\{/, end: /\\}/ },\n      { begin: /\\</, end: /\\>/ }\n    ]\n  };\n\n  var STRING = {\n    className: 'string',\n    contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n    variants: [\n      {\n        begin: /\"\"\"/, end: /\"\"\"/,\n      },\n      {\n        begin: /'''/, end: /'''/,\n      },\n      {\n        begin: /~S\"\"\"/, end: /\"\"\"/,\n        contains: []\n      },\n      {\n        begin: /~S\"/, end: /\"/,\n        contains: []\n      },\n      {\n        begin: /~S'''/, end: /'''/,\n        contains: []\n      },\n      {\n        begin: /~S'/, end: /'/,\n        contains: []\n      },\n      {\n        begin: /'/, end: /'/\n      },\n      {\n        begin: /\"/, end: /\"/\n      },\n    ]\n  };\n  var FUNCTION = {\n    className: 'function',\n    beginKeywords: 'def defp defmacro', end: /\\B\\b/, // the mode is ended by the title\n    contains: [\n      hljs.inherit(hljs.TITLE_MODE, {\n        begin: ELIXIR_IDENT_RE,\n        endsParent: true\n      })\n    ]\n  };\n  var CLASS = hljs.inherit(FUNCTION, {\n    className: 'class',\n    beginKeywords: 'defimpl defmodule defprotocol defrecord', end: /\\bdo\\b|$|;/\n  });\n  var ELIXIR_DEFAULT_CONTAINS = [\n    STRING,\n    UPCASE_SIGIL,\n    LOWERCASE_SIGIL,\n    hljs.HASH_COMMENT_MODE,\n    CLASS,\n    FUNCTION,\n    {\n      begin: '::'\n    },\n    {\n      className: 'symbol',\n      begin: ':(?![\\\\s:])',\n      contains: [STRING, {begin: ELIXIR_METHOD_RE}],\n      relevance: 0\n    },\n    {\n      className: 'symbol',\n      begin: ELIXIR_IDENT_RE + ':(?!:)',\n      relevance: 0\n    },\n    {\n      className: 'number',\n      begin: '(\\\\b0o[0-7_]+)|(\\\\b0b[01_]+)|(\\\\b0x[0-9a-fA-F_]+)|(-?\\\\b[1-9][0-9_]*(.[0-9_]+([eE][-+]?[0-9]+)?)?)',\n      relevance: 0\n    },\n    {\n      className: 'variable',\n      begin: '(\\\\$\\\\W)|((\\\\$|\\\\@\\\\@?)(\\\\w+))'\n    },\n    {\n      begin: '->'\n    },\n    { // regexp container\n      begin: '(' + hljs.RE_STARTERS_RE + ')\\\\s*',\n      contains: [\n        hljs.HASH_COMMENT_MODE,\n        {\n          className: 'regexp',\n          illegal: '\\\\n',\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n          variants: [\n            {\n              begin: '/', end: '/[a-z]*'\n            },\n            {\n              begin: '%r\\\\[', end: '\\\\][a-z]*'\n            }\n          ]\n        }\n      ],\n      relevance: 0\n    }\n  ];\n  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;\n\n  return {\n    lexemes: ELIXIR_IDENT_RE,\n    keywords: ELIXIR_KEYWORDS,\n    contains: ELIXIR_DEFAULT_CONTAINS\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/elixir.js?")}}]);