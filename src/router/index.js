import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/pages/MainPage'
import DataPage from '@/components/pages/DataPage'
import ManufacturingPage from '@/components/pages/ManufacturingPage'
import StrategicPage from '@/components/pages/StrategicPage'
import GainBusiness from '@/components/pages/GainBusiness'
import ManufacturingTechnology from '@/components/pages/ManufacturingTechnology'
import UserExperience from '@/components/pages/UserExperience'
import DevopsPage from '@/components/pages/DevopsPage'
import ContinuousPage from '@/components/pages/ContinuousPage'
import BrightbankPage from '@/components/pages/BrightbankPage'
import ModulesPage from '@/components/pages/ModulesPage'
import ClientRelationship from '@/components/pages/ClientRelationship'
import UniversalNetwork from '@/components/pages/UniversalNetwork'
import MomEngineers from '@/components/pages/MomEngineers'
import PartnersPage from '@/components/pages/PartnersPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/data',
      name: 'DataPage',
      component: DataPage
    },
    {
      path: '/manufacturing',
      name: 'ManufacturingPage',
      component: ManufacturingPage
    },
    {
      path: '/strategic',
      name: 'StrategicPage',
      component: StrategicPage
    },
    {
      path: '/gainbusiness',
      name: 'GainBusiness',
      component: GainBusiness
    },
    {
      path: '/manufacturingtechnology',
      name: 'ManufacturingTechnology',
      component: ManufacturingTechnology
    },
    {
      path: '/userexperience',
      name: 'UserExperience',
      component: UserExperience
    },
    {
      path: '/devops',
      name: 'DevopsPage',
      component: DevopsPage
    },
    {
      path: '/continuous',
      name: 'ContinuousPage',
      component: ContinuousPage
    },
    {
      path: '/brightbank',
      name: 'BrightbankPage',
      component: BrightbankPage
    },
    {
      path: '/modules',
      name: 'ModulesPage',
      component: ModulesPage
    },
    {
      path: '/universalnetwork',
      name: 'UniversalNetwork',
      component: UniversalNetwork
    },
    {
      path: '/clientrelationship',
      name: 'ClientRelationship',
      component: ClientRelationship
    },
    {
      path: '/momengineers',
      name: 'MomEngineers',
      component: MomEngineers
    },
    {
      path: '/partners',
      name: 'PartnersPage',
      component: PartnersPage
    },
    {
      path: '/QR',
      redirect: '/'
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
          return {
              selector: to.hash
          }
      } else {
          return { x: 0, y: 0 }
      }
  }
})
