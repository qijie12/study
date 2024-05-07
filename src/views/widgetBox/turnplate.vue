<template>
  <div id="share-turnplate-box">
    <div class="top">
        <span class="iconfont icon-arrow-left"></span>
        <b>BonusWheel</b>
        <div><span>Spin Record</span></div>
    </div>
    <div class="con">
        <div class="turnplateMoney">
            <div class="prize-list" style="transform: rotate(-15deg); background: conic-gradient(rgb(25, 0, 176) 0deg, rgb(25, 0, 176) 30deg, rgb(0, 56, 255) 30deg, rgb(0, 56, 255) 60deg, rgb(25, 0, 176) 60deg, rgb(25, 0, 176) 90deg, rgb(0, 56, 255) 90deg, rgb(0, 56, 255) 120deg, rgb(25, 0, 176) 120deg, rgb(25, 0, 176) 150deg, rgb(0, 56, 255) 150deg, rgb(0, 56, 255) 180deg, rgb(25, 0, 176) 180deg, rgb(25, 0, 176) 210deg, rgb(0, 56, 255) 210deg, rgb(0, 56, 255) 240deg, rgb(25, 0, 176) 240deg, rgb(25, 0, 176) 270deg, rgb(0, 56, 255) 270deg, rgb(0, 56, 255) 300deg, rgb(25, 0, 176) 300deg, rgb(25, 0, 176) 330deg, rgb(0, 56, 255) 330deg, rgb(0, 56, 255) 360deg); color: rgb(224, 219, 219);"><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(15deg); transform-origin: 50% 100%;"><p>58</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(45deg); transform-origin: 50% 100%;"><p>88</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(75deg); transform-origin: 50% 100%;"><p>188</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(105deg); transform-origin: 50% 100%;"><p>288</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(135deg); transform-origin: 50% 100%;"><p>488</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(165deg); transform-origin: 50% 100%;"><p>588</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(195deg); transform-origin: 50% 100%;"><p>688</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(225deg); transform-origin: 50% 100%;"><p>788</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(255deg); transform-origin: 50% 100%;"><p>888</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(285deg); transform-origin: 50% 100%;"><p>988</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(315deg); transform-origin: 50% 100%;"><p>IPHONE 15 PRO MAX</p></div><div class="prize-item" style="width: 3.50811rem; height: 6.7rem; transform: rotate(345deg); transform-origin: 50% 100%;"><p>YAMAHA R15</p></div></div>
        </div>
        <div class="but">
            <img src="../../assets/img/spin_btn.png"/>
            <span>SPIN</span>
            <img class="pointer" src="../../assets/img/pointer_filed.png"/>
        </div>

        <div class="winJackpot">
            <div class="outer_space">
                <img class="spaceman" src="../../assets/img/wheelIframe.png"/>
                <img class="iconBig" src="../../assets/img/icon.png" />
                <img class="iconSmall" src="../../assets/img/icon.png" />
                <img class="phone" src="../../assets/img/space_phone.png" />
            </div> 

            <div class="wheel">
                <div class="win">
                    <img src="../../assets/img/iframe-bg.png"/>
                </div>
            </div>
        </div>

        
    </div>
    

  </div>
</template>

<script setup>

</script>

<style lang="scss">
#share-turnplate-box {
  font-family: PingFang SC-Bold, PingFang SC;
  width: 100%;
  height: 100vh;
  background-image:url('../../assets/img/florid.png');
  background-size:cover;
  
  .top{
    z-index:10;
    height:46px;
    width: 100%;
    background-color: #ffffff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 16px;
    position:relative;
    position:fixed;
    >div{
        width:70px;
        height:100%;
        text-align:end;
        font-size:13px;
        color:#dfbfaa;
        display:flex;
        align-items:center;
    }
    >.icon-arrow-left{
        font-weight:700;
    }
    >b{
        position:absolute;
        left:50%;
        transform:translateX(-50%)
    }
  }
  .con{
    width:100%;
    height:calc(100vh - 46px);
    .turnplateMoney{
    z-index:2;
    width:100%;
    height:384px;
    position:relative;
    background-image:url('../../assets/img/turnplate-bg.png');
    background-repeat:no-repeat;
    background-size:cover;
    top:-60px;
    margin:0 auto;
     .prize-list{
        position:relative;
        width:290px;
        height:290px;
        border-radius:50%;
        border:none;
        overflow:hidden;
        margin:0 auto;
        top:45px;
        left:4px;
        .prize-item{
            position:absolute;
            left:0;
            right:0;
            top:38px;
            margin:0 auto;
            padding-top:14px;
            >p{
                font-size:20px;
                font-weight:600;
                white-space:nowrap;
                text-align:center;
                width:100%;
                line-height:400px;

            }
        }
     }
    }
    .but{
        width:75px;
        height:75px;
        margin:auto;
        position:relative;
        top:-292px;
        z-index:8;
        left:4px;
        >img{
            height:100%;
            width:100%;
        }
        >span{
            color:#ffffff;
            font-size:18px;
            font-weight:600;
            z-index:9;
            position:absolute;
            top:25px;
            left:14px;
        }
        .pointer{
            width:124px;
            height:85px;
            z-index:8;
            position:absolute;
            left:72px;
        }
    }
    .winJackpot{
        width:100%;
        padding:0 12px; 
        position:relative;
        .outer_space{
            position:relative;
            z-index:5;
            top:-220px;
            .spaceman{
                width:100%;
                height:195px;
            }
            .iconBig{
                width:48px;
                height:45px;
                z-index:3;
                position:absolute;
                top:24px;
                left:-2px;
                transform:rotate(65deg);
            }
            .iconSmall{
                width:25px;
                height:24px;
                z-index:3;
                position:absolute;
                top:58px;
                left:20px;
            }
            .phone{
                width:41px;
                height:54px;
                z-index:3;
                position:absolute;
                top:45px;
                right:0px;
            }
        }
        .wheel{
        position:relative;
        top:-300px;    
        width:100%;
        height:1100px;
        border: 1px solid #603cf2;
        background: rgba(0, 6, 37, .85);
        border-radius:15px;
        .win{    
            width:280px;
            height:65px;
            // background-image:url('../../assets/img/iframe-bg.png');
            // background-size:cover;
            >img{
                width:100%;
                height:100%;
            }
        }
     }
    }
    
  }
  
}
</style>