import ReadersNav from "../../../../components/ReadersNav";
import ArticleMain from "../../../../components/ArticleMain";
import Recommendation from "../../../../components/Recommendation";


const styles: { [key: string]: string } = {
  content:`flex`
}

const pages = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendation />
    </div>
  );
};

export default pages;
