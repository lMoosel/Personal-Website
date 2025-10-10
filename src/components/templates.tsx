import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Templates() {

    let templateArr:Array<string> = [
        "landingpage", "siteanalytics", "dashboard"
    ]

    return (
            <Carousel className='bg-red-100 flex w-3/4 h-1/4 center items-center align-center'>
                <CarouselContent>
                    {
                        templateArr.map((item) =>
                            <CarouselItem className='' key={item}>
                                <div className='flex w-full center items-center align-center'>
                                    <a className="text-xl border-2 border-black p-4 rounded-xl h-full w-full" href={`http://localhost:3000/templates/${item}`}>{item}</a>
                                </div>
                            </CarouselItem>
                        )
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
    )
}