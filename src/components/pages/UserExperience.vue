<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "ManufacturingTechnology",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'green',
                        'image' : 'mom_des_userexp_1',
                        'header' : 'Momentum provides a Universal user experience',
                        'text' : [
                            'Manufacturing software must be easy to learn and use, or it will not be widely adopted or used on a consistent basis. Momentum’s user interface is designed to be practical, simple, and easy to learn. Managers and front-line employees can quickly become proficient at using Momentum, regardless of their prior experience with business IT systems. The simple user interface, combined with the training and knowledge resources available through Brighteye’s training center (BrightBank), have enabled companies using Momentum to attain high levels of user adoption and proficiency.'
                        ],
                        'mobile': {
                            'img': 'momentum8'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'Easy access to detailed information',
                                'text': [
                                    'Momentum delivers pragmatic and valuable benefits for users at all levels of the organization. It provides shop floor employees easy access to detailed information regarding their work responsibilities and puts control of relevant production equipment and processes at their fingertips.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'mom_des_userexp_2'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'img': 'momentum9',
                                'header': 'Easy access to detailed information',
                                'text': [
                                    'Momentum delivers pragmatic and valuable benefits for users at all levels of the organization. It provides shop floor employees easy access to detailed information regarding their work responsibilities and puts control of relevant production equipment and processes at their fingertips.'
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'image',
                                'image': 'mom_des_userexp_3'
                            },
                            'right' : {
                                'type': 'header_text',
                                'header': 'Encompasses all manufacturing operations',
                                'text': [
                                    'The Bright Way Operations experience encompasses all manufacturing operations, from the receipt of raw materials to the shipment of finished products. This enables manufacturing leaders to optimize individual operations, and more importantly, to maximize the productivity of the entire manufacturing value chain.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'green-light',
                                'img': 'momentum10',
                                'header': 'Encompasses all manufacturing operations',
                                'text': [
                                    'The Bright Way Operations experience encompasses all manufacturing operations, from the receipt of raw materials to the shipment of finished products. This enables manufacturing leaders to optimize individual operations, and more importantly, to maximize the productivity of the entire manufacturing value chain.'
                                ]
                            }
                        }
                    ],
                    'parent_menu': 'momentum',
                    'mobile_image': 'momentum3.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>
