import Image from "next/image";
import Styles from "./page.module.css";
import Sidebar from "./components/layout/sidebar/page";

export default function Home() {
  return (

    <div className={'{Styles.page}{Styles.flexcontainer}'}>
      <div className={Styles.sidebar}><Sidebar /></div>
      <main className={Styles.main}>

      </main>

    </div>
  );
}
