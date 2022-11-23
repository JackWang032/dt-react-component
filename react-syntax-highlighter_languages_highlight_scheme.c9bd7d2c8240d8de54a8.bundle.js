(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{3252:function(module,exports){eval("module.exports = function(hljs) {\n  var SCHEME_IDENT_RE = '[^\\\\(\\\\)\\\\[\\\\]\\\\{\\\\}\",\\'`;#|\\\\\\\\\\\\s]+';\n  var SCHEME_SIMPLE_NUMBER_RE = '(\\\\-|\\\\+)?\\\\d+([./]\\\\d+)?';\n  var SCHEME_COMPLEX_NUMBER_RE = SCHEME_SIMPLE_NUMBER_RE + '[+\\\\-]' + SCHEME_SIMPLE_NUMBER_RE + 'i';\n  var BUILTINS = {\n    'builtin-name':\n      'case-lambda call/cc class define-class exit-handler field import ' +\n      'inherit init-field interface let*-values let-values let/ec mixin ' +\n      'opt-lambda override protect provide public rename require ' +\n      'require-for-syntax syntax syntax-case syntax-error unit/sig unless ' +\n      'when with-syntax and begin call-with-current-continuation ' +\n      'call-with-input-file call-with-output-file case cond define ' +\n      'define-syntax delay do dynamic-wind else for-each if lambda let let* ' +\n      'let-syntax letrec letrec-syntax map or syntax-rules \\' * + , ,@ - ... / ' +\n      '; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan ' +\n      'boolean? caar cadr call-with-input-file call-with-output-file ' +\n      'call-with-values car cdddar cddddr cdr ceiling char->integer ' +\n      'char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? ' +\n      'char-downcase char-lower-case? char-numeric? char-ready? char-upcase ' +\n      'char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? ' +\n      'char? close-input-port close-output-port complex? cons cos ' +\n      'current-input-port current-output-port denominator display eof-object? ' +\n      'eq? equal? eqv? eval even? exact->inexact exact? exp expt floor ' +\n      'force gcd imag-part inexact->exact inexact? input-port? integer->char ' +\n      'integer? interaction-environment lcm length list list->string ' +\n      'list->vector list-ref list-tail list? load log magnitude make-polar ' +\n      'make-rectangular make-string make-vector max member memq memv min ' +\n      'modulo negative? newline not null-environment null? number->string ' +\n      'number? numerator odd? open-input-file open-output-file output-port? ' +\n      'pair? peek-char port? positive? procedure? quasiquote quote quotient ' +\n      'rational? rationalize read read-char real-part real? remainder reverse ' +\n      'round scheme-report-environment set! set-car! set-cdr! sin sqrt string ' +\n      'string->list string->number string->symbol string-append string-ci<=? ' +\n      'string-ci<? string-ci=? string-ci>=? string-ci>? string-copy ' +\n      'string-fill! string-length string-ref string-set! string<=? string<? ' +\n      'string=? string>=? string>? string? substring symbol->string symbol? ' +\n      'tan transcript-off transcript-on truncate values vector ' +\n      'vector->list vector-fill! vector-length vector-ref vector-set! ' +\n      'with-input-from-file with-output-to-file write write-char zero?'\n  };\n\n  var SHEBANG = {\n    className: 'meta',\n    begin: '^#!',\n    end: '$'\n  };\n\n  var LITERAL = {\n    className: 'literal',\n    begin: '(#t|#f|#\\\\\\\\' + SCHEME_IDENT_RE + '|#\\\\\\\\.)'\n  };\n\n  var NUMBER = {\n    className: 'number',\n    variants: [\n      { begin: SCHEME_SIMPLE_NUMBER_RE, relevance: 0 },\n      { begin: SCHEME_COMPLEX_NUMBER_RE, relevance: 0 },\n      { begin: '#b[0-1]+(/[0-1]+)?' },\n      { begin: '#o[0-7]+(/[0-7]+)?' },\n      { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }\n    ]\n  };\n\n  var STRING = hljs.QUOTE_STRING_MODE;\n\n  var REGULAR_EXPRESSION = {\n    className: 'regexp',\n    begin: '#[pr]x\"',\n    end: '[^\\\\\\\\]\"'\n  };\n\n  var COMMENT_MODES = [\n    hljs.COMMENT(\n      ';',\n      '$',\n      {\n        relevance: 0\n      }\n    ),\n    hljs.COMMENT('#\\\\|', '\\\\|#')\n  ];\n\n  var IDENT = {\n    begin: SCHEME_IDENT_RE,\n    relevance: 0\n  };\n\n  var QUOTED_IDENT = {\n    className: 'symbol',\n    begin: '\\'' + SCHEME_IDENT_RE\n  };\n\n  var BODY = {\n    endsWithParent: true,\n    relevance: 0\n  };\n\n  var QUOTED_LIST = {\n    variants: [\n      { begin: /'/ },\n      { begin: '`' }\n    ],\n    contains: [\n      {\n        begin: '\\\\(', end: '\\\\)',\n        contains: ['self', LITERAL, STRING, NUMBER, IDENT, QUOTED_IDENT]\n      }\n    ]\n  };\n\n  var NAME = {\n    className: 'name',\n    begin: SCHEME_IDENT_RE,\n    lexemes: SCHEME_IDENT_RE,\n    keywords: BUILTINS\n  };\n\n  var LAMBDA = {\n    begin: /lambda/, endsWithParent: true, returnBegin: true,\n    contains: [\n      NAME,\n      {\n        begin: /\\(/, end: /\\)/, endsParent: true,\n        contains: [IDENT],\n      }\n    ]\n  };\n\n  var LIST = {\n    variants: [\n      { begin: '\\\\(', end: '\\\\)' },\n      { begin: '\\\\[', end: '\\\\]' }\n    ],\n    contains: [LAMBDA, NAME, BODY]\n  };\n\n  BODY.contains = [LITERAL, NUMBER, STRING, IDENT, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES);\n\n  return {\n    illegal: /\\S/,\n    contains: [SHEBANG, NUMBER, STRING, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES)\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/scheme.js?")}}]);