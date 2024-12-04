
let pages = window.__INITIAL_STATE__.videoData.pages || []
let result = [];
const aid = window.__INITIAL_STATE__.aid
const bvid = window.__INITIAL_STATE__.bvid
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  return `${minutes}:${seconds}`
}
function getUrl(cid,page) {
  return `//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&p=${page}&high_quality=1&danmaku=0`
}
pages.forEach(item => {
  const { cid, page, part, duration } = item;
  console.log(part);
    result.push({
      name: part.replace(/^\d+_/, ''),
      url:getUrl(cid,page),
      time: formatTime(duration)
    })
})


console.log(JSON.stringify(result))
