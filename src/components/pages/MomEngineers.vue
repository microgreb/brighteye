<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "MomEngineers",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline': {
                        'color': 'green',
                        'image': 'partn_desc_mom_1',
                        'header': 'Robust support services for integration partners',
                        'text': [
                            'Systems integrators play a vital role in the success of Momentum implementation projects. Therefore, Brighteye provides our integration partners robust support services to ensure that projects are completed effectively and efficiently.'
                        ],
                        'mobile': {
                            'img': 'partnership7'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'text',
                                'text': 'We monitor all projects carefully and analyze customer needs and potential gains. Then we use this analysis to guide our research and development agenda.',
                                'width': 'narrow'
                            },
                            'right' : {
                                'type': 'list',
                                'width': 'wide',
                                'list': [
                                    'We provide integration partners a solution architecture for each implementation project. This ensures that the momentum gain realized by the client is maximized over both the short term and the long term.',
                                    'We provide highly skilled solution consultants, including project managers, analysts, and software developers, to support and assist our integration partners and clients in The Bright Way of implementing our Momentum software platform.',
                                    'Our integration partners have full access to the Brighteye implementation methodology, including the DevOps software.',
                                    'Our third-line customer support desk is always available for integration partners to ensure that no gain in momentum is lost or delayed.'
                                ]
                            },
                            'height': 'high',
                            'mobile': {
                                'type': 'black_list',
                                'text': 'We monitor all projects carefully and analyze customer needs and potential gains. Then we use this analysis to guide our research and development agenda.',
                                'list': [
                                    'We provide integration partners a solution architecture for each implementation project. This ensures that the momentum gain realized by the client is maximized over both the short term and the long term.',
                                    'We provide highly skilled solution consultants, including project managers, analysts, and software developers, to support and assist our integration partners and clients in The Bright Way of implementing our Momentum software platform.',
                                    'Our integration partners have full access to the Brighteye implementation methodology, including the DevOps software.',
                                    'Our third-line customer support desk is always available for integration partners to ensure that no gain in momentum is lost or delayed.'
                                ]
                            }
                        }
                    ],
                    'parent_menu': 'partnership',
                    'mobile_image': 'momengineers.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>