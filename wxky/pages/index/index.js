//logs.js
const util = require('../../utils/util.js')
let that
Page({
  data: {
    logs: [],
    search:"",
    banner:
    [
      {
        id:0,
        img:"/resources/image/banner1.jpg"
      },
      {
        id:1,
        img:"/resources/image/banner2.jpg"
      },
      {
        id:2,
        img:"/resources/image/banner2.jpg"
      },
      {
        id:3,
        img:"/resources/image/banner2.jpg"
      },{
        id:4,
        img:"/resources/image/banner2.jpg"
      }
    ],
    curr:0,
    height:0
  },
  onLoad: function () {
    that = this
    that.currentHeight()
  },
  current(e){
    that.setData({
      curr:e.detail.current
    })
  },
  selection(){
    wx.navigateTo({
      url:`/pages/citySelection/citySelection?city=贵阳`
    })
  },
  currentHeight(){
    that.data.height = 40 + ((that.data.banner.length-1)*12) + (that.data.banner.length*10)
    that.setData({
      height:that.data.height
    })
  }
})
