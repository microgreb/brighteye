<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "StrategicPage",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'green',
                        'image' : 'sol_desc_strat_1',
                        'header' : 'Gain strategic momentum for \n' +
                            'long-term success',
                        'text' : [
                            'Jack Welch, the former chairman and CEO of General Electric, once said, “You’ve got to eat while you dream. You’ve got to deliver on short-range commitments, while you develop a long-range strategy and vision and execute it.”',
                            'Leaders of manufacturing businesses face the exact challenge Jack Welch described, and the Bright Way strategic experience is specifically designed to create momentum for customers whose ambition is to optimize current manufacturing operations and prepare their business for the future.'
                        ],
                        'mobile': {
                            'img': 'solutions8'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'The Bright Way strategic experience',
                                'text': [
                                    'The strategic Bright Way incorporation enables business leaders to analyze and predict the potential consequences of strategic options and make better strategic decisions. Company leaders are able to use detailed data from current manufacturing operations to inform and support decisions about the future direction of their manufacturing strategy.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'sol_desc_strat_2'
                            },
                            'mobile':{
                                'type': 'header_text',
                                'bg_color_class': 'green-light',
                                'img': 'solutions9',
                                'header': 'The Bright Way strategic experience',
                                'text': [
                                    'The strategic Bright Way incorporation enables business leaders to analyze and predict the potential consequences of strategic options and make better strategic decisions. Company leaders are able to use detailed data from current manufacturing operations to inform and support decisions about the future direction of their manufacturing strategy.',
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'text',
                                'text': 'The Bright Way strategic experience is the most expansive version of the Bright Way approach to MOM improvement projects. It leverages the full capabilities of:',
                                'width': 'wide'
                            },
                            'right' : {
                                'type': 'list',
                                'width': 'narrow',
                                'list': [
                                    'Momentum Enterprise software platform',
                                    'Brighteye’s collaborative Methodology',
                                    'BrightBank training center',
                                    'Deep and productive Partnership among the customer',
                                    'Integration partner or partners',
                                    'Brighteye’s internal MOM experts',
                                ]
                            },
                            'mobile': {
                                'type': 'black_list',
                                'text': 'The Bright Way strategic experience is the most expansive version of the Bright Way approach to MOM improvement projects. It leverages the full capabilities of:',
                                'list': [
                                    'Momentum Enterprise software platform',
                                    'Brighteye’s collaborative Methodology',
                                    'BrightBank training center',
                                    'Deep and productive Partnership among the customer',
                                    'Integration partner or partners',
                                    'Brighteye’s internal MOM experts',
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'image',
                                'image': 'sol_desc_strat_3'
                            },
                            'right' : {
                                'type': 'header_text',
                                'header': 'Global enterprises',
                                'text': [
                                    'While any customer can benefit from the Bright Way strategic experience, it is particularly valuable for large global enterprises with multiple manufacturing facilities, and companies that are competing with world-class manufacturing businesses. In these situations, creative strategic thinking and sound strategic decision making are essential, and the Bright Way strategic experience will enable company leaders to perform both of these critical tasks.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'green-light',
                                'img': 'solutions10',
                                'header': 'Global enterprises',
                                'text': [
                                    'While any customer can benefit from the Bright Way strategic experience, it is particularly valuable for large global enterprises with multiple manufacturing facilities, and companies that are competing with world-class manufacturing businesses. In these situations, creative strategic thinking and sound strategic decision making are essential, and the Bright Way strategic experience will enable company leaders to perform both of these critical tasks.'
                                ]
                            }
                        }
                    ],
                    'parent_menu': 'solutions',
                    'mobile_image': 's3.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>