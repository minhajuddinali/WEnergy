import {
  InputOTPSlot,
  InputOTPGroup,
  InputOTP,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 sm:px-6 md:px-8 ">
      <div className="flex  flex-col h-full max-w-xl mt-5 bg-slate-200 w-full space-y-6 border-2 border-black border-solid rounded-3xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Verify Your Identity</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Enter the 6-digit code sent to your phone.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4 px-6 pb-3 mb-6">
            <InputOTP maxLength={6} className="p-4">
              <InputOTPGroup className="border border-black rounded-sm mb-1">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Link to="/fbill">
              <Button className="w-full" type="submit">
                Verify Code
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
