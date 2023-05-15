This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dependencies

```
Node.js > 16
```

## Getting Started

Install the dependencies and run the development server

```bash
npm install
npm run dev
```

## Database Setup

This project uses Supabase DB. Create an account here: https://supabase.com/

Create a new project and get the URL and API key. Create a new file `.env.local` and set the URL and the key as follows:

```
NEXT_PUBLIC_SUPABASE_URL=<url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon_key>
```

Restart the server.

Create a new table in the database called "marks". 

If you are using a different table name, make sure to update it here: https://github.com/yedhukrishnan/react-workshop-app/blob/0da0ab9e5e6f59df146cf32000ed34c0c832542a/lib/database.js#L3). 

Turn off row level security while creating the table.

Add the following columns in the table and create a few rows if required:

![image](https://raw.githubusercontent.com/yedhukrishnan/react-workshop-app/main/images/table.png)

Run the app and visit the paths: 

- `localhost:3000/greet`
- `localhost:3000/student`

## Deployment

<< To be updated >>

Here is a deployed version of the app:

Greet page: https://student-management-vp80du4a9-vpyedhukrishnan-gmailcom.vercel.app/greet

Student Marks page (Use ID 123): https://student-management-vp80du4a9-vpyedhukrishnan-gmailcom.vercel.app/student
