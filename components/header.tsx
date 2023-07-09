import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="nav-text font-bold">Gaurav Pandey</Link>
          <div className="flex items-center social-icons">
            <a href="https://github.com/yednapg"><img src="../icons8-github.svg" alt="GitHub"/></a>
            <a href="https://twitter.com/yednapg"><img src="../icons8-twitter.svg" alt="Twitter"/></a>
            {/* <Link href="/posts" className="text-decoration">Posts</Link>
            <Link href="/" className="text-decoration">Projects</Link>
            <Link href="/" className="text-decoration">Links</Link>
            <Link href="/" className="text-decoration">Talks</Link>
            <Link href="/" className="text-decoration">Newsletter</Link> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}
