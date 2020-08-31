<template>
    <div>
        <sub-page :data="data"/>
    </div>

</template>

<script>
    import SubPage from '../layouts/SubPage'

    export default {
        name: "ModulesPage",
        components: { SubPage },
        data: function() {
            return {
                data: {
                    'firstline' : {
                        'color' : 'black',
                        'image' : '31',
                        'header' : 'Momentum Application Modules',
                        'text' : [
                            'Brighteye’s Momentum software platform includes twelve application modules that collectively constitute a comprehensive and fully integrated MOM solution.'
                        ]
                    },
                    'lines': [
                        {
                            'full': {
                                'type': 'module',
                                'icon': 9,
                                'header': 'APS',
                                'text': 'Momentum’s APS module enables optimal scheduling of customer orders. It splits each order into relevant operations and automatically plans these operations at relevant work centers. The APS module automatically adjusts scheduling based on changing conditions and provides managers real-time data regarding potential bottlenecks.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 2,
                                'header': 'Quality Control ',
                                'text': 'The Quality Control module enables companies to define the specifications or features of a product that will be tested for quality and the process and timing of quality tests. It records the results of quality tests and passes the results from one operation to the next. The test results determine the further processing course of the lot, and indirectly, the final quality of the finished product.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 10,
                                'header': 'Track & Trace',
                                'text': 'The Track & Trace module records materials consumption and traces the origin of materials, which ensures that companies always have lifecycle information for all production lots. Operators and managers will know immediately what operations were performed on which lots on which machinery, which raw materials and packaging materials were used, and what stock movements were associated with the operations.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 1,
                                'header': 'Dashboards',
                                'text': 'The Dashboards module enables users to publish real-time and historical data graphically. A user can publish different dashboards from different sources on one page, which enables him or her to have a simple, easy-to-understand view of key performance indicators.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 7,
                                'header': 'Batching',
                                'text': 'Momentum’s Batching module ensures the integrity of product formulas and provides real-time control and recording of all batch processing steps. The functionality of the Batching module is compliant with industry standards such as ISA 88 and ISA 95, and with governmental regulations such as those promulgated by the US Food and Drug Administration.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 6,
                                'header': 'Labeling',
                                'text': 'The Labeling module enables companies to control the appearance of product labels and the EAN and SSCC codes that will be applied to labels. It supports all common industrial label printers, and automatically sends correct data to printers, which reduces the occurrence of errors.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 11,
                                'header': 'WMS',
                                'text': 'The WMS module provides streamlined stock management for raw materials, semi-manufactures, and finished products. This module coordinates all materials movements during the production process based on real production requirements. Materials movements are recorded in real time via data communications with barcode scanners and RFID equipment, which enables the WMS module to calculate future stock requirements on the basis of reserved product quantities for planned orders and ordered raw materials.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 5,
                                'header': 'Personnel',
                                'text': 'The Momentum Personnel module enables companies to link work skills to individual employees and establish parameters for work centers that define how many and what types of employees are needed to carry out operations. This functionality allows needed employees to be “reserved” when planning the production of customer orders.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 4,
                                'header': 'Reporting',
                                'text': 'The Reporting module enables company managers to create, display, print, and export reports. It covers the entire cycle of report development, from creating report templates to displaying reports in a web browser. The Reporting module can use data from multiple data sources, including external databases. This is the first reporting tool that allows a user to edit reports directly on the web, and it can interact with any device, from smartphones to servers.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 8,
                                'header': 'Historian',
                                'text': 'Momentum’s Historian module allows companies to connect multiple data sources to create a history of real-time manufacturing operations metrics in an open information model. User-friendly analytics and dashboard-based monitoring empower front-line employees and decision makers to make informed assessments, engage in effective collaboration, and compare results across manufacturing facilities.'
                            }
                        },
                        {
                            'full': {
                                'type': 'module',
                                'icon': 3,
                                'header': 'Knowledge',
                                'text': 'The Knowledge module centralises knowledge about products and processes, instructions for operators, procedures, maintenance instructions, quality criteria, photographs, electrical diagrams, best practices, etc. Employees on the shop floor can consult this information at any time, because it is stored in a central database. The Knowledge module is a perfect e-learning tool in the workplace, and can significantly reduce the incidence of errors.'
                            }
                        },
                        {
                            'full': {
                              'type': 'module',
                              'icon': 12,
                              'header': 'Digital Trail',
                              'text': 'Digital Trail – Momentum’s Digital Trail module is primarily designed for pharmaceutical companies and other manufacturing enterprises that are subject to stringent regulatory requirements like those issued by the U.S. Food and Drug Administration in 21 CFR Part 11. The “digital signature” capabilities of this module enable enterprises to designate operations that require additional validation, such as through the re-entry of login credentials or approval by supervisory personnel. The “audit trail” capabilities provide full traceability of materials and manufacturing processes for even the smallest production lots, such as individual blister packs of regulated medications.'
                            }
                        },
                    ],
                    'parent_menu': 'momentum'
                }
            }
        }
    }
</script>
