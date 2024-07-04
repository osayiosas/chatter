import Image from "next/image";
import Logo from "../assets/static/chatter.png"

const styles: { [key: string]: string } = {
  accentedButton:
    "bg-black text-white px-4 py-2 rounded-md border border-[#000] hover:bg-white hover:text-[#101]",
  content:
    "max-w-7xl flex-1 flex flex-col md:flex-row items-center justify-between",
  wrapper:
    "h-max[10rem] flex items-center justify-center bg-[#fcc017] bg-opacity-50 px-4 py-8 border-y border-[#000]",
  heading:
    "text-center md:text-left max-w-1 text-[3rem] md:text-[6rem] font-mediumSerif",
  subheading: "text-center md:text-left text-xl md:text-2xl",
  buttonContainer: "flex justify-center md:justify-start",
};
const Banner: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5 p-10 flex-[3]">
          <h1 className="max-w-1 text-[6rem] font-mediumSerif">Stay Curious</h1>
          <h3 className="text-2xl">
            A place to read, write, and deepen your understanding
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>

        <Image
          className="hidden h-72 md:inline-flex object-contain flex-1 bg-transparent"
          src={Logo.src}
          alt="banner"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
