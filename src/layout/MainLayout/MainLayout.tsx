import Header from "../../components/Header";
import { motion } from "framer-motion";




const MainLayout = ({children}: LayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <Header />
      {children}
    </motion.div>
  );
};

export default MainLayout;
