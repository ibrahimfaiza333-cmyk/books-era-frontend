"use client";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../store/hooks"

interface Props {
    children: React.ReactNode
}

const AdminRoute = ({ children }: Props) => {
    const { isLoggedIn, user } = useAppSelector(state => state.auth)
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Only redirect AFTER mount — ensures localStorage is read and Redux is hydrated
    useEffect(() => {
        if (mounted && !isLoggedIn) router.replace("/login")
        else if (mounted && user?.role !== "admin") router.replace("/")
    }, [mounted, isLoggedIn, user, router])

    if (!mounted) return null;
    if (!isLoggedIn || user?.role !== "admin") return null;
    return <>{children}</>
}

export default AdminRoute