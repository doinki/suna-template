import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link href="/circle.svg" rel="icon" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              '(()=>{let e="dark",t="theme",c=t=>{t?document.documentElement.classList.add(e):document.documentElement.classList.remove(e)};window.__setPreferredTheme=a=>{c(a===e);try{localStorage.setItem(t,a)}catch(e){}};let a=matchMedia("(prefers-color-scheme: dark)"),m=a=>{let m;try{m=localStorage.getItem(t)}catch(e){}c(m===e||null==m&&a)};m(a.matches),a.addEventListener("change",e=>{m(e.matches)})})();',
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
