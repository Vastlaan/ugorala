import Navigation from '../components/navigation'
import CookiesStatement from '../components/modals/cookie_statement'

export default function MainLayoutComponent({children}) {
  return (
    <>
      <Navigation />
      <CookiesStatement/>
      {children}
    </>
  )
}
