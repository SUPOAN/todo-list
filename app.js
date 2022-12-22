const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose
const app = express()




//密碼露餡版本
// mongoose.connect('mongodb+srv://bigbear1207:bigbear000@cluster0.p2zmd38.mongodb.net/todo-list?retryWrites=true&w=majority')

// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


// 設定連線到 mongoDB，記得這欄的順序一定要放在require('dotenv').config()下面才能生效！！！！卡超久
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })


// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})


app.get('/', (req, res) => {
  res.send('hello supoan!')
})

app.listen(3000, () => {
  console.log('App is running on port 3000.')
})