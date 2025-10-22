import Styles from "./login.module.css";
import Sidebar from "@/src/app/components/layout/sidebar/page";
import SignIn from "@/src/app/components/SignIn";
import SignUp from "@/src/app/components/SignUp";


export default function LoginPage() {
  return (

    <div className={'{Styles.page}{Styles.flexcontainer}'}>
      <main className={Styles.main}>

      <SignIn />
      <SignUp />


      </main>

    </div>
  );
}
