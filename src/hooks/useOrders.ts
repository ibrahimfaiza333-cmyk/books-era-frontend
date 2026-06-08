import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query"
import {
    getOrders as getOrdersApi,
    getOrderById as getOrderByIdApi,
    cancelOrder as cancelOrderApi,
    validateCoupon as validateCouponApi,
    createOrder as createOrderApi,
    type CancelOrderPayload,
    type ValidateCouponPayload,
    type CreateOrderPayload,
} from "../api/orders.api"
import { queryKeys } from "../lib/query-keys"
import { useAppSelector } from "../store/hooks"

export function useOrdersList(page: number) {
    const { isLoggedIn } = useAppSelector(state => state.auth)
    return useQuery({
        queryKey: queryKeys.orders(page),
        placeholderData: keepPreviousData,
        queryFn: () => getOrdersApi(page),
        enabled: isLoggedIn,
    })
}

export function useOrderDetail(id: string | undefined) {
    const { isLoggedIn } = useAppSelector(state => state.auth)
    return useQuery({
        queryKey: queryKeys.order(id),
        queryFn: () => getOrderByIdApi(id!),
        enabled: isLoggedIn && !!id,
    })
}

export function useOrders() {
    const queryClient = useQueryClient()

    const cancelOrder = async (id: string, payload: CancelOrderPayload) => {
        await cancelOrderApi(id, payload)
        await queryClient.invalidateQueries({ queryKey: queryKeys.order(id) })
        await queryClient.invalidateQueries({ queryKey: queryKeys.ordersRoot })
    }

    const validateCoupon = (payload: ValidateCouponPayload) =>
        validateCouponApi(payload)

    const createOrder = async (payload: CreateOrderPayload) => {
        const order = await createOrderApi(payload)
        await queryClient.invalidateQueries({ queryKey: queryKeys.cart })
        await queryClient.invalidateQueries({ queryKey: queryKeys.ordersRoot })
        return order
    }

    return {
        cancelOrder,
        validateCoupon,
        createOrder,
    }
}
