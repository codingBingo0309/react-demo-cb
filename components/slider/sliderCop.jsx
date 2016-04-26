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

import {data} from '../../data.js'


const  sliderThumb = (
    <Slider
        directionNav = {false}
        >
        {data.map((item,i)=>{
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