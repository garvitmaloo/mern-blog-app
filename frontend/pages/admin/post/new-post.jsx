import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import styles from "../../../styles/NewPostForm.module.css";

export default function NewPost() {
  const router = useRouter();

  const titleInputRef = useRef();
  const briefInputRef = useRef();
  const categoryInputRef = useRef();
  const readTimeInputRef = useRef();
  const detailsInputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBrief, setNewPostBrief] = useState("");
  const [newReadTime, setNewReadTime] = useState("");
  const [newPostDetails, setNewPostDetails] = useState("");

  useEffect(() => {
    if (router.query.id) {
      const fetchPostDetails = async function () {
        const { data } = await axios.get(
          `http://localhost:4000/api/post/${router.query.id}`
        );

        return data;
      };

      const postDetails = fetchPostDetails();
      postDetails
        .then((res) => {
          setNewPostTitle(res.postTitle);
          setNewPostBrief(res.postBrief);
          setNewReadTime(res.readTime);
          setNewPostDetails(res.postDetails);
        })
        .catch((err) => console.log(err));
    }
  }, [router.query.id]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const formBody = {
      postTitle: titleInputRef.current.value,
      postBrief: briefInputRef.current.value,
      postCategory: categoryInputRef.current.value,
      readTime: readTimeInputRef.current.value,
      postDetails: detailsInputRef.current.value,
    };

    if (router.query.edit === "true") {
      await axios.patch(
        `http://localhost:4000/api/admin/post/${router.query.id}`,
        { bannerImage: selectedFile, formData: formBody },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
    }

    if (!router.query.edit) {
      await axios.post(
        "http://localhost:4000/api/admin/post/new-post",
        {
          bannerImage: selectedFile,
          formData: formBody,
        },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
    }

    titleInputRef.current.value = "";
    briefInputRef.current.value = "";
    readTimeInputRef.current.value = "";
    detailsInputRef.current.value = "";
    setSelectedFile(null);

    router.replace("http://localhost:3000/admin/home");
  };

  const fileSelectHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  if (router.query.edit === "true") {
    return (
      <div className="container">
        <h2 className="section-heading mt-5">Lets post something new</h2>

        <form
          className={styles.newPostForm}
          onSubmit={formSubmitHandler}
          encType="multipart/form-data"
          method="POST"
          id="postForm"
        >
          <label htmlFor="imageInput">Choose new banner image:</label>
          <input
            className={styles.imageInput}
            type="file"
            name="image"
            id="imageInput"
            required
            autoComplete="off"
            onChange={fileSelectHandler}
          />

          <input
            type="text"
            placeholder="Enter Post Title"
            name="postTitle"
            id="post-title"
            required
            autoComplete="off"
            ref={titleInputRef}
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Post Brief"
            name="postBrief"
            id="post-brief"
            required
            autoComplete="off"
            ref={briefInputRef}
            value={newPostBrief}
            onChange={(e) => setNewPostBrief(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter approx post read time"
            name="postReadTime"
            id="post-read-time"
            required
            autoComplete="off"
            ref={readTimeInputRef}
            value={newReadTime}
            onChange={(e) => setNewReadTime(e.target.value)}
          />

          <textarea
            name="postDetails"
            id="postDetails"
            cols="30"
            rows="30"
            placeholder="Post Details"
            ref={detailsInputRef}
            required
            value={newPostDetails}
            onChange={(e) => setNewPostDetails(e.target.value)}
          ></textarea>

          <select
            className={styles.select}
            name="postCategory"
            id="post-category"
            ref={categoryInputRef}
          >
            <option disabled selected>
              Select a category
            </option>
            <option value="web-development">Web Development</option>
            <option value="web-design">Web and UI/UX Design</option>
            <option value="news-and-trends">News and Trends</option>
            <option value="freelancing">Freelancing</option>
            <option value="jobs-and-opportunities">
              Jobs and Opportunities
            </option>
            <option value="tips-and-tricks">Tips, Tricks and How Tos</option>
          </select>

          <button className="CTABtn my-4" type="submit">
            Update Post
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="section-heading mt-5">Lets post something new</h2>

      <form
        className={styles.newPostForm}
        onSubmit={formSubmitHandler}
        encType="multipart/form-data"
        method="POST"
        id="postForm"
      >
        <label htmlFor="imageInput">Choose banner image:</label>
        <input
          className={styles.imageInput}
          type="file"
          name="image"
          id="imageInput"
          required
          autoComplete="off"
          onChange={fileSelectHandler}
        />

        <input
          type="text"
          placeholder="Enter Post Title"
          name="postTitle"
          id="post-title"
          required
          autoComplete="off"
          ref={titleInputRef}
        />

        <input
          type="text"
          placeholder="Enter Post Brief"
          name="postBrief"
          id="post-brief"
          required
          autoComplete="off"
          ref={briefInputRef}
        />

        <input
          type="number"
          placeholder="Enter approx post read time"
          name="postReadTime"
          id="post-read-time"
          required
          autoComplete="off"
          ref={readTimeInputRef}
        />

        <textarea
          name="postDetails"
          id="postDetails"
          cols="30"
          rows="30"
          placeholder="Post Details"
          ref={detailsInputRef}
          required
        ></textarea>

        <select
          className={styles.select}
          name="postCategory"
          id="post-category"
          ref={categoryInputRef}
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
