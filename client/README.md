# Sniffle Pets - Landing Page

Welcome to the repository for the Sniffle Pets landing page. This project was built using **React** and **Vite** for a blazing-fast, modern web experience.

## Live Website

The site is currently live and deployed via [deployed platform]:
**[Insert your Deployed Live URL here, e.g., [https://my-project.vercel.app](https://www.google.com/search?q=https://my-project.vercel.app)]**

## Tech Stack

* **Framework:** React
* **Build Tool:** Vite
* **Deployment:** Vercel
* **Styling:** tailwind CSS, CSS 

---

## Getting Started for Developers

If you are a developer looking to run this project locally on your machine, follow the steps below.

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

**1. Clone the repository:**
Run `git clone [Insert the GitHub Repo URL here]` in your terminal.

**2. Navigate into the project folders:**
First, enter the main repository folder:
 Run `cd SnifflePetsLandingPage`
Then, enter the frontend folder where the React app lives:
Run `cd client`

**3. Install the dependencies:**
Run `npm install`.

### Running the Development Server

To start the local development server, run:
`npm run dev`

Open your browser and visit `http://localhost:5173` to view the site locally.

---

## Available Scripts

In the project directory, you can run:

* **`npm run dev`**: Starts the local development server.
* **`npm run build`**: Builds the app for production to the `dist` folder.
* **`npm run preview`**: Bootstraps a local static web server that serves the files from `dist` to preview the production build.

---

## Deployment Guide

There are two ways to host this website.

**Vercel** is highly recommended because it is completely free, lightning-fast, and updates automatically. **GoDaddy** is a traditional paid hosting route if you want to keep all your billing (Domain and Hosting) under one specific company.

---

### Option 1: Vercel (Free & Automated - You can also use it to test the site for free)

Vercel is the company that created the infrastructure for modern React apps. It provides free hosting for landing pages and will automatically update your live website anytime new code is saved to this GitHub repository.

**How to set it up:**

1. Go to [Vercel.com](https://vercel.com) and sign up for a free account using your GitHub login.
2. From your Vercel dashboard, click **Add New** > **Project**.
3. It will show a list of your GitHub repositories. Find **SnifflePetsLandingPage** and click **Import**.
4. ⚠️ **CRITICAL STEP:** Before you click deploy, look for the setting labeled **"Root Directory"**. Click the **Edit** button next to it, select the **`client`** folder, and click save.
5. Vercel will automatically detect that this is a Vite/React project. Leave all other default settings exactly as they are.
6. Click **Deploy**. Vercel will build the site and give you a live link.
*(Note: You can easily buy a custom domain directly through Vercel, or connect one you already own).*

---

### Option 2: GoDaddy (Paid Traditional Hosting)

If you prefer to use GoDaddy, you will need to purchase two things:

1. **A Domain Name:** (e.g., `yourbusiness.com`)
2. **A Web Hosting Plan:** Because this is a highly optimized, modern React/Vite application, it does not require heavy server processing. You only need to purchase the cheapest **"Web Hosting Economy"** plan (which includes cPanel/Linux).
*⚠️ **Important:** Do NOT buy "WordPress Hosting", "VPS", or "Web Hosting Plus". This app is custom-coded and does not use WordPress, so buying those plans would be a waste of money.*

**How to deploy to GoDaddy:**

Since GoDaddy does not update automatically like Vercel, a developer must manually bundle the code and upload it every time a change is made.

**Step 1: Create the Production Build**
Open your terminal, make sure you are inside the `client` folder (`cd client`), and run:
`npm run build`
This compresses the entire application into a single folder named `dist` inside your client directory.

**Step 2: Zip the Files**
Open the new `dist` folder on your computer. Select **all the files inside it** (do not zip the folder itself, just the contents inside) and compress them into a `.zip` file.

**Step 3: Upload to cPanel**

1. Log into your GoDaddy account and open your **cPanel / Web Hosting Dashboard**.
2. Click on **File Manager**.
3. Open the **`public_html`** folder (this is the folder connected to your live domain).
4. Click **Upload** at the top of the screen and select the `.zip` file.

**Step 4: Go Live**

1. Once uploaded, right-click the `.zip` file inside `public_html` and select **Extract**.
2. Delete the `.zip` file to save space. Your website is now live!

**Step 5: Routing Fix (.htaccess)**
Because this is a React app, you must tell GoDaddy how to handle page refreshes. In your `public_html` folder, create a new file named `.htaccess` and paste this exact code inside it:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

```
