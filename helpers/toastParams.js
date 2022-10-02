import { toast } from "react-toastify"

export const dismissToast = (toastId) => {
    toast.dismiss(toastId)
}

export const notify = (toastId) => toastId.current = toast.loading('Veuillez patienter...')