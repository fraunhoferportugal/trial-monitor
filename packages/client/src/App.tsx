import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './auth'
import { UIConfigProvider } from './config-provider'
import RouterProvider from './RouterProvider'
import { globalStyles } from './theme'
import ThemeApplier from './theme/ThemeApplier'
import * as Tooltip from '@radix-ui/react-tooltip'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App () {
  globalStyles()

  return (
    <Tooltip.Provider>
      <QueryClientProvider client={queryClient}>
        <UIConfigProvider>
          <ThemeApplier>
            <AuthProvider>
              <RouterProvider />
            </AuthProvider>
          </ThemeApplier>
        </UIConfigProvider>
      </QueryClientProvider>
    </Tooltip.Provider>
  )
}

export default App
