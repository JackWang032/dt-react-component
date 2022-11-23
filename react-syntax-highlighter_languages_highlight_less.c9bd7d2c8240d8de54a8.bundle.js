(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{3195:function(module,exports){eval("module.exports = function(hljs) {\n  var IDENT_RE        = '[\\\\w-]+'; // yes, Less identifiers may begin with a digit\n  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';\n\n  /* Generic Modes */\n\n  var RULES = [], VALUE = []; // forward def. for recursive modes\n\n  var STRING_MODE = function(c) { return {\n    // Less strings are not multiline (also include '~' for more consistent coloring of \"escaped\" strings)\n    className: 'string', begin: '~?' + c + '.*?' + c\n  };};\n\n  var IDENT_MODE = function(name, begin, relevance) { return {\n    className: name, begin: begin, relevance: relevance\n  };};\n\n  var PARENS_MODE = {\n    // used only to properly balance nested parens inside mixin call, def. arg list\n    begin: '\\\\(', end: '\\\\)', contains: VALUE, relevance: 0\n  };\n\n  // generic Less highlighter (used almost everywhere except selectors):\n  VALUE.push(\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    STRING_MODE(\"'\"),\n    STRING_MODE('\"'),\n    hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(\n    {\n      begin: '(url|data-uri)\\\\(',\n      starts: {className: 'string', end: '[\\\\)\\\\n]', excludeEnd: true}\n    },\n    IDENT_MODE('number', '#[0-9A-Fa-f]+\\\\b'),\n    PARENS_MODE,\n    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),\n    IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),\n    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string\n    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):\n      className: 'attribute', begin: IDENT_RE + '\\\\s*:', end: ':', returnBegin: true, excludeEnd: true\n    },\n    {\n      className: 'meta',\n      begin: '!important'\n    }\n  );\n\n  var VALUE_WITH_RULESETS = VALUE.concat({\n    begin: '{', end: '}', contains: RULES\n  });\n\n  var MIXIN_GUARD_MODE = {\n    beginKeywords: 'when', endsWithParent: true,\n    contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE’s 'function' match\n  };\n\n  /* Rule-Level Modes */\n\n  var RULE_MODE = {\n    begin: INTERP_IDENT_RE + '\\\\s*:', returnBegin: true, end: '[;}]',\n    relevance: 0,\n    contains: [\n      {\n        className: 'attribute',\n        begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,\n        starts: {\n          endsWithParent: true, illegal: '[<=$]',\n          relevance: 0,\n          contains: VALUE\n        }\n      }\n    ]\n  };\n\n  var AT_RULE_MODE = {\n    className: 'keyword',\n    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\\\b',\n    starts: {end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0}\n  };\n\n  // variable definitions and calls\n  var VAR_RULE_MODE = {\n    className: 'variable',\n    variants: [\n      // using more strict pattern for higher relevance to increase chances of Less detection.\n      // this is *the only* Less specific statement used in most of the sources, so...\n      // (we’ll still often loose to the css-parser unless there's '//' comment,\n      // simply because 1 variable just can't beat 99 properties :)\n      {begin: '@' + IDENT_RE + '\\\\s*:', relevance: 15},\n      {begin: '@' + IDENT_RE}\n    ],\n    starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}\n  };\n\n  var SELECTOR_MODE = {\n    // first parse unambiguous selectors (i.e. those not starting with tag)\n    // then fall into the scary lookahead-discriminator variant.\n    // this mode also handles mixin definitions and calls\n    variants: [{\n      begin: '[\\\\.#:&\\\\[>]', end: '[;{}]'  // mixin calls end with ';'\n      }, {\n      begin: INTERP_IDENT_RE, end: '{'\n    }],\n    returnBegin: true,\n    returnEnd:   true,\n    illegal: '[<=\\'$\"]',\n    relevance: 0,\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      MIXIN_GUARD_MODE,\n      IDENT_MODE('keyword',  'all\\\\b'),\n      IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),     // otherwise it’s identified as tag\n      IDENT_MODE('selector-tag',  INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes \"tags\"\n      IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE),\n      IDENT_MODE('selector-class', '\\\\.' + INTERP_IDENT_RE, 0),\n      IDENT_MODE('selector-tag',  '&', 0),\n      {className: 'selector-attr', begin: '\\\\[', end: '\\\\]'},\n      {className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\"'.]+/},\n      {begin: '\\\\(', end: '\\\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins\n      {begin: '!important'} // eat !important after mixin call or it will be colored as tag\n    ]\n  };\n\n  RULES.push(\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    AT_RULE_MODE,\n    VAR_RULE_MODE,\n    RULE_MODE,\n    SELECTOR_MODE\n  );\n\n  return {\n    case_insensitive: true,\n    illegal: '[=>\\'/<($\"]',\n    contains: RULES\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/less.js?")}}]);