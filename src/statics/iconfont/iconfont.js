import { createGlobalStyle } from 'styled-components'  
const GlobalStyleIconFont = createGlobalStyle `
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1604673694567'); /* IE9 */
  src: url('./iconfont.eot?t=1604673694567#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1604673694567') format('woff'),
  url('./iconfont.ttf?t=1604673694567') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1604673694567#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export default GlobalStyleIconFont

/* .icon-fangdajing:before {
  content: "\e633";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-gangbi:before {
  content: "\e601";
}

.icon-icon_addmessage:before {
  content: "\eb8f";
}

.icon-icon_addresslist:before {
  content: "\eb90";
}

.icon-icon_affiliations_li:before {
  content: "\eb91";
}

.icon-icon_addperson:before {
  content: "\eb92";
} */

