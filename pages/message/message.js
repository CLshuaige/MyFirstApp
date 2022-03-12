// pages/message/message.js
Page({
  /**
   * 页面初始数据
   */
  data:{
    message:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      message:options.message,
    })
  },
})
