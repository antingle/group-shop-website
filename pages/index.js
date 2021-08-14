import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sun from "../components/Sun.js";
import Moon from "../components/Moon.js";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme, colors } = useTheme();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("EMAIL", event.target.email.value);

    var requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://groupshop.us5.list-manage.com/subscribe/post?u=cee7cbb34cb37181a6f89c404&amp;id=6b00adb528",
      requestOptions
    ).then(() => setCompleted(true));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Group Shop</title>
        <meta
          name="description"
          content="Group Shop - The easy way to shop with friends and family in realtime"
        />
        <meta
          name="keywords"
          content="shop, shopping, together, realtime, app, group, friends, family, list, shopping list, shopping app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wave />
      <main className={styles.main}>
        <div className={styles.themeRow}>
          <Sun /> <Moon />
        </div>
        <header className={styles.flexRow}>
          <h1 className={styles.title} style={{ color: colors.foreground }}>
            Group Shop
          </h1>
          <Image
            src={`/shoppingcart${theme}.svg`}
            alt="Shopping Cart"
            width={70}
            height={70}
            className={`${theme == "light" ? "shoplight" : "shopdark"}`}
            onAnimationEnd={(e) => (e.target.className = "")}
          />
        </header>
        <section className={styles.description}>
          <h1 className={styles.heading} style={{ color: colors.foreground }}>
            The easy way to shop with friends and family
          </h1>
          <h2
            className={styles.subHeading}
            style={{ color: colors.background }}
          >
            Create, join and edit shopping lists in realtime
          </h2>
        </section>
        <section className={styles.emailSection}>
          <div className={styles.notify}>
            <h2
              className={styles.headingDark}
              style={{ color: colors.opposite }}
            >
              {!completed
                ? "Get notified as soon as it's out!"
                : "Thank you for your interest! We will be in touch!"}
            </h2>
            {!completed && (
              <form
                className={styles.flexRow}
                onSubmit={handleSubmit}
                action="https://groupshop.us5.list-manage.com/subscribe/post?u=cee7cbb34cb37181a6f89c404&amp;id=6b00adb528"
                target="_blank"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
              >
                <input
                  type="email"
                  name="email"
                  className={styles.email}
                  style={{
                    backgroundColor: colors.foreground,
                    color: colors.opposite,
                  }}
                  spellCheck={false}
                  required
                  placeholder="Enter your email"
                ></input>
                <button
                  type="submit"
                  className={styles.button}
                  style={{ color: colors.foreground }}
                >
                  Get notified!
                </button>
              </form>
            )}
          </div>
          <Image
            src={`/appmockup${theme}.png`}
            alt="App Screenshot"
            width={400}
            height={700}
            quality={100}
            loading="eager"
            className={`appImage ${theme == "light" ? "light" : "dark"}
            }`}
            onAnimationEnd={(e) => (e.target.className = "appImage")}
          />
        </section>
      </main>
      <style jsx global>{`
        body {
          background: ${colors.background};
        }
      `}</style>
    </div>
  );
}

function Wave() {
  return (
    <svg
      className={styles.wave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#2DDB74"
        fillOpacity="1"
        d="M0,288L60,282.7C120,277,240,267,360,266.7C480,267,600,277,720,288C840,299,960,309,1080,288C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  );
}
