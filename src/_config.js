export const process = {
  dev: false,
  text: "test text"
}

export const site = {
  home: process.dev ? 'http://localhost:8080' : 'http://test.com'
}

export const app = {
  title: "Template"
}

export const links = [
      {
        title: "Home",
        alias: "home",
        url: "/",
      },
      {
        title: "About",
        alias: "about",
        url: "/about"
      },
];
