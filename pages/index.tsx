import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-4 max-w-7xl m-auto">
          {/* <h1 className="text-2xl font-bold code-text">
           print("profile loading .. .. . 404 error")
          </h1> */}
          {/* <div>
            <Image
            src="/gaurav.png"
            width={1920}
            height={1080}
            alt="Desk"
            />
          </div> */}
          <p>
            Hi 👋, I'm Gaurav. I'm a 16-year-old high schooler from New Delhi, India. I work as a community engineer at Hack Club. I am also a Code Evanglist at CodeDay, where I work to provide welcoming and diverse opportunities for undeserved students to explore a future in tech and beyond. 
            <br/><br/>
            Since 2007, I've done a lot of things, from spending my 5 years of life in the snowy mountains to playing in the beautiful hills of Uttarakhand. I find joy in ambiguity and feel more engaged when working on problems that can be solved by mainly exploring the web or through programming. 
            <br/><br/>
            Say Hi! at: <a href='mailto:hi@pandeygaurav.com' className='pink'>hi@pandeygaurav.com</a>
            <br/><br />
            Note: Computers have seriously changed my life. I began coding when I was 12, and since then I've been invited to speak at international conferences in Florence, Salt Lake City, Singapore, Seattle, and London. 
			<br/>< br/>
			PS: I love Linux, Vim, Python, Art, and Indian Food. 💛🧡❤️💜💙🩵💚🩶</p>
        </div>
      </Container>
    </>
  )
}

export default HomePage
