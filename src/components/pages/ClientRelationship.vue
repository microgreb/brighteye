<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "ClientRelationship",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'yellow',
                        'image' : 'partn_desc_client_1',
                        'header' : 'Brighteye partners with clients to drive maximum momentum',
                        'text' : [
                            'Brighteye partners with clients to help them optimize their manufacturing operations and gain maximum business momentum. We serve clients engaged in discrete, batch, and process manufacturing across a wide range of industry sectors, and we routinely work with clients of all sizes.'
                        ],
                        'mobile': {
                            'img': 'partnership4'
                        }
                    },
                    'lines': [
                        {
                            'left': {
                                'type': 'header_text',
                                'header': '',
                                'text': [
                                    'The Brighteye client relationship model is designed to be flexible and adaptable. Our client partnerships are structured based on the client’s goals and ambitions for a MOM improvement project. We work with clients whose primary ambition is to gain business momentum through better manufacturing data capture, those whose primary goal is to increase momentum through improved tactical execution, and those who want to drive better strategic decisions and actions.'
                                ]
                            },
                            'right': {
                                'type': 'image',
                                'image': 'partn_desc_client_2'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'yellow-light',
                                'img': 'partnership5',
                                'header': '',
                                'text': [
                                    'The Brighteye client relationship model is designed to be flexible and adaptable. Our client partnerships are structured based on the client’s goals and ambitions for a MOM improvement project. We work with clients whose primary ambition is to gain business momentum through better manufacturing data capture, those whose primary goal is to increase momentum through improved tactical execution, and those who want to drive better strategic decisions and actions.'
                                ]
                            }
                        },
                        {
                            'left': {
                                'type': 'image',
                                'image': 'partn_desc_client_3'
                            },
                            'right': {
                                'type': 'header_text',
                                'header': '',
                                'text': [
                                    'Our client partnerships also span all levels of involvement in a MOM improvement project. Brighteye’s participation in a project can range from simply supporting the client’s project steering committee to full co-creation and co-management of the entire project.',
                                    'Our list of representative clients reveals the broad range of client partnerships we’ve successfully developed.'
                                ],
                                'style': 'bold'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'img': 'partnership6',
                                'header': '',
                                'text': [
                                    'Our client partnerships also span all levels of involvement in a MOM improvement project. Brighteye’s participation in a project can range from simply supporting the client’s project steering committee to full co-creation and co-management of the entire project.',
                                    'Our list of representative clients reveals the broad range of client partnerships we’ve successfully developed.'
                                ],
                            }
                        }
                    ],
                    'parent_menu': 'partnership',
                    'mobile_image': 'brighteyepartners.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>
