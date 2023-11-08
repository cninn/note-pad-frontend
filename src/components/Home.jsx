import BlogList from "./BlogList";
import useFetch from "../useFetch";
import Error from "./messages/Error";
import Loading from "./messages/Loading";
import Footer from "./Footer";


const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");



  return (
    <div>
      {error && <Error />}
      {isPending && <Loading />}
      {blogs && <BlogList blogs={blogs} title="Tüm Notlar" />}
      <Footer/>
    </div>
  );
};

export default Home;

/*     */
