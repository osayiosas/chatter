import Image from "next/image";
import logo from "../assets/static/card.jpeg";
import photo from "../assets/static/phtoto.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";

const styles: { [key: string]: string } = {
  wrapperContainer: `flex max-w-[47rem] h-[10rem] items-center gap-1  cursors-pointer`,
  authorContainer: `flex gap-2`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `rounded-full`,
  authorName: ` font-semibold`,
  title: `font-bold text-2xl`,
  befiefing: `text-[#787878] p-1 rounded-full`,
  detailsContainer: ` flex items-centered justify-between text-[#787878]`,
  articuleDetails: `my-2 text-[.8rem]`,
  category: `bg-[#f2f3f2] `,
  bookmarkContainer: `cursor-pointer text-[#787878]`,
  postDetails: `flex-[2.5] flex flex-col`,
  thumbnailConatiner: ` `,
};

const Card: React.FC = () => {
  return (
    <Link href={`/post/[id]`}>
      <div className={styles.wrapperContainer}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={logo}
                className={styles.authorImage}
                alt="card"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.autthorName}>Idiaghe osaigbovo</div>
          </div>
          <h1 className={styles.title}>How to become a react dev in 2024</h1>
          <div className={styles.befiefing}>Be productive always</div>

          <div className={styles.detailsContainer}>
            <span className={styles.articuleDetails}>
              July 5 • 5 min Read{" "}
              <span className={styles.category}>Productivity</span>{" "}
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailConatiner}>
          <Image
            src={photo}
            alt="card"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
