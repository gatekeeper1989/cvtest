let string = document.querySelector("#string");
let style = document.querySelector("#style");

let str = `
/* 你好，我叫曦曦。
 * 下面我要展示学习至今的前端水平。
 * 首先我要准备一个div：
 */
#taiji{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/* 接下来我要把 taiji 变成太极图案。
 * 注意看清了。
 * 首先把 taiji 变成一个圆形。
 */
#taiji{
  border-radius: 100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
}
/* 太极图一阴一阳组成，
 * 左白右黑
 * 接下来把圆左右变成白黑均匀两部分：
 */
#taiji{
  background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 接着加入太极图上下两个小圆。
 * 上圆是外白内黑两个同心圆。
 * 下圆是外黑内白两个同心圆。
 */
#taiji::before{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#taiji::after{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/* 这样我们就得到了一个完整的太极图案。*/
`;

let n = 0;
let str2 = "";

let step = () => {
  setTimeout(() => {
    if (str[n] === "\n") {
      str2 += "<br>";
    } else if (str[n] === " ") {
      str2 += "&nbsp;";
    } else {
      str2 += str[n];
    }
    string.innerHTML = str2;
    style.innerHTML = str.substring(0, n);
    window.scrollTo(0, 99999);
    string.scrollTo(0, 99999);
    if (n < str.length - 1) {
      n += 1;
      step();
    }
  }, 40);
};

step();
