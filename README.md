<div align="center">
    <h1>🧲 YAPIS API</h1>
</div>
<div align="center">
<p>Simple api | login api dengan teknologi terkini |</p>
</div>
app ini dalam masa pengembangan jadi terdapat fitur yang sekarang adapun di beberapa saat akan dihapus dan banyak perubahan di jangka waktu pendek atau tidak terdapat long time support .lts

---

<div align="center">

[![contributions - welcome](https://img.shields.io/badge/contributions-welcome-blue)](/CONTRIBUTING.md "Go to contributions doc")
[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/ "Go to GitHub Pages homepage")
[![Made with TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://typescriptlang.org "Go to TypeScript homepage")
[![Made with PostgreSQL](https://img.shields.io/badge/PostgreSQL-latest-blue?logo=postgresql&logoColor=white)](https://www.postgresql.org/ "Go to PostgresSQL homepage")

</div>

---

_ENDPOINT_ :

    http://.../

---

<div align="center">
    <h3>ROUTES</h3>
</div>

#### GET ALL USER

method : `GET`

    https://.../get

---

#### SIGN ACCOUNT

method : `POST`

| request body | type     | desc |
| ------------ | -------- | ---- |
| `username`   | _string_ | -    |
| `password`   | _string_ | -    |

    https://.../sign

---

#### LOGIN ACCOUNT (SAVED)

method : `POST`

| request body | type     | desc |
| ------------ | -------- | ---- |
| `username`   | _string_ | -    |
| `password`   | _string_ | -    |

    https://.../login

```md
src
│   ├── components [ ALL OF COMPONENTS ]
│   │   └── TemplateJSON.ts (SENDER JSON)
│   ├── index.ts (APP FILE)
│   └── utils
│   ├── Controllers.ts (CONTROLLER ROUTER)
│   └── Routes.ts (ROUTES FILE)
└── tsconfig.json
```
