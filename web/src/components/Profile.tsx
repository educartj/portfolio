import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUser } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Avatar>
        <AvatarImage src={avatarUrl} width={40} height={40} alt={name} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
