
import Image from "next/image";
import Card from "../assets/static/card.jpeg";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Banner from "../assets/static/chatter.png";

const styles: { [key: string]: string } = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r border-gray-200 overflow-y-auto`,
  content: `h-screen scrow w-full min-w-full p-4 md:p-8 p-4 md:p-8 md:w-3/4 lg:w-2/3 xl:w-1/2`, // Adjusted for responsiveness
  headerContainer: `flex flex-col md:flex-row justify-between items-start md:items-center mt-4 mb-6`, // Adjusted for responsiveness
  authorContainer: `flex gap-4 items-center mb-4 md:mb-0`, // Adjusted for responsiveness
  authorProfileImage: `w-12 h-12 grid center rounded-full overflow-hidden`, // Adjusted for responsiveness
  image: `object-cover`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-2 text-gray-500`,
  listenBtn: `flex items-center gap-2 text-green-500`,
  socials: `flex gap-4 text-gray-500 cursor-pointer mt-4 md:mt-0`, // Adjusted for responsiveness
  space: `w-2`,
  bannerContainer: `h-72 w-full grid center overflow-hidden mb-8`, // Adjusted for responsiveness
  articleMainContainer: `flex flex-col gap-[1rem]`, // Adjusted for responsiveness
  title: `text-3xl font-bold`, // Adjusted for responsiveness
  subtitle: `text-[#292929] font-mediumSerifItalic text-[1.4rem]`, // Adjusted for responsiveness
  aritcleText: `font-mediumSerif text-[1.4rem text-[#292929]`, // Adjusted for responsiveness
};

// const styles: { [key: string]: string } = {
//   wrapper: `flex items-center justify-center flex-[3] border-l border-r border-gray-200 overflow-x-auto`, // Changed to overflow-x-auto for horizontal scrolling
//   content: `min-w-full p-4 md:p-8`, // Adjusted for responsiveness
//   headerContainer: `flex justify-between items-center mt-4 mb-6`, // Adjusted for responsiveness
//   authorContainer: `flex gap-4 items-center mb-4 md:mb-0`, // Adjusted for responsiveness
//   authorProfileImage: `w-12 h-12 grid center rounded-full overflow-hidden`, // Adjusted for responsiveness
//   image: `object-cover`,
//   column: `flex-1 flex flex-col justify-center`,
//   postDetails: `flex gap-2 text-gray-500`,
//   listenBtn: `flex items-center gap-2 text-green-500`,
//   socials: `flex gap-4 text-gray-500 cursor-pointer mt-4 md:mt-0`, // Adjusted for responsiveness
//   space: `w-2`,
//   bannerContainer: `h-72 w-full grid center overflow-hidden mb-8`, // Adjusted for responsiveness
//   articleMainContainer: `flex flex-col gap-[1rem]`, // Adjusted for responsiveness
// };

const ArticleMain: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImage}>
              <Image
                className={styles.image}
                src={Card}
                alt="author"
                width={48}
                height={48}
              />
            </div>
            <div className={styles.column}>
              <div>Idiaghe Osaigbovo</div>
              <div className={styles.postDetails}>
                <span>Jun 23 • 7min read •</span>
                <span className={styles.listenBtn}>
                  <AiFillPlayCircle />
                  Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <FaFacebookF />
            <IoLogoTwitter />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              alt="banner"
              width={400}
              height={100}
            />
          </div>
          <h1 className={styles.title}>
            7 things you should know about the new MacBook Pro
          </h1>
          <h4 className={styles.subtitle}>
            <div>
             Idiaghe Osaigbovo, june 23, 2024
            </div>
            <div>Brief: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, impedit?</div>
          </h4>
          <div className={styles.aritcleText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis laborum recusandae, porro saepe voluptatem aspernatur fugiat! Error culpa ex repudiandae architecto veritatis consequatur odit tempora, sapiente quia quae reprehenderit?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos dolores nobis consectetur explicabo veritatis minus odio. Sed natus explicabo ut possimus dignissimos dolorem, repudiandae illum culpa iure fuga magnam!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
