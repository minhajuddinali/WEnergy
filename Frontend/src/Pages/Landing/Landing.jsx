// import { Link } from "react-router-dom";
// import {
//   NavigationMenuLink,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenu,
// } from "@/components/ui/navigation-menu";
// import {
//   MountainIcon,
//   UserIcon,
//   PhoneIcon,
//   InfoIcon,
//   RocketIcon,
//   MenuIcon,
//   GaugeIcon,
//   WalletIcon,
//   CogIcon,
// } from "lucide-react";
// import i from "./Assets/p1.jpeg";
// import { Button } from "@/components/ui/button";
// import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

// const Home = () => {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
//         <div className="w-[150px]">
//           <Link to="./Demo" className="mr-6 hidden lg:flex">
//             <MountainIcon className="h-6 w-6" />
//             {/* <span className="sr-only"></span> */}
//             <span className="ml-2 text-lg font-bold">WEnergy</span>
//           </Link>
//         </div>
//         <div className="flex w-full justify-center">
//           <NavigationMenu className="hidden lg:flex">
//             <NavigationMenuList className="ml-auto flex items-center gap-4">
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link
//                     to="./Demo.jsx"
//                     className="inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                   >
//                     <UserIcon className="mr-2 h-4 w-4" />
//                     Sign Up
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link
//                     to="./Demo.jsx"
//                     className="inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                   >
//                     <PhoneIcon className="mr-2 h-4 w-4" />
//                     Contact Us
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link
//                     to="./Demo.jsx"
//                     className="inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                   >
//                     <InfoIcon className="mr-2 h-4 w-4" />
//                     About Us
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button className="lg:hidden" size="icon" variant="outline">
//               <MenuIcon className="h-6 w-6" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left">
//             <Link to="./Demo">
//               <MountainIcon className="h-6 w-6" />
//               <span className="sr-only">Acme Inc</span>
//             </Link>
//             <div className="grid gap-2 py-6">
//               <Link
//                 to="./Demo.jsx"
//                 className="flex w-full items-center py-2 text-lg font-semibold"
//               >
//                 <UserIcon className="mr-2 h-5 w-5" />
//                 Sign Up
//               </Link>
//               <Link
//                 to="./Demo.jsx"
//                 className="flex w-full items-center py-2 text-lg font-semibold"
//               >
//                 <PhoneIcon className="mr-2 h-5 w-5" />
//                 Contact Us
//               </Link>
//               <Link
//                 to="./Demo.jsx"
//                 className="flex w-full items-center py-2 text-lg font-semibold"
//               >
//                 <InfoIcon className="mr-2 h-5 w-5" />
//                 About Us
//               </Link>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 border-b">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Streamline Your Vehicle Billing
//                   </h1>
//                   <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                     Our smart vehicle billing system takes the hassle out of
//                     managing your fleet expenses. Get accurate, real-time
//                     insights to optimize your costs.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Link
//                     to="./Demo.jsx"
//                     className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                   >
//                     <RocketIcon className="mr-2 h-4 w-4" />
//                     Get Started
//                   </Link>
//                 </div>
//               </div>
//               <div>
//                 <img src={i} alt="Hero" className="w-[220px] h-[220px]" />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//               <div className="flex flex-col items-start space-y-2">
//                 <GaugeIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
//                 <h3 className="text-xl font-bold">Real-Time Insights</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Get accurate, real-time data on your fleet fuel consumption,
//                   mileage, and more.
//                 </p>
//               </div>
//               <div className="flex flex-col items-start space-y-2">
//                 <WalletIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
//                 <h3 className="text-xl font-bold">Cost Optimization</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Identify areas to reduce expenses and optimize your fleets
//                   operational costs.
//                 </p>
//               </div>
//               <div className="flex flex-col items-start space-y-2">
//                 <CogIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
//                 <h3 className="text-xl font-bold">Automated Billing</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Streamline your billing process with automated invoicing and
//                   payment tracking.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                   What Our Customers Say
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   Hear from our satisfied customers about how our smart vehicle
//                   billing system has transformed their business.
//                 </p>
//               </div>
//               <div className="grid w-full max-w-[1000px] gap-6 sm:grid-cols-2">
//                 <blockquote className="flex flex-col justify-between space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-700 md:p-8">
//                   <p className="text-gray-600 dark:text-gray-200">
//                     This billing system has streamlined our fleet management
//                     process. The real-time insights have been invaluable.
//                   </p>
//                   <footer className="text-sm text-gray-500 dark:text-gray-400">
//                     <span>Jane Doe</span>
//                     <span>Fleet Manager, Acme Logistics</span>
//                   </footer>
//                 </blockquote>
//                 <blockquote className="flex flex-col justify-between space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-700 md:p-8">
//                   <p className="text-gray-600 dark:text-gray-200">
//                     We have seen significant cost savings since implementing
//                     this system. Highly recommend!
//                   </p>
//                   <footer className="text-sm text-gray-500 dark:text-gray-400">
//                     <span>John Smith</span>
//                     <span>Operations Director, XYZ Transport</span>
//                   </footer>
//                 </blockquote>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;

