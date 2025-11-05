import { useEffect } from "react"
import { getUserAction } from "./get-user-action"


export const ClientInformation = async({ id}: { id: number }) => {
    // const user = await getUserAction(id)
    
    // useEffect(() => {
    //     getUserAction(id).then(console.log)
    // }, [id])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">Leo - #123</h2>

            <p className="text-2xl text-white">Ottawa- Canada</p>
            <p className="text-xl text-white">Un rol del usuario</p>
        </div>
    )
}