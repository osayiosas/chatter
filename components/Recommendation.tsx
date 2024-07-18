import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdMarkEmailUnread } from 'react-icons/md';
import AltLogo from '../assets/static/AltSchool-Logo-Main.png';
import AvLogo from '../assets/static/avatar.jpeg';
import card from '../assets/static/card.jpeg';
import NextLogo from "../assets/static/nextjs.png";

const styles: { [key: string]: string } = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[1.2] `,
  accentedButton: ``,
}




const Recommendation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>
        Get unlimged recommendations
      </div>
    </div>
  )
};

export default Recommendation
