# 拾句静态搜索与正文数据

用于 [拾句](https://jessiewang-hongyan.github.io/shiju/)。仅篇名与作者搜索；正文按需读取。

- static-data：搜索索引及摘要；网站构建时复制。
- bodies：固定版本、SHA-256 命名的正文块，不截断单篇作品。
- body-inventory.json：完整性清单。
- 来源：chinese-poetry/chinese-poetry 与 Werneror/Poetry；原始文字保留，可能含异体字或缺文。来源审计见 source-catalog-inventory.json。
- 原数据许可见 licenses/，不得将仓库管理方式理解为对原资料的重新授权。

数据版本 8e1ac91380039623313c；源数据版本 a43b9f1990309297ffbb-remote-v2。文件采用不可变路径，旧版本应保留，以支持旧页面。manifest 中的 @BODY_BASE_URL@ 由网站构建器替换成此仓库的固定提交 raw URL。生成脚本位于主仓库 scripts/prepare-search-data.mjs 与 prototype/remote-body/。
