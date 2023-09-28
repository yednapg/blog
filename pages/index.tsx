import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-1 max-w-7xl m-auto mobile">
          {/* <h1 className="text-2xl font-bold code-text">
           print("profile loading .. .. . 404 error")
          </h1> */}
          <div className="image">
            <Image
              src="/gaurav.png"
              width={1920}
              height={1080}
              alt="Header Photo"
            />
          </div>
          <p>
            Hi 👋, I'm Gaurav. High-school student from New Delhi, India.
            Currently, I work as a community engineer at Hack Club, a global
            community for teenage hackers, and as a Code Evangelist at CodeDay
            where we're committed to providing inclusive and diverse
            opportunities for underserved students to explore a future in tech
            and beyond.
            <br />
            <br />
            Since 2007, I've embarked on various endeavors, ranging from
            spending five years of my life in the snowy mountains to frolicking
            amidst the picturesque hills of Uttarakhand. Currently I live in New
            Delhi. The Best Place in the World.
            <br />
            <br />
            Say Hi! at:{" "}
            <a href="mailto:hi@pandeygaurav.com" className="pink">
              hi@pandeygaurav.com
            </a>
            <br />
            <br />
            Computers have profoundly transformed my life. I started programming
            in Python at the age of 12, and since then, I've had the opportunity
            to speak at international conferences held in Florence, Salt Lake
            City, Singapore, Seattle, and London
            <br />
            <br />
            PS: I love Linux, Vim, Art, and Indian Food. 💛🧡❤️💜💙🩵💚🩶
          </p>
        </div>
        <div className="Image">
          <Image
            src="/signature.png"
            width={270}
            height={1080}
            alt="Signature"
          />
        </div>
      </Container>
    </>
  );
}

export default HomePage;
