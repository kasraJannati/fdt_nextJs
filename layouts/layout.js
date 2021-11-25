import Footer from '../components/common/footer'
import Nav from '../components/common/nav'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}