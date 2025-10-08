import Image from "next/image";
import Styles from "./page.module.css";
import Sidebar from "./components/layout/sidebar/page";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProductRegistrationForm from "./components/ProductRegistrationForm";
import CreateCategoryForm from "./components/CreateCategoryForm";
export default function Home() {
  return (

    <div className={'{Styles.page}{Styles.flexcontainer}'}>
      <div className={Styles.sidebar}><Sidebar /></div>
      <main className={Styles.main}>
      <ProductRegistrationForm />
      <CreateCategoryForm />
      <SignIn />
      <SignUp />
      </main>

    </div>
  );
}
