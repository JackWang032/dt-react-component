(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{3202:function(module,exports){eval("module.exports = function(hljs) {\n  /* Variables: simple (eg $(var)) and special (eg $@) */\n  var VARIABLE = {\n    className: 'variable',\n    variants: [\n      {\n        begin: '\\\\$\\\\(' + hljs.UNDERSCORE_IDENT_RE + '\\\\)',\n        contains: [hljs.BACKSLASH_ESCAPE],\n      },\n      {\n        begin: /\\$[@%<?\\^\\+\\*]/\n      },\n    ]\n  };\n  /* Quoted string with variables inside */\n  var QUOTE_STRING = {\n    className: 'string',\n    begin: /\"/, end: /\"/,\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      VARIABLE,\n    ]\n  };\n  /* Function: $(func arg,...) */\n  var FUNC = {\n    className: 'variable',\n    begin: /\\$\\([\\w-]+\\s/, end: /\\)/,\n    keywords: {\n      built_in:\n        'subst patsubst strip findstring filter filter-out sort ' +\n        'word wordlist firstword lastword dir notdir suffix basename ' +\n        'addsuffix addprefix join wildcard realpath abspath error warning ' +\n        'shell origin flavor foreach if or and call eval file value',\n    },\n    contains: [\n      VARIABLE,\n    ]\n  };\n  /* Variable assignment */\n  var ASSIGNMENT = {\n    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\\\s*(?=[:+?]?=)'\n  };\n  /* Meta targets (.PHONY) */\n  var META = {\n    className: 'meta',\n    begin: /^\\.PHONY:/, end: /$/,\n    keywords: {'meta-keyword': '.PHONY'},\n    lexemes: /[\\.\\w]+/\n  };\n  /* Targets */\n  var TARGET = {\n    className: 'section',\n    begin: /^[^\\s]+:/, end: /$/,\n    contains: [VARIABLE,]\n  };\n  return {\n    aliases: ['mk', 'mak'],\n    keywords:\n      'define endef undefine ifdef ifndef ifeq ifneq else endif ' +\n      'include -include sinclude override export unexport private vpath',\n    lexemes: /[\\w-]+/,\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      VARIABLE,\n      QUOTE_STRING,\n      FUNC,\n      ASSIGNMENT,\n      META,\n      TARGET,\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/makefile.js?")}}]);