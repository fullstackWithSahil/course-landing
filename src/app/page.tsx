import Hero from '@/components/landingPage/Hero'
import Products from '@/components/landingPage/Products'
import PartnerSection from '@/components/landingPage/Partner'
import Faq from '@/components/landingPage/Faq'
import Leadmagnet from '@/components/landingPage/Leadmagnet'
import TrustSection from '@/components/landingPage/TrustSection'
import ResourcesCTA from '@/components/landingPage/ResourcesCTA'

export default function page() {
    return (
      <main>
        <Hero/>
        <TrustSection/>
        <PartnerSection/>
        <Products/>
        <ResourcesCTA/>
        <Leadmagnet/>
        <Faq/>
      </main>
    )
}
