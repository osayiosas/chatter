import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import AltLogo from "../assets/static/AltSchool-Logo-Main.png";
import AvLogo from "../assets/static/avatar.jpeg";
import card from "../assets/static/card.jpeg";
import NextLogo from "../assets/static/nextjs.png";

const styles: { [key: string]: string } = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] `,
  accentedButton: `flex items-center justify-center text-sm  bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorConatiner: ``,
  authorProfileImageConatiner: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-gray-400 text-sm`,
  authorActions: `flex gap-[.6rem] my-[1rem] `,
  actionButton: `bg-[#1a7817] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
  recoAuthProfileConatiner: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommadationName: `text-sm text-gray-700`,
  recommadationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommedationTitle: `font-bold `,
  recommadationThumbConatiner: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommadationThumb: `object-cover`,
  articlesContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-1`,
};

const Recommendation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimged access to story</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={styles.authorConatiner}>
        <div className={styles.authorProfileImageConatiner}>
          <Image src={AvLogo} alt="author" width={100} height={100} />
        </div>
        <div className={styles.authorName}>Idiaghe Osaigbovo</div>
        <div className={styles.authorFollowing}>1M Follow</div>

        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Following</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className={styles.recommadationConatiner}>
        <div className={styles.title}>More on Chatter</div>
        <div className={styles.articlesContainer}>
          <div className={styles.articlesContentWrapper}>
            <div className={styles.articleContent}>
              <div className={styles.recommadationAuthorContainer}>
                <div className={styles.recoAuthProfileConatiner}>
                  <Image src={card} alt="card" width={100} height={100} />
                </div>
                <div className={styles.recommadationName}>
                  Idiaghe Osaigbovo
                </div>
              </div>
              <div className={styles.recommedationTitle}>
                Handling Dynamic href is not Supported in the App Router Error
                in Next.js
              </div>
            </div>
            <div className={styles.recommadationThumbConatiner}>
              <Image
                className={styles.recommadationThumb}
                src={NextLogo}
                alt="Next"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
