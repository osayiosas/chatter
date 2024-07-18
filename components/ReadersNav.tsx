import Image from "next/image";
import Link from "next/link";
import logo from "../assets/static/logo.png";
import card from "../assets/static/card.jpeg";
import { HiOutlineHome } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";

const styles: { [key: string]: string } = {
  logoContainer: `cursor-pointer mb-4 md:mb-0`,
  wrapper: `w-full h-16 md:w-[5rem] md:h-screen flex justify-between md:flex-col items-center p-4 md:py-8 bg-white shadow-lg md:shadow-none`,
  iconContainer: `flex-1 flex flex-row md:flex-col justify-around md:justify-center gap-4 md:gap-6 text-2xl text-[#787878] cursor-pointer`,
  divider: `hidden md:block border-b w-full`,
  cardImage: `object-cover`,
  cardImageContainer: `w-8 h-8 md:w-[2.4rem] md:h-[2.4rem] rounded-full overflow-hidden`,
};


const ReadersNav: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={`/`}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
      </Link>
      <div className={styles.iconContainer}>
        <HiOutlineHome />
        <RiArticleLine />
        <FiBell />
        <BiBookmark />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>
      <div className={styles.cardImageContainer}>
        <Image
          src={card}
          alt="card"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default ReadersNav;
