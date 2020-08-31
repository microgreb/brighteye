<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "DevopsPage",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'yellow',
                        'image' : 'meth_desc_devops_1',
                        'header' : 'DevOps software delivers agility and transparency',
                        'text' : [
                            'Brighteye’s methodology for managing and executing MOM improvement projects is grounded in tested and proven agile software development principles and methods. The key technology used to support Brighteye’s MOM improvement methodology is the Microsoft Azure DevOps suite of cloud software development tools. Our purpose built Azure DevOps automates many of the tasks relating to software development, such as code building and testing, and it supports the use of agile software development practices.'
                        ],
                        'mobile': {
                            'img': 'methodology4'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'Azure DevOps',
                                'text': [
                                    'Azure DevOps is also a robust project management tool. It provides a shared workspace for everyone involved in the implementation of Brighteye’s Momentum software. With Azure DevOps, our customer’s operations team, the integration partner, and Brighteye’s MOM consultants can work collaboratively to define and document customer requirements, project objectives, and project work activities.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'meth_desc_devops_2'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'yellow-light',
                                'img': 'methodology5',
                                'header': 'Azure DevOps',
                                'no_padding_block': true,
                                'no_padding_description': true,
                                'text': [
                                    'Azure DevOps is also a robust project management tool. It provides a shared workspace for everyone involved in the implementation of Brighteye’s Momentum software. With Azure DevOps, our customer’s operations team, the integration partner, and Brighteye’s MOM consultants can work collaboratively to define and document customer requirements, project objectives, and project work activities.'
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'image',
                                'image': 'meth_desc_devops_3'
                            },
                            'right' : {
                                'type': 'header_text',
                                'header': '',
                                'text': [
                                    'Azure DevOps also enables the participants in an implementation project to establish project milestones and track the progress of work against those milestones. Therefore, everyone involved in an implementation project can clearly see where the project stands at any time.',
                                    'Azure DevOps supports continuous integration, continuous software delivery, and continuous software deployment, which accelerate the installation, integration, and rollout of the Momentum software platform.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'yellow-light',
                                'img': 'methodology6',
                                'header': '',
                                'text': [
                                    'Azure DevOps also enables the participants in an implementation project to establish project milestones and track the progress of work against those milestones. Therefore, everyone involved in an implementation project can clearly see where the project stands at any time.',
                                    'Azure DevOps supports continuous integration, continuous software delivery, and continuous software deployment, which accelerate the installation, integration, and rollout of the Momentum software platform.'
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'Conclusion ',
                                'text': [
                                    'Azure DevOps decreases the time required to implement our Momentum software and improves the time-to-value for our customers.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'meth_desc_devops_4'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'img': 'methodology7',
                                'header': 'Conclusion ',
                                'text': [
                                    'Azure DevOps decreases the time required to implement our Momentum software and improves the time-to-value for our customers.'
                                ]
                            }
                        },
                    ],
                    'parent_menu': 'methodology',
                    'mobile_image': 'devops.svg',
                    'has_mobile': true

                }
            }
        }
    }
</script>
