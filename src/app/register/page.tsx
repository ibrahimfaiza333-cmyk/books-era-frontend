export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { RegisterClient } from "@/app/PageLoaders";

export const metadata: Metadata = {
  title: "Register | Books Era",
  description: "Create an account.",
};

export default function Page() {
  return <RegisterClient />;
}
