import Footer from '../components/common/footer'

export default function Nested_Layout({ children }) {
  return (
    <>  
      <h2>second layout</h2>
      <main>{children}</main>
      <Footer />
    </>
  )
}