import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Loader } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import MasterRoutes from './Routes/MasterRoutes';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <MasterRoutes />
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
