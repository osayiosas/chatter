import Image from "next/image";
import Logo from "../assets/static/logo.png";

const styles: { [key: string]: string } = {
  wrapper: "flex justify-center gap-10 bg-[#fcc017] p-4",
  content:
    "container mx-auto flex flex-col md:flex-row justify-between items-center",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  bannerNav:
    "flex flex-col md:flex-row cursor-pointer items-center space-y-2 md:space-y-0 md:space-x-5 mt-2 md:mt-0",
  accentedButton:
    "bg-black text-white px-4 py-2 rounded-md border border-[#fcc017] hover:bg-white hover:text-[#fcc017]",
};

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            alt="Logo"
            height={40}
            width={200}
          />
        </div>
        <div className={styles.bannerNav}>
          <div>Tell your Story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div className={styles.accentedButton}>Get started</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
