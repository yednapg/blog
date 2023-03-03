import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-4 max-w-2xl m-auto px-4">
          <h1 className="text-3xl font-bold">
           print("Hey, I'm Gaurav a.k.a GP!")
          </h1>
          <div>
            <Image
            src="/gaurav.png"
            width={1920}
            height={1080}
            alt="Desk"
            />
          </div>
          <p className="mt-4">
            a high school junior from New Delhi, India. I work at <a href='https://codeday.org' className='pink'>CodeDay</a>, where I work to provide welcoming and diverse opportunities for underserved students to explore a future in tech and beyond.
            <br/><br/>
            since 2007, I've done everything from living in the snowy mountains and hiking in the beautiful hills of Uttarakhand to studying in India's capital city and travelling to Florence and Rome. I find joy in ambiguity and feel more engaged when working on problems that can be solved by mainly exploring the web or reading a book.
            <br/><br/>
            <a href='/posts' className='blue'>[Posts]</a>
            <br />
            <a href='/newsletter' className='blue'>[Newsletter]</a>
            <br /><br />
            computers has seriously changed my life. I began coding when I was in the ninth grade, and since then I've been invited to give talk in Florence, Salt Lake City, Singapore, Seattle, and London.
          </p>
          <p>Say Hi! at: <a href='mailto:yednapg@gmail.com' className='pink'>yednapg@gmail.com</a></p>
        </div>
      </Container>

    </>
  )
}

export default HomePage
