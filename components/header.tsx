import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-6 mobile">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="nav-text font-bold">@yednapg</Link>
          <div className="flex items-center social-text">
            <a href="https://github.com/yednapg">~/github</a>
            <a href="https://linkedin.com/in/yednapg">~/linkedin</a>
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
