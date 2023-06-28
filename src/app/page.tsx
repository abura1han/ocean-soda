import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <Image
        src={"/me.jpg"}
        fill
        alt={"me"}
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 backdrop-filter backdrop-blur-3xl bg-[#0000007a] w-full h-screen">
        <div className="flex flex-col items-center w-full px-3 h-screen max-w-lg mx-auto">
          <Image
            src={"/me.jpg"}
            width={120}
            height={120}
            alt={"me"}
            priority
            className="rounded-full mt-10"
          />
          <h2 className="font-bold text-4xl mt-4">Abdur Rahman</h2>

          <p className="text-base mt-4 text-center">
            I am a UI/UX designer with a passion for creating intuitive and
            visually appealing digital experience
          </p>

          <h2 className="font-bold text-4xl mt-10">What I do?</h2>

          <p className="text-base mt-4 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            dolores asperiores eius nostrum culpa iure labore velit blanditiis,
            cupiditate minus eveniet inventore unde. Exercitationem beatae minus
            dolorum facere id numquam!
          </p>

          <ul className="my-8 flex justify-center gap-4">
            <li>
              <a target="_blank" href="https://www.facebook.com/imabdrhmn">
                <Facebook size={30} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/imabdrhmn">
                <Instagram size={30} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.twitter.com/imabdrhmn">
                <Twitter size={30} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/imabdrhmn">
                <Linkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
