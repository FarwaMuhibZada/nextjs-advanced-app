
# Next.js Advanced Application 💾
 is a Next.js web application that allows users to view blog posts, explore user profiles, and discover team insights. The platform supports both Static Site Generation (SSG) and Server-Side Rendering (SSR) for efficient data handling. The app features a responsive design powered by Tailwind CSS, making it accessible on all devices.

## Features 🎉
- **Home Page**: A welcoming introduction to the application with navigation links to other sections.
- **About Page**: Provides information about the application and its purpose.
- **User Profiles**: Display a list of users, and clicking on a user will show their profile details.
- **Blog Posts**: Display a list of blog posts, and clicking on a post will navigate to a detailed view of the post.
- **Responsive Design**: The application is designed to be mobile-friendly using Tailwind CSS.

- Responsive Design: The application is designed to work seamlessly across various devices.


## DEMO 📺
[Deployment Link](https://nextjs-advanced-app.vercel.app/)

### Installation 🔊
### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or later)
- npm or Yarn

## Getting Started ⚙

Follow these instructions to set up and run the project locally.


1. **Clone the repository:**
    ```
    git clone https://github.com/your-username/tech-insights-blog.git
    cd tech-insights-blog
    ```

2. **Install dependencies:**
    ```
    npm install
    # or
    yarn install
    ```

### Running the Development Server

Start the development server with:


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Project Structure

```
my-nextjs-blog-app/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── posts/
│   │   │   │   └── route.ts     # API route to fetch blog posts
│   │   │   ├── profile/
│   │   │   │   └── route.ts     # API route to fetch user profile
│   │   ├── layout.tsx           # Global layout with Navbar & Footer
│   │   ├── globals.css          # Tailwind global styles
│   │   ├── page.tsx             # Homepage
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── profile/
│   │   │   └── page.tsx         # User profile page
│   │   ├── posts/
│   │   │   ├── page.tsx         # Blog posts list page
│   │   │   └── [id]/
│   │   │       └── page.tsx     # Dynamic single blog post page
│   ├── components/
│   │   ├── Navbar.tsx           # Navbar component
│   │   ├── Footer.tsx           # Footer component
│   ├── styles/
│   │   └── globals.css          # Tailwind CSS styles
├── public/
│   └── images/                  # Public images
├── .env.local                   # Environment variables
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
├── package.json
├── tsconfig.json                 # TypeScript config
└── README.md
```

## Technologies Used

- **Next.js**: A React framework for server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Vercel**: Deployed on Vercel for easy hosting and continuous integration.

## Author

- **Farwa Muhibzada** - 

[GitHub Profile](https://github.com/FarwaMuhibZada)

[Linkdin](https://www.linkedin.com/in/farwamohibzada/)


### Contributing 🧑

Feel free to open issues or submit pull requests. Make sure to follow the project's code style and include tests for new features.