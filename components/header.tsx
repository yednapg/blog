import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-0">
      <Container>
        <nav className="flex justify-between items-center">
          <img src="/logo.png" alt="logo" className="img"/>
          <div className="flex items-center">
            <Link href="/about" className="ml-4">/about</Link>
            <Link href="/posts" className="ml-4">/posts</Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
