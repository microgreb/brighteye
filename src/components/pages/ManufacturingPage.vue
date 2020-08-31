<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "ManufacturingPage",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'yellow',
                        'image' : 'sol_desc_manuf_1',
                        'header' : 'Gain momentum in execution',
                        'text' : [
                            'The Bright Way execution experience is designed for MOM improvement projects at any scale. This approach enables companies to gain momentum by optimizing the planning and execution of daily manufacturing operations, eliminating performance constraints, and unleashing new \n' +
                            'manufacturing capacity. It empowers management and front-line employees to continuously improve manufacturing efficiency, increase asset utilization, and improve product quality.'
                        ],
                        'mobile': {
                            'img': 'solutions4'
                        }
                    },
                    'lines': [
                        {
                            'right' : {
                                'type': 'image',
                                'image': 'sol_desc_manuf_2'
                            },
                            'left' : {
                                'type': 'header_text',
                                'header': 'Encompasses all manufacturing operations',
                                'text': [
                                    'The Bright Way execution experience encompasses all manufacturing operations, from the receipt of raw materials to the shipment of finished products. This enables manufacturing leaders to optimize individual operations, and more importantly, to maximize the productivity of the entire manufacturing value chain.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'yellow-light',
                                'img': 'solutions5',
                                'header': 'Encompasses all manufacturing operations',
                                'text': [
                                    'The Bright Way execution experience encompasses all manufacturing operations, from ' +
                                    'the receipt of raw materials to the shipment of finished products. This enables manufacturing ' +
                                    'leaders to optimize individual operations, and more importantly, to maximize the productivity of ' +
                                    'the entire manufacturing value chain.'
                                ]
                            }
                        },
                        {
                            'right' : {
                                'type': 'header_text',
                                'header': 'BrightBank learning center',
                                'text': [
                                    'Throughout this experience, customers have full access to the BrightBank learning center and training services, which ensures that everyone involved in a MOM improvement project – from senior leaders to shop floor employees – quickly gains value from their MOM improvement efforts.'
                                ]
                            },
                            'left' : {
                                'type': 'image',
                                'image': 'sol_desc_manuf_3'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': '',
                                'img': 'solutions6',
                                'header': 'BrightBank learning center',
                                'text': [
                                    'Throughout this experience, customers have full access to the BrightBank learning ' +
                                    'center and training services, which ensures that everyone involved in a MOM improvement ' +
                                    'project – from senior leaders to shop floor employees – quickly gains value from their ' +
                                    'MOM improvement efforts.'
                                ]
                            }
                        },
                        {
                            'right' : {
                                'type': 'image',
                                'image': 'sol_desc_manuf_4'
                            },
                            'left' : {
                                'type': 'header_text',
                                'header': 'Quickly and confidently address the challenges',
                                'text': [
                                    'The Bright Way execution experience enables senior leaders and front-line employees to quickly and confidently address the challenges that are a daily feature of complex manufacturing operations.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'yellow-light',
                                'img': 'solutions7',
                                'header': 'Quickly and confidently address the challenges',
                                'text': [
                                    'The Bright Way execution experience enables senior leaders and front-line employees ' +
                                    'to quickly and confidently address the challenges that are a daily feature of complex ' +
                                    'manufacturing operations.'
                                ]
                            }
                        },
                    ],
                    'parent_menu': 'solutions',
                    'mobile_image': 's2.svg',
                    'has_mobile': true
                },
            }
        }
    }
</script>
