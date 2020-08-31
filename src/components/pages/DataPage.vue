<template>
    <div>
        <sub-page :data="data"/>
    </div>
    
</template>

<script>
    import SubPage from '../layouts/SubPage';

    export default {
        name: "DataPage",
        components: { SubPage},
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'blue',
                        'image' : 'solutions_desctop_1',
                        'header' : 'Gain momentum with better data',
                        'text' : [
                            'The Bright Way data-focused experience is designed to produce immediate business momentum for companies that are just beginning their manufacturing automation journey. This solution enables companies to automatically collect real-time data regarding the condition and performance of all production equipment via a single, easy-to-use application.'
                        ],
                        'mobile': {
                            'img': 'solutions1'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'text',
                                'text': 'Having reliable, real-time data for all production equipment provides several important benefits.',
                                'width': 'narrow'
                            },
                            'right' : {
                                'type': 'list',
                                'width': 'wide',
                                'list': [
                                    'It enables equipment operators to immediately know when a machine is not performing properly so that they can take prompt corrective action.',
                                    'It enables production managers and operations managers to gain immediate insights about the performance of individual machines and the production system as a whole.',
                                    'It enables senior company leaders to objectively evaluate the productivity and ROI of manufacturing equipment.'
                                ]
                            },
                            'mobile': {
                                'type': 'list',
                                'img': 'solutions2'
                            }
                        },
                        {
                            'left' : {
                                'type': 'image',
                                'image': 'solutions_desctop_2'
                            },
                            'right' : {
                                'type': 'header_text',
                                'header': 'Plug-and-play solution',
                                'text': [
                                    'The Bright Way data-focused experience is a plug-and-play solution. It can be implemented quickly, with no impact on your production operations, and it begins producing valuable insights – and ROI - immediately.',
                                    'In short, the Bright Way data experience is a low-cost, low-risk way to begin your journey toward optimized manufacturing operations.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'blue-light',
                                'img': 'solutions3',
                                'header': 'Plug-and-play solution',
                                'text': [
                                    'The Bright Way data-focused experience is a plug-and-play solution. It can be implemented quickly, with no impact on your production operations, and it begins producing valuable insights – and ROI - immediately.',
                                    'In short, the Bright Way data experience is a low-cost, low-risk way to begin your journey toward optimized manufacturing operations.'
                                ]
                            }
                        }
                    ],
                    'parent_menu': 'solutions',
                    'mobile_image': 's1.svg',
                    'has_mobile': true
                },
            }
        },
    }
</script>