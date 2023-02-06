import styles from "../../../styles/NewPostForm.module.css";

export default function NewPost() {
  return (
    <div className="container">
      <h2 className="section-heading mt-5">Lets post something new</h2>
      <form className={styles.newPostForm}>
        <label htmlFor="imageInput">Choose banner image:</label>
        <input
          className={styles.imageInput}
          type="file"
          name="image"
          id="imageInput"
          required
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Enter Post Title"
          name="postTitle"
          id="post-title"
          required
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Enter Post Brief"
          name="postBrief"
          id="post-brief"
          required
          autoComplete="off"
        />

        <input
          type="number"
          placeholder="Enter approx post read time"
          name="postReadTime"
          id="post-read-time"
          required
          autoComplete="off"
        />

        <textarea
          name="postDetails"
          id="postDetails"
          cols="30"
          rows="30"
          placeholder="Post Details"
          required
        ></textarea>

        <select
          className={styles.select}
          name="postCategory"
          id="post-category"
        >
          <option disabled selected>
            Select a category
          </option>
          <option value="web-development">Web Development</option>
          <option value="web-design">Web and UI/UX Design</option>
          <option value="news-and-trends">News and Trends</option>
          <option value="freelancing">Freelancing</option>
          <option value="jobs-and-opportunities">Jobs and Opportunities</option>
          <option value="tips-and-tricks">Tips, Tricks and How Tos</option>
        </select>

        <button className="CTABtn my-4" type="submit">
          Post this
        </button>
      </form>
    </div>
  );
}
