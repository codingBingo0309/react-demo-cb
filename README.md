# react-demo-cb

*      **                   **

****

## init

### 1.  安装node组件包

```sh
    npm install 
```
### 2.  启动应用

```sh
    npm start
```
### 3.  打开浏览器查看应用
[http://loaclhost:9066](http://loaclhost:9066)


******

##  react-amazeui-slider

### 1.引入amazeui组件以及react组件

```javascript
    
    import React, { Component } from 'react'

    import {
            Container,
            Group,
            Button,
            Slider
    } from 'amazeui-touch'
```
### 2.使用该组件完成幻灯片轮播 并开放向外的组件接口

```javascript
    const data = [
        {
            img:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl000012.jpg',
            thumb:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl000012.jpg',
        },
        {
            img:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl000011.jpg',
            thumb:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl000011.jpg',
        },
        {
            img:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00003.jpg',
            thumb:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00003.jpg',
        },
        {
            img:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00005.jpg',
            thumb:'http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00005.jpg',
        }
    ]
    
    
    const  sliderThumb = (
        <Slider
            directionNav = {false}
            >
            {data.map(function(item,i){
                return (
                    <Slider.Item
                        key={i}
                        thumbnail={item.thumb}
                        >
    
                        <img src={item.img} />
                    </Slider.Item>
                )
            })}
        </Slider>
    )
    
    export default class SliderCop extends Component {
    
        constructor(props) {
            super(props)
        }
    
        render() {
            return (
                <Container {...this.props}>
                    <Group>
                        {sliderThumb}
                    </Group>
                </Container>
            )
        }
    }
```
###  3.在主组件中加入slider副组件

```javascript
    import React, {Component} from 'react'
    
    import SliderCop from './components/slider/sliderCop.jsx'
    export default class App extends Component{
        render(){
            return (
                <div>
                    <SliderCop></SliderCop>
                </div>
            )
        }
    }
```
********

## get datas

### 获取数据的方式有很多种

很多框架都有他自己的http交互方式，比如angular的$http，jQuery的$.ajax等等，
然而这些都是内嵌在框架内的，但是react没有，这样我们就可以自己来实现自己需要的ajax方式，
然后react他需要管的只是显示而已。。。。

