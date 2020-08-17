<template>
  <div>
    <!-- 发送 -->
    <div id="send-btn">
      <button>
       <svg t="1597628511979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2702" width="20" height="20"><path d="M812.77952 977.92a75.3664 75.3664 0 0 1-50.83648-19.80928L596.48 807.6288a3.18976 3.18976 0 0 0-2.43712-0.84992 3.15904 3.15904 0 0 0-2.304 1.17248l-66.35008 79.21664A75.83744 75.83744 0 0 1 393.216 855.04l-47.39072-211.75808a3.31264 3.31264 0 0 0-2.19136-2.41152l-214.69696-70.59968a75.88864 75.88864 0 0 1-11.1104-139.51488l718.74048-371.10272a75.8528 75.8528 0 0 1 110.42816 73.12384l-58.368 774.89152a75.38176 75.38176 0 0 1-47.616 64.79872 76.22656 76.22656 0 0 1-28.23168 5.4528z m-218.58816-243.712a76.24704 76.24704 0 0 1 51.09248 19.72736l165.46304 150.48192a3.3024 3.3024 0 0 0 5.51424-2.19136l58.368-774.8864a3.29216 3.29216 0 0 0-4.79744-3.16928L151.10144 495.25248a3.29728 3.29728 0 0 0 0.48128 6.06208L366.29504 571.904a76.22656 76.22656 0 0 1 50.34496 55.51104L464.0256 839.168a3.29728 3.29728 0 0 0 5.74464 1.39264L536.1152 761.344a76.22144 76.22144 0 0 1 53.00736-26.97728q2.5344-0.15872 5.0688-0.15872z m-96.91648 13.25056a36.28032 36.28032 0 0 1-36.1216-33.4592l-7.38816-94.30528a92.55424 92.55424 0 0 1 24.23296-69.85728l241.664-261.34528a36.28544 36.28544 0 1 1 53.248 49.28512l-241.664 261.34528a19.75808 19.75808 0 0 0-5.1712 14.8992l7.38816 94.3104a36.28544 36.28544 0 0 1-33.32608 39.0144 44.032 44.032 0 0 1-2.86208 0.09728z" fill="#13227a" p-id="2703"></path></svg>
       send
      </button>
    </div>

    <!-- 霓虹灯 -->
    <div id="neon-btn">
      <button class="btn one">Hover me</button>
      <button  class="btn two">Hover me</button>
      <button  class="btn three">Hover me</button>
    </div>

    <!-- 边框效果 -->
    <div id="draw-border">
      <button>Hover me</button>
    </div>

    <!-- 圆角效果 -->
    <div id="circle-btn">
      <div class="btn-container">
        <svg t="1597631077524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3759" width="16" height="16"><path d="M244.363636 556.939636h469.248l-184.762181 170.565819a34.909091 34.909091 0 1 0 47.36 51.29309l250.391272-231.121454a34.955636 34.955636 0 0 0 0-51.293091l-250.391272-231.121455a34.862545 34.862545 0 0 0-49.338182 1.95491 34.909091 34.909091 0 0 0 1.978182 49.338181l184.762181 170.565819H244.363636a34.909091 34.909091 0 1 0 0 69.818181" fill="#ffffff" p-id="3760"></path></svg>
        <button>Hover me</button>
      </div>
    </div>

    <!-- 冰冻效果 -->
    <div id="border-btn">
      <button>Hover me</button>
    </div>

    <!-- 闪亮效果 -->
    <div id="frozen-btn">
      <button class="green">Hover me</button>
      <button class="purple">Hover me</button>
    </div>
    
    <!-- 加载效果 -->
    <div id="shiny-shadow">
      <button><span>Hover me</span></button>
    </div>

    <!-- 加载效果 -->
    <div id="loading-btn">
      <button><span>Hover me</span></button>
    </div>

    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
// 发送
#send-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  button {
    background: #5f55af;
    border: 0;
    border-radius: 5px;
    padding: 10px 30px 10px 20px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }
  button svg {
    display: inline-block;
    vertical-align: middle;
    padding-right: 5px;
  }

  button:hover svg {
    animation: fly 2s ease 1;
  }
  @keyframes fly {
    0% {
      transform: translateX(0%);
    }

    50% {
      transform: translateX(300%);
    }

    100% {
      transform: translateX(0);
    }
  }
}

