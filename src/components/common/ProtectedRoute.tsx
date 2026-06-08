"use client";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../store/hooks"

interface Props {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
    const { isLoggedIn } = useAppSelector(state => state.auth)
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Only redirect AFTER mount — this ensures localStorage has been read
    // and Redux store is properly hydrated before we check auth status
    useEffect(() => {
        if (mounted && !isLoggedIn) {
            router.replace("/login")
        }
    }, [mounted, isLoggedIn, router])

    // Don't render anything until mounted (avoids flash redirect on new browsers)
    if (!mounted) return null;
    if (!isLoggedIn) return null;
    return <>{children}</>
}

export default ProtectedRoute;