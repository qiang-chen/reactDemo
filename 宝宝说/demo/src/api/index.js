//封装各类网络请求

//首页儿歌请求
export function getWatchSongList(){
    return fetch("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then(res=>res.json())
}

//首页动画片请求

export function getWatchanimationList(){
    return fetch("http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26").then(res=>res.json())
}

//首页故事渲染

export function getWatchStoryList(){
    return fetch("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27").then(res=>res.json())
}

//宝宝听页面儿歌请求

export function getListenSong(){
    return fetch("http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=5").then(res=>res.json())
}

//宝宝听页面故事请求

export function getListenStory(){
    return fetch("http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=6").then(res=>res.json())
}
