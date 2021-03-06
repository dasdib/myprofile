import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Fragment } from "react"

const IndexPage = ({ data }) => (
  <Layout>
    <section
      id="home"
      className="h-4/5 px-12 bg-gradient-to-t from-gray-200 via-gray-50 to-white border-b-8 border-gray-100"
    >
      <div class="min-h-screen flex flex-col pb-6 sm:pb-6">
        <div class="px-4 py-5 bg-white shadow-top-white sm:rounded-b-3xl sm:p-5">
          <div className="flex">
            <div className="flex-1 px-10 py-14 sm:py-14 sm:px-10 ">
              <div>
                <h1 className="text-5xl pb-4">Hi there! I am </h1>
                <h4 className="text-6xl pb-4">Dibyendu Das</h4>
                <h4 className="text-3xl pb-4">Full Stack developer.</h4>
                <a
                  href="/"
                  className="bg-white hover:bg-gray-100 text-xl font-medium py-4 px-4 border border-gray-400 rounded shadow inline-flex items-center mr-4 mt-4"
                >
                  Download Resume
                </a>
                <a
                  href="/"
                  className="bg-white hover:bg-gray-100 text-xl font-medium py-4 px-4 border border-gray-400 rounded shadow inline-flex items-center mr-4 mt-4"
                >
                  Connect Me
                </a>
              </div>
            </div>
            <div className="flex-1 text-right">
              <Img
                fixed={data.profileimage.childImageSharp.fixed}
                alt="Robots"
                className="w-6 h-6 object-cover rounded-3xl ring-1 ring-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="about"
      className="h-4/5 px-12 py-12 bg-gradient-to-r from-white via-white to-gray-200 border-b-8 border-gray-100"
    >
      <div className="flex">
        <div className="flex-w-65 px-12 sm:px-12 ">
          <h1>
            <span className="text-5xl">About Me</span> -{" "}
            <span className="text-2xl">In few words, I promise </span>
          </h1>
          <p className="pt-8">
            Dedicated and efficient full stack developer with 14+ years???
            experience in application layers, presentation layers, and
            databases. After completion of bachelor degree in technology,
            started career as LAMP stack developer, in this long journey
            transformed myself to MERN stack & Cloud Developer.
          </p>
          <p className="pt-8">
            I always believe in my analytical power which help me to think
            better way to the solution, - to me,{" "}
            <span className="font-bold">
              you can do better only if you can think better.
            </span>
          </p>
        </div>
        <div className="flex-w-35 ">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div class="max-w-md mx-auto">
                <h1 className="text-3xl text-center">Area of interest</h1>
                <ul class="list-disc space-y-2 py-8">
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2">Cricket, from cricket loving country</p>
                  </li>
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2">Mystery reader - it gives some taste</p>
                  </li>
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2">
                      To explore - Cloud technology, DevOps technics & world of
                      ReactJS & NodeJS
                    </p>
                  </li>
                </ul>
                <h1 className="text-center">
                  " Do not explore everything but I do which I love to."
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="experience"
      className="h-4/5 px-12 py-12 bg-gradient-to-r from-gray-200 via-white to-white border-b-8 border-gray-100"
    >
      <div className="flex">
        <div className="flex-w-65 px-12 sm:px-12 ">
          <h1 className="text-5xl">Experience</h1>
          <p className="pt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue
            scelerisque justo, eget ornare nisi dictum eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc turpis ante, posuere ac
            metus id, fringilla rutrum quam. Nam cursus quam nisl. Nunc
            consequat finibus libero, in dictum ligula condimentum vitae. Nullam
            lobortis tortor id turpis porttitor gravida. Donec hendrerit posuere
            dolor, a pretium mi. Phasellus vitae urna eu justo suscipit pharetra
            vel nec lorem. Nullam sem nisi, faucibus in aliquet vitae, volutpat
            sed orci. Nunc accumsan tempus pretium. Sed efficitur ullamcorper
            sem eget tristique. Etiam sed mi id magna aliquet bibendum ut at
            diam. Etiam vitae urna nec lorem rhoncus ullamcorper. Etiam faucibus
            maximus tellus, id auctor est venenatis sed. Fusce malesuada, eros
            sit amet condimentum ultricies, orci eros malesuada urna, id mollis
            orci lorem quis tellus. Nullam quis odio convallis, congue arcu id,
            porta nisl. Praesent lacinia pulvinar interdum. Aliquam semper, nisl
            nec interdum commodo, lacus lectus pulvinar sapien, vel vestibulum
            est turpis et elit. Maecenas non molestie purus. Praesent diam eros,
            tincidunt id elit eu, eleifend fringilla libero. In congue a turpis
            auctor rhoncus. Duis ac mollis nibh, nec malesuada velit. Morbi
            interdum lobortis nisl, eget iaculis ipsum faucibus sed. Ut sit amet
            quam id metus viverra efficitur eget id mi. Ut vehicula arcu sit
            amet eleifend volutpat. Aenean eleifend velit nec dapibus ornare.
          </p>
        </div>
        <div className="flex-w-35 ">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div class="max-w-md mx-auto">
                <h1 className="text-3xl text-center">Area of interest</h1>
                <ul class="list-disc space-y-2 py-8">
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2">
                      Customizing your
                      <code class="text-sm font-bold text-gray-900">
                        tailwind.config.js
                      </code>
                      file
                    </p>
                  </li>
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2">
                      Extracting classes with
                      <code class="text-sm font-bold text-gray-900">
                        @apply
                      </code>
                    </p>
                  </li>
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="contact"
      className="h-4/5 px-12 py-12 bg-gradient-to-r from-white via-white to-gray-200 border-b-8 border-gray-100"
    >
      <h1 className="text-5xl">Contact</h1>
      <p className="py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue
        scelerisque justo, eget ornare nisi dictum eget. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nunc turpis ante, posuere ac metus
        id, fringilla rutrum quam. Nam cursus quam nisl. Nunc consequat finibus
        libero, in dictum ligula condimentum vitae. Nullam lobortis tortor id
        turpis porttitor gravida. Donec hendrerit posuere dolor, a pretium mi.
        Phasellus vitae urna eu justo suscipit pharetra vel nec lorem. Nullam
        sem nisi, faucibus in aliquet vitae, volutpat sed orci. Nunc accumsan
        tempus pretium. Sed efficitur ullamcorper sem eget tristique. Etiam sed
        mi id magna aliquet bibendum ut at diam. Etiam vitae urna nec lorem
        rhoncus ullamcorper. Etiam faucibus maximus tellus, id auctor est
        venenatis sed. Fusce malesuada, eros sit amet condimentum ultricies,
        orci eros malesuada urna, id mollis orci lorem quis tellus. Nullam quis
        odio convallis, congue arcu id, porta nisl. Praesent lacinia pulvinar
        interdum. Aliquam semper, nisl nec interdum commodo, lacus lectus
        pulvinar sapien, vel vestibulum est turpis et elit. Maecenas non
        molestie purus. Praesent diam eros, tincidunt id elit eu, eleifend
        fringilla libero. In congue a turpis auctor rhoncus. Duis ac mollis
        nibh, nec malesuada velit. Morbi interdum lobortis nisl, eget iaculis
        ipsum faucibus sed. Ut sit amet quam id metus viverra efficitur eget id
        mi. Ut vehicula arcu sit amet eleifend volutpat. Aenean eleifend velit
        nec dapibus ornare. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Quisque eget turpis
        consequat, porttitor nisi at, tincidunt lacus. Vestibulum fermentum
        risus vitae mauris fringilla posuere. Aenean eleifend orci sed sodales
        feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nam ullamcorper lacus vitae nibh fringilla, nec scelerisque enim
        sagittis. Maecenas bibendum id nisi et aliquam. Phasellus odio tellus,
        blandit nec mauris ut, molestie cursus orci. Maecenas porttitor pulvinar
        mauris id vehicula. Praesent sit amet nisl tincidunt, interdum nibh a,
        efficitur mi. Nunc tellus est, lobortis a massa eu, tempus tempus ipsum.
        Nunc pharetra molestie enim, eu imperdiet odio feugiat id. Mauris
        aliquam, risus ac porttitor porta, metus metus sagittis lorem, vel
        mollis nunc nisl nec mauris. Vestibulum nunc ipsum, efficitur a
        ullamcorper in, iaculis vitae elit. Pellentesque venenatis ut eros
        ullamcorper suscipit. Duis malesuada felis metus, non suscipit turpis
        volutpat sit amet. Morbi volutpat iaculis lacus, sit amet gravida sapien
        ornare ut. Aliquam vel diam mi. Nunc et arcu in turpis dictum laoreet.
        Sed dignissim, odio et iaculis bibendum, sapien nulla placerat erat, a
        sodales sapien felis sit amet dolor. Etiam sodales, enim eget ultricies
        rhoncus, dolor velit suscipit urna, et rutrum diam magna id ligula.
        Maecenas eu velit lacus. Sed pharetra augue lorem, et facilisis odio
        imperdiet id. Nulla a tincidunt neque. Cras nisl ligula, ultrices id
        iaculis eu, tincidunt eu leo. Morbi consectetur massa vitae lobortis
        faucibus. Integer condimentum, ipsum ut porttitor auctor, arcu ipsum
        hendrerit risus, at pellentesque sapien lacus at nisi. Morbi lacinia
        vitae tortor a ultricies. Nullam ut semper lectus, id ornare nulla.
        Quisque aliquam nisi vel diam luctus, eu feugiat ligula molestie.
        Vivamus tempus eget arcu in tincidunt. Phasellus justo felis, elementum
        vitae mattis in, vehicula et dui. Nullam dictum congue nisi ut posuere.
        Nunc at pharetra magna. Donec eget erat non urna fermentum lobortis
        mollis in ex.
      </p>
    </section>
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    profileimage: file(relativePath: { eq: "mypic.jpg" }) {
      childImageSharp {
        fixed(height: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
