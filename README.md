# For Sh!ts and Giggles

[![Azure DevOps](https://img.shields.io/badge/Deployed%20via-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/For%20Sh!ts%20and%20Giggles)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://for-shits-and-giggles-c0e5adh6hmhbfhhs.canadacentral-01.azurewebsites.net/)

This repository contains the source code for **For Sh!ts and Giggles**, a dark-humored web app that fetches jokes using the **[JokeAPI](https://v2.jokeapi.dev/)**. Users can get random jokes or customize their search using categories, blacklist flags, type, and keywords in either English or French. The project focuses on building **RESTful API integrations**, handling **dynamic query parameters**, and creating a modern, responsive UI with a dark aesthetic.

---

## 🖥️ Live Website

👉 **[For Sh!ts and Giggles](https://for-shits-and-giggles-c0e5adh6hmhbfhhs.canadacentral-01.azurewebsites.net/)** _(Hosted on Microsoft Azure)_
👉 **[Azure DevOps Project](https://dev.azure.com/Junaid-Arif/For%20Sh!ts%20and%20Giggles)**

---

## 🎯 Purpose

**For Sh!ts and Giggles** was created to deepen my understanding of:

- Building full-stack web apps with **Node.js**, **Express**, and **EJS**.
- Making **RESTful API requests** from a server-side app.
- Structuring API **endpoints**, **path parameters**, and **dynamic query parameters**.
- Using **Axios** for promise-based HTTP requests.
- Applying **asynchronous programming** concepts like `async/await` and handling **promises**.
- Dynamically rendering content using **EJS** templating.
- Designing for **responsive dark mode UIs** using **CSS Grid** and **Flexbox**.
- Deploying apps using **Azure App Service** and **Azure DevOps** CI/CD pipelines.

---

## 🛠️ Features

- **Random Joke Fetching**: Generates a joke as per the user's selected filters.
- **Custom Filtering**: Users can filter by categories, blacklist certain flags, select joke type, and even add keyword search.
- **Dynamic Server-Side Requests**: Utilizes **Axios** to fetch jokes from [JokeAPI](https://v2.jokeapi.dev/).
- **Persistent Form Values**: User selections remain after submission to streamline multiple requests.
- **Responsive Dark-Themed UI**: Modern and mobile-friendly design that matches the humor tone.
- **Error Handling**: Displays user-friendly error messages when no joke is found.
- **Dynamic Footer**: Includes real-time year and social/contact links.

---

## 💻 Technologies Used

- **Node.js** — Server runtime.
- **Express** — Web framework.
- **EJS** — Templating engine for dynamic content.
- **Axios** — For making HTTP requests.
- **Body-Parser** — Middleware for parsing form inputs.
- **HTML5 / CSS3** — Front-end layout and styling.
- **Microsoft Azure App Service** — Hosting platform.
- **Azure DevOps** — For CI/CD and repository management.
- **GitHub** — Source control and collaboration.

---

## 🧠 What I Learned

- Structuring **dynamic RESTful API requests** with **path and query parameters**.
- Handling **server-side API requests** using **Axios** and understanding the **request/response lifecycle**.
- Implementing **async/await** patterns for efficient asynchronous programming.
- Validating and rendering API responses dynamically with **EJS**.
- Maintaining **form state persistence** between user submissions.
- Applying **responsive design principles** tailored for dark-mode UIs.
- Creating and managing **CI/CD pipelines** using Azure DevOps.
- Deploying full-stack applications seamlessly to **Azure App Service**.

---

## 🚀 Deployment & Workflow

The app is deployed to **Microsoft Azure App Service** and integrated with **Azure DevOps** for continuous deployment.

### 🛠 Deployment Setup (Steps I Took)

1. **Created Azure App Service**

   - Set up a new App Service instance.

2. **Created GitHub Repo**

   - Initialized a new GitHub repository (`For-Shits-and-Giggles`) and pushed all project files.

3. **Created Azure DevOps Project**

   - Created a new project in Azure DevOps named _For Sh!ts and Giggles_.

4. **Added Azure DevOps as Git Remote**

   ```bash
   git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/For%20Shits%20and%20Giggles/_git/For%20Shits%20and%20Giggles
   git push azure main
   ```

5. **Push to Both Remotes**

   ```bash
   git push origin main   # GitHub
   git push azure main    # Azure DevOps triggers deployment
   ```

6. **Linked Azure DevOps to App Service**

   - Configured Deployment Center in Azure App Service to pull from Azure DevOps.

7. **Tested CI/CD**

   - Confirmed that commits to Azure DevOps trigger automatic deployments.

8. **Port Configuration**

   ```javascript
   const port = process.env.PORT || 3000;
   ```

---

### 🔥 Deployment Workflow (Current)

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Updates GitHub
git push azure main    # Updates Azure DevOps & deploys automatically
```

---

## 🤝 Contribution

This project was built for learning and portfolio purposes, but feel free to fork the repository and submit pull requests if you'd like to propose new features or improvements!

---

## 📄 License

This project is open-source and available for personal use, learning, and modification.

---

## 🔗 Credits

- **JokeAPI** — [v2.jokeapi.dev](https://v2.jokeapi.dev/)
- UI design inspired by modern dark-mode best practices.
