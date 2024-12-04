/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-01-26 14:35:49
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-01-26 17:39:42
 */
const fs = require('fs');
const path = require('path');
// 从B站爬取的数据
const data = require('./1750799060715048960.json');
// 课程id
const courseId = '1750814268799979520';
const defaultChapterPrefix = '章节'
const defaultClassPrefix = '课时';
const outputPath = path.resolve(__dirname, `body.json`);
// const outputPath = path.resolve(__dirname, `${courseId}.body.json`);
let result = [];
let chapterIndex = 0;
let classIndex = 0
data.forEach(item => {
  if (item.chapterName) {
    classIndex = 0;
    const chapterData = {
      chapterName: item.chapterName,
      classInfoDTOS: [],
      defaultPrefix: `${defaultChapterPrefix}${chapterIndex + 1}`,
      id: null,
      sort: chapterIndex
    }
    result.push(chapterData)
    chapterIndex++
  }
  result[result.length - 1]?.classInfoDTOS.push({
    className: item.name,
    id: null,
    classType: 1,
    sort: classIndex,
    defaultPrefix: `${defaultClassPrefix}${classIndex + 1}`,
    videoLength: item.time,
    videoUrl: item.url
  })
  classIndex++;
})
fs.writeFileSync(outputPath, JSON.stringify({
  id: courseId,
  chapterInfoDTOS: result
}, null,2))
