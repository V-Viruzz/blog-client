import { User } from "firebase/auth"

interface Props {
  user: User
  signOutUser: () => Promise<void>
}

const ProfileUser: React.FC<Props> = ({ user, signOutUser }) => {
  const handleClickSignOut = async (): Promise<void> => {
    await signOutUser()
  }

  return (
    <section className="flex flex-col w-80% h-2xl ">
      <div>
        <img className="rounded-100% w-20 h-20" src="https://hubs.belmontforum.org/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png" alt="" />
      </div>

      <div className="flex flex-col text-xl py-10 gap-3 text-zinc-5">
        <div>
          name: {user.displayName ? user.displayName : 'Anonymous'}
        </div>
        <div>
          email: {user.email}
        </div>
      </div>

      <div>
        <button
          className="h-10 w-30"
          onClick={handleClickSignOut}>Sign out</button>
      </div>
    </section>
  )
}

export default ProfileUser
