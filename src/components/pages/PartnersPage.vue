<template>
    <div class="partnerspage">
        <PagePreloader/>
        <menu-component default_height="low" parent_menu="community" class="menu"/>
        <div class="page-content">

            <!--Desktop version-->
            <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                <div class="partners-wrapper">

                    <div></div>

                    <div class="countries">
                        <h2>Our integration partners</h2>
                        <p v-for="(country, country_key) in countries">

                            <img :src="'/static/svg/flags/partnerspage/' + country.flag">
                            <a
                                    @click="active_country = country_key"
                                    v-bind:class="[{ active: active_country === country_key }]"
                            >
                                {{ countries[country_key].name }}
                            </a>
                        </p>
                    </div>

                    <div></div>

                    <div class="partners">
                        <h3>Partners in {{ countries[active_country].name }}</h3>

                        <div
                                v-for="partner in sortedPartners"
                                v-if="partner.countries.includes(active_country)"
                                class="partner"
                                :class="partner.status + '-status'"
                                @click="openPopup( partner )">
                            <span>{{ partner.title }}</span>
                            <button :class="partner.status + '-button'">
                                <nobr>
                                    {{ partner.status.charAt(0).toUpperCase() + partner.status.slice(1) }} Partner
                                </nobr>
                            </button>
                        </div>
                    </div>
                </div>
            </show-at>

            <!--Mobile version-->
            <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                <div class="partners-mobile-wrapper">
                    <h2>Our integration partners</h2>
                    <div v-for="(country, country_key) in countries">
                        <h3 @click="opened_accordion[country_key] = !opened_accordion[country_key]">
                            <img :src="'/static/svg/flags/partnerspage/' + country.flag">
                            {{ country.name }}
                        </h3>
                        <div v-if="opened_accordion[country_key]">
                            <div class="partners-wrapper">

                                <div class="partners">

                                    <div
                                            v-for="partner in sortedPartners"
                                            v-if="partner.countries.includes(country_key)"
                                            class="partner"
                                            :class="partner.status + '-status'"
                                            @click="openPopup( partner )">
                                        <span>{{ partner.title }}</span>
                                        <button :class="partner.status + '-button'">
                                            <nobr>
                                                {{ partner.status.charAt(0).toUpperCase() + partner.status.slice(1) }} Partner
                                            </nobr>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </hide-at>

            <PreFooterNavigation :navigationData="navData"/>
            <Footer/>
        </div>
        <div class="modal" v-if="popupData.opened">
            <div></div>
            <div class="modal-inner">
                <div class="modal-image-wrapper">
                    <img :src="'/static/svg/subpages/partners/' + popupData.image">
                </div>
                <div class="modal-text-wrapper">
                    <p v-html="popupData.text"></p>
                </div>
            </div>
            <div></div>
            <div class="cross-container" @click="closePopup()">
            </div>
            <div class="popup-membrane" @click="closePopup()"></div>
        </div>
        <div class="images-preload">
            <img src="/static/svg/subpages/partners/1.svg">
            <img src="/static/svg/subpages/partners/2.svg">
            <img src="/static/svg/subpages/partners/3.svg">
            <img src="/static/svg/subpages/partners/4.svg">
            <img src="/static/svg/subpages/partners/5.svg">
            <img src="/static/svg/subpages/partners/6.svg">
            <img src="/static/svg/subpages/partners/7.svg">
            <img src="/static/svg/subpages/partners/8.svg">
            <img src="/static/svg/subpages/partners/9.svg">
            <img src="/static/svg/subpages/partners/10.svg">
            <img src="/static/svg/subpages/partners/11.svg">
            <img src="/static/svg/subpages/partners/12.svg">
        </div>
    </div>
</template>

