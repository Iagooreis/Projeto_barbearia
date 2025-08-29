import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-500">
            &copy; 2023 Copyright{" "}
            <span className="font-semibold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
