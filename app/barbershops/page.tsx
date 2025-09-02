import Header from "@/components/header"
import Search from "@/components/search"
import { db } from "@/lib/prisma"
import BarbershopItem from "@/components/barbershop-items"

interface BarberShopPageProps {
  searchParams: {
    search?: string
  }
}

const BarbershopPage = async ({ searchParams }: BarberShopPageProps) => {
  const search = searchParams.search ?? "" // garante string

  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopPage
