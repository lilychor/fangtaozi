FANG TAOZI — PREMIUM VISUAL VERSION / V2

这是在 v1 基础上升级的高级虚拟网红官网视觉原型。

视觉关键词：
Editorial / Digital Luxury / Lifestyle / Soft Minimal / Virtual Creator

结构：
Home
About
Works
Business
Community
Contact

隐藏：
#archive — 事件回顾 / 问责
#behind — IP幕后劳动
#questions — 伦理问卷

运行：
直接打开 index.html，或使用 VS Code + Live Server。

替换素材：
目前图片区域仍是视觉占位。将你们自己的方桃子角色图、Vlog、Campaign海报放入 assets，并按 HTML 中对应 class 替换。


V3.1 UPDATE (campaign block reworked)
- The frontstage "SELECTED CAMPAIGN" block is now "SELECTED EDITORIAL": the
  Cosmopolitan China CRUSH cover occupies the visual column, and the two
  editorials sit in a full-width spread beneath it.
- The campaign copy, the modal headline and the modal content were rewritten
  for a magazine feature (see the production sheet inside the modal).
- The contested contact-lens campaign (fictional brand "LUMI") has been moved
  off the frontstage. Its visual still appears on the hidden page as EXHIBIT B
  of the accountability case — see backstage.html.
- Assets added: cosmo-cover.jpg, cosmo-editorial-01.jpg, cosmo-editorial-02.jpg
  (supplied by the team as IMG_8100 / IMG_8101 / IMG_8102).

V3 IMAGE UPDATE (real 方桃子 imagery is now wired in)
- All visual placeholders have been replaced with real images of 方桃子, the
  AI actor from 《被裁掉的女孩》. Files live in assets/ — see assets/SOURCES.txt
  for the full file map and where each image came from.
- index.html: hero portrait, the three "FROM THE FEED" vlog stills, the
  campaign key visual, the campaign detail modal, the favicon and the
  "Taozi replies" avatar.
- backstage.html: HIDDEN PAGE A now has an EXHIBITS strip (the sponsored post,
  the campaign visual, the account numbers); HIDDEN PAGE B has the three-account
  comparison that shows the creator account behind the persona.
- Extra entrance to the hidden page: the small "⚠ EVENT REVIEW" link under the
  business form (the other entrance is still the tiny dot in the footer).
- To swap in your own renders, just overwrite the files in assets/ keeping the
  same file names.

V2 STRUCTURE UPDATE
- index.html is now frontstage only. The critical/backstage content is no longer in the public page flow.
- backstage.html is a separate archive page containing the campaign accountability case, behind-the-IP production stages, human-labour layer, and ethical questionnaire.
- The only public entrance is the tiny dot in the footer (between the copyright and disclaimer).
- backstage.js powers the interactive production stages and ethical questionnaire.
- To edit the secret page, open backstage.html.
