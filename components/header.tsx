import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-8">
          <Link href="/"><b>Gaurav Pandey</b></Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </Container>
    </header>
  )
}
