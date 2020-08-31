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
                        'image' : 'mom_des_gainbus_1',
                        'header' : 'Gain and sustain business Momentum \n' +
                            'with the Momentum platform',
                        'text' : [
                            'Brighteye’s Momentum software is a modular, cloud-based solution that delivers comprehensive MOM functionality for all types of manufacturing environments – discrete, batch, and continuous process. Momentum’s twelve application modules provide range of MOM capabilities, including advanced planning and scheduling, quality control, tracking and tracing, batch process control, equipment control, label management, and warehouse management.'
                        ],
                        'mobile': {
                            'img': 'momentum1'
                        }
                    },
                    'customlines': [
                        {
                            'type': 'counters',
                            'counters': [ 19.4, 10.4, 22.0, 12.5],
                            'bold': 'The Momentum platform enables companies to drive substantial improvements in manufacturing operations. Numerous industry studies have demonstrated the business value of MOM software systems.',
                            'regular': 'For example, research by MESA International and LNS Research found that users of comprehensive MOM software improved their net profit margin by 19.4%. The average profit improvement for all companies was 10.4%. This research also found that users of MES software improved on-time complete shipments by 22.0%, compared to the overall average improvement of 12.5%.'
                        },
                        {
                            'type': 'list',
                            'header': 'Companies using our Momentum software have received several valuable benefits, including lower costs and:',
                            'list' : [
                                'Increased visibility regarding the performance of their manufacturing operations',
                                'Reduced manufacturing lead times and cycle times',
                                'Increased compliance with standard processes and best practices',
                                'Improved employee decision making',
                                'Improved cross-functional collaboration based on common data (“a single source of truth”)',
                                'Improved product quality – fewer errors',
                                'Increased asset utilization – less unplanned downtime',
                                'Improved production scheduling – fewer bottlenecks',
                                'Improved management and control of materials and supplies'
                            ],
                            'contact' : {
                                'text' : 'Get in touch with a MOM Solution Architect',
                                'link' : '/#contacts'
                            }
                        },
                    ],
                    'lines': [
                        {
                            'mobile':{
                                'type': 'header_text',
                                'img': 'momentum2',
                                'no_padding_image': true,
                                'no_padding_block': true,
                                'header': 'The Momentum platform enables companies to drive substantial improvements in manufacturing operations. Numerous industry studies have demonstrated the business value of MOM software systems.',
                                'text': [
                                    'For example, research by MESA International and LNS Research found that users of comprehensive MOM software improved their net profit margin by 19.4%. The average profit improvement for all companies was 10.4%. This research also found that users of MES software improved on-time complete shipments by 22.0%, compared to the overall average improvement of 12.5%.',
                                ]
                            }
                        },
                        {
                            'mobile': {
                                'type': 'counters',
                                'counters': [ 19.4, 10.4, 22.0, 12.5],
                            }
                        },
                        {
                            'left' : {
                                'text': 'Having reliable, real-time data for all production equipment provides several important benefits.'
                            },
                            'right' : {
                                'list': [
                                    'Increased visibility regarding the performance of their manufacturing operations',
                                    'Reduced manufacturing lead times and cycle times',
                                    'Increased compliance with standard processes and best practices',
                                    'Improved employee decision making',
                                    'Improved cross-functional collaboration based on common data (“a single source of truth”)',
                                    'Improved product quality – fewer errors',
                                    'Increased asset utilization – less unplanned downtime',
                                    'Improved production scheduling – fewer bottlenecks',
                                    'Improved management and control of materials and supplies'
                                ]
                            },
                            'mobile': {
                                'type': 'list',
                                'text' : 'Get in touch with <br>a MOM Solution Architect',
                                'link' : '/#contacts'
                            },
                        }
                    ],
                    'parent_menu': 'momentum',
                    'mobile_image': 'momentum1.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>
