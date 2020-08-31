<template>
  <div>
    <PagePreload/>
    <video-section/>
    <solutions-section/>
    <empty-section background="momentum"/>
    <div style="position: relative">
      <div class="section_name_membrane">
        <div class="section_name">
          <span>Momentum</span>
        </div>
      </div>
      <momentum-section/>
      <module-section/>
    </div>

    <empty-section background="methodology"/>
    <methodology-section/>
    <empty-section background="partnerships"/>
    <partnership-section/>
    <empty-section background="brightway"/>
    <cases-section/>
    <frost-section />
    <empty-section background="community"/>
    <community-section/>
    <contact-section/>
    <map-section/>
  </div>
</template>

<script>
import VideoSection from '../mainpage/VideoSection'
import SolutionsSection from '../mainpage/SolutionsSection'
import EmptySection from '../mainpage/EmptySection'
import MomentumSection from '../mainpage/MomentumSection'
import ModuleSection from '../mainpage/ModuleSection'
import MethodologySection from '../mainpage/MethodologySection'
import PartnershipSection from '../mainpage/PartnershipSection'
import CasesSection from '../mainpage/CasesSection'
import FrostSection from '../mainpage/FrostSection'
import CommunitySection from '../mainpage/CommunitySection'
import ContactSection from '../mainpage/ContactSection'
import MapSection from '../mainpage/MapSection'
import PagePreload from '../components/Preloader'

export default {
  name: 'MainPage',
  components: {
    VideoSection, SolutionsSection, EmptySection, MomentumSection, ModuleSection, MethodologySection, PartnershipSection, CasesSection, FrostSection, ContactSection, MapSection, CommunitySection, PagePreload
  },
  created: function () {
    document.getElementsByTagName('body')[0].style.overflow = 'inherit';
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.section_name_membrane {
  position: absolute;
  top: - $vw_610;
  bottom: var(--vw_233);
  left: calc(100% * 15 / 16);
  right: 0;
  z-index: 1;
  .section_name {
    padding-right: calc(100vw / 16);
    position: sticky;
    top: calc( var(--vw_89) + var(--vw_68) );
    margin-top: calc( var(--vw_89) );
    bottom: var(--vw_144);
    span {
      transform: rotate(90deg);
      color: $black;
      display: inline-block;
      float: right;
      width: 0;
      font-size: var(--vw_26);
      font-weight: bold;
    }
  }
}

.solutions-section, .contact-section {
  .section_name_membrane {
    top: 0;
    .section_name {
      top: calc( var(--vw_110) + var(--vw_13) );
      margin-top: calc( var(--vw_110) + var(--vw_13) );
    }
  }
}
.contact-section .section_name_membrane {
  bottom: -100vh;
}
@media only screen and (max-width: 767px) {
  .section_name_membrane {
   display: none;
  }
}
</style>
