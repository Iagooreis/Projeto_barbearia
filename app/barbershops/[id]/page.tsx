import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import { ChevronsLeftIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BarberShopPageProps {
  params: {
    id: string
  }
}

const BarberShopPage = async ({ params }: BarberShopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop!.imageUrl}
          alt={barbershop!.name}
          fill
          className="object-cover"
        />

        <Button size="icon" className="absolute left-4 top-4" asChild>
          <Link href="/">
            <ChevronsLeftIcon />
          </Link>
        </Button>

        <Button size="icon" className="absolute right-4 top-4">
          <MenuIcon />
        </Button>
      </div>
    </div>
  )
}

export default BarberShopPage
