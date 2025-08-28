import Header from "@/components/header"
import { Badge, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { db } from "@/lib/prisma"
import BarberShopItems from "@/components/barbershop-items"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Welcome</h2>
        <p>Quarta-Feira, 27 de Agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores horários"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamento
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="text-sm font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6 rounded-full">
                  <AvatarImage
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <AvatarFallback>FSW</AvatarFallback>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5 text-center">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl font-bold">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItems key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
