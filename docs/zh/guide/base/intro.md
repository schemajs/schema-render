# 介绍

Schema 驱动的 UI 渲染器, 支持可视化页面构建.

## 使用场景

- 可视化页面编辑, 如运营活动页
- 后台工程师写 schema, 快速生成界面
- 算法生成 schema, 千人前面

## 它是如何工作的？

- 基于 Schema 渲染 UI
- 将每个组件的状态挂载到 mobx store, 可供前端开发时读取/修改
- 基于 event bus 暴露组件的时间, 前端开发可监听处理 

## Features

- 支持主流小程序(微信/百度/字节跳动/支付宝), 以及h5. 未来考虑支持 react native.
- 支持后台可视化构建表单
- 开发者:支持使用方式
  - 代码
  - 配置
- 开发者:支持零代码嵌入.
  - pc: iframe
  - 小程序: 插件/库
  - h5: url/iframe

## 为什么不是...?

### UForm

### Formily

### react-jsonschema-form

### final-form

### 其他