<script>
    import MenuComponent from '../components/MenuComponent';
    import PreFooterNavigation from '../components/PreFooterNavigation';
    import Footer from '../components/Footer';
    import NavMixin from '../../mixins/preFooterNavigation';
    import PagePreloader from '../components/Preloader';
    import {showAt, hideAt} from 'vue-breakpoints';

    export default {
        name: "PartnersPage",
        components: { MenuComponent, PreFooterNavigation, Footer, PagePreloader, hideAt, showAt },
        mixins: [NavMixin],
        data: function () {
            return {
                partners: [
                    {
                        title: 'Abedor',
                        image: '1.svg',
                        text: '<b>ABEDOR</b> <br> \n' +
                            'Ukraine<br><br>\n' +
                            '\n' +
                            'Andrii Sokoliuk <br> \n' +
                            'andrii@abedor.com <br>\n' +
                            '+380995223555 <br>' +
                            '<a href="https://abedor.com" target="_blank">www.abedor.com</a> <br><br>' +
                            '\n' +
                            'Create and develop digital products: from research and strategy to effective target development. <br>\n' +
                            'Our main advantages:<br>' +
                            '- experience of realization of complex projects<br>\n' +
                            '- the use of state-of-the-art technologies<br>\n' +
                            '- a coordinated team of specialists.<br>\n',
                        countries: ['ua'],
                        status: 'certified'
                    },
                    {
                        title: 'Agidens',
                        image: '2.svg',
                        text: '<b>Agidens Process Automation</b> <br>\n' +
                            'Belgium<br><br>\n' +
                            '\n' +
                            'Peter Opregt<br>\n' +
                            'peter.opregt@agidens.com<br> \n' +
                            '+32499860888<br> \n' +
                            '<a href="http://www.agidens.be" target="_blank">www.agidens.be</a> <br> <br> \n' +
                            'Optimized production processes are essential to achieving a good competitive position. This\n' +
                            'means flexible production systems with the right level of IT and automation. Agidens offers\n' +
                            'consulting, design, installation and support services to achieve efficient, flexible, reliable\n' +
                            'and cost-effective operations.<br><br>' +
                            'Our F&amp;B and Fine Chemicals division has an in-depth expertise of production processes and the practical implementation of technology. Connecting with instruments, PLC/SCADA, machines, printers, scanners, weighing bridges and other peripheral devices is of utmost importance in these projects as they are mainly about becoming fully integrated.\n' +
                            'Agidens guides you towards optimization of efficient industrial operational and production\n' +
                            'processes. With Momentum, we ensure integrated operational management in a\n' +
                            'paperless environment.<br><br>' +
                            'With over 70 years of experience in project and processes in an industrial environment,\n' +
                            'combined with expertise in E&amp;I, process automation (level 2) and MES (level 3), Agidens is a strong and innovative technology partner throughout the entire implementation process.<br><br>' +
                            'As for Momentum – our favorite suite for food&beverage – our technology partner\n' +
                            'BrightEye supplies the software, Agidens takes care of the rest!<br> \n',
                      countries: ['be', 'nl'],
                      status: 'platinum'
                    },
                    {
                        title: 'Apisystems',
                        image: '3.svg',
                        text: '<b>APISystems</b> <br> \n' +
                            'Poland<br><br>\n' +
                            '\n' +
                            'Maciej Ramlo<br>\n' +
                            'Maciej.Ramlo@apisystems.pl<br>\n' +
                            '+48603718913<br>\n' +
                            '<a href="http://www.apisystems.pl" target="_blank">www.apisystems.pl</a> <br><br>\n' +
                            'We’ve implemented and serviced our solutions around the world.<br>\n' +
                            'A short company description: APISystems Sp. z o. o. is a company offering the latest solutions in the field of Industrial Informatics, mechanical engineering and production sites. We form a group of experts dealing with the complex investment implementation. We treat our clients as partners for longterm cooperation. <br><br> Over 12 years of operation, we have completed over 300 projects in the field of Industrial Informatics and production automation. We run projects in Polish, English and German.<br>\n',
                      countries: ['pl'],
                      status: 'certified'
                    },
                    {
                        title: 'CGI',
                        image: '4.svg',
                        text: '<b>CGI</b> <br>\n' +
                            'Canada<br><br>\n' +
                            '\n' +
                            'Fabien Serre<br>\n' +
                            'fabien.serre@cgi.com<br>\n' +
                            '+15148413200<br>\n' +
                            '<a href="https://www.cgi.fr/fr" target="_blank">www.cgi.fr/fr</a> <br><br>\n' +
                            '\n' +
                            'CGI is a global business with 74,000 professionals in hundreds of locations across the Americas, Asia-Pacific and Europe who provide end-to-end IT and business process services that facilitate the ongoing evolution of our clients’ businesses. Our aspiration is very simple: to be the best at what we do and help our clients to succeed.<br>\n',
                      countries: ['fr'],
                      status: 'certified'
                    },
                    {
                        title: 'Key',
                        image: '6.svg',
                        text: '<b>Sede Key Communication</b> <br>\n' +
                            'Spain, Italy <br> <br>\n' +
                            '\n' +
                            'Constantino Garrido <br>\n' +
                            'constantino@keycom.es <br>\n' +
                            '+34639752971 <br> \n' +
                            '<a href="http://www.keycom.es" target="_blank">www.keycom.es</a> <br><br>\n' +
                            '\n' +
                            'Key communication is an engineering of telecommunications systems integration that offers communication and automation solutions for the industrial environment of security, production and processes in various sectors. Its activities range from automation, communications engineering, electrical, MES, factory IT to connection with ERP systems.<br><br>' +
                            'Our clients can use Keycom services in the form of consulting, engineering or in the form of a turnkey project, directly or through a collaboration agreement with agents in the territory. <br>\n',
                        countries: ['es'],
                        status: 'certified'
                    },
                    {
                        title: 'Elaks',
                        image: '5.svg',
                        text: '<b>PJSC ELAKS</b> <br>\n' +
                            'Ukraine<br><br>\n' +
                            '\n' +
                            'Mikhail Kadomskiy<br>\n' +
                            'mikhail.kadomskiy@elaks.kharkov.ua<br>\n' +
                            '+380503030977<br>\n' +
                            '<a href="https://elaks.com.ua" target="_blank">www.elaks.com.ua</a> <br><br>\n' +
                            '\n' +
                            'PJSC ELAKS for more than 24 years has been one of the leading suppliers of equipment, service and complex solutions for modernization of key economics branches in Ukraine and abroad. More than 600 released projects in automated control systems for technological processes and electric drives projects, power supply and lighting. Certification ISO 9001:2015. \n',
                        countries: ['ua'],
                        status: 'certified'
                    },
                    {
                        title: 'Reditech',
                        image: '7.svg',
                        text: '<b>Reditech</b> <br>\n' +
                            'Belgium, Nederland, United Kingdom, Singapore, Thailand<br><br>\n' +
                            '\n' +
                            'Werner Fransen<br>' +
                            'werner.fransen@reditech.be<br>' +
                            '+32037113293<br>\n' +
                            '+320475680864<br>' +
                            '<a href="https://www.reditech.be" target="_blank">www.reditech.be</a><br><br>\n' +
                            'For over 20 years, Reditech has been delivering factory-, process- and logistics automation solutions to a wide range of companies. Our customers are based in the life science industry, food, chemical, cleantech, material handling and many more.<br>\n',
                         countries: ['be', 'nl'],
                         status: 'gold'
                    },
                    {
                        title: 'Silogic',
                        image: '8.svg',
                        text: '<b>Silogic Group</b> <br>\n' +
                            'Ukraine<br><br>\n' +
                            '\n' +
                            'Denis Fedosenko<br>\n' +
                            'denis.fedosenko@silogic.com.ua<br>\n' +
                            '+380504621141<br>' +
                            '<a href="http://www.silogic.com.ua" target="_blank">www.silogic.com.ua</a><br><br>\n' +
                            '\n' +
                            'Silogic Group is a system integrator with competence in Industrial Automation, Industrial IT Solutions, Building Automation, Energy Management and Process Engineering. Official Siemens Partner (System Integrator), Microsoft Partner.<br><br>' +
                            'Industries: Food and Beverage, Energy, Building materials, Pharmaceutics, Building materials, Agribusiness, Woodworking, Tobacco, Paper, Cement, Mining, Metallurgy, Buildings and Infrastructure.<br>\n',
                        countries: ['ua'],
                        status: 'certified'
                    },
                    {
                        title: 'VMA',
                        image: '9.svg',
                        text: '<b>VMA</b> <br>\n' +
                            'Belgium<br><br>\n' +
                            '\n' +
                            'Bert Sucaet<br>\n' +
                            'bertsucaet@vma.be<br>\n' +
                            '+320928019547<br>\n' +
                            '+320473879563<br>\n' +
                            '<a href="https://www.vma.be" target="_blank">www.vma.be </a> <br><br>\n' +
                            '\n' +
                            'The VMA cluster is a strong, multi-technical partner with local and international presence, offering sustainable, technological and innovative total solutions in successful long-term operations. The VMA Cluster is active in the full spectrum of multi-technical installations.\n' +
                            'VMA can handle the implementation of integrated projects within your process environment and the manufacturing industry.<br><br>' +
                            'Our extensive technological expertise, process experience, knowledge of HACCP, food safety and ATEX allow us to develop solutions that meet current, strict standards. Our discrete manufacturing specialists follow the latest evolutions within the supply chain, such as QRM (quick response manufacturing).<br><br>\n',
                      countries: ['be', 'nl'],
                      status: 'gold'
                    },
                    {
                        title: 'X-tensive',
                        image: '10.svg',
                        text: '<b>Xtensive LLC</b><br>\n' +
                            'Russia<br><br>\n' +
                            '\n' +
                            'Alexey Belov<br>\n' +
                            'info@x-tensive.ru <br>\n' +
                            '+73432876173<br>\n' +
                            '<a href="http://x-tensive.ru/" target="_blank">http://x-tensive.ru/</a> <br><br>\n' +
                            '\n' +
                            'X-tensive LLC is a Russian software company. We create high-quality new solutions in the field of databases, automation of business processes and production technologies MES, we develop custom-made software, and also provide consulting services in software development. We have partners in Russia, Europe, USA, and Turkey.<br><br>' +
                            'Projects that we support and develop:<br>' +
                            '- DPA<br>\n' +
                            '- DataObjects.Net<br>\n' +
                            '- Momentum Operations (in partnership with Brighteye NV)<br>\n',
                        countries: ['ru'],
                        status: 'platinum'
                    },
                    {
                        title: 'AG Solution',
                        image: '11.svg',
                        text: '<b>AG Solution</b> <br> \n' +
                            'Belgium<br><br>\n' +
                            '\n' +
                            'Hilde De Schryver <br> \n' +
                            'hilde.deschryver@agsolution.be <br>\n' +
                            /*'+380995223555 <br>' +*/
                            '<a href="http://www.agsolutiongroup.com" target="_blank">www.agsolutiongroup.com</a> <br><br>' +
                            '\n' +
                            'At AG Solution we help our customers to build the factory of the future. <br>\n' +
                            'We are a successful pan-European partner for different Business Sectors, such as Food and Beverage, Pharma or chemicals industry.<br>' +
                            'We consistently focus on our User adoption strategy, being a key factor in the success of a project. It relies on the principle “the user adopts the system, provided the system adapts to the user”.<br>\n' +
                            'We developed advanced solutions to improve manufacturing processes, reduce non-added value activities and support Continuous improvement initiatives in the MOM space.<br>\n',
                        countries: ['be', 'ua', 'es', 'fr', 'nl'],
                        status: 'certified'
                    },

                    {
                        title: 'De Roeve Industries',
                        image: '12.svg',
                        text: '<b>De Roeve Industries</b> <br> \n' +
                            'Belgium<br><br>\n' +
                            '\n' +
                            'Mathias Van Weyenberg <br> \n' +
                            'mathias.van.weyenberg@deroeve.com <br>\n' +
                            '+32484337802 <br>' +
                            '<a href="https://www.deroeve.com/en/services/smart-factory-industry-4-0/" target="_blank">www.deroeve.com/en/services/smart-factory-industry-4-0/</a> <br><br>' +
                            '\n' +
                            'ACT the Bright Way! <br><br>\n' +
                            'It’s essential for companies to stay relevant in a changing world demanding personalized production, reduced time-to-market and high quality products at the Lowest Possible Price. Agility of production processes, spot on supporting systems and empowered people will contribute to achieve this goal. <br><br>' +
                            'As an automation and software company, we are successful in developing efficient, smart and comprehensive solutions in strong co-creation with our customers. We form a centre of expertise capable of meeting your technical challenge with a ACT! mindset. “Think. Decide. Act!” <br><br>\n' +
                            'Together with our technical solution, we ensure optimized and seamlessly integrated production flows with empowered people. <br><br>\n' +
                            'We aspire sustainable and long term collaboration with our customers, mainly in food and beverage, pharma, (petro-)chemicals and waste processing. <br><br>\n' +
                            'Momentum is the essential part of the puzzle to organize operational excellence within a Smart Factory. <br><br>\n' +
                            'Get your production environment fit for future challenges ... Take the Momentum and ACT! Today.<br>\n',
                        countries: ['be'],
                        status: 'certified'
                    },
                ],
                countries: {
                  be: {
                    name: 'Belgium',
                    flag: 'belgium.svg'
                  },
                  fr: {
                    name: 'France',
                    flag: 'france.svg'
                  },
                  nl: {
                    name: 'Netherlands',
                    flag: 'netherlands.svg'
                  },
                  pl: {
                    name: 'Poland',
                    flag: 'poland.svg'
                  },
                  ru: {
                    name: 'Russia',
                    flag: 'russia.svg'
                  },
                  es: {
                    name: 'Spain',
                    flag: 'spain.svg'
                  },
                  ua: {
                    name: 'Ukraine',
                    flag: 'ukraine'
                  }
                },
                active_country: 'be',
                popupData: {
                    image: '',
                    text: '',
                    opened: false
                },
                opened_accordion: {
                  be: false,
                  fr: false,
                  nl: false,
                  pl: false,
                  ru: false,
                  es: false,
                  ua: false
                }
            }
        },
        computed: {
            navData(){
                return {
                    next: this.getNextPageData(),
                    prev: this.getPrevPageData()
                }
            },
            sortedPartners(){
                let sortedPartners = this.partners.sort((a, b) => (a.status < b.status) ? 1 : (a.status === b.status) ? ((a.title > b.title) ? 1 : -1) : -1 );
                return sortedPartners;
            }
        },
        methods: {
            openPopup( partner ) {
                this.popupData.image = partner.image;
                this.popupData.text = partner.text;
                this.popupData.opened = true;
                let top = window.scrollY;
                document.getElementsByClassName('page-content')[0].style.position = 'fixed';
                document.getElementsByClassName('page-content')[0].style.top = -top + document.getElementsByClassName('top-menu-line')[0].offsetHeight + 'px';
                if( window.innerWidth < 768 ){
                    document.getElementsByClassName('top-menu-line')[0].style.opacity = 0;
                }
            },
            closePopup() {
                this.popupData.opened = false;
                let scroll_top = document.getElementsByClassName('page-content')[0].style.top;
                if( scroll_top ) {
                    scroll_top = scroll_top.replace( 'px', '' );
                    document.getElementsByClassName('page-content')[0].style.position = 'inherit';
                    document.getElementsByClassName('page-content')[0].style.top = 0;
                    window.scrollTo( 0, -scroll_top + document.getElementsByClassName('top-menu-line')[0].offsetHeight );
                }
                if( window.innerWidth < 768 ){
                    document.getElementsByClassName('top-menu-line')[0].style.opacity = 1;
                }
            }
        }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/mixins";
    @import "src/assets/scss/variables";

    /* Desktop + mobile */
    .partnerspage {
        position: relative;
        .menu {
            height: calc( var(--vw_144) / 2 );
        }

        .page-content {
            .partners-wrapper {
                display: grid;
                grid-template-columns: 1fr 3fr 1fr 10fr 1fr;

                .countries {

                    border-right: var(--vw_1) solid rgba(0,0,0,.1);
                    padding-right: var(--vw_34);

                    h2 {
                        text-align: left;
                        font-size: var(--vw_34);
                        margin-top: var(--vw_34);
                        margin-bottom: var(--vw_55);
                        //@include text-margin( var(--vw_34), var(--vw_144), var(--vw_89) );
                    }
                    img {
                        width: var(--vw_34);
                    }
                    a {
                        font-size: var(--vw_21);
                        color: #191928;
                        opacity: .62;
                        &.active {
                            color: #00b4fa;
                            opacity: 1;
                        }
                    }
                }

                .partners {
                    position: relative;
                    margin-bottom: var(--vw_288);
                    h3 {
                      margin-bottom: var(--vw_89);
                    }
                    .partner {

                        width: calc( ( 100vw * 3 / 4 - 4 * var(--vw_21) ) / 5 );
                        height: calc( ( 100vw * 3 / 4 - 4 * var(--vw_21) ) / 5 );
                        float: left;
                        margin-right: var(--vw_21);
                        margin-bottom: var(--vw_21);
                        display: grid;
                        align-items: center;
                        justify-content: center;
                        border-radius: var(--vw_13);
                        cursor: pointer;
                        position: relative;
                        &:nth-child( 5n ) {
                            @media only screen and (min-width: 768px) {
                                margin-right: 0;
                            }
                        }
                        &.gold-status {
                            background-color: var( --mc_gold_light );
                        }
                        &.platinum-status {
                            background-color: var( --mc_platinum_light );
                        }
                        &.certified-status {
                            background-color: var( --mc_certified_light );
                        }
                        &:hover {
                            background-color: var( --mc_blue );
                            background-image: url('/static/svg/subpages/glaz_white.svg');
                            background-size: var(--vw_55);
                            background-repeat: no-repeat;
                            background-position: center;
                            span, button {
                                display: none;
                            }
                        }
                        span {
                            font-size: var(--vw_26);
                            font-weight: bold;
                            text-align: center;
                        }
                        button {
                            position: absolute;
                            bottom: 0;

                            margin-bottom: 0;
                            width: 100%;
                            border-radius: 0 0 var(--vw_13) var(--vw_13);

                            &.gold-button {
                               background-color: var(--mc_gold);
                            }
                            &.platinum-button {
                                background-color: var(--mc_platinum);
                            }
                            &.certified-button {
                                background-color: var(--mc_blue);
                            }
                        }
                    }
                }
            }
        }

        .modal {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100vh;
            background-color: rgba( $black, 0.8);
            display: grid;
            grid-template-columns: 11fr 14fr 11fr;
            overflow: scroll;
            .modal-inner {
                margin-top: calc( var(--vw_68) + var(--vw_144) );
                border-radius: var(--vw_13);
                margin-bottom: var(--vw_377);
                z-index: 10;
                .modal-image-wrapper {
                    overflow: hidden;
                    border-radius: var(--vw_13) var(--vw_13) 0 0;
                    img {
                        width: 100%;
                    }
                }
                .modal-text-wrapper {
                    background-color: white;
                    margin-top: -4px;
                    padding: var(--vw_89) var(--vw_55);
                    border-radius: 0 0 var(--vw_13) var(--vw_13);
                    p {
                        margin-top: 0;
                    }
                }
            }
            .cross-container {
                position: fixed;
                top: var(--vw_68);
                width: var(--vw_68);
                height: var(--vw_68);
                right: 0;
                display: grid;
                align-items: center;
                justify-items: center;
                cursor: pointer;
                z-index: 20;
                background-image: url("/static/svg/cross.svg");
            }
            .popup-membrane {
                position: absolute;
                top: 0;
                bottom: -100vh;
                left: 0;
                right: 0;
            }
        }

        .images-preload {
            img {
                height: 10px;
                float: left;
                opacity: 0;
            }
        }
    }

    /* Desktop*/
    @media only screen and (min-width: 768px) {
        .partners-wrapper {
            min-height: calc(100vh - var(--vw_68));

            .countries, .partners {
                padding-top: var(--vw_89);
            }

            .partners .partner {

                span {
                    margin-bottom: calc(var(--vw_55) / 2);
                }

                button {
                    height: var(--vw_55);
                    font-size: var(--vw_21);
                }
            }
        }
    }

    /* Mobile */
    @media only screen and (max-width: 767px) {
        .partnerspage {
            .partners-mobile-wrapper {
                padding-top: var(--vw_233);
                padding-left: var(--vw_55);
                padding-right: var(--vw_55);
                margin-bottom: var(--vw_233);
                border-bottom: var(--vw_3) solid rgba( $blue, 0.38 );
                h2 {
                    margin-top: 0;
                    font-size: var(--vw_89);
                    margin-bottom: var(--vw_144);
                    font-weight: 400;
                }

                h3 {
                    font-size: var(--vw_55);
                    line-height: var(--vw_144);
                    margin-top: 0;
                    margin-bottom: 0;
                    border-top: var(--vw_3) solid rgba( $blue, 0.38 );
                    background-image: url("/static/svg/subpages/glaz.svg");
                    background-repeat: no-repeat;
                    background-position: right center;
                    background-size: var(--vw_68);
                    font-weight: bold;
                    display: inline-block;
                    width: 100%;
                    img {
                        height: var(--vw_42);
                        margin-right: var(--vw_42);
                    }
                }

                .partners-wrapper {
                    display: inline-block;
                    .partners {
                        margin-bottom: 0;
                        .partner {
                            width: calc( ( 100vw - 3 * var(--vw_55) ) / 2 );
                            height: calc( ( 100vw - 3 * var(--vw_55) ) / 2 );
                            margin-right: 0;
                            margin-bottom: var(--vw_55);
                            &:nth-child(2n - 1) {
                                margin-right: var(--vw_55);
                            }
                            span {
                                font-size: var(--vw_55);
                                margin-bottom: calc( var(--vw_89) / 2 );
                            }
                            button {
                                height: var(--vw_89);
                                font-size: var(--vw_42);
                            }
                        }
                    }
                }
            }

            .modal {
                display: block;
                background-color: white;
                .modal-inner {
                    z-index: 100;
                    position: relative;
                    margin-top: 0;
                    margin-bottom: 0;
                    .modal-image-wrapper {
                        border-radius: 0;
                        img {
                            margin-top: -1px;
                        }
                    }
                    .modal-text-wrapper {
                        min-height: calc( 100vh - (100vw *4 /15) );
                    }
                }
                .cross-container {
                    top: 0;
                    z-index: 100;
                    background-color: $black;
                    width: var(--vw_110);
                    height: var(--vw_110);
                }
                .popup-membrane {
                    display: none;
                }
            }
        }
    }
</style>
