import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"
import Link from "next/link"

// Sample expert data
const experts = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
    category: "Tech & AI",
    rating: 4.9,
    reviews: 124,
    hourlyRate: 150,
    image: "https://imgs.search.brave.com/6KgB0swi7uEPq8VmKCgyqUH1FSAKgNYnJHnnI9PVN5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/ZWFjaGVyLXdpdGgt/Z2xhc3Nlcy1jbGFz/c18yMy0yMTQ4NjY1/ODk5LmpwZz9zZW10/PWFpc19oeWJyaWQ",
    specialties: ["Machine Learning", "NLP", "AI Ethics"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Startup Advisor & VC",
    category: "Business",
    rating: 4.8,
    reviews: 98,
    hourlyRate: 200,
    image: "https://imgs.search.brave.com/uoSo1qTDhuVc-xwQ3skLcqw1WE-dlQWXvqMdfRd1Au0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/MjQ4NDYzMS9waG90/by9wb3J0cmFpdC1v/Zi1hLWJsYWNrLWJ1/c2luZXNzbWFuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VjRMTDVmTXh0VWdJ/ZjBaR0l4VDNINWMy/amZEaDVCa3ZaSlNt/WjhQUDBBPQ",
    specialties: ["Fundraising", "Growth Strategy", "Product-Market Fit"],
  },
  {
    id: 3,
    name: "Jessica Taylor",
    title: "Senior Career Coach",
    category: "Career",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 120,
    image: "https://imgs.search.brave.com/_Dlk07xqWeH-j0UE8gKc_hHH_ziVeUyOvtBZJVBBBRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9icnVuZXR0ZS10/ZWFjaGVyLW5lYXIt/d2hpdGUtYm9hcmRf/MTA0ODk0NC02ODQ2/OTYyLmpwZz9zZW10/PWFpc19oeWJyaWQ",
    specialties: ["Interview Prep", "Resume Building", "Career Transitions"],
  },
]

export default function ExpertHighlights() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Experts</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connect with top professionals across various industries
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => (
            <Card key={expert.id} className="expert-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={expert.image} alt={expert.name} />
                      <AvatarFallback>
                        {expert.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{expert.name}</h3>
                      <p className="text-sm text-muted-foreground">{expert.title}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{expert.category}</Badge>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{expert.rating}</span>
                    <span className="text-muted-foreground text-sm">({expert.reviews} reviews)</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {expert.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <span className="font-semibold">${expert.hourlyRate}</span>
                  <span className="text-muted-foreground"> / hour</span>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/experts/${expert.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/experts">View All Mentors</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