// 霓虹灯
#neon-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  background: #031628; 
  .btn {
    border: 1px solid;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 20px;
    font-weight: 300;
  }

  .one {
    color: #4cc9f0;
  }
  .two {
    color: #f038ff; 
  }

  .three {
    color: #b9e769;
  }

  .btn:hover {
    color: white;
    border: 0;
  }

  .one:hover {
    background-color: #4cc9f0;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
    box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  }
  .two:hover {
    background-color: #f038ff;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  }

  .three:hover {
    background-color: #b9e769;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  }
}

// 边框效果
#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  button {
    border: 0;
    background: none;
    text-transform: uppercase;
    color: #4361ee;
    font-weight: bold;
    position: relative;
    outline: none;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  button::before, button::after {
    box-sizing: inherit;
    position: absolute;
    content: '';
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  button::after {
    bottom: 0;
    right: 0;
  }
  button::before {
    top: 0;
    left: 0;
  }

  button:hover::before, button:hover::after {
    width: 100%;
    height: 100%;
  }
  button:hover::before {
    border-top-color: #4361ee;
    border-right-color: #4361ee;
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }

  button:hover::after {
    border-bottom-color: #4361ee;
    border-left-color: #4361ee;
    transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
  }
}

// 原型效果
#circle-btn { 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  .btn-container {
    position: relative;  
  }
  button {
    border: 0;
    border-radius: 50px;
    color: white;
    background: #5f55af;
    padding: 15px 20px 16px 60px;
    text-transform: uppercase;
    background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition:all 2s ease;
  }
  svg {
    background: #f72585;
    padding: 8px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  button:hover {
    background-position: left bottom;
  }
}


// 圆角效果
#border-btn { 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  button {
    border: 0;
    border-radius: 10px;
    background: #2ec4b6;
    text-transform: uppercase;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 30px;
    outline: none;
    position: relative;
    transition: border-radius 3s;
    -webkit-transition: border-radius 3s;
  }

  button:hover {
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}

// 冰冻效果
#frozen-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  button {
    border: 0;
    margin: 20px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 50px;
    border-radius: 50px;
    color: white;
    outline: none;
    position: relative;
  }

  button:before{
    content: '';
    display: block;
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.4) 50%);
    background-size: 210% 100%;
    background-position: right bottom;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom:0;
    right:0;
    left: 0;
    border-radius: 50px;
    transition: all 1s;
    -webkit-transition: all 1s;
  }

  .green {
    background-image: linear-gradient(to right, #25aae1, #40e495);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }

  .purple {
    background-image: linear-gradient(to right, #6253e1, #852D91);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
  }
    
  .purple:hover:before {
    background-position: left bottom;
  }

  .green:hover:before {
    background-position: left bottom;
  }
}

// 闪亮效果
#shiny-shadow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  background: #1c2541;
  button {
    border: 2px solid white;
    background: transparent;
    text-transform: uppercase;
    color: white;
    padding: 15px 50px;
    outline: none;
    overflow: hidden;
    position: relative;
  }

  span {
    z-index: 20;  
  }

  button:after {
    content: '';
      display: block;
      position: absolute;
      top: -36px;
      left: -100px;
      background: white;
      width: 50px;
      height: 125px;
      opacity: 20%;
      transform: rotate(-45deg);
  }

  button:hover:after {
    left: 120%;
    transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
    -webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
  }
}

// 加载效果
#loading-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  button {
    background: transparent;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    padding: 15px 50px;
    position: relative;
  }

  button:before {
    transition: all 0.8s cubic-bezier(0.7, -0.5, 0.2, 2);
    content: '';
    width: 1%;
    height: 100%;
    background: #ff5964;
    position: absolute;
    top: 0;
    left: 0;
  }

  button span {
    mix-blend-mode: darken;
  }

  button:hover:before {
    background: #ff5964;
    width: 100%;
  }
}



</style>