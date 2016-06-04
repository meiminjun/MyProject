# Markdown 菜鸟教程



## 1. 标题设置（让字体变大，和word的标题意思一样）
在文字开头加上"#"，通过"#"数量表示几级标题。（一共只有1~6级标题，1级标题字体最大）

## 2. 块注释（blockquote）
通过在文字开头添加“>”表示块注释。（当>和文字之间添加五个blank时，块注释的文字会有变化。）

## 3. 斜体

将需要设置为斜体的文字两端使用1个“*”或者“_”夹起来

```
*斜体*

_single underscores_

```

生成：

    *斜体*

    _single underscores_

## 4. 粗体

```

    **double asterisks**
    
    __double underscores__
    
```

生成:

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

## 5. 无序列表

在文字开头添加(*, +, and -)实现无序列表。但是要注意在(*, +, and -)和文字之间需要添加空格。（建议：一个文档中只是用一种无序列表的表示方式）

```
* a
* b
* c 
```

生成如下：

* a
* b
* d 

## 6. 有序列表
使用数字后面跟上句号。（还要有空格）
``` bash
1. a
2. b
```

生成如下：

1. a
2. b


## 7. 链接（Links）
Markdown中有两种方式，实现链接，分别为内联方式和引用方式。
    1. 内联方式：This is an [example link](http://example.com/).
    2. 引用方式：
I get 10 times more traffic from [Google][1] than from [Yahoo][2] or [MSN][3].  

[1]: http://google.com/        "Google" 
[2]: http://search.yahoo.com/  "Yahoo Search" 
[3]: http://search.msn.com/    "MSN Search"
 

## 8. 图片（Images）
图片的处理方式和链接的处理方式，非常的类似。
    1. 内联方式：![alt text](https://pic4.zhimg.com/bd37ab4ccfa3ea7f3dc624e2e7c8303f_b.png "Title")
    2. 引用方式：![text][id]

[id]: https://pic4.zhimg.com/bd37ab4ccfa3ea7f3dc624e2e7c8303f_b.png "Title"

## 9. 代码（HTML中所谓的Code）
> ``` bash 
> function() {}
> ```

生成：

```
function() {}
```

## 10. 脚注（footnote）

实现方式如下：
更多参考：[^hello]


[^hello]: http://ourjs.com/detail/56ca983188feaf2d031d2477

## 11. 下划线
在空白行下方添加三条“-”横线。（前面讲过在文字下方添加“-”，实现的2级标题）


 