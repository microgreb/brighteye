<template>
    <footer>
        <div class="empty"></div>
        <section class="contacts">
            <article v-for="data in contacts">
                <h4>{{data.country}}</h4>
                <div class="data-text" v-html="data.text"></div>
            </article>
        </section>
        <section class="menu">
            <article v-for="category in categoryNavigationData">
                <a :href="'/' + category.url"><h4>{{category.title}}</h4></a>
                <router-link
                        v-for="page in getPagesDataByCategory(category.categoryName)"
                        :key="page.index"
                        :class="getClass(page.hoverClass, page.urlName)"
                        :to="{name: page.urlName}">
                    {{page.pageTitle}}
                </router-link>
            </article>
            <span class="designed">Designed by <a href="http://codedealer.pro/" target="_blank">CodeDealer</a></span>
        </section>
        <div class="empty">
        </div>
    </footer>
</template>

<script>
    import NavMixin from '../../mixins/preFooterNavigation';

    export default {
        name: "Footer",
        mixins: [NavMixin],
        data(){
            return {
                contacts: [
                    {
                        country: 'Belgium',
                        text: 'Benelux, Beversesteenweg 561/2 <br/>' +
                        '8800 Roeselare-Beveren <br/>' +
                        '+32 (0)51 26 32 10 <br/>' +
                        '<a href="mailto:info@brighteye.be">info@brighteye.be</a><br/>'
                    },
                    {
                        country: 'Spain',
                        text: 'Avda De Catalunya 60, 43812, Brafim <br/>' +
                        'José Maria Guasch,  +34 648919489 <br/>' +
                        '<a href="mailto:Jose-Maria.Guasch@brighteye.es">Jose-Maria.Guasch@brighteye.es</a><br/>'
                    },
                    {
                        country: 'France',
                        text: '49, Rue de Ponthieu, 75008, Paris <br/>' +
                        'Jan Wellensiek, + 33 7 86 06 92 31 <br/>' +
                        '<a href="mailto:jan.wellensiek@brighteye.fr">jan.wellensiek@brighteye.fr</a><br/>'
                    },
                    {
                        country: 'Ukraine',
                        text: 'Marshala Tymoshenko street, 29b, 04205, Kyiv <br/>' +
                        'Dmytro Piatybratov, +380 66 88 48 115 <br/>' +
                        '<a href="mailto:dmytro.piatybratov@brigtheye.com.ua">dmytro.piatybratov@brigtheye.com.ua</a><br/>'
                    },
                    {
                        country: 'Poland',
                        text: 'Jesionowa 9a, Katowice 40-159<br/>' +
                        'Wojciech Chowaniec, +48 606 320 672<br/>' +
                        '<a href="mailto:wojciech.chowaniec@bpc-group.pl">wojciech.chowaniec@bpc-group.pl</a><br/>'
                    },
                    {
                        country: 'Russia',
                        text: 'Radischeva st. 55, office 301-302, Ekaterinburg <br/>' +
                        'Alexey Belov, Tel: +7 343-287-6173 <br/>' +
                        '<a href="mailto:alexey.belov@brighteye.ru">alexey.belov@brighteye.ru</a><br/>'
                    },
                ]
            }
        },
        methods: {
            getClass(color, pageUrl) {
                let customClass = 'data-text item-' + color;
                let currentPage = this.getThisPageData();

                if(currentPage.urlName === pageUrl) {
                    customClass += ' active';
                }

                return customClass;
            }
        }
    }
</script>

<style lang="scss">
    footer{
        padding: var(--vw_144) 0;
        background-color: var(--mc_black);
        display: grid;
        grid-template-columns: 1fr 3fr 3fr 1fr;
        position: relative;
        article{
            padding-bottom: var(--vw_42);
            &:last-child{
                padding-bottom: 0;
            }
        }
        h4, .data-text{
            color: white;
            font-size: var(--vw_26);
            line-height: var(--vw_34);
            margin: 0;
            padding: 0;
            display: block;
            font-weight: 600;
        }
        a {
            text-decoration: none;
            transition: .3s;
            &:hover {
                transition: .3s;
                text-decoration: none;
                opacity: 1;
            }
            &.active {
                opacity: 1;
            }
            &.item-green {
                &:hover, &.active { color: var(--mc_green)}
            }
            &.item-blue {
                &:hover, &.active { color: var(--mc_blue) }
            }
            &.item-yellow {
                &:hover, &.active { color: var(--mc_yellow) }
            }
            &.item-black {
                &:hover, &.active { color: #fff }
            }
        }
        .data-text{
            opacity: .5;
            a{
                color: white;
            }
        }
        .designed {
            position: absolute;
            bottom: var(--vw_26);
            right: var(--vw_26);
            color: white;
            font-size: var(--vw_13);
            opacity: 0.5;
            &:hover {
                opacity: 1;
                a {
                    color: var(--mc_blue);
                }
            }
            a {
                color: white;
                cursor: pointer;
            }
        }


        @media all and (max-width: 768px) {
            display: flex;
            padding: var(--vw_144);
            .menu {
                height: auto !important;
            }
            .contacts, .empty {
                display: none;
            }
            h4 {
                font-size: var(--vw_89);
                line-height: 1.2;
                padding-bottom: var(--vw_55);
            }
            .data-text {
                font-size: var(--vw_68);
                line-height: 1.2;
                padding-bottom: var(--vw_55);
                &:last-child {
                    padding-bottom: var(--vw_178);
                }
                opacity: 1;
                color: #8b8b93;
            }
            a.data-text{
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    height: var(--vw_21);
                    width: var(--vw_21);
                    border-radius: var(--vw_16);
                    display: block;
                    right: calc(100% +  var(--vw_21));
                    top: var(--vw_26);
                }
                &.item-green::before{ background-color: var(--mc_green)}
                &.item-blue::before{ background-color: var(--mc_blue)}
                &.item-yellow::before{ background-color: var(--mc_yellow)}
                &.item-black::before{ background-color: #fff }
            }
            .designed {
                font-size: var(--vw_42);
                bottom: var(--vw_55);
                right: var(--vw_55);
            }
        }
    }
</style>
