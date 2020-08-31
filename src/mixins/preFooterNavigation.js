export default {
    data() {
        return {
            preFooterNavigationData: [
                // Solution
                {
                    index: 0,
                    pageTitle: 'Momentum Data',
                    pageCategory: 'Solution',
                    urlName: 'DataPage',
                    hoverClass: 'blue'
                },
                {
                    index: 1,
                    pageTitle: 'Momentum Operations',
                    pageCategory: 'Solution',
                    urlName: 'ManufacturingPage',
                    hoverClass: 'yellow'
                },
                {
                    index: 2,
                    pageTitle: 'Momentum Enterprise',
                    pageCategory: 'Solution',
                    urlName: 'StrategicPage',
                    hoverClass: 'green'
                },
                //Momentum
                {
                    index: 3,
                    pageTitle: 'Gain Business Momentum',
                    pageCategory: 'Momentum',
                    urlName: 'GainBusiness',
                    hoverClass: 'blue'
                },
                {
                    index: 4,
                    pageTitle: 'Advanced Manufacturing Technology',
                    pageCategory: 'Momentum',
                    urlName: 'ManufacturingTechnology',
                    hoverClass: 'yellow'
                },
                {
                    index: 5,
                    pageTitle: 'Universal User Experience',
                    pageCategory: 'Momentum',
                    urlName: 'UserExperience',
                    hoverClass: 'green'
                },
                {
                    index: 6,
                    pageTitle: 'Application Modules',
                    pageCategory: 'Momentum',
                    urlName: 'ModulesPage',
                    hoverClass: 'black'
                },
                //Methodology
                {
                    index: 7,
                    pageTitle: 'Continuous Development and Feedback',
                    pageCategory: 'Methodology',
                    urlName: 'ContinuousPage',
                    hoverClass: 'blue'
                },
                {
                    index: 8,
                    pageTitle: 'Azure DevOps software',
                    pageCategory: 'Methodology',
                    urlName: 'DevopsPage',
                    hoverClass: 'yellow'
                },
                {
                    index: 9,
                    pageTitle: 'BrightBank',
                    pageCategory: 'Methodology',
                    urlName: 'BrightbankPage',
                    hoverClass: 'green'
                },
                //Partnerships
                {
                    index: 10,
                    pageTitle: 'A universal network of system integration',
                    pageCategory: 'Partnerships',
                    urlName: 'UniversalNetwork',
                    hoverClass: 'blue'
                },
                {
                    index: 11,
                    pageTitle: 'The Brighteye client relationship model',
                    pageCategory: 'Partnerships',
                    urlName: 'ClientRelationship',
                    hoverClass: 'yellow'
                },
                {
                    index: 12,
                    pageTitle: 'Brighteye\'s MOM engineers',
                    pageCategory: 'Partnerships',
                    urlName: 'MomEngineers',
                    hoverClass: 'green'
                },
                //Community
                {
                    index: 13,
                    pageTitle: 'Integration partners',
                    pageCategory: 'Community',
                    urlName: 'PartnersPage',
                    hoverClass: 'black'
                },
            ],
            categoryNavigationData: [
                {
                    index: 0,
                    key: 'momentum',
                    title: 'Momentum',
                    categoryName: 'Momentum',
                    url: '#momentum'
                },
                {
                    index: 1,
                    key: 'solutions',
                    title: 'Solutions',
                    categoryName: 'Solution',
                    url: '#solutions'
                },
                {
                    index: 2,
                    key: 'methodology',
                    title: 'Methodology',
                    categoryName: 'Methodology',
                    url: '#methodology'
                },
                {
                    index: 3,
                    key: 'partnership',
                    title: 'Partnership',
                    categoryName: 'Partnerships',
                    url: '#partnership'
                },
                {
                    index: 4,
                    key: 'community',
                    title: 'Community',
                    categoryName: 'Community',
                    url: '#community'
                },
                // {
                //     index: 5,
                //     key: 'about',
                //     title: 'About',
                //     categoryName: 'About',
                //     url: '#about'
                // },
                {
                    index: 6,
                    key: 'cases',
                    title: 'Cases',
                    categoryName: 'Cases',
                    url: '#cases'
                },
                {
                    index: 7,
                    key: 'contacts',
                    title: 'Contacts',
                    categoryName: 'Contacts',
                    url: '#contacts'
                },
            ]
        }
    },
    methods: {
        getThisPageData() {
            return this.preFooterNavigationData.find(item => item.urlName === this.$route.name);
        },
        getNextPageData() {
            let currentPage = this.getThisPageData();
            if (currentPage.index === this.preFooterNavigationData.length - 1) {
                return this.preFooterNavigationData[0];
            }
            return this.preFooterNavigationData[currentPage.index + 1];
        },
        getPrevPageData() {
            let currentPage = this.getThisPageData();
            if (currentPage.index === this.preFooterNavigationData[0].index) {
                return this.preFooterNavigationData[this.preFooterNavigationData.length - 1];
            }
            return this.preFooterNavigationData[currentPage.index - 1];
        },
        getCollorByUrlName(url = null) {
            let urlName = url ? url : this.$route.name;
            return this.preFooterNavigationData.find(item => item.urlName === urlName).hoverClass;
        },
        getPagesDataByCategory(category) {
            return this.preFooterNavigationData.filter(item => item.pageCategory === category);
        }
    }
}