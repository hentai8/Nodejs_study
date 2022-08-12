const paramsCache = []
for(i = 1;i<5; i++){
    const params = {
        "result": i,
        "error": null,
        "id": "curltest"
    }
    paramsCache.push(params)
}

console.log(paramsCache.length)
for(i = 1;i<5; i++){
    console.log(paramsCache.pop().result)
}
console.log(paramsCache)