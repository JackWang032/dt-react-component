(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{3280:function(module,exports){eval("module.exports = function(hljs) {\n  // Regular expression for VHDL numeric literals.\n\n  // Decimal literal:\n  var INTEGER_RE = '\\\\d(_|\\\\d)*';\n  var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;\n  var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';\n  // Based literal:\n  var BASED_INTEGER_RE = '\\\\w+';\n  var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';\n\n  var NUMBER_RE = '\\\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';\n\n  return {\n    case_insensitive: true,\n    keywords: {\n      keyword:\n        'abs access after alias all and architecture array assert assume assume_guarantee attribute ' +\n        'begin block body buffer bus case component configuration constant context cover disconnect ' +\n        'downto default else elsif end entity exit fairness file for force function generate ' +\n        'generic group guarded if impure in inertial inout is label library linkage literal ' +\n        'loop map mod nand new next nor not null of on open or others out package parameter port ' +\n        'postponed procedure process property protected pure range record register reject ' +\n        'release rem report restrict restrict_guarantee return rol ror select sequence ' +\n        'severity shared signal sla sll sra srl strong subtype then to transport type ' +\n        'unaffected units until use variable view vmode vprop vunit wait when while with xnor xor',\n      built_in:\n        'boolean bit character ' +\n        'integer time delay_length natural positive ' +\n        'string bit_vector file_open_kind file_open_status ' +\n        'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' +\n        'std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed ' +\n        'real_vector time_vector',\n      literal:\n        'false true note warning error failure ' +  // severity_level\n        'line text side width'                      // textio\n    },\n    illegal: '{',\n    contains: [\n      hljs.C_BLOCK_COMMENT_MODE,      // VHDL-2008 block commenting.\n      hljs.COMMENT('--', '$'),\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'number',\n        begin: NUMBER_RE,\n        relevance: 0\n      },\n      {\n        className: 'string',\n        begin: '\\'(U|X|0|1|Z|W|L|H|-)\\'',\n        contains: [hljs.BACKSLASH_ESCAPE]\n      },\n      {\n        className: 'symbol',\n        begin: '\\'[A-Za-z](_?[A-Za-z0-9])*',\n        contains: [hljs.BACKSLASH_ESCAPE]\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/vhdl.js?")}}]);