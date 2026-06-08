import { useQuery, useQueryClient } from "@tanstack/react-query"
import {
    getWishlist as getWishlistApi,
    addToWishlist as addToWishlistApi,
    removeFromWishlist as removeFromWishlistApi,
} from "../api/wishlist.api"
import { queryKeys } from "../lib/query-keys"
import { useAppSelector } from "../store/hooks"

export function useWishlist() {
    const queryClient = useQueryClient()
    const { isLoggedIn } = useAppSelector(state => state.auth)

    const query = useQuery({
        queryKey: queryKeys.wishlist,
        queryFn: getWishlistApi,
        // Only fetch when logged in — prevents cross-browser cookie leak
        enabled: isLoggedIn,
    })

    const invalidateWishlist = () =>
        queryClient.invalidateQueries({ queryKey: queryKeys.wishlist })

    const addToWishlist = async (bookId: string) => {
        await addToWishlistApi(bookId)
        await invalidateWishlist()
    }

    const removeFromWishlist = async (bookId: string) => {
        await removeFromWishlistApi(bookId)
        await invalidateWishlist()
    }

    return {
        wishlist: query.data,
        isLoading: query.isLoading,
        addToWishlist,
        removeFromWishlist,
    }
}
