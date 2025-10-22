import Image from "next/image";
import Styles from "./page.module.css";
import Sidebar from "./components/layout/sidebar/page";
import ProductRegistrationForm from "./components/ProductRegistrationForm";
import CreateCategoryForm from "./components/CreateCategoryForm";
import DeleteCategory from "./components/DeleteCategory";
import ProductList from "./components/ProductList";
import DeleteProduct from "./components/DeleteProduct";
import EditCategory from "./components/EditCategory";

export default function Home() {
  return (

    <div className={'{Styles.page}{Styles.flexcontainer}'}>
      <div className={Styles.sidebar}><Sidebar /></div>
      <main className={Styles.main}>
      <ProductRegistrationForm />
      <CreateCategoryForm />
      <ProductList />
      <DeleteCategory />
      <DeleteProduct />
      <EditCategory />


      </main>

    </div>
  );
}
