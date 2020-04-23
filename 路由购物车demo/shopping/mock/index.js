const Mock=require("mockjs")

module.exports= Mock.mock({
    "list|10":[
        {
            "img":Mock.Random.image('200x100', '#f00', '#FFF', 'png', '!'),
            "title":"@ctitle",
            "content":Mock.Random.cparagraph(),
            "price|10-89":1,
            "id|+1":1
        }
    ]
})