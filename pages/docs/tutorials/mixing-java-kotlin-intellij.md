---
type: tutorial
layout: tutorial
title: "在一个项目中混用Java和Kotlin"
description: "本教程将介绍在单个IntelliJ IDEA项目中使用Java和Kotlin的过程."
authors: 陈木鑫
showAuthorInfo: true
date: 2017-06-01
related:
    - getting-started.md
---

我们将使用 IntelliJ IDEA 作为演示（不限于旗舰版和社区版）。如果你使用的是构建工具，请在[使用构建工具](build-tools.html)课程下查看相应的方法。想要了解怎么在 IntelliJ IDEA 中启动一个kotlin项目，请查看教程[以 IntelliJ IDEA 入门](getting-started.html)。

### 添加Java源码到已存在的Kotlin项目中
要向Kotlin项目添加新的Java类是非常简单的。我们需要做的就是在正确的目录或包中创建一个新的Java文件（Ctrl+N/Cmd+N）

![New Java Class]({{ url_for('tutorial_img', filename='mixing-java-kotlin-intellij/new-java-class.png') }})


我们现在可以直接在Kotlin中调用Java类，反之亦然。例如，添加以下Java类：

``` java
public class Customer {

    private String name;

    public Customer(String s){
        name = s;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

在Kotlin中调用刚刚创建的Customer：

``` kotlin
        val customer = Customer("Phase")

        println(customer.getName())
```


### 添加Kotlin源码到已存在的Java项目
将Kotlin文件添加到现有的Java项目中是非常相似的过程。唯一的区别在于我们需要采取稍微不同的方式：

#### 创建一个新的Kotlin文件
在确定的项目文件夹下创建一个新的Kotlin文件：
![New Kotlin File]({{ url_for('tutorial_img', filename='mixing-java-kotlin-intellij/new-kotlin-file.png') }})

如果我们第一次添加Kotlin文件，IntelliJ IDEA 会提示我们添加所需的Kotlin运行时

![Add Kotlin Runtime]({{ url_for('tutorial_img', filename='mixing-java-kotlin-intellij/add-kotlin-runtime.png') }})

由于我们使用的是Java项目，所以在此应该将其配置为一个Kotlin（Java）模块。 下一步是决定要配置哪些模块（如果我们的项目有多个模块）以及是否要将运行时库添加到项目或使用当前Kotlin插件提供的库。
![Bundling Kotlin Runtime]({{ url_for('tutorial_img', filename='mixing-java-kotlin-intellij/bundling-kotlin-option.png') }})

#### 添加一个已存在的Kotlin文件
如果我们要将一个现有的Kotlin文件添加到项目中，而不是创建新文件，那么 IntelliJ IDEA 不会提示我们配置Kotlin的运行时。我们必须手动通过*Tools\|Kotlin*菜单选项配置它。

![Kotlin Menu]({{ url_for('tutorial_img', filename='mixing-java-kotlin-intellij/kotlin-menu.png') }})


随后会打开一个跟 [创建一个新的Kotlin文件](#creating-a-new-kotlin-file)一样的配置对话框。

#### 使用J2K将现有Java文件转换为Kotlin
Kotlin插件捆绑了一个Java转Kotlin的编译器，在IntelliJ IDEA的*Code*菜单下可以找到它。
![Convert Java to Kotlin Menu]({{ url_for('tutorial_img', filename='mixing-java-kotlin-intellij/convert-java-to-kotlin.png') }})

我们可以使用此选项将一个现有的Java文件自动转换为Kotlin。 虽然转换器将大多数样板代码从Java转换为Kotlin都可以完成的很出色，但有时进行一些手动调整还是很有必要的。
