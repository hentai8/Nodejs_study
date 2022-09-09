export type GetBlockInfoRequest = {
    search?: string
    hash?: string
    sequence?: number
}

export function getBlockInfo(
    params: GetBlockInfoRequest
): number {
    console.log('123')
    console.log(params)
    return 0
}

// export default getBlockInfo