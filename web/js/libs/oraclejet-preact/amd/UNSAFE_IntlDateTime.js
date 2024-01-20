define(['exports', './UNSAFE_IntlFormatParse', './utils/UNSAFE_logger', './_curry1-4d9a6584', './_arity-39916028', './_curry2-99f10bc7'], (function(e,t,a,n,r,o){"use strict";class s{static _getDayPeriods(e,t){const a=new Date(2019,0,1,0,0,0);function n(e){const t=e.formatToParts(a).find((e=>"dayPeriod"===e.type));return t?t.value:""}const r=s.getFormatterLocale(e,t),o=new Intl.DateTimeFormat(r,{hour:"numeric",hour12:!0}),i=n(o);a.setHours(20);return{format:{wide:{am:i,pm:n(o)}}}}static getFormatterLocale(e,t){return e+"-u-ca-"+t}static _getEras(e,t){const a=[{era:"0",start:"2000-02-11T00:00:00"}],n={eraNarrow:{0:"",1:""},eraAbbr:{0:"",1:""},eraName:{0:"",1:""}};function r(e,t){const a=e.formatToParts(t).find((e=>"era"===e.type));return a?a.value:""}const o=["narrow","short","long"],i=s.getFormatterLocale(e,t),l={narrow:"eraNarrow",short:"eraAbbr",long:"eraName"};for(let e=0;e<a.length;e++){const t=new Date(a[e].start);for(let e=0;e<o.length;e++){const a=o[e],s={year:"numeric",month:"numeric",day:"numeric",era:a},d=r(new Intl.DateTimeFormat(i,s),t),m={0:d,1:d};n[l[a]]=m}}return n}static _fillMonthAndDays(e,t,a,n,r){const o=[[2020,0,5],[2020,1,3],[2020,2,3],[2020,3,1],[2020,4,7],[2020,5,5],[2020,6,4],[2020,7,1],[2020,8,1],[2020,9,1],[2020,10,1],[2020,11,1]];function i(e){const t=e.find((e=>"month"===e.type));return t?t.value:null}function l(e){const t=e.find((e=>"weekday"===e.type));return t?t.value:null}const d=s.getFormatterLocale(e,t),m=new Intl.DateTimeFormat(d,n),h={},u={};for(let e=0;e<o.length;e++){const t=e+1,n=s._weekdaysFormatMap[t],d=new Date(o[e][0],o[e][1],o[e][2]),c=m.formatToParts(d);let _,y;r?(_=m.format(d),y=m.format(d)):(_=i(c),y=l(c)),void 0===h[a]&&(h[a]={}),h[a][t]=_,t<=7&&(void 0===u[a]&&(u[a]={}),u[a][n]=y)}return{monthFormat:h,dayFormat:u}}static _getFormatMonthAndDays(e,t){const a=[],n=[],r=["short","narrow","long"];for(let o=0;o<r.length;o++){const i={month:r[o],weekday:r[o],year:"numeric",day:"numeric"},l=s._monthNamesFormatMap[r[o]],d=s._fillMonthAndDays(e,t,l,i,!1);a[o]=d.monthFormat,n[o]=d.dayFormat}const o=Object.assign({},...a),i=Object.assign({},...n),l={};l.format=o;const d={};return d.format=i,l["stand-alone"]=l.format,d["stand-alone"]=d.format,{monthsNode:l,daysNode:d}}static _getStandAloneDays(e,t){const a=[],n=["short","narrow","long"];for(let r=0;r<n.length;r++){const o={weekday:n[r]},i=s._monthNamesFormatMap[n[r]],l=s._fillMonthAndDays(e,t,i,o,!0);a[r]=l.dayFormat}const r=Object.assign({},...a),o={"stand-alone":{}};return o["stand-alone"]=r,{daysNode:o}}static _getStandAloneMonths(e,t){const a=[],n=["short","narrow","long"];for(let r=0;r<n.length;r++){const o={month:n[r]},i=s._monthNamesFormatMap[n[r]],l=s._fillMonthAndDays(e,t,i,o,!0);a[r]=l.monthFormat}const r=Object.assign({},...a),o={"stand-alone":{}};return o["stand-alone"]=r,{monthsNode:o}}static getCalendar(e,t){if(s.calendars=s.calendars??{},s.calendars[e]=s.calendars[e]??{},void 0===s.calendars[e][t]){const a=s._getDayPeriods(e,t),n=s._getEras(e,t);let r,o;const i=s._getStandAloneMonths(e,t),l=s._getStandAloneDays(e,t);if(s.exceptionLocales.includes(e))r=i.monthsNode["stand-alone"],o=l.daysNode["stand-alone"];else{const a=s._getFormatMonthAndDays(e,t);r=a.monthsNode.format,o=a.daysNode.format}const d={format:r,"stand-alone":i.monthsNode["stand-alone"]},m={format:o,"stand-alone":l.daysNode["stand-alone"]};s.calendars[e][t]={dayPeriods:a,months:d,days:m,eras:n,locale:e}}return s.calendars[e][t]}}s._monthNamesFormatMap={short:"abbreviated",narrow:"narrow",long:"wide"},s._weekdaysFormatMap={1:"sun",2:"mon",3:"tue",4:"wed",5:"thu",6:"fri",7:"sat"},s.exceptionLocales=["ja","ja-JP","zh","zh-Hans","zh-Hans-CN","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hant","zh-Hant-HK","zh-Hant-MO","zh-Hant-TW"];const i=new Map;function l(e,t){const a=new Date(Date.UTC(e.year,e.month-1,e.date,e.hours,e.minutes)),n=function(e,t){let a=60*e.hours+e.minutes,n=60*t.hours+t.minutes,r=e.year-t.year;0==r&&(r=e.month-t.month,0===r&&(r=e.date-t.date));r>0?a+=1440:r<0&&(n+=1440);return n-a}(e,d(a,t));let r=0;a.setTime(a.getTime()-6e4*n),m(d(a,t),e)||(r=-60,a.setTime(a.getTime()+36e5),m(d(a,t),e)||(r=60,a.setTime(a.getTime()-72e5)));return n+r}function d(e,t){const a=function(e){let t=i.get(e);t||(t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:e}),i.set(e,t));return t}(t).format(e),[n,r]=a.split(","),[o,s,l]=n.split("/"),[d,m]=r.trim().split(":");return{year:parseInt(l),month:parseInt(o),date:parseInt(s),hours:parseInt(d),minutes:parseInt(m)}}function m(e,t){return e.year===t.year&&e.month===t.month&&e.hours===t.hours&&e.minutes===t.minutes}class h{}h._YEAR_AND_DATE_REGEXP=/(\d{1,4})\D+?(\d{1,4})/g,h._YMD_REGEXP=/(\d{1,4})\D+?(\d{1,4})\D+?(\d{1,4})/g,h._TIME_REGEXP=/(\d{1,2})(?:\D(\d{1,2}))?(?:\D(\d{1,2}))?(?:\D(\d{1,3}))?/g,h._TIME_FORMAT_REGEXP=/h|H|K|k/g,h._YEAR_REGEXP=/y{1,4}/,h._MONTH_REGEXP=/M{1,5}/,h._DAY_REGEXP=/d{1,2}/,h._WEEK_DAY_REGEXP=/E{1,5}/,h._HOUR_REGEXP=/h{1,2}|k{1,2}/i,h._MINUTE_REGEXP=/m{1,2}/,h._SECOND_REGEXP=/s{1,2}/,h._FRACTIONAL_SECOND_REGEXP=/S{1,3}/,h._AMPM_REGEXP=/a{1,2}/,h._WORD_REGEXP="(\\D+?\\s*)",h._ESCAPE_REGEXP=/([\^$.*+?|\[\](){}])/g,h._TOKEN_REGEXP=/ccccc|cccc|ccc|cc|c|EEEEE|EEEE|EEE|EE|E|dd|d|MMMMM|MMMM|MMM|MM|M|LLLLL|LLLL|LLL|LL|L|yyyy|yy|y|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|aa|a|SSS|SS|S|zzzz|zzz|zz|z|v|ZZZ|ZZ|Z|XXX|XX|X|VV|GGGGG|GGGG|GGG|GG|G/g,h._ZULU="zulu",h._LOCAL="local",h._AUTO="auto",h._INVARIANT="invariant",h._OFFSET="offset",h._ALNUM_REGEXP="(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)",h._NON_DIGIT_REGEXP="(\\D+|\\D+\\d\\d?)",h._NON_DIGIT_OPT_REGEXP="(\\D*)",h._STR_REGEXP="(.+?)",h._TWO_DIGITS_REGEXP="(\\d\\d?)",h._THREE_DIGITS_REGEXP="(\\d{1,3})",h._FOUR_DIGITS_REGEXP="(\\d{1,4})",h._SLASH_REGEXP="(\\/)",h._PROPERTIES_MAP={MMM:{token:"months",style:"format",mLen:"abbreviated",matchIndex:0,key:"month",value:"short",regExp:h._ALNUM_REGEXP},MMMM:{token:"months",style:"format",mLen:"wide",matchIndex:0,key:"month",value:"long",regExp:h._ALNUM_REGEXP},MMMMM:{token:"months",style:"format",mLen:"narrow",matchIndex:0,key:"month",value:"narrow",regExp:h._ALNUM_REGEXP},LLL:{token:"months",style:"stand-alone",mLen:"abbreviated",matchIndex:1,key:"month",value:"short",regExp:h._ALNUM_REGEXP},LLLL:{token:"months",style:"stand-alone",mLen:"wide",matchIndex:1,key:"month",value:"long",regExp:h._ALNUM_REGEXP},LLLLL:{token:"months",style:"stand-alone",mLen:"narrow",matchIndex:1,key:"month",value:"narrow",regExp:h._ALNUM_REGEXP},E:{token:"days",style:"format",dLen:"abbreviated",matchIndex:0,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},EE:{token:"days",style:"format",dLen:"abbreviated",matchIndex:0,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},EEE:{token:"days",style:"format",dLen:"abbreviated",matchIndex:0,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},EEEE:{token:"days",style:"format",dLen:"wide",matchIndex:0,key:"weekday",value:"long",regExp:h._NON_DIGIT_REGEXP},EEEEE:{token:"days",style:"format",dLen:"narrow",matchIndex:0,key:"weekday",value:"narrow",regExp:h._NON_DIGIT_REGEXP},c:{token:"days",style:"stand-alone",dLen:"abbreviated",matchIndex:1,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},cc:{token:"days",style:"stand-alone",dLen:"abbreviated",matchIndex:1,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},ccc:{token:"days",style:"stand-alone",dLen:"abbreviated",matchIndex:1,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},cccc:{token:"days",style:"stand-alone",dLen:"wide",matchIndex:1,key:"weekday",value:"long",regExp:h._NON_DIGIT_REGEXP},ccccc:{token:"days",style:"stand-alone",dLen:"narrow",matchIndex:1,key:"weekday",value:"narrow",regExp:h._NON_DIGIT_REGEXP},h:{token:"time",timePart:"hour",start1:0,end1:11,start2:1,end2:12,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},hh:{token:"time",timePart:"hour",start1:0,end1:11,start2:1,end2:12,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},K:{token:"time",timePart:"hour",start1:0,end1:12,start2:0,end2:12,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},KK:{token:"time",timePart:"hour",start1:0,end1:12,start2:0,end2:12,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},H:{token:"time",timePart:"hour",start1:0,end1:23,start2:0,end2:23,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},HH:{token:"time",timePart:"hour",start1:0,end1:23,start2:0,end2:23,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},k:{token:"time",timePart:"hour",start1:0,end1:24,start2:0,end2:24,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},kk:{token:"time",timePart:"hour",start1:0,end1:24,start2:0,end2:24,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},m:{token:"time",timePart:"minute",start1:0,end1:59,start2:0,end2:59,key:"minute",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},mm:{token:"time",timePart:"minute",start1:0,end1:59,start2:0,end2:59,key:"minute",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},s:{token:"time",timePart:"second",start1:0,end1:59,start2:0,end2:59,key:"second",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},ss:{token:"time",timePart:"second",start1:0,end1:59,start2:0,end2:59,key:"second",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},S:{token:"time",timePart:"millisec",start1:0,end1:999,start2:0,end2:999,key:"millisecond",value:"numeric",regExp:h._THREE_DIGITS_REGEXP},SS:{token:"time",timePart:"millisec",start1:0,end1:999,start2:0,end2:999,key:"millisecond",value:"numeric",regExp:h._THREE_DIGITS_REGEXP},SSS:{token:"time",timePart:"millisec",start1:0,end1:999,start2:0,end2:999,key:"millisecond",value:"numeric",regExp:h._THREE_DIGITS_REGEXP},d:{token:"dayOfMonth",key:"day",value:"numeric",getPartIdx:2,regExp:h._TWO_DIGITS_REGEXP},dd:{token:"dayOfMonth",key:"day",value:"2-digit",getPartIdx:2,regExp:h._TWO_DIGITS_REGEXP},M:{token:"monthIndex",key:"month",value:"numeric",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},MM:{token:"monthIndex",key:"month",value:"2-digit",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},L:{token:"monthIndex",key:"month",value:"numeric",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},LL:{token:"monthIndex",key:"month",value:"2-digit",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},y:{token:"year",key:"year",value:"numeric",regExp:h._FOUR_DIGITS_REGEXP},yy:{token:"year",key:"year",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},yyyy:{token:"year",key:"year",value:"numeric",regExp:h._FOUR_DIGITS_REGEXP},a:{token:"ampm",key:"dayPeriod",value:void 0,regExp:h._WORD_REGEXP},z:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},v:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},zz:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},zzz:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},zzzz:{token:"tzFull",key:"timeZoneName",value:"long",regExp:h._STR_REGEXP},Z:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},ZZ:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},ZZZ:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},X:{token:"tzh",key:"tzh",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},XX:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},XXX:{token:"tzhsepm",key:"tzhsepm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},VV:{token:"tzid",key:"tzid",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},G:{token:"era",key:"era",value:"eraAbbr",regExp:h._NON_DIGIT_REGEXP},GG:{token:"era",key:"era",value:"eraAbbr",regExp:h._NON_DIGIT_REGEXP},GGG:{token:"era",key:"era",value:"eraAbbr",regExp:h._NON_DIGIT_REGEXP},GGGG:{token:"era",key:"era",value:"eraName",regExp:h._NON_DIGIT_REGEXP},GGGGG:{token:"era",key:"era",value:"eraNarrow",regExp:h._NON_DIGIT_REGEXP},"/":{token:"slash",regExp:h._SLASH_REGEXP}},h.FRACTIONAL_SECOND_MAP={a:{key:"dayPeriod",token:"dayPeriod",value:"narrow"},SSS:{key:"fractionalSecondDigits",token:"fractionalSecond",value:3},SS:{key:"fractionalSecondDigits",token:"fractionalSecond",value:2},S:{key:"fractionalSecondDigits",token:"fractionalSecond",value:1}},h._tokenMap={era:{short:"GGG",long:"GGGG",narrow:"GGGGG"},month:{short:"MMM",long:"MMMM",narrow:"MMMMM",numeric:"M","2-digit":"MM"},weekday:{short:"EEE",long:"EEEE",narrow:"EEEEE"},year:{numeric:"y","2-digit":"yy"},day:{numeric:"d","2-digit":"dd"},hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},fractionalSecond:{1:"S",2:"SS",3:"SSS"},timeZoneName:{short:"z",long:"zzzz"}},h._dateTimeFormats={dateStyle:{full:{year:"y",month_s:"MM",month_m:"MMMM",weekday:"EEEE",day:"d"},long:{year:"y",month_s:"MM",month_m:"MMMM",day:"d"},medium:{year:"y",month_s:"MM",month_m:"MMM",day:"d"},short:{year:"y",month_s:"M",month_m:"MMM",day:"d"}},timeStyle:{full:{hour:"h",minute:"mm",second:"ss",timeZoneName:"zzzz"},long:{hour:"h",minute:"mm",second:"ss",timeZoneName:"z"},medium:{hour:"h",minute:"mm",second:"ss"},short:{hour:"h",minute:"mm"}}},h._ALPHA_REGEXP=/([a-zA-Z]+)/,h._HOUR12_REGEXP=/h/g,h._hourCycleMap={h12:"h",h23:"H",h11:"K",h24:"k"},h._zh_tw_locales=["zh-TW","zh-Hant","zh-Hant-TW"],h._zh_tw_pm_symbols=["中午","下午","晚上"];const u=/^\s+|\s+$|\u200f|\u200e/g,c=/\s+|\u200f|\u200e/g,_=/0+$/g,y=["0","00","000"],g=/^[+-]?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}(?::?\d{2})?)?)?$|^T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}(?::?\d{2})?)?$/,E=/^[+-]?\d{4}-\d{2}-\d{2}$/;function p(e,t){return 0===e.indexOf(t)}function f(e){return(e+"").replace(u,"")}function T(e){return(e+"").replace(_,"")}function k(e){return(e+"").replace(c,"")}function I(e){return e.split(" ").join(" ").toUpperCase()}function v(e,t){let a=e+"",n=!1;return e<0&&(a=a.substr(1),n=!0),t>1&&a.length<t&&(a=y[t-2]+a,a=a.substr(a.length-t,t)),n&&(a="-"+a),a}function P(e,t,a){let n=""+e;for(let e=n.length;e<t;e+=1)n=a?"0"+n:n+"0";return n}function w(e,t,a,n,r){throw new RangeError("The string "+e+" is not a valid ISO 8601 string: "+a+" is out of range.  Enter a value between "+n+" and "+r+" for "+t,{cause:{code:"isoStringOutOfRange",parameterMap:{isoStr:e,value:a,minValue:n,maxValue:r,propertyName:t}}})}function M(e){throw new Error("The string "+e+" is not a valid ISO 8601 string syntax.",{cause:{code:"invalidISOString",parameterMap:{isoStr:e}}})}function G(e){let t=e;"number"==typeof t&&(t=new Date(t));let a=v(t.getFullYear(),4)+"-"+v(t.getMonth()+1,2)+"-"+v(t.getDate(),2)+"T"+v(t.getHours(),2)+":"+v(t.getMinutes(),2)+":"+v(t.getSeconds(),2);return t.getMilliseconds()>0&&(a+="."+T(v(t.getMilliseconds(),3))),a}function S(e){return e%400==0||e%100!=0&&e%4==0}function x(e,t){switch(t){case 0:case 2:case 4:case 6:case 7:case 9:case 11:return 31;case 1:return S(e)?29:28;default:return 30}}function R(e){!1===g.test(e)&&M(e);const t=e.split("T"),a=e.indexOf("T"),n=new Date;let r,o=!1;const s=[n.getFullYear(),n.getMonth()+1,n.getDate(),0,0,0,0];if(""!==t[0]){p(t[0],"-")&&(t[0]=t[0].slice(1),o=!0);const a=t[0].split("-");for(r=0;r<a.length;r++){const t=parseInt(a[r],10);if(1===r&&(t<1||t>12)&&w(e,"month",t,1,12),2===r){const a=x(s[0],s[1]-1);(t<1||t>a)&&w(e,"day",t,1,a)}s[r]=t}o&&(s[0]=-s[0])}if(-1!==a){const a=t[1].split("."),n=a[0].split(":");for(r=0;r<n.length;r++){const t=parseInt(n[r],10);0===r&&(t<0||t>24)&&w(e,"hour",t,0,24),1===r&&(t<0||t>59)&&w(e,"minute",t,0,59),2===r&&(t<0||t>59)&&w(e,"second",t,0,59),s[3+r]=t}2===a.length&&a[1]&&(s[6]=parseInt(P(a[1],3,!1),10))}return s}function O(e,t){if(void 0===e)throw new Error("Internal "+t+" error. Default options missing.");return function(a,n,r,o){if(void 0!==e[a]){let o=e[a];switch(n){case"boolean":o=function(e){if("string"==typeof e)switch(e.toLowerCase().trim()){case"true":case"1":return!0;case"false":case"0":return!1;default:return e}return e}(o);break;case"string":o=String(o);break;case"number":o=Number(o);break;default:throw new Error("Internal error. Wrong value type.")}if(void 0!==r&&-1===r.indexOf(o)){const n=[];for(let e=0;e<r.length;e++)n.push(r[e]);const o="The value '"+e[a]+"' is out of range for '"+t+"' options property '"+a+"'. Valid values: "+n,s=new RangeError(o),i={errorCode:"optionOutOfRange",parameterMap:{propertyName:a,propertyValue:e[a],propertyValueValid:n,caller:t}};throw s.errorInfo=i,s}return o}return o}}function D(e){let t=v(e[0],4)+"-"+v(e[1],2)+"-"+v(e[2],2)+"T"+v(e[3],2)+":"+v(e[4],2)+":"+v(e[5],2);return e[6]>0&&(t+="."+T(v(e[6],3))),t}function b(e){return e&&"string"==typeof e?function(e){const t=R(e),a=new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5],t[6]);return a.setFullYear(t[0]),a}(e):null}function L(e){const t={format:null,dateTime:null,timeZone:"",isoStrParts:null},a=g.exec(e);if(null===a&&M(e),a&&void 0===a[1]&&void 0===a[2])return t.format="local",t.dateTime=e,t.isoStrParts=R(t.dateTime),t;t.timeZone=void 0!==a[1]?a[1]:a[2],"Z"===t.timeZone?t.format="zulu":t.format="offset";const n=e.length,r=t.timeZone.length;return t.dateTime=e.substring(0,n-r),t.isoStrParts=R(t.dateTime),t}function N(e,t,a,n){const r=a?t>0:t<0,o=Math.abs(t);let s=Math.floor(o/60);const i=o%60,l=r?"-":"+";n&&(s=P(s,2,!0));let d=e+l+s;return(i>0||n)&&(d+=":"+P(i,2,!0)),d}var X={__proto__:null,_ISO_DATE_REGEXP:g,isDateOnlyIsoString:function(e){return null==e||e.trim().length>0&&E.test(e.trim())},startsWith:p,trim:f,trimRightZeros:T,trimNumber:k,toUpper:I,padZeros:v,zeroPad:P,dateToLocalIso:G,isLeapYear:S,getDaysInMonth:x,IsoStrParts:R,getGetOption:O,partsToIsoString:D,isoToLocalDate:b,getISOStrFormatInfo:L,getTimeStringFromOffset:N};let A=null;class z{static parseImpl(e,t,a,n){let r=0;let o,s="",i=null;return!0===g.test(e)?(s=e,r=this._isoStrDateTimeStyle(e)):(r=this._dateTimeStyle(a),o=this._parseExact(e,t,a,n),s=o.value),i=L(s),void 0!==a.timeZone&&i.format!==h._LOCAL&&this._adjustHours(i,a),s=this._createParseISOStringFromDate(r,i,a),void 0===o?o={value:s,warning:null}:(o.value=s,o.warning=null),2===r&&(a.isoStrFormat,h._LOCAL),o}static _appendPreOrPostMatch(e,t){let a=0,n=!1;for(let r=0,o=e.length;r<o;r++){const o=e.charAt(r);switch(o){case"'":n?t.push("'"):a+=1,n=!1;break;case"\\":n&&t.push("\\"),n=!n;break;default:t.push(o),n=!1}}return a}static _validateRange(e){if(e.value<e.low||e.value>e.high){const t=e.displayValue+" is out of range.  Enter a value between "+e.displayLow+" and "+e.displayHigh+" for "+e.name,a={cause:{code:"datetimeOutOfRange",parameterMap:{value:e.displayValue,minValue:e.displayLow,maxValue:e.displayHigh,propertyName:e.name}}};throw new RangeError(t,a)}}static _throwInvalidDateFormat(e,t,a){const n=void 0!==t.year||void 0!==t.month||void 0!==t.weekday||void 0!==t.day,r=void 0!==t.hour||void 0!==t.minute||void 0!==t.second;let o="";o=n&&r?"MM/dd/yy hh:mm:ss a":n?"MM/dd/yy":"hh:mm:ss a";throw new SyntaxError("Unexpected character(s) "+a+' encountered in the pattern "'+e+' An example of a valid pattern is "'+o+'".',{cause:{code:"optionValueInvalid",parameterMap:{propertyName:"pattern",propertyValue:e}}})}static _throwWeekdayMismatch(e,a){const n="The weekday "+e+" does not match the date "+a,r={cause:{code:"dateToWeekdayMismatch",parameterMap:{weekday:e,date:a}}};throw new t.FormatParseError(n,r)}static _throwDateFormatMismatch(e,a,n){let r="",o="";2===n?(r='The value "'+e+'" does not match the expected date-time format "'+a+'"',o="datetimeFormatMismatch"):0===n?(r='The value "'+e+'" does not match the expected date format "'+a+'"',o="dateFormatMismatch"):(r='The value "'+e+'" does not match the expected time format "'+a+'"',o="timeFormatMismatch");const s={cause:{code:o,parameterMap:{value:e,format:a}}};throw new t.FormatParseError(r,s)}static _parseTimezoneOffset(e){const t=e.split(":"),a=new Array(2);return 2===t.length?(a[0]=parseInt(t[0],10),a[1]=parseInt(t[1],10)):2===e.length||3===e.length?(a[0]=parseInt(e,10),a[1]=0):(a[0]=parseInt(e.substr(0,3),10),a[1]=parseInt(e.substr(3),10)),a}static _expandYear(e,t){if((t=Number(t))<100){const a=e%100;t+=100*Math.floor(e/100)+(t<a?100:0)}return t}static _arrayIndexOfMonthOrDay(e,t,a){const n=z.toUpperTrimmedNoPeriod(t),r=Object.keys(e);for(let t=0;t<r.length;t++){const o=e[r[t]],s=z.toUpperTrimmedNoPeriod(o);if(n===s)return t;if("months"===a){const e=Number(n),a=parseInt(s);if(Number.isInteger(a)&&Number.isInteger(e)&&a===e)return t}}return-1}static toUpperTrimmedNoPeriod(e){let t=I(e);return t=f(t),t=t.replace(/\.$/,""),t}static _getDayIndex(e,t){let a=0,n=[];const r=e.days.format,o=e.days["stand-alone"];n=[r.abbreviated,r.wide,o.abbreviated,o.wide];for(let e=0;e<n.length;e++)if(a=this._arrayIndexOfMonthOrDay(n[e],t,"days"),-1!==a)return a;return a}static _getMonthIndex(e,t){let a=-1;const n=e.months.format,r=e.months["stand-alone"],o=[n.wide,n.abbreviated,r.wide,r.abbreviated];for(let e=0;e<o.length;e++)if(a=this._arrayIndexOfMonthOrDay(o[e],t,"months"),-1!==a)return a;return a}static _getParseRegExp(e,t){const a=e.replace(h._ESCAPE_REGEXP,"\\\\$1"),n=["^"],r=[];let o=0,s=0,i=h._TOKEN_REGEXP.exec(a);for(;null!==i;){const l=a.slice(o,i.index);if(o=h._TOKEN_REGEXP.lastIndex,s+=this._appendPreOrPostMatch(l,n),s%2)n.push(i[0]);else{const a=i[0];let o="";void 0!==h._PROPERTIES_MAP[a]?o=h._PROPERTIES_MAP[a].regExp:this._throwInvalidDateFormat(e,t,a),o&&n.push(o),r.push(i[0])}i=h._TOKEN_REGEXP.exec(a)}this._appendPreOrPostMatch(a.slice(o),n),n.push("$");return{regExp:n.join("").replace(/\s+/g,"\\s+"),groups:r}}static _getTokenIndex(e,t){for(let a=0;a<e.length;a++)if(void 0!==e[a][t])return a;return 0}static _parseLenienthms(e,t,a,n,r){h._TIME_REGEXP.lastIndex=0;let o,s,i=0,l=0,d=0,m=0,u=h._TIME_REGEXP.exec(t);switch(null===u&&this._throwDateFormatMismatch(t,a,n),void 0!==u[1]&&(i=parseInt(u[1],10)),void 0!==u[2]&&(l=parseInt(u[2],10)),void 0!==u[3]&&(d=parseInt(u[3],10)),void 0!==u[4]&&(m=parseInt(u[4],10)),h._TIME_FORMAT_REGEXP.lastIndex=0,u=h._TIME_FORMAT_REGEXP.exec(a),u[0]){case"h":12===i&&(i=0),s={name:"hour",value:i,low:0,high:11,displayValue:i,displayLow:1,displayHigh:12},this._validateRange(s),o=this._matchPMSymbol(r,t),o&&i<12&&(i+=12);break;case"K":s={name:"hour",value:i,low:0,high:11,displayValue:i,displayLow:0,displayHigh:11},this._validateRange(s),o=this._matchPMSymbol(r,t),o&&i<12&&(i+=12);break;case"H":s={name:"hour",value:i,low:0,high:23,displayValue:i,displayLow:0,displayHigh:23},this._validateRange(s);break;case"k":24===i&&(i=0),s={name:"hour",value:i,low:0,high:23,displayValue:i,displayLow:1,displayHigh:24}}s={name:"minute",value:l,low:0,high:59,displayValue:l,displayLow:0,displayHigh:59},this._validateRange(s),s={name:"second",value:d,low:0,high:59,displayValue:d,displayLow:0,displayHigh:59},this._validateRange(s),s={name:"farctionalSecond",value:m,low:0,high:999,displayValue:m,displayLow:0,displayHigh:999},this._validateRange(s),e.setHours(i,l,d,m)}static _getWeekdayName(e,t){const a=t.days.format,n=t.days["stand-alone"],r=[a.wide,a.abbreviated,n.wide,n.abbreviated];for(let t=0;t<r.length;t++){const a=Object.keys(r[t]);for(let n=0;n<a.length;n++){const o=r[t][a[n]];if(new RegExp(o+"\\b","i").test(e))return o}}return null}static _parseLenientyMEd(e,t,a,n,r){h._YMD_REGEXP.lastIndex=0;const o=h._YMD_REGEXP.exec(e);let s=0;null===o&&(s=r?2:0,this._throwDateFormatMismatch(e,t,s));const i=[{y:t.indexOf("y")},{M:t.indexOf("M")},{d:t.indexOf("d")}];i.sort((function(e,t){const a=Object.keys(e)[0],n=Object.keys(t)[0];return e[a]-t[n]}));let l=0,d=0,m=0,u=0,c=0,_=0;const y=this._getTokenIndex(i,"d");let g=!1,E=!1;for(_=1;_<=3;_++){const e=o[_],t=parseInt(e);(e.length>2||t>31)&&(l=t,g=!0,u=_-1)}for(g||(u=this._getTokenIndex(i,"y"),l=o[this._getTokenIndex(i,"y")+1]),_=0;_<3;_++)if(_!==u&&o[_+1]>12){m=o[_+1],E=!0,c=_;break}if(E){for(_=0;_<3;_++)if(_!==c&&_!==u){d=o[_+1];break}void 0===d&&(d=o[this._getTokenIndex(i,"M")+1])}else u===this._getTokenIndex(i,"d")?(m=o[this._getTokenIndex(i,"y")+1],d=o[this._getTokenIndex(i,"M")+1]):u===this._getTokenIndex(i,"M")?(m=o[this._getTokenIndex(i,"d")+1],d=o[this._getTokenIndex(i,"y")+1]):(m=o[this._getTokenIndex(i,"d")+1],d=o[this._getTokenIndex(i,"M")+1]);d-=1;const p=x(l,d);let f;E&&y!==c&&d>12&&(f={name:"month",value:m,low:0,high:11,displayValue:m,displayLow:1,displayHigh:12},this._validateRange(f)),f={name:"month",value:d,low:0,high:11,displayValue:d+1,displayLow:1,displayHigh:12},this._validateRange(f),f={name:"day",value:m,low:1,high:p,displayValue:m,displayLow:1,displayHigh:p},this._validateRange(f);const T=a.twoDigitYearStart||1950;l=this._expandYear(T,l),f={name:"year",value:l,low:0,high:9999,displayValue:l,displayLow:0,displayHigh:9999},this._validateRange(f);const k=new Date(l,d,m),I=this._getWeekdayName(e,n);if(null!==I){const e=this._getDayIndex(n,I);k.getDay()!==e&&this._throwWeekdayMismatch(I,k.getDate())}if(r){const a=e.substr(h._YMD_REGEXP.lastIndex);0===a.length?k.setHours(0,0,0,0):this._parseLenienthms(k,a,t,2,n)}return{value:G(k),warning:"lenient parsing was used"}}static _parseLenientyMMMEd(e,t,a,n,r){const o=e;e=I(e);const s=n.months.format,i=n.months["stand-alone"],l=[s.wide,s.abbreviated,i.wide,i.abbreviated];let d=!1,m=[],u=0,c="";for(u=0;u<l.length;u++){m=[];const t=Object.keys(l[u]);let a=0;for(a=0;a<t.length;a++)c=I(l[u][t[a]]),m.unshift({idx:a,name:c});for(m.sort((function(e,t){return t.idx-e.idx})),a=0;a<m.length;a++)if(c=m[a].name,-1!==e.indexOf(c)){d=!0,e=e.replace(c,"");break}if(d)break}if(!d)return this._parseLenientyMEd(o,t,a,n,r);const _=this._getMonthIndex(n,c);let y={name:"month",value:_,low:0,high:11,displayValue:_,displayLow:1,displayHigh:12};this._validateRange(y);const g=this._getWeekdayName(o,n),E=new RegExp(g+"\\W","i");null!==g&&(e=e.replace(E,"")),h._YEAR_AND_DATE_REGEXP.lastIndex=0;const p=h._YEAR_AND_DATE_REGEXP.exec(e);if(null===p){const e=r?2:0;this._throwDateFormatMismatch(o,t,e)}const f=[{y:t.indexOf("y")},{d:t.indexOf("d")}];f.sort((function(e,t){const a=Object.keys(e)[0],n=Object.keys(t)[0];return e[a]-t[n]}));let T=0,k=0,v=0,P=!1;for(u=1;u<=2;u++){const e=p[u],t=parseInt(e);(e.length>2||t>31)&&(T=t,P=!0,v=u-1)}P||(v=this._getTokenIndex(f,"y"),T=parseInt(p[this._getTokenIndex(f,"y")+1],10)),k=v===this._getTokenIndex(f,"d")?parseInt(p[this._getTokenIndex(f,"y")+1],10):parseInt(p[this._getTokenIndex(f,"d")+1],10);const w=a.twoDigitYearStart||1950;T=this._expandYear(w,T),y={name:"year",value:T,low:0,high:9999,displayValue:T,displayLow:0,displayHigh:9999},this._validateRange(y);const M=new Date(T,_,k);if(null!==g){const e=this._getDayIndex(n,g);M.getDay()!==e&&this._throwWeekdayMismatch(g,M.getDate())}const S=x(T,_);if(y={name:"day",value:k,low:1,high:S,displayValue:k,displayLow:1,displayHigh:S},this._validateRange(y),r){const a=e.substr(h._YEAR_AND_DATE_REGEXP.lastIndex);0===a.length?M.setHours(0,0,0,0):this._parseLenienthms(M,a,t,2,n)}return{value:G(M),warning:"lenient parsing was used"}}static _parseLenient(e,t,a,n){let r;switch(this._dateTimeStyle(a)){case 0:r=this._parseLenientyMMMEd(e,t,a,n,!1);break;case 1:const o=new Date;this._parseLenienthms(o,e,t,1,n);r={value:G(o),warning:"lenient parsing was used"};break;case 2:r=this._parseLenientyMMMEd(e,t,a,n,!0);break;default:r={value:"",warning:"lenient parsing was used"}}const o=R(r.value),s=[o[0],o[1],o[2]],i=r.value.split("T");return r.value=v(s[0],4)+"-"+v(s[1],2)+"-"+v(s[2],2)+"T"+i[1],r}static _getNameIndex(e,t,a,n,r,o,s,i,l,d,m){let h=0;const u=e[t][r];h="months"===t?this._getMonthIndex(e,a):this._getDayIndex(e,a);const c=u[n][l],_=u[n][d],y={name:m,value:h,low:s,high:i,displayValue:parseInt(a),displayLow:c,displayHigh:_};return this._validateRange(y),h}static _validateTimePart(e,t,a,n){const r=t;r[a.timePart]=e,"h"===n||"hh"===n?12===e&&(r[a.timePart]=0):"k"===n||"kk"===n?(r.htoken=n,24===e&&(r[a.timePart]=0)):"K"!==n&&"KK"!==n||12===e&&(r[a.timePart]=0);const o={name:a.timePart,value:r[a.timePart],low:a.start1,high:a.end1,displayValue:e,displayLow:a.start2,displayHigh:a.end2};this._validateRange(o)}static _dateTimeStyle(e){const t=void 0!==e.hour||void 0!==e.minute||void 0!==e.second||void 0!==e.fractionalSecondDigits,a=void 0!==e.year||void 0!==e.month||void 0!==e.day||void 0!==e.weekday;return a&&t?2:t?1:a?0:void 0!==e.dateStyle&&void 0!==e.timeStyle?2:void 0!==e.timeStyle?1:0}static _matchPMSymbol(e,t){const a=e.locale;let n=!1,r=0;if(h._zh_tw_locales.includes(a)){const e=h._zh_tw_pm_symbols;for(r=0;r<e.length;r++){const a=e[r];if(-1!==t.indexOf(a))return!0}}else{const a=e.dayPeriods.format.wide.pm;n=-1!==I(t).indexOf(I(a))}return n}static _parseExact(e,t,a,n){const r=n.eras.eraAbbr[1],o=k(r);e=e.replace(r,o);const s=O(a,"NativeDateTimeConverter.parse")("lenientParse","string",["none","full"],"full"),i=this._dateTimeStyle(a),l=this._getParseRegExp(t,a),d=new RegExp(l.regExp).exec(e);if(null===d){if("full"===s)return this._parseLenient(e,t,a,n);this._throwDateFormatMismatch(e,t,i)}const m=l.groups;let u,c,_=null,y=null,g=null,E=null,p="",f=null,T="";const I={hour:0,minute:0,second:0,millisec:0,htoken:""},v=a.twoDigitYearStart||1950;for(let r=0,o=m.length;r<o;r++){const o=d[r+1];if(o){const i=m[r],l=parseInt(o,10),d=h._PROPERTIES_MAP[i];switch(d.token){case"months":y=this._getNameIndex(n,d.token,o,d.mLen,d.style,d.matchIndex,0,11,"1","12","month name");break;case"days":T=o,E=this._getNameIndex(n,d.token,o,d.dLen,d.style,d.matchIndex,0,6,"sun","sat","weekday");break;case"time":this._validateTimePart(l,I,d,i);break;case"dayOfMonth":g=l;break;case"monthIndex":if(y=l-1,y>11&&"full"===s)try{return this._parseLenient(e,t,a,n)}catch(e){c={name:"month",value:y,low:0,high:11,displayValue:y+1,displayLow:1,displayHigh:12},this._validateRange(c)}break;case"year":_=this._expandYear(v,l);break;case"ampm":u=this._matchPMSymbol(n,o);break;case"tzhm":p=o.substr(-2),p=o.substr(0,3)+":"+p;break;case"tzhsepm":p=o;break;case"tzh":p=o+":00";break;case"tzid":f=o}}}const P=new Date;null===_&&(_=P.getFullYear()),null===y&&null===g?(y=P.getMonth(),g=P.getDate()):null===g&&(g=1),P.setFullYear(_,y,g);const w=x(_,y);c={name:"day",value:g,low:1,high:w,displayValue:g,displayLow:1,displayHigh:w},this._validateRange(c),1==u&&I.hour<12&&(I.hour+=12),0!=u||12!=I.hour||"k"!=I.htoken&&"kk"!=I.htoken||(I.hour=0);const M=[_,y+1,g];M[3]=I.hour,M[4]=I.minute,M[5]=I.second,M[6]=I.millisec;let G=D(M);if(null!==f){p=N("",this._getTimeZoneOffset(M,f),!1,!0)}""!==p&&(G+=p),c={name:"year",value:_,low:0,high:9999,displayValue:_,displayLow:0,displayHigh:9999},this._validateRange(c),c={name:"month",value:y,low:0,high:11,displayValue:y+1,displayLow:1,displayHigh:12},this._validateRange(c);const S=x(M[0],M[1]-1);if(c={name:"day",value:M[2],low:1,high:S,displayValue:M[2],displayLow:1,displayHigh:S},this._validateRange(c),null!==E){const e=b(G);e&&e.getDay()!==E&&this._throwWeekdayMismatch(T,e.getDate())}return{value:G}}static _isoStrDateTimeStyle(e){const t=e.indexOf("T");return-1===t?0:t>0?2:1}static _getTimeZoneOffset(e,t){if(this.getLocalSystemTimeZone()===t){return-new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5]).getTimezoneOffset()}return l({year:e[0],month:e[1],date:e[2],hours:e[3],minutes:e[4]},t)}static _getAdjustedOffset(e,t){const a=t.isoStrParts;return this._getTimeZoneOffset(a,e)}static _adjustHours(e,t){const a=e.isoStrParts;let n=0;switch(e.format){case h._OFFSET:const t=this._parseTimezoneOffset(e.timeZone),a=t[0],r=t[1];n=60*a+(a<0?-r:r);break;case h._ZULU:n=0}let r=this._getAdjustedOffset(t.timeZone,e);r-=n;const o=new Date(a[0],a[1]-1,a[2],a[3],a[4],a[4]);o.setHours(a[3]+(r/60<<0),r%60);const s=L(G(o));r=this._getAdjustedOffset(t.timeZone,s),r-=n;const i=new Date(Date.UTC(a[0],a[1]-1,a[2],a[3],a[4],a[5])),l=i.getUTCMinutes()+r;i.setUTCHours(i.getUTCHours()+(l/60<<0),l%60),a[0]=i.getUTCFullYear(),a[1]=i.getUTCMonth()+1,a[2]=i.getUTCDate(),a[3]=i.getUTCHours(),a[4]=i.getUTCMinutes(),a[5]=i.getUTCSeconds()}static _createISOStrParts(e,t){let a=0,n="";switch(e){case 0:n=v(t[0],4)+"-"+v(t[1],2)+"-"+v(t[2],2);break;case 1:n="T"+v(t[3],2)+":"+v(t[4],2)+":"+v(t[5],2),a=t[6],a>0&&(n+="."+T(a));break;default:n=v(t[0],4)+"-"+v(t[1],2)+"-"+v(t[2],2)+"T"+v(t[3],2)+":"+v(t[4],2)+":"+v(t[5],2),a=t[6],a>0&&(n+="."+T(a))}return n}static _getParseISOStringOffset(e,t){return N("",this._getTimeZoneOffset(t,e),!1,!0)}static _createParseISOStringFromDate(e,t,a){const n=O(a,"NativeDateTimeConverter.parse")("isoStrFormat","string",[h._ZULU,h._OFFSET,h._INVARIANT,h._LOCAL,h._AUTO],h._AUTO),r=t.isoStrParts,o=a.timeZone;let s=this._createISOStrParts(e,r);if(0===e)return s;switch(n){case h._OFFSET:case h._AUTO:s+=this._getParseISOStringOffset(o,r);break;case h._LOCAL:2===e&&(s+=this._getParseISOStringOffset(o,r));break;case h._ZULU:let t=0;if(t=-this._getTimeZoneOffset(r,o),0!==t){const a=new Date(Date.UTC(r[0],r[1]-1,r[2],r[3],r[4],r[5],r[6]));t=a.getUTCMinutes()+t,a.setUTCHours(a.getUTCHours()+(t/60<<0),t%60),r[0]=a.getUTCFullYear(),r[1]=a.getUTCMonth()+1,r[2]=a.getUTCDate(),r[3]=a.getUTCHours(),r[4]=a.getUTCMinutes(),r[5]=a.getUTCSeconds(),s=this._createISOStrParts(e,r)}s+="Z"}return s}static getTimeZoneCurrentDate(e){const t={year:"numeric",day:"2-digit",month:"2-digit"};e&&(t.timeZone=e);const a=Intl.DateTimeFormat("en-US",t).format(new Date).split("/");return a[2]+"-"+a[0]+"-"+a[1]}static getTimeZoneCurrentOffset(e){const t=L(G(new Date));return this._getAdjustedOffset(e,t)}static getLocalSystemTimeZone(){if(!A){const e=new Intl.DateTimeFormat("en-US");A=e.resolvedOptions().timeZone}return A}}const F=e=>new Intl.DateTimeFormat(e.locale,e),H=(e,t)=>{const a=e.resolvedOptions(),n=t.isoStrFormat??"auto",r=t.twoDigitYearStart??1950,o=t.lenientParse??"full",s=Y(e,a);return{...a,isoStrFormat:n,twoDigitYearStart:r,lenientParse:o,patternFromOptions:s}},U=(e,t)=>{let a=null;return"short"===e.dateStyle&&e.dateStyleShortYear&&(a=new Intl.DateTimeFormat(e.locale,{year:e.dateStyleShortYear,numberingSystem:t.numberingSystem,calendar:t.calendar})),a},Z=(e,t,a)=>{const n=t.formatToParts(a),r=n.find((e=>"year"===e.type))?.value;return e.formatToParts(a).reduce(((e,t)=>"year"===t.type?e+(r??t.value):e+t.value),"")},C=(e,t,a,n)=>{const r=W(a,n),o=new Date(r);return t?Z(e,t,o):e.format(o)},V=(e,n,r,o)=>{if(null==o||""===o)throw new t.FormatParseError("The parse value cannot be empty.",{cause:{code:"emptyParseValue"}});const i=s.getCalendar(e,r.calendar),l=Y(n,r),d=z.parseImpl(o,l,r,i),m=d.value;return m&&d.warning&&a.Logger.warn("The value "+o+" was leniently parsed to represent a date "+m),m},W=(e,a)=>{if(null==a||""===a)throw new t.FormatParseError("The format value cannot be empty.",{cause:{code:"emptyFormatValue"}});if(a.startsWith("T")){let t="";t=e?z.getTimeZoneCurrentDate(e):G(new Date).split("T")[0],a=t+a}else-1===a.indexOf("T")&&(a+="T00:00:00");if(!g.exec(a)){throw new t.FormatParseError("The format value must be a valid iso string.",{cause:{code:"invalidISOString",parameterMap:{isoStr:a}}})}if(e){let t=!1;z.getLocalSystemTimeZone()===e&&(t=!0);const n=a.substring(a.indexOf("T"));if(-1===n.indexOf("Z")&&-1===n.indexOf("+")&&-1===n.indexOf("-")&&!t){const t=R(a);a+=N("",l({year:t[0],month:t[1],date:t[2],hours:t[3],minutes:t[4]},e),!1,!0)}}return a=a.replace(/(T.*?[+-]..$)/,"$1:00")},Y=(e,t)=>{const a=new Date("2000-01-02T00:00:00");let n="",r="",o=null,s=null,i=null,l=!1,d=!1;void 0!==t.dateStyle&&(s=h._dateTimeFormats.dateStyle,s=s[t.dateStyle],l=!0),void 0!==t.timeStyle&&(i=h._dateTimeFormats.timeStyle,i=i[t.timeStyle],d=!0);const m=h._tokenMap;return e.formatToParts(a).map((({type:e,value:a})=>{switch(e){case"literal":o=a.replace(h._ALPHA_REGEXP,"'$1'");break;case"dayPeriod":o="a";break;case"hour":d?o=i[e]:(r=t[e],o=m[e][r]);let n=t.hour12;void 0===n&&(n=!1),t.hourCycle&&(o=o.replace(h._HOUR12_REGEXP,h._hourCycleMap[t.hourCycle])),!0===n&&(o=o.replace(h._HOUR12_REGEXP,"h"));break;case"month":l?o=isNaN(+a)?s.month_m:s.month_s:(r=t[e],o=m[e][r]);break;case"year":case"day":case"weekday":l?o=s[e]:(r=t[e],o=m[e][r]);break;case"minute":case"second":case"timeZoneName":d?o=i[e]:(r=t[e],o=m[e][r]);break;case"era":r=t[e]||"short",o=m[e][r];break;case"fractionalSecond":o=t.fractionalSecondDigits,o=m[e][o]}n+=o})),n};var j=r._arity_1,K=n._isPlaceholder_1;var $=function e(t,a,n){return function(){for(var r=[],o=0,s=t,i=0;i<a.length||o<arguments.length;){var l;i<a.length&&(!K(a[i])||o>=arguments.length)?l=a[i]:(l=arguments[o],o+=1),r[i]=l,K(l)||(s-=1),i+=1}return s<=0?n.apply(this,r):j(s,e(t,r,n))}},J=r._arity_1,q=n._curry1_1,B=o._curry2_1,Q=$,ee=B((function(e,t){return 1===e?q(t):J(e,Q(e,[],t))}));e.CalendarUtils=s,e.DateTimeUtils=X,e.NativeDateTimeConstants=h,e.NativeParserImpl=z,e.formatWithYearFormat=Z,e.getFormatParse=function(e){const t=F(e),a=H(t,e),n=U(e,a);return{format:ee(4,C)(t,n,a.timeZone),parse:ee(4,V)(e.locale,t,a),resolvedOptions:a,formatter:t}},e.getISODateOffset=l,e.normalizeIsoString=W,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_IntlDateTime.js.map
