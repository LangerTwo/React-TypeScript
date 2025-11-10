import { use, type Usable } from "react"
import { type User } from "./get-user-action"

// const usePromise = getUserAction(1);
interface Props {
    getUser: Usable<User>;
}


export const ClientInformation = ({ getUser }: Props) => {
    const user = use(getUser)
    // const user = use(usePromise)
    // const user = await getUserAction(id)
    
    // useEffect(() => {
    //     getUserAction(id).then(console.log)
    // }, [id])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            {/* <h2 className="text-4xl font-thin text-white">Leo - #123</h2> */}
            <h2 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h2>

            <p className="text-2xl text-white">{user.location}</p>
            <p className="text-xl text-white">{user.role}</p>
        </div>
    )
}