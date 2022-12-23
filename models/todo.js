//測試測試

//載入mongoose，才能使用相關方法
const mongoose = require("mongoose")
//Mongoose 提供了一個 mongoose.Schema 模組
//這裡 Schema 大寫表示你可以用 new Schema() 的方式來建構一個新的 Schema。(關於物件建構子，會在學期 3 後端的選修教材中提供物件導向的相關介紹，如果對建構子不清楚，建議這裡先照著做就好，以後有餘力再去瞭解 JavaScript 裡的 constructor 是什麼。)
const Schema = mongoose.Schema

//這裡最重要的步驟是把我們想要的資料結構當成參數傳給 new Schema()
// 1. 每筆 todo 資料都有一個叫做 name 的屬性
// 2. 我們規定 name 屬性: type: String - 必須是字串型別. required: true - 是必填欄位，不能為空白
const todoSchema = new Schema({
  name: {
    type: String, //資料型別是字串
    required: true //這是個必填欄位
  },
  done: {
    type: Boolean
  }
})


//透過 module.exports 輸出。
module.exports = mongoose.model("Todo", todoSchema)

