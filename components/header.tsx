import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-5">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/"><b>Gaurav Pandey</b></Link>
          <div className="flex items-center">
            <Link href="/about" className="ml-4">About</Link>
            <Link href="/posts" className="ml-4">Posts</Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
