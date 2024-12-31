import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useDidMount } from '@/libs/hooks'
import { setShowSplash } from '@/libs/stores/models/layout'

/* ------------------------------ Start ------------------------------*/
export const RouteListener = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const didMount = useDidMount()

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      if (url === '/dashboard') {
        console.log('routeChangeStart', url)
        dispatch(setShowSplash(true)) // Tampilkan SplashScreen saat menuju /dashboard
      }
    }

    const handleRouteChangeComplete = (url: string) => {
      if (url === '/dashboard') {
        console.log('routeChangeComplete', url)
        setTimeout(() => {
          dispatch(setShowSplash(false)) // Sembunyikan SplashScreen setelah rute selesai
        }, 1000) // Sesuaikan durasi SplashScreen
      }
    }

    // Register event listeners
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // Cleanup event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router, dispatch])

  return null // Komponen ini tidak perlu merender apa pun
}
