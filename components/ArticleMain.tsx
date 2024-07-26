import Image from "next/image";
import Card from '../assets/static/card.jpeg';

const styles: { [key: string]: string } = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r border-gray-200`,
  Content: `h-screen overflow-scroll p-[2rem]`,
};
const ArticleMain: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Content}>
        <div className={styles.headerContainer}>
          <div className={styles.author}>
            <div className={styles.authorProfileIamge}>
                <Image src={Card} alt="author" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
