(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{3161:function(module,exports){eval("module.exports = function(hljs) {\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\(', end: '\\\\)'\n  };\n\n  var F_KEYWORDS = {\n    literal: '.False. .True.',\n    keyword: 'kind do while private call intrinsic where elsewhere ' +\n      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then block endblock ' +\n      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +\n      'goto save else use module select case ' +\n      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +\n      'continue format pause cycle exit ' +\n      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +\n      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +\n      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +\n      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +\n      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +\n      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +\n      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +\n      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +\n      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +\n      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' +\n      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' +\n      'integer real character complex logical dimension allocatable|10 parameter ' +\n      'external implicit|10 none double precision assign intent optional pointer ' +\n      'target in out common equivalence data',\n    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +\n      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +\n      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +\n      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +\n      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +\n      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +\n      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +\n      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +\n      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +\n      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +\n      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +\n      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +\n      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +\n      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of'  +\n      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +\n      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +\n      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +\n      'num_images parity popcnt poppar shifta shiftl shiftr this_image'\n  };\n  return {\n    case_insensitive: true,\n    aliases: ['f90', 'f95'],\n    keywords: F_KEYWORDS,\n    illegal: /\\/\\*/,\n    contains: [\n      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'string', relevance: 0}),\n      {\n        className: 'function',\n        beginKeywords: 'subroutine function program',\n        illegal: '[${=\\\\n]',\n        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]\n      },\n      hljs.COMMENT('!', '$', {relevance: 0}),\n      {\n        className: 'number',\n        begin: '(?=\\\\b|\\\\+|\\\\-|\\\\.)(?=\\\\.\\\\d|\\\\d)(?:\\\\d+)?(?:\\\\.?\\\\d*)(?:[de][+-]?\\\\d+)?\\\\b\\\\.?',\n        relevance: 0\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/fortran.js?")}}]);