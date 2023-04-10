# Webpack hash

hash一般结合CDN缓存使用，webpack构建后，文件名自动带上对应的MD5值，如果文件内容改变的话，文件名的hash值也会发生改变，从而触发CDN服务器拉取数据，进而更新本地缓存。

## hash

与整个项目的构建有关，只要项目里有文件修改，整个项目构建的hash值都会改变，并且全部文件都共用相同的hash值

如果一个文件被修改，其他文件也无法使用缓存

## chunkhash

chunkhash解决了hash的问题，只修改变化的文件的hash值

chunkhash 根据不同的入口文件进行依赖文件解析、构建对应的chunk、生成对应的hash

> chunkhash一般针对打包的chunk文件(js)使用

## contenthash

contenthash类似于chunkhash，一般在使用提取CSS的插件的时候，我们使用contenthash
