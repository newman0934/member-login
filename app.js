//載入express
const express = require("express")
const app = express()
const port = 3000

//載入handlebars
const exphbs = require("express-handlebars")
app.engine("handlebars",exphbs({defaultLayout:"main"}))
app.set("view engine","handlebars")

//載入body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

//載入比對帳密的function
const memberLogin = require("./member-login.js")

//render index
app.get("/",(req,res)=>{
    res.render("index")
})

//render比對後的view
app.post("/",(req,res)=>{
    const inputValue = req.body
    const ComparisonSresult = memberLogin(inputValue)
    const error = "email or password fault, please try again"

    //如果比對出來的資料為undefined，在index上加上錯誤訊息，如果成功，導到成功畫面
    if(ComparisonSresult === undefined){
        res.render("index",{error:error})
    }else{
        res.render("success",{user:ComparisonSresult})
    }
})

//監聽並啟動伺服器
app.listen(port,()=>{
    console.log("express is listening")
})