<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "ContinuousPage",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'blue',
                        'image' : 'meth_desc_cont_1',
                        'header' : 'Continuous collaboration produces faster implementation',
                        'text' : [
                            'Brighteye’s MOM improvement methodology is based on transparent and continuous software configuration enabled by continuous, real-time communication and continuous, real-time feedback among Brighteye’s software team, integration partners, and customer operations teams.'
                        ],
                        'mobile': {
                            'img': 'methodology1'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'Continuous development and feedback',
                                'text': [
                                    'Brighteye’s approach to continuous development and feedback eliminates many of the factors that often slow the progress of software implementations. And faster implementation means faster realization of value.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'meth_desc_cont_2'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'blue-light',
                                'img': 'methodology2',
                                'header': 'Continuous development and feedback',
                                'text': [
                                    'Brighteye’s approach to continuous development and feedback eliminates many of the factors that often slow the progress of software implementations. And faster implementation means faster realization of value.'
                                ]
                            }
                        },
                        {
                            'full' : {
                                'type': 'schema',
                                'text': 'As the above diagram illustrates, the key elements of the continuous <br/> development-feedback loop include:',
                                'image': 30
                            }
                        },
                        {
                            'left' : {
                                'type': 'image',
                                'image': 'meth_desc_cont_3'
                            },
                            'right' : {
                                'type': 'header_text',
                                'header': 'Maximum effect',
                                'text': [
                                    'When combined with the capabilities of the Azure DevOps software, the collaborative approach embodied in the continuous development and feedback process ensures that implementation projects are completed as quickly and efficiently as possible.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'img': 'methodology3',
                                'header': 'Maximum effect',
                                'text': [
                                    'When combined with the capabilities of the Azure DevOps software, the collaborative approach embodied in the continuous development and feedback process ensures that implementation projects are completed as quickly and efficiently as possible.'
                                ]
                            }
                        }
                    ],
                    'parent_menu': 'methodology',
                    'mobile_image': 'continue.svg',
                    'has_mobile': true

                }
            }
        }
    }
</script>