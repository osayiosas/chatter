// import ReadersNav from "../../../../components/ReadersNav";
// import ArticleMain from "../../../../components/ArticleMain";
// import Recommendation from "../../../../components/Recommendation";


// const styles: { [key: string]: string } = {
//   content:`flex`
// }

// const pages = () => {
//   return (
//     <div className={styles.content}>
//       <ReadersNav />
//       <ArticleMain />
//       <Recommendation />
//     </div>
//   );
// };

// export default pages;


import ReadersNav from "../../../../components/ReadersNav";
import ArticleMain from "../../../../components/ArticleMain";
import Recommendation from "../../../../components/Recommendation";

const styles: { [key: string]: string } = {
  content: `flex flex-col md:flex-row`, 
  readersNav: `w-full md:w-[20%] lg:w-[15%]`, 
  articleMain: `w-full md:w-[60%] lg:w-[70%]`, 
  recommendation: `w-full md:w-[20%] lg:w-[15%]`, 
};

const Pages = () => {
  return (
    <div className={styles.content}>
      <div className={styles.readersNav}>
        <ReadersNav />
      </div>
      <div className={styles.articleMain}>
        <ArticleMain />
      </div>
      <div className={styles.recommendation}>
        <Recommendation />
      </div>
    </div>
  );
};

export default Pages;

