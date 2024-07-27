import Image, { StaticImageData } from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import AltLogo from "../assets/static/AltSchool-Logo-Main.png";
import AvLogo from "../assets/static/avatar.jpeg";
import card from "../assets/static/card.jpeg";
import NextLogo from "../assets/static/nextjs.png";

const styles: { [key: string]: string } = {
  wrapper: `h-full w-full md:w-[20rem] flex flex-col p-4 md:p-8`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-4 py-2 rounded-full`,
  searchBar: `flex items-center gap-2 h-10 border px-4 rounded-full mb-6`,
  searchInput: `border-none outline-none bg-transparent w-full`,
  authorContainer: `my-4`,
  authorProfileImageContainer: `h-20 w-20 rounded-full overflow-hidden mb-4`,
  authorName: `font-semibold mb-2 mt-4`,
  authorFollowing: `text-gray-400 text-sm`,
  authorActions: `flex gap-4 my-4`,
  actionButton: `bg-[#1a7817] text-white rounded-full px-4 py-2 text-sm flex items-center`,
  recoAuthProfileContainer: `rounded-full overflow-hidden h-6 w-6`,
  recommendationName: `text-sm text-gray-700`,
  recommendationAuthorContainer: `flex items-center gap-2`,
  recommendationTitle: `font-bold mt-2`,
  recommendationThumbContainer: `flex items-center justify-center h-16 w-16`,
  recommendationThumb: `object-cover`,
  articlesContentWrapper: `flex items-center justify-between cursor-pointer my-4`,
  articleContent: `flex-1`,
};

const Recommendation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>
        Get unlimited access to stories
      </div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={AvLogo} alt="author" width={100} height={100} />
        </div>
        <div className={styles.authorName}>Idiaghe Osaigbovo</div>
        <div className={styles.authorFollowing}>1M Followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Following</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className="text-lg font-semibold mb-4">More on Chatter</div>
        <div className={styles.articlesContainer}>
          {recommendedPost.map((post, index) => (
            <div key={index} className={styles.articlesContentWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div className={styles.recoAuthProfileContainer}>
                    <Image
                      src={post.author.image}
                      alt="card"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.recommendationName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>
              <div className={styles.recommendationThumbContainer}>
                <Image
                  className={styles.recommendationThumb}
                  src={post.image}
                  alt="Next"
                  width={64}
                  height={64}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

interface Author {
  name: string;
  image: StaticImageData;
}

interface Post {
  title: string;
  image: StaticImageData;
  author: Author;
}

const recommendedPost: Post[] = [
  {
    title: "what can you do with Nextjs?",
    image: NextLogo,
    author: {
      name: "Joan Idiaghe",
      image: card,
    },
  },
  {
    title: "study with Altschool!",
    image: AltLogo,
    author: {
      name: "HackSultan",
      image: AvLogo ,
    },
  },
  {
    title: "uppload photos in next js!",
    image: NextLogo,
    author: {
      name: "Osaigbovo idiaghe",
      image: AvLogo,
    },
  },
];
