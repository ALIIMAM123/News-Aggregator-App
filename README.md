This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!--     ==============================     Added Functionality =============================   -->

### Features Implemented

1. Integrated **NewsAPI** to fetch live news articles from a public news API.  
2. Fetched and displayed data in the form of cards.  
3. Displayed **4 items per page** for better readability and performance.  
4. Implemented **Sorting** based on news categories.  
5. Implemented **Searching** based on news descriptions.  
6. Implemented **Pagination** for smooth navigation through multiple pages of news articles.  
7. Implemented **Dark Mode and Light Mode** with local storage to persist the user's theme preference.  
8. API key usage is limited to **100 requests per 24 hours**, as it is intended for **developer mode**. Exceeding the limit may cause the key to expire temporarily.  

### Note on API Usage

The app uses a free API key intended for **developer mode**, which has a limit of **100 requests per 24 hours**. Please be aware that if the request limit is exceeded, the API key may expire or become temporarily inactive. For continuous usage, consider using a premium API key or handling rate limits appropriately.



<!-- =================================================================================================== -->
