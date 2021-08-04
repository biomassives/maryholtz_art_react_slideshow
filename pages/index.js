import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { getPostData } from "../utils/photos";

export async function getStaticProps() {
  const allPostsData = getPostData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <section className={styles.mainGallery}>
          <div className={styles.imageList}>
            {allPostsData.map(({ id, images, name, artist }) => (
              <div key={id} className={styles.listItem}>
                <Link href={`/gallery/${id}`} passHref>
                  <a className={styles.anchor}>
                    <Image
                      className={styles.imageItem}
                      src={images.thumbnail}
                      alt={id}
                      width={images.thumbwidth}
                      height={images.thumbheight}
                      priority
                    />
                  </a>
                </Link>
                <div className={styles.overlay}></div>
                <Link href={`/gallery/${id}`} passHref>
                  <div className={styles.imageText}>
                    <h2 className={styles.paintingName}>{name}</h2>
                    <h5 className={styles.artistName}>{artist.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
