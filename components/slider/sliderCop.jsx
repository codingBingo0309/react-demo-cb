import React, { Component } from 'react'

import {
    Container,
    Group,
    Button,
    Slider
} from 'amazeui-touch'

import {
    Router,
    Route,
    Link
} from 'react-router'

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