// import { MountainIcon } from "lucide-react";
import Nav from "../../Compt/NavBar/Nav";
import { Link } from "react-router-dom";
import i from "../../Assets/p1.jpeg";
import j from "../../Assets/electric-car-docked-charging-station.jpg";
// import {
//   MountainIcon,
//   UserIcon,
//   PhoneIcon,
//   InfoIcon,
//   RocketIcon,
//   MenuIcon,
//   GaugeIcon,
//   WalletIcon,
//   CogIcon,
// } from "lucide-react";

const Landing = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-[100dvh]">
        {/* <header className="px-4 lg:px-6 h-14 flex">
        <div className="pl-0 flex justify-center items-start ">
          <MountainIcon className="h-6 w-6 mr-2" />
          <h3 className="text-xl font-bold">WEnergy</h3>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1E3A8A]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Sign In
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-[#1E3A8A] border-[#1E3A8A] bg-white px-4 py-2 text-sm font-medium text-[#1E3A8A] shadow-sm transition-colors hover:bg-[#1E3A8A]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Contact
          </Link>
        </div>
      </header> */}
        {/* <header className="px-4 lg:px-6 h-14 flex justify-between items-center">
        <div className="flex items-center">
          <MountainIcon className="h-6 w-6 mr-2" />
          <h3 className="text-xl font-bold">WEnergy</h3>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1E3A8A]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            to="/sign-in"
          >
            Sign In
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-[#1E3A8A] bg-white px-4 py-2 text-sm font-medium text-[#1E3A8A] shadow-sm transition-colors hover:bg-[#1E3A8A]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </header> */}
        {/* <nav className="bg-white border-gray-200 px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <MountainIcon className="h-6 w-6 mr-2" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              WEnergy
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
            <button
              type="button"
              className="ml-3 text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:border-blue-600 dark:text-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact
            </button>
          </div>
        </div>
      </nav> */}

        <main className="flex-1">
          <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-3xl">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                      Unlock the Future of Fueling with AI-Powered
                      Personalization
                    </h1>
                    <p className="max-w-[600px] text-gray-200 md:text-xl dark:text-gray-300">
                      Revolutionize your fuel and convenience retail experience
                      with our cutting-edge AI-powered solution. Identify
                      vehicles, provide personalized offers, and streamline the
                      fueling process for your customers.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      to={"/login"}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#1E3A8A] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Started
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-white border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <img
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  src={i}
                  alt="Hero"
                  height="600"
                  width="600"
                />
              </div>
            </div>
          </section>
          <section className="w-full mt-6 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 border-solid border-4 border-black rounded-3xl">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Revolutionize the Fueling Experience
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our cutting-edge AI technology identifies vehicles, provides
                    personalized offers, and streamlines the fueling process for
                    your customers. Unlock new levels of efficiency and customer
                    satisfaction.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last hover-scale-50"
                  height="310"
                  src={j}
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <div className="flex items-center">
                          <ComputerIcon className="h-6 w-6 animate-pulse mr-2" />
                          <h3 className="text-xl font-bold">Computer Vision</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                          Our advanced computer vision technology accurately
                          identifies vehicles and their details.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <div className="flex items-center">
                          <BrainIcon className="h-6 w-6 animate-bounce mr-2" />
                          <h3 className="text-xl font-bold">
                            Machine Learning
                          </h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                          Powerful machine learning models analyze customer data
                          to provide personalized offers and recommendations.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <div className="flex items-center">
                          <CameraIcon className="h-6 w-6 animate-spin mr-2" />
                          <h3 className="text-xl font-bold">Smart Cameras</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                          Our smart cameras capture vehicle details and trigger
                          personalized experiences at the pump.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className=" w-5/6  ml-31 pl-60  hover:boder-solid hover:border-4 hover:border-green-900 hover:mt-6 hover:bg-black hover:text-white hover:rounded-3xl hover:ml-32  md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Streamline the Fueling Journey
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From vehicle registration to personalized offers, our
                  AI-powered solution transforms the fueling experience for your
                  customers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#1E3A8A] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#1E3A8A]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#1E3A8A] border-[#1E3A8A] bg-white px-8 text-sm font-medium text-[#1E3A8A] shadow-sm transition-colors hover:bg-[#1E3A8A]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  The Customer Journey
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover how our AI-powered solution transforms the fueling
                  experience for your customers.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-[40px_1fr] gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A] text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vehicle Registration</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Customers can easily register their vehicles through our
                      mobile app or website, enabling seamless identification at
                      the pump.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[40px_1fr] gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A] text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Automatic Identification
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our smart cameras instantly recognize registered vehicles
                      and trigger personalized experiences at the pump.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[40px_1fr] gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A] text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Personalized Offers</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Leveraging customer data and machine learning, we provide
                      hyper-personalized offers and recommendations to enhance
                      the fueling experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-black text-white">
          <p className="text-xs text-white">
            © 2024 WEnergy. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

// function AtSignIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="4" />
//       <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
//     </svg>
//   );
// }

function BrainIcon(props) {
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
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function ComputerIcon(props) {
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

export default Landing;
