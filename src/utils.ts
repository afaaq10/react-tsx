export const shuffArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

