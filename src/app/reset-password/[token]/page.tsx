export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { ResetPasswordClient } from "@/app/PageLoaders";

export const metadata: Metadata = {
  title: "Reset Password | Books Era",
  description: "Set your new password.",
};

export default function Page() {
  return <ResetPasswordClient />;
}
