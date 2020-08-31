<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "BrightbankPage",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'green',
                        'image' : 'meth_desc_bright_1',
                        'header' : 'BrightBank ensures effective learning and fast proficiency',
                        'text' : [
                            'BrightBank is Brighteye’s solution for sharing information and knowledge to support the learning needs of customers. The BrightBank training center includes both an online repository of knowledge resources and self-paced training with personal instructor support.'
                        ],
                        'mobile': {
                            'img': 'methodology8'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'text',
                                'text': 'BrightBank provides a broad range of learning resources and training services, including:',
                                'width': 'normal'
                            },
                            'right' : {
                                'type': 'list',
                                'width': 'normal',
                                'list': [
                                    'Comprehensive documentation regarding Brighteye’s Momentum software',
                                    'In-depth, hands-on training relating to the implementation and use of the Momentum software',
                                    'Self-paced e-learning programs',
                                    'Thought leadership resources based on Brighteye’s proven expertise in the design and implementation of MOM improvement projects'
                                ]
                            },
                            'mobile': {
                                'type': 'black_list',
                                'text': 'BrightBank provides a broad range of learning resources and training services, including:',
                                'list': [
                                    'Comprehensive documentation regarding Brighteye’s Momentum software',
                                    'In-depth, hands-on training relating to the implementation and use of the Momentum software',
                                    'Self-paced e-learning programs',
                                    'Thought leadership resources based on Brighteye’s proven expertise in the design and implementation of MOM improvement projects'
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'BrightBank includes knowledge <br/>resources and training',
                                'text': [
                                    'Brighteye has long believed that the success of MOM improvement projects depends on both the capabilities of our software, and on continuously supporting the people who use it on a daily basis. Therefore, BrightBank includes knowledge resources and training that are designed for stakeholders at all levels of the customer organization – from shop floor employees to senior manufacturing leaders.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'meth_desc_bright_2'
                            },
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'green-light',
                                'img': 'methodology9',
                                'header': 'BrightBank includes knowledge resources and training',
                                'text': [
                                    'Brighteye has long believed that the success of MOM improvement projects depends on both the capabilities of our software, and on continuously supporting the people who use it on a daily basis. Therefore, BrightBank includes knowledge resources and training that are designed for stakeholders at all levels of the customer organization – from shop floor employees to senior manufacturing leaders.'
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'image',
                                'image': 'meth_desc_bright_3'
                            },
                            'right' : {
                                'type': 'header_text',
                                'header': 'BrightBank solution',
                                'text': [
                                    'The ultimate goal of the BrightBank training center is to ensure that everyone involved in a MOM project becomes proficient with the Momentum software as quickly as possible so that they will obtain the greatest possible value from their MOM investment.',
                                    'Please contact <a href="mailto:academy@brighteye.be">academy@brighteye.be</a> for more information.'
                                ]
                            },
                            'mobile': {
                                'type': 'header_text',
                                'img': 'methodology10',
                                'header': 'BrightBank solution',
                                'text': [
                                    'The ultimate goal of the BrightBank training center is to ensure that everyone involved in a MOM project becomes proficient with the Momentum software as quickly as possible so that they will obtain the greatest possible value from their MOM investment.',
                                    'Please contact <a href="mailto:academy@brighteye.be">academy@brighteye.be</a> for more information.'
                                ]
                            }
                        },
                    ],
                    'parent_menu': 'methodology',
                    'mobile_image': 'brightbank.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>
