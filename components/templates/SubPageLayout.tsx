import React from "react";

// scss import
import styles from "./styles/SubPageLayout.module.scss";
import Header from "../molecules/Header";
import Footer from "../organisms/Footer";

// components import

// type props
export type SubPageLayoutProps = {
  id: number;
  children: React.ReactNode;
};

const SubPageLayout = ({ id, children }: SubPageLayoutProps) => {
  return (
    <div className={styles.layout} key={id}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default SubPageLayout;
