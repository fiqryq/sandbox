import { toast } from 'react-toastify'

type IToast = {
    title: string,
    time: number
}

export const ToastInfo = (props: IToast) => {
    toast.info(props.title, {
        position: "bottom-center",
        autoClose: props.time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export const ToastSuccess = (props: IToast) => {
    toast.success(props.title, {
        position: "bottom-center",
        autoClose: props.time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export const ToastWarning = (props: IToast) => {
    toast.warning(props.title, {
        position: "bottom-center",
        autoClose: props.time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const ToastDefault = (props: IToast) => {
    toast(props.title, {
        position: "bottom-center",
        autoClose: props.time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const ToastError = (props: IToast) => {
    toast.error(props.title, {
        position: "bottom-center",
        autoClose: props.time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
