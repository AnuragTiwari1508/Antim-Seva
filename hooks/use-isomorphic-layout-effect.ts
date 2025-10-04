import { useEffect, useLayoutEffect } from 'react'

// Use useLayoutEffect only on the client side to avoid SSR warnings
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect