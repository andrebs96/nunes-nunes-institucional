// import Head from 'next/head'
import styles from 'styles/Home.module.css'
import * as S from 'styles/styles'

export default function Home() {
  async function handleOnSubmit(e) {
    e.preventDefault()

    const formData = {}

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
  }
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact me for cool stuff!" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>

        <p className={styles.description}>Please be human!</p>

        <div className={styles.grid}>
          <S.Form onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </p>
            <p>
              <button>Submit</button>
            </p>
          </S.Form>
        </div>
      </main>
    </div>
  )
}
