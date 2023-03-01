import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="nav-text">GAURAVPANDEY</Link>
          <div className="flex items-center social-icons">
            <a href="https://github.com/yednapg"><img src="../icons8-github.svg" alt="GitHub"/></a>
            <a href="https://twitter.com/yednapg"><img src="../icons8-twitter.svg" alt="Twitter"/></a>
          </div>
        </nav>
      </Container>
    </header>
  )
}
