import "./contact.css";
import SideBar from "@/Compt/SideBar/SideBar";
import Top from "@/Compt/Top/Top";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="Bod">
      <div className="cont">
        <SideBar />
        <div className="mainContent">
          {/* <div className="stick"> */}
          <Top />
          {/* </div> */}
          <hr />
          <div className="bottom flex">
            <div className="flex  justify-center  min-h-[100dvh] w-full">
              <div className="flex min-h-screen w-full flex-col items-center bg-White/10 backdrop-filter backdrop-blur-lg shadow-lg  p-4 md:p-6">
                <h1 className="text-center text-2xl font-bold mb-8">
                  Contact Us
                </h1>
                <div className="flex flex-col items-center w-full gap-6 lg:w-3/4 p-2 rounded-lg">
                  <Card className="w-full hover:scale-105 hover:shadow-lg mb-6 hover:bg-slate-800  hover:text-white">
                    <CardHeader>
                      <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4 text-black">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              placeholder="Enter your email"
                              type="email"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            className="min-h-[100px]"
                            id="message"
                            placeholder="Enter your message"
                          />
                        </div>
                        <Button
                          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 hover:scale-105 hover:shadow-lg"
                          variant="primary"
                        >
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                      <CardHeader>
                        <CardTitle>Contact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center justify-center p-6">
                          <PhoneIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 animate-bounce" />
                          <div className="mt-4 text-2xl font-bold">
                            +1 (555) 123-4567
                          </div>
                          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Call us anytime for support
                          </div>
                          <Button
                            className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 hover:scale-105 hover:shadow-lg"
                            variant="primary"
                          >
                            Call Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                      <CardHeader>
                        <CardTitle>Our Location</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center justify-center p-6">
                          <MapPinIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 animate-pulse" />
                          <div className="mt-4 text-2xl font-bold">
                            Ngit, Hyderabad India
                          </div>
                          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Visit us at our headquarters
                          </div>
                          <Button
                            className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 hover:scale-105 hover:shadow-lg"
                            variant="primary"
                          >
                            Get Directions
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <a href="/">To LogOut</a> */}
      </div>
    </div>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
