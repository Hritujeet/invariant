import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Button } from "../ui/button"
import { Badge } from '../ui/badge'

const TechCard = () => {
  return (
    <Card className='hover:ring-primary/20 duration-300 hover:-translate-y-1 cursor-default'>
      <CardContent className='space-y-4'>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Project JOSEPHINE</h1>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem saepe, nihil incidunt nostrum adipisci impedit cumque libero culpa! Saepe quas debitis recusandae consequatur aliquam omnis nulla, officiis error iure.</p>

        <div className='flex flex-wrap gap-1 my-2'>
          <Badge variant={"outline"}>NextJS</Badge>
          <Badge variant={"outline"}>React</Badge>
          <Badge variant={"outline"}>Typescript</Badge>
          <Badge variant={"outline"}>TailwindCSS</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className={"w-full cursor-pointer"}>View Project</Button>
      </CardFooter>
    </Card>
  )
}

export default TechCard