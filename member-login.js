//載入會員的json檔
const userList = require("./user.json")

function memberLogin(data) {
    //比對輸入的帳密與json的帳密，若比對成功，回傳該會員物件
    const result = userList.users.find(user => {
        return user.email === data.email && user.password === data.password
    })

    return result
}

module.exports = memberLogin