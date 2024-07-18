import ReadersNav from "../../../../components/ReadersNav";
import Recommendation from "../../../../components/Recommendation";


const styles: { [key: string]: string } = {
  content:`flex`
}

const pages = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <div> Airtcle main page </div>
      <Recommendation />
    </div>
  );
};

export default pages;
