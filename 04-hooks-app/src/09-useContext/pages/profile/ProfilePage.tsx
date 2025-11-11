import { useContext } from "react"
import { Button } from "../../../components/ui/button"
import { UserContext } from "../../context/UserContext"

export const ProfilePage = () => {
  const { user, logout } = useContext(UserContext)
  

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />

      <pre className="my-4 w-auto overflow-auto">{JSON.stringify(user, null, 2)}</pre>
      <Button variant="destructive" onClick={logout}>Salir</Button>
    </div>
  )
}