export function sliceThreeArray(data) {
  let result = [];
  for (let i = 0, length = data.length; i < length; i += 3) {
    result.push(data.slice(i, i + 3));
  }
  return result;
}

export function timeToDate(time) {
  let diff = new Date().getTime() - new Date(time);
  let days = Math.floor(diff / (24 * 3600 * 1000));
  let leave1 = diff % (24 * 3600 * 1000);
  let hours = Math.floor(leave1 / (3600 * 1000));
  let leave2 = leave1 % (3600 * 1000);
  let minutes = Math.floor(leave2 / (60 * 1000));
  let leave3 = leave2 % (60 * 1000);
  let seconds = Math.round(leave3 / 1000);
  let returnStr = '';
  if(days > 0) {
    returnStr = days + "天前";
  }else{
    if(hours > 0) {
      returnStr = hours + "小时前";
    }else{
      if(minutes > 0) {
        returnStr = hours + "分钟前";
      }else{
        if(seconds > 0) {
          returnStr = seconds + "秒前";
        }
      }
    }
  }
  return returnStr;
}
