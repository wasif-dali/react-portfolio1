import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Url Shortner",
    image: projectOne,
    description: (
      <>
        <p>
          URL shortening is used to create shorter aliases for long URLs. We
          call these shortened aliases “short links.” Users are redirected to
          the original URL when they hit these short links. Short links save a
          lot of space when displayed, printed, messaged, or tweeted.
          Additionally, users are less likely to mistype shorter URLs.
        </p>
      </>
    ),
    github: "https://github.com/wasif-dali/URL-shortner.git",
  },
  2: {
    title: "Blogging Site",
    image: projectTwo,
    description: (
      <>
        <p>.
          
        </p>
      </>
    ),
    github: "https://github.com/wasif-dali/Backend_mini_blog.git",
  },
  3: {
    title: "E-Commerce",
    image: projectThree,
    description: (
      <>
        <p>
         
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
