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
                        'color' : 'blue',
                        'image' : 'mom_des_manufact_1',
                        'header' : 'Momentum leverages Advanced \n' +
                            'manufacturing technology',
                        'text' : [
                            'Momentum is a true enterprise-class MOM solution. It uses advanced software engineering tools and techniques, and robust cloud ready technologies to ensure the high level of stability, reliability and performance that enterprises require to support mission-critical manufacturing operations.'
                        ],
                        'mobile': {
                            'img': 'momentum3'
                        }
                    },
                    'lines': [
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'From small companies <br/> to large global enterprises',
                                'text': [
                                    'Momentum is highly scalable and flexible, which means it can meet the MOM needs of organizations of all sizes – from small companies to large global enterprises. This exceptional scalability enables companies to easily access additional computing resources as their needs change or grow.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'mom_des_manufact_2'
                            },
                            'wider' : 'left',
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'yellow-light',
                                'img': 'momentum4',
                                'header': 'From small companies to large global enterprises',
                                'text': [
                                    'Momentum is highly scalable and flexible, which means it can meet the MOM needs of organizations of all sizes – from small companies to large global enterprises. This exceptional scalability enables companies to easily access additional computing resources as their needs change or grow.'
                                ]
                            }
                        },
                        {
                            'full' : {
                                'type': 'icons',
                                'header': 'Modular architecture',
                                'text': 'The modular architecture of Momentum also provides flexibility by enabling companies to acquire and implement specific functional capabilities based on their unique business needs and priorities.',
                                'icon': 32
                            },
                            'mobile': {
                                'type': 'icons',
                                'header': 'Modular architecture',
                                'text': 'The modular architecture of Momentum also provides flexibility by enabling companies to acquire and implement specific functional capabilities based on their unique business needs and priorities.',
                                'img': 'momentum7'
                            }
                        },
                        {
                            'left' : {
                                'type': 'header_text',
                                'header': 'Microsoft.NET and Microsoft Azure',
                                'text': [
                                    'The Momentum platform has been fully developed using the Microsoft.NET software development framework, which means that Momentum is easy to customize.',
                                    'Momentum Data is delivered via the Microsoft Azure cloud hosting platform. Azure provides a reliable and secure hosing environment, and its global footprint ensures that Momentum Data is available anywhere around the world.'
                                ]
                            },
                            'right' : {
                                'type': 'image',
                                'image': 'mom_des_manufact_3'
                            },
                            'wider' : 'left',
                            'mobile': {
                                'type': 'header_text',
                                'bg_color_class': 'yellow-light',
                                'img': 'momentum5',
                                'header': 'Microsoft.NET and Microsoft Azure',
                                'text': [
                                    'The Momentum platform has been fully developed using the Microsoft.NET software development framework, which means that Momentum is easy to customize.',
                                    'Momentum Data is delivered via the Microsoft Azure cloud hosting platform. Azure provides a reliable and secure hosing environment, and its global footprint ensures that Momentum Data is available anywhere around the world.'
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'image',
                                'image': 'mom_des_manufact_4'
                            },
                            'right' : {
                                'type': 'header_text',
                                'header': 'Multilingual solution',
                                'text': [
                                    'Momentum is a fully multilingual solution. All components of Momentum’s user interface can be displayed in a variety of written languages. This enhances productivity for companies with global manufacturing operations by enabling individuals around the world to work with the Momentum platform in their primary language.'
                                ]
                            },
                            'wider' : 'right',
                            'mobile': {
                                'type': 'header_text',
                                'img': 'momentum6',
                                'header': 'Multilingual solution',
                                'text': [
                                    'Momentum is a fully multilingual solution. All components of Momentum’s user interface can be displayed in a variety of written languages. This enhances productivity for companies with global manufacturing operations by enabling individuals around the world to work with the Momentum platform in their primary language.'
                                ]
                            }
                        },
                        {
                            'left' : {
                                'type': 'text',
                                'text': 'Momentum also incorporates, supports, or complies with several critical manufacturing-specific standards and protocols.',
                                'width': 'narrow'
                            },
                            'right' : {
                                'type': 'list',
                                'width': 'wide',
                                'list': [
                                    'It is fully compliant with the ISA-95 standard',
                                    'It incorporates and supports the B2MML protocol and WEB services for the exchange of data',
                                    'In incorporates and supports the OPC standard for communicating with shop floor equipment such as label printers, barcode scanners, RFID equipment, measuring systems, PLC’s, and SCADA software.',
                                    'It is compliant with the requirements of ISA 88 relating to batch process control'
                                ]
                            },
                            'mobile': {
                                'type': 'black_list',
                                'text': 'Momentum also incorporates, supports, or complies with several critical manufacturing-specific standards and protocols.',
                                'list': [
                                    'It is fully compliant with the ISA-95 standard',
                                    'It incorporates and supports the B2MML protocol and WEB services for the exchange of data',
                                    'In incorporates and supports the OPC standard for communicating with shop floor equipment such as label printers, barcode scanners, RFID equipment, measuring systems, PLC’s, and SCADA software.',
                                    'It is compliant with the requirements of ISA 88 relating to batch process control'
                                ]
                            }
                        }
                    ],
                    'parent_menu': 'momentum',
                    'mobile_image': 'momentum2.svg',
                    'has_mobile': true
                }
            }
        }
    }
</script>
