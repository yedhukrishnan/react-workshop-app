This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

## Database Setup

This project uses Supabase DB. Create an account here: https://supabase.com/

Create a new project and get the URL and API key.

Create a new file `.env.local` and set the URL and the key as follows:

```
NEXT_PUBLIC_SUPABASE_URL=<url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon_key>
```

Restart the server.

Create a new table in the database called "marks" (If you are using a different table name, make sure to update it here: https://github.com/yedhukrishnan/react-workshop-app/blob/0da0ab9e5e6f59df146cf32000ed34c0c832542a/lib/database.js#L3). Make sure to turn off row level security while creating the table.

Add the following columns and create a few rows if required:







Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
