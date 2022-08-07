## gum-choose
gum-choose是为了解决gum choose变量时,错误的表现,例如
```
gum choose "a" "b"
> a
> b

# 如果使用变量
options="\"a\" \"b\""
gum choose $options
> "a" "b"
# 将会产生上面的结果
```
所以针对这个问题gum-choose会在调用gum之前进行参数的处理

## 安装
```
npm i -g gum-choose
```

## 使用
- 命令: gumChoose
```
options="\"a\" \"b\""
gumChoose $options
> a
> b
```
