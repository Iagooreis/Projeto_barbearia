import Header from "@/components/header"
import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Welcome to Our Barber Shop</h2>
        <p>Quarta-Feira, 27 de Agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="banner-01.jpg"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores horários"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
