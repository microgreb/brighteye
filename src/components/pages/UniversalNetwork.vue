<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "UniversalNetwork",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline': {
                        'color': 'blue',
                        'image': 'partn_desc_universal_1',
                        'header': 'A global network of expert integration partners',
                        'text': [
                            'Most Brighteye MOM improvement projects involve a systems integrator who works directly with the client’s IT and operations teams to install, integrate, and deploy the Momentum software platform. Integration partners will also configure and, if necessary, customize the functionality of the Momentum software to meet the client’s specific requirements and needs.'
                        ],
                        'mobile': {
                            'img': 'partnership1'
                        }
                    },
                    'lines': [
                        {
                            'left': {
                                'type': 'header_text',
                                'header': '',
                                'text': [
                                    'Brighteye works with a broad network of capable and trusted integration partners who can provide certified Momentum project leaders, analysts, and software engineers. Our integration partners have extensive experience in a wide range of industry sectors, and expertise at managing and executing Momentum implementations for companies of all sizes.'
                                ]
                            },
                            'right': {
                                'type': 'image',
                                'image': 'partn_desc_universal_2'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'blue-light',
                                'img': 'partnership2',
                                'header': '',
                                'text': [
                                    'Brighteye works with a broad network of capable and trusted integration partners who can provide certified Momentum project leaders, analysts, and software engineers. Our integration partners have extensive experience in a wide range of industry sectors, and expertise at managing and executing Momentum implementations for companies of all sizes.'
                                ]
                            }
                        },
                        {
                            'left': {
                                'type': 'image',
                                'image': 'partn_desc_universal_3'
                            },
                            'right': {
                                'type': 'header_text',
                                'header': '',
                                'text': [
                                    'We have integration partners in multiple locations around the world, so no matter where you’re located, we have an integration partner who can help you gain business momentum.',
                                    'For more information about our network of integration partners, including addresses and contact information, please visit our <a href="/partners">Partner page</a>.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'img': 'partnership3',
                                'header': '',
                                'text': [
                                    'We have integration partners in multiple locations around the world, so no matter where you’re located, we have an integration partner who can help you gain business momentum.',
                                    'For more information about our network of integration partners, including addresses and contact information, please visit our <a href="/partners">Partner page</a>.'
                                ]
                            }
                        }
                    ],
                    'parent_menu': 'partnership',
                    'mobile_image': 'partner1.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>