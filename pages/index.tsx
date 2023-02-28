import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-1 max-w-2xl m-auto px-4">
          <h1 className="text-2xl font-bold">
            Hi, I am Gaurav!
          </h1>
          <p>
            a high school junior from New Delhi, India. I work at CodeDay, where I work to provide welcoming and diverse opportunities for underserved students to explore a future in tech and beyond.
            <br/><br/>
            since 2007, I've done everything from living in the snowy mountains and hiking in the beautiful hills of Uttarakhand to studying in India's capital city and travelling to Florence and Rome. I find joy in ambiguity and feel more engaged when working on problems that can be solved by mainly exploring the web or reading a book.
            <br/><br/>
            machine learning has seriously changed my life. I began coding when I was in the ninth grade, and since then I've been invited to give international talks in Florence, Salt Lake City, Singapore, and London.
          </p>

          <p>Say Hi! at: gaurav@codeday.org</p>
        </div>
      </Container>
      <div className="container max-w-2xl m-auto px-4 mt-10">
        <Image
          src="/desk.jpg"
          width={1920}
          height={1080}
          alt="Desk"
        />
      </div>
    </>
  )
}

export default HomePage
