import CardsGrid from "@project/components/CardsGrid/CardsGrid";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main>
        <section className="container hero section" id="hero">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className={`${styles.heroHeading} mb-4`}>
                Best <span>technology guides</span> for you.
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                a dolore fugiat! Reiciendis modi nostrum quas odio veritatis
                quod cum, itaque illo accusantium ea eos! Dignissimos
                accusantium quod aspernatur magni.
              </p>
              <button className="CTABtn align-self-start">
                Read latest blogs
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
            <div className="col-lg-6">
              <Image
                priority
                className={styles.heroImg}
                src="/tech.png"
                alt="A technology illustration"
                height={600}
                width={600}
              />
            </div>
          </div>
        </section>

        <section className="container latest section" id="latest">
          <h1 className="section-heading">Latest Blogs</h1>

          <CardsGrid />
        </section>
      </main>
    </>
  );
}
