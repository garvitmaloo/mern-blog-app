import CardsGrid from "@project/components/CardsGrid/CardsGrid";
import Image from "next/image";
import Link from "next/link";
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

        <section className="container popular section" id="popular">
          <h1 className="section-heading">Most Popular Blogs</h1>

          <CardsGrid />
        </section>

        <section className="container category section" id="category">
          <h1 className="section-heading">Browse By Category</h1>

          <div className="row">
            <div className="col-lg-6">
              <img src="/blogs.jpg" alt="Blog" height={480} width={600} />
            </div>
            <div className="col-lg-6">
              <h4 className="text-center mb-4">Categories</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                tempore saepe porro repellendus quia id veniam quod, totam rerum
                nihil! Repudiandae laborum adipisci mollitia omnis quibusdam
                reiciendis! Quae, iure accusamus!
              </p>

              <div className="categories my-3 py-3 d-flex flex-wrap gap-3 ">
                <Link
                  href="/category/web-development"
                  className={`CTABtn ${styles.categoryBtn}`}
                >
                  Web Development
                </Link>
                <Link
                  href="/category/web-design"
                  className={`CTABtn ${styles.categoryBtn}`}
                >
                  Web and UI/UX Design
                </Link>
                <Link
                  href="/category/news-and-trends"
                  className={`CTABtn ${styles.categoryBtn}`}
                >
                  News and Trends
                </Link>
                <Link
                  href="/category/freelancing"
                  className={`CTABtn ${styles.categoryBtn}`}
                >
                  Freelancing
                </Link>
                <Link
                  href="/category/jobs-and-opportunities"
                  className={`CTABtn ${styles.categoryBtn}`}
                >
                  Jobs and Opportunities
                </Link>
                <Link
                  href="/category/tips-and-tricks"
                  className={`CTABtn ${styles.categoryBtn}`}
                >
                  Tips, tricks and How To
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter container section" id="newsletter">
          <h1 className="section-heading">Newsletter</h1>

          <div className="row">
            <div className="col-lg-5">
              <h4
                className="my-3"
                style={{ letterSpacing: "0px", fontWeight: 700 }}
              >
                Subscribe to our newsletter and get notified about the new
                posts.
              </h4>
              <p style={{ color: "#495057" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                minima repellendus aut hic porro aperiam, distinctio quibusdam
                earum doloribus amet dicta id harum quas vel dolor! Nam iusto
                nisi aspernatur.
              </p>
            </div>

            <div className="col-lg-7 ps-5">
              <form className={styles.form}>
                <div className="mb-2 d-flex gap-3">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your First Name"
                    required
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your Last Name"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="d-flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    autoComplete="off"
                  />
                </div>

                <button className="CTABtn my-3 d-block mx-auto">
                  Subscribe <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
