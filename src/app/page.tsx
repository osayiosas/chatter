import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Card from "../../components/Card"

const styles: { [key: string]: string } = {
  wrapper: ` max-auto flex flex-col min-h-screen`,
  cardList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 lg:gap-8 lg:p-8 xl:grid-cols-4 xl:gap-10 xl:p-10`,
  container: ` max-w7xl flex-1 mx-auto`,
  main: `flex justify-center bg-[#f8f8f8]`,
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.cardList}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}