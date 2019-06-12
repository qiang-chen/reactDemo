const Mock=require("mockjs");

module.exports=Mock.mock({
    "list|10":[
        {
            "title":"@ctitle",
            img:Mock.Random.image(),
            name:"@cname",
            "price|23-90":1
        }

    ]
})