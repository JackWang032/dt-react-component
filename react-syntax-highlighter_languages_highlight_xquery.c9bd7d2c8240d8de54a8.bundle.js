(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{3285:function(module,exports){eval("module.exports = function(hljs) {\n  // see https://www.w3.org/TR/xquery/#id-terminal-delimitation\n  var KEYWORDS = 'module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit ' +\n  'declare import option function validate variable ' +\n  'for at in let where order group by return if then else ' +\n  'tumbling sliding window start when only end previous next stable ' +\n  'ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch ' +\n  'and or to union intersect instance of treat as castable cast map array ' +\n  'delete insert into replace value rename copy modify update';\n\n  // Node Types (sorted by inheritance)\n  // atomic types (sorted by inheritance)\n  var TYPE = 'item document-node node attribute document element comment namespace namespace-node processing-instruction text construction ' +\n  'xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration';\n\n  var LITERAL = 'eq ne lt le gt ge is ' +\n    'self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: ' +\n    'NaN';\n\n  // functions (TODO: find regex for op: without breaking build)\n  var BUILT_IN = {\n    className: 'built_in',\n    variants: [{\n      begin: /\\barray\\:/,\n      end: /(?:append|filter|flatten|fold\\-(?:left|right)|for-each(?:\\-pair)?|get|head|insert\\-before|join|put|remove|reverse|size|sort|subarray|tail)\\b/\n    }, {\n      begin: /\\bmap\\:/,\n      end: /(?:contains|entry|find|for\\-each|get|keys|merge|put|remove|size)\\b/\n    }, {\n      begin: /\\bmath\\:/,\n      end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\\b/\n    }, {\n      begin: /\\bop\\:/,\n      end: /\\(/,\n      excludeEnd: true\n    }, {\n      begin: /\\bfn\\:/,\n      end: /\\(/,\n      excludeEnd: true\n    },\n// do not highlight inbuilt strings as variable or xml element names\n    {\n      begin: /[^<\\/\\$\\:'\"-]\\b(?:abs|accumulator\\-(?:after|before)|adjust\\-(?:date(?:Time)?|time)\\-to\\-timezone|analyze\\-string|apply|available\\-(?:environment\\-variables|system\\-properties)|avg|base\\-uri|boolean|ceiling|codepoints?\\-(?:equal|to\\-string)|collation\\-key|collection|compare|concat|contains(?:\\-token)?|copy\\-of|count|current(?:\\-)?(?:date(?:Time)?|time|group(?:ing\\-key)?|output\\-uri|merge\\-(?:group|key))?data|dateTime|days?\\-from\\-(?:date(?:Time)?|duration)|deep\\-equal|default\\-(?:collation|language)|distinct\\-values|document(?:\\-uri)?|doc(?:\\-available)?|element\\-(?:available|with\\-id)|empty|encode\\-for\\-uri|ends\\-with|environment\\-variable|error|escape\\-html\\-uri|exactly\\-one|exists|false|filter|floor|fold\\-(?:left|right)|for\\-each(?:\\-pair)?|format\\-(?:date(?:Time)?|time|integer|number)|function\\-(?:arity|available|lookup|name)|generate\\-id|has\\-children|head|hours\\-from\\-(?:dateTime|duration|time)|id(?:ref)?|implicit\\-timezone|in\\-scope\\-prefixes|index\\-of|innermost|insert\\-before|iri\\-to\\-uri|json\\-(?:doc|to\\-xml)|key|lang|last|load\\-xquery\\-module|local\\-name(?:\\-from\\-QName)?|(?:lower|upper)\\-case|matches|max|minutes\\-from\\-(?:dateTime|duration|time)|min|months?\\-from\\-(?:date(?:Time)?|duration)|name(?:space\\-uri\\-?(?:for\\-prefix|from\\-QName)?)?|nilled|node\\-name|normalize\\-(?:space|unicode)|not|number|one\\-or\\-more|outermost|parse\\-(?:ietf\\-date|json)|path|position|(?:prefix\\-from\\-)?QName|random\\-number\\-generator|regex\\-group|remove|replace|resolve\\-(?:QName|uri)|reverse|root|round(?:\\-half\\-to\\-even)?|seconds\\-from\\-(?:dateTime|duration|time)|snapshot|sort|starts\\-with|static\\-base\\-uri|stream\\-available|string\\-?(?:join|length|to\\-codepoints)?|subsequence|substring\\-?(?:after|before)?|sum|system\\-property|tail|timezone\\-from\\-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type\\-available|unordered|unparsed\\-(?:entity|text)?\\-?(?:public\\-id|uri|available|lines)?|uri\\-collection|xml\\-to\\-json|years?\\-from\\-(?:date(?:Time)?|duration)|zero\\-or\\-one)\\b/,\n    }, {\n      begin: /\\blocal\\:/,\n      end: /\\(/,\n      excludeEnd: true\n    }, {\n      begin: /\\bzip\\:/,\n      end: /(?:zip\\-file|(?:xml|html|text|binary)\\-entry| (?:update\\-)?entries)\\b/\n    }, {\n      begin: /\\b(?:util|db|functx|app|xdmp|xmldb)\\:/,\n      end: /\\(/,\n      excludeEnd: true\n    }\n  ]\n  };\n\n  var TITLE = {\n    className: 'title',\n    begin: /\\bxquery version \"[13]\\.[01]\"\\s?(?:encoding \".+\")?/,\n    end: /;/\n  };\n\n  var VAR = {\n    className: 'variable',\n    begin: /[\\$][\\w-:]+/\n  };\n\n  var NUMBER = {\n    className: 'number',\n    begin: '(\\\\b0[0-7_]+)|(\\\\b0x[0-9a-fA-F_]+)|(\\\\b[1-9][0-9_]*(\\\\.[0-9_]+)?)|[0_]\\\\b',\n    relevance: 0\n  };\n\n  var STRING = {\n    className: 'string',\n    variants: [{\n        begin: /\"/,\n        end: /\"/,\n        contains: [{\n          begin: /\"\"/,\n          relevance: 0\n        }]\n      },\n      {\n        begin: /'/,\n        end: /'/,\n        contains: [{\n          begin: /''/,\n          relevance: 0\n        }]\n      }\n    ]\n  };\n\n  var ANNOTATION = {\n    className: 'meta',\n    begin: /%[\\w-:]+/\n  };\n\n  var COMMENT = {\n    className: 'comment',\n    begin: '\\\\(:',\n    end: ':\\\\)',\n    relevance: 10,\n    contains: [{\n      className: 'doctag',\n      begin: '@\\\\w+'\n    }]\n  };\n\n  // see https://www.w3.org/TR/xquery/#id-computedConstructors\n  // mocha: computed_inbuilt\n  // see https://www.regexpal.com/?fam=99749\n  var COMPUTED = {\n    beginKeywords: 'element attribute comment document processing-instruction',\n    end: '{',\n    excludeEnd: true\n  };\n\n  // mocha: direct_method\n    var DIRECT = {\n      begin: /<([\\w\\._:\\-]+)((\\s*.*)=('|\").*('|\"))?>/,\n      end: /(\\/[\\w\\._:\\-]+>)/,\n      subLanguage: 'xml',\n      contains: [{\n        begin: '{',\n        end: '}',\n        subLanguage: 'xquery'\n      }, 'self']\n    };\n\n\n  var CONTAINS = [\n    VAR,\n    BUILT_IN,\n    STRING,\n    NUMBER,\n    COMMENT,\n    ANNOTATION,\n    TITLE,\n    COMPUTED,\n    DIRECT\n  ];\n\n\n\n    var METHOD = {\n      begin: '{',\n      end: '}',\n      contains: CONTAINS\n    };\n\n\n\n  return {\n    aliases: ['xpath', 'xq'],\n    case_insensitive: false,\n    lexemes: /[a-zA-Z\\$][a-zA-Z0-9_:\\-]*/,\n    illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,\n    keywords: {\n      keyword: KEYWORDS,\n      type: TYPE,\n      literal: LITERAL\n    },\n    contains: CONTAINS\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/xquery.js?")}}]);