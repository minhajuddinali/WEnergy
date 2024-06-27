import "./About.css";
import "../../App.css";
import Top from "../../Compt/Top/Top";
import SideBar from "../../Compt/SideBar/SideBar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ClipboardIcon,
  ReceiptIcon,
  PieChartIcon,
  WalletIcon,
} from "lucide-react";
import i from "../../Assets/p2.jpeg";
// import { Separator } from "@radix-ui/react-dropdown-menu";
// import { } from "@/components/ui/dropdown-menu"
// import Header from "../Dashboard/components/Header/Header";
// import Body from "../../Compt/Body/Body";
const About = () => {
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
              <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <section className="w-full px-6 py-6 md:py-15 lg:py-20 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-3xl">
                  <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                      <div className="space-y-4 animate-fadeIn">
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                          Streamline Your Vehicle Billing
                        </h2>
                        <p className="max-w-[600px] text-white font-thick md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                          Our smart vehicle billing system is designed to
                          revolutionize the way you manage your vehicle fleets
                          billing. With a sleek and intuitive interface, youll
                          be able to effortlessly track vehicle usage, generate
                          invoices, and stay on top of your billing processes.
                        </p>
                      </div>
                      <div className="grid gap-6 animate-fadeIn">
                        <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800 border-solid border-2 shadow-lg shadow-cyan-500/50 border-black">
                          <ClipboardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-bounce" />
                          <div>
                            <h3 className="text-lg font-semibold">
                              Vehicle Usage Tracking
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Monitor your vehicle fleet usage and generate
                              detailed reports.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800 border-solid border-2 shadow-lg shadow-cyan-500/50 border-black">
                          <ReceiptIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-pulse" />
                          <div>
                            <h3 className="text-lg font-semibold">
                              Automated Invoicing
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Generate invoices with just a few clicks and
                              streamline your billing process.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800 border-solid border-2 shadow-lg shadow-cyan-500/50 border-black">
                          <PieChartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-bounce" />
                          <div>
                            <h3 className="text-lg font-semibold">
                              Comprehensive Reporting
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Access detailed reports on vehicle usage, billing,
                              and more.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800 border-solid border-2 shadow-lg shadow-cyan-500/50 border-black">
                          <WalletIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-pulse" />
                          <div>
                            <h3 className="text-lg font-semibold">
                              Secure Payments
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Accept payments securely and manage your finances
                              with ease.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="w-full py-6 md:py-15 lg:py-22">
                  <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fadeIn">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                          Unlock the Power of Smart Vehicle Billing
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                          Our smart vehicle billing system offers a range of
                          powerful features to help you streamline your vehicle
                          fleet billing, improve financial visibility, and boost
                          your overall efficiency.
                        </p>
                      </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 animate-fadeIn">
                      <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                          <li>
                            <div className="grid gap-1">
                              <h3 className="text-xl font-bold">
                                Vehicle Usage Tracking
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                Monitor your vehicle fleet usage and generate
                                detailed reports.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="grid gap-1">
                              <h3 className="text-xl font-bold">
                                Automated Invoicing
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                Generate invoices with just a few clicks and
                                streamline your billing process.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="grid gap-1">
                              <h3 className="text-xl font-bold">
                                Comprehensive Reporting
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                Access detailed reports on vehicle usage,
                                billing, and more.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="grid gap-1">
                              <h3 className="text-xl font-bold">
                                Secure Payments
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                Accept payments securely and manage your
                                finances with ease.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <img
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last animate-fadeIn"
                        src={i}
                        alt="Image"
                        height="310"
                        width="550"
                      />
                    </div>
                  </div>
                </section>
                {/* <Separator className="w-full" />
                 */}
                <br className="bg-black h-3" />
                <section className="w-full py-6 md:py-12 lg:py-20 bg-gray-200 dark:bg-gray-800">
                  <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3 animate-fadeIn">
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Experience the Power of Smart Vehicle Billing
                      </h2>
                      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Our smart vehicle billing system is designed to help you
                        streamline your vehicle fleet billing, improve financial
                        visibility, and boost your overall efficiency. Try it
                        out today and see the difference!
                      </p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-2 animate-fadeIn">
                      <form className="flex space-x-2">
                        <Input
                          className="max-w-lg flex-1 border-solid border-black border-2"
                          placeholder="Enter your email"
                          type="email"
                        />
                        <Button
                          className="hover:scale-105 hover:shadow-lg"
                          type="submit"
                        >
                          Get Started
                        </Button>
                      </form>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Sign up to experience the power of our smart vehicle
                        billing system.
                        <Link className="underline underline-offset-2" href="#">
                          Terms & Conditions
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>

                {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 animate-fadeIn">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Streamline Your Vehicle Billing?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up now and experience the power of our smart vehicle billing system.
                </p>
              </div>
              <div className="flex space-x-4 lg:justify-end">
                <div className="mx-auto w-full max-w-sm space-y-2 animate-fadeIn">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                    <Button className="hover:scale-105 hover:shadow-lg" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </section> */}
              </main>
            </div>
          </div>
        </div>
        {/* <a href="/">To LogOut</a> */}
      </div>
    </div>
  );
};

export default About;
