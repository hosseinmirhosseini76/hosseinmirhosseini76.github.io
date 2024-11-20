export const useDelay = (delayInms: number) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms))
}
