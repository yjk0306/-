# 开发日记
记录一些平常学习的知识点

### 1. node线上版本号固定   
开发环境中，所有依赖模块都能正常工作时，便在部署到服务器之前将依赖包的版本锁住，运行 <br>
`npm shrinkwrap`  <br>

我们会得到一个npm-shrinkwrap.json的文件，这个文件保存了所有当前使用的依赖模块的版本。将这个文件连同项目源码一同部署到服务器上，然后运行`npm install`这时候，npm会首先检查有没有npm-shrinkwrap.json文件，有的话会根据该文件中依赖包的版本以及resolve字段下载依赖包，这样就能够保证线上环境与开发环境一致。

