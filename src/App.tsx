import React, {FC} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {RedditContainer} from './components/Reddit';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5000,
    }
  }
});

// const testTweet: TweetModel = {
//   message: 'Something about cats.',
//   gravatar: 'xyz',
//   author: {
//     handle: 'catperson',
//     name: 'IAMA Cat Person',
//   },
//   likes: 2,
//   retweets: 0,
//   timestamp: new Date('2016-07-30 21:24:37'),
// };

export const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <RedditContainer/>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
